import * as THREE from "three";

export type OceanHandle = {
  setScroll: (t: number) => void;
  setPointer: (ndcX: number, ndcY: number) => void;
  ripple: () => void;
  breach: () => void;
  dispose: () => void;
};

export type OceanFrame = {
  lunge: number;
  todName: string;
};

type MountOpts = {
  reduced: boolean;
  onFrame?: (frame: OceanFrame) => void;
};

const BODY_VS = /* glsl */ `
  varying vec3 vN;
  varying vec3 vWorld;
  varying vec3 vLocal;
  varying vec2 vUv;
  void main() {
    vUv = uv;
    vLocal = position;
    vec4 world = modelMatrix * vec4(position, 1.0);
    vWorld = world.xyz;
    vN = normalize(mat3(modelMatrix) * normal);
    gl_Position = projectionMatrix * viewMatrix * world;
  }
`;

const BODY_FS = /* glsl */ `
  uniform float uTod;
  uniform vec3 uSunDir;
  uniform float uSkin;
  varying vec3 vN;
  varying vec3 vWorld;
  varying vec3 vLocal;
  varying vec2 vUv;
  void main() {
    vec3 N = normalize(vN);
    vec3 V = normalize(cameraPosition - vWorld);
    float ndv = clamp(dot(N, V), 0.0, 1.0);
    float fres = pow(1.0 - ndv, 2.5);
    float dawn = smoothstep(0.0, 0.12, uTod) * (1.0 - smoothstep(0.18, 0.36, uTod));
    float dusk = smoothstep(0.5, 0.68, uTod) * (1.0 - smoothstep(0.72, 0.86, uTod));
    float night = smoothstep(0.74, 0.95, uTod);
    float belly = smoothstep(0.12, -0.28, vLocal.y);
    vec3 backCol = vec3(0.07, 0.24, 0.32);
    vec3 bellyCol = vec3(0.78, 0.82, 0.78);
    vec3 col = mix(backCol, bellyCol, belly * step(0.5, uSkin));
    if (uSkin > 0.5) {
      float sx = sin(vLocal.z * 22.0 + vLocal.y * 10.0);
      float sy = sin(vLocal.x * 36.0 + vLocal.z * 8.0);
      float scale = smoothstep(0.05, 0.85, sx * sy * 0.5 + 0.5);
      col *= 0.9 + scale * 0.14;
      float scar = smoothstep(0.03, 0.0, abs(vLocal.y - 0.02 - sin(vLocal.z * 4.0) * 0.02));
      scar *= step(-0.2, vLocal.z) * step(vLocal.z, 0.7);
      float bite = smoothstep(0.16, 0.04, distance(vLocal.xy, vec2(0.12, 0.02)));
      col = mix(col, vec3(0.42, 0.16, 0.12), clamp(scar * 0.55 + bite * 0.7, 0.0, 1.0));
    }
    vec3 L = normalize(uSunDir);
    float spec = pow(max(dot(N, normalize(L + V)), 0.0), 48.0);
    col += vec3(0.85, 0.95, 1.0) * spec * 0.7;
    vec3 rim = mix(vec3(0.05, 0.95, 1.0), vec3(1.0, 0.45, 0.28), clamp(dawn + dusk, 0.0, 1.0));
    rim = mix(rim, vec3(0.25, 1.0, 0.72), night);
    col += rim * fres * 0.75;
    col = mix(col, col * vec3(1.25, 0.78, 0.58), (dawn + dusk) * 0.4);
    col = mix(col, col * vec3(0.45, 0.7, 0.9), night * 0.65);
    gl_FragColor = vec4(col, 1.0);
  }
`;

const WATER_VS = /* glsl */ `
  uniform float uTime;
  uniform float uAmp;
  varying vec3 vWorld;
  varying vec3 vN;
  varying float vH;
  float wave(vec2 p) {
    float w = sin(p.x * 0.32 + uTime * 0.85) * 0.55;
    w += cos(p.y * 0.27 - uTime * 0.62) * 0.4;
    w += sin((p.x + p.y) * 0.52 + uTime * 1.25) * 0.22;
    w += sin(p.x * 1.15 - p.y * 0.8 + uTime * 1.6) * 0.08;
    return w;
  }
  void main() {
    vec3 p = position;
    float h = wave(p.xy) * uAmp;
    float e = 0.28;
    float hx = wave(p.xy + vec2(e, 0.0)) * uAmp;
    float hy = wave(p.xy + vec2(0.0, e)) * uAmp;
    p.z += h;
    vH = h;
    vec3 n = normalize(vec3(-(hx - h) / e, -(hy - h) / e, 1.0));
    vec4 world = modelMatrix * vec4(p, 1.0);
    vWorld = world.xyz;
    vN = normalize(mat3(modelMatrix) * n);
    gl_Position = projectionMatrix * viewMatrix * world;
  }
`;

const WATER_FS = /* glsl */ `
  uniform float uTime;
  uniform float uTod;
  uniform vec3 uSunDir;
  uniform vec2 uShark;
  uniform vec2 uRipple;
  uniform float uRippleAge;
  varying vec3 vWorld;
  varying vec3 vN;
  varying float vH;
  void main() {
    vec3 N = normalize(vN);
    vec3 V = normalize(cameraPosition - vWorld);
    float fres = pow(1.0 - max(dot(N, V), 0.0), 3.0);
    float dawn = smoothstep(0.0, 0.15, uTod) * (1.0 - smoothstep(0.2, 0.4, uTod));
    float dusk = smoothstep(0.5, 0.68, uTod) * (1.0 - smoothstep(0.74, 0.88, uTod));
    float night = smoothstep(0.75, 1.0, uTod);
    vec3 deep = mix(vec3(0.02, 0.1, 0.2), vec3(0.01, 0.03, 0.07), night);
    vec3 shallow = mix(vec3(0.04, 0.55, 0.6), vec3(0.03, 0.2, 0.32), night);
    vec2 c = vWorld.xz * 0.42;
    float cau = sin(c.x * 5.5 + uTime * 1.3) * sin(c.y * 5.2 - uTime);
    cau = smoothstep(0.15, 0.95, cau * cau);
    vec3 col = mix(deep, shallow, fres * 0.7 + cau * 0.18);
    vec3 warm = vec3(0.95, 0.42, 0.22);
    col = mix(col, warm, (dawn + dusk) * fres * 0.5);
    vec3 L = normalize(uSunDir);
    float spec = pow(max(dot(N, normalize(L + V)), 0.0), mix(50.0, 140.0, 1.0 - night));
    col += vec3(1.0, 0.94, 0.82) * spec * (1.0 - night * 0.8) * 0.9;
    float bio = sin(vWorld.x * 2.4 + uTime * 0.8) * sin(vWorld.z * 2.1 - uTime * 0.6);
    col += vec3(0.15, 0.95, 0.85) * smoothstep(0.55, 1.0, bio) * night * 0.55;
    float sd = distance(vWorld.xz, uShark);
    col *= 1.0 - smoothstep(3.2, 0.25, sd) * 0.4;
    float rd = distance(vWorld.xz, uRipple);
    float ring = sin(16.0 * rd - uRippleAge * 12.0) * exp(-rd * 0.42) * exp(-uRippleAge * 0.45);
    col += vec3(0.65, 0.9, 1.0) * max(ring, 0.0) * 0.45;
    col = mix(col, vec3(0.82, 0.93, 0.94), smoothstep(0.28, 0.62, vH) * 0.28);
    gl_FragColor = vec4(col, 1.0);
  }
`;

const SKY_VS = /* glsl */ `
  varying vec3 vDir;
  void main() {
    vec4 w = modelMatrix * vec4(position, 1.0);
    vDir = position;
    gl_Position = projectionMatrix * viewMatrix * w;
  }
`;

const SKY_FS = /* glsl */ `
  uniform float uTod;
  uniform vec3 uSunDir;
  varying vec3 vDir;
  void main() {
    vec3 dir = normalize(vDir);
    float h = dir.y;
    float dawn = smoothstep(0.0, 0.14, uTod) * (1.0 - smoothstep(0.2, 0.4, uTod));
    float dusk = smoothstep(0.5, 0.68, uTod) * (1.0 - smoothstep(0.74, 0.9, uTod));
    float night = smoothstep(0.76, 1.0, uTod);
    vec3 zenith = mix(vec3(0.04, 0.28, 0.42), vec3(0.005, 0.01, 0.04), night);
    vec3 hor = mix(vec3(0.45, 0.72, 0.78), vec3(0.95, 0.4, 0.24), clamp(dawn + dusk, 0.0, 1.0));
    hor = mix(hor, vec3(0.02, 0.04, 0.08), night);
    vec3 col = mix(hor, zenith, smoothstep(-0.08, 0.55, h));
    float sun = pow(max(dot(dir, normalize(uSunDir)), 0.0), 90.0);
    col += vec3(1.0, 0.86, 0.55) * sun * (1.0 - night);
    float stars = step(0.996, fract(sin(dot(dir.xy * 40.0, vec2(12.9898, 78.233))) * 43758.5453));
    col += stars * night * smoothstep(0.05, 0.4, h);
    gl_FragColor = vec4(col, 1.0);
  }
`;

const POINT_VS = /* glsl */ `
  attribute float aSeed;
  uniform float uTime;
  varying float vSeed;
  void main() {
    vSeed = aSeed;
    vec3 p = position;
    p.y = mod(position.y + uTime * (0.12 + aSeed * 0.35) + 1.5, 8.5) - 1.4;
    p.x += sin(uTime * 0.35 + aSeed * 18.0) * 0.35;
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_PointSize = (1.6 + aSeed * 3.4) * (7.5 / max(0.2, -mv.z));
    gl_Position = projectionMatrix * mv;
  }
`;

const POINT_FS = /* glsl */ `
  uniform float uTod;
  varying float vSeed;
  void main() {
    float d = length(gl_PointCoord - vec2(0.5));
    if (d > 0.5) discard;
    float a = smoothstep(0.5, 0.05, d);
    float night = smoothstep(0.75, 1.0, uTod);
    vec3 col = mix(vec3(0.7, 0.92, 0.95), vec3(0.35, 1.0, 0.75), vSeed);
    gl_FragColor = vec4(col, a * (0.28 + night * 0.55));
  }
`;

const EYE_FS = /* glsl */ `
  uniform float uGlow;
  void main() {
    vec3 dim = vec3(0.02, 0.12, 0.1);
    vec3 hot = vec3(0.45, 1.0, 0.82);
    vec3 col = mix(dim, hot, uGlow);
    col += hot * uGlow * 0.8;
    gl_FragColor = vec4(col, 1.0);
  }
`;

function radii(t: number) {
  const samples = [0.012, 0.055, 0.12, 0.22, 0.32, 0.36, 0.34, 0.26, 0.16, 0.09, 0.045, 0.02, 0.008];
  const x = Math.min(1, Math.max(0, t)) * (samples.length - 1);
  const i = Math.min(samples.length - 2, Math.floor(x));
  const f = x - i;
  const r = samples[i] * (1 - f) + samples[i + 1] * f;
  return { rx: r * 0.72, ry: r };
}

function tFromZ(z: number) {
  const nose = 1.9;
  const tail = -2.25;
  return (nose - z) / (nose - tail);
}

function sectionGeometry(z0: number, z1: number, segs: number, radial: number, pivotZ: number) {
  const positions: number[] = [];
  const uvs: number[] = [];
  const indices: number[] = [];
  for (let i = 0; i <= segs; i++) {
    const u = i / segs;
    const z = THREE.MathUtils.lerp(z0, z1, u);
    const t = tFromZ(z);
    const { rx, ry } = radii(t);
    for (let j = 0; j <= radial; j++) {
      const a = (j / radial) * Math.PI * 2;
      let cy = Math.cos(a);
      const cx = Math.sin(a);
      if (cy < 0) cy *= 0.64;
      positions.push(cx * rx, cy * ry, z);
      uvs.push(j / radial, t);
    }
  }
  for (let i = 0; i < segs; i++) {
    for (let j = 0; j < radial; j++) {
      const a = i * (radial + 1) + j;
      const b = a + radial + 1;
      indices.push(a, b, a + 1, b, b + 1, a + 1);
    }
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
  geo.setAttribute("uv", new THREE.Float32BufferAttribute(uvs, 2));
  geo.setIndex(indices);
  geo.translate(0, 0, -pivotZ);
  geo.computeVertexNormals();
  return geo;
}

function finMesh(points: Array<[number, number]>, material: THREE.Material) {
  const shape = new THREE.Shape();
  shape.moveTo(points[0][0], points[0][1]);
  for (let i = 1; i < points.length; i++) shape.lineTo(points[i][0], points[i][1]);
  shape.closePath();
  const geo = new THREE.ExtrudeGeometry(shape, { depth: 0.03, bevelEnabled: false });
  geo.translate(0, 0, -0.015);
  geo.rotateY(Math.PI / 2);
  geo.scale(0.62, 0.62, 1);
  geo.computeVertexNormals();
  return new THREE.Mesh(geo, material);
}

function todName(t: number) {
  if (t < 0.38) return "Dawn";
  if (t < 0.68) return "Golden hour";
  if (t < 0.82) return "Dusk";
  return "Night bioluminescence";
}

export function mountOcean(canvas: HTMLCanvasElement, opts: MountOpts): OceanHandle {
  const reduced = opts.reduced;
  const mobile = window.matchMedia("(max-width: 760px)").matches;
  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: !mobile,
    alpha: false,
    powerPreference: "high-performance",
  });
  renderer.setClearColor(0x051a2e, 1);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, mobile ? 1.25 : 1.6));

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(46, 1, 0.1, 180);
  camera.position.set(0, 1.35, 9.2);

  const sunDir = new THREE.Vector3(0.35, 0.55, 0.25);
  const sharkUniforms = {
    uTod: { value: 0.55 },
    uSunDir: { value: sunDir },
    uSkin: { value: 1 },
  };
  const finUniforms = {
    uTod: sharkUniforms.uTod,
    uSunDir: sharkUniforms.uSunDir,
    uSkin: { value: 0 },
  };
  const bodyMat = new THREE.ShaderMaterial({
    uniforms: sharkUniforms,
    vertexShader: BODY_VS,
    fragmentShader: BODY_FS,
  });
  const finMat = new THREE.ShaderMaterial({
    uniforms: finUniforms,
    vertexShader: BODY_VS,
    fragmentShader: BODY_FS,
    side: THREE.DoubleSide,
  });

  const rig = new THREE.Group();
  const model = new THREE.Group();
  model.rotation.y = Math.PI;
  rig.add(model);

  const headPivot = new THREE.Group();
  headPivot.position.set(0, 0, 0.95);
  const head = new THREE.Mesh(sectionGeometry(1.9, 0.9, 14, mobile ? 16 : 24, 0.95), bodyMat);
  headPivot.add(head);

  const eyeGlow = { value: 0 };
  const eyeMat = new THREE.ShaderMaterial({
    uniforms: { uGlow: eyeGlow },
    vertexShader: BODY_VS,
    fragmentShader: EYE_FS,
  });
  const eyeSpriteMat = new THREE.SpriteMaterial({
    color: 0x7dffe6,
    transparent: true,
    opacity: 0,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });
  for (const x of [0.16, -0.16]) {
    const socket = new THREE.Mesh(
      new THREE.SphereGeometry(0.055, 14, 14),
      new THREE.MeshBasicMaterial({ color: 0x06110e }),
    );
    const iris = new THREE.Mesh(new THREE.SphereGeometry(0.032, 12, 12), eyeMat);
    iris.position.z = 0.03;
    const halo = new THREE.Sprite(eyeSpriteMat);
    halo.scale.set(0.14, 0.14, 0.14);
    halo.position.z = 0.04;
    const g = new THREE.Group();
    g.add(socket, iris, halo);
    g.position.set(x * 0.55, 0.045, 0.28);
    headPivot.add(g);
  }
  const mouth = new THREE.Mesh(
    new THREE.SphereGeometry(0.07, 12, 8),
    new THREE.MeshBasicMaterial({ color: 0x140606 }),
  );
  mouth.scale.set(0.55, 0.28, 1.15);
  mouth.position.set(0, -0.045, 0.42);
  headPivot.add(mouth);
  model.add(headPivot);

  const torso = new THREE.Mesh(sectionGeometry(1.02, -0.25, 16, mobile ? 16 : 24, 0), bodyMat);
  model.add(torso);

  const dorsal = finMesh(
    [
      [0, 0],
      [0.2, 0.05],
      [0.48, 0.62],
      [0.95, 0.06],
      [1.05, 0],
    ],
    finMat,
  );
  dorsal.position.set(0, 0.28, 0.62);
  model.add(dorsal);

  const pecShape: Array<[number, number]> = [
    [0, 0],
    [0.15, -0.02],
    [0.72, -0.22],
    [0.48, -0.42],
    [0.05, -0.1],
  ];
  const pecR = finMesh(pecShape, finMat);
  pecR.position.set(0.18, -0.02, 0.78);
  pecR.rotation.z = -0.5;
  const pecL = finMesh(
    pecShape.map(([x, y]) => [-x, y]),
    finMat,
  );
  pecL.position.set(-0.18, -0.02, 0.78);
  pecL.rotation.z = 0.5;
  model.add(pecR, pecL);

  for (const side of [1, -1]) {
    for (let g = 0; g < 4; g++) {
      const slit = new THREE.Mesh(
        new THREE.BoxGeometry(0.012, 0.07, 0.01),
        new THREE.MeshBasicMaterial({ color: 0x0a1c22 }),
      );
      slit.position.set(side * 0.2, 0.02, 0.55 - g * 0.045);
      slit.rotation.z = side * 0.3;
      model.add(slit);
    }
  }

  const tailPivot = new THREE.Group();
  tailPivot.position.set(0, 0, -0.2);
  const rear = new THREE.Mesh(sectionGeometry(-0.12, -2.25, 16, mobile ? 14 : 20, -0.2), bodyMat);
  tailPivot.add(rear);
  const caudal = finMesh(
    [
      [0, 0.02],
      [0.25, 0.42],
      [-0.2, 0.98],
      [-0.55, 0.62],
      [0.02, 0.05],
      [-0.62, -0.58],
      [-0.18, -0.98],
      [0.22, -0.32],
    ],
    finMat,
  );
  caudal.position.set(0, 0, -1.15);
  tailPivot.add(caudal);
  model.add(tailPivot);

  rig.scale.setScalar(mobile ? 0.78 : 0.95);
  scene.add(rig);

  const waterUniforms = {
    uTime: { value: 0 },
    uAmp: { value: reduced ? 0.18 : mobile ? 0.34 : 0.48 },
    uTod: { value: 0.55 },
    uSunDir: { value: sunDir },
    uShark: { value: new THREE.Vector2() },
    uRipple: { value: new THREE.Vector2(2, -1) },
    uRippleAge: { value: 8 },
  };
  const water = new THREE.Mesh(
    new THREE.PlaneGeometry(90, 90, mobile ? 48 : 110, mobile ? 48 : 110),
    new THREE.ShaderMaterial({
      uniforms: waterUniforms,
      vertexShader: WATER_VS,
      fragmentShader: WATER_FS,
    }),
  );
  water.rotation.x = -Math.PI / 2;
  scene.add(water);

  const skyUniforms = { uTod: { value: 0.55 }, uSunDir: { value: sunDir } };
  const sky = new THREE.Mesh(
    new THREE.SphereGeometry(70, 28, 16),
    new THREE.ShaderMaterial({
      uniforms: skyUniforms,
      vertexShader: SKY_VS,
      fragmentShader: SKY_FS,
      side: THREE.BackSide,
      depthWrite: false,
    }),
  );
  scene.add(sky);

  const pCount = mobile ? 160 : 460;
  const pPos = new Float32Array(pCount * 3);
  const pSeed = new Float32Array(pCount);
  for (let i = 0; i < pCount; i++) {
    pPos[i * 3] = (Math.random() - 0.5) * 46;
    pPos[i * 3 + 1] = Math.random() * 7 - 1;
    pPos[i * 3 + 2] = (Math.random() - 0.5) * 36;
    pSeed[i] = Math.random();
  }
  const pGeo = new THREE.BufferGeometry();
  pGeo.setAttribute("position", new THREE.BufferAttribute(pPos, 3));
  pGeo.setAttribute("aSeed", new THREE.BufferAttribute(pSeed, 1));
  const plankton = new THREE.Points(
    pGeo,
    new THREE.ShaderMaterial({
      uniforms: { uTime: waterUniforms.uTime, uTod: waterUniforms.uTod },
      vertexShader: POINT_VS,
      fragmentShader: POINT_FS,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    }),
  );
  scene.add(plankton);

  const fishCount = mobile ? 14 : 32;
  const fishGeo = new THREE.ConeGeometry(0.045, 0.26, 5);
  fishGeo.rotateX(Math.PI / 2);
  const fishMat = new THREE.MeshStandardMaterial({
    color: 0x1f8c96,
    metalness: 0.45,
    roughness: 0.32,
    emissive: 0x042e32,
  });
  const school = new THREE.InstancedMesh(fishGeo, fishMat, fishCount);
  const dummy = new THREE.Object3D();
  const fishPhase = Array.from({ length: fishCount }, () => Math.random() * Math.PI * 2);
  scene.add(school);

  const hemi = new THREE.HemisphereLight(0xb7e4ea, 0x061018, 0.85);
  const sun = new THREE.DirectionalLight(0xfff0d2, 1.35);
  sun.position.set(6, 8, 4);
  scene.add(hemi, sun);

  const splashCount = 36;
  const splashPos = new Float32Array(splashCount * 3);
  const splashGeo = new THREE.BufferGeometry();
  splashGeo.setAttribute("position", new THREE.BufferAttribute(splashPos, 3));
  const splash = new THREE.Points(
    splashGeo,
    new THREE.PointsMaterial({
      color: 0xe7f7ff,
      size: 0.09,
      transparent: true,
      opacity: 0,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    }),
  );
  scene.add(splash);
  const splashVel = Array.from({ length: splashCount }, () => new THREE.Vector3());
  let splashLife = 0;

  let scrollTarget = 0.55;
  let tod = 0.55;
  let pointerX = 0;
  let pointerY = 0.2;
  let lunge = -1;
  let nextLunge = reduced ? 1e9 : 5.5;
  let lungePeak = false;
  const heading = new THREE.Object3D();
  const facing = new THREE.Object3D();
  const nose = new THREE.Vector3();
  const projected = new THREE.Vector3();

  function resize() {
    const w = canvas.clientWidth || window.innerWidth;
    const h = canvas.clientHeight || window.innerHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / Math.max(1, h);
    camera.updateProjectionMatrix();
  }
  resize();
  window.addEventListener("resize", resize);

  let raf = 0;
  let last = performance.now();
  let running = true;

  function burst(origin: THREE.Vector3) {
    splash.position.copy(origin);
    for (let i = 0; i < splashCount; i++) {
      splashPos[i * 3] = 0;
      splashPos[i * 3 + 1] = 0;
      splashPos[i * 3 + 2] = 0;
      splashVel[i].set((Math.random() - 0.5) * 2.4, Math.random() * 2.2, (Math.random() - 0.5) * 2.4);
    }
    splashGeo.attributes.position.needsUpdate = true;
    splashLife = 1;
    (splash.material as THREE.PointsMaterial).opacity = 0.9;
  }

  function frame(now: number) {
    if (!running) return;
    const dt = Math.min(0.033, (now - last) / 1000);
    last = now;
    const time = now / 1000;
    tod = THREE.MathUtils.damp(tod, scrollTarget, 2.2, dt);
    waterUniforms.uTime.value = time;
    waterUniforms.uTod.value = tod;
    skyUniforms.uTod.value = tod;
    sharkUniforms.uTod.value = tod;
    waterUniforms.uRippleAge.value += dt;

    const dayLift = Math.sin((tod - 0.05) * Math.PI);
    sunDir.set(Math.sin(tod * Math.PI) * 0.8, 0.18 + Math.max(0.05, dayLift) * 0.7, 0.35).normalize();
    sun.intensity = 0.35 + (1 - Math.min(1, Math.max(0, (tod - 0.7) / 0.3))) * 1.1;
    sun.color.set(tod > 0.72 ? 0x8fb4ff : tod > 0.55 || tod < 0.2 ? 0xffb088 : 0xfff0d2);
    hemi.intensity = 0.35 + (1 - (tod > 0.8 ? 1 : 0)) * 0.55;
    fishMat.emissiveIntensity = tod > 0.75 ? 0.8 : 0.15;

    const wide = window.innerWidth > 760;
    const x = (wide ? 1.15 : 0) + Math.sin(time * 0.22) * 0.9;
    const z = 2.15 + Math.cos(time * 0.18) * 0.45;
    const y = 0.2 + Math.sin(time * 0.7) * 0.05;
    const vx = Math.cos(time * 0.22) * 0.9 * 0.22;
    const vz = -Math.sin(time * 0.18) * 0.45 * 0.18;

    if (!reduced && lunge < 0 && time > nextLunge) {
      lunge = 0;
      lungePeak = false;
      nextLunge = time + 8.2 + Math.random() * 2.2;
    }
    let punch = 0;
    if (lunge >= 0) {
      lunge += dt / 2.35;
      const s = Math.sin(Math.min(lunge, 1) * Math.PI);
      punch = Math.pow(s, 0.62);
      if (lunge >= 1) lunge = -1;
    }

    const breach = new THREE.Vector3(x * 0.15, 0.72, 5.6);
    rig.position.set(
      THREE.MathUtils.lerp(x, breach.x, punch),
      THREE.MathUtils.lerp(y, breach.y, punch),
      THREE.MathUtils.lerp(z, breach.z, punch),
    );

    heading.position.copy(rig.position);
    heading.lookAt(rig.position.x + vx, rig.position.y, rig.position.z + vz);
    facing.position.copy(rig.position);
    facing.lookAt(camera.position.x, camera.position.y - 0.2, camera.position.z);
    rig.quaternion.copy(heading.quaternion).slerp(facing.quaternion, punch);
    rig.rotateZ(Math.sin(time * 0.85) * 0.07 * (1 - punch));

    tailPivot.rotation.y = Math.sin(time * 5.2) * 0.46 * (reduced ? 0.25 : 1) * (1 - punch * 0.4);
    tailPivot.rotation.x = Math.sin(time * 2.4) * 0.04;

    nose.set(0, 0.05, 1.5);
    headPivot.localToWorld(nose);
    projected.copy(nose).project(camera);
    const dx = pointerX - projected.x;
    const dy = pointerY - projected.y;
    const dist = Math.hypot(dx, dy);
    const hover = dist < 0.55 ? 1 - dist / 0.55 : 0;
    const glow = Math.max(hover, punch * 0.85, tod > 0.8 ? 0.35 : 0);
    eyeGlow.value = THREE.MathUtils.damp(eyeGlow.value, glow, 6, dt);
    eyeSpriteMat.opacity = eyeGlow.value * 0.85;
    headPivot.rotation.y = THREE.MathUtils.damp(headPivot.rotation.y, dx * 0.7 * Math.max(hover, 0.15), 4, dt);
    headPivot.rotation.x = THREE.MathUtils.damp(headPivot.rotation.x, -dy * 0.35 * Math.max(hover, 0.1), 4, dt);

    const sharkWorld = new THREE.Vector3();
    rig.getWorldPosition(sharkWorld);
    waterUniforms.uShark.value.set(sharkWorld.x, sharkWorld.z);

    if (punch > 0.72 && !lungePeak) {
      lungePeak = true;
      const splashAt = nose.clone();
      splashAt.y = 0.15;
      burst(splashAt);
      waterUniforms.uRipple.value.set(sharkWorld.x, sharkWorld.z);
      waterUniforms.uRippleAge.value = 0;
    }

    if (splashLife > 0) {
      splashLife -= dt * 0.85;
      for (let i = 0; i < splashCount; i++) {
        splashVel[i].y -= dt * 3.2;
        splashPos[i * 3] += splashVel[i].x * dt;
        splashPos[i * 3 + 1] += splashVel[i].y * dt;
        splashPos[i * 3 + 2] += splashVel[i].z * dt;
      }
      splashGeo.attributes.position.needsUpdate = true;
      (splash.material as THREE.PointsMaterial).opacity = Math.max(0, splashLife);
    }

    for (let i = 0; i < fishCount; i++) {
      const a = time * 0.35 + fishPhase[i];
      const rad = 2.4 + (i % 5) * 0.45;
      dummy.position.set(Math.cos(a) * rad + 1.5, -0.35 + Math.sin(a * 2.0 + i) * 0.18, Math.sin(a * 0.8) * rad * 0.55 - 1.2);
      dummy.lookAt(Math.cos(a + 0.2) * rad + 1.5, dummy.position.y, Math.sin((a + 0.2) * 0.8) * rad * 0.55 - 1.2);
      dummy.scale.setScalar(0.85 + (i % 3) * 0.15);
      dummy.updateMatrix();
      school.setMatrixAt(i, dummy.matrix);
    }
    school.instanceMatrix.needsUpdate = true;

    camera.position.x = Math.sin(time * 0.22) * 0.18;
    camera.position.y = 1.35 + Math.sin(time * 0.41) * (reduced ? 0 : 0.05);
    camera.lookAt(0, 0.02, -1);

    renderer.render(scene, camera);
    opts.onFrame?.({ lunge: punch, todName: todName(tod) });
    raf = requestAnimationFrame(frame);
  }
  raf = requestAnimationFrame(frame);

  const onVis = () => {
    if (document.hidden) {
      running = false;
      cancelAnimationFrame(raf);
    } else if (!running) {
      running = true;
      last = performance.now();
      raf = requestAnimationFrame(frame);
    }
  };
  document.addEventListener("visibilitychange", onVis);

  return {
    setScroll(t: number) {
      const next = 0.48 + Math.min(1, Math.max(0, t)) * 0.5;
      if (Math.abs(next - scrollTarget) > 0.004) {
        waterUniforms.uRipple.value.set((Math.random() - 0.5) * 10, (Math.random() - 0.5) * 6);
        waterUniforms.uRippleAge.value = 0;
      }
      scrollTarget = next;
    },
    setPointer(ndcX: number, ndcY: number) {
      pointerX = ndcX;
      pointerY = ndcY;
    },
    ripple() {
      waterUniforms.uRipple.value.set((Math.random() - 0.5) * 8, (Math.random() - 0.5) * 5);
      waterUniforms.uRippleAge.value = 0;
    },
    breach() {
      if (lunge < 0) {
        lunge = 0;
        lungePeak = false;
      }
    },
    dispose() {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVis);
      scene.traverse((obj) => {
        const mesh = obj as THREE.Mesh;
        mesh.geometry?.dispose();
        const mat = mesh.material as THREE.Material | THREE.Material[] | undefined;
        if (Array.isArray(mat)) mat.forEach((m) => m.dispose());
        else mat?.dispose();
      });
      eyeSpriteMat.dispose();
      renderer.dispose();
    },
  };
}
