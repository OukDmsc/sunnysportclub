# Data files

These files hold the content you can edit without touching the app code.

| File | What it stores |
| --- | --- |
| `teams.js` | Team names, categories, locations, logos and contacts |
| `staff.js` | Coaches, captains, players and staff members |
| `accounts.js` | Seed usernames, passwords and login roles for local/offline use |

## How changes are applied

1. Edit a file and save it.
2. Refresh `index.html`.
3. The app notices the file changed and updates the saved browser data automatically.

The app compares the current data files with the last version it loaded. When
the files change, it updates matching teams, people and accounts. Items you
created inside the website itself are kept.

## Linking people to teams

`staff.js` uses `teamId`, which must match an `id` in `teams.js`.

```js
// teams.js
{ id: "senior-football", name: "Sunny Senior FC" }

// staff.js
{ id: "staff-alex", teamId: "senior-football", name: "Alex Morgan" }
```

## Photos and logos

Put image files in:

- `assets/logos/` for team logos
- `assets/photos/` for people

Then reference the path from the data file.

## Members and staff accounts

Visitors create their own member accounts from the login screen with a real
email address or international phone number. Those accounts are saved to
Supabase, so they work on any device.

Staff accounts (Owner, Admin, Developer, Coach) created in the management panel
are also saved to Supabase. `accounts.js` is only a seed/fallback list for local
or offline use.

## Passwords

Passwords for shared accounts are hashed by Supabase and are not stored here.

`accounts.js` and local fallback accounts store passwords as readable text.
Anyone who can open this folder can read them. Do not use real secrets in
`accounts.js` if you publish the site, and prefer creating accounts through the
website so they are saved to Supabase.
