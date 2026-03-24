# Keyur Ambekar — Portfolio

Personal portfolio website built with **React + Vite**, deployed on **Vercel**, with DNS managed via **Cloudflare**.

🔗 Live: [keyurambekar.dev](https://keyurambekar.dev)

---

## Tech Stack

- **React 18** + **Vite 5** — fast dev/build tooling
- **React Router v6** — client-side routing
- **CSS Modules** — scoped component styles
- **Vercel** — hosting + CI/CD from GitHub
- **Cloudflare** — DNS, CDN, and DDoS protection

---

## Local Development

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev
# → http://localhost:5173

# 3. Build for production
npm run build

# 4. Preview production build locally
npm run preview
```

---

## Project Structure

```
keyur-portfolio/
├── public/
│   └── resume.pdf
├── src/
│   ├── components/
│   │   ├── Navbar.jsx / .css
│   │   ├── Hero.jsx / .css
│   │   ├── About.jsx / .css
│   │   ├── Skills.jsx / .css
│   │   ├── Projects.jsx / .css
│   │   ├── Experience.jsx / .css
│   │   ├── Contact.jsx / .css
│   │   └── Footer.jsx / .css
│   ├── data/
│   │   └── index.js
│   ├── styles/
│   │   └── global.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── vite.config.js
├── vercel.json
└── package.json
```

---

## License

MIT — feel free to fork and use as a template.