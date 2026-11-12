# Data files

These files hold the content you can edit without touching the app code.

| File | What it stores |
| --- | --- |
| `teams.js` | Team names, categories, locations, logos and contacts |
| `staff.js` | Coaches, captains, players and staff members |
| `accounts.js` | Usernames, passwords and login roles |

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

## Passwords

`accounts.js` stores passwords as readable text because this is a local,
browser-only app with no server. Anyone who can open this folder can read them.
Do not use real secrets if you publish the site on the internet. A public site
needs a backend and hashed passwords.
