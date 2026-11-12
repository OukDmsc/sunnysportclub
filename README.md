# Sunny Sport Club Manager

A lightweight team management dashboard for organizing club info, staff, members, and team operations in a single local web app.

## Overview

This project is a browser-based club management interface built with plain HTML, CSS, and JavaScript. It lets users:

- view a club overview dashboard
- manage team members and roles
- edit club profile details
- switch between English and Khmer UI
- personalize the workspace background
- organize team spotlight and directory information
- store data locally in the browser
- browse public teams, book the stadium, and preview club products without signing in
- get navigation help from the bilingual Sunny Concierge

## Features

- Responsive sidebar navigation and dashboard layout
- Team overview cards and statistics
- Member roster with search and role filtering
- Add, edit, and remove member records
- Club profile management with location and contact details
- Team management and administration controls
- Self-service member sign-up with a real email address or international phone number
- Sign in with email, phone number, or username
- **Shared accounts across devices** (phone, tablet, PC) through Supabase Auth
- Public team, booking, shop, and contact pages; sign-in is required for account settings and staff tools
- Animated, colourful welcome screen after sign-in with the member's name and role
- Owner, Admin, Developer, and Coach accounts issued only by the club owner
- Role-based team creation: Owner, Admin, Developer, or Coach
- Team Leader and Team Manager access assigned by the team Coach
- Fast bulk member import (paste up to 50 people at once)
- Animated football-themed landing screen with optional stadium sound
- Language toggle for English / Khmer
- Workspace background customization
- Stadium booking with weekday/weekend rates and Telegram confirmation
- Product catalogue preview for bookstore items, drinks, snacks and club merchandise
- Icon-led club contacts, Telegram QR codes, and a navigation assistant with direct staff contacts when it cannot answer
- **Automatic text contrast** that keeps text readable on any background colour or photo
- **Editable content files** for teams, staff, accounts, logos and photos
- Local browser storage keeps teams, members, and appearance settings per device

## Project structure

```text
.
├── index.html
├── app.js
├── styles.css
├── data/
│   ├── teams.js       ← team names, logos, contacts
│   ├── staff.js       ← coaches, players and staff
│   ├── accounts.js    ← seed usernames, passwords and roles
│   └── README.md      ← editing guide
├── assets/
│   ├── logos/         ← put team logos here
│   └── photos/        ← put staff/player photos here
├── api/
│   ├── _lib/auth.js   ← shared server helpers (never exposed as a route)
│   └── auth/          ← register, login, session, account management
├── vercel.json        ← API region (Seoul)
├── .env.example       ← list of required secrets (no values)
├── AGENTS.md          ← instructions for VS Code AI agents
├── .gitignore
└── README.md
```

## Shared accounts

Accounts are stored in Supabase Auth, so the same email, phone number, username,
and password work on every device. The browser still keeps teams, members, and
appearance settings locally.

- **Public sign-up** accepts real email addresses and international phone numbers.
- **Staff accounts** created by an Owner or Admin in the app are saved to Supabase
  and can sign in on any device.
- **Role changes** made by an Owner or Admin are also saved to Supabase.
- **Sessions** last 30 days; signing out clears the session on that device.
- **Offline / local fallback**: if the API is unreachable (for example, opening
  `index.html` without the API), the app falls back to local accounts.
- **Migration**: if an account exists only in this browser, signing in with it
  once while the API is reachable copies it to the shared database. After that it
  works on other devices.

Phone numbers are mapped to a private synthetic email internally
(`<digits>@phone.sunnyclub.app`), and staff accounts use
`<username>@staff.sunnyclub.app`. These addresses are not real mailboxes.

## Run locally

### Option 1: Serve with the API (shared accounts)

The API routes run on Vercel Functions. Install the CLI once and start the local
server from the project folder:

```bash
npm install -g vercel   # once
vercel env pull .env.local
vercel dev
```

Then open the address printed by `vercel dev` (usually
`http://localhost:3000`). Shared accounts work here because the same API routes
run locally.

### Option 2: Serve static files only (local accounts)

From the project folder, run:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

Without the API, sign-in falls back to accounts stored in this browser only.
Opening `index.html` directly works for public browsing, local bookings, and
local accounts. Self-service password recovery uses the hosted auth API; when
opened directly as a `file://` page, users can contact the owner or admin from
the recovery dialog instead.

## Deploy to Vercel

1. Push this repository to GitHub (`OukDmsc/sunnysportclub`).
2. In Vercel, import the repository.
3. Use the `main` branch and the repository root.
4. Choose the **Other** framework preset. Leave the build command empty and
   use `.` as the output directory.
5. Add these Environment Variables in **Project → Settings → Environment
   Variables** for Production and Preview:

   | Name | Purpose |
   | --- | --- |
   | `SUPABASE_URL` | Supabase project URL |
   | `SUPABASE_ANON_KEY` | Supabase public API key (used to verify passwords) |
   | `SUPABASE_SERVICE_ROLE_KEY` | Server-only admin key (never expose in the browser) |
   | `AUTH_SECRET` | Long random string used to sign 30-day session tokens |

6. Deploy. Vercel serves `index.html`, `styles.css`, `app.js`, `data/` and
   `assets/` as static files and turns `api/auth/*` into serverless functions.

`SUPABASE_SERVICE_ROLE_KEY` must stay server-side. Do not put it in `app.js`,
`data/`, or any file committed to Git. `.env.local` is already gitignored.
`api/_lib/` is not deployed as a public route.

## Edit content without coding

You do not need to touch `app.js`, `index.html` or `styles.css` to change club content.

| What you want to change | File to edit |
| --- | --- |
| Team names, categories, locations, contacts | `data/teams.js` |
| Coaches, captains, players and staff | `data/staff.js` |
| Usernames, passwords and login roles | `data/accounts.js` |
| Team logos | `assets/logos/` then reference the path in `data/teams.js` |
| Staff and player photos | `assets/photos/` then reference the path in `data/staff.js` |

Each data file contains a commented example. Copy it, remove the comment
markers, change the values, and save.

### How changes are applied

1. Save the data file.
2. Refresh `index.html` in your browser.
3. The app notices the file changed and updates its saved browser data.

When you change a data file, matching teams, people and accounts are updated.
Items you created inside the website itself are kept.

### Link people to teams

`data/staff.js` uses `teamId`, which must match an `id` in `data/teams.js`:

```js
// data/teams.js
{ id: "senior-football", name: "Sunny Senior FC" }

// data/staff.js
{ id: "staff-alex", teamId: "senior-football", name: "Alex Morgan", role: "Head Coach" }
```

### Add a logo or photo

1. Copy the image into `assets/logos/` or `assets/photos/`.
2. Use the file path in the data file:

```js
logo: "assets/logos/senior-fc.png",
photo: "assets/photos/alex-morgan.jpg",
```

Recommended: square images, logos at least 256 x 256 px, photos around
600 x 600 px. Keep each file under 1 MB.

### Passwords and security

Passwords for **shared accounts** are hashed by Supabase and never stored in this
repository. The browser only keeps the 30-day session token.

`data/accounts.js` and browser-created local accounts store passwords as readable
text because they are fallback data for offline/local use:

- Use local accounts only for a private/local club tool.
- Do not put real secrets in `data/accounts.js` if you publish the site.
- Accounts created through the website while the API is reachable go to Supabase
  and do not store a readable password locally.

The built-in owner account `ddomm7` still works and is not listed in
`data/accounts.js` because its password is stored as a secure hash.

## Automatic text contrast

When you change the workspace background colour or upload a background photo,
the app calculates the background brightness and picks a readable text colour
automatically:

- light background → dark text
- dark background → light text
- muted text and accent lines are adjusted to keep enough contrast
- photo backgrounds get a contrast overlay before the text colour is chosen

This happens live while you drag the colour picker, so the interface stays
legible without manual CSS changes.

## Using VS Code with an AI agent

This project is set up to be friendly to VS Code coding agents:

- Content lives in small, clearly commented files under `data/`.
- Images live under `assets/`.
- `AGENTS.md` explains the rules an agent should follow.

Example prompts you can give an agent:

- "Add a new team called Sunny U16 to `data/teams.js`."
- "Add three players to `data/staff.js` for team `senior-football`."
- "Create a staff account for the new coach in `data/accounts.js`."
- "Check that the automatic text contrast still works after my changes."

## Notes

- Accounts are shared across devices through Supabase Auth.
- Teams, members, and appearance settings are stored in the browser using local
  storage, so they stay on the current device.
- To move team/member data to another browser, edit the files in `data/` and
  refresh there.
- If an older account exists only in one browser, sign in with it once while the
  site is online so it is copied to the shared database.

## Tech stack

- HTML
- CSS
- JavaScript
- Supabase Auth (accounts)
- Vercel Functions (API)

## License

This project is provided as a local utility for team management and is not packaged with a formal external license file.
