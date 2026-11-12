# Agent guide

This is a static HTML/CSS/JavaScript club management site. There is no build
step, package manager, framework, or backend.

## Read this first

- `index.html` — page structure. Loads `data/*.js`, then `app.js`.
- `app.js` — application logic, storage, auth, rendering, contrast handling.
- `styles.css` — all styling.
- `data/teams.js` — editable team content.
- `data/staff.js` — editable staff and player content.
- `data/accounts.js` — editable login accounts.
- `assets/logos/` and `assets/photos/` — local images.

## Rules for agents

1. Change club content in `data/*.js`, not inside `index.html` or `app.js`.
2. Keep the data files shaped as `window.SUNNY_DATA.teams`, `.staff`, and
   `.accounts`. The loader expects these globals.
3. Keep `data/*.js` loaded before `app.js` in `index.html` and keep `defer` on
   all script tags so the order is preserved.
4. Image values may be base64 data URLs or safe relative paths such as
   `assets/logos/team.png`. Do not use absolute paths, `..`, or remote URLs.
5. Do not remove the automatic contrast logic in `app.js`:
   `buildWorkspacePalette`, `getContrastRatio`, and
   `applyWorkspaceBackground`. It sets the `--workspace-*` CSS variables.
6. When adding new text that sits directly on the workspace background, add it
   to the contrast selectors near the end of `styles.css`.
7. Do not store secrets in code. `data/accounts.js` is plain text by design
   for local use only; warn the user if a site will be public.
8. Keep the existing bilingual strings (`TRANSLATIONS`) intact when editing UI.

## Content shapes

```js
window.SUNNY_DATA.teams = [{
  id: "senior-football",
  name: "Sunny Senior FC",
  category: "football", // football | volleyball | basketball | futsal | esports
  location: "Phnom Penh",
  logo: "assets/logos/senior-fc.png",
  accentColor: "#0d4a32",
  phone: "+855 12 345 678",
  telegram: "https://t.me/example",
  description: "",
  foundedYear: "2020",
  trainingDay: "",
  trainingTime: "",
}];

window.SUNNY_DATA.staff = [{
  id: "staff-alex",
  teamId: "senior-football",
  name: "Alex Morgan",
  role: "Head Coach", // valid role from VALID_ROLES in app.js
  number: "",
  contact: "",
  photo: "assets/photos/alex.jpg",
}];

window.SUNNY_DATA.accounts = [{
  username: "coach.alex",
  password: "ChangeMe123",
  systemRole: "viewer", // viewer | admin | owner
  teamRoles: { "senior-football": "Coach" },
}];
```

## Validation

Run these before finishing:

```bash
node --check app.js
node --check data/teams.js
node --check data/staff.js
node --check data/accounts.js
```

Then serve the folder and verify in a browser:

```bash
python -m http.server 8000
```

Check that:

- the page loads with no console errors,
- teams and staff from `data/` appear,
- changing the workspace background updates the text colour,
- login still works for existing accounts.
