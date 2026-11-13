# HTL Hi Tech Lab website

React + Vite source code for the HTL company website.

## Project structure

```
htl-website/
├── index.html            Page title, description, fonts, favicon
├── public/               Images, logos and videos (served as-is)
│   ├── img/              Project photos and video poster
│   ├── logos/            Partner logos, 1.png = most important
│   └── video/            Background video (1080p desktop, 720p mobile)
└── src/
    ├── data.js           ALL website text: edit this file to change content
    ├── styles.css        Colors, fonts, layout and animations
    ├── App.jsx           Page order
    └── components/       One file per section (Header, Hero, About, …)
```

## Run on your computer

Requires [Node.js](https://nodejs.org) 18 or newer.

```bash
npm install
npm run dev        # opens http://localhost:5173
npm run build      # creates the production site in /dist
```

## Deploy

### Vercel (recommended, free)
1. Push this folder to a GitHub repository.
2. Go to https://vercel.com, sign in with GitHub, click **Add New → Project** and pick the repository.
3. Vercel detects Vite automatically (Build command `npm run build`, Output `dist`). Click **Deploy**.
4. In **Settings → Domains** add `htl.mn` and `www.htl.mn`, then copy the DNS records Vercel shows into your domain registrar.

### Netlify (no GitHub needed)
1. Run `npm install` and `npm run build`.
2. Go to https://app.netlify.com/drop and drag the `dist` folder onto the page.
3. In **Domain management** add `htl.mn` and follow the DNS instructions.

### Any other hosting (cPanel etc.)
Run `npm run build` and upload the **contents** of `dist/` to the `public_html` folder.

## Common edits

| Change | File |
| --- | --- |
| Text, stats, services, projects, contact info | `src/data.js` |
| Add a project | add an item to `projects` in `src/data.js`, put photos in `public/img/`; it gets its own page at `/projects/<slug>` |
| Project page text (overview, facts, highlights) | `details` on the project in `src/data.js` |
| Replace partner logos | `public/logos/1.png … 21.png` (order = importance) |
| Background video | replace `public/video/intro-1080.mp4` and `intro-720.mp4` |
| Colors | `:root` block at the top of `src/styles.css` |
