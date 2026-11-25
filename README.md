# Pallindrome

Static website built with HTML, CSS and TypeScript. GSAP and Three.js run in the browser; no Python server is required.

## Build and preview

```sh
npm ci
npm run typecheck
npm run build
npm run preview
```

`npm run build` bundles the frontend and creates `dist/`, the Firebase Hosting directory. Edit page content in `index.html`, styles in `static/css/`, and interactions in `static/ts/`.

## Deploy to Firebase Hosting

1. Create a Firebase project on the Spark plan and install the Firebase CLI: `npm install -g firebase-tools`.
2. Run `firebase login`, then `firebase use --add` and select your Firebase project.
3. Run `npm ci`, `npm run build`, then `firebase deploy --only hosting`.
4. Add your custom domain in Firebase Hosting if desired, following Firebase's DNS instructions.

The inquiry form validates in the browser and opens a prefilled draft in the visitor's email application. The visitor must send the message; the site does not store submissions or guarantee delivery. A visitor without a configured email app can use the displayed contact details instead. The old local `inquiries.db`, if present, is not deployed and should be backed up separately if it contains inquiries.
