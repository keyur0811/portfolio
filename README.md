# Keyur Ambekar — Portfolio

Personal portfolio website built with **React + Vite**, deployed on **Vercel**, with DNS managed via **Cloudflare**.

🔗 Live: [keyurambekar.dev](https://keyurambekar.dev) *(update with your domain)*

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
│   └── resume.pdf          ← Add your resume here
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
│   │   └── index.js        ← All your personal data lives here
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

## Customization

All personal info (name, bio, skills, projects, experience) is in one file:

```
src/data/index.js
```

Edit that file to update content — no need to touch the components.

---

## Deployment: GitHub → Vercel

### Step 1 — Push to GitHub

```bash
git init
git add .
git commit -m "feat: initial portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

### Step 2 — Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) → **Add New Project**
2. Import your GitHub repo
3. Framework: **Vite** (auto-detected)
4. Build command: `npm run build`
5. Output directory: `dist`
6. Click **Deploy** ✓

Every push to `main` auto-deploys.

---

## Custom Domain via Cloudflare

### Step 1 — Add domain in Vercel

1. Vercel dashboard → Your project → **Settings → Domains**
2. Add your domain (e.g. `keyurambekar.dev`)
3. Vercel gives you either a **CNAME** or **A record** to add

### Step 2 — Configure Cloudflare DNS

1. Log in to [Cloudflare](https://dash.cloudflare.com)
2. Select your domain → **DNS → Records**
3. Add the record Vercel provided:
   - **Type:** `CNAME`
   - **Name:** `@` (or `www`)
   - **Target:** `cname.vercel-dns.com`
   - **Proxy status:** ☁️ Proxied (orange cloud ON)
4. Save

### Step 3 — SSL

Cloudflare handles SSL automatically. In **SSL/TLS settings**, set mode to **Full** (not Full Strict, as Vercel already has its own cert).

### Result

```
User → Cloudflare (CDN + DDoS + SSL) → Vercel (hosting) → Your React app
```

---

## Adding Your Resume

Place your PDF at:
```
public/resume.pdf
```

The navbar **Résumé** button already links to `/resume.pdf`.

---

## License

MIT — feel free to fork and use as a template.
