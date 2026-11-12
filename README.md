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

## Features

- Responsive sidebar navigation and dashboard layout
- Team overview cards and statistics
- Member roster with search and role filtering
- Add, edit, and remove member records
- Club profile management with location and contact details
- Team management and administration controls
- Self-service member sign-up with a real email address or international phone number
- Sign in with email, phone number, or username
- Sign-in gate: club content stays hidden until a visitor logs in or creates an account
- Animated, colourful welcome screen after sign-in with the member's name and role
- Owner, Admin, Developer, and Coach accounts issued only by the club owner
- Role-based team creation: Owner, Admin, Developer, or Coach
- Team Leader and Team Manager access assigned by the team Coach
- Fast bulk member import (paste up to 50 people at once)
- Animated football-themed landing screen with optional stadium sound
- Language toggle for English / Khmer
- Workspace background customization
- **Automatic text contrast** that keeps text readable on any background colour or photo
- **Editable content files** for teams, staff, accounts, logos and photos
- Local browser storage persistence

## Project structure

```text
.
├── index.html
├── app.js
├── styles.css
├── data/
│   ├── teams.js       ← team names, logos, contacts
│   ├── staff.js       ← coaches, players and staff
│   ├── accounts.js    ← usernames, passwords and roles
│   └── README.md      ← editing guide
├── assets/
│   ├── logos/         ← put team logos here
│   └── photos/        ← put staff/player photos here
├── AGENTS.md          ← instructions for VS Code AI agents
├── .gitignore
└── README.md
```

## Run locally

### Option 1: Open directly in a browser

1. Open `index.html` directly in your browser.
2. The app loads without a build step.

### Option 2: Serve locally with a small web server

From the project folder, run:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Deploy to Vercel

1. Push this repository to GitHub (`OukDmsc/sunnysportclub`).
2. In Vercel, import the repository.
3. Use the `main` branch and the repository root.
4. Choose the **Other** framework preset. Leave the build command empty and
   use `.` as the output directory.
5. Deploy. Vercel serves `index.html`, `styles.css`, `app.js`, `data/` and
   `assets/` as static files.

No environment variables are required. Data is still stored per browser, so a
Vercel deployment will not automatically share browser data saved at another
address or on another device.

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

`data/accounts.js` stores passwords as readable text because this is a local,
browser-only app with no server. Anyone who can open the project folder can
read them, and the browser stores them in local storage.

- Use this only for a private/local club tool.
- Do not use real secrets if you publish the site on the internet.
- A public website needs a backend and hashed passwords.

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

- Data is stored in the browser using local storage.
- The app is designed for local use and does not require a backend or database.
- Team and member data are saved on the current browser/device.
- To move data to another browser, edit the files in `data/` and refresh there.

## Tech stack

- HTML
- CSS
- JavaScript

## License

This project is provided as a local utility for team management and is not packaged with a formal external license file.
