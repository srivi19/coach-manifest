# Vi Narayanan — AI Practitioner Application Page

A "vibe-coded" application page built with Claude (Cowork): a small Express
static site (not a single HTML file) containing:

- `public/index.html` — cover letter, resume, AI build showcase, learning note
- `public/css/style.css` — styling
- `public/js/script.js` — smooth-scroll nav
- `public/assets/Vi_Narayanan_Resume.docx` — downloadable resume
- `public/assets/campusvoice-system-prompt.txt` — real orchestration prompt
  from the CampusVoice agent (a downloadable AI artifact)
- `server.js` / `package.json` — Express server for Railway deployment

## Run locally

```bash
npm install
npm start
```

Visit http://localhost:3000

## Deploy on Railway

1. Push this folder to a new GitHub repo (e.g. `vi-ai-application`).
2. In Railway: New Project → Deploy from GitHub repo → select the repo.
3. Railway auto-detects Node.js, runs `npm install` and `npm start`.
4. Railway assigns a public URL (Settings → Networking → Generate Domain).

## License

The code in this repo is MIT licensed (see `LICENSE`). Personal content —
resume, cover letter, and bio text in `public/index.html` and
`public/assets/Vi_Narayanan_Resume.docx` — is not covered by the license and
is not intended for reuse.
