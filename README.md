# Palindrome Labs — Build Your Digital Presence

Company website, service pricing showcase, interactive proof-of-work archive, and client inquiry backend for **Palindrome Labs** (Coimbatore, India), founded by **Antonius Jairus R**.

## Color Palette

- `#403F50` — Deep Slate
- `#F7A7C1` — Blush Rose
- `#E34A83` — Electric Berry
- `#8E3096` — Royal Plum

## Architecture

- `app.py` — Primary Python backend (`FastAPI` + `Jinja2` + `SQLite` inquiry storage + `Pydantic` validation).
- `data.py` — Service tiers (`₹6,000` Websites & Portfolios, `₹12,000` Web Applications, `₹15,000` Android Development), interactive Proof of Work cards, capabilities, and Founder spotlight.
- `templates/index.html` — Semantic HTML5 layout.
- `static/css/` — Modular custom CSS (`tokens.css`, `layout.css`, `sections.css`).
- `static/ts/main.ts` — Typed frontend interactions compiled cleanly to `static/js/main.js`.

## Running Locally

```bash
cd Pallindrome
python -m uvicorn app:app --reload
```

Then open `http://127.0.0.1:8000`.

## Updating TypeScript

```bash
node -e "const fs=require('fs'),m=require('module'); fs.writeFileSync('static/js/main.js', m.stripTypeScriptTypes(fs.readFileSync('static/ts/main.ts','utf8'),{mode:'strip'}));"
```
