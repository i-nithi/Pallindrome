# Nithyashri — Developer Portfolio & Freelance Studio

Custom-built developer portfolio and freelance landing page built from scratch with **Python (FastAPI)**, **HTML5**, **CSS3**, and **TypeScript**.

## Architecture

- `app.py` — Primary Python backend (`FastAPI` + `Jinja2` + `SQLite` inquiry storage + `Pydantic` validation).
- `data.py` — Portfolio configuration, project archive, skill matrix, and freelance scope definitions.
- `templates/index.html` — Semantic HTML5 editorial layout.
- `static/css/` — Modular custom CSS (`tokens.css`, `layout.css`, `sections.css`) with reduced-motion support.
- `static/ts/main.ts` — Typed frontend interactions compiled cleanly to `static/js/main.js`.

## Running Locally

```bash
cd Pallindrome
python -m uvicorn app:app --reload
```

Then open `http://127.0.0.1:8000`.

## Updating TypeScript

Whenever you edit `static/ts/main.ts`, compile it to `static/js/main.js` with Node 24's built-in type stripper (zero extra packages needed):

```bash
node -e "const fs=require('fs'),m=require('module'); fs.writeFileSync('static/js/main.js', m.stripTypeScriptTypes(fs.readFileSync('static/ts/main.ts','utf8'),{mode:'strip'}));"
```

## Customizing Links

Update `contact_email`, `linkedin_url`, or individual project `github_url` / `live_url` fields inside `data.py`.
