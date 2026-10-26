/**
 * Case em destaque: projeto PHP (cliente sob confidencialidade).
 *
 * COMO ATUALIZAR
 * 1. Coloque os prints (com dados fictícios ou borrados) em public/projects/php/
 *    — de preferência .webp, ~1600px de largura.
 * 2. Liste-os em `screenshots` abaixo (o primeiro é a imagem principal).
 * 3. Cole a estrutura de pastas em `tree` (saída do `tree /A` ou digitada à mão).
 *    Termine nomes de pastas com "/" para destacá-las. Linhas com "#" viram comentário.
 * 4. Revise `role` e `stack` para refletir exatamente o que você fez.
 *
 * Enquanto `screenshots` ou `tree` estiverem vazios, o site mostra um aviso
 * "em breve" no lugar — nada quebra.
 */

export type Shot = { src: string; caption: { pt: string; en: string } };

export const phpCase = {
  screenshots: [] as Shot[],
  // Exemplo de formato (substitua pela estrutura real, sem arquivos de config/credenciais):
  // app/
  // ├── controllers/      # regras de cada tela
  // ├── models/           # acesso ao banco
  // └── views/
  tree: ``,
  stack: ["PHP", "SQL", "JavaScript", "HTML/CSS", "SVN"],
  pt: {
    label: "Case em destaque",
    type: "Sistema de gestão web · Projeto de cliente",
    title: "ERP Web em PHP",
    summary:
      "Sistema web de gestão usado por empresas no dia a dia. Trabalho no desenvolvimento em equipe: novas funcionalidades, regras de negócio e a camada de dados que sustenta tudo isso.",
    roleTitle: "Meu papel",
    role: [
      "Desenvolvimento de funcionalidades e telas em PHP",
      "Consultas SQL e integração com o banco de dados",
      "Manutenção e evolução de código legado em produção",
      "Trabalho em equipe com versionamento via SVN",
    ],
    note: "Projeto sob confidencialidade: o código e os dados não são públicos. As telas usam dados fictícios ou ocultados.",
    galleryEmpty: "Prints do sistema em breve",
    treeTitle: "Estrutura do projeto",
    treeEmpty: "Estrutura de pastas em breve",
  },
  en: {
    label: "Featured case",
    type: "Web management system · Client project",
    title: "PHP Web ERP",
    summary:
      "A web management system companies rely on every day. I work on it as part of a team: new features, business rules and the data layer underneath them.",
    roleTitle: "My role",
    role: [
      "Building features and screens in PHP",
      "SQL queries and database integration",
      "Maintaining and evolving legacy code in production",
      "Team workflow with SVN version control",
    ],
    note: "Under confidentiality: source code and data are private. Screens shown use fictitious or masked data.",
    galleryEmpty: "System screenshots coming soon",
    treeTitle: "Project structure",
    treeEmpty: "Folder structure coming soon",
  },
};
