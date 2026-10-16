import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as Phone, d as Mail, f as Fish, h as Anchor, i as UtensilsCrossed, l as MessageCircle, m as BadgeCheck, n as VolumeX, o as Star, p as Droplets, r as Volume2, s as Scissors, t as X, u as Menu } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BsQprLFg.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var INCLUDED = [
	{
		icon: BadgeCheck,
		title: "Mexican Fishing Licenses",
		text: "Provided for everyone on board"
	},
	{
		icon: Anchor,
		title: "Premium Fishing Gear",
		text: "Tournament-grade rods, reels, and tackle"
	},
	{
		icon: Fish,
		title: "Live Bait",
		text: "Fresh bait prepared before departure"
	},
	{
		icon: Droplets,
		title: "Water & Ice",
		text: "Ice-cold bottled water and clean ice onboard"
	},
	{
		icon: UtensilsCrossed,
		title: "Fresh Ceviche",
		text: "Prepared onboard from your catch"
	},
	{
		icon: Scissors,
		title: "Catch Cleaning & Filleting",
		text: "Professionally cleaned, filleted, and bagged by your crew"
	}
];
var SPECIES = [
	"Yellowfin Tuna",
	"Marlin",
	"Sailfish",
	"Dorado (Mahi-Mahi)",
	"Roosterfish",
	"Wahoo",
	"Snapper"
];
var PINS = [
	{
		id: "lc",
		kind: "dep",
		x: 57,
		y: 18,
		zone: "North Shore",
		name: "Marina Riviera Nayarit at La Cruz"
	},
	{
		id: "nv",
		kind: "dep",
		x: 70,
		y: 34,
		zone: "Riviera Nayarit",
		name: "Nuevo Vallarta Marina & Paradise Village Public Docks"
	},
	{
		id: "mv",
		kind: "dep",
		x: 66,
		y: 50,
		zone: "Puerto Vallarta",
		name: "Marina Vallarta & Marina Los Peines"
	},
	{
		id: "lm",
		kind: "dep",
		x: 44,
		y: 74,
		zone: "South Shore",
		name: "Los Muertos Pier"
	},
	{
		id: "marietas",
		kind: "ground",
		x: 28,
		y: 22,
		zone: "Banderas Bay",
		name: "Marietas Islands"
	},
	{
		id: "morro",
		kind: "ground",
		x: 20,
		y: 66,
		zone: "Banderas Bay",
		name: "El Morro"
	},
	{
		id: "rock",
		kind: "ground",
		x: 9,
		y: 40,
		zone: "Pacific",
		name: "La Corbeteña (\"The Rock\")"
	},
	{
		id: "banks",
		kind: "ground",
		x: 46,
		y: 46,
		zone: "Pacific",
		name: "El Banco (\"The Banks\")"
	}
];
var TRIPS = [
	{
		id: "4",
		label: "4 hours inshore",
		detail: "Private charter starting at $275 for one person"
	},
	{
		id: "6",
		label: "6 hours",
		detail: "Inshore for 4 or 6hrs"
	},
	{
		id: "8",
		label: "8 to 14 hours offshore",
		detail: "Full-day offshore expeditions"
	},
	{
		id: "multi",
		label: "Up to 10 days",
		detail: "Multi-day offshore expeditions"
	}
];
var PHOTOS = [
	{
		src: "/original/hero-catch.jpg",
		title: "Roosterfish",
		place: "Puerto Vallarta"
	},
	{
		src: "/original/mahi.jpg",
		title: "Mahi-Mahi",
		place: "Private charter"
	},
	{
		src: "/original/snook.jpg",
		title: "Snook",
		place: "Inshore"
	},
	{
		src: "/original/sailfish.jpg",
		title: "Sailfish",
		place: "Offshore"
	},
	{
		src: "/original/family.jpg",
		title: "Family charter",
		place: "Puerto Vallarta"
	},
	{
		src: "/original/dorado.jpg",
		title: "Dorado",
		place: "On the boat"
	}
];
var REVIEWS = [
	{
		quote: "Don’t miss out on this incredible Fishing event! I’ve fished with these guys twice, and I wouldn’t choose else in PV! Both times, we were on the fish in no time and had a blast the whole trip. Jonny is fantastic at managing the tackle gear and always keeps us updated on the action. Having an American on board who all the exciting details and gets us hooked on the fish is absolutely priceless!",
		name: "Guest of Fishing Rebels",
		meta: "5 stars"
	},
	{
		quote: "Wow, we reached out to the incredible Fishing Rebels in Puerto Vallarta, and they truly delivered! Jonny set us up for an unforgettable 8-hour charter on a stunning 55-foot boat. We caught so dorado that we couldn’t resist booking a 6-hour trip on a panga boat! Huge thanks to Fishing Rebels for providing the most amazing fishing experience—only they can earn a 5 diamond rating from launch to landing!",
		name: "Guest of Fishing Rebels",
		meta: "5 diamond rating"
	},
	{
		quote: "Awesome trip! Oscar and Manny were great, found us a feeding frenzy and ended up with 13 yellowfin tuna. Also caught the trophy marlin. Been out with Fishing Rebels twice and they never disappoint.",
		name: "Chris E",
		meta: "Google · Jan 2025"
	},
	{
		quote: "First trip today with Fishing Rebels after fishing with another charter for years. Jonny is amazing with the scheduling and logistics. And Oscar and Oscar were fantastic on our 4 hour Bay trip.",
		name: "Kevin L",
		meta: "Google · Nov 2025"
	}
];
var NAV = [
	{
		href: "#top",
		label: "HOME"
	},
	{
		href: "#charters",
		label: "ABOUT US"
	},
	{
		href: "#charters",
		label: "BOATS"
	},
	{
		href: "#gallery",
		label: "CATCHING GALLERY"
	},
	{
		href: "#book",
		label: "CONTACT US"
	},
	{
		href: "#departures",
		label: "PUERTO VALLARTA FISHING REPORT"
	},
	{
		href: "#reviews",
		label: "PARTNERS & SPONSORS"
	}
];
function Magnetic({ className, children, onClick, href, type }) {
	const ref = (0, import_react.useRef)(null);
	const move = (e) => {
		const el = ref.current;
		if (!el || !window.matchMedia("(hover: hover)").matches) return;
		const r = el.getBoundingClientRect();
		const x = e.clientX - (r.left + r.width / 2);
		const y = e.clientY - (r.top + r.height / 2);
		el.style.transform = `translate(${x * .22}px, ${y * .28}px)`;
	};
	const leave = () => {
		if (ref.current) ref.current.style.transform = "";
	};
	const cls = `${className} items-center justify-center transition-transform`;
	if (href) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		ref,
		href,
		className: cls,
		onPointerMove: move,
		onPointerLeave: leave,
		onClick,
		children
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		ref,
		type: type ?? "button",
		className: cls,
		onPointerMove: move,
		onPointerLeave: leave,
		onClick,
		children
	});
}
function TiltCard({ className, children }) {
	const ref = (0, import_react.useRef)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
		ref,
		className: `glass rounded-card p-5 ${className ?? ""}`,
		onPointerMove: (e) => {
			if (!window.matchMedia("(hover: hover)").matches) return;
			const r = e.currentTarget.getBoundingClientRect();
			const px = (e.clientX - r.left) / r.width - .5;
			const py = (e.clientY - r.top) / r.height - .5;
			e.currentTarget.style.transform = `rotateX(${(-py * 8).toFixed(2)}deg) rotateY(${(px * 10).toFixed(2)}deg)`;
		},
		onPointerLeave: (e) => {
			e.currentTarget.style.transform = "";
		},
		"data-reveal": true,
		children
	});
}
function ParallaxFigure({ src, title, place }) {
	const img = (0, import_react.useRef)(null);
	const sheen = (0, import_react.useRef)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
		className: "relative h-72 w-72 shrink-0 overflow-hidden rounded-card sm:h-80 sm:w-96",
		onPointerMove: (e) => {
			const r = e.currentTarget.getBoundingClientRect();
			const px = (e.clientX - r.left) / r.width - .5;
			const py = (e.clientY - r.top) / r.height - .5;
			if (img.current) img.current.style.transform = `translate3d(${px * -18}px, ${py * -12}px, 0) scale(1.14)`;
			if (sheen.current) sheen.current.style.transform = `translate3d(${px * 36}px, ${py * 18}px, 0)`;
		},
		onPointerLeave: () => {
			if (img.current) img.current.style.transform = "scale(1.08)";
			if (sheen.current) sheen.current.style.transform = "";
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				ref: img,
				src,
				alt: `${title}, ${place}`,
				className: "h-full w-full object-cover",
				style: { transform: "scale(1.08)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: sheen,
				className: "sheen pointer-events-none absolute inset-0"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
				className: "glass absolute inset-x-3 bottom-3 rounded-xl px-3 py-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-cond text-lg tracking-wide text-foam",
					children: title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-mist",
					children: place
				})]
			})
		]
	});
}
function LogoMark({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: `logo-stage ${className ?? ""}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: "/brand/logo-shark.png",
			alt: "Fishing Rebels",
			className: "logo-swim h-full w-full object-contain"
		})
	});
}
function Reel() {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		const wide = window.matchMedia("(min-width: 768px)").matches;
		el.poster = wide ? "/hero/split-wide.jpg" : "/hero/split-mobile.jpg";
		el.src = wide ? "/hero/shark-wide.mp4" : "/hero/shark-mobile.mp4";
		el.play().catch(() => void 0);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "reel",
		"aria-hidden": true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
			ref,
			className: "h-full w-full object-cover",
			muted: true,
			loop: true,
			playsInline: true,
			autoPlay: true,
			poster: "/hero/split-mobile.jpg"
		})
	});
}
function HookCursor() {
	const rings = (0, import_react.useRef)([]);
	(0, import_react.useEffect)(() => {
		const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
		const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		if (!fine || reduced) return;
		document.documentElement.classList.add("has-hook");
		const pos = {
			x: -200,
			y: -200
		};
		const trail = Array.from({ length: 6 }, () => ({
			x: -200,
			y: -200
		}));
		const move = (e) => {
			pos.x = e.clientX;
			pos.y = e.clientY;
		};
		window.addEventListener("pointermove", move);
		let raf = 0;
		const tick = () => {
			let px = pos.x;
			let py = pos.y;
			trail.forEach((r, i) => {
				const k = .38 - i * .04;
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "pointer-events-none fixed inset-0 z-50 hidden md:block",
		"aria-hidden": true,
		children: Array.from({ length: 6 }, (_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			ref: (el) => {
				rings.current[i] = el;
			},
			className: "absolute top-0 left-0",
			style: { opacity: 1 - i * .14 },
			children: i === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				width: "28",
				height: "28",
				viewBox: "0 0 28 28",
				className: "-translate-x-1 -translate-y-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M8 4c6 0 10 4 10 9a6 6 0 0 1-6 6H9",
						fill: "none",
						stroke: "#f4c542",
						strokeWidth: "1.6"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "8",
						cy: "4",
						r: "1.4",
						fill: "#ff6b4a"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M9 19c1.5 2 1 4-.4 5",
						fill: "none",
						stroke: "#e7f6f4",
						strokeWidth: "1.4"
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "block h-2 w-2 -translate-x-1 rounded-full bg-foam/70" })
		}, i))
	});
}
function RebelSite() {
	const canvasRef = (0, import_react.useRef)(null);
	const oceanRef = (0, import_react.useRef)(null);
	const crackRef = (0, import_react.useRef)(null);
	const todRef = (0, import_react.useRef)(null);
	const bookRef = (0, import_react.useRef)(null);
	const biteRef = (0, import_react.useRef)(null);
	const [menu, setMenu] = (0, import_react.useState)(false);
	const [drops, setDrops] = (0, import_react.useState)([]);
	const [sound, setSound] = (0, import_react.useState)(false);
	const [departure, setDeparture] = (0, import_react.useState)("mv");
	const [pin, setPin] = (0, import_react.useState)("mv");
	const [trip, setTrip] = (0, import_react.useState)("4");
	const [guests, setGuests] = (0, import_react.useState)(2);
	const [saved, setSaved] = (0, import_react.useState)([]);
	const [done, setDone] = (0, import_react.useState)(null);
	const [error, setError] = (0, import_react.useState)("");
	const audio = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		try {
			const raw = localStorage.getItem("fishing-rebels-requests");
			if (raw) setSaved(JSON.parse(raw));
		} catch {}
	}, []);
	(0, import_react.useEffect)(() => {
		if (!canvasRef.current) return;
		let dead = false;
		let handle = null;
		const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		import("./ocean-C56yb4ln.mjs").then(({ mountOcean }) => {
			if (dead || !canvasRef.current) return;
			try {
				handle = mountOcean(canvasRef.current, {
					reduced,
					onFrame: (f) => {
						if (crackRef.current) {
							const o = Math.min(.28, Math.max(0, (f.lunge - .78) * 1.4));
							crackRef.current.style.opacity = String(o);
						}
						if (todRef.current && todRef.current.textContent !== f.todName) todRef.current.textContent = f.todName;
						const section = bookRef.current;
						if (biteRef.current && section && f.lunge > .78) {
							const r = section.getBoundingClientRect();
							if (r.top < window.innerHeight * .72 && r.bottom > 80) {
								biteRef.current.classList.remove("is-on");
								biteRef.current.offsetWidth;
								biteRef.current.classList.add("is-on");
							}
						}
					}
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
		const onPointer = (e) => {
			const x = e.clientX / window.innerWidth * 2 - 1;
			const y = -(e.clientY / window.innerHeight) * 2 + 1;
			oceanRef.current?.setPointer(x, y);
		};
		window.addEventListener("scroll", onScroll, { passive: true });
		window.addEventListener("pointermove", onPointer, { passive: true });
		onScroll();
		let revert;
		if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) Promise.all([import("../_libs/gsap.mjs").then((n) => n.t), import("../_libs/gsap.mjs").then((n) => n.n)]).then(([{ default: gsap }, { ScrollTrigger }]) => {
			if (dead) return;
			gsap.registerPlugin(ScrollTrigger);
			const ctx = gsap.context(() => {
				gsap.utils.toArray("[data-reveal]").forEach((el) => {
					gsap.from(el, {
						y: 32,
						autoAlpha: 0,
						duration: .8,
						ease: "power3.out",
						scrollTrigger: {
							trigger: el,
							start: "top 90%"
						}
					});
				});
			});
			revert = () => ctx.revert();
		});
		return () => {
			dead = true;
			window.removeEventListener("scroll", onScroll);
			window.removeEventListener("pointermove", onPointer);
			revert?.();
			handle?.dispose();
			oceanRef.current = null;
		};
	}, []);
	(0, import_react.useEffect)(() => {
		const book = bookRef.current;
		if (!book) return;
		const io = new IntersectionObserver((entries) => {
			if (entries.some((e) => e.isIntersecting)) oceanRef.current?.breach();
		}, { threshold: .45 });
		io.observe(book);
		return () => io.disconnect();
	}, []);
	const enableSound = async () => {
		if (sound && audio.current) {
			await audio.current.ctx.suspend();
			setSound(false);
			return;
		}
		const AC = window.AudioContext || window.webkitAudioContext;
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
			gain.gain.value = .045;
			noise.connect(filter).connect(gain).connect(ctx.destination);
			noise.start();
			const cast = () => {
				const o = ctx.createOscillator();
				const g = ctx.createGain();
				o.type = "triangle";
				o.frequency.setValueAtTime(480, ctx.currentTime);
				o.frequency.exponentialRampToValueAtTime(90, ctx.currentTime + .18);
				g.gain.setValueAtTime(1e-4, ctx.currentTime);
				g.gain.exponentialRampToValueAtTime(.12, ctx.currentTime + .02);
				g.gain.exponentialRampToValueAtTime(1e-4, ctx.currentTime + .22);
				o.connect(g).connect(ctx.destination);
				o.start();
				o.stop(ctx.currentTime + .24);
			};
			audio.current = {
				ctx,
				gain,
				cast
			};
		} else await audio.current.ctx.resume();
		setSound(true);
	};
	const cast = () => {
		oceanRef.current?.ripple();
		if (sound) audio.current?.cast();
	};
	const active = PINS.find((p) => p.id === pin) ?? PINS[2];
	const submit = (e) => {
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
		const today = /* @__PURE__ */ new Date();
		today.setHours(0, 0, 0, 0);
		if (/* @__PURE__ */ new Date(`${date}T00:00:00`) < today) {
			setError("Pick a departure date from today forward.");
			return;
		}
		const tripLabel = TRIPS.find((t) => t.id === trip)?.label ?? trip;
		const depLabel = PINS.find((p) => p.id === departure)?.name ?? departure;
		const item = {
			id: `FR-${Math.random().toString(36).slice(2, 6).toUpperCase()}`,
			name,
			contact,
			date,
			guests,
			trip: tripLabel,
			departure: depLabel,
			note
		};
		const next = [item, ...saved].slice(0, 8);
		setSaved(next);
		localStorage.setItem("fishing-rebels-requests", JSON.stringify(next));
		setDone(item);
		setError("");
		cast();
		oceanRef.current?.breach();
	};
	const waText = done ? `https://wa.me/523221882266?text=${encodeURIComponent(`Fishing Rebels request ${done.id}\n${done.name}\n${done.date} · ${done.guests} anglers\n${done.trip}\n${done.departure}\n${done.contact}`)}` : "https://wa.me/523221882266";
	const splashAt = (e) => {
		if (!e.target.closest("button, a")) return;
		const burst = Array.from({ length: 14 }, (_, i) => {
			const ang = Math.PI * 2 * i / 14 + Math.random() * .35;
			const dist = 28 + Math.random() * 86;
			return {
				id: Date.now() + i + Math.random(),
				x: e.clientX,
				y: e.clientY,
				dx: Math.cos(ang) * dist,
				dy: Math.sin(ang) * dist - 36,
				s: 7 + Math.random() * 11
			};
		});
		setDrops((prev) => [...prev, ...burst].slice(-48));
		window.setTimeout(() => {
			setDrops((prev) => prev.filter((drop) => !burst.some((b) => b.id === drop.id)));
		}, 700);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-screen",
		onClick: splashAt,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reel, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "scrim-top pointer-events-none fixed inset-x-0 top-0 z-10 h-28" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: crackRef,
				className: "pointer-events-none fixed inset-0 z-40 opacity-0",
				"aria-hidden": true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
					viewBox: "0 0 100 100",
					className: "h-full w-full",
					preserveAspectRatio: "none",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
						stroke: "#ffffff",
						strokeWidth: "0.15",
						fill: "none",
						opacity: "0.55",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M50 42 L62 18 L70 28 L88 8" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M50 42 L78 48 L96 40" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M50 42 L68 70 L90 86" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M50 42 L40 72 L22 92" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M50 42 L28 50 L6 58" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M50 42 L30 24 L8 16" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M62 18 L74 22" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M68 70 L76 64" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M28 50 L24 36" })
						]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HookCursor, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "relative z-30 px-4 pt-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute right-3 top-3 z-40 flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "glass grid h-11 w-11 place-items-center rounded-full text-ink",
							onClick: () => void enableSound(),
							"aria-pressed": sound,
							"aria-label": sound ? "Mute ocean" : "Play ocean ambience",
							children: sound ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VolumeX, { className: "h-5 w-5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "glass grid h-11 w-11 place-items-center rounded-full text-ink lg:hidden",
							"aria-expanded": menu,
							"aria-label": "Menu",
							onClick: () => setMenu((v) => !v),
							children: menu ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#top",
						className: "mx-auto block w-[min(96vw,760px)]",
						onClick: () => setMenu(false),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogoMark, { className: "block h-auto w-full" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "site-nav mx-auto mt-1 hidden max-w-6xl flex-wrap justify-center gap-x-5 gap-y-2 px-4 lg:flex",
						"aria-label": "Primary",
						children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: item.href,
							onClick: cast,
							children: item.label
						}, item.label))
					}),
					menu ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "glass mx-auto mt-3 max-w-sm rounded-card p-4 lg:hidden",
						children: [NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: item.href,
							className: "block py-2 text-sm font-semibold tracking-wide text-ink",
							onClick: () => {
								setMenu(false);
								cast();
							},
							children: item.label
						}, item.label)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#book",
							className: "pulse-coral mt-2 block rounded-full py-3 text-center",
							onClick: () => setMenu(false),
							children: "BOOK YOUR FISHING CHARTER"
						})]
					}) : null
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				id: "top",
				className: "page-sheet light-veil relative z-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "mx-auto grid max-w-6xl items-center gap-8 px-4 py-8 lg:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-semibold tracking-widest text-ink",
								children: "PRIVATE SPORTFISHING • PUERTO VALLARTA, MEXICO"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-3 text-4xl leading-tight sm:text-5xl",
								children: "Puerto Vallarta Fishing Charters & Deep Sea Fishing"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 max-w-xl text-base leading-relaxed text-ink sm:text-lg",
								children: "Experience some of Mexico’s best sportfishing with private inshore and offshore fishing charters in Puerto Vallarta. Target yellowfin tuna, marlin, sailfish, mahi-mahi, snapper and more with an experienced local crew. Private charter starting at $275 for one person, 4hrs."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 flex flex-wrap gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Magnetic, {
									href: "#book",
									onClick: cast,
									className: "pulse-coral inline-flex h-12 items-center px-5",
									children: "BOOK YOUR FISHING CHARTER"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Magnetic, {
									href: "#gallery",
									onClick: cast,
									className: "pulse-coral inline-flex h-12 items-center px-5",
									children: "GALLERY"
								})]
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/original/hero-catch.jpg",
							alt: "Anglers holding roosterfish caught on a Puerto Vallarta fishing charter",
							className: "photo-frame w-full"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "wave-rule relative z-10",
						"aria-hidden": true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "included",
						className: "relative z-10 mx-auto max-w-6xl px-4 py-20",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-cond tracking-widest text-gold",
								children: "THE DAY, HANDLED"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-2 font-cond text-4xl uppercase tracking-wide text-foam sm:text-6xl",
								"data-reveal": true,
								children: "Everything You Need Is Included"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 max-w-3xl text-base leading-relaxed text-foam sm:text-lg",
								"data-reveal": true,
								children: "Stay closer to shore for an action-packed inshore trip or head into deeper Pacific waters for serious deep sea fishing in Puerto Vallarta. Our crew uses current fishing reports and local knowledge to determine where the bite is strongest, helping you spend more time fishing and less time searching. Whether you're planning a family fishing trip, a private charter with friends, or a serious big-game expedition, Fishing Rebels provides a personalized experience with professional crews and tournament-grade fishing equipment."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-8 font-cond text-2xl tracking-wide",
								"data-reveal": true,
								children: "Your charter comes prepared with ALL the essentials for a day of sportfishing"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
								style: { perspective: "900px" },
								children: INCLUDED.map((item) => {
									const Icon = item.icon;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TiltCard, { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
											className: "h-6 w-6 text-gold",
											"aria-hidden": true
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "mt-4 font-cond text-2xl tracking-wide",
											children: item.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-mist",
											children: item.text
										})
									] }, item.title);
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-8 max-w-3xl leading-relaxed text-mist",
								"data-reveal": true,
								children: "Whether you're looking for a relaxing Puerto Vallarta fishing trip along the coastlines or an offshore adventure chasing Tuna and Marlin. Fishing Rebels delivers authentic fishing experiences built around great fishing, local expertise, and unforgettable days in the Banderas Bay and the Pacific."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "charters",
						className: "relative z-10 mx-auto max-w-6xl overflow-hidden px-4 py-16",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-cond tracking-widest text-gold",
								children: "ABOUT US · BOATS"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-2 max-w-3xl font-cond text-4xl uppercase tracking-wide sm:text-6xl",
								"data-reveal": true,
								children: "Private Fishing Charters in Puerto Vallarta, Mexico"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 grid gap-8 lg:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-4 text-base leading-relaxed sm:text-lg",
									"data-reveal": true,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Fishing Rebels offers private fishing charters in Puerto Vallarta for everyone from first-time anglers and families to experienced fishermen chasing trophy fish in the Pacific. Our experienced local captains combine real-time fishing knowledge, premium equipment, and flexible trip options to give you the best opportunity for an incredible day on the water." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "From 4-hour inshore fishing trips to full-day and multi-day offshore expeditions, every charter is built around the conditions, season, and type of fishing you want to experience. Target some of Puerto Vallarta’s most sought-after species, including Yellowfin Tuna, Marlin, Sailfish, Dorado (Mahi-Mahi), Roosterfish, Wahoo, and Snapper." })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative min-h-48",
									"data-reveal": true,
									children: [
										SPECIES.map((name) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "glass mb-3 mr-3 inline-flex rounded-full px-4 py-2 font-cond text-xl tracking-wide",
											children: name
										}, name)),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fish, {
											className: "swim-fish top-6 h-6 w-6 text-gold",
											style: { animationDuration: "16s" },
											"aria-hidden": true
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fish, {
											className: "swim-fish top-24 h-5 w-5 text-foam",
											style: {
												animationDuration: "22s",
												animationDelay: "-8s"
											},
											"aria-hidden": true
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fish, {
											className: "swim-fish top-40 h-4 w-4 text-mist",
											style: {
												animationDuration: "26s",
												animationDelay: "-3s"
											},
											"aria-hidden": true
										})
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-10 grid gap-4 lg:grid-cols-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative overflow-hidden rounded-card lg:col-span-3",
									"data-reveal": true,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: "/map/bay.jpg",
											alt: "Stylized chart of Banderas Bay opening onto the Pacific",
											className: "h-full min-h-80 w-full object-cover"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
											viewBox: "0 0 100 100",
											preserveAspectRatio: "none",
											className: "absolute inset-0 h-full w-full",
											"aria-hidden": true,
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
													className: "route-line",
													d: "M66 50 C 50 40 36 28 28 22"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
													className: "route-line",
													d: "M66 50 C 40 48 22 44 9 40"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
													className: "route-line",
													d: "M66 50 C 58 48 50 47 46 46"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
													className: "route-line",
													d: "M44 74 C 36 70 28 68 20 66"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
													className: "route-line",
													d: "M57 18 C 48 20 36 21 28 22"
												})
											]
										}),
										PINS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											className: `absolute grid h-11 min-w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border px-2 font-cond text-sm ${pin === p.id ? "border-coral bg-coral text-ink" : "border-gold bg-ink/80 text-gold"}`,
											style: {
												left: `${p.x}%`,
												top: `${p.y}%`
											},
											onClick: () => {
												setPin(p.id);
												if (p.kind === "dep") setDeparture(p.id);
												cast();
											},
											"aria-pressed": pin === p.id,
											children: p.kind === "dep" ? "DEP" : "●"
										}, p.id))
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
									className: "glass rounded-card p-5 lg:col-span-2",
									"data-reveal": true,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-cond tracking-widest text-gold",
											children: active.zone
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "mt-2 font-cond text-3xl uppercase tracking-wide",
											children: active.name
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-3 text-mist",
											children: active.kind === "dep" ? "Flexible departure locations throughout Puerto Vallarta and Riviera Nayarit, close to your hotel, villa, or resort." : "Fishing grounds of Marietas Islands, El Morro, La Corbeteña (\"The Rock\") and El Banco (\"The Banks\")."
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											className: "mt-5 h-12 rounded-full bg-gold px-5 font-cond text-lg text-ink",
											onClick: () => {
												if (active.kind === "dep") setDeparture(active.id);
												document.getElementById("book")?.scrollIntoView({ behavior: "smooth" });
												cast();
											},
											children: active.kind === "dep" ? "Depart from here" : "Fish these grounds"
										})
									]
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "departures",
						className: "relative z-10 mx-auto max-w-6xl px-4 py-16",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-cond text-4xl uppercase tracking-wide sm:text-6xl",
								"data-reveal": true,
								children: "Convenient Departures Around Puerto Vallarta"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 max-w-3xl text-lg leading-relaxed",
								"data-reveal": true,
								children: "We offer flexible departure locations throughout Puerto Vallarta and Riviera Nayarit, making it easy to board near your hotel, villa, or resort."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 grid items-start gap-6 lg:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
									className: "photo-frame aspect-video w-full bg-black object-cover",
									src: "/media/owner.mp4",
									controls: true,
									playsInline: true,
									poster: "/original/hero-catch.jpg"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "grid gap-3",
									children: PINS.filter((p) => p.kind === "dep").map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										className: `glass w-full rounded-card px-5 py-4 text-left ${departure === p.id ? "border-gold" : ""}`,
										onClick: () => {
											setDeparture(p.id);
											setPin(p.id);
											cast();
										},
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block font-cond text-sm tracking-widest text-gold",
											children: p.zone
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "mt-1 block font-cond text-2xl",
											children: p.name
										})]
									}) }, p.id))
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						id: "catch",
						className: "relative z-10 px-4 py-10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "wood-sign relative z-10 mx-auto max-w-3xl rounded-md px-6 py-8 text-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-brush text-3xl leading-tight text-foam sm:text-5xl",
								children: "WE CATCH FISH OR WE DON'T GO HOME!"
							})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "gallery",
						className: "relative z-10 py-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mx-auto flex max-w-6xl items-end justify-between px-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-cond text-4xl uppercase tracking-wide sm:text-6xl",
									children: "Gallery"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-cond text-gold",
									children: "CATCHING GALLERY"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6 hidden overflow-hidden md:block",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "marquee-track flex w-max gap-4 px-4",
									children: [...PHOTOS, ...PHOTOS].map((photo, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ParallaxFigure, { ...photo }, `${photo.src}-${i}`))
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4 flex gap-4 overflow-x-auto px-4 pb-2 md:hidden",
								children: PHOTOS.map((photo) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ParallaxFigure, { ...photo }, photo.src))
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "reviews",
						className: "relative z-10 mx-auto max-w-6xl px-4 py-20",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-cond tracking-widest text-gold",
								children: "THE REEL DEAL"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-2 font-cond text-4xl uppercase tracking-wide sm:text-6xl",
								"data-reveal": true,
								children: "5 Star Reviews"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-8 grid gap-4 lg:grid-cols-2",
								children: REVIEWS.map((review) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
									className: "group glass rounded-card p-6",
									"data-reveal": true,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex gap-1 text-gold",
											"aria-label": "5 stars",
											children: Array.from({ length: 5 }, (_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "star-glow h-5 w-5 fill-current" }, i))
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
											className: "mt-4 text-base leading-relaxed",
											children: review.quote
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
											className: "mt-4 font-cond text-lg text-gold",
											children: [review.name, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "text-mist",
												children: [" · ", review.meta]
											})]
										})
									]
								}, review.name + review.meta))
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "book",
						ref: bookRef,
						className: "relative z-10 mx-auto max-w-6xl px-4 py-20",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-cond tracking-widest text-coral",
								children: "FINAL STRIKE"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-2 max-w-4xl font-cond text-4xl uppercase tracking-wide sm:text-6xl",
								children: "LET'S HELP YOU BOOK YOUR Puerto Vallarta FISHING CHARTER"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 max-w-3xl text-lg leading-relaxed",
								children: "Find the perfect fishing trip for your group, from inshore for 4 or 6hrs to full-day 8 to 14hrs offshore expeditions. At the grounds of Marietas Islands, El Morro, La Corbeteña (\"The Rock\") and El Banco (\"The Banks\")"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 font-cond text-2xl text-gold",
								children: "Choose your charter and get ready to fish Puerto Vallarta’s legendary waters."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 grid gap-6 lg:grid-cols-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
									className: "glass relative rounded-card p-5 sm:p-6 lg:col-span-3",
									onSubmit: submit,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											ref: biteRef,
											className: "bite-mark",
											"aria-hidden": true
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "grid gap-3 sm:grid-cols-2",
											children: TRIPS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												type: "button",
												onClick: () => {
													setTrip(item.id);
													cast();
												},
												className: `rounded-xl border px-4 py-3 text-left ${trip === item.id ? "border-coral bg-coral text-ink" : "border-line text-foam"}`,
												"aria-pressed": trip === item.id,
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "block font-cond text-xl",
													children: item.label
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: `block text-sm ${trip === item.id ? "text-ink" : "text-mist"}`,
													children: item.detail
												})]
											}, item.id))
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
											className: "mt-4 block text-sm text-mist",
											children: ["Departure", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
												className: "mt-1 h-12 w-full rounded-xl border border-line bg-ink px-3 text-foam",
												value: departure,
												onChange: (e) => setDeparture(e.target.value),
												children: PINS.filter((p) => p.kind === "dep").map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
													value: p.id,
													children: [
														p.zone,
														": ",
														p.name
													]
												}, p.id))
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-3 grid gap-3 sm:grid-cols-2",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
													className: "text-sm text-mist",
													children: ["Name", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
														name: "name",
														autoComplete: "name",
														suppressHydrationWarning: true,
														className: "mt-1 h-12 w-full rounded-xl border border-line bg-ink px-3 text-foam"
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
													className: "text-sm text-mist",
													children: ["Email or phone", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
														name: "contact",
														autoComplete: "email",
														suppressHydrationWarning: true,
														className: "mt-1 h-12 w-full rounded-xl border border-line bg-ink px-3 text-foam"
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
													className: "text-sm text-mist",
													children: ["Date", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
														name: "date",
														type: "date",
														suppressHydrationWarning: true,
														className: "mt-1 h-12 w-full rounded-xl border border-line bg-ink px-3 text-foam"
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
													className: "text-sm text-mist",
													children: ["Anglers", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
														suppressHydrationWarning: true,
														className: "mt-1 h-12 w-full rounded-xl border border-line bg-ink px-3 text-foam",
														type: "number",
														min: 1,
														max: 12,
														value: guests,
														onChange: (e) => setGuests(Number(e.target.value))
													})]
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
											className: "mt-3 block text-sm text-mist",
											children: ["Notes", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
												name: "note",
												rows: 3,
												suppressHydrationWarning: true,
												className: "mt-1 w-full rounded-xl border border-line bg-ink px-3 py-2 text-foam",
												placeholder: "Hotel, kids onboard, trophy or meat fish…"
											})]
										}),
										error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-3 text-coral",
											children: error
										}) : null,
										done ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "mt-3 text-gold",
											children: [
												"Request ",
												done.id,
												" is saved on this device. The crew still confirms by phone or WhatsApp — this is not a paid hold."
											]
										}) : null,
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "relative mt-5",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "submit",
												className: "pulse-coral h-14 w-full rounded-full bg-coral font-cond text-2xl tracking-wide text-ink",
												onClick: cast,
												children: "Book Your Charter"
											})
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
									className: "space-y-4 lg:col-span-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "glass rounded-card p-5",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "font-cond text-2xl",
												children: "Talk to the crew"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
												href: "tel:+523221882266",
												className: "mt-3 flex items-center gap-2 text-gold",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4" }), " English Hotline +52 322 188 2266"]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
												href: waText,
												className: "mt-2 flex items-center gap-2 text-gold",
												target: "_blank",
												rel: "noreferrer",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-4 w-4" }), " Book Fast WhatsApp"]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
												href: "mailto:catching@fishingrebels.com",
												className: "mt-2 flex items-center gap-2 text-gold",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4" }), " catching@fishingrebels.com"]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-4 text-sm leading-relaxed text-mist",
												children: "Marina Los Peines, Los Peines 332, Isla Iguana, 48333 Puerto Vallarta, Jal., Mexico"
											})
										]
									}), saved.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "glass rounded-card p-5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "font-cond text-xl",
											children: "Saved on this phone"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
											className: "mt-3 space-y-2 text-sm text-mist",
											children: saved.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-foam",
													children: item.id
												}),
												" · ",
												item.date,
												" · ",
												item.trip
											] }, item.id))
										})]
									}) : null]
								})]
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "light-veil relative z-10 border-t border-black/10 px-4 py-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-end sm:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogoMark, { className: "block h-20 w-72" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-md font-brush text-2xl text-gold",
							children: "WE CATCH FISH OR WE DON'T GO HOME!"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-mist",
							children: "Best fishing charters in Puerto Vallarta"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-mist",
							children: "Trips from 4 hours up to 10 days"
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-sm text-mist",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "HOME · ABOUT US · BOATS · CATCHING GALLERY · CONTACT US" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1",
								children: "PUERTO VALLARTA FISHING REPORT · CAPTAINS LOG · PARTNERS & SPONSORS"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-3",
								children: [
									"© ",
									(/* @__PURE__ */ new Date()).getFullYear(),
									" Fishing Rebels · Puerto Vallarta"
								]
							})
						]
					})]
				})
			}),
			drops.map((drop) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "splash-drop",
				style: {
					left: drop.x,
					top: drop.y,
					width: drop.s,
					height: drop.s,
					["--dx"]: `${drop.dx}px`,
					["--dy"]: `${drop.dy}px`
				}
			}, drop.id))
		]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RebelSite, {});
}
//#endregion
export { Home as component };
