/**
 * Case em destaque: "Vértice Gestão" — sistema de gestão em PHP DEMONSTRATIVO.
 * Telas e estrutura foram criadas para o portfólio, com dados fictícios.
 *
 * Para trocar os prints: coloque os arquivos em public/projects/php/ e atualize `screenshots`
 * (o primeiro é a imagem principal). Em `tree`, pastas terminam com "/" e "# texto" vira comentário.
 */

export type Shot = { src: string; caption: { pt: string; en: string } };

export const phpCase = {
  screenshots: [
    { src: "/projects/php/dashboard.webp", caption: { pt: "Dashboard comercial — indicadores, faturamento mensal e pedidos recentes", en: "Sales dashboard — KPIs, monthly revenue and recent orders" } },
    { src: "/projects/php/pedidos.webp", caption: { pt: "Pedidos — filtros por status, período e forma de pagamento, com paginação", en: "Orders — filters by status, period and payment method, with pagination" } },
    { src: "/projects/php/cliente.webp", caption: { pt: "Cadastro de cliente — validações no servidor (CNPJ, duplicidade, CSRF)", en: "Customer form — server-side validation (tax ID, duplicates, CSRF)" } },
    { src: "/projects/php/relatorio.webp", caption: { pt: "Relatório por forma de pagamento — alimentado por stored procedure", en: "Payment-method report — powered by a stored procedure" } },
  ] as Shot[],
  tree: `vertice-gestao/
├── app/
│   ├── Controllers/        # recebem a requisição e devolvem a view
│   │   ├── DashboardController.php
│   │   ├── PedidoController.php
│   │   └── RelatorioController.php
│   ├── Models/             # entidades do domínio
│   │   ├── Cliente.php
│   │   └── Pedido.php
│   ├── Repositories/       # todo SQL fica aqui (PDO + prepared statements)
│   │   ├── ClienteRepository.php
│   │   └── PedidoRepository.php
│   ├── Services/           # regras de negócio e cálculos
│   │   ├── FaturamentoService.php
│   │   └── Validacao/
│   │       └── CnpjValidator.php
│   ├── Middleware/
│   │   ├── AuthMiddleware.php
│   │   └── CsrfMiddleware.php
│   └── Views/              # templates com escape de saída
│       ├── layouts/
│       ├── pedidos/
│       └── relatorios/
├── config/
│   └── database.php        # credenciais lidas do .env
├── database/
│   ├── migrations/         # versionamento do schema
│   ├── procedures/         # stored procedures dos relatórios
│   │   └── resumo_vendas_periodo.sql
│   └── seeds/              # dados fictícios para desenvolvimento
├── public/
│   ├── index.php           # front controller: única porta de entrada
│   └── assets/
├── routes/
│   └── web.php
├── tests/
│   └── Services/
├── .env.example
└── composer.json`,
  stack: ["PHP 8", "PDO", "SQL", "Stored procedures", "MVC", "JavaScript", "Composer"],
  pt: {
    label: "Projeto demonstrativo",
    type: "Sistema de gestão comercial em PHP",
    title: "Vértice Gestão",
    summary:
      "Um sistema de gestão comercial — pedidos, clientes e relatórios — criado para mostrar como estruturo aplicações em PHP: regras de negócio separadas da interface, SQL isolado e segurança desde a base.",
    roleTitle: "Destaques técnicos",
    role: [
      "Arquitetura MVC com front controller e rotas",
      "PDO com prepared statements — nenhum SQL concatenado",
      "Autenticação, proteção CSRF e escape de saída nas views",
      "Relatórios alimentados por stored procedures no banco",
      "Migrations e seeds para versionar o schema",
    ],
    note: "Telas e estrutura criadas para demonstração, com dados fictícios.",
    galleryEmpty: "Prints do sistema em breve",
    treeTitle: "Estrutura do projeto",
    treeEmpty: "Estrutura de pastas em breve",
  },
  en: {
    label: "Demo project",
    type: "Sales management system in PHP",
    title: "Vértice Gestão",
    summary:
      "A sales management system — orders, customers and reports — built to show how I structure PHP applications: business rules separated from the UI, isolated SQL and security from the ground up.",
    roleTitle: "Technical highlights",
    role: [
      "MVC architecture with a front controller and routing",
      "PDO with prepared statements — no concatenated SQL",
      "Authentication, CSRF protection and output escaping in views",
      "Reports powered by stored procedures in the database",
      "Migrations and seeds to version the schema",
    ],
    note: "Screens and structure created for demonstration, with fictitious data.",
    galleryEmpty: "System screenshots coming soon",
    treeTitle: "Project structure",
    treeEmpty: "Folder structure coming soon",
  },
};
