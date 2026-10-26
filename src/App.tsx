import { useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowDownRight, ArrowUpRight, Briefcase, Check, Code2, Database, FileDown, Layers3, Lock, Menu, ShieldCheck, Sparkles, Users, X } from "lucide-react";
import { phpCase } from "./data/phpCase";
import { profile, whatsappLink } from "./data/profile";

type Language = "en" | "pt";

const content = {
  en: {
    nav: [{ label: "Work", id: "work" }, { label: "Stack", id: "stack" }, { label: "Experience", id: "experience" }, { label: "About", id: "about" }, { label: "Contact", id: "contact" }],
    available: "Open to projects & roles",
    toggle: "Mudar para português",
    menu: "Toggle menu",
    home: "Pedro Lucas home",
    kicker: "Full stack developer · PHP & Databases",
    location: "Brazil · Remote, worldwide",
    hero: ["Code", "that moves", "business."],
    heroText: "I build web systems, databases and custom websites with PHP, SQL and React. I work on a production ERP with a dev team — and help companies as a freelancer.",
    ctaClient: "I have a project",
    ctaRecruiter: "I'm hiring",
    explore: "Explore selected work",
    audienceLabel: "How I can help",
    audienceTitle: <>Two ways<br/><i>to work together.</i></>,
    audience: [
      { key: "client", title: "Companies & clients", lead: "Need a website, a system or an automation?", items: ["Fast, conversion-focused websites and landing pages", "Custom systems, dashboards and internal tools", "Reports, integrations and data migration", "Security audits for existing sites and systems"], cta: "Request a quote" },
      { key: "recruiter", title: "Recruiters & teams", lead: "Looking for a developer to join your team?", items: ["Daily work on a production ERP (PHP + SQL)", "Team workflow with version control (SVN / Git)", "Stored procedures and custom reports in Firebird", "Modern front-end with React + TypeScript"], cta: "See experience" },
    ],
    selected: "Selected work",
    built: <>Built for impact.<br/><i>Engineered to last.</i></>,
    visit: "Visit",
    projects: [
      { index: "01", title: "PID Gestão", type: "Legal operations platform", text: "A multi-office platform designed to turn thousands of documents into clear, trackable legal operations.", tags: ["Product", "OCR + AI", "Multi-tenant"], accent: "acid", visual: "pid" },
      { index: "02", title: "MesaPro", type: "Restaurant operating system", text: "From QR ordering to kitchen flow — one fast, coherent system for the entire restaurant experience.", tags: ["SaaS", "UX Strategy", "Real-time"], accent: "blue", visual: "mesa" },
      { index: "03", title: "DesafYou", type: "Social challenge platform", text: "A scalable product experience connecting creators, challenges, communities and payments.", tags: ["Web App", "Payments", "Supabase"], accent: "orange", visual: "challenge" },
      { index: "04", title: "Souza Serviços", type: "Digital presence for local business", text: "A focused, conversion-driven website translating craftsmanship into a credible digital experience.", tags: ["Website", "Art Direction", "Conversion"], accent: "violet", visual: "souza", href: "https://souzaservicos.vercel.app/" },
    ],
    stackLabel: "Stack & services",
    expertiseTitle: <>Solid back-end.<br/><i>Clear front-end.</i></>,
    expertiseText: "My core is PHP and relational databases — the part of the system that has to be right. On top of it, interfaces that are fast and easy to use.",
    stackGroups: [
      { title: "Back-end", items: ["PHP", "REST APIs", "Integrations", "Automation"] },
      { title: "Databases", items: ["SQL", "Firebird · PSQL", "Stored procedures", "PostgreSQL · Supabase", "Modeling & migrations"] },
      { title: "Front-end", items: ["React", "TypeScript", "JavaScript", "HTML · CSS", "Vite"] },
      { title: "Tools", items: ["Git", "SVN", "FastReport", "Delphi", "Vercel"] },
    ],
    sqlTitle: "Databases in practice",
    sqlText: "Much of my day-to-day happens inside the database: selectable stored procedures that consolidate data by period, feeding custom reports clients use to make decisions.",
    sqlPoints: ["Procedures in Firebird PSQL", "Aggregations and percentage breakdowns", "Reports in FastReport fed by SQL", "Respecting existing schema — new objects, never breaking ones"],
    sqlNote: "Illustrative example with fictitious tables",
    servicesTitle: "Services",
    services: [
      { title: "Websites & landing pages", text: "Fast, responsive websites built to turn visitors into contacts.", tools: "Front-end · SEO · Performance" },
      { title: "Custom systems", text: "Software that replaces spreadsheets, friction and repetitive work.", tools: "PHP · APIs · Automation" },
      { title: "Data & reports", text: "Queries, procedures, reports and migrations that make data useful.", tools: "SQL · Firebird · FastReport" },
      { title: "Security audit", text: "A review of sites and systems to find and fix vulnerabilities before someone else does.", tools: "Review · Hardening · Report" },
    ],
    expLabel: "Experience",
    expTitle: <>Real systems,<br/><i>real users.</i></>,
    experience: [
      { org: "Configure Software", role: "Developer", when: "Current · Full-time", items: ["Develops features for the company's PHP web system as part of the dev team, versioned with SVN.", "Builds custom reports for client companies: stored procedures in Firebird plus FastReport layouts imported into the ERP.", "Turns real client requests into delivered features — from requirement to production."] },
      { org: "Freelance", role: "Full stack developer", when: "Current", items: ["Websites and systems for local businesses and professionals.", "Own products: PID Gestão (legal operations) and DesafYou (challenge app).", "Security audits for existing websites and systems."] },
    ],
    expFacts: ["Remote-ready", "UTC−03", "Team & solo work"],
    github: "GitHub",
    linkedin: "LinkedIn",
    cv: "Download CV",
    about: "About",
    aboutTitle: <>Developer by craft.<br/><i>Problem-solver by nature.</i></>,
    aboutOne: "I'm Pedro Lucas, a Brazilian developer from Espírito Santo. My work spans ERP systems, databases, reports, migrations, websites and AI-powered products.",
    aboutTwo: "Working on a production system taught me to care about what happens behind the screen: data that has to add up, code others will maintain, and users who depend on it every day. I bring that same care to every freelance project.",
    curious: <>Curious by default<br/>Obsessed with clarity</>,
    facts: ["Espírito Santo, Brazil", "UTC−03", "Remote collaboration"],
    marquee: "Let's build something that works",
    start: "Start a conversation",
    question: <>Have a project — or a role<br/>you need to fill?</>,
    talk: "Let's talk",
    contactClient: "Projects & quotes",
    contactClientText: "Reply on WhatsApp, usually within the day.",
    contactRecruiter: "Recruiters",
    contactRecruiterText: "Email, GitHub and résumé.",
    waClient: "Hi Pedro! I'd like to talk about a project.",
    copied: "Email copied ✓",
    copy: "Copy email",
    copyFail: "Copy failed",
    process: { label: "From idea to impact", title: <>Three dimensions.<br/><i>One experience.</i></>, text: "The result lives on screen. The care starts long before.", signature: "THINK. FEEL. BUILD.", steps: [
      ["01", "Strategy", "Purpose before pixels.", "I understand the operation, the people and the problem. Every decision starts with what the business needs to achieve.", "CONTEXT / DIRECTION / PRIORITIES"],
      ["02", "Experience", "Clarity you can feel.", "I shape information, interaction and identity so every detail makes sense — and every next step feels natural.", "IDENTITY / INTERACTION / MOTION"],
      ["03", "Engineering", "Beauty with a foundation.", "I turn the experience into code, caring for speed, data and the foundation that lets the product evolve.", "CODE / PERFORMANCE / EVOLUTION"],
    ] },
  },
  pt: {
    nav: [{ label: "Projetos", id: "work" }, { label: "Stack", id: "stack" }, { label: "Experiência", id: "experience" }, { label: "Sobre", id: "about" }, { label: "Contato", id: "contact" }],
    available: "Aberto a projetos e vagas",
    toggle: "Switch to English",
    menu: "Abrir ou fechar menu",
    home: "Início — Pedro Lucas",
    kicker: "Desenvolvedor full stack · PHP & Banco de dados",
    location: "Brasil · Remoto, para qualquer lugar",
    hero: ["Código", "que move", "negócios."],
    heroText: "Desenvolvo sistemas web, bancos de dados e sites sob medida com PHP, SQL e React. Atuo em equipe num ERP em produção — e atendo empresas como freelancer.",
    ctaClient: "Tenho um projeto",
    ctaRecruiter: "Sou recrutador",
    explore: "Conheça os projetos",
    audienceLabel: "Como posso ajudar",
    audienceTitle: <>Dois caminhos<br/><i>para trabalharmos juntos.</i></>,
    audience: [
      { key: "client", title: "Empresas e clientes", lead: "Precisa de um site, um sistema ou uma automação?", items: ["Sites e landing pages rápidos, focados em conversão", "Sistemas sob medida, painéis e ferramentas internas", "Relatórios, integrações e migração de dados", "Auditoria de segurança em sites e sistemas"], cta: "Pedir orçamento" },
      { key: "recruiter", title: "Recrutadores e times", lead: "Procurando um dev para o seu time?", items: ["Dia a dia num ERP em produção (PHP + SQL)", "Trabalho em equipe com versionamento (SVN / Git)", "Stored procedures e relatórios em Firebird", "Front-end moderno com React + TypeScript"], cta: "Ver experiência" },
    ],
    selected: "Projetos selecionados",
    built: <>Criados para impactar.<br/><i>Construídos para durar.</i></>,
    visit: "Visitar",
    projects: [
      { index: "01", title: "PID Gestão", type: "Plataforma de operações jurídicas", text: "Uma plataforma multi-escritório criada para transformar milhares de documentos em operações jurídicas claras e rastreáveis.", tags: ["Produto", "OCR + IA", "Multi-tenant"], accent: "acid", visual: "pid" },
      { index: "02", title: "MesaPro", type: "Sistema para restaurantes", text: "Do pedido por QR ao fluxo da cozinha — um sistema rápido e coerente para toda a experiência do restaurante.", tags: ["SaaS", "Estratégia UX", "Tempo real"], accent: "blue", visual: "mesa" },
      { index: "03", title: "DesafYou", type: "Plataforma de desafios sociais", text: "Um produto escalável conectando criadores, desafios, comunidades e pagamentos em uma única experiência.", tags: ["Web App", "Pagamentos", "Supabase"], accent: "orange", visual: "challenge" },
      { index: "04", title: "Souza Serviços", type: "Presença digital para negócio local", text: "Um site focado em conversão que traduz trabalho artesanal em uma presença digital forte e confiável.", tags: ["Website", "Direção de arte", "Conversão"], accent: "violet", visual: "souza", href: "https://souzaservicos.vercel.app/" },
    ],
    stackLabel: "Stack & serviços",
    expertiseTitle: <>Back-end sólido.<br/><i>Front-end claro.</i></>,
    expertiseText: "Meu núcleo é PHP e banco de dados relacional — a parte do sistema que precisa estar certa. Em cima disso, interfaces rápidas e fáceis de usar.",
    stackGroups: [
      { title: "Back-end", items: ["PHP", "APIs REST", "Integrações", "Automação"] },
      { title: "Banco de dados", items: ["SQL", "Firebird · PSQL", "Stored procedures", "PostgreSQL · Supabase", "Modelagem e migrações"] },
      { title: "Front-end", items: ["React", "TypeScript", "JavaScript", "HTML · CSS", "Vite"] },
      { title: "Ferramentas", items: ["Git", "SVN", "FastReport", "Delphi", "Vercel"] },
    ],
    sqlTitle: "Banco de dados na prática",
    sqlText: "Boa parte do meu dia acontece dentro do banco: procedures selecionáveis que consolidam dados por período e alimentam relatórios personalizados que os clientes usam para decidir.",
    sqlPoints: ["Procedures em Firebird PSQL", "Agregações e cálculos de participação (%)", "Relatórios no FastReport alimentados por SQL", "Respeito ao schema existente — objetos novos, sem quebrar os antigos"],
    sqlNote: "Exemplo ilustrativo com tabelas fictícias",
    servicesTitle: "Serviços",
    services: [
      { title: "Sites e landing pages", text: "Sites rápidos e responsivos, feitos para transformar visitantes em contatos.", tools: "Front-end · SEO · Performance" },
      { title: "Sistemas sob medida", text: "Software que substitui planilhas, atritos e trabalho repetitivo.", tools: "PHP · APIs · Automação" },
      { title: "Dados e relatórios", text: "Consultas, procedures, relatórios e migrações que tornam os dados úteis.", tools: "SQL · Firebird · FastReport" },
      { title: "Auditoria de segurança", text: "Revisão de sites e sistemas para encontrar e corrigir falhas antes que alguém as explore.", tools: "Análise · Correções · Relatório" },
    ],
    expLabel: "Experiência",
    expTitle: <>Sistemas reais,<br/><i>usuários reais.</i></>,
    experience: [
      { org: "Configure Software", role: "Desenvolvedor", when: "Atual · CLT", items: ["Desenvolvimento de funcionalidades no sistema web da empresa, em PHP, junto ao time de desenvolvimento, com versionamento via SVN.", "Relatórios personalizados para empresas clientes: stored procedures no Firebird e layouts FastReport importados no ERP.", "Transformo pedidos reais de clientes em funcionalidades entregues — do requisito à produção."] },
      { org: "Freelancer", role: "Desenvolvedor full stack", when: "Atual", items: ["Sites e sistemas para empresas locais e profissionais liberais.", "Produtos próprios: PID Gestão (operações jurídicas) e DesafYou (app de desafios).", "Auditoria de segurança em sites e sistemas existentes."] },
    ],
    expFacts: ["Pronto para remoto", "UTC−03", "Em equipe ou solo"],
    github: "GitHub",
    linkedin: "LinkedIn",
    cv: "Baixar currículo",
    about: "Sobre",
    aboutTitle: <>Desenvolvedor por ofício.<br/><i>Solucionador por natureza.</i></>,
    aboutOne: "Sou Pedro Lucas, desenvolvedor do Espírito Santo. Minha experiência passa por ERPs, bancos de dados, relatórios, migrações, sites e produtos com inteligência artificial.",
    aboutTwo: "Trabalhar num sistema em produção me ensinou a cuidar do que acontece por trás da tela: dados que precisam bater, código que outras pessoas vão manter e usuários que dependem dele todo dia. Levo esse mesmo cuidado para cada projeto freelance.",
    curious: <>Curioso por natureza<br/>Obcecado por clareza</>,
    facts: ["Espírito Santo, Brasil", "UTC−03", "Colaboração remota"],
    marquee: "Vamos construir algo que funciona",
    start: "Vamos conversar",
    question: <>Tem um projeto — ou uma vaga<br/>para preencher?</>,
    talk: "Fale comigo",
    contactClient: "Projetos e orçamentos",
    contactClientText: "Resposta pelo WhatsApp, normalmente no mesmo dia.",
    contactRecruiter: "Recrutadores",
    contactRecruiterText: "E-mail, GitHub e currículo.",
    waClient: "Olá, Pedro! Gostaria de conversar sobre um projeto.",
    copied: "E-mail copiado ✓",
    copy: "Copiar e-mail",
    copyFail: "Não foi possível copiar",
    process: { label: "Da ideia ao impacto", title: <>Três dimensões.<br/><i>Uma experiência.</i></>, text: "O resultado aparece na tela. O cuidado começa muito antes.", signature: "PENSAR. SENTIR. CONSTRUIR.", steps: [
      ["01", "Estratégia", "Antes do pixel, o propósito.", "Entendo a operação, as pessoas e o problema. Cada decisão parte do que o negócio precisa alcançar.", "CONTEXTO / DIREÇÃO / PRIORIDADES"],
      ["02", "Experiência", "Clareza que se sente.", "Organizo informação, interação e identidade para que cada detalhe faça sentido — e cada próximo passo seja natural.", "IDENTIDADE / INTERAÇÃO / MOVIMENTO"],
      ["03", "Engenharia", "Beleza com estrutura.", "Transformo a experiência em código, cuidando da velocidade, dos dados e da base que permite ao produto evoluir.", "CÓDIGO / DESEMPENHO / EVOLUÇÃO"],
    ] },
  },
};

const serviceIcons = [Sparkles, Layers3, Database, ShieldCheck];

const SQL_SAMPLE = `CREATE OR ALTER PROCEDURE RESUMO_VENDAS_PERIODO (
  DT_INI DATE, DT_FIM DATE
) RETURNS (
  FORMA VARCHAR(40), QTD INTEGER,
  TOTAL NUMERIC(15,2), PERC NUMERIC(5,2)
) AS
  DECLARE VARIABLE GERAL NUMERIC(15,2);
BEGIN
  SELECT COALESCE(SUM(VALOR), 0) FROM VENDAS_PAGTO
   WHERE DATA BETWEEN :DT_INI AND :DT_FIM
    INTO :GERAL;

  FOR SELECT F.DESCRICAO, COUNT(*), SUM(P.VALOR)
        FROM VENDAS_PAGTO P
        JOIN FORMAS_PAGTO F ON F.ID = P.FORMA_ID
       WHERE P.DATA BETWEEN :DT_INI AND :DT_FIM
       GROUP BY F.DESCRICAO
       ORDER BY 3 DESC
        INTO :FORMA, :QTD, :TOTAL
  DO BEGIN
    PERC = IIF(GERAL > 0, TOTAL * 100 / GERAL, 0);
    SUSPEND;
  END
END`;

const SQL_KEYWORDS = /\b(CREATE|OR|ALTER|PROCEDURE|RETURNS|AS|DECLARE|VARIABLE|BEGIN|END|SELECT|FROM|WHERE|BETWEEN|AND|INTO|FOR|JOIN|ON|GROUP|BY|ORDER|DESC|DO|SUSPEND|IIF|COALESCE|SUM|COUNT)\b/g;
const SQL_TYPES = /\b(DATE|VARCHAR|INTEGER|NUMERIC)\b/g;

function SqlCode({ code }: { code: string }) {
  const lines = code.split("\n").map((line, i) => {
    const parts: ReactNode[] = [];
    const re = new RegExp(`(${SQL_KEYWORDS.source})|(${SQL_TYPES.source})|(:[A-Z_]+)|(\\b\\d+(?:,\\d+)?\\b)`, "g");
    let last = 0; let m: RegExpExecArray | null; let k = 0;
    while ((m = re.exec(line))) {
      if (m.index > last) parts.push(line.slice(last, m.index));
      const cls = m[1] ? "k" : m[3] ? "t" : m[5] ? "p" : "n";
      parts.push(<span className={cls} key={k++}>{m[0]}</span>);
      last = m.index + m[0].length;
    }
    parts.push(line.slice(last));
    return <span className="code-line" key={i}>{parts}{"\n"}</span>;
  });
  return <pre className="sql-code" tabIndex={0}><code>{lines}</code></pre>;
}

function FolderTree({ tree }: { tree: string }) {
  return <pre className="folder-tree" tabIndex={0}><code>{tree.trim().split("\n").map((line, i) => {
    const hash = line.indexOf("#");
    const body = hash >= 0 ? line.slice(0, hash) : line;
    const comment = hash >= 0 ? line.slice(hash) : "";
    const m = body.match(/^([\s│├└─|`+\\-]*)(.*)$/) ?? ["", "", body];
    const name = m[2]; const isDir = /\/\s*$/.test(name);
    return <span className="code-line" key={i}><span className="tree-guide">{m[1]}</span><span className={isDir ? "tree-dir" : "tree-file"}>{name}</span>{comment && <span className="tree-comment">{comment}</span>}{"\n"}</span>;
  })}</code></pre>;
}

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

function FeaturedCase({ lang }: { lang: Language }) {
  const c = phpCase[lang];
  const shots = phpCase.screenshots;
  const [active, setActive] = useState(0);
  const current = shots[active];
  return <article className="case reveal" aria-labelledby="case-title">
    <div className="case-copy">
      <div className="case-meta"><span>{c.label}</span><span>{c.type}</span></div>
      <h3 id="case-title">{c.title}</h3>
      <p className="case-summary">{c.summary}</p>
      <h4>{c.roleTitle}</h4>
      <ul className="check-list">{c.role.map(item => <li key={item}><Check aria-hidden="true"/>{item}</li>)}</ul>
      <div className="tag-row dark">{phpCase.stack.map(tag => <span key={tag}>{tag}</span>)}</div>
      <p className="case-note"><Lock aria-hidden="true"/>{c.note}</p>
    </div>
    <div className="case-media">
      {current ? <>
        <figure className="case-shot"><img src={current.src} alt={current.caption[lang]} loading="lazy" decoding="async"/><figcaption>{current.caption[lang]}</figcaption></figure>
        {shots.length > 1 && <div className="case-thumbs">{shots.map((s, i) => <button key={s.src} className={i === active ? "active" : ""} onClick={() => setActive(i)} aria-label={s.caption[lang]} aria-pressed={i === active}><img src={s.src} alt="" loading="lazy"/></button>)}</div>}
      </> : <div className="case-placeholder"><div className="ph-bar"><i/><i/><i/></div><div className="ph-body"><span/><span/><span/><span/></div><p>{c.galleryEmpty}</p></div>}
      <div className="case-tree"><div className="case-tree-head"><Code2 aria-hidden="true"/>{c.treeTitle}</div>{phpCase.tree.trim() ? <FolderTree tree={phpCase.tree}/> : <p className="tree-empty">{c.treeEmpty}</p>}</div>
    </div>
  </article>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState<"" | "ok" | "fail">("");
  const [loaded, setLoaded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState<Language>("pt");
  const cursor = useRef<HTMLDivElement>(null), cursorDot = useRef<HTMLDivElement>(null);
  const t = content[lang];

  useEffect(() => {
    const timer = window.setTimeout(() => setLoaded(true), 500);
    const move = (e: PointerEvent) => { if (cursor.current) cursor.current.style.transform = `translate3d(${e.clientX}px,${e.clientY}px,0)`; if (cursorDot.current) cursorDot.current.style.transform = `translate3d(${e.clientX}px,${e.clientY}px,0)`; };
    const progress = () => { const max = document.documentElement.scrollHeight - innerHeight; document.documentElement.style.setProperty("--scroll", `${max ? scrollY / max : 0}`); setScrolled(scrollY > 40); };
    const observer = new IntersectionObserver(entries => entries.forEach(entry => entry.isIntersecting && entry.target.classList.add("in-view")), { threshold: .12 });
    document.querySelectorAll(".reveal").forEach(el => observer.observe(el)); addEventListener("pointermove", move); addEventListener("scroll", progress, { passive: true }); progress();
    return () => { clearTimeout(timer); observer.disconnect(); removeEventListener("pointermove", move); removeEventListener("scroll", progress); };
  }, []);

  useEffect(() => { document.documentElement.lang = lang === "pt" ? "pt-BR" : "en"; }, [lang]);
  useEffect(() => { document.body.style.overflow = menuOpen ? "hidden" : ""; const esc = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false); addEventListener("keydown", esc); return () => removeEventListener("keydown", esc); }, [menuOpen]);
  const changeLanguage = () => { setLang(current => current === "en" ? "pt" : "en"); setMenuOpen(false); };
  const copyEmail = async () => { try { await navigator.clipboard.writeText(profile.email); setCopied("ok"); } catch { setCopied("fail"); } setTimeout(() => setCopied(""), 1800); };
  const waClient = whatsappLink(t.waClient);
  const recruiterLinks = [
    profile.github && { href: profile.github, label: t.github },
    profile.linkedin && { href: profile.linkedin, label: t.linkedin },
  ].filter(Boolean) as { href: string; label: string }[];

  return <main className={loaded ? "site loaded" : "site"}>
    <div className="preloader" aria-hidden="true"><span>PL</span><i/></div><div className="noise" aria-hidden="true"/><div className="cursor" ref={cursor} aria-hidden="true"/><div className="cursor-dot" ref={cursorDot} aria-hidden="true"/><div className="scroll-progress" aria-hidden="true"/>
    <header className={`nav-shell${menuOpen ? " menu-open" : ""}${scrolled ? " scrolled" : ""}`}><a href="#top" className="logo" aria-label={t.home}><img src="/brand/pl-mark.svg" width="44" height="44" alt=""/><span className="brand-name">PEDRO LUCAS<small>PHP · SQL · REACT</small></span></a><nav id="main-nav" className={menuOpen ? "nav-links open" : "nav-links"}>{t.nav.map(item => <a href={`#${item.id}`} onClick={() => setMenuOpen(false)} key={item.id}>{item.label}</a>)}</nav><div className="nav-status"><i/> {t.available}</div><button className="lang-switch" onClick={changeLanguage} aria-label={t.toggle}><span className={lang === "en" ? "active" : ""}>EN</span><i/><span className={lang === "pt" ? "active" : ""}>PT</span></button><button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={t.menu} aria-expanded={menuOpen} aria-controls="main-nav">{menuOpen ? <X/> : <Menu/>}</button></header>

    <section className="hero" id="top"><div className="hero-grid"/><OrbCanvas/><div className="hero-kicker"><span>{t.kicker}</span><span>{t.location}</span></div><div className="hero-copy"><h1><span className="line"><em>{t.hero[0]}</em></span><span className="line"><em>{t.hero[1]}</em></span><span className="line outline"><em>{t.hero[2]}</em></span></h1><div className="hero-side"><p>{t.heroText}</p><div className="hero-ctas"><a href={waClient} target="_blank" rel="noreferrer" className="btn btn-acid">{t.ctaClient}<ArrowUpRight/></a><a href="#experience" className="btn btn-ghost">{t.ctaRecruiter}<ArrowDownRight/></a></div></div></div><a href="#audience" className="scroll-cue"><span>{t.explore}</span><ArrowDownRight/></a></section>

    <section className="audience section-pad" id="audience"><div className="audience-head reveal"><div className="section-label"><span>01</span> {t.audienceLabel}</div><h2>{t.audienceTitle}</h2></div><div className="audience-grid">{t.audience.map(a => { const Icon = a.key === "client" ? Briefcase : Users; const isClient = a.key === "client"; return <article className={`audience-card reveal ${a.key}`} key={a.key}><Icon className="audience-icon" aria-hidden="true"/><h3>{a.title}</h3><p className="audience-lead">{a.lead}</p><ul className="check-list">{a.items.map(i => <li key={i}><Check aria-hidden="true"/>{i}</li>)}</ul><a className={isClient ? "btn btn-acid" : "btn btn-ghost"} href={isClient ? waClient : "#experience"} {...(isClient ? { target: "_blank", rel: "noreferrer" } : {})}>{a.cta}{isClient ? <ArrowUpRight/> : <ArrowDownRight/>}</a></article>; })}</div></section>

    <section className="work section-pad" id="work"><div className="work-heading reveal"><div className="section-label"><span>02</span> {t.selected}</div><h2>{t.built}</h2></div><FeaturedCase lang={lang}/><div className="project-list">{t.projects.map(project => <article className={`project-card reveal ${project.accent}`} key={project.title}><div className="project-meta"><span>{project.index}</span><span>{project.type}</span></div><div className="project-visual"><ProjectVisual kind={project.visual} lang={lang}/></div><div className="project-info"><div className="project-title"><h3>{project.title}</h3>{project.href && <a href={project.href} target="_blank" rel="noreferrer" aria-label={`${t.visit} ${project.title}`}><ArrowUpRight/></a>}</div><p>{project.text}</p><div className="tag-row">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div></article>)}</div></section>

    <section className="expertise section-pad" id="stack"><div className="section-label reveal"><span>03</span> {t.stackLabel}</div><div className="expertise-intro reveal"><h2>{t.expertiseTitle}</h2><p>{t.expertiseText}</p></div>
      <div className="stack-grid">{t.stackGroups.map(g => <div className="stack-group reveal" key={g.title}><h3>{g.title}</h3><ul>{g.items.map(i => <li key={i}>{i}</li>)}</ul></div>)}</div>
      <div className="sql-block reveal"><div className="sql-copy"><Database className="sql-icon" aria-hidden="true"/><h3>{t.sqlTitle}</h3><p>{t.sqlText}</p><ul className="check-list">{t.sqlPoints.map(i => <li key={i}><Check aria-hidden="true"/>{i}</li>)}</ul></div><div className="sql-window"><div className="sql-window-bar"><i/><i/><i/><span>resumo_vendas_periodo.sql</span></div><SqlCode code={SQL_SAMPLE}/><small>{t.sqlNote}</small></div></div>
      <h3 className="services-title reveal">{t.servicesTitle}</h3>
      <div className="services">{t.services.map((service, index) => { const Icon = serviceIcons[index]; return <article className="service reveal" key={index}><span>0{index + 1}</span><Icon/><h3>{service.title}</h3><p>{service.text}</p><div>{service.tools}</div></article>; })}</div></section>

    <section className="experience section-pad" id="experience"><div className="exp-head reveal"><div className="section-label"><span>04</span> {t.expLabel}</div><h2>{t.expTitle}</h2><div className="exp-links">{recruiterLinks.map(l => <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className="btn btn-ghost">{l.label}<ArrowUpRight/></a>)}{profile.cv && <a href={profile.cv} download className="btn btn-acid">{t.cv}<FileDown/></a>}</div></div>
      <ol className="timeline">{t.experience.map(e => <li className="reveal" key={e.org}><div className="tl-when">{e.when}</div><div><h3>{e.org}</h3><p className="tl-role">{e.role}</p><ul>{e.items.map(i => <li key={i}>{i}</li>)}</ul></div></li>)}</ol>
      <div className="about-facts">{t.expFacts.map(f => <span key={f}>{f}</span>)}</div>
    </section>

    <section className="process section-pad" aria-labelledby="process-title">
      <div className="process-heading"><div className="section-label"><span>05</span> {t.process.label}</div><h2 id="process-title">{t.process.title}</h2><p>{t.process.text}</p><span className="process-signature">{t.process.signature}</span></div>
      <div className="process-steps">{t.process.steps.map(([n,title,headline,body,meta]) => <article key={n} className={`process-step step-${n}`}><span className="step-number">{n}</span><h3>{title}</h3><h4>{headline}</h4><p>{body}</p><small>{meta}</small></article>)}</div>
    </section>

    <section className="about section-pad" id="about"><div className="about-orbit reveal" aria-hidden="true"><div className="orbit-ring one"/><div className="orbit-ring two"/><div className="orbit-core">PL</div><p>{t.curious}</p></div><div className="about-copy reveal"><div className="section-label"><span>06</span> {t.about}</div><h2>{t.aboutTitle}</h2><p>{t.aboutOne}</p><p>{t.aboutTwo}</p><div className="about-facts">{t.facts.map(fact => <span key={fact}>{fact}</span>)}</div></div></section>
    <section className="marquee" aria-hidden="true"><div><span>{t.marquee}</span><i>✦</i><span>{t.marquee}</span><i>✦</i></div></section>
    <footer className="contact section-pad" id="contact"><div className="section-label"><span>07</span> {t.start}</div><div className="contact-main"><p>{t.question}</p><a href={waClient} target="_blank" rel="noreferrer" className="contact-link">{t.talk}<span><ArrowUpRight/></span></a></div>
      <div className="contact-paths"><div><h3>{t.contactClient}</h3><p>{t.contactClientText}</p><a href={waClient} target="_blank" rel="noreferrer">WhatsApp · {profile.whatsappLabel} ↗</a></div><div><h3>{t.contactRecruiter}</h3><p>{t.contactRecruiterText}</p><a href={`mailto:${profile.email}`}>{profile.email} ↗</a>{recruiterLinks.map(l => <a key={l.href} href={l.href} target="_blank" rel="noreferrer">{l.label} ↗</a>)}{profile.cv && <a href={profile.cv} download>{t.cv} ↓</a>}</div></div>
      <div className="contact-bottom"><button onClick={copyEmail}>{copied === "ok" ? t.copied : copied === "fail" ? t.copyFail : t.copy}</button><span>{lang === "pt" ? "Remoto · UTC−03" : "Remote · UTC−03"}</span><span>© {new Date().getFullYear()} PEDRO LUCAS</span></div></footer>
  </main>;
}
