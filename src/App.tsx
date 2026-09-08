import { useEffect, useRef, useState } from "react";
import { ArrowDownRight, ArrowUpRight, Code2, Database, Layers3, Menu, Sparkles, X } from "lucide-react";

type Language = "en" | "pt";

const content = {
  en: {
    nav: [{ label: "Work", id: "work" }, { label: "Expertise", id: "expertise" }, { label: "About", id: "about" }, { label: "Contact", id: "contact" }],
    available: "Available for select projects",
    toggle: "Mudar para português",
    menu: "Toggle menu",
    home: "Pedro Lucas home",
    kicker: "Creative developer",
    location: "Based in Brazil · Working worldwide",
    hero: ["I build", "digital", "advantage."],
    heroText: "I turn complex business ideas into fast, clear and memorable digital products — from the first interaction to the system underneath.",
    explore: "Explore selected work",
    approach: "The approach",
    notJust: "Not just interfaces.",
    manifesto: <>I design the <span>logic, rhythm</span> and <span>feeling</span> that make software impossible to ignore.</>,
    formula: "Strategy × Design × Engineering",
    selected: "Selected work",
    built: <>Built for impact.<br/><i>Engineered to last.</i></>,
    visit: "Visit",
    projects: [
      { index: "01", title: "PID Gestão", type: "Legal operations platform", text: "A multi-office platform designed to turn thousands of documents into clear, trackable legal operations.", tags: ["Product", "OCR + AI", "Multi-tenant"], accent: "acid", visual: "pid" },
      { index: "02", title: "MesaPro", type: "Restaurant operating system", text: "From QR ordering to kitchen flow — one fast, coherent system for the entire restaurant experience.", tags: ["SaaS", "UX Strategy", "Real-time"], accent: "blue", visual: "mesa" },
      { index: "03", title: "DesafYou", type: "Social challenge platform", text: "A scalable product experience connecting creators, challenges, communities and payments.", tags: ["Web App", "Payments", "Supabase"], accent: "orange", visual: "challenge" },
      { index: "04", title: "Souza Serviços", type: "Digital presence for local business", text: "A focused, conversion-driven website translating craftsmanship into a credible digital experience.", tags: ["Website", "Art Direction", "Conversion"], accent: "violet", visual: "souza", href: "https://souzaservicos.vercel.app/" },
    ],
    whatIBring: "What I bring",
    expertiseTitle: <>One mind.<br/>Full product view.</>,
    expertiseText: "I connect commercial goals, user experience and technical reality — so the result looks sharp and works even harder.",
    services: [
      { title: "Digital Experiences", text: "High-impact websites, landing pages and interactive brand experiences.", tools: "Art direction · Motion · Front-end" },
      { title: "Product & SaaS", text: "Clear, scalable products shaped around real workflows and business value.", tools: "Product thinking · UX · Multi-tenant" },
      { title: "Custom Systems", text: "Software that replaces friction, spreadsheets and repetitive operations.", tools: "PHP · Delphi · APIs · Automation" },
      { title: "Data & Architecture", text: "Strong structures beneath the surface — reliable, secure and built to evolve.", tools: "Firebird · SQL · Supabase · Migrations" },
    ],
    dimensions: "dimensions in every build",
    dimensionList: <>Strategy<br/>Experience<br/>Engineering</>,
    difference: "The difference",
    differenceText: <>Most developers execute a screen. I look for the <i>business behind it.</i></>,
    curious: <>Curious by default<br/>Obsessed with clarity</>,
    about: "About",
    aboutTitle: <>Developer by craft.<br/><i>Problem-solver by nature.</i></>,
    aboutOne: "I’m Pedro Lucas, a Brazilian developer working where product, design and engineering meet. My background spans ERP systems, web experiences, database architecture, reports, migrations and AI-powered products.",
    aboutTwo: "That range lets me see more than a brief. I understand the operation, find the leverage and build the shortest path to a result people can feel.",
    facts: ["Espírito Santo, Brazil", "UTC−03", "Remote collaboration"],
    marquee: "Let’s build something that moves",
    start: "Start a conversation",
    question: <>Have a project, a product idea<br/>or a bold problem?</>,
    talk: "Let’s talk",
    copied: "Email copied ✓",
    copy: "Copy email",
    whatsapp: "WhatsApp",
    worldwide: "Worldwide",
  },
  pt: {
    nav: [{ label: "Projetos", id: "work" }, { label: "Especialidades", id: "expertise" }, { label: "Sobre", id: "about" }, { label: "Contato", id: "contact" }],
    available: "Disponível para novos projetos",
    toggle: "Switch to English",
    menu: "Abrir ou fechar menu",
    home: "Início — Pedro Lucas",
    kicker: "Desenvolvedor criativo",
    location: "No Brasil · Trabalhando para o mundo",
    hero: ["Eu crio", "vantagem", "digital."],
    heroText: "Transformo ideias complexas de negócio em produtos digitais rápidos, claros e memoráveis — da primeira interação ao sistema por trás de tudo.",
    explore: "Conheça os projetos",
    approach: "A abordagem",
    notJust: "Muito além da interface.",
    manifesto: <>Eu desenho a <span>lógica, o ritmo</span> e a <span>sensação</span> que tornam um software impossível de ignorar.</>,
    formula: "Estratégia × Design × Engenharia",
    selected: "Projetos selecionados",
    built: <>Criados para impactar.<br/><i>Construídos para durar.</i></>,
    visit: "Visitar",
    projects: [
      { index: "01", title: "PID Gestão", type: "Plataforma de operações jurídicas", text: "Uma plataforma multi-escritório criada para transformar milhares de documentos em operações jurídicas claras e rastreáveis.", tags: ["Produto", "OCR + IA", "Multi-tenant"], accent: "acid", visual: "pid" },
      { index: "02", title: "MesaPro", type: "Sistema operacional para restaurantes", text: "Do pedido por QR ao fluxo da cozinha — um sistema rápido e coerente para toda a experiência do restaurante.", tags: ["SaaS", "Estratégia UX", "Tempo real"], accent: "blue", visual: "mesa" },
      { index: "03", title: "DesafYou", type: "Plataforma de desafios sociais", text: "Um produto escalável conectando criadores, desafios, comunidades e pagamentos em uma única experiência.", tags: ["Web App", "Pagamentos", "Supabase"], accent: "orange", visual: "challenge" },
      { index: "04", title: "Souza Serviços", type: "Presença digital para negócio local", text: "Um site focado em conversão que traduz trabalho artesanal em uma presença digital forte e confiável.", tags: ["Website", "Direção de arte", "Conversão"], accent: "violet", visual: "souza", href: "https://souzaservicos.vercel.app/" },
    ],
    whatIBring: "O que eu entrego",
    expertiseTitle: <>Uma visão.<br/>O produto completo.</>,
    expertiseText: "Conecto objetivos comerciais, experiência do usuário e realidade técnica — para o resultado impressionar e trabalhar ainda mais.",
    services: [
      { title: "Experiências digitais", text: "Sites de alto impacto, landing pages e experiências de marca interativas.", tools: "Direção de arte · Movimento · Front-end" },
      { title: "Produtos & SaaS", text: "Produtos claros e escaláveis, construídos sobre fluxos reais e valor de negócio.", tools: "Produto · UX · Multi-tenant" },
      { title: "Sistemas personalizados", text: "Software que substitui atritos, planilhas e operações repetitivas.", tools: "PHP · Delphi · APIs · Automação" },
      { title: "Dados & Arquitetura", text: "Estruturas sólidas por trás da interface — confiáveis, seguras e prontas para evoluir.", tools: "Firebird · SQL · Supabase · Migrações" },
    ],
    dimensions: "dimensões em cada projeto",
    dimensionList: <>Estratégia<br/>Experiência<br/>Engenharia</>,
    difference: "O diferencial",
    differenceText: <>A maioria desenvolve uma tela. Eu procuro entender o <i>negócio por trás dela.</i></>,
    curious: <>Curioso por natureza<br/>Obcecado por clareza</>,
    about: "Sobre",
    aboutTitle: <>Desenvolvedor por ofício.<br/><i>Solucionador por natureza.</i></>,
    aboutOne: "Sou Pedro Lucas, desenvolvedor brasileiro atuando onde produto, design e engenharia se encontram. Minha experiência passa por ERPs, experiências web, arquitetura de bancos de dados, relatórios, migrações e produtos com inteligência artificial.",
    aboutTwo: "Essa amplitude me faz enxergar além do briefing. Entendo a operação, encontro os pontos de alavancagem e construo o caminho mais curto para um resultado que as pessoas conseguem sentir.",
    facts: ["Espírito Santo, Brasil", "UTC−03", "Colaboração remota"],
    marquee: "Vamos criar algo que se movimenta",
    start: "Vamos conversar",
    question: <>Tem um projeto, uma ideia de produto<br/>ou um grande problema?</>,
    talk: "Fale comigo",
    copied: "E-mail copiado ✓",
    copy: "Copiar e-mail",
    whatsapp: "WhatsApp",
    worldwide: "Para todo o mundo",
  },
};

const serviceIcons = [Sparkles, Layers3, Code2, Database];

function OrbCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    let frame = 0, width = 0, height = 0, mx = 0, my = 0, previous = 0;
    let active = true;
    const reduced = matchMedia("(prefers-reduced-motion: reduce)");
    const dots = Array.from({ length: 110 }, (_, i) => ({ a: (i / 110) * Math.PI * 2, b: Math.acos(1 - (2 * (i + .5)) / 110) }));
    const resize = () => { const dpr = Math.min(devicePixelRatio, 2); width = canvas.clientWidth; height = canvas.clientHeight; canvas.width = width * dpr; canvas.height = height * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0); };
    const move = (e: PointerEvent) => { mx = (e.clientX / innerWidth - .5) * .45; my = (e.clientY / innerHeight - .5) * .3; };
    const draw = (time: number) => {
      if (!active || document.hidden || reduced.matches) { frame = 0; return; }
      if (time - previous < 33) { frame = requestAnimationFrame(draw); return; }
      previous = time;
      ctx.clearRect(0, 0, width, height);
      const r = Math.min(width, height) * .31, cx = width * .5, cy = height * .5, rotation = time * .00012 + mx;
      dots.forEach(dot => { const x0 = Math.sin(dot.b) * Math.cos(dot.a + rotation), z0 = Math.sin(dot.b) * Math.sin(dot.a + rotation), y0 = Math.cos(dot.b); const x = cx + x0 * r, y = cy + (y0 + my) * r, depth = (z0 + 1) / 2; ctx.beginPath(); ctx.arc(x, y, .9 + depth * 2.2, 0, Math.PI * 2); ctx.fillStyle = depth > .62 ? `rgba(203,255,77,${.25 + depth * .72})` : `rgba(255,255,255,${.08 + depth * .3})`; ctx.fill(); });
      frame = requestAnimationFrame(draw);
    };
    const restart = () => { if (!frame && active && !document.hidden && !reduced.matches) frame = requestAnimationFrame(draw); };
    const visibility = new IntersectionObserver(([entry]) => { active = entry.isIntersecting; restart(); });
    visibility.observe(canvas);
    document.addEventListener("visibilitychange", restart);
    reduced.addEventListener("change", restart);
    resize(); addEventListener("resize", resize); addEventListener("pointermove", move); frame = requestAnimationFrame(draw);
    return () => { visibility.disconnect(); document.removeEventListener("visibilitychange", restart); reduced.removeEventListener("change", restart); cancelAnimationFrame(frame); removeEventListener("resize", resize); removeEventListener("pointermove", move); };
  }, []);
  return <canvas ref={ref} className="orb-canvas" aria-hidden="true" />;
}

function ProjectVisual({ kind, lang }: { kind: string; lang: Language }) {
  const pt = lang === "pt";
  if (kind === "challenge") return <div className="project-screens" aria-label="DesafYou">
    {[2,4,5].map((n,i) => <img key={n} src={`/projects/desafyou-${n}.webp`} width="375" height="812" loading="lazy" decoding="async" alt={pt ? ["Catálogo de desafios DesafYou", "Progresso e tarefas", "Comunidade DesafYou"][i] : ["DesafYou challenge catalog", "Progress and tasks", "DesafYou community"][i]}/>)}</div>;
  const file = kind === "pid" ? "pid" : kind === "mesa" ? "mesapro" : "souza";
  return <figure className={`project-photo photo-${file}`}><img src={`/projects/${file}-1280.webp`} srcSet={`/projects/${file}-640.webp 640w, /projects/${file}-1280.webp 1280w`} sizes="(max-width: 900px) 92vw, 46vw" width="1280" height="800" loading="lazy" decoding="async" alt={file === "pid" ? "PID Gestão — Dashboard de Gestão" : file === "souza" ? "Souza Serviços — serralheria" : pt ? "MesaPro — conceito de painel de restaurante" : "MesaPro — restaurant dashboard concept"}/>{file === "mesapro" && <figcaption>{pt ? "Visualização conceitual do produto" : "Product concept visualization"}</figcaption>}</figure>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [lang, setLang] = useState<Language>("pt");
  const cursor = useRef<HTMLDivElement>(null), cursorDot = useRef<HTMLDivElement>(null);
  const t = content[lang];

  useEffect(() => {

    const timer = window.setTimeout(() => setLoaded(true), 500);
    const move = (e: PointerEvent) => { if (cursor.current) cursor.current.style.transform = `translate3d(${e.clientX}px,${e.clientY}px,0)`; if (cursorDot.current) cursorDot.current.style.transform = `translate3d(${e.clientX}px,${e.clientY}px,0)`; };
    const progress = () => { const max = document.documentElement.scrollHeight - innerHeight; document.documentElement.style.setProperty("--scroll", `${max ? scrollY / max : 0}`); };
    const observer = new IntersectionObserver(entries => entries.forEach(entry => entry.isIntersecting && entry.target.classList.add("in-view")), { threshold: .12 });
    document.querySelectorAll(".reveal").forEach(el => observer.observe(el)); addEventListener("pointermove", move); addEventListener("scroll", progress, { passive: true }); progress();
    return () => { clearTimeout(timer); observer.disconnect(); removeEventListener("pointermove", move); removeEventListener("scroll", progress); };
  }, []);

  useEffect(() => { document.documentElement.lang = lang === "pt" ? "pt-BR" : "en"; }, [lang]);
  const changeLanguage = () => { setLang(current => current === "en" ? "pt" : "en"); setMenuOpen(false); };
  const copyEmail = async () => { await navigator.clipboard.writeText("py.pedropinheir@gmail.com"); setCopied(true); setTimeout(() => setCopied(false), 1800); };

  return <main className={loaded ? "site loaded" : "site"}>
    <div className="preloader"><span>PL</span><i/></div><div className="noise" aria-hidden="true"/><div className="cursor" ref={cursor}/><div className="cursor-dot" ref={cursorDot}/><div className="scroll-progress"/>
    <header className={menuOpen ? "nav-shell menu-open" : "nav-shell"}><a href="#top" className="logo" aria-label={t.home}><img src="/brand/pl-mark.svg" width="44" height="44" alt=""/><span className="brand-name">PEDRO LUCAS<small>DESIGN + CODE</small></span></a><nav className={menuOpen ? "nav-links open" : "nav-links"}>{t.nav.map(item => <a href={`#${item.id}`} onClick={() => setMenuOpen(false)} key={item.id}>{item.label}</a>)}</nav><div className="nav-status"><i/> {t.available}</div><button className="lang-switch" onClick={changeLanguage} aria-label={t.toggle}><span className={lang === "en" ? "active" : ""}>EN</span><i/><span className={lang === "pt" ? "active" : ""}>PT</span></button><button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={t.menu}>{menuOpen ? <X/> : <Menu/>}</button></header>
    <section className="hero" id="top"><div className="hero-grid"/><OrbCanvas/><div className="hero-kicker"><span>{t.kicker}</span><span>{t.location}</span></div><div className="hero-copy"><h1><span className="line"><em>{t.hero[0]}</em></span><span className="line"><em>{t.hero[1]}</em></span><span className="line outline"><em>{t.hero[2]}</em></span></h1><p>{t.heroText}</p></div><a href="#work" className="scroll-cue"><span>{t.explore}</span><ArrowDownRight/></a><div className="hero-count"><span>01</span><i/><span>05</span></div></section>
    <section className="manifesto section-pad reveal"><div className="section-label"><span>01</span> {t.approach}</div><div className="manifesto-copy"><p>{t.notJust}</p><h2>{t.manifesto}</h2></div><div className="manifesto-note">{t.formula}</div></section>
    <section className="work section-pad" id="work"><div className="work-heading reveal"><div className="section-label"><span>02</span> {t.selected}</div><h2>{t.built}</h2></div><div className="project-list">{t.projects.map(project => <article className={`project-card reveal ${project.accent}`} key={project.title}><div className="project-meta"><span>{project.index}</span><span>{project.type}</span></div><div className="project-visual"><ProjectVisual kind={project.visual} lang={lang}/><div className="project-glow"/></div><div className="project-info"><h3>{project.title}</h3><p>{project.text}</p><div className="tag-row">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>{project.href && <a href={project.href} target="_blank" rel="noreferrer" aria-label={`${t.visit} ${project.title}`}><ArrowUpRight/></a>}</div></article>)}</div></section>
    <section className="expertise section-pad" id="expertise"><div className="section-label reveal"><span>03</span> {t.whatIBring}</div><div className="expertise-intro reveal"><h2>{t.expertiseTitle}</h2><p>{t.expertiseText}</p></div><div className="services">{t.services.map((service, index) => { const Icon = serviceIcons[index]; return <article className="service reveal" key={index}><span>0{index + 1}</span><Icon/><h3>{service.title}</h3><p>{service.text}</p><div>{service.tools}</div></article>; })}</div></section>
    <section className="process section-pad" aria-labelledby="process-title">
      <div className="process-heading"><div className="section-label"><span>03 /</span> {lang === "pt" ? "DA IDEIA AO IMPACTO" : "FROM IDEA TO IMPACT"}</div><h2 id="process-title">{lang === "pt" ? <>Três dimensões.<br/><i>Uma experiência.</i></> : <>Three dimensions.<br/><i>One experience.</i></>}</h2><p>{lang === "pt" ? "O resultado aparece na tela. O cuidado começa muito antes." : "The result lives on screen. The care starts long before."}</p><span className="process-signature">{lang === "pt" ? "PENSAR. SENTIR. CONSTRUIR." : "THINK. FEEL. BUILD."}</span></div>
      <div className="process-steps">{(lang === "pt" ? [
        ["01", "Estratégia", "Antes do pixel, o propósito.", "Entendo a operação, as pessoas e o problema. Cada decisão parte do que o negócio precisa alcançar.", "CONTEXTO / DIREÇÃO / PRIORIDADES"],
        ["02", "Experiência", "Clareza que se sente.", "Organizo informação, interação e identidade para que cada detalhe faça sentido — e cada próximo passo seja natural.", "IDENTIDADE / INTERAÇÃO / MOVIMENTO"],
        ["03", "Engenharia", "Beleza com estrutura.", "Transformo a experiência em código, cuidando da velocidade, dos dados e da base que permite ao produto evoluir.", "CÓDIGO / DESEMPENHO / EVOLUÇÃO"]
      ] : [
        ["01", "Strategy", "Purpose before pixels.", "I understand the operation, the people and the problem. Every decision starts with what the business needs to achieve.", "CONTEXT / DIRECTION / PRIORITIES"],
        ["02", "Experience", "Clarity you can feel.", "I shape information, interaction and identity so every detail makes sense — and every next step feels natural.", "IDENTITY / INTERACTION / MOTION"],
        ["03", "Engineering", "Beauty with a foundation.", "I turn the experience into code, caring for speed, data and the foundation that lets the product evolve.", "CODE / PERFORMANCE / EVOLUTION"]
      ]).map(([n,title,headline,body,meta]) => <article key={n} className={`process-step step-${n}`}><span className="step-number">{n}</span><h3>{title}</h3><h4>{headline}</h4><p>{body}</p><small>{meta}</small></article>)}</div>
    </section>
    <section className="about section-pad" id="about"><div className="about-orbit reveal"><div className="orbit-ring one"/><div className="orbit-ring two"/><div className="orbit-core">PL<span>20°</span></div><p>{t.curious}</p></div><div className="about-copy reveal"><div className="section-label"><span>04</span> {t.about}</div><h2>{t.aboutTitle}</h2><p>{t.aboutOne}</p><p>{t.aboutTwo}</p><div className="about-facts">{t.facts.map(fact => <span key={fact}>{fact}</span>)}</div></div></section>
    <section className="marquee" aria-hidden="true"><div><span>{t.marquee}</span><i>✦</i><span>{t.marquee}</span><i>✦</i></div></section>
    <footer className="contact section-pad" id="contact"><div className="section-label"><span>05</span> {t.start}</div><div className="contact-main"><p>{t.question}</p><a href="mailto:py.pedropinheir@gmail.com" className="contact-link">{t.talk}<span><ArrowUpRight/></span></a></div><div className="contact-bottom"><button onClick={copyEmail}>{copied ? t.copied : t.copy}</button><div><a href="https://wa.me/5527997597655" target="_blank" rel="noreferrer" aria-label={`${t.whatsapp}: +55 27 99759-7655`}>+55 27 99759-7655 ↗</a><span>{t.worldwide}</span></div><span>© {new Date().getFullYear()} PEDRO LUCAS</span></div></footer>
  </main>;
}
