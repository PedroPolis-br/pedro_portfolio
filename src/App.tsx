import { useEffect, useRef, useState } from "react";
import { ArrowDownRight, ArrowUpRight, Code2, Database, Layers3, Menu, Sparkles, X } from "lucide-react";

const projects = [
  { index: "01", title: "PID Gestão", type: "Legal operations platform", text: "A multi-office platform designed to turn thousands of documents into clear, trackable legal operations.", tags: ["Product", "OCR + AI", "Multi-tenant"], accent: "acid", visual: "pid" },
  { index: "02", title: "MesaPro", type: "Restaurant operating system", text: "From QR ordering to kitchen flow — one fast, coherent system for the entire restaurant experience.", tags: ["SaaS", "UX Strategy", "Real-time"], accent: "blue", visual: "mesa" },
  { index: "03", title: "DesafYou", type: "Social challenge platform", text: "A scalable product experience connecting creators, challenges, communities and payments.", tags: ["Web App", "Payments", "Supabase"], accent: "orange", visual: "challenge" },
  { index: "04", title: "Souza Serviços", type: "Digital presence for local business", text: "A focused, conversion-driven website translating craftsmanship into a credible digital experience.", tags: ["Website", "Art Direction", "Conversion"], accent: "violet", visual: "souza", href: "https://souzaservicos.vercel.app/" },
];

function OrbCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    let frame = 0, width = 0, height = 0, mx = 0, my = 0;
    const dots = Array.from({ length: 110 }, (_, i) => ({ a: (i / 110) * Math.PI * 2, b: Math.acos(1 - (2 * (i + 0.5)) / 110) }));
    const resize = () => { const dpr = Math.min(devicePixelRatio, 2); width = canvas.clientWidth; height = canvas.clientHeight; canvas.width = width * dpr; canvas.height = height * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0); };
    const move = (e: PointerEvent) => { mx = (e.clientX / innerWidth - .5) * .45; my = (e.clientY / innerHeight - .5) * .3; };
    const draw = (time: number) => {
      ctx.clearRect(0, 0, width, height);
      const r = Math.min(width, height) * .31, cx = width * .5, cy = height * .5, rotation = time * .00012 + mx;
      dots.forEach(dot => { const x0 = Math.sin(dot.b) * Math.cos(dot.a + rotation), z0 = Math.sin(dot.b) * Math.sin(dot.a + rotation), y0 = Math.cos(dot.b); const x = cx + x0 * r, y = cy + (y0 + my) * r, depth = (z0 + 1) / 2; ctx.beginPath(); ctx.arc(x, y, .9 + depth * 2.2, 0, Math.PI * 2); ctx.fillStyle = depth > .62 ? `rgba(203,255,77,${.25 + depth * .72})` : `rgba(255,255,255,${.08 + depth * .3})`; ctx.fill(); });
      frame = requestAnimationFrame(draw);
    };
    resize(); addEventListener("resize", resize); addEventListener("pointermove", move); frame = requestAnimationFrame(draw);
    return () => { cancelAnimationFrame(frame); removeEventListener("resize", resize); removeEventListener("pointermove", move); };
  }, []);
  return <canvas ref={ref} className="orb-canvas" aria-hidden="true" />;
}

function ProjectVisual({ kind }: { kind: string }) {
  if (kind === "pid") return <div className="mock mock-pid"><div className="mock-bar"><i/><i/><i/><span>case intelligence / overview</span></div><div className="pid-grid"><aside><b>PID</b><em/><em/><em/><em/></aside><section><small>ACTIVE CASES</small><strong>2,482</strong><div className="chart-line"><span/><span/><span/><span/><span/><span/><span/></div></section><section className="document-stack"><div/><div/><div/></section></div></div>;
  if (kind === "mesa") return <div className="mock mock-mesa"><div className="phone"><div className="phone-top"/><small>GOOD EVENING</small><b>Your table,<br/>your experience.</b><div className="dish-row"><i/><i/><i/></div><button>VIEW MENU <ArrowUpRight size={13}/></button></div><div className="order-card"><span>TABLE 08</span><b>03 items</b><div/><div/><div/><em>IN THE KITCHEN</em></div></div>;
  if (kind === "challenge") return <div className="mock mock-challenge"><div className="rings"><i/><i/><i/><strong>73%</strong></div><div className="challenge-copy"><small>WEEKLY PROGRESS</small><b>Build better.<br/>Together.</b><span>12 day streak</span></div><div className="avatars"><i>PL</i><i>JS</i><i>MK</i><i>+8</i></div></div>;
  return <div className="mock mock-souza"><div className="steel-mark">S</div><p>BUILT TO<br/><b>LAST.</b></p><div className="steel-lines"><i/><i/><i/><i/></div><span>PRECISION • CRAFT • TRUST</span></div>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const cursor = useRef<HTMLDivElement>(null), cursorDot = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoaded(true), 500);
    const move = (e: PointerEvent) => { document.documentElement.style.setProperty("--mx", `${e.clientX}px`); document.documentElement.style.setProperty("--my", `${e.clientY}px`); if (cursor.current) cursor.current.style.transform = `translate3d(${e.clientX}px,${e.clientY}px,0)`; if (cursorDot.current) cursorDot.current.style.transform = `translate3d(${e.clientX}px,${e.clientY}px,0)`; };
    const progress = () => { const max = document.documentElement.scrollHeight - innerHeight; document.documentElement.style.setProperty("--scroll", `${max ? scrollY / max : 0}`); };
    const observer = new IntersectionObserver(entries => entries.forEach(entry => entry.isIntersecting && entry.target.classList.add("in-view")), { threshold: .12 });
    document.querySelectorAll(".reveal").forEach(el => observer.observe(el)); addEventListener("pointermove", move); addEventListener("scroll", progress, { passive: true }); progress();
    return () => { clearTimeout(timer); observer.disconnect(); removeEventListener("pointermove", move); removeEventListener("scroll", progress); };
  }, []);
  const copyEmail = async () => { await navigator.clipboard.writeText("py.pedropinheir@gmail.com"); setCopied(true); setTimeout(() => setCopied(false), 1800); };

  return <main className={loaded ? "site loaded" : "site"}>
    <div className="preloader"><span>PL</span><i/></div><div className="noise" aria-hidden="true"/><div className="cursor" ref={cursor}/><div className="cursor-dot" ref={cursorDot}/><div className="scroll-progress"/>
    <header className="nav-shell"><a href="#top" className="logo" aria-label="Pedro Lucas home"><span>P</span><span>L</span></a><nav className={menuOpen ? "nav-links open" : "nav-links"}>{["Work","Expertise","About","Contact"].map(item => <a href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)} key={item}>{item}</a>)}</nav><div className="nav-status"><i/> Available for select projects</div><button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X/> : <Menu/>}</button></header>
    <section className="hero" id="top"><div className="hero-grid"/><OrbCanvas/><div className="hero-kicker"><span>CREATIVE DEVELOPER</span><span>BASED IN BRAZIL · WORKING WORLDWIDE</span></div><div className="hero-copy"><h1><span className="line"><em>I BUILD</em></span><span className="line"><em>DIGITAL</em></span><span className="line outline"><em>ADVANTAGE.</em></span></h1><p>I turn complex business ideas into fast, clear and memorable digital products — from the first interaction to the system underneath.</p></div><a href="#work" className="scroll-cue"><span>Explore selected work</span><ArrowDownRight/></a><div className="hero-count"><span>01</span><i/><span>05</span></div></section>
    <section className="manifesto section-pad reveal"><div className="section-label"><span>01</span> THE APPROACH</div><div className="manifesto-copy"><p>Not just interfaces.</p><h2>I design the <span>logic, rhythm</span> and <span>feeling</span> that make software impossible to ignore.</h2></div><div className="manifesto-note">Strategy × Design × Engineering</div></section>
    <section className="work section-pad" id="work"><div className="work-heading reveal"><div className="section-label"><span>02</span> SELECTED WORK</div><h2>Built for impact.<br/><i>Engineered to last.</i></h2></div><div className="project-list">{projects.map(project => <article className={`project-card reveal ${project.accent}`} key={project.title}><div className="project-meta"><span>{project.index}</span><span>{project.type}</span></div><div className="project-visual"><ProjectVisual kind={project.visual}/><div className="project-glow"/></div><div className="project-info"><h3>{project.title}</h3><p>{project.text}</p><div className="tag-row">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>{project.href && <a href={project.href} target="_blank" rel="noreferrer" aria-label={`Visit ${project.title}`}><ArrowUpRight/></a>}</div></article>)}</div></section>
    <section className="expertise section-pad" id="expertise"><div className="section-label reveal"><span>03</span> WHAT I BRING</div><div className="expertise-intro reveal"><h2>One mind.<br/>Full product view.</h2><p>I connect commercial goals, user experience and technical reality — so the result looks sharp and works even harder.</p></div><div className="services"><article className="service reveal"><span>01</span><Sparkles/><h3>Digital Experiences</h3><p>High-impact websites, landing pages and interactive brand experiences.</p><div>Art direction · Motion · Front-end</div></article><article className="service reveal"><span>02</span><Layers3/><h3>Product & SaaS</h3><p>Clear, scalable products shaped around real workflows and business value.</p><div>Product thinking · UX · Multi-tenant</div></article><article className="service reveal"><span>03</span><Code2/><h3>Custom Systems</h3><p>Software that replaces friction, spreadsheets and repetitive operations.</p><div>PHP · Delphi · APIs · Automation</div></article><article className="service reveal"><span>04</span><Database/><h3>Data & Architecture</h3><p>Strong structures beneath the surface — reliable, secure and built to evolve.</p><div>Firebird · SQL · Supabase · Migrations</div></article></div></section>
    <section className="numbers section-pad reveal"><div className="number-card"><strong>03</strong><span>dimensions in every build</span><p>Strategy<br/>Experience<br/>Engineering</p></div><div className="number-statement"><small>THE DIFFERENCE</small><p>Most developers execute a screen. I look for the <i>business behind it.</i></p></div></section>
    <section className="about section-pad" id="about"><div className="about-orbit reveal"><div className="orbit-ring one"/><div className="orbit-ring two"/><div className="orbit-core">PL<span>20°</span></div><p>CURIOUS BY DEFAULT<br/>OBSESSED WITH CLARITY</p></div><div className="about-copy reveal"><div className="section-label"><span>04</span> ABOUT</div><h2>Developer by craft.<br/><i>Problem-solver by nature.</i></h2><p>I’m Pedro Lucas, a Brazilian developer working where product, design and engineering meet. My background spans ERP systems, web experiences, database architecture, reports, migrations and AI-powered products.</p><p>That range lets me see more than a brief. I understand the operation, find the leverage and build the shortest path to a result people can feel.</p><div className="about-facts"><span>Espírito Santo, Brazil</span><span>UTC−03</span><span>Remote collaboration</span></div></div></section>
    <section className="marquee" aria-hidden="true"><div><span>LET’S BUILD SOMETHING THAT MOVES</span><i>✦</i><span>LET’S BUILD SOMETHING THAT MOVES</span><i>✦</i></div></section>
    <footer className="contact section-pad" id="contact"><div className="section-label"><span>05</span> START A CONVERSATION</div><div className="contact-main"><p>Have a project, a product idea<br/>or a bold problem?</p><a href="mailto:py.pedropinheir@gmail.com" className="contact-link">LET’S TALK<span><ArrowUpRight/></span></a></div><div className="contact-bottom"><button onClick={copyEmail}>{copied ? "EMAIL COPIED ✓" : "COPY EMAIL"}</button><div><span>BRAZIL</span><span>WORLDWIDE</span></div><span>© {new Date().getFullYear()} PEDRO LUCAS</span></div></footer>
  </main>;
}
