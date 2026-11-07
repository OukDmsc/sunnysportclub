# Sunny Sport Club

Sunny Sport Club is a static HTML, CSS, and JavaScript team manager.

## Run locally

Open the folder with a static web server, such as the VS Code Live Server
extension. No build step or package installation is required.

## Deploy to Vercel

1. Push this repository to GitHub.
2. In Vercel, import `OukDmsc/sunnysportclub`.
3. Use the `main` branch and the repository root.
4. Choose the **Other** framework preset. Leave the build command empty and
   use `.` as the output directory.
5. Deploy. Vercel serves `index.html`, `styles.css`, and `app.js` as static
   files.

There are no environment variables required for this static deployment.

## Data and Supabase

This version stores accounts, teams, and updates in the current browser's
local storage. Browser storage is isolated by browser and site origin, so the
Vercel deployment will not automatically contain data saved at another address
or on another device. This deployment does not migrate browser data.

Supabase is not connected. Do not put a PostgreSQL connection string, database
password, or Supabase service-role/secret key in browser code or commit them to
GitHub. A future shared-data integration needs a database schema, authentication,
row-level security policies, and a safe data migration plan.
