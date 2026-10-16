import { useEffect, useRef, useState, type MouseEvent, type PointerEvent as ReactPointerEvent, type ReactNode, type RefObject } from "react";
import {
  Anchor,
  BadgeCheck,
  Droplets,
  Fish,
  Mail,
  Menu,
  MessageCircle,
  Phone,
  Scissors,
  Star,
  UtensilsCrossed,
  Volume2,
  VolumeX,
  X,
} from "lucide-react";
import type { OceanHandle } from "@/experience/ocean";

const INCLUDED = [
  { icon: BadgeCheck, title: "Mexican Fishing Licenses", text: "Provided for everyone on board" },
  { icon: Anchor, title: "Premium Fishing Gear", text: "Tournament-grade rods, reels, and tackle" },
  { icon: Fish, title: "Live Bait", text: "Fresh bait prepared before departure" },
  { icon: Droplets, title: "Water & Ice", text: "Ice-cold bottled water and clean ice onboard" },
  { icon: UtensilsCrossed, title: "Fresh Ceviche", text: "Prepared onboard from your catch" },
  { icon: Scissors, title: "Catch Cleaning & Filleting", text: "Professionally cleaned, filleted, and bagged by your crew" },
] as const;

const SPECIES = [
  "Yellowfin Tuna",
  "Marlin",
  "Sailfish",
  "Dorado (Mahi-Mahi)",
  "Roosterfish",
  "Wahoo",
  "Snapper",
] as const;

const PINS = [
  { id: "lc", kind: "dep" as const, x: 57, y: 18, zone: "North Shore", name: "Marina Riviera Nayarit at La Cruz" },
  { id: "nv", kind: "dep" as const, x: 70, y: 34, zone: "Riviera Nayarit", name: "Nuevo Vallarta Marina & Paradise Village Public Docks" },
  { id: "mv", kind: "dep" as const, x: 66, y: 50, zone: "Puerto Vallarta", name: "Marina Vallarta & Marina Los Peines" },
  { id: "lm", kind: "dep" as const, x: 44, y: 74, zone: "South Shore", name: "Los Muertos Pier" },
  { id: "marietas", kind: "ground" as const, x: 28, y: 22, zone: "Banderas Bay", name: "Marietas Islands" },
  { id: "morro", kind: "ground" as const, x: 20, y: 66, zone: "Banderas Bay", name: "El Morro" },
  { id: "rock", kind: "ground" as const, x: 9, y: 40, zone: "Pacific", name: 'La Corbeteña ("The Rock")' },
  { id: "banks", kind: "ground" as const, x: 46, y: 46, zone: "Pacific", name: 'El Banco ("The Banks")' },
];

const TRIPS = [
  { id: "4", label: "4 hours inshore", detail: "Private charter starting at $275 for one person" },
  { id: "6", label: "6 hours", detail: "Inshore for 4 or 6hrs" },
  { id: "8", label: "8 to 14 hours offshore", detail: "Full-day offshore expeditions" },
  { id: "multi", label: "Up to 10 days", detail: "Multi-day offshore expeditions" },
];

const PHOTOS = [
  { src: "/original/hero-catch.jpg", title: "Roosterfish", place: "Puerto Vallarta" },
  { src: "/original/mahi.jpg", title: "Mahi-Mahi", place: "Private charter" },
  { src: "/original/snook.jpg", title: "Snook", place: "Inshore" },
  { src: "/original/sailfish.jpg", title: "Sailfish", place: "Offshore" },
  { src: "/original/family.jpg", title: "Family charter", place: "Puerto Vallarta" },
  { src: "/original/dorado.jpg", title: "Dorado", place: "On the boat" },
];

const REVIEWS = [
  {
    quote:
      "Don’t miss out on this incredible Fishing event! I’ve fished with these guys twice, and I wouldn’t choose else in PV! Both times, we were on the fish in no time and had a blast the whole trip. Jonny is fantastic at managing the tackle gear and always keeps us updated on the action. Having an American on board who all the exciting details and gets us hooked on the fish is absolutely priceless!",
    name: "Guest of Fishing Rebels",
    meta: "5 stars",
  },
  {
    quote:
      "Wow, we reached out to the incredible Fishing Rebels in Puerto Vallarta, and they truly delivered! Jonny set us up for an unforgettable 8-hour charter on a stunning 55-foot boat. We caught so dorado that we couldn’t resist booking a 6-hour trip on a panga boat! Huge thanks to Fishing Rebels for providing the most amazing fishing experience—only they can earn a 5 diamond rating from launch to landing!",
    name: "Guest of Fishing Rebels",
    meta: "5 diamond rating",
  },
  {
    quote:
      "Awesome trip! Oscar and Manny were great, found us a feeding frenzy and ended up with 13 yellowfin tuna. Also caught the trophy marlin. Been out with Fishing Rebels twice and they never disappoint.",
    name: "Chris E",
    meta: "Google · Jan 2025",
  },
  {
    quote:
      "First trip today with Fishing Rebels after fishing with another charter for years. Jonny is amazing with the scheduling and logistics. And Oscar and Oscar were fantastic on our 4 hour Bay trip.",
    name: "Kevin L",
    meta: "Google · Nov 2025",
  },
];

type Saved = {
  id: string;
  name: string;
  contact: string;
  date: string;
  guests: number;
  trip: string;
  departure: string;
  note: string;
};

const NAV = [
  { href: "#top", label: "HOME" },
  { href: "#charters", label: "ABOUT US" },
  { href: "#charters", label: "BOATS" },
  { href: "#gallery", label: "CATCHING GALLERY" },
  { href: "#book", label: "CONTACT US" },
  { href: "#departures", label: "PUERTO VALLARTA FISHING REPORT" },
  { href: "#reviews", label: "PARTNERS & SPONSORS" },
];

function Magnetic({
  className,
  children,
  onClick,
  href,
  type,
}: {
  className: string;
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  type?: "button" | "submit";
}) {
  const ref = useRef<HTMLElement>(null);
  const move = (e: ReactPointerEvent) => {
    const el = ref.current;
    if (!el || !window.matchMedia("(hover: hover)").matches) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - (r.left + r.width / 2);
    const y = e.clientY - (r.top + r.height / 2);
    el.style.transform = `translate(${x * 0.22}px, ${y * 0.28}px)`;
  };
  const leave = () => {
    if (ref.current) ref.current.style.transform = "";
  };
  const cls = `${className} items-center justify-center transition-transform`;
  if (href) {
    return (
      <a ref={ref as RefObject<HTMLAnchorElement>} href={href} className={cls} onPointerMove={move} onPointerLeave={leave} onClick={onClick}>
        {children}
      </a>
    );
  }
  return (
    <button ref={ref as RefObject<HTMLButtonElement>} type={type ?? "button"} className={cls} onPointerMove={move} onPointerLeave={leave} onClick={onClick}>
      {children}
    </button>
  );
}

function TiltCard({ className, children }: { className?: string; children: ReactNode }) {
  const ref = useRef<HTMLElement>(null);
  return (
    <article
      ref={ref}
      className={`glass rounded-card p-5 ${className ?? ""}`}
      onPointerMove={(e) => {
        if (!window.matchMedia("(hover: hover)").matches) return;
        const r = e.currentTarget.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        e.currentTarget.style.transform = `rotateX(${(-py * 8).toFixed(2)}deg) rotateY(${(px * 10).toFixed(2)}deg)`;
      }}
      onPointerLeave={(e) => {
        e.currentTarget.style.transform = "";
      }}
      data-reveal
    >
      {children}
    </article>
  );
}

function ParallaxFigure({ src, title, place }: { src: string; title: string; place: string }) {
  const img = useRef<HTMLImageElement>(null);
  const sheen = useRef<HTMLDivElement>(null);
  return (
    <figure
      className="relative h-72 w-72 shrink-0 overflow-hidden rounded-card sm:h-80 sm:w-96"
      onPointerMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        if (img.current) img.current.style.transform = `translate3d(${px * -18}px, ${py * -12}px, 0) scale(1.14)`;
        if (sheen.current) sheen.current.style.transform = `translate3d(${px * 36}px, ${py * 18}px, 0)`;
      }}
      onPointerLeave={() => {
        if (img.current) img.current.style.transform = "scale(1.08)";
        if (sheen.current) sheen.current.style.transform = "";
      }}
    >
      <img ref={img} src={src} alt={`${title}, ${place}`} className="h-full w-full object-cover" style={{ transform: "scale(1.08)" }} />
      <div ref={sheen} className="sheen pointer-events-none absolute inset-0" />
      <figcaption className="glass absolute inset-x-3 bottom-3 rounded-xl px-3 py-2">
        <p className="font-cond text-lg tracking-wide text-foam">{title}</p>
        <p className="text-sm text-mist">{place}</p>
      </figcaption>
    </figure>
  );
}

function SloganSea() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const canvas = canvasRef.current;
    const parent = canvas?.parentElement;
    if (!canvas || !parent) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let raf = 0;
    let running = true;
    type P = { x: number; y: number; tx: number; ty: number; s: number };
    let pts: P[] = [];

    const layout = async () => {
      await document.fonts.ready.catch(() => undefined);
      const w = parent.clientWidth;
      const h = Math.max(280, Math.min(520, window.innerHeight * 0.62));
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const sample = document.createElement("canvas");
      sample.width = Math.floor(w);
      sample.height = Math.floor(h);
      const sctx = sample.getContext("2d");
      if (!sctx) return;
      sctx.clearRect(0, 0, sample.width, sample.height);
      sctx.fillStyle = "#fff";
      sctx.textAlign = "center";
      sctx.textBaseline = "middle";
      const size = Math.max(42, Math.min(92, w / 14));
      sctx.font = `700 ${size}px "Barlow Condensed", sans-serif`;
      sctx.fillText("WE CATCH FISH", w / 2, h * 0.4);
      sctx.fillText("OR WE DON'T GO HOME!", w / 2, h * 0.62);
      const data = sctx.getImageData(0, 0, sample.width, sample.height).data;
      const step = w < 700 ? 5 : 4;
      const next: P[] = [];
      for (let y = 0; y < sample.height; y += step) {
        for (let x = 0; x < sample.width; x += step) {
          if (data[(y * sample.width + x) * 4 + 3] > 140) {
            next.push({
              x: Math.random() * w,
              y: Math.random() * h,
              tx: x,
              ty: y,
              s: 0.6 + Math.random() * 1.6,
            });
          }
        }
      }
      pts = next;
    };

    const draw = (t: number) => {
      if (!running) return;
      const rect = canvas.getBoundingClientRect();
      const view = Math.min(1, Math.max(0, (window.innerHeight * 0.85 - rect.top) / (window.innerHeight * 0.7)));
      ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
      for (const p of pts) {
        p.x += (p.tx - p.x) * (0.04 + view * 0.08);
        p.y += (p.ty - p.y) * (0.04 + view * 0.08);
        const wob = Math.sin(t * 0.002 + p.tx * 0.05) * (1 - view) * 6;
        ctx.fillStyle = (p.tx + p.ty) % 9 < 2 ? "#f4c542" : "#d7fff6";
        ctx.globalAlpha = 0.35 + view * 0.65;
        ctx.beginPath();
        ctx.arc(p.x + wob, p.y, p.s, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(draw);
    };

    layout().then(() => {
      if (running) raf = requestAnimationFrame(draw);
    });
    const onResize = () => void layout();
    window.addEventListener("resize", onResize);
    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div className="relative">
      <canvas ref={canvasRef} className="block w-full" aria-hidden />
    </div>
  );
}

function LogoMark({ className }: { className?: string }) {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);
  return (
    <span className={`logo-stage ${className ?? ""}`}>
      <img
        src={reduced ? "/brand/logo-charro.png?v=5" : "/brand/logo-charro.webp?v=5"}
        alt="Fishing Rebels, charro riding a shark"
        width={260}
        height={352}
        className="logo-charro h-full w-full object-contain"
      />
    </span>
  );
}

function Reel() {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const wide = window.matchMedia("(min-width: 768px)").matches;
    el.poster = wide ? "/hero/split-wide.jpg" : "/hero/split-mobile.jpg";
    el.src = wide ? "/hero/shark-wide.mp4?v=5" : "/hero/shark-mobile.mp4?v=5";
    void el.play().catch(() => undefined);
  }, []);
  return (
    <div className="reel" aria-hidden>
      <video ref={ref} className="h-full w-full object-cover" muted loop playsInline autoPlay poster="/hero/split-mobile.jpg" />
    </div>
  );
}

function HookCursor() {
  const rings = useRef<Array<HTMLSpanElement | null>>([]);
  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;
    document.documentElement.classList.add("has-hook");
    const pos = { x: -200, y: -200 };
    const trail = Array.from({ length: 6 }, () => ({ x: -200, y: -200 }));
    const move = (e: PointerEvent) => {
      pos.x = e.clientX;
      pos.y = e.clientY;
    };
    window.addEventListener("pointermove", move);
    let raf = 0;
    const tick = () => {
      let px = pos.x;
      let py = pos.y;
      trail.forEach((r, i) => {
        const k = 0.38 - i * 0.04;
        r.x += (px - r.x) * k;
        r.y += (py - r.y) * k;
        const el = rings.current[i];
        if (el) el.style.transform = `translate3d(${r.x}px, ${r.y}px, 0)`;
        px = r.x;
        py = r.y;
      });
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", move);
      document.documentElement.classList.remove("has-hook");
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-50 hidden md:block" aria-hidden>
      {Array.from({ length: 6 }, (_, i) => (
        <span
          key={i}
          ref={(el) => {
            rings.current[i] = el;
          }}
          className="absolute top-0 left-0"
          style={{ opacity: 1 - i * 0.14 }}
        >
          {i === 0 ? (
            <svg width="28" height="28" viewBox="0 0 28 28" className="-translate-x-1 -translate-y-1">
              <path d="M8 4c6 0 10 4 10 9a6 6 0 0 1-6 6H9" fill="none" stroke="#f4c542" strokeWidth="1.6" />
              <circle cx="8" cy="4" r="1.4" fill="#ff6b4a" />
              <path d="M9 19c1.5 2 1 4-.4 5" fill="none" stroke="#e7f6f4" strokeWidth="1.4" />
            </svg>
          ) : (
            <span className="block h-2 w-2 -translate-x-1 rounded-full bg-foam/70" />
          )}
        </span>
      ))}
    </div>
  );
}

export function RebelSite() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const oceanRef = useRef<OceanHandle | null>(null);
  const crackRef = useRef<HTMLDivElement>(null);
  const todRef = useRef<HTMLSpanElement>(null);
  const bookRef = useRef<HTMLElement>(null);
  const biteRef = useRef<HTMLDivElement>(null);
  const [menu, setMenu] = useState(false);
  const [drops, setDrops] = useState<{ id: number; x: number; y: number; dx: number; dy: number; s: number }[]>([]);
  const [sound, setSound] = useState(false);
  const [departure, setDeparture] = useState("mv");
  const [pin, setPin] = useState("mv");
  const [trip, setTrip] = useState("4");
  const [guests, setGuests] = useState(2);
  const [saved, setSaved] = useState<Saved[]>([]);
  const [done, setDone] = useState<Saved | null>(null);
  const [error, setError] = useState("");
  const audio = useRef<{ ctx: AudioContext; gain: GainNode; cast: () => void } | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("fishing-rebels-requests");
      if (raw) setSaved(JSON.parse(raw) as Saved[]);
    } catch {
      /* ignore broken local storage */
    }
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    let dead = false;
    let handle: OceanHandle | null = null;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    void import("@/experience/ocean").then(({ mountOcean }) => {
      if (dead || !canvasRef.current) return;
      try {
        handle = mountOcean(canvasRef.current, {
          reduced,
          onFrame: (f) => {
            if (crackRef.current) {
              const o = Math.min(0.28, Math.max(0, (f.lunge - 0.78) * 1.4));
              crackRef.current.style.opacity = String(o);
            }
            if (todRef.current && todRef.current.textContent !== f.todName) {
              todRef.current.textContent = f.todName;
            }
            const section = bookRef.current;
            if (biteRef.current && section && f.lunge > 0.78) {
              const r = section.getBoundingClientRect();
              if (r.top < window.innerHeight * 0.72 && r.bottom > 80) {
                biteRef.current.classList.remove("is-on");
                void biteRef.current.offsetWidth;
                biteRef.current.classList.add("is-on");
              }
            }
          },
        });
        oceanRef.current = handle;
      } catch (err) {
        console.error(err);
      }
    });

    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      oceanRef.current?.setScroll(max > 0 ? window.scrollY / max : 0);
    };
    const onPointer = (e: PointerEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      oceanRef.current?.setPointer(x, y);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("pointermove", onPointer, { passive: true });
    onScroll();

    let revert: (() => void) | undefined;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!reducedMotion) {
      void Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(([{ default: gsap }, { ScrollTrigger }]) => {
        if (dead) return;
        gsap.registerPlugin(ScrollTrigger);
        const ctx = gsap.context(() => {
          gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
            gsap.from(el, {
              y: 32,
              autoAlpha: 0,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: { trigger: el, start: "top 90%" },
            });
          });
        });
        revert = () => ctx.revert();
      });
    }

    return () => {
      dead = true;
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointermove", onPointer);
      revert?.();
      handle?.dispose();
      oceanRef.current = null;
    };
  }, []);

  useEffect(() => {
    const book = bookRef.current;
    if (!book) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) oceanRef.current?.breach();
      },
      { threshold: 0.45 },
    );
    io.observe(book);
    return () => io.disconnect();
  }, []);

  const enableSound = async () => {
    if (sound && audio.current) {
      await audio.current.ctx.suspend();
      setSound(false);
      return;
    }
    const AC = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!audio.current) {
      const ctx = new AC();
      const buffer = ctx.createBuffer(1, ctx.sampleRate * 2, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1;
      const noise = ctx.createBufferSource();
      noise.buffer = buffer;
      noise.loop = true;
      const filter = ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.value = 420;
      const gain = ctx.createGain();
      gain.gain.value = 0.045;
      noise.connect(filter).connect(gain).connect(ctx.destination);
      noise.start();
      const cast = () => {
        const o = ctx.createOscillator();
        const g = ctx.createGain();
        o.type = "triangle";
        o.frequency.setValueAtTime(480, ctx.currentTime);
        o.frequency.exponentialRampToValueAtTime(90, ctx.currentTime + 0.18);
        g.gain.setValueAtTime(0.0001, ctx.currentTime);
        g.gain.exponentialRampToValueAtTime(0.12, ctx.currentTime + 0.02);
        g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.22);
        o.connect(g).connect(ctx.destination);
        o.start();
        o.stop(ctx.currentTime + 0.24);
      };
      audio.current = { ctx, gain, cast };
    } else {
      await audio.current.ctx.resume();
    }
    setSound(true);
  };

  const cast = () => {
    oceanRef.current?.ripple();
    if (sound) audio.current?.cast();
  };

  const active = PINS.find((p) => p.id === pin) ?? PINS[2];

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const contact = String(form.get("contact") ?? "").trim();
    const date = String(form.get("date") ?? "");
    const note = String(form.get("note") ?? "").trim();
    if (name.length < 2 || contact.length < 5 || !date) {
      setError("Add your name, a way to reach you, and the day you want to fish.");
      setDone(null);
      return;
    }
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (new Date(`${date}T00:00:00`) < today) {
      setError("Pick a departure date from today forward.");
      return;
    }
    const tripLabel = TRIPS.find((t) => t.id === trip)?.label ?? trip;
    const depLabel = PINS.find((p) => p.id === departure)?.name ?? departure;
    const item: Saved = {
      id: `FR-${Math.random().toString(36).slice(2, 6).toUpperCase()}`,
      name,
      contact,
      date,
      guests,
      trip: tripLabel,
      departure: depLabel,
      note,
    };
    const next = [item, ...saved].slice(0, 8);
    setSaved(next);
    localStorage.setItem("fishing-rebels-requests", JSON.stringify(next));
    setDone(item);
    setError("");
    cast();
    oceanRef.current?.breach();
  };

  const waText = done
    ? `https://wa.me/523221882266?text=${encodeURIComponent(
        `Fishing Rebels request ${done.id}\n${done.name}\n${done.date} · ${done.guests} anglers\n${done.trip}\n${done.departure}\n${done.contact}`,
      )}`
    : "https://wa.me/523221882266";

  const splashAt = (e: MouseEvent) => {
    const t = e.target as HTMLElement;
    if (!t.closest("button, a")) return;
    const burst = Array.from({ length: 14 }, (_, i) => {
      const ang = (Math.PI * 2 * i) / 14 + Math.random() * 0.35;
      const dist = 28 + Math.random() * 86;
      return {
        id: Date.now() + i + Math.random(),
        x: e.clientX,
        y: e.clientY,
        dx: Math.cos(ang) * dist,
        dy: Math.sin(ang) * dist - 36,
        s: 7 + Math.random() * 11,
      };
    });
    setDrops((prev) => [...prev, ...burst].slice(-48));
    window.setTimeout(() => {
      setDrops((prev) => prev.filter((drop) => !burst.some((b) => b.id === drop.id)));
    }, 700);
  };

  return (
    <div className="relative min-h-screen" onClick={splashAt}>
      <Reel />
      <div className="scrim-top pointer-events-none fixed inset-x-0 top-0 z-10 h-28" />
      <div ref={crackRef} className="pointer-events-none fixed inset-0 z-40 opacity-0" aria-hidden>
        <svg viewBox="0 0 100 100" className="h-full w-full" preserveAspectRatio="none">
          <g stroke="#ffffff" strokeWidth="0.15" fill="none" opacity="0.55">
            <path d="M50 42 L62 18 L70 28 L88 8" />
            <path d="M50 42 L78 48 L96 40" />
            <path d="M50 42 L68 70 L90 86" />
            <path d="M50 42 L40 72 L22 92" />
            <path d="M50 42 L28 50 L6 58" />
            <path d="M50 42 L30 24 L8 16" />
            <path d="M62 18 L74 22" />
            <path d="M68 70 L76 64" />
            <path d="M28 50 L24 36" />
          </g>
        </svg>
      </div>
      <HookCursor />

      <header className="pointer-events-none relative z-30 h-0">
        <div className="pointer-events-auto absolute right-3 top-3 z-40 flex items-center gap-2">
          <button
            type="button"
            className="glass grid h-11 w-11 place-items-center rounded-full text-ink"
            onClick={() => void enableSound()}
            aria-pressed={sound}
            aria-label={sound ? "Mute ocean" : "Play ocean ambience"}
          >
            {sound ? <Volume2 className="h-5 w-5" /> : <VolumeX className="h-5 w-5" />}
          </button>
          <button type="button" className="glass grid h-11 w-11 place-items-center rounded-full text-ink lg:hidden" aria-expanded={menu} aria-label="Menu" onClick={() => setMenu((v) => !v)}>
            {menu ? <X /> : <Menu />}
          </button>
        </div>
        <a href="#top" className="pointer-events-auto absolute left-2 top-2 z-30 block w-[min(34vw,148px)] drop-shadow-xl" onClick={() => setMenu(false)}>
          <LogoMark className="block h-auto w-full" />
        </a>
        <nav className="site-nav pointer-events-auto absolute left-40 right-4 top-4 hidden flex-wrap justify-end gap-x-5 gap-y-2 lg:flex" aria-label="Primary">
          {NAV.map((item) => (
            <a key={item.label} href={item.href} onClick={cast}>
              {item.label}
            </a>
          ))}
        </nav>
        {menu ? (
          <div className="glass pointer-events-auto absolute left-3 right-3 top-16 z-40 max-w-sm rounded-card p-4 lg:hidden">
            {NAV.map((item) => (
              <a key={item.label} href={item.href} className="block py-2 text-sm font-semibold tracking-wide text-ink" onClick={() => { setMenu(false); cast(); }}>
                {item.label}
              </a>
            ))}
            <a href="#book" className="pulse-coral mt-2 block rounded-full py-3 text-center" onClick={() => setMenu(false)}>
              BOOK YOUR FISHING CHARTER
            </a>
          </div>
        ) : null}
      </header>

      <div className="shark-open" aria-hidden />

      <main id="top" className="page-sheet light-veil relative z-10">
        <section className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-8 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold tracking-widest text-ink">PRIVATE SPORTFISHING • PUERTO VALLARTA, MEXICO</p>
            <h1 className="mt-3 text-4xl leading-tight sm:text-5xl">Puerto Vallarta Fishing Charters & Deep Sea Fishing</h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-ink sm:text-lg">
              Experience some of Mexico’s best sportfishing with private inshore and offshore fishing charters in Puerto Vallarta. Target yellowfin tuna, marlin, sailfish, mahi-mahi, snapper and more with an experienced local crew. Private charter starting at $275 for one person, 4hrs.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Magnetic href="#book" onClick={cast} className="pulse-coral inline-flex h-12 items-center px-5">
                BOOK YOUR FISHING CHARTER
              </Magnetic>
              <Magnetic href="#gallery" onClick={cast} className="pulse-coral inline-flex h-12 items-center px-5">
                GALLERY
              </Magnetic>
            </div>
          </div>
          <img
            src="/original/hero-catch.jpg"
            alt="Anglers holding roosterfish caught on a Puerto Vallarta fishing charter"
            className="photo-frame w-full"
          />
        </section>

        <div className="wave-rule relative z-10" aria-hidden />

        <section id="included" className="relative z-10 mx-auto max-w-6xl px-4 py-20">
          <p className="font-cond tracking-widest text-gold">THE DAY, HANDLED</p>
          <h2 className="mt-2 font-cond text-4xl uppercase tracking-wide text-foam sm:text-6xl" data-reveal>
            Everything You Need Is Included
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-foam sm:text-lg" data-reveal>
            Stay closer to shore for an action-packed inshore trip or head into deeper Pacific waters for serious deep sea fishing in Puerto Vallarta. Our crew uses current fishing reports and local knowledge to determine where the bite is strongest, helping you spend more time fishing and less time searching. Whether you're planning a family fishing trip, a private charter with friends, or a serious big-game expedition, Fishing Rebels provides a personalized experience with professional crews and tournament-grade fishing equipment.
          </p>
          <p className="mt-8 font-cond text-2xl tracking-wide" data-reveal>
            Your charter comes prepared with ALL the essentials for a day of sportfishing
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" style={{ perspective: "900px" }}>
            {INCLUDED.map((item) => {
              const Icon = item.icon;
              return (
              <TiltCard key={item.title}>
                <Icon className="h-6 w-6 text-gold" aria-hidden />
                <h3 className="mt-4 font-cond text-2xl tracking-wide">{item.title}</h3>
                <p className="mt-1 text-mist">{item.text}</p>
              </TiltCard>
              );
            })}
          </div>
          <p className="mt-8 max-w-3xl leading-relaxed text-mist" data-reveal>
            Whether you're looking for a relaxing Puerto Vallarta fishing trip along the coastlines or an offshore adventure chasing Tuna and Marlin. Fishing Rebels delivers authentic fishing experiences built around great fishing, local expertise, and unforgettable days in the Banderas Bay and the Pacific.
          </p>
        </section>

        <section id="charters" className="relative z-10 mx-auto max-w-6xl overflow-hidden px-4 py-16">
          <p className="font-cond tracking-widest text-gold">ABOUT US · BOATS</p>
          <h2 className="mt-2 max-w-3xl font-cond text-4xl uppercase tracking-wide sm:text-6xl" data-reveal>
            Private Fishing Charters in Puerto Vallarta, Mexico
          </h2>
          <div className="mt-6 grid gap-8 lg:grid-cols-2">
            <div className="space-y-4 text-base leading-relaxed sm:text-lg" data-reveal>
              <p>
                Fishing Rebels offers private fishing charters in Puerto Vallarta for everyone from first-time anglers and families to experienced fishermen chasing trophy fish in the Pacific. Our experienced local captains combine real-time fishing knowledge, premium equipment, and flexible trip options to give you the best opportunity for an incredible day on the water.
              </p>
              <p>
                From 4-hour inshore fishing trips to full-day and multi-day offshore expeditions, every charter is built around the conditions, season, and type of fishing you want to experience. Target some of Puerto Vallarta’s most sought-after species, including Yellowfin Tuna, Marlin, Sailfish, Dorado (Mahi-Mahi), Roosterfish, Wahoo, and Snapper.
              </p>
            </div>
            <div className="relative min-h-48" data-reveal>
              {SPECIES.map((name) => (
                <span key={name} className="glass mb-3 mr-3 inline-flex rounded-full px-4 py-2 font-cond text-xl tracking-wide">
                  {name}
                </span>
              ))}
              <Fish className="swim-fish top-6 h-6 w-6 text-gold" style={{ animationDuration: "16s" }} aria-hidden />
              <Fish className="swim-fish top-24 h-5 w-5 text-foam" style={{ animationDuration: "22s", animationDelay: "-8s" }} aria-hidden />
              <Fish className="swim-fish top-40 h-4 w-4 text-mist" style={{ animationDuration: "26s", animationDelay: "-3s" }} aria-hidden />
            </div>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-5">
            <div className="relative overflow-hidden rounded-card lg:col-span-3" data-reveal>
              <img src="/map/bay.jpg" alt="Stylized chart of Banderas Bay opening onto the Pacific" className="h-full min-h-80 w-full object-cover" />
              <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full" aria-hidden>
                <path className="route-line" d="M66 50 C 50 40 36 28 28 22" />
                <path className="route-line" d="M66 50 C 40 48 22 44 9 40" />
                <path className="route-line" d="M66 50 C 58 48 50 47 46 46" />
                <path className="route-line" d="M44 74 C 36 70 28 68 20 66" />
                <path className="route-line" d="M57 18 C 48 20 36 21 28 22" />
              </svg>
              {PINS.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  className={`absolute grid h-11 min-w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border px-2 font-cond text-sm ${
                    pin === p.id ? "border-coral bg-coral text-ink" : "border-gold bg-ink/80 text-gold"
                  }`}
                  style={{ left: `${p.x}%`, top: `${p.y}%` }}
                  onClick={() => {
                    setPin(p.id);
                    if (p.kind === "dep") setDeparture(p.id);
                    cast();
                  }}
                  aria-pressed={pin === p.id}
                >
                  {p.kind === "dep" ? "DEP" : "●"}
                </button>
              ))}
            </div>
            <aside className="glass rounded-card p-5 lg:col-span-2" data-reveal>
              <p className="font-cond tracking-widest text-gold">{active.zone}</p>
              <h3 className="mt-2 font-cond text-3xl uppercase tracking-wide">{active.name}</h3>
              <p className="mt-3 text-mist">
                {active.kind === "dep"
                  ? "Flexible departure locations throughout Puerto Vallarta and Riviera Nayarit, close to your hotel, villa, or resort."
                  : "Fishing grounds of Marietas Islands, El Morro, La Corbeteña (\"The Rock\") and El Banco (\"The Banks\")."}
              </p>
              <button
                type="button"
                className="mt-5 h-12 rounded-full bg-gold px-5 font-cond text-lg text-ink"
                onClick={() => {
                  if (active.kind === "dep") setDeparture(active.id);
                  document.getElementById("book")?.scrollIntoView({ behavior: "smooth" });
                  cast();
                }}
              >
                {active.kind === "dep" ? "Depart from here" : "Fish these grounds"}
              </button>
            </aside>
          </div>
        </section>

        <section id="departures" className="relative z-10 mx-auto max-w-6xl px-4 py-16">
          <h2 className="font-cond text-4xl uppercase tracking-wide sm:text-6xl" data-reveal>
            Convenient Departures Around Puerto Vallarta
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed" data-reveal>
            We offer flexible departure locations throughout Puerto Vallarta and Riviera Nayarit, making it easy to board near your hotel, villa, or resort.
          </p>
          <div className="mt-8 grid items-start gap-6 lg:grid-cols-2">
            <video
              className="photo-frame aspect-video w-full bg-black object-cover"
              src="/media/owner.mp4"
              controls
              playsInline
              poster="/original/hero-catch.jpg"
            />
            <ul className="grid gap-3">
            {PINS.filter((p) => p.kind === "dep").map((p) => (
              <li key={p.id}>
                <button
                  type="button"
                  className={`glass w-full rounded-card px-5 py-4 text-left ${departure === p.id ? "border-gold" : ""}`}
                  onClick={() => {
                    setDeparture(p.id);
                    setPin(p.id);
                    cast();
                  }}
                >
                  <span className="block font-cond text-sm tracking-widest text-gold">{p.zone}</span>
                  <span className="mt-1 block font-cond text-2xl">{p.name}</span>
                </button>
              </li>
            ))}
          </ul>
          </div>
        </section>

        <section id="catch" className="relative z-10 px-4 py-10">
          <div className="wood-sign relative z-10 mx-auto max-w-3xl rounded-md px-6 py-8 text-center">
              <h2 className="font-brush text-3xl leading-tight text-foam sm:text-5xl">WE CATCH FISH OR WE DON'T GO HOME!</h2>
          </div>
        </section>

        <section id="gallery" className="relative z-10 py-8">
          <div className="mx-auto flex max-w-6xl items-end justify-between px-4">
            <h2 className="font-cond text-4xl uppercase tracking-wide sm:text-6xl">Gallery</h2>
            <p className="font-cond text-gold">CATCHING GALLERY</p>
          </div>
          <div className="mt-6 hidden overflow-hidden md:block">
            <div className="marquee-track flex w-max gap-4 px-4">
              {[...PHOTOS, ...PHOTOS].map((photo, i) => (
                <ParallaxFigure key={`${photo.src}-${i}`} {...photo} />
              ))}
            </div>
          </div>
          <div className="mt-4 flex gap-4 overflow-x-auto px-4 pb-2 md:hidden">
            {PHOTOS.map((photo) => (
              <ParallaxFigure key={photo.src} {...photo} />
            ))}
          </div>
        </section>

        <section id="reviews" className="relative z-10 mx-auto max-w-6xl px-4 py-20">
          <p className="font-cond tracking-widest text-gold">THE REEL DEAL</p>
          <h2 className="mt-2 font-cond text-4xl uppercase tracking-wide sm:text-6xl" data-reveal>
            5 Star Reviews
          </h2>
          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {REVIEWS.map((review) => (
              <figure key={review.name + review.meta} className="group glass rounded-card p-6" data-reveal>
                <div className="flex gap-1 text-gold" aria-label="5 stars">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star key={i} className="star-glow h-5 w-5 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-4 text-base leading-relaxed">{review.quote}</blockquote>
                <figcaption className="mt-4 font-cond text-lg text-gold">
                  {review.name}
                  <span className="text-mist"> · {review.meta}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section id="book" ref={bookRef} className="relative z-10 mx-auto max-w-6xl px-4 py-20">
          <p className="font-cond tracking-widest text-coral">FINAL STRIKE</p>
          <h2 className="mt-2 max-w-4xl font-cond text-4xl uppercase tracking-wide sm:text-6xl">
            LET'S HELP YOU BOOK YOUR Puerto Vallarta FISHING CHARTER
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed">
            Find the perfect fishing trip for your group, from inshore for 4 or 6hrs to full-day 8 to 14hrs offshore expeditions. At the grounds of Marietas Islands, El Morro, La Corbeteña ("The Rock") and El Banco ("The Banks")
          </p>
          <p className="mt-2 font-cond text-2xl text-gold">Choose your charter and get ready to fish Puerto Vallarta’s legendary waters.</p>

          <div className="mt-8 grid gap-6 lg:grid-cols-5">
            <form className="glass relative rounded-card p-5 sm:p-6 lg:col-span-3" onSubmit={submit}>
              <div ref={biteRef} className="bite-mark" aria-hidden />
              <div className="grid gap-3 sm:grid-cols-2">
                {TRIPS.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      setTrip(item.id);
                      cast();
                    }}
                    className={`rounded-xl border px-4 py-3 text-left ${trip === item.id ? "border-coral bg-coral text-ink" : "border-line text-foam"}`}
                    aria-pressed={trip === item.id}
                  >
                    <span className="block font-cond text-xl">{item.label}</span>
                    <span className={`block text-sm ${trip === item.id ? "text-ink" : "text-mist"}`}>{item.detail}</span>
                  </button>
                ))}
              </div>
              <label className="mt-4 block text-sm text-mist">
                Departure
                <select
                  className="mt-1 h-12 w-full rounded-xl border border-line bg-ink px-3 text-foam"
                  value={departure}
                  onChange={(e) => setDeparture(e.target.value)}
                >
                  {PINS.filter((p) => p.kind === "dep").map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.zone}: {p.name}
                    </option>
                  ))}
                </select>
              </label>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                <label className="text-sm text-mist">
                  Name
                  <input name="name" autoComplete="name" suppressHydrationWarning className="mt-1 h-12 w-full rounded-xl border border-line bg-ink px-3 text-foam" />
                </label>
                <label className="text-sm text-mist">
                  Email or phone
                  <input name="contact" autoComplete="email" suppressHydrationWarning className="mt-1 h-12 w-full rounded-xl border border-line bg-ink px-3 text-foam" />
                </label>
                <label className="text-sm text-mist">
                  Date
                  <input name="date" type="date" suppressHydrationWarning className="mt-1 h-12 w-full rounded-xl border border-line bg-ink px-3 text-foam" />
                </label>
                <label className="text-sm text-mist">
                  Anglers
                  <input
                    suppressHydrationWarning
                    className="mt-1 h-12 w-full rounded-xl border border-line bg-ink px-3 text-foam"
                    type="number"
                    min={1}
                    max={12}
                    value={guests}
                    onChange={(e) => setGuests(Number(e.target.value))}
                  />
                </label>
              </div>
              <label className="mt-3 block text-sm text-mist">
                Notes
                <textarea name="note" rows={3} suppressHydrationWarning className="mt-1 w-full rounded-xl border border-line bg-ink px-3 py-2 text-foam" placeholder="Hotel, kids onboard, trophy or meat fish…" />
              </label>
              {error ? <p className="mt-3 text-coral">{error}</p> : null}
              {done ? (
                <p className="mt-3 text-gold">
                  Request {done.id} is saved on this device. The crew still confirms by phone or WhatsApp — this is not a paid hold.
                </p>
              ) : null}
              <div className="relative mt-5">
                <button type="submit" className="pulse-coral h-14 w-full rounded-full bg-coral font-cond text-2xl tracking-wide text-ink" onClick={cast}>
                  Book Your Charter
                </button>
              </div>
            </form>
            <aside className="space-y-4 lg:col-span-2">
              <div className="glass rounded-card p-5">
                <h3 className="font-cond text-2xl">Talk to the crew</h3>
                <a href="tel:+523221882266" className="mt-3 flex items-center gap-2 text-gold">
                  <Phone className="h-4 w-4" /> English Hotline +52 322 188 2266
                </a>
                <a href={waText} className="mt-2 flex items-center gap-2 text-gold" target="_blank" rel="noreferrer">
                  <MessageCircle className="h-4 w-4" /> Book Fast WhatsApp
                </a>
                <a href="mailto:catching@fishingrebels.com" className="mt-2 flex items-center gap-2 text-gold">
                  <Mail className="h-4 w-4" /> catching@fishingrebels.com
                </a>
                <p className="mt-4 text-sm leading-relaxed text-mist">
                  Marina Los Peines, Los Peines 332, Isla Iguana, 48333 Puerto Vallarta, Jal., Mexico
                </p>
              </div>
              {saved.length > 0 ? (
                <div className="glass rounded-card p-5">
                  <h3 className="font-cond text-xl">Saved on this phone</h3>
                  <ul className="mt-3 space-y-2 text-sm text-mist">
                    {saved.map((item) => (
                      <li key={item.id}>
                        <span className="text-foam">{item.id}</span> · {item.date} · {item.trip}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </aside>
          </div>
        </section>
      </main>

      <footer className="footer-clear relative z-10 px-4 py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <LogoMark className="block h-28 w-20" />
            <p className="mt-3 max-w-md font-brush text-2xl text-gold">WE CATCH FISH OR WE DON'T GO HOME!</p>
            <p className="mt-3 text-sm text-mist">Best fishing charters in Puerto Vallarta</p>
            <p className="text-sm text-mist">Trips from 4 hours up to 10 days</p>
          </div>
          <div className="text-sm text-mist">
            <p>HOME · ABOUT US · BOATS · CATCHING GALLERY · CONTACT US</p>
            <p className="mt-1">PUERTO VALLARTA FISHING REPORT · CAPTAINS LOG · PARTNERS & SPONSORS</p>
            <p className="mt-3">© {new Date().getFullYear()} Fishing Rebels · Puerto Vallarta</p>
          </div>
        </div>
      </footer>
      <div className="shark-open shark-open-end" aria-hidden />
      {drops.map((drop) => (
        <span
          key={drop.id}
          className="splash-drop"
          style={{
            left: drop.x,
            top: drop.y,
            width: drop.s,
            height: drop.s,
            ["--dx" as string]: `${drop.dx}px`,
            ["--dy" as string]: `${drop.dy}px`,
          }}
        />
      ))}
    </div>
  );
}
