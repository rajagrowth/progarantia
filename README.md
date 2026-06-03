# Pró Garantia — Site Institucional

Site institucional da **Pró Garantia Créditos e Cobranças**, garantidora de taxas
condominiais com mais de 15 anos de atuação no Paraná, Santa Catarina e Espírito Santo.

> _"Se é Pro, é Garantido."_

## 🌐 Publicar no GitHub Pages

1. Crie um repositório no GitHub e envie estes arquivos (mantendo `index.html` na raiz).
2. No repositório, vá em **Settings → Pages**.
3. Em **Source**, selecione a branch `main` e a pasta **/ (root)**.
4. Salve. Em alguns instantes o site estará no ar em
   `https://SEU-USUARIO.github.io/NOME-DO-REPO/`.

O arquivo `.nojekyll` já está incluído para o GitHub Pages servir a pasta
`components/` sem processamento do Jekyll.

## 📁 Estrutura

```
.
├── index.html              # Home
├── quem-somos.html         # Quem Somos
├── servicos.html           # Serviços
├── diferenciais.html       # Diferenciais
├── duvidas.html            # Dúvidas Frequentes
├── contato.html            # Contato
├── boleto-2via.html        # 2ª Via de Boleto (simulação)
├── components/             # Componentes da interface (React/JSX)
│   ├── app-core.jsx        # Cabeçalho, menu, hero, ícones
│   ├── app-middle.jsx      # Quem Somos, Boleto, Serviços, Diferenciais
│   ├── app-tail.jsx        # Como Funciona, FAQ, Escritórios, Rodapé
│   ├── app.jsx             # Montagem da Home
│   └── pages.jsx           # Páginas internas + 2ª via de boleto
├── styles/
│   └── styles.css          # Cores, tipografia e todo o estilo
└── assets/                 # Imagens e logotipo
```

## 🛠️ Rodar localmente

Como os componentes JSX são carregados dinamicamente, use um servidor local
(abrir via `file://` com duplo-clique pode ser bloqueado pelo navegador):

```bash
# opção 1 — Node
npx serve

# opção 2 — Python
python3 -m http.server
```

Depois acesse `http://localhost:3000` (ou a porta indicada).

## 🎨 Tecnologia

- HTML + React 18 (via CDN) com JSX transpilado no navegador (Babel Standalone)
- CSS puro com design tokens (paleta navy + dourado)
- Fontes: Cormorant Garamond + DM Sans

---

© 2026 Pró Garantia Créditos e Cobranças. Todos os direitos reservados.
