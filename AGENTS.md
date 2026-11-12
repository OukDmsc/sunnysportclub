# Agent guide

This is a static HTML/CSS/JavaScript club management site with no build step or
framework. Accounts are shared across devices through Supabase Auth. Team and
member data stay in browser local storage. API routes are Vercel Functions.

## Read this first

- `index.html` — page structure. Loads `data/*.js`, then `app.js`.
- `app.js` — application logic, storage, auth, rendering, contrast handling.
- `styles.css` — all styling.
- `data/teams.js` — editable team content.
- `data/staff.js` — editable staff and player content.
- `data/accounts.js` — editable seed/local accounts.
- `assets/logos/` and `assets/photos/` — local images.
- `api/auth/` — register, login, session, and account-management endpoints.
- `api/_lib/auth.js` — shared server helpers; `_lib` is not a public route.
- `vercel.json` — pins the API region to Seoul (`icn1`).

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
7. Do not store secrets in code. `SUPABASE_SERVICE_ROLE_KEY` and `AUTH_SECRET`
   belong only in `.env.local` (local) and Vercel environment variables. Never
   reference them from `app.js`, `data/`, or committed files. `data/accounts.js`
   and local fallback accounts are plain text by design; warn the user if a site
   will be public.
8. Keep the existing bilingual strings (`TRANSLATIONS`) intact when editing UI.
9. The landing ambience uses Web Audio and must only start after a user gesture.
   Keep the `#auth-sound-toggle` mute control and the reduced-motion rules.
10. Public sign-up must collect a real email address or an international phone
    number and always creates a `viewer` account. Never add a role picker to the
    public form: `owner`, `admin`, `developer`, and Coach access are issued from
    the management panel by the owner. Validate contacts with `normalizeEmail`
    and `normalizePhone` in `app.js` and reject duplicates.
11. The app is gated: keep `body.auth-gate` and the `#auth-screen` /
    `#app-shell` toggling in `render()` so no club content renders before
    sign-in. After a successful login or registration, call `showWelcome()`;
    keep the welcome overlay dismissible by button, Escape and a 5.2s timer.
12. Auth is remote-first with a local fallback. Keep `authRequest`,
    `finishRemoteSignIn`, `restoreRemoteSession`, and `loadRemoteAccounts`
    working, and keep the local fallback when the API is unreachable
    (`isRemoteUnavailable`). Do not remove the one-time migration of local
    accounts on a 401 from `/api/auth/login`.
13. Session tokens are 30-day HS256 JWTs in
    `localStorage["sunny-session-token"]`, signed with `AUTH_SECRET`. Clearing
    the token on logout is required. Do not log tokens or passwords.
14. Server-side account role rules must mirror the UI: only an owner sets
    `systemRole`; admins and coaches assign team roles; a coach cannot assign
    Coach or manage other teams; an account manages only one team. Keep
    `api/_lib/auth.js` authoritative for account writes.

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
  systemRole: "viewer", // viewer | admin | developer | owner
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
node --check api/_lib/auth.js
node --check api/auth/login.js
node --check api/auth/register.js
node --check api/auth/session.js
node --check api/auth/accounts/index.js
node --check "api/auth/accounts/[id].js"
```

Then serve the app and verify in a browser. Shared accounts need the API:

```bash
vercel dev
```

Static-only checks (local fallback) can use:

```bash
python -m http.server 8000
```

Check that:

- the page loads with no console errors,
- only the login gate is visible before sign-in,
- sign-in shows the welcome screen and then the workspace,
- a new account can sign in after clearing browser storage (cross-device),
- teams and staff from `data/` appear,
- changing the workspace background updates the text colour,
- login still works for existing accounts.
