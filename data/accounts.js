// STAFF LOGIN ACCOUNTS
// ====================
//
// Add usernames and passwords for the people who need to sign in.
//
// HOW TO ADD AN ACCOUNT
// 1. Copy the example block below.
// 2. Remove the comment markers at the start and end of the example.
// 3. Change the values and save this file.
// 4. Refresh index.html in your browser.
//
// FIELDS
// username    Letters, numbers, dot, dash or underscore (3-24 characters).
// password    At least 8 characters is recommended.
// systemRole  "viewer" (read only), "admin" (manage the site), or "owner".
// teamRoles   Optional team permissions. The key is a team id from teams.js.
//             The value is "Coach", "Captain", or "Team Manager".
//             Example: { "senior-football": "Coach" }
//
// IMPORTANT SECURITY NOTE
// This is a local browser-only website. Anyone who can open this folder can
// read these passwords, and the browser stores them in local storage.
// Use this only for a private/local club tool. A public website needs a real
// server and hashed passwords instead.
//
// The built-in owner account "ddomm7" continues to work. It is not shown here
// because its password is stored as a secure hash, not as readable text.
window.SUNNY_DATA = window.SUNNY_DATA || {};

window.SUNNY_DATA.accounts = [
  /*
  {
    username: "coach.alex",
    password: "ChangeMe123",
    systemRole: "viewer",
    teamRoles: { "senior-football": "Coach" }
  },
  {
    username: "scoreboard.admin",
    password: "ChangeMe456",
    systemRole: "admin",
    teamRoles: {}
  }
  */
];
