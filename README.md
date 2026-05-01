# Hugo Vaz da Rocha — Advocacia Previdenciária

Landing page do escritório de advocacia previdenciária do Dr. Hugo Vaz da Rocha (OAB/PI 14.732), em Teresina/PI.

**Produção:** https://hugo-vaz-advocacia.vercel.app/
**Domínio próprio:** https://hugovaz.adv.br/ (DNS pendente no Registro.br)

## Stack

Site estático puro — `index.html` + JSX compilado no browser via Babel standalone (CDN).
Sem build step, sem dependências de runtime.

## Estrutura

```
.
├── index.html          # Página principal (carrega React + Babel + JSX)
├── app.jsx             # Componentes da landing page
├── tweaks-panel.jsx    # Painel de ajustes (uso interno em modo design)
├── assets/             # Imagens (foto do titular, prédio)
├── vercel.json         # Configuração de deploy
├── robots.txt
└── sitemap.xml
```

## Editar contatos

Todos os dados de contato ficam centralizados no objeto `CONTACT` no topo do `app.jsx` (linhas 5-22):

```js
const CONTACT = {
  whatsappNumber: "5586999990000",
  whatsappDisplay: "+55 86 99999 0000",
  phone: "+55 86 3000 0000",
  // ...
};
```

Edite ali e tudo no site se atualiza sozinho.

## Deploy

```bash
vercel deploy --prod
```

Ou commit + push: cada push em `main` dispara deploy automático na Vercel.

## Rodar localmente

```bash
python -m http.server 8765
# abre http://localhost:8765/
```
