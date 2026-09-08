# Pedro Lucas — Creative Developer

Versão completa e independente do portfólio de Pedro Lucas. O projeto utiliza React, TypeScript e Vite e não depende de nenhum serviço ou componente exclusivo do ChatGPT Sites.

O site inclui conteúdo completo em português e inglês, português inicial e seletor de idioma, contato direto pelo WhatsApp, favicon autoral e menu mobile com camada opaca.

## Requisitos

- Node.js 22.13 ou superior
- npm 10 ou superior

## Executar localmente

```bash
npm install
npm run dev
```

O endereço local será exibido no terminal, normalmente `http://localhost:5173`.

## Verificar e compilar para produção

```bash
npm run typecheck
npm run build
```

Os arquivos prontos para hospedagem serão gerados na pasta `dist`.

Para conferir a versão de produção localmente:

```bash
npm run preview
```

## Publicar na Vercel

### Pela interface da Vercel

1. Envie este projeto para um repositório GitHub, GitLab ou Bitbucket.
2. Na Vercel, selecione **Add New → Project**.
3. Importe o repositório.
4. A configuração será detectada automaticamente pelo arquivo `vercel.json`.
5. Confirme:
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. Clique em **Deploy**.

### Pela CLI

```bash
npm install -g vercel
vercel
vercel --prod
```

## Publicar na Hostinger, HostGator ou outro cPanel

O pacote já inclui uma pasta `dist` compilada e pronta.

1. Acesse o gerenciador de arquivos da hospedagem.
2. Abra a pasta pública do domínio, normalmente `public_html`.
3. Envie **o conteúdo da pasta `dist`**, e não a pasta inteira.
4. Confirme que `index.html`, `assets`, `favicon.svg` e `.htaccess` ficaram diretamente em `public_html`.
5. Se houver cache ativo, limpe-o depois da publicação.

O arquivo `.htaccess` é incluído automaticamente na compilação e funciona em servidores Apache, comuns em Hostinger e HostGator.

## Estrutura

```text
.
├── public/              # Arquivos públicos e configuração Apache
├── src/
│   ├── App.tsx          # Conteúdo, interações e canvas animado
│   ├── main.tsx         # Inicialização da aplicação
│   └── styles.css       # Design, animações e responsividade
├── dist/                # Versão compilada pronta para hospedagem
├── index.html           # Documento HTML principal
├── package.json         # Dependências e comandos
├── vercel.json          # Configuração automática da Vercel
└── vite.config.ts       # Configuração da compilação
```

## Personalização

- Textos, projetos e links: `src/App.tsx`
- Cores, tipografia, layouts e animações: `src/styles.css`
- Título e descrição do navegador: `index.html`
- Ícone do site: `public/favicon.svg`

Após qualquer alteração, execute novamente:

```bash
npm run build
```

Depois, publique o novo conteúdo da pasta `dist`.

## Observações

- O site é inteiramente estático e não exige banco de dados ou variáveis de ambiente.
- O botão de contato abre o cliente de e-mail do visitante.
- O botão **COPY EMAIL** usa a API de área de transferência do navegador e funciona em HTTPS ou localhost.
- As animações respeitam a preferência `prefers-reduced-motion` do dispositivo.

## Atualização visual

Português é sempre o idioma inicial; EN/PT alterna durante a visita. Identidade editável em public/brand/. Imagens WebP locais responsivas em public/projects/, com carregamento sob demanda. MesaPro é uma visualização conceitual criada para o portfólio. A seção de processo usa posicionamento sticky em CSS; respeita redução de movimento. A animação do canvas pausa fora da tela e em abas inativas.
