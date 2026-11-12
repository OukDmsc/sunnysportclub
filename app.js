const STORAGE_KEY = "sunny-sport-club-manager-v1";
const DEFAULT_DATA = {
  club: {
    name: "SUNNY SPORT CLUB",
    location: "",
    trainingDay: "",
    trainingTime: "",
    phone: "",
    telegram: "",
  },
  members: [],
};
const BOOTSTRAP_USERS = [
  {
    id: "bootstrap-dev-owner",
    username: "ddomm7",
    passwordSalt: "rYnucMrbkk4Ye5dHOrtziw==",
    passwordHash: "0mV73SjWfju17BXmO4ikk3db5/AVVjlkK0k0ZVpt4fk=",
    systemRole: "owner",
    teamRoles: {},
  },
  {
    id: "bootstrap-owner",
    username: "makara",
    passwordSalt: "6lX7kB7h/Ngk4a4k2/RinA==",
    passwordHash: "dyqd12mBz5gAKsiJi5NpGRP6rLuvBDllj3cgA6UsaXU=",
    systemRole: "viewer",
    teamRoles: {},
  },
];
const VALID_ROLES = new Set([
  "Head Coach",
  "Assistant Coach",
  "Coach",
  "Captain",
  "Player",
  "Goalkeeper",
  "Defender",
  "Midfielder",
  "Forward",
  "Medical Staff",
  "Manager",
]);
const ROLE_TRANSLATION_KEYS = {
  "Head Coach": "roleHeadCoach",
  "Assistant Coach": "roleAssistantCoach",
  Coach: "roleCoach",
  Captain: "roleCaptain",
  Player: "rolePlayer",
  Goalkeeper: "roleGoalkeeper",
  Defender: "roleDefender",
  Midfielder: "roleMidfielder",
  Forward: "roleForward",
  "Medical Staff": "roleMedical",
  Manager: "roleManager",
};
const BULK_MEMBER_LIMIT = 50;
const DEFAULT_CLUB_LOGO = "assets/logos/sunny-sport-club-logo.png";
const TEAM_MANAGEMENT_ROLES = new Set(["Coach", "Captain", "Team Manager"]);
const TEAM_CATEGORY_COLORS = {
  football: "#0d4a32",
  volleyball: "#d4a03a",
  basketball: "#b65c31",
  futsal: "#277342",
  esports: "#5461a8",
};
const LANGUAGE_KEY = "sunny-sport-club-language";
const WORKSPACE_BACKGROUND_KEY = "sunny-sport-club-workspace-background-v1";
const CONTENT_SIGNATURE_KEY = "sunny-sport-club-content-signature-v1";
const CONTENT_IMAGE_SOURCE_PATTERN = /\.(?:png|jpe?g|webp|gif|avif|svg)$/i;
const MAX_BACKGROUND_IMAGE_BYTES = 1024 * 1024;
const DEFAULT_WORKSPACE_BACKGROUND = {
  mode: "color",
  color: "#faf8f3",
  image: "",
};
const TRANSLATIONS = {
  en: {
    clubHome: "Sunny Sport Club home",
    teamSummary: "Team summary",
    clubManager: "CLUB MANAGER",
    workspace: "WORKSPACE",
    mainNavigation: "Main navigation",
    openNavigation: "Open navigation",
    closeNavigation: "Close navigation",
    overview: "Overview",
    backToTeams: "Back to teams",
    skipToContent: "Skip to main content",
    staffLogin: "Staff Login",
    celebrateTeam: "Celebrate this team",
    teamRoster: "Team roster",
    sidebarMotto: "One team. One dream.",
    sidebarNote: "Every great season starts with a great team.",
    clubStaff: "Club staff",
    teamAdministrator: "Team administrator",
    teamSeason: "TEAM SEASON",
    switchLanguage: "Switch language to Khmer",
    dashboard: "CLUB DASHBOARD",
    greeting: "Good to see you,",
    coach: "coach.",
    welcomeSubtitle: "A quick look at everything happening with your team.",
    addMember: "Add team member",
    bannerKicker: "EST. WITH TEAM SPIRIT",
    activeClub: "ACTIVE CLUB",
    editClub: "Edit club details",
    squadMembers: "SQUAD MEMBERS",
    coachingStaff: "COACHING STAFF",
    leadership: "Coach & team leadership",
    clubContact: "CLUB CONTACT",
    addLocation: "Add your club location",
    addContact: "Add a contact number",
    callClub: "Call",
    addClubContact: "Add a club contact number",
    openTelegram: "Open the club's Telegram link",
    addTelegram: "Add a Telegram link in club details",
    editDetails: "Edit details",
    readySquad: "Ready to build your squad",
    playerCount: "player",
    playersCount: "players",
    staffCount: "staff",
    yourPeople: "YOUR PEOPLE",
    meetTeam: "Meet the team",
    searchMembers: "Search members...",
    filterByRole: "Filter by role",
    allRoles: "All roles",
    roleHeadCoach: "Head Coach",
    roleAssistantCoach: "Assistant Coach",
    roleCoach: "Coach",
    roleCaptain: "Captain",
    rolePlayer: "Player",
    roleGoalkeeper: "Goalkeeper",
    roleDefender: "Defender",
    roleMidfielder: "Midfielder",
    roleForward: "Forward",
    roleMedical: "Medical staff",
    roleManager: "Manager",
    emptyTitle: "Your squad starts here",
    emptyText: "Add your coach, captain, and players to bring the team together.",
    addFirstMember: "Add your first member",
    noResults: "No members match your search.",
    clearFilters: "Clear filters",
    footerMotto: "Made for the love of the game.",
    teamManagement: "TEAM MANAGEMENT",
    squadDetails: "SQUAD DETAILS",
    addMemberTitle: "Add team member",
    editMemberTitle: "Edit team member",
    closeDialog: "Close dialog",
    profilePhoto: "Profile photo",
    photoHelp: "Make your squad easy to recognize.",
    uploadPhoto: "Upload photo",
    remove: "Remove",
    fullName: "Full name",
    nameExample: "e.g. Alex Morgan",
    teamRole: "Team role",
    selectRole: "Select a role",
    jerseyNumber: "Jersey number",
    optional: "OPTIONAL",
    numberExample: "e.g. 10",
    contactNumber: "Contact number",
    phoneExample: "e.g. +855 12 345 678",
    cancel: "Cancel",
    addMemberSubmit: "Add member",
    saveChanges: "Save changes",
    addManyMembers: "Add many members",
    bulkAddTitle: "Add many members",
    bulkAddDescription:
      "Paste up to 50 people, one per line. Role defaults to Player; number and contact are optional.",
    bulkColumnsHelp: "Columns: Name, Role, Number, Contact",
    bulkPasteTip: "Tip: copy rows directly from Excel or Google Sheets.",
    bulkPasteLabel: "Members list",
    bulkPasteExample: "Alex Morgan, Player, 10, +855 12 345 678",
    bulkDefaultRole: "Default role",
    bulkReadyLabel: "ready to add",
    bulkPreview: "Preview",
    bulkStatus: "Status",
    bulkStatusReady: "Ready",
    bulkStatusInvalid: "Skip",
    bulkAddSubmitDefault: "Add members",
    bulkAddSubmit: "Add {count} members",
    bulkAddSubmitOne: "Add 1 member",
    bulkPreviewSummary: "{ready} ready, {skipped} skipped",
    bulkNoRows: "Paste at least one person to continue.",
    bulkNoValidRows: "No valid rows yet. Check the preview for details.",
    bulkLimit: "You can add up to 50 people at once.",
    bulkOverLimit: "Only the first 50 people will be added.",
    bulkMissingName: "Name is required.",
    bulkInvalidNumber: "Number must be between 0 and 99.",
    bulkDuplicate: "Already on this team.",
    bulkInvalidRole: "Unknown role.",
    bulkSkippedNote: "Rows marked Skip will not be added.",
    bulkAdded: "Added {count} team members.",
    bulkAddedOne: "Added 1 team member.",
    bulkLine: "Line {line}",
    clubProfile: "CLUB PROFILE",
    clubDetails: "Club details",
    clubDescription: "Keep your team’s location and contact information up to date.",
    clubName: "Club name",
    location: "Location",
    locationExample: "City, Cambodia",
    telegramLink: "Telegram link",
    telegramExample: "https://t.me/yourclub",
    saveClubDetails: "Save club details",
    selectedPhotoAlt: "Selected profile photo preview",
    chooseImage: "Choose an image file for the profile photo.",
    changeBackground: "Change background",
    personalizeWorkspace: "PERSONALIZE WORKSPACE",
    backgroundDescription: "Choose a color or upload a photo to personalize your workspace on this device.",
    backgroundPreview: "Workspace background preview",
    backgroundColor: "Background color",
    chooseColor: "Choose a color",
    uploadBackgroundPhoto: "Upload a background photo",
    backgroundPhotoHelp: "PNG, JPG, WebP, GIF, or AVIF · Up to 1 MB · Scanned locally for text contrast",
    colorBackgroundSelected: "Using a solid color background.",
    photoBackgroundSelected: "Photo scanned. Dark or light workspace text was selected for contrast.",
    scanningBackground: "Scanning your photo and adjusting text contrast…",
    resetBackground: "Reset background",
    done: "Done",
    backgroundImageType: "Choose a PNG, JPEG, WebP, GIF, or AVIF image.",
    backgroundImageTooLarge: "Background photos must be 1 MB or smaller.",
    backgroundImageReadFailed: "Could not read this photo. Please choose another.",
    backgroundSaveFailed: "Could not save your background. Check available browser storage.",
    backgroundReset: "Background reset.",
    photoTooLarge: "Choose a photo smaller than 2 MB.",
    readPhotoError: "Could not read the selected photo.",
    memberValidation: "Enter a name and choose a valid team role.",
    memberAdded: "Team member added.",
    memberUpdated: "Team member updated.",
    memberRemoved: "{name} removed from the team.",
    confirmRemove: "Remove {name} from the team?",
    clubNameRequired: "Enter a club name before saving.",
    invalidTelegram: "Enter a valid Telegram link, such as https://t.me/yourclub.",
    clubSaved: "Club details saved.",
    storageError: "Could not save changes. Check your available browser storage.",
    showcaseLabel: "CLUB SHOWCASE",
    showcaseTitle: "Meet our teams",
    previousTeam: "Previous team",
    nextTeam: "Next team",
    teamsDirectory: "TEAM DIRECTORY",
    directoryTitle: "Our teams",
    directorySubtitle: "Browse all teams in the Sunny Sport Club family.",
    directoryEmptyTitle: "No teams yet",
    teams: "Teams",
    teamCategory: "Team category",
    categoryFootball: "Football",
    categoryVolleyball: "Volleyball",
    categoryBasketball: "Basketball",
    categoryFutsal: "Futsal",
    categoryEsports: "eSports",
    logoPreview: "Logo preview",
    playerCountLabel: "PLAYERS",
    registeredPlayers: "Registered players",
    teamActivity: "TEAM ACTIVITY",
    updatesThisWeek: "Updates this week",
    players: "players",
    backToTeamsToast: "Team created. Find it in the directory.",
    showTeamDetails: "Show details",
    hideTeamDetails: "Hide details",
    createTeam: "Create team",
    managementEyebrow: "TEAM OPERATIONS",
    managementTitle: "Team management",
    managementDescription: "Manage team details and build a complete squad roster.",
    editTeam: "Edit team",
    editTeamNamed: "Edit team {name}",
    manageTeam: "Manage team",
    teamRoleLimit: "An account can manage only one team. Remove its management role from the other team first.",
    createTeamAsCoach: "Coach — can create one team",
    coachForThisTeam: "Coach for this team",
    leaderForThisTeam: "Team Leader for this team",
    directoryEmpty: "No teams are saved in this browser yet. This app stores teams locally, so they won't appear automatically on another device or site address. An Owner, Admin, Developer, or Coach can create the first team here.",
    administration: "ADMINISTRATION",
    teamAccess: "Team access",
    teamAccessDescription: "As this team's coach, assign or remove management access for trusted existing accounts. A manager can edit only this team; they cannot create accounts or manage other teams.",
    managerRole: "Team manager",
    assignManagerRole: "Team manager for this team",
    accountManager: "Team manager",
    createAccount: "Create account",
    accountsDescription: "Owner, Admin, and Developer accounts have full control and can create teams. A Coach can create one team, then assign a Team Leader or Team Manager to help run it. Viewers can browse all teams with read-only access.",
    account: "Account",
    fullSystemAccess: "Full system access",
    devOwnerRole: "Dev Owner",
    developerRole: "Developer",
    adminSystemRole: "Admin",
    systemRole: "System role",
    viewerRole: "Viewer",
    adminPromoted: "Admin access granted.",
    developerPromoted: "Developer access granted.",
    adminDemoted: "Admin access removed.",
    roleNotAllowed: "Coaches can assign only Viewer, Team Leader, or Team Manager roles.",
    assignTeamRole: "Select a team to assign a role",
    viewOnly: "View only",
    teamLeaderCaptain: "Team Leader / Captain",
    teamDetailsSoon: "Team details coming soon",
    membersNotListed: "No roster members listed yet.",
    teamMemberSingular: "member",
    teamMemberPlural: "members",
    locationNotProvided: "Location not provided",
    noContactNumber: "No contact number",
    viewing: "Viewing",
    viewTeam: "View team",
    viewTeamNamed: "View team {name}",
    deleteTeam: "Delete {name}",
    deleteTeamConfirm: "Delete {name} and its roster?",
    postPhotoAlt: "Photo attached to team update",
    uploadUnavailable: "This upload is no longer available in this browser.",
    uploadLoadError: "Could not load this upload.",
    clubUpdate: "Club update",
    deleteUpdate: "Delete update",
    postComposerLabel: "Write an update",
    shareUpdate: "Share a team update...",
    addPhotoVideo: "Add photos or video",
    noMediaSelected: "No media selected",
    mediaFilesSelected: "{count} files selected",
    postTo: "Post to",
    allTeams: "All teams",
    postUpdate: "Post update",
    noUpdates: "No updates yet.",
    updateDeleted: "Update deleted.",
    updatePublished: "Update published.",
    mediaMissingMessage: "Add a message or choose a photo or video.",
    chooseImageOrVideo: "Choose an image or video file.",
    mediaTooLarge: "Media files must be 25 MB or smaller.",
    postFailed: "Could not publish this update. Check local storage is available and try again.",
    deleteUpdateConfirm: "Delete this update?",
    teamMembersWillAppear: "Team members will appear here when the roster is added.",
    loginSection: "TEAM STAFF & ADMIN",
    teamLogin: "Team login",
    soundOn: "Sound on",
    soundOff: "Sound off",
    soundToggle: "Toggle stadium sound",
    loginIntro: "Teams and rosters are open to view. Fans can create a member account with an email address or mobile number; staff accounts are issued by the club owner.",
    authHeadline: "Built for the love of the game.",
    authPlatform: "THE CLUB PLATFORM",
    authClubName: "SUNNY SPORT CLUB",
    authMatchSubtitle: "One club. Every team.",
    authOpenDirectory: "OPEN TEAM DIRECTORY",
    authSeason: "CLUB SEASON · 2026",
    authRolesLabel: "ACCESS FOR",
    authSecureAccess: "STAFF ACCESS",
    authPanelIntro: "Sign in, or create a member account with a real email address or mobile number.",
    authPrivateNote: "Private team tools · Authorized accounts only",
    username: "Username",
    password: "Password",
    loginIdentifier: "Email, phone, or username",
    loginIdentifierPlaceholder: "name@email.com, +855 12 345 678, or username",
    loginHint: "Use the email address, phone number, or username on your account. Staff accounts are issued by the club owner.",
    logIn: "Log in",
    logOut: "Log out",
    registerTab: "Create account",
    createAccount: "Create account",
    registerTitle: "Create your account",
    registerIntro: "Join as a club member with a real email address or mobile number.",
    fullName: "Full name",
    emailOrPhone: "Email or mobile number",
    confirmPassword: "Confirm password",
    contactPlaceholder: "name@email.com or +855 12 345 678",
    contactHint: "Enter a real email address or a mobile number with country code, for example +855 12 345 678.",
    registerRoleNote: "New accounts are member accounts. Owner, admin, developer and coach accounts are created directly by the club owner.",
    registerInvalidName: "Enter your full name.",
    registerInvalidEmail: "Enter a valid email address, for example name@email.com.",
    registerInvalidPhone: "Enter a valid mobile number with country code, for example +855 12 345 678.",
    registerInvalidContact: "Enter an email address or a mobile number with country code.",
    registerPasswordShort: "Use a password of at least 8 characters.",
    registerPasswordMismatch: "The two passwords do not match.",
    registerContactExists: "An account already uses that email address or phone number.",
    registerFailed: "Could not create your account. Please try again.",
    registerWelcome: "Welcome, {name}. Your member account is ready.",
    unverifiedContact: "Contact not yet verified",
    teamSetup: "TEAM SETUP",
    createTeamTitle: "Create a team",
    teamDescription: "Teams are public in this prototype. Contact details and rosters are visible to signed-in users.",
    teamName: "Team name",
    teamLogo: "Team logo",
    logoHelp: "Optional image (up to 1 MB)",
    teamContact: "Contact number",
    accountAccess: "ACCOUNT ACCESS",
    accountDescription: "Create staff accounts here. Members register themselves with a real email address or phone number.",
    accessForTeam: "Access for this team",
    usernamePasswordInvalid: "Use a 3–24 character username and a password of at least 8 characters.",
    usernameExists: "That username already exists.",
    legacyCredentialsUnavailable: "This browser does not support the required password verification. Update your browser and try again.",
    accountCreated: "Account created for {username}. Share the username and password with them.",
    accountCreateFailed: "Could not create this account. Please try again.",
    teamNameRequired: "Enter a team name.",
    teamCreated: "Team created.",
    teamDeleted: "Team deleted.",
    teamLogoType: "Choose a PNG, JPEG, WebP, GIF, or AVIF image.",
    teamLogoTooLarge: "Team logos must be 1 MB or smaller.",
    logoReadFailed: "Could not read this image. Please choose another.",
    uploadNameSelected: "Current logo selected",
    deleteAccountRole: "Role for {username}",
    clubCommunity: "CLUB COMMUNITY",
    teamUpdates: "Team updates",
    publicView: "Public view",
    coachRole: "Coach",
    captainRole: "Team Leader / Captain",
    contactNumberLabel: "Contact number",
    enterCredentials: "Enter your email, phone, or username and password.",
    signInIncorrect: "Incorrect username or password.",
    signInDamaged: "This account's sign-in data is damaged. Ask the Dev Owner/Admin to recreate the account.",
    signInFailed: "Could not complete sign-in. Please try again.",
    chooseTeam: "Select a team to assign a role",
    noAccounts: "No accounts exist yet.",
    publicGreeting: "football fan",
    viewOnlyAccess: "View-only access",
    updateMediaCleanupWarning: "The update was removed, but its local media could not be deleted.",
  },
  km: {
    clubHome: "ទំព័រដើមក្លឹប SUNNY SPORT",
    teamSummary: "សេចក្តីសង្ខេបក្រុម",
    clubManager: "កម្មវិធីគ្រប់គ្រងក្លឹប",
    workspace: "ផ្ទៃការងារ",
    mainNavigation: "ម៉ឺនុយចម្បង",
    openNavigation: "បើកម៉ឺនុយ",
    closeNavigation: "បិទម៉ឺនុយ",
    overview: "ទិដ្ឋភាពទូទៅ",
    backToTeams: "ត្រឡប់ទៅបញ្ជីក្រុម",
    skipToContent: "រំលងទៅមាតិកាសំខាន់",
    staffLogin: "ចូលគណនីបុគ្គលិក",
    celebrateTeam: "អបអរក្រុមនេះ",
    teamRoster: "បញ្ជីសមាជិកក្រុម",
    sidebarMotto: "ក្រុមតែមួយ ក្តីសុបិនតែមួយ។",
    sidebarNote: "រដូវកាលដ៏អស្ចារ្យ ចាប់ផ្តើមពីក្រុមដ៏អស្ចារ្យ។",
    clubStaff: "បុគ្គលិកក្លឹប",
    teamAdministrator: "អ្នកគ្រប់គ្រងក្រុម",
    teamSeason: "រដូវកាលក្រុម",
    switchLanguage: "ប្តូរភាសាទៅជាភាសាអង់គ្លេស",
    dashboard: "ផ្ទាំងគ្រប់គ្រងក្លឹប",
    greeting: "រីករាយដែលបានជួបអ្នក",
    coach: "គ្រូបង្វឹក។",
    welcomeSubtitle: "ពិនិត្យមើលព័ត៌មានសំខាន់ៗអំពីក្រុមរបស់អ្នក។",
    addMember: "បន្ថែមសមាជិកក្រុម",
    bannerKicker: "រួមចិត្ត រួមកម្លាំង",
    activeClub: "ក្លឹបកំពុងដំណើរការ",
    editClub: "កែសម្រួលព័ត៌មានក្លឹប",
    squadMembers: "សមាជិកក្រុម",
    coachingStaff: "បុគ្គលិកដឹកនាំក្រុម",
    leadership: "គ្រូបង្វឹក និងថ្នាក់ដឹកនាំក្រុម",
    clubContact: "ព័ត៌មានទំនាក់ទំនងក្លឹប",
    addLocation: "បន្ថែមទីតាំងក្លឹប",
    addContact: "បន្ថែមលេខទូរស័ព្ទទំនាក់ទំនង",
    callClub: "ហៅទៅ",
    addClubContact: "បន្ថែមលេខទូរស័ព្ទក្លឹប",
    openTelegram: "បើកតំណ Telegram របស់ក្លឹប",
    addTelegram: "បន្ថែមតំណ Telegram ក្នុងព័ត៌មានក្លឹប",
    editDetails: "កែសម្រួលព័ត៌មាន",
    readySquad: "ត្រៀមបង្កើតក្រុមរបស់អ្នក",
    playerCount: "កីឡាករ",
    playersCount: "កីឡាករ",
    staffCount: "បុគ្គលិក",
    yourPeople: "សមាជិកក្រុមរបស់អ្នក",
    meetTeam: "ស្គាល់សមាជិកក្រុម",
    searchMembers: "ស្វែងរកសមាជិក...",
    filterByRole: "ត្រងតាមតួនាទី",
    allRoles: "តួនាទីទាំងអស់",
    roleHeadCoach: "គ្រូបង្វឹកធំ",
    roleAssistantCoach: "ជំនួយការគ្រូបង្វឹក",
    roleCoach: "គ្រូបង្វឹក",
    roleCaptain: "ប្រធានក្រុម",
    rolePlayer: "កីឡាករ",
    roleGoalkeeper: "អ្នកចាំទី",
    roleDefender: "ខ្សែការពារ",
    roleMidfielder: "ខ្សែបម្រើ",
    roleForward: "ខ្សែប្រយុទ្ធ",
    roleMedical: "បុគ្គលិកពេទ្យ",
    roleManager: "អ្នកគ្រប់គ្រង",
    emptyTitle: "ចាប់ផ្តើមបង្កើតក្រុមរបស់អ្នកនៅទីនេះ",
    emptyText: "បន្ថែមគ្រូបង្វឹក ប្រធានក្រុម និងកីឡាករ ដើម្បីប្រមូលផ្តុំក្រុមរបស់អ្នក។",
    addFirstMember: "បន្ថែមសមាជិកដំបូង",
    noResults: "រកមិនឃើញសមាជិកដែលត្រូវនឹងការស្វែងរកទេ។",
    clearFilters: "សម្អាតតម្រង",
    footerMotto: "បង្កើតឡើងដោយក្តីស្រឡាញ់ចំពោះបាល់ទាត់។",
    teamManagement: "ការគ្រប់គ្រងក្រុម",
    squadDetails: "ព័ត៌មានសមាជិកក្រុម",
    addMemberTitle: "បន្ថែមសមាជិកក្រុម",
    editMemberTitle: "កែសម្រួលសមាជិកក្រុម",
    closeDialog: "បិទផ្ទាំង",
    profilePhoto: "រូបថតប្រវត្តិរូប",
    photoHelp: "បន្ថែមរូបថតដើម្បីសម្គាល់សមាជិកក្រុម។",
    uploadPhoto: "បញ្ចូលរូបថត",
    remove: "លុបចេញ",
    fullName: "ឈ្មោះពេញ",
    nameExample: "ឧ. សុខ ដារ៉ា",
    teamRole: "តួនាទីក្នុងក្រុម",
    selectRole: "ជ្រើសរើសតួនាទី",
    jerseyNumber: "លេខអាវ",
    optional: "មិនបាច់ក៏បាន",
    numberExample: "ឧ. ១០",
    contactNumber: "លេខទូរស័ព្ទទំនាក់ទំនង",
    phoneExample: "ឧ. +855 12 345 678",
    cancel: "បោះបង់",
    addMemberSubmit: "បន្ថែមសមាជិក",
    saveChanges: "រក្សាទុកការកែប្រែ",
    addManyMembers: "បន្ថែមសមាជិកច្រើន",
    bulkAddTitle: "បន្ថែមសមាជិកច្រើន",
    bulkAddDescription:
      "បិទភ្ជាប់មនុស្សរហូតដល់ 50 នាក់ ម្នាក់ក្នុងមួយបន្ទាត់។ តួនាទីលំនាំដើមគឺ Player ហើយលេខអាវ និងទំនាក់ទំនងមិនបាច់ក៏បាន។",
    bulkColumnsHelp: "ជួរឈរ៖ ឈ្មោះ, តួនាទី, លេខអាវ, ទំនាក់ទំនង",
    bulkPasteTip: "គន្លឹះ៖ ចម្លងជួរពី Excel ឬ Google Sheets ដោយផ្ទាល់។",
    bulkPasteLabel: "បញ្ជីសមាជិក",
    bulkPasteExample: "ឧ. សុខ ដារ៉ា, Player, 10, +855 12 345 678",
    bulkDefaultRole: "តួនាទីលំនាំដើម",
    bulkReadyLabel: "រួចរាល់សម្រាប់បន្ថែម",
    bulkPreview: "មើលជាមុន",
    bulkStatus: "ស្ថានភាព",
    bulkStatusReady: "រួចរាល់",
    bulkStatusInvalid: "រំលង",
    bulkAddSubmitDefault: "បន្ថែមសមាជិក",
    bulkAddSubmit: "បន្ថែមសមាជិក {count} នាក់",
    bulkAddSubmitOne: "បន្ថែមសមាជិក 1 នាក់",
    bulkPreviewSummary: "{ready} រួចរាល់, {skipped} រំលង",
    bulkNoRows: "សូមបិទភ្ជាប់យ៉ាងហោចណាស់មនុស្សម្នាក់ដើម្បីបន្ត។",
    bulkNoValidRows: "មិនទាន់មានជួរត្រឹមត្រូវទេ។ សូមពិនិត្យមើលការមើលជាមុន។",
    bulkLimit: "អ្នកអាចបន្ថែមមនុស្សបានរហូតដល់ 50 នាក់ក្នុងពេលតែមួយ។",
    bulkOverLimit: "មនុស្ស 50 នាក់ដំបូងប៉ុណ្ណោះនឹងត្រូវបានបន្ថែម។",
    bulkMissingName: "ត្រូវការឈ្មោះ។",
    bulkInvalidNumber: "លេខអាវត្រូវនៅចន្លោះ 0 ដល់ 99។",
    bulkDuplicate: "មាននៅក្នុងក្រុមនេះរួចហើយ។",
    bulkInvalidRole: "មិនស្គាល់តួនាទី។",
    bulkSkippedNote: "ជួរដែលសម្គាល់ថា រំលង នឹងមិនត្រូវបានបន្ថែមទេ។",
    bulkAdded: "បានបន្ថែមសមាជិកក្រុម {count} នាក់។",
    bulkAddedOne: "បានបន្ថែមសមាជិកក្រុម 1 នាក់។",
    bulkLine: "បន្ទាត់ {line}",
    clubProfile: "ប្រវត្តិរូបក្លឹប",
    clubDetails: "ព័ត៌មានក្លឹប",
    clubDescription: "សូមធ្វើបច្ចុប្បន្នភាពទីតាំង និងព័ត៌មានទំនាក់ទំនងរបស់ក្រុម។",
    clubName: "ឈ្មោះក្លឹប",
    location: "ទីតាំង",
    locationExample: "ទីក្រុង ប្រទេសកម្ពុជា",
    telegramLink: "តំណ Telegram",
    telegramExample: "https://t.me/yourclub",
    saveClubDetails: "រក្សាទុកព័ត៌មានក្លឹប",
    selectedPhotoAlt: "រូបថតប្រវត្តិរូបដែលបានជ្រើសរើស",
    chooseImage: "សូមជ្រើសរើសឯកសាររូបភាពសម្រាប់រូបថតប្រវត្តិរូប។",
    changeBackground: "ប្តូរផ្ទៃខាងក្រោយ",
    personalizeWorkspace: "កំណត់រចនាប័ទ្មផ្ទៃការងារ",
    backgroundDescription: "ជ្រើសរើសពណ៌ ឬបង្ហោះរូបថត ដើម្បីកំណត់រចនាប័ទ្មផ្ទៃការងារនៅលើឧបករណ៍នេះ។",
    backgroundPreview: "មើលផ្ទៃខាងក្រោយផ្ទៃការងារ",
    backgroundColor: "ពណ៌ផ្ទៃខាងក្រោយ",
    chooseColor: "ជ្រើសរើសពណ៌",
    uploadBackgroundPhoto: "បង្ហោះរូបថតផ្ទៃខាងក្រោយ",
    backgroundPhotoHelp: "PNG, JPG, WebP, GIF ឬ AVIF · មិនលើស ១ មេកាបៃ · ស្កេនក្នុងកម្មវិធីរុករកនេះ ដើម្បីកែសម្រួលកម្រិតពណ៌អក្សរ",
    colorBackgroundSelected: "កំពុងប្រើផ្ទៃខាងក្រោយពណ៌តែមួយ។",
    photoBackgroundSelected: "បានស្កេនរូបថត។ បានជ្រើសរើសពណ៌អក្សរងងឹត ឬភ្លឺ ដើម្បីឱ្យមានកម្រិតពណ៌ច្បាស់។",
    scanningBackground: "កំពុងស្កេនរូបថត និងកែសម្រួលកម្រិតពណ៌អក្សរ…",
    resetBackground: "កំណត់ផ្ទៃខាងក្រោយឡើងវិញ",
    done: "រួចរាល់",
    backgroundImageType: "សូមជ្រើសរើសរូបភាព PNG, JPEG, WebP, GIF ឬ AVIF។",
    backgroundImageTooLarge: "រូបថតផ្ទៃខាងក្រោយត្រូវមានទំហំ ១ មេកាបៃ ឬតិចជាងនេះ។",
    backgroundImageReadFailed: "មិនអាចអានរូបថតនេះបានទេ។ សូមជ្រើសរើសរូបថតផ្សេង។",
    backgroundSaveFailed: "មិនអាចរក្សាទុកផ្ទៃខាងក្រោយបានទេ។ សូមពិនិត្យមើលទំហំផ្ទុកក្នុងកម្មវិធីរុករក។",
    backgroundReset: "បានកំណត់ផ្ទៃខាងក្រោយឡើងវិញ។",
    photoTooLarge: "សូមជ្រើសរើសរូបថតដែលមានទំហំតិចជាង ២ មេកាបៃ។",
    readPhotoError: "មិនអាចអានរូបថតដែលបានជ្រើសរើសទេ។",
    memberValidation: "សូមបញ្ចូលឈ្មោះ និងជ្រើសរើសតួនាទីក្នុងក្រុម។",
    memberAdded: "បានបន្ថែមសមាជិកក្រុម។",
    memberUpdated: "បានកែសម្រួលសមាជិកក្រុម។",
    memberRemoved: "បានដក {name} ចេញពីក្រុម។",
    confirmRemove: "តើអ្នកចង់ដក {name} ចេញពីក្រុមមែនទេ?",
    clubNameRequired: "សូមបញ្ចូលឈ្មោះក្លឹបមុនពេលរក្សាទុក។",
    invalidTelegram: "សូមបញ្ចូលតំណ Telegram ត្រឹមត្រូវ ឧ. https://t.me/yourclub។",
    clubSaved: "បានរក្សាទុកព័ត៌មានក្លឹប។",
    storageError: "មិនអាចរក្សាទុកការផ្លាស់ប្តូរបានទេ។ សូមពិនិត្យមើលទំហំផ្ទុកក្នុងកម្មវិធីរុករក។",
    showcaseLabel: "ការបង្ហាញក្លឹប",
    showcaseTitle: "ស្គាល់ក្រុមរបស់យើង",
    previousTeam: "ក្រុមមុន",
    nextTeam: "ក្រុមបន្ទាប់",
    teamsDirectory: "បញ្ជីក្រុម",
    directoryTitle: "ក្រុមរបស់យើង",
    directorySubtitle: "ស្វែងរកក្រុមទាំងអស់ក្នុងគ្រួសារ Sunny Sport Club។",
    directoryEmptyTitle: "មិនទាន់មានក្រុមទេ",
    teams: "ក្រុម",
    teamCategory: "ប្រភេទក្រុម",
    categoryFootball: "បាល់ទាត់",
    categoryVolleyball: "បាល់ទះ",
    categoryBasketball: "បាល់បោះ",
    categoryFutsal: "ហ្វូតសាល",
    categoryEsports: "កីឡាអេឡិចត្រូនិក",
    logoPreview: "មើលឡូហ្គោ",
    playerCountLabel: "កីឡាករ",
    registeredPlayers: "កីឡាករដែលបានចុះឈ្មោះ",
    teamActivity: "សកម្មភាពក្រុម",
    updatesThisWeek: "ព័ត៌មានក្នុងសប្តាហ៍នេះ",
    players: "កីឡាករ",
    backToTeamsToast: "បានបង្កើតក្រុម។ ស្វែងរកក្នុងបញ្ជីក្រុម។",
    showTeamDetails: "បង្ហាញព័ត៌មាន",
    hideTeamDetails: "លាក់ព័ត៌មាន",
    createTeam: "បង្កើតក្រុម",
    managementEyebrow: "ការគ្រប់គ្រងក្រុម",
    managementTitle: "គ្រប់គ្រងក្រុម",
    managementDescription: "គ្រប់គ្រងព័ត៌មានក្រុម និងបន្ថែមសមាជិកក្នុងបញ្ជីក្រុម។",
    editTeam: "កែប្រែក្រុម",
    editTeamNamed: "កែប្រែក្រុម {name}",
    manageTeam: "គ្រប់គ្រងក្រុម",
    teamRoleLimit: "គណនីមួយអាចគ្រប់គ្រងបានតែមួយក្រុមប៉ុណ្ណោះ។ សូមដកសិទ្ធិគ្រប់គ្រងចេញពីក្រុមផ្សេងជាមុនសិន។",
    createTeamAsCoach: "គ្រូបង្វឹក — អាចបង្កើតក្រុមមួយ",
    coachForThisTeam: "គ្រូបង្វឹកក្រុមនេះ",
    leaderForThisTeam: "ប្រធានក្រុមនេះ",
    directoryEmpty: "មិនទាន់មានក្រុមដែលបានរក្សាទុកក្នុងកម្មវិធីរុករកនេះទេ។ កម្មវិធីរក្សាទុកក្រុមនៅលើកម្មវិធីរុករកនេះប៉ុណ្ណោះ ដូច្នេះក្រុមនឹងមិនបង្ហាញដោយស្វ័យប្រវត្តិនៅលើឧបករណ៍ ឬអាសយដ្ឋានគេហទំព័រផ្សេងទេ។ ម្ចាស់ អ្នកគ្រប់គ្រង អ្នកអភិវឌ្ឍន៍ ឬគ្រូបង្វឹកអាចបង្កើតក្រុមដំបូងនៅទីនេះ។",
    administration: "ការគ្រប់គ្រង",
    teamAccess: "សិទ្ធិចូលប្រើក្រុម",
    teamAccessDescription: "ក្នុងនាមជាគ្រូបង្វឹកក្រុមនេះ អ្នកអាចផ្តល់ ឬដកសិទ្ធិគ្រប់គ្រងពីគណនីដែលមានស្រាប់ និងទុកចិត្តបាន។ អ្នកគ្រប់គ្រងអាចកែប្រែក្រុមនេះប៉ុណ្ណោះ ហើយមិនអាចបង្កើតគណនី ឬគ្រប់គ្រងក្រុមផ្សេងបានទេ។",
    managerRole: "អ្នកគ្រប់គ្រងក្រុម",
    assignManagerRole: "អ្នកគ្រប់គ្រងក្រុមនេះ",
    accountManager: "អ្នកគ្រប់គ្រងក្រុម",
    createAccount: "បង្កើតគណនី",
    accountsDescription: "គណនីម្ចាស់ អ្នកគ្រប់គ្រង និងអ្នកអភិវឌ្ឍន៍មានសិទ្ធិពេញលេញ និងអាចបង្កើតក្រុមបាន។ គ្រូបង្វឹកអាចបង្កើតបានមួយក្រុម បន្ទាប់មកផ្តល់តួនាទីប្រធានក្រុម ឬអ្នកគ្រប់គ្រងក្រុម ដើម្បីជួយគ្រប់គ្រង។ អ្នកមើលអាចមើលគ្រប់ក្រុមបាន ប៉ុន្តែមិនអាចកែប្រែបានទេ។",
    account: "គណនី",
    fullSystemAccess: "សិទ្ធិគ្រប់គ្រងប្រព័ន្ធទាំងមូល",
    devOwnerRole: "ម្ចាស់/អ្នកអភិវឌ្ឍន៍",
    developerRole: "អ្នកអភិវឌ្ឍន៍",
    adminSystemRole: "អ្នកគ្រប់គ្រង",
    systemRole: "តួនាទីប្រព័ន្ធ",
    viewerRole: "អ្នកមើល",
    adminPromoted: "បានផ្តល់សិទ្ធិអ្នកគ្រប់គ្រង។",
    developerPromoted: "បានផ្តល់សិទ្ធិអ្នកអភិវឌ្ឍន៍។",
    adminDemoted: "បានដកសិទ្ធិអ្នកគ្រប់គ្រង។",
    roleNotAllowed: "គ្រូបង្វឹកអាចផ្តល់បានតែតួនាទីអ្នកមើល ប្រធានក្រុម ឬអ្នកគ្រប់គ្រងក្រុមប៉ុណ្ណោះ។",
    assignTeamRole: "ជ្រើសរើសក្រុមដើម្បីកំណត់តួនាទី",
    viewOnly: "មើលតែប៉ុណ្ណោះ",
    teamLeaderCaptain: "ប្រធានក្រុម",
    teamDetailsSoon: "ព័ត៌មានក្រុមនឹងបង្ហាញនៅពេលក្រោយ",
    membersNotListed: "មិនទាន់មានបញ្ជីសមាជិកក្រុមទេ។",
    teamMemberSingular: "សមាជិក",
    teamMemberPlural: "សមាជិក",
    locationNotProvided: "មិនទាន់បញ្ចូលទីតាំង",
    noContactNumber: "មិនទាន់មានលេខទំនាក់ទំនង",
    viewing: "កំពុងមើល",
    viewTeam: "មើលក្រុម",
    viewTeamNamed: "មើលក្រុម {name}",
    deleteTeam: "លុប {name}",
    deleteTeamConfirm: "តើអ្នកចង់លុប {name} និងបញ្ជីសមាជិករបស់វាមែនទេ?",
    postPhotoAlt: "រូបថតភ្ជាប់ជាមួយព័ត៌មានក្រុម",
    uploadUnavailable: "មិនអាចរកឃើញឯកសារនេះនៅក្នុងកម្មវិធីរុករកនេះទេ។",
    uploadLoadError: "មិនអាចបង្ហាញឯកសារនេះបានទេ។",
    clubUpdate: "ព័ត៌មានក្លឹប",
    deleteUpdate: "លុបព័ត៌មាន",
    postComposerLabel: "សរសេរព័ត៌មានថ្មី",
    shareUpdate: "ចែករំលែកព័ត៌មានក្រុម...",
    addPhotoVideo: "បន្ថែមរូបថត ឬវីដេអូ",
    noMediaSelected: "មិនទាន់ជ្រើសរើសឯកសារមេឌៀ",
    mediaFilesSelected: "បានជ្រើសរើសឯកសារ {count}",
    postTo: "បង្ហោះទៅកាន់",
    allTeams: "គ្រប់ក្រុម",
    postUpdate: "បង្ហោះព័ត៌មាន",
    noUpdates: "មិនទាន់មានព័ត៌មានថ្មីទេ។",
    updateDeleted: "បានលុបព័ត៌មាន។",
    updatePublished: "បានបង្ហោះព័ត៌មាន។",
    mediaMissingMessage: "សូមសរសេរព័ត៌មាន ឬជ្រើសរើសរូបថត ឬវីដេអូ។",
    chooseImageOrVideo: "សូមជ្រើសរើសឯកសាររូបភាព ឬវីដេអូ។",
    mediaTooLarge: "ឯកសារមេឌៀត្រូវមានទំហំ ២៥ មេកាបៃ ឬតិចជាងនេះ។",
    postFailed: "មិនអាចបង្ហោះព័ត៌មាននេះបានទេ។ សូមពិនិត្យទំហំផ្ទុកក្នុងកម្មវិធីរុករក ហើយព្យាយាមម្តងទៀត។",
    deleteUpdateConfirm: "តើអ្នកចង់លុបព័ត៌មាននេះមែនទេ?",
    teamMembersWillAppear: "សមាជិកក្រុមនឹងបង្ហាញនៅទីនេះ នៅពេលបញ្ចូលបញ្ជីរួច។",
    loginSection: "សម្រាប់បុគ្គលិកក្រុម និងអ្នកគ្រប់គ្រង",
    teamLogin: "ចូលគណនីក្រុម",
    soundOn: "សំឡេងបើក",
    soundOff: "សំឡេងបិទ",
    soundToggle: "បើក ឬបិទសំឡេងកីឡដ្ឋាន",
    loginIntro: "អ្នកគ្រប់គ្នាអាចមើលក្រុម និងបញ្ជីសមាជិកបាន។ អ្នកគាំទ្រអាចបង្កើតគណនីសមាជិកដោយអ៊ីមែល ឬលេខទូរស័ព្ទ។ គណនីបុគ្គលិកត្រូវបានផ្តល់ដោយម្ចាស់ក្លឹប។",
    authHeadline: "បង្កើតឡើងសម្រាប់ក្តីស្រឡាញ់ចំពោះបាល់ទាត់។",
    authPlatform: "ប្រព័ន្ធគ្រប់គ្រងក្លឹប",
    authClubName: "ក្លឹប SUNNY SPORT",
    authMatchSubtitle: "ក្លឹបមួយ។ ក្រុមទាំងអស់។",
    authOpenDirectory: "បញ្ជីក្រុមបើកចំហ",
    authSeason: "រដូវកាលក្លឹប · ២០២៦",
    authRolesLabel: "សិទ្ធិចូលប្រើសម្រាប់",
    authSecureAccess: "សិទ្ធិបុគ្គលិក",
    authPanelIntro: "ចូលគណនី ឬបង្កើតគណនីសមាជិកដោយប្រើអ៊ីមែល ឬលេខទូរស័ព្ទពិត។",
    authPrivateNote: "ឧបករណ៍ក្រុមឯកជន · សម្រាប់គណនីដែលបានអនុញ្ញាត",
    username: "ឈ្មោះអ្នកប្រើ",
    password: "ពាក្យសម្ងាត់",
    loginIdentifier: "អ៊ីមែល លេខទូរស័ព្ទ ឬឈ្មោះអ្នកប្រើ",
    loginIdentifierPlaceholder: "name@email.com, +855 12 345 678 ឬឈ្មោះអ្នកប្រើ",
    loginHint: "ប្រើអ៊ីមែល លេខទូរស័ព្ទ ឬឈ្មោះអ្នកប្រើនៅលើគណនីរបស់អ្នក។ គណនីបុគ្គលិកត្រូវបានផ្តល់ដោយម្ចាស់ក្លឹប។",
    logIn: "ចូលគណនី",
    logOut: "ចាកចេញ",
    registerTab: "បង្កើតគណនី",
    createAccount: "បង្កើតគណនី",
    registerTitle: "បង្កើតគណនីរបស់អ្នក",
    registerIntro: "ចូលរួមជាសមាជិកក្លឹបដោយប្រើអ៊ីមែល ឬលេខទូរស័ព្ទពិត។",
    fullName: "ឈ្មោះពេញ",
    emailOrPhone: "អ៊ីមែល ឬលេខទូរស័ព្ទចល័ត",
    confirmPassword: "បញ្ជាក់ពាក្យសម្ងាត់",
    contactPlaceholder: "name@email.com ឬ +855 12 345 678",
    contactHint: "សូមបញ្ចូលអ៊ីមែលពិត ឬលេខទូរស័ព្ទចល័តជាមួយលេខកូដប្រទេស ឧទាហរណ៍ +855 12 345 678។",
    registerRoleNote: "គណនីថ្មីគឺជាគណនីសមាជិក។ គណនីម្ចាស់ អ្នកគ្រប់គ្រង អ្នកអភិវឌ្ឍន៍ និងគ្រូបង្វឹក ត្រូវបានបង្កើតដោយម្ចាស់ក្លឹបផ្ទាល់។",
    registerInvalidName: "សូមបញ្ចូលឈ្មោះពេញរបស់អ្នក។",
    registerInvalidEmail: "សូមបញ្ចូលអ៊ីមែលត្រឹមត្រូវ ឧទាហរណ៍ name@email.com។",
    registerInvalidPhone: "សូមបញ្ចូលលេខទូរស័ព្ទត្រឹមត្រូវជាមួយលេខកូដប្រទេស ឧទាហរណ៍ +855 12 345 678។",
    registerInvalidContact: "សូមបញ្ចូលអ៊ីមែល ឬលេខទូរស័ព្ទជាមួយលេខកូដប្រទេស។",
    registerPasswordShort: "ប្រើពាក្យសម្ងាត់យ៉ាងតិច ៨ តួអក្សរ។",
    registerPasswordMismatch: "ពាក្យសម្ងាត់ទាំងពីរមិនត្រូវគ្នាទេ។",
    registerContactExists: "មានគណនីប្រើអ៊ីមែល ឬលេខទូរស័ព្ទនេះរួចហើយ។",
    registerFailed: "មិនអាចបង្កើតគណនីបានទេ។ សូមព្យាយាមម្តងទៀត។",
    registerWelcome: "សូមស្វាគមន៍ {name}។ គណនីសមាជិករបស់អ្នករួចរាល់ហើយ។",
    unverifiedContact: "ទំនាក់ទំនងមិនទាន់ផ្ទៀងផ្ទាត់",
    teamSetup: "រៀបចំក្រុម",
    createTeamTitle: "បង្កើតក្រុម",
    teamDescription: "ព័ត៌មានក្រុមអាចមើលជាសាធារណៈក្នុងគំរូនេះ។ ព័ត៌មានទំនាក់ទំនង និងបញ្ជីសមាជិកអាចមើលឃើញដោយអ្នកប្រើដែលបានចូលគណនី។",
    teamName: "ឈ្មោះក្រុម",
    teamLogo: "ឡូហ្គោក្រុម",
    logoHelp: "រូបភាពជាជម្រើស (ទំហំមិនលើស ១ មេកាបៃ)",
    teamContact: "លេខទំនាក់ទំនង",
    accountAccess: "សិទ្ធិចូលប្រើគណនី",
    accountDescription: "បង្កើតគណនីបុគ្គលិកនៅទីនេះ។ សមាជិកបង្កើតគណនីដោយខ្លួនឯងជាមួយអ៊ីមែល ឬលេខទូរស័ព្ទពិត។",
    accessForTeam: "សិទ្ធិសម្រាប់ក្រុមនេះ",
    usernamePasswordInvalid: "ប្រើឈ្មោះអ្នកប្រើ ៣–២៤ តួអក្សរ និងពាក្យសម្ងាត់យ៉ាងតិច ៨ តួអក្សរ។",
    usernameExists: "ឈ្មោះអ្នកប្រើនេះមានរួចហើយ។",
    legacyCredentialsUnavailable: "កម្មវិធីរុករកនេះមិនគាំទ្រការផ្ទៀងផ្ទាត់ពាក្យសម្ងាត់ដែលត្រូវការទេ។ សូមធ្វើបច្ចុប្បន្នភាពកម្មវិធីរុករក ហើយសាកល្បងម្ដងទៀត។",
    accountCreated: "បានបង្កើតគណនីសម្រាប់ {username}។ សូមផ្តល់ឈ្មោះអ្នកប្រើ និងពាក្យសម្ងាត់ឱ្យពួកគេ។",
    accountCreateFailed: "មិនអាចបង្កើតគណនីនេះបានទេ។ សូមព្យាយាមម្តងទៀត។",
    teamNameRequired: "សូមបញ្ចូលឈ្មោះក្រុម។",
    teamCreated: "បានបង្កើតក្រុម។",
    teamDeleted: "បានលុបក្រុម។",
    teamLogoType: "សូមជ្រើសរើសរូបភាព PNG, JPEG, WebP, GIF ឬ AVIF។",
    teamLogoTooLarge: "ឡូហ្គោក្រុមត្រូវមានទំហំ ១ មេកាបៃ ឬតិចជាងនេះ។",
    logoReadFailed: "មិនអាចអានរូបភាពនេះបានទេ។ សូមជ្រើសរើសរូបភាពផ្សេង។",
    uploadNameSelected: "បានជ្រើសរើសឡូហ្គោបច្ចុប្បន្ន",
    deleteAccountRole: "តួនាទីរបស់ {username}",
    clubCommunity: "សហគមន៍ក្លឹប",
    teamUpdates: "ព័ត៌មានក្រុម",
    publicView: "មើលជាសាធារណៈ",
    coachRole: "គ្រូបង្វឹក",
    captainRole: "ប្រធានក្រុម",
    contactNumberLabel: "លេខទំនាក់ទំនង",
    enterCredentials: "សូមបញ្ចូលអ៊ីមែល លេខទូរស័ព្ទ ឬឈ្មោះអ្នកប្រើ និងពាក្យសម្ងាត់របស់អ្នក។",
    signInIncorrect: "ឈ្មោះអ្នកប្រើ ឬពាក្យសម្ងាត់មិនត្រឹមត្រូវទេ។",
    signInDamaged: "ទិន្នន័យចូលគណនីនេះខូច។ សូមស្នើម្ចាស់/អ្នកគ្រប់គ្រងបង្កើតគណនីឡើងវិញ។",
    signInFailed: "មិនអាចចូលគណនីបានទេ។ សូមព្យាយាមម្តងទៀត។",
    chooseTeam: "ជ្រើសរើសក្រុមដើម្បីកំណត់តួនាទី",
    noAccounts: "មិនទាន់មានគណនីទេ។",
    publicGreeting: "អ្នកគាំទ្របាល់ទាត់",
    viewOnlyAccess: "សិទ្ធិមើលតែប៉ុណ្ណោះ",
    updateMediaCleanupWarning: "បានលុបព័ត៌មាន ប៉ុន្តែមិនអាចលុបឯកសារមេឌៀចេញពីកម្មវិធីរុករកបានទេ។",
  },
};
const imageInput = document.querySelector("#member-photo");
let toastTimeout;
let store = loadData();
let data = structuredClone(DEFAULT_DATA);
let activeAccount = null;
let currentTeamId = "";
let lastRenderedRoute = "";
let directoryHighlightId = "";
let language = loadLanguage();
const SOUND_KEY = "sunny-sport-club-sound";
let soundEnabled = loadSoundPreference();
let stadiumAudio = null;
let workspaceBackground = loadWorkspaceBackground();
let draftPhoto = "";
let draftPostFile = null;
let draftTeamLogo = "";
let draftClubLogo = "";
let spotlightIndex = 0;
let spotlightTimer = 0;
const expandedTeamIds = new Set();
let postRenderVersion = 0;
const postMediaUrls = new Map();
const MEDIA_DATABASE = "sunny-sport-club-media-v1";
const POST_MEDIA_MAX_BYTES = 25 * 1024 * 1024;
const TEAM_LOGO_MAX_BYTES = 1024 * 1024;
let mediaDatabasePromise;
let bulkPreviewState = {
  rows: [],
  valid: [],
  invalid: [],
  overflow: false,
};

const memberDialog = document.querySelector("#member-dialog");
const clubDialog = document.querySelector("#club-dialog");
const teamDialog = document.querySelector("#team-dialog");
const accountDialog = document.querySelector("#account-dialog");
const appearanceDialog = document.querySelector("#appearance-dialog");
const memberForm = document.querySelector("#member-form");
const bulkMemberDialog = document.querySelector("#bulk-member-dialog");
const bulkMemberForm = document.querySelector("#bulk-member-form");
const clubForm = document.querySelector("#club-form");
const teamForm = document.querySelector("#team-form");
const accountForm = document.querySelector("#account-form");
const mobileNavigationQuery = window.matchMedia("(max-width: 900px)");

function setMobileNavigationOpen(open, restoreFocus = false) {
  const isOpen = open && mobileNavigationQuery.matches;
  document.querySelector("#app-shell").classList.toggle("sidebar-open", isOpen);
  document.body.classList.toggle("navigation-open", isOpen);
  document.querySelector("#mobile-nav-toggle").setAttribute("aria-expanded", String(isOpen));
  document.querySelector("#mobile-nav-toggle").setAttribute("aria-label", t(isOpen ? "closeNavigation" : "openNavigation"));
  if (restoreFocus) document.querySelector("#mobile-nav-toggle").focus();
}

document.querySelector("#mobile-nav-toggle").addEventListener("click", () => {
  setMobileNavigationOpen(!document.querySelector("#app-shell").classList.contains("sidebar-open"));
  if (document.querySelector("#app-shell").classList.contains("sidebar-open")) {
    window.requestAnimationFrame(() => {
      if (document.querySelector("#app-shell").classList.contains("sidebar-open")) {
        document.querySelector("#main-navigation a").focus();
      }
    });

    if (workspaceBackground.mode === "photo" && !workspaceBackground.imageTone) {
      scanWorkspaceImage(workspaceBackground.image).then((imageTone) => {
        if (workspaceBackground.mode === "photo" && !workspaceBackground.imageTone) {
          saveWorkspaceBackground({ ...workspaceBackground, imageTone });
        }
      }).catch((error) => {
        console.error("Could not scan the saved workspace background photo.", error);
        showToast(t("backgroundImageReadFailed"));
      });
    }
  }
});
document.querySelector("#mobile-nav-close").addEventListener("click", () => setMobileNavigationOpen(false, true));
document.querySelector("#sidebar-backdrop").addEventListener("click", () => setMobileNavigationOpen(false, true));
document.querySelector("#main-navigation").addEventListener("click", (event) => {
  const link = event.target.closest("a");
  if (!link) return;
  setMobileNavigationOpen(false);
  if (link.hash === "#overview") {
    event.preventDefault();
    window.location.hash = "#teams";
  } else if (link.hash === "#roster") {
    event.preventDefault();
    window.location.hash = currentTeamId
      ? `#team/${encodeURIComponent(currentTeamId)}/roster`
      : "#teams";
  }
});
window.addEventListener("hashchange", renderRouteFromHash);
document.querySelector("#staff-login-float").addEventListener("click", (event) => {
  event.preventDefault();
  document.querySelector("#auth-screen").scrollIntoView({ behavior: "smooth" });
  window.setTimeout(() => {
    document.querySelector(activeAccount ? "#bottom-logout-button" : "#auth-username")?.focus();
  }, 350);
});
document.addEventListener("keydown", (event) => {
  const isNavigationOpen = document.querySelector("#app-shell").classList.contains("sidebar-open");
  if (event.key === "Escape") {
    if (isNavigationOpen) {
      setMobileNavigationOpen(false, true);
    } else {
      document.querySelector("dialog[open]")?.close();
    }
    return;
  }
  if (event.key === "Tab" && isNavigationOpen) {
    const sidebar = document.querySelector(".sidebar");
    const focusable = Array.from(sidebar.querySelectorAll("a[href], button:not([disabled])"))
      .filter((element) => element.getClientRects().length > 0);
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (!sidebar.contains(document.activeElement) || (event.shiftKey && document.activeElement === first)) {
      event.preventDefault();
      (event.shiftKey ? last : first).focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }
});
mobileNavigationQuery.addEventListener("change", (event) => {
  if (!event.matches) setMobileNavigationOpen(false);
});

function loadLanguage() {
  try {
    return localStorage.getItem(LANGUAGE_KEY) === "km" ? "km" : "en";
  } catch (error) {
    console.error("Could not load the saved language preference.", error);
    return "en";
  }
}

function loadWorkspaceBackground() {
  try {
    const saved = localStorage.getItem(WORKSPACE_BACKGROUND_KEY);
    if (!saved) return { ...DEFAULT_WORKSPACE_BACKGROUND };

    const parsed = JSON.parse(saved);
    const color = /^#[\da-f]{6}$/i.test(parsed?.color)
      ? parsed.color
      : DEFAULT_WORKSPACE_BACKGROUND.color;
    if (parsed?.mode === "color") return { mode: "color", color, image: "" };
    if (
      parsed?.mode === "photo" &&
      typeof parsed.image === "string" &&
      parsed.image.length <= Math.ceil((MAX_BACKGROUND_IMAGE_BYTES * 4) / 3) + 100 &&
      /^data:image\/(png|jpeg|webp|gif|avif);base64,/i.test(parsed.image)
    ) {
      return {
        mode: "photo",
        color,
        image: parsed.image,
        imageTone: parsed.imageTone === "light" || parsed.imageTone === "dark"
          ? parsed.imageTone
          : "",
      };
    }

    console.warn("The saved workspace background is invalid. Using the default background.");
    return { ...DEFAULT_WORKSPACE_BACKGROUND };
  } catch (error) {
    console.error("Could not load the saved workspace background.", error);
    return { ...DEFAULT_WORKSPACE_BACKGROUND };
  }
}

function updateBackgroundPreview() {
  const preview = document.querySelector("#background-preview");
  if (!preview) return;
  preview.style.backgroundColor = workspaceBackground.color;
  preview.style.backgroundImage = workspaceBackground.mode === "photo"
    ? `url("${workspaceBackground.image}")`
    : "none";
  document.querySelector("#background-color-input").value = workspaceBackground.color;
  document.querySelector("#background-status").textContent = t(
    workspaceBackground.mode === "photo" ? "photoBackgroundSelected" : "colorBackgroundSelected",
  );
}

function getBackgroundLuminance(color) {
  const channels = color.slice(1).match(/.{2}/g)?.map((channel) => {
    const value = Number.parseInt(channel, 16) / 255;
    return value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4;
  });
  if (!channels || channels.length !== 3) return 1;
  return channels[0] * 0.2126 + channels[1] * 0.7152 + channels[2] * 0.0722;
}

function hexToRgb(color) {
  const match = /^#([\da-f]{2})([\da-f]{2})([\da-f]{2})$/i.exec(color);
  if (!match) return { red: 255, green: 255, blue: 255 };
  return {
    red: Number.parseInt(match[1], 16),
    green: Number.parseInt(match[2], 16),
    blue: Number.parseInt(match[3], 16),
  };
}

function mixHexColors(foreground, background, foregroundWeight) {
  const front = hexToRgb(foreground);
  const back = hexToRgb(background);
  return `#${["red", "green", "blue"].map((channel) => {
    const value = Math.round(front[channel] * foregroundWeight + back[channel] * (1 - foregroundWeight));
    return value.toString(16).padStart(2, "0");
  }).join("")}`;
}

function getContrastRatio(luminanceA, luminanceB) {
  const lighter = Math.max(luminanceA, luminanceB);
  const darker = Math.min(luminanceA, luminanceB);
  return (lighter + 0.05) / (darker + 0.05);
}

function getReadableSoftColor(foreground, background, backgroundLuminance) {
  for (let weight = 0.5; weight <= 0.95; weight += 0.05) {
    const candidate = mixHexColors(foreground, background, weight);
    if (getContrastRatio(getBackgroundLuminance(candidate), backgroundLuminance) >= 4.5) {
      return candidate;
    }
  }
  return foreground;
}

function buildWorkspacePalette(backgroundHex, backgroundLuminance) {
  const darkText = "#0b1712";
  const lightText = "#ffffff";
  const darkContrast = getContrastRatio(getBackgroundLuminance(darkText), backgroundLuminance);
  const lightContrast = getContrastRatio(getBackgroundLuminance(lightText), backgroundLuminance);
  const useDarkText = darkContrast >= lightContrast;
  const foreground = useDarkText ? darkText : lightText;
  const preferredAccent = useDarkText ? "#0d5a3a" : "#d7f0a3";
  const accent = getContrastRatio(
    getBackgroundLuminance(preferredAccent),
    backgroundLuminance,
  ) >= 3
    ? preferredAccent
    : foreground;
  return {
    tone: useDarkText ? "light" : "dark",
    foreground,
    muted: getReadableSoftColor(foreground, backgroundHex, backgroundLuminance),
    accent,
    boundary: useDarkText ? "rgb(15 40 26 / 22%)" : "rgb(255 255 255 / 30%)",
    surface: useDarkText ? "rgb(255 255 255 / 72%)" : "rgb(8 16 12 / 45%)",
  };
}

function scanWorkspaceImage(imageDataUrl) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.addEventListener("load", () => {
      try {
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d", { willReadFrequently: true });
        if (!context) throw new Error("Could not analyze the background image.");
        const sampleSize = 48;
        canvas.width = sampleSize;
        canvas.height = sampleSize;
        context.drawImage(image, 0, 0, sampleSize, sampleSize);
        const pixels = context.getImageData(0, 0, sampleSize, sampleSize).data;
        let totalLuminance = 0;
        for (let index = 0; index < pixels.length; index += 4) {
          const alpha = pixels[index + 3] / 255;
          const red = pixels[index] * alpha + 255 * (1 - alpha);
          const green = pixels[index + 1] * alpha + 255 * (1 - alpha);
          const blue = pixels[index + 2] * alpha + 255 * (1 - alpha);
          totalLuminance +=
            0.2126 * red + 0.7152 * green + 0.0722 * blue;
        }
        const averageLuminance = totalLuminance / (sampleSize * sampleSize * 255);
        resolve(averageLuminance > 0.5 ? "light" : "dark");
      } catch (error) {
        reject(error);
      }
    }, { once: true });
    image.addEventListener("error", () => {
      reject(new Error("Could not decode the background image for contrast scanning."));
    }, { once: true });
    image.src = imageDataUrl;
  });
}

function applyWorkspaceBackground() {
  const root = document.documentElement;
  const mainContent = document.querySelector(".main-content");
  const isPhoto = workspaceBackground.mode === "photo";
  const imageTone = workspaceBackground.imageTone || "light";
  const backgroundBase = isPhoto
    ? imageTone === "light"
      ? "#000000"
      : "#ffffff"
    : workspaceBackground.color;
  const palette = buildWorkspacePalette(
    backgroundBase,
    getBackgroundLuminance(backgroundBase),
  );
  mainContent.dataset.workspaceTone = palette.tone;
  mainContent.style.setProperty("--workspace-foreground", palette.foreground);
  mainContent.style.setProperty("--workspace-muted", palette.muted);
  mainContent.style.setProperty("--workspace-accent", palette.accent);
  mainContent.style.setProperty("--workspace-boundary", palette.boundary);
  mainContent.style.setProperty("--workspace-surface", palette.surface);
  root.style.setProperty("--workspace-background", workspaceBackground.color);
  root.style.setProperty(
    "--workspace-background-overlay",
    isPhoto
      ? imageTone === "light"
        ? "rgb(0 0 0 / 82%)"
        : "rgb(255 255 255 / 82%)"
      : "transparent",
  );
  root.style.setProperty(
    "--workspace-background-image",
    isPhoto
      ? `linear-gradient(var(--workspace-background-overlay), var(--workspace-background-overlay)), url("${workspaceBackground.image}")`
      : "none",
  );
  const themeColor = document.querySelector('meta[name="theme-color"]');
  if (themeColor) themeColor.setAttribute("content", workspaceBackground.color);
  updateBackgroundPreview();
}

function saveWorkspaceBackground(nextBackground) {
  workspaceBackground = nextBackground;
  applyWorkspaceBackground();
  try {
    localStorage.setItem(WORKSPACE_BACKGROUND_KEY, JSON.stringify(nextBackground));
  } catch (error) {
    console.error("Could not save the workspace background.", error);
    showToast(t("backgroundSaveFailed"));
    return false;
  }
  return true;
}

function readImageAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      if (typeof reader.result === "string") resolve(reader.result);
      else reject(new Error("The selected image could not be read."));
    }, { once: true });
    reader.addEventListener("error", () => {
      reject(reader.error || new Error("The selected image could not be read."));
    }, { once: true });
    reader.readAsDataURL(file);
  });
}

function bindLogoInput(inputSelector, nameSelector, setLogo, previewSelector = "") {
  const input = document.querySelector(inputSelector);
  const name = document.querySelector(nameSelector);
  const preview = previewSelector ? document.querySelector(previewSelector) : null;
  input.addEventListener("change", async () => {
    const file = input.files?.[0];
    if (!file) return;
    if (!/^image\/(png|jpeg|webp|gif|avif)$/.test(file.type)) {
      showToast(t("teamLogoType"));
      input.value = "";
      setLogo("");
      preview?.classList.remove("has-logo");
      if (preview) preview.innerHTML = `<span class="team-logo-preview-empty">${escapeHtml(t("logoPreview"))}</span>`;
      return;
    }
    if (file.size > 1024 * 1024) {
      showToast(t("teamLogoTooLarge"));
      input.value = "";
      setLogo("");
      preview?.classList.remove("has-logo");
      if (preview) preview.innerHTML = `<span class="team-logo-preview-empty">${escapeHtml(t("logoPreview"))}</span>`;
      return;
    }
    try {
      const logo = await readImageAsDataUrl(file);
      setLogo(logo);
      name.textContent = file.name;
      if (preview) {
        const image = document.createElement("img");
        image.src = logo;
        image.alt = `${file.name} preview`;
        preview.replaceChildren(image);
        preview.classList.add("has-logo");
      }
    } catch (error) {
      console.error("Could not read the selected team logo.", error);
      showToast(t("logoReadFailed"));
      input.value = "";
      setLogo("");
      preview?.classList.remove("has-logo");
      if (preview) preview.innerHTML = `<span class="team-logo-preview-empty">${escapeHtml(t("logoPreview"))}</span>`;
    }
  });
}

bindLogoInput("#team-logo-input", "#team-logo-name", (logo) => {
  draftTeamLogo = logo;
}, "#team-logo-preview");
bindLogoInput("#club-logo-input", "#club-logo-name", (logo) => {
  draftClubLogo = logo;
});

function t(key, values = {}) {
  let message = TRANSLATIONS[language][key] || TRANSLATIONS.en[key] || key;
  for (const [name, value] of Object.entries(values)) {
    message = message.replaceAll(`{${name}}`, value);
  }
  return message;
}

function formatNumber(value) {
  return new Intl.NumberFormat(
    language === "km" ? "km-KH" : "en-US",
    language === "km" ? { numberingSystem: "khmr" } : undefined,
  ).format(value);
}

function localizeDigits(value) {
  if (language !== "km") return String(value);
  return String(value).replace(/\d/g, (digit) => "០១២៣៤៥៦៧៨៩"[Number(digit)]);
}

function teamAccentColor(team) {
  const saved = team.club.accentColor;
  if (/^#[\da-f]{6}$/i.test(saved || "")) return saved;
  if (TEAM_CATEGORY_COLORS[team.club.category]) {
    return TEAM_CATEGORY_COLORS[team.club.category];
  }
  let hash = 0;
  for (const character of team.club.name) {
    hash = (hash * 31 + character.charCodeAt(0)) >>> 0;
  }
  return `hsl(${hash % 360} 48% 36%)`;
}

function teamAccentTextColor(team) {
  const accent = teamAccentColor(team);
  if (!/^#[\da-f]{6}$/i.test(accent)) return accent;
  for (let weight = 1; weight >= 0.45; weight -= 0.05) {
    const candidate = mixHexColors(accent, "#000000", weight);
    if (getContrastRatio(getBackgroundLuminance(candidate), 1) >= 4.5) {
      return candidate;
    }
  }
  return "#0d4a32";
}

function translatedRole(role) {
  return t(ROLE_TRANSLATION_KEYS[role] || role);
}

function applyLanguage() {
  document.documentElement.lang = language;
  document.title =
    language === "km"
      ? "SUNNY SPORT CLUB | ការគ្រប់គ្រងក្រុម"
      : "SUNNY SPORT CLUB | Team Manager";
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    element.setAttribute("aria-label", t(element.dataset.i18nAria));
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.setAttribute("placeholder", t(element.dataset.i18nPlaceholder));
  });
  setAuthMode(authMode);
  document.querySelectorAll("[data-role-i18n]").forEach((element) => {
    element.textContent = translatedRole(element.value || element.textContent);
  });
  document.querySelector("#language-toggle").dataset.language = language;
  document.querySelector("#auth-language-toggle").textContent =
    language === "en" ? "ខ្មែរ" : "English";
  document
    .querySelector("#language-toggle")
    .setAttribute("aria-label", t("switchLanguage"));
  document
    .querySelector("#auth-language-toggle")
    .setAttribute("aria-label", t("switchLanguage"));
  updateSoundToggle();
  document.querySelector("#edit-club-button").title = t("editClub");
  document.querySelector("#edit-club-button").setAttribute("aria-label", t("editClub"));
  document.querySelector("#appearance-toggle").title = t("changeBackground");
  document.querySelector("#top-logout-button").title = t("logOut");
  document.querySelector("#top-logout-button").setAttribute("aria-label", t("logOut"));
  document.querySelector("#logout-button").title = t("logOut");
  document.querySelector("#logout-button").setAttribute("aria-label", t("logOut"));
  document.querySelector("#role-filter").setAttribute("aria-label", t("filterByRole"));
  document.querySelector("#today-label").textContent =
    new Intl.DateTimeFormat(language === "km" ? "km-KH" : "en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }).format(new Date());
  document.querySelector("#member-dialog-title").textContent = t(
    document.querySelector("#member-id").value ? "editMemberTitle" : "addMemberTitle",
  );
  document.querySelector("#save-member-button").textContent = t(
    document.querySelector("#member-id").value ? "saveChanges" : "addMemberSubmit",
  );
  document.querySelector("#club-dialog-title").textContent = t("clubDetails");
  document.querySelector("#member-name").setAttribute("aria-label", t("fullName"));
  document.querySelector("#member-role").setAttribute("aria-label", t("teamRole"));
  document.querySelector("#member-number").setAttribute("aria-label", t("jerseyNumber"));
  document.querySelector("#member-contact").setAttribute("aria-label", t("contactNumber"));
  document.querySelector("#club-name-input").setAttribute("aria-label", t("clubName"));
  document.querySelector("#club-location-input").setAttribute("aria-label", t("location"));
  document.querySelector("#club-phone-input").setAttribute("aria-label", t("contactNumber"));
  document.querySelector("#club-telegram-input").setAttribute("aria-label", t("telegramLink"));
  document.querySelector("#member-photo").setAttribute("aria-label", t("uploadPhoto"));
  const photoPreview = document.querySelector("#photo-preview img");
  if (photoPreview) photoPreview.alt = t("selectedPhotoAlt");
  if (document.querySelector("#bulk-members-input")) renderBulkMemberPreview();
  applyWorkspaceBackground();
  render();
}

function isSafeImageSource(value) {
  if (typeof value !== "string") return false;
  const source = value.trim();
  if (!source) return false;
  if (/^data:image\/(?:png|jpeg|webp|gif|avif|svg\+xml);base64,/i.test(source)) {
    return true;
  }
  if (/^[a-z][a-z\d+.-]*:/i.test(source) || source.startsWith("//") || source.startsWith("/")) {
    return false;
  }
  if (source.includes("..") || source.includes("\\") || /[\r\n]/.test(source)) {
    return false;
  }
  return CONTENT_IMAGE_SOURCE_PATTERN.test(source) &&
    source.split("/").every((part) => part && part !== ".");
}

function contentText(value, fallback = "") {
  return typeof value === "string" ? value.trim() : fallback;
}

function contentSlug(value, fallback) {
  const slug = contentText(value)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return slug || fallback;
}

function readContentConfig() {
  const source = globalThis.SUNNY_DATA;
  const data = source && typeof source === "object" ? source : {};
  const config = { teams: [], staff: [], accounts: [] };

  if (Array.isArray(data.teams)) {
    data.teams.forEach((team, index) => {
      if (!team || typeof team !== "object") return;
      const name = contentText(team.name);
      if (!name) return;
      config.teams.push({
        id: contentText(team.id) || `data-team-${index + 1}`,
        name,
        location: contentText(team.location),
        category: Object.hasOwn(TEAM_CATEGORY_COLORS, team.category) ? team.category : "",
        accentColor: /^#[\da-f]{6}$/i.test(team.accentColor || "") ? team.accentColor : "",
        description: contentText(team.description),
        foundedYear: contentText(team.foundedYear),
        trainingDay: contentText(team.trainingDay),
        trainingTime: contentText(team.trainingTime),
        logo: isSafeImageSource(team.logo) ? team.logo.trim() : "",
        phone: contentText(team.phone),
        telegram: contentText(team.telegram),
      });
    });
  }

  const firstTeamId = config.teams[0]?.id || "";

  if (Array.isArray(data.staff)) {
    data.staff.forEach((member, index) => {
      if (!member || typeof member !== "object") return;
      const name = contentText(member.name);
      if (!name) return;
      const role = VALID_ROLES.has(member.role) ? member.role : "Player";
      if (member.role && !VALID_ROLES.has(member.role)) {
        console.warn(`Unknown staff role "${member.role}" for ${name}. Using "Player".`);
      }
      config.staff.push({
        id: contentText(member.id) || `data-staff-${index + 1}`,
        teamId: contentText(member.teamId) || firstTeamId,
        name,
        role,
        number: typeof member.number === "number"
          ? String(member.number)
          : contentText(member.number),
        contact: contentText(member.contact),
        photo: isSafeImageSource(member.photo) ? member.photo.trim() : "",
      });
    });
  }

  if (Array.isArray(data.accounts)) {
    data.accounts.forEach((account, index) => {
      if (!account || typeof account !== "object") return;
      const username = contentText(account.username);
      if (!username || typeof account.password !== "string" || !account.password) return;
      const teamRoles = {};
      if (account.teamRoles && typeof account.teamRoles === "object") {
        for (const [teamId, role] of Object.entries(account.teamRoles)) {
          if (TEAM_MANAGEMENT_ROLES.has(role)) teamRoles[teamId] = role;
        }
      }
      config.accounts.push({
        id: contentText(account.id) ||
          `data-account-${contentSlug(username, String(index + 1))}`,
        username,
        password: account.password,
        systemRole: ["owner", "admin", "developer", "viewer"].includes(account.systemRole)
          ? account.systemRole
          : "viewer",
        teamRoles,
      });
    });
  }

  return config;
}

function contentToStoreTeam(team, members) {
  const timestamp = new Date().toISOString();
  return {
    id: team.id,
    club: {
      name: team.name,
      location: team.location,
      category: team.category,
      accentColor: team.accentColor,
      description: team.description,
      foundedYear: team.foundedYear,
      trainingDay: team.trainingDay,
      trainingTime: team.trainingTime,
      logo: team.logo,
      phone: team.phone,
      telegram: team.telegram,
    },
    members,
    createdAt: timestamp,
    updatedAt: timestamp,
    views: 0,
  };
}

function applyContentConfig(store, config) {
  const managed = store.contentManaged && typeof store.contentManaged === "object"
    ? store.contentManaged
    : {};
  const previousTeamIds = new Set(Array.isArray(managed.teamIds) ? managed.teamIds : []);
  const previousMemberIds = new Set(Array.isArray(managed.memberIds) ? managed.memberIds : []);
  const previousUsernames = new Set(
    Array.isArray(managed.usernames)
      ? managed.usernames.map((username) => String(username).toLowerCase())
      : [],
  );
  const nextTeamIds = new Set();
  const nextMemberIds = new Set();
  const nextUsernames = new Set();

  for (const account of config.accounts) {
    const normalizedUsername = account.username.toLowerCase();
    nextUsernames.add(normalizedUsername);
    const existing = store.users.find(
      (user) => user.username.toLowerCase() === normalizedUsername,
    );
    if (existing) {
      existing.password = account.password;
      delete existing.passwordSalt;
      delete existing.passwordHash;
      existing.systemRole = normalizedUsername === "ddomm7" ? "owner" : account.systemRole;
      existing.teamRoles = { ...(existing.teamRoles || {}), ...account.teamRoles };
    } else {
      store.users.push({
        id: account.id,
        username: account.username,
        password: account.password,
        systemRole: normalizedUsername === "ddomm7" ? "owner" : account.systemRole,
        canPost: false,
        teamCreationRole: "",
        teamCreationUsed: false,
        teamRoles: { ...account.teamRoles },
      });
    }
  }
  store.users = store.users.filter((user) => {
    const normalizedUsername = user.username.toLowerCase();
    return !previousUsernames.has(normalizedUsername) || nextUsernames.has(normalizedUsername);
  });

  for (const team of config.teams) {
    nextTeamIds.add(team.id);
    const members = config.staff
      .filter((member) => member.teamId === team.id)
      .map(({ id, name, role, number, contact, photo }) => ({
        id,
        name,
        role,
        number,
        contact,
        photo,
      }));
    const nextTeamMemberIds = new Set(members.map((member) => member.id));
    for (const member of members) nextMemberIds.add(member.id);

    const existing = store.teams.find((item) => item.id === team.id);
    if (existing) {
      existing.club = {
        ...existing.club,
        name: team.name,
        location: team.location,
        category: team.category,
        accentColor: team.accentColor,
        description: team.description,
        foundedYear: team.foundedYear,
        trainingDay: team.trainingDay,
        trainingTime: team.trainingTime,
        logo: team.logo,
        phone: team.phone,
        telegram: team.telegram,
      };
      for (const member of members) {
        const memberIndex = existing.members.findIndex((item) => item.id === member.id);
        if (memberIndex >= 0) {
          existing.members[memberIndex] = { ...existing.members[memberIndex], ...member };
        } else {
          existing.members.push(member);
        }
      }
      existing.members = existing.members.filter((member) =>
        !previousMemberIds.has(member.id) || nextTeamMemberIds.has(member.id),
      );
      existing.updatedAt = new Date().toISOString();
    } else {
      store.teams.push(contentToStoreTeam(team, members));
    }
  }
  store.teams = store.teams.filter((team) =>
    !previousTeamIds.has(team.id) || nextTeamIds.has(team.id),
  );

  const remainingTeamIds = new Set(store.teams.map((team) => team.id));
  if (store.selectedTeamId && !remainingTeamIds.has(store.selectedTeamId)) {
    store.selectedTeamId = "";
  }
  if (store.activeUserId && !store.users.some((user) => user.id === store.activeUserId)) {
    store.activeUserId = "";
  }

  store.contentManaged = {
    teamIds: [...nextTeamIds],
    memberIds: [...nextMemberIds],
    usernames: [...nextUsernames],
  };
  return store;
}

function syncContentFiles(store) {
  const source = globalThis.SUNNY_DATA;
  if (!source || typeof source !== "object") return store;
  const config = readContentConfig();
  const signature = JSON.stringify(config);
  let savedSignature = "";
  try {
    savedSignature = localStorage.getItem(CONTENT_SIGNATURE_KEY) || "";
  } catch (error) {
    console.error("Could not read the content data signature.", error);
  }
  if (savedSignature === signature) return store;

  applyContentConfig(store, config);
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
    localStorage.setItem(CONTENT_SIGNATURE_KEY, signature);
  } catch (error) {
    console.error("Could not save the content from the data files.", error);
  }
  return store;
}

function loadData() {
  const emptyManaged = { teamIds: [], memberIds: [], usernames: [] };
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    const result = {
      users: BOOTSTRAP_USERS.map((user) => ({ ...user, teamRoles: {} })),
      teams: [],
      posts: [],
      activeUserId: "",
      selectedTeamId: "",
      contentManaged: emptyManaged,
    };
    if (saved) {
      const parsed = JSON.parse(saved);
      const savedTeams = Array.isArray(parsed.teams)
        ? parsed.teams
        : parsed.club
          ? [{ id: "legacy-team", club: parsed.club, members: parsed.members }]
          : [];
      result.teams = savedTeams
        .filter((team) => team && typeof team.id === "string")
        .map((team) => {
          const savedClub = team.club && typeof team.club === "object" ? team.club : {};
          return {
            id: team.id,
            club: {
              name: typeof savedClub.name === "string" && savedClub.name.trim()
                ? savedClub.name
                : DEFAULT_DATA.club.name,
              location: typeof savedClub.location === "string" ? savedClub.location : "",
              category: Object.hasOwn(TEAM_CATEGORY_COLORS, savedClub.category)
                ? savedClub.category
                : "",
              accentColor: /^#[\da-f]{6}$/i.test(savedClub.accentColor || "")
                ? savedClub.accentColor
                : "",
              description: typeof savedClub.description === "string" ? savedClub.description : "",
              foundedYear: typeof savedClub.foundedYear === "string" ? savedClub.foundedYear : "",
              trainingDay:
                typeof savedClub.trainingDay === "string" ? savedClub.trainingDay : "",
              trainingTime:
                typeof savedClub.trainingTime === "string" ? savedClub.trainingTime : "",
              logo: isSafeImageSource(savedClub.logo) ? savedClub.logo.trim() : "",
              phone: typeof savedClub.phone === "string" ? savedClub.phone : "",
              telegram: typeof savedClub.telegram === "string" ? savedClub.telegram : "",
            },
            members: Array.isArray(team.members)
              ? team.members.filter(
                  (member) =>
                    member &&
                    typeof member.id === "string" &&
                    typeof member.name === "string" &&
                    VALID_ROLES.has(member.role),
                ).map((member) => ({
                  id: member.id,
                  name: member.name,
                  role: member.role,
                  number:
                    typeof member.number === "string" || typeof member.number === "number"
                      ? String(member.number)
                      : "",
                  contact: typeof member.contact === "string" ? member.contact : "",
                  photo: isSafeImageSource(member.photo) ? member.photo.trim() : "",
                }))
              : [],
            createdAt: typeof team.createdAt === "string"
              ? team.createdAt
              : new Date(0).toISOString(),
            updatedAt: typeof team.updatedAt === "string"
              ? team.updatedAt
              : typeof team.createdAt === "string"
                ? team.createdAt
                : new Date(0).toISOString(),
            views: Number.isSafeInteger(team.views) && team.views >= 0 ? team.views : 0,
          };
        });
      const users = Array.isArray(parsed.users)
        ? parsed.users.filter(
            (user) =>
              user &&
              typeof user.id === "string" &&
              typeof user.username === "string" &&
              ((typeof user.password === "string" && user.password.length > 0) ||
                (typeof user.passwordSalt === "string" &&
                  typeof user.passwordHash === "string")),
          ).map((user) => ({
            id: user.id,
            username: user.username,
            ...(typeof user.password === "string" && user.password.length > 0
              ? { password: user.password }
              : { passwordSalt: user.passwordSalt, passwordHash: user.passwordHash }),
            systemRole: user.username.toLowerCase() === "ddomm7" || user.systemRole === "owner"
              ? "owner"
              : ["admin", "developer"].includes(user.systemRole)
                ? user.systemRole
                : "viewer",
            name: typeof user.name === "string" ? user.name.slice(0, 60) : "",
            email: typeof user.email === "string" ? user.email.toLowerCase() : "",
            phone: typeof user.phone === "string" ? user.phone : "",
            contactVerified: Boolean(user.contactVerified),
            canPost: Boolean(user.canPost),
            teamCreationRole: user.teamCreationRole === "Coach" ? "Coach" : "",
            teamCreationUsed: Boolean(user.teamCreationUsed),
            teamRoles: user.teamRoles && typeof user.teamRoles === "object"
              ? user.teamRoles
              : {},
          }))
        : [];
      for (const bootstrapUser of BOOTSTRAP_USERS) {
        const existing = users.find(
          (user) => user.username.toLowerCase() === bootstrapUser.username,
        );
        if (!existing) {
          users.push({ ...bootstrapUser, teamRoles: {} });
        } else {
          if (
            typeof existing.password !== "string" &&
            (!isValidBase64Bytes(existing.passwordSalt, 16) ||
              !isValidBase64Bytes(existing.passwordHash, 32))
          ) {
            existing.passwordSalt = bootstrapUser.passwordSalt;
            existing.passwordHash = bootstrapUser.passwordHash;
          }
          if (bootstrapUser.username === "ddomm7") {
            existing.systemRole = "owner";
          }
        }
      }
      result.users = users;
      result.posts = Array.isArray(parsed.posts)
        ? parsed.posts.filter(
            (post) =>
              post &&
              typeof post.id === "string" &&
              typeof post.author === "string" &&
              typeof post.message === "string",
          ).map((post) => ({
            id: post.id,
            author: post.author,
            message: post.message,
            media: Array.isArray(post.media)
              ? post.media.filter((item) =>
                  item &&
                  typeof item.id === "string" &&
                  typeof item.type === "string",
                ).map((item) => ({ id: item.id, type: item.type }))
              : typeof post.mediaId === "string" && post.mediaId
                ? [{
                    id: post.mediaId,
                    type: typeof post.mediaType === "string" ? post.mediaType : "",
                  }]
                : [],
            teamId: typeof post.teamId === "string" ? post.teamId : "",
            createdAt: typeof post.createdAt === "string"
              ? post.createdAt
              : new Date(0).toISOString(),
          }))
        : [];
      result.activeUserId =
        typeof parsed.activeUserId === "string" ? parsed.activeUserId : "";
      result.selectedTeamId =
        typeof parsed.selectedTeamId === "string" ? parsed.selectedTeamId : "";
      result.contentManaged = parsed.contentManaged &&
        typeof parsed.contentManaged === "object"
        ? {
            teamIds: Array.isArray(parsed.contentManaged.teamIds)
              ? parsed.contentManaged.teamIds.filter((id) => typeof id === "string")
              : [],
            memberIds: Array.isArray(parsed.contentManaged.memberIds)
              ? parsed.contentManaged.memberIds.filter((id) => typeof id === "string")
              : [],
            usernames: Array.isArray(parsed.contentManaged.usernames)
              ? parsed.contentManaged.usernames.filter((name) => typeof name === "string")
              : [],
          }
        : emptyManaged;
    }
    return syncContentFiles(result);
  } catch (error) {
    console.error("Could not load saved club data.", error);
    showToast("Saved data could not be read. Starting with an empty workspace.");
    const fallback = {
      users: BOOTSTRAP_USERS.map((user) => ({ ...user, teamRoles: {} })),
      teams: [],
      posts: [],
      activeUserId: "",
      selectedTeamId: "",
      contentManaged: emptyManaged,
    };
    try {
      applyContentConfig(fallback, readContentConfig());
    } catch (contentError) {
      console.error("Could not load the content data files.", contentError);
    }
    return fallback;
  }
}

function persistData() {
  try {
    const nextStore = {
      ...store,
      posts: store.posts || [],
      teams: currentTeamId
        ? store.teams.map((team) =>
        team.id === currentTeamId
          ? {
              ...team,
              club: data.club,
              members: data.members,
              updatedAt: new Date().toISOString(),
            }
          : team,
          )
        : store.teams,
      activeUserId: activeAccount?.id || "",
      selectedTeamId: currentTeamId,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(nextStore));
    store = nextStore;
    return true;
  } catch (error) {
    console.error("Could not save club data.", error);
    showToast(t("storageError"));
    return false;
  }
}

function openMediaDatabase() {
  if (!globalThis.indexedDB) {
    return Promise.reject(new Error("This browser does not support local media storage."));
  }
  if (!mediaDatabasePromise) {
    mediaDatabasePromise = new Promise((resolve, reject) => {
      const request = indexedDB.open(MEDIA_DATABASE, 1);
      request.addEventListener("upgradeneeded", () => {
        request.result.createObjectStore("media", { keyPath: "id" });
      });
      request.addEventListener("success", () => resolve(request.result), { once: true });
      request.addEventListener("error", () => {
        reject(request.error || new Error("Could not open local media storage."));
      }, { once: true });
    });
  }
  return mediaDatabasePromise;
}

async function savePostMedia(id, blob) {
  const database = await openMediaDatabase();
  await new Promise((resolve, reject) => {
    const transaction = database.transaction("media", "readwrite");
    transaction.objectStore("media").put({ id, blob });
    transaction.addEventListener("complete", resolve, { once: true });
    transaction.addEventListener("error", () => {
      reject(transaction.error || new Error("Could not save uploaded media."));
    }, { once: true });
    transaction.addEventListener("abort", () => {
      reject(transaction.error || new Error("Saving uploaded media was cancelled."));
    }, { once: true });
  });
}

async function getPostMediaUrl(id) {
  if (postMediaUrls.has(id)) return postMediaUrls.get(id);
  const database = await openMediaDatabase();
  const record = await new Promise((resolve, reject) => {
    const request = database.transaction("media", "readonly").objectStore("media").get(id);
    request.addEventListener("success", () => resolve(request.result), { once: true });
    request.addEventListener("error", () => {
      reject(request.error || new Error("Could not load uploaded media."));
    }, { once: true });
  });
  if (!record?.blob) return "";
  const url = URL.createObjectURL(record.blob);
  postMediaUrls.set(id, url);
  return url;
}

async function deletePostMedia(id) {
  const url = postMediaUrls.get(id);
  if (url) URL.revokeObjectURL(url);
  postMediaUrls.delete(id);
  const database = await openMediaDatabase();
  await new Promise((resolve, reject) => {
    const transaction = database.transaction("media", "readwrite");
    transaction.objectStore("media").delete(id);
    transaction.addEventListener("complete", resolve, { once: true });
    transaction.addEventListener("error", () => {
      reject(transaction.error || new Error("Could not remove post media."));
    }, { once: true });
  });
}

function currentTeam() {
  return store.teams.find((team) => team.id === currentTeamId) || null;
}

function isOwner() {
  return activeAccount?.systemRole === "owner";
}

function isAdmin() {
  return Boolean(
    activeAccount && ["owner", "admin", "developer"].includes(activeAccount.systemRole),
  );
}

function canManageCurrentTeam() {
  return Boolean(currentTeam() && canManageTeam(currentTeamId));
}

function canManageTeam(teamId) {
  if (!activeAccount || !store.teams.some((team) => team.id === teamId)) return false;
  if (isAdmin()) return true;
  return getAssignedManagementTeamId(activeAccount) === teamId;
}

function canManageTeamAccess() {
  return Boolean(
    isAdmin() ||
      (currentTeam() && activeAccount?.teamRoles[currentTeamId] === "Coach"),
  );
}

function getAssignedManagementTeamId(account) {
  return store.teams.find((team) =>
    TEAM_MANAGEMENT_ROLES.has(account.teamRoles[team.id]),
  )?.id || "";
}

function canAccessManagement() {
  return Boolean(
    activeAccount &&
      (isAdmin() ||
        activeAccount.teamCreationRole === "Coach" ||
        Object.values(activeAccount.teamRoles).some((role) => TEAM_MANAGEMENT_ROLES.has(role))),
  );
}

function canCreateTeam() {
  return Boolean(
    activeAccount &&
      (isAdmin() ||
        (activeAccount.teamCreationRole === "Coach" &&
          !activeAccount.teamCreationUsed &&
          !getAssignedManagementTeamId(activeAccount))),
  );
}

function getAccountRoleLabel(user) {
  if (["owner", "admin", "developer"].includes(user.systemRole)) {
    return getSystemRoleLabel(user.systemRole);
  }
  const assignedTeamId = getAssignedManagementTeamId(user);
  if (assignedTeamId) {
    const role = user.teamRoles[assignedTeamId];
    return t(role === "Coach" ? "coachRole" : role === "Captain" ? "captainRole" : "managerRole");
  }
  if (user.teamCreationRole === "Coach") return t("coachRole");
  return getSystemRoleLabel(user.systemRole);
}

function canPublishPosts() {
  return isAdmin();
}

function getSystemRoleLabel(role) {
  if (role === "owner") return t("devOwnerRole");
  if (role === "admin") return t("adminSystemRole");
  if (role === "developer") return t("developerRole");
  return t("viewerRole");
}

function updatePostTeamOptions() {
  const select = document.querySelector("#post-team-select");
  const previous = select.value;
  select.innerHTML = `<option value="">${escapeHtml(t("allTeams"))}</option>` +
    store.teams.map((team) =>
      `<option value="${escapeHtml(team.id)}">${escapeHtml(team.club.name)}</option>`,
    ).join("");
  select.value = store.teams.some((team) => team.id === previous)
    ? previous
    : currentTeamId || "";
}

function selectTeam(teamId) {
  const team = store.teams.find((item) => item.id === teamId);
  if (!team) return;
  if (currentTeamId !== team.id) team.views = (team.views || 0) + 1;
  currentTeamId = team.id;
  spotlightIndex = store.teams.findIndex((item) => item.id === teamId);
  data = { club: team.club, members: team.members };
  persistData();
  const nextHash = `#team/${encodeURIComponent(team.id)}`;
  if (window.location.hash !== nextHash) window.location.hash = nextHash;
  else render();
}

function renderWithPageTransition() {
  const page = document.querySelector(".page-content");
  if (typeof document.startViewTransition === "function") {
    document.startViewTransition(() => render());
    return;
  }
  page.classList.remove("route-fade-in");
  render();
  void page.offsetWidth;
  page.classList.add("route-fade-in");
  window.setTimeout(() => page.classList.remove("route-fade-in"), 360);
}

function renderRouteFromHash() {
  const route = window.location.hash || "#teams";
  if (route === lastRenderedRoute) return;
  lastRenderedRoute = route;
  const match = window.location.hash.match(/^#team\/([^/]+)(?:\/(roster|overview))?$/);
  if (!match) {
    currentTeamId = "";
    data = structuredClone(DEFAULT_DATA);
    renderWithPageTransition();
    if (window.location.hash && window.location.hash !== "#teams") {
      window.location.hash = "#teams";
    }
    return;
  }
  let teamId;
  try {
    teamId = decodeURIComponent(match[1]);
  } catch {
    window.location.hash = "#teams";
    return;
  }
  const team = store.teams.find((item) => item.id === teamId);
  if (!team) {
    window.location.hash = "#teams";
    return;
  }
  data = { club: team.club, members: team.members };
  if (currentTeamId !== team.id) {
    currentTeamId = team.id;
    team.views = (team.views || 0) + 1;
    persistData();
  }
  renderWithPageTransition();
  if (match[2] === "roster") {
    requestAnimationFrame(() => document.querySelector("#roster").scrollIntoView({ behavior: "smooth" }));
  } else {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

function renderTeams() {
  const grid = document.querySelector("#teams-grid");
  document.querySelector("#teams-count").textContent = formatNumber(store.teams.length);
  document.querySelector("#directory-empty").hidden = store.teams.length > 0;
  grid.innerHTML = store.teams.map((team) => {
    const category = team.club.category
      ? t(`category${team.club.category[0].toUpperCase()}${team.club.category.slice(1)}`)
      : t("categoryFootball");
    const memberCountLabel = t(team.members.length === 1 ? "teamMemberSingular" : "teamMemberPlural");
    const logo = team.club.logo
      ? `<img class="team-card-logo" src="${escapeHtml(team.club.logo)}" alt="">`
      : `<img class="team-card-logo" src="${DEFAULT_CLUB_LOGO}" alt="">`;
    return `<article class="team-card${team.id === directoryHighlightId ? " team-card-highlight" : ""}" data-team-card="${escapeHtml(team.id)}" style="--team-accent:${escapeHtml(teamAccentColor(team))};--team-accent-ink:${escapeHtml(teamAccentTextColor(team))};--card-index:${store.teams.indexOf(team)}">
      <button class="team-card-open" type="button" data-team-open="${escapeHtml(team.id)}" aria-label="${escapeHtml(t("viewTeamNamed", { name: team.club.name }))}">
        <span class="team-card-accent" aria-hidden="true"></span>
        <span class="team-card-topline">
          <span class="team-card-logo-ring">${logo}</span>
          <span class="team-card-category">${escapeHtml(category)}</span>
        </span>
        <span class="team-card-copy">
          <strong class="team-card-name">${escapeHtml(team.club.name)}</strong>
          <span class="team-card-location">${escapeHtml(team.club.location || t("locationNotProvided"))}</span>
        </span>
        <span class="team-card-bottom">
          <span class="team-card-member-count">${formatNumber(team.members.length)} ${escapeHtml(memberCountLabel)}</span>
          <span class="team-card-view">${escapeHtml(t("viewTeam"))} <span aria-hidden="true">→</span></span>
        </span>
      </button>
      <div class="team-card-management">
        ${canManageTeam(team.id) ? `<button type="button" class="button button-secondary button-small" data-team-edit="${escapeHtml(team.id)}" aria-label="${escapeHtml(t("editTeamNamed", { name: team.club.name }))}">${escapeHtml(t("editTeam"))}</button>` : ""}
        ${isAdmin() ? `<button type="button" class="team-delete" data-team-delete="${escapeHtml(team.id)}" aria-label="${escapeHtml(t("deleteTeam", { name: team.club.name }))}">×</button>` : ""}
      </div>
    </article>`;
  }).join("");
  document.querySelector("#team-spotlight-section").hidden = true;
}

function renderSpotlight() {
  const section = document.querySelector("#team-spotlight-section");
  if (!store.teams.length) {
    if (spotlightTimer) clearInterval(spotlightTimer);
    spotlightTimer = 0;
    section.hidden = true;
    return;
  }
  section.hidden = false;
  spotlightIndex %= store.teams.length;
  const team = store.teams[spotlightIndex];
  const card = document.querySelector("#spotlight-card");
  card.classList.remove("spotlight-enter");
  void card.offsetWidth;
  card.classList.add("spotlight-enter");
  const logo = document.querySelector("#spotlight-logo");
  logo.innerHTML = team.club.logo
    ? `<img src="${escapeHtml(team.club.logo)}" alt="${escapeHtml(team.club.name)} logo">`
    : `<img src="${DEFAULT_CLUB_LOGO}" alt="">`;
  document.querySelector("#spotlight-summary-logo").innerHTML = team.club.logo
    ? `<img src="${escapeHtml(team.club.logo)}" alt="">`
    : `<img src="${DEFAULT_CLUB_LOGO}" alt="">`;
  document.querySelector("#spotlight-name").textContent = team.club.name;
  document.querySelector("#spotlight-summary-name").textContent = team.club.name;
  const details = team.club.location || "";
  document.querySelector("#spotlight-location").textContent = details || t("teamDetailsSoon");
  document.querySelector("#spotlight-summary-location").textContent =
    details || t("teamDetailsSoon");
  document.querySelector("#spotlight-position").textContent =
    `${spotlightIndex + 1} / ${store.teams.length}`;
  document.querySelector("#spotlight-roster").innerHTML = team.members.length
    ? sortMembersByTeamHierarchy(team.members).map((member) => `
      <article class="spotlight-member">
        <div class="spotlight-member-photo">${member.photo
          ? `<img src="${escapeHtml(member.photo)}" alt="">`
          : `<span>${escapeHtml(initials(member.name))}</span>`}</div>
        <strong>${escapeHtml(member.name)}</strong>
        <span>${escapeHtml(translatedRole(member.role))}${member.number ? ` · #${escapeHtml(member.number)}` : ""}</span>
      </article>`).join("")
    : `<p class="spotlight-empty">${escapeHtml(t("teamMembersWillAppear"))}</p>`;
  if (spotlightTimer) clearInterval(spotlightTimer);
  const reducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
  spotlightTimer = store.teams.length > 1 && !reducedMotion &&
    !document.querySelector("#spotlight-details").open
    ? window.setInterval(() => {
        spotlightIndex = (spotlightIndex + 1) % store.teams.length;
        renderSpotlight();
      }, 7000)
    : 0;
}

function sortMembersByTeamHierarchy(members) {
  const roleOrder = {
    "Head Coach": 0,
    "Assistant Coach": 1,
    Coach: 2,
    Captain: 3,
    Manager: 4,
    "Medical Staff": 5,
    Goalkeeper: 10,
    Defender: 11,
    Midfielder: 12,
    Forward: 13,
    Player: 14,
  };
  return members
    .map((member, index) => ({ member, index }))
    .sort((left, right) =>
      (roleOrder[left.member.role] ?? 6) - (roleOrder[right.member.role] ?? 6) ||
      left.index - right.index,
    )
    .map(({ member }) => member);
}

async function renderPosts() {
  const version = ++postRenderVersion;
  const list = document.querySelector("#post-list");
  updatePostTeamOptions();
  const visiblePosts = [...(store.posts || [])]
    .filter((post) => currentTeamId && post.teamId === currentTeamId)
    .sort((left, right) => right.createdAt.localeCompare(left.createdAt));
  document.querySelector("#posts-empty").hidden = visiblePosts.length > 0;
  document.querySelector("#post-composer").hidden = !canPublishPosts();
  const rendered = await Promise.all(visiblePosts.map(async (post) => {
    let media = "";
    if (post.media?.length) {
      const renderedMedia = await Promise.all(post.media.map(async (attachment) => {
        try {
          const url = await getPostMediaUrl(attachment.id);
          if (!url) return `<p class="post-media-missing">${escapeHtml(t("uploadUnavailable"))}</p>`;
          return attachment.type.startsWith("video/")
            ? `<video controls preload="metadata" src="${escapeHtml(url)}"></video>`
            : `<img src="${escapeHtml(url)}" alt="${escapeHtml(t("postPhotoAlt"))}">`;
        } catch (error) {
          console.error("Could not load a post attachment.", error);
          return `<p class="post-media-missing">${escapeHtml(t("uploadLoadError"))}</p>`;
        }
      }));
      media = renderedMedia.join("");
    }
    const teamName = store.teams.find((team) => team.id === post.teamId)?.club.name || t("clubUpdate");
    const date = new Date(post.createdAt);
    const dateLabel = Number.isNaN(date.valueOf())
      ? ""
      : new Intl.DateTimeFormat(language === "km" ? "km-KH" : "en-US", {
          dateStyle: "medium",
          timeStyle: "short",
        }).format(date);
    const canDelete = isAdmin() || activeAccount?.username === post.author;
    return `<article class="feed-post">
      <header class="feed-post-heading"><div class="feed-avatar">${escapeHtml(initials(post.author) || "?")}</div><div><strong>${escapeHtml(post.author)}</strong><span>${escapeHtml(teamName)} · ${escapeHtml(dateLabel)}</span></div>
      ${canDelete ? `<button type="button" class="post-delete" data-post-delete="${escapeHtml(post.id)}" aria-label="${escapeHtml(t("deleteUpdate"))}">×</button>` : ""}</header>
      ${post.message ? `<p class="feed-post-message">${escapeHtml(post.message).replace(/\n/g, "<br>")}</p>` : ""}
      ${media ? `<div class="feed-post-media${post.media.length > 1 ? " feed-post-media-gallery" : ""}">${media}</div>` : ""}
    </article>`;
  }));
  if (version === postRenderVersion) list.innerHTML = rendered.join("");
}

function renderAccountRoles() {
  const panel = document.querySelector("#admin-section");
  const isTeamCoach = !isAdmin() && canManageTeamAccess();
  panel.hidden = !isAdmin() && !isTeamCoach;
  const team = currentTeam();
  document.querySelector("#access-panel-label").textContent =
    isAdmin() ? t("administration") : t("teamAccess");
  document.querySelector("#access-panel-description").textContent =
    isAdmin() ? t("accountsDescription") : t("teamAccessDescription");
  document.querySelector("#create-account-button").hidden = !isAdmin() && !isTeamCoach;
  if (!isAdmin() && !isTeamCoach) return;
  document.querySelector("#account-roles").innerHTML = store.users.map((user) => {
    const hasSystemAccess = ["owner", "admin", "developer"].includes(user.systemRole);
    const value = hasSystemAccess
      ? user.systemRole
      : team
        ? user.teamRoles[team.id] || "Viewer"
        : "Viewer";
    const roleControls = hasSystemAccess
      ? `<span class="role-lock">${escapeHtml(t("fullSystemAccess"))}</span>`
      : isTeamCoach && user.id === activeAccount.id
        ? `<span class="role-lock">${escapeHtml(getAccountRoleLabel(user))}</span>`
        : `<div class="account-role-controls">
          ${isAdmin() && isOwner() ? `<label class="system-role-control"><span>${escapeHtml(t("systemRole"))}</span><select data-system-role="${escapeHtml(user.id)}" aria-label="${escapeHtml(t("deleteAccountRole", { username: user.username }))}">
            <option value="viewer"${user.systemRole === "viewer" ? " selected" : ""}>${escapeHtml(t("viewerRole"))}</option>
            <option value="admin"${user.systemRole === "admin" ? " selected" : ""}>${escapeHtml(t("adminSystemRole"))}</option>
            <option value="developer"${user.systemRole === "developer" ? " selected" : ""}>${escapeHtml(t("developerRole"))}</option>
          </select></label>` : ""}
          ${team
            ? (() => {
                const assignedTeamId = getAssignedManagementTeamId(user);
                const roleAssignmentDisabled = assignedTeamId && assignedTeamId !== team.id;
                const managerOption = `<option value="Team Manager"${value === "Team Manager" ? " selected" : ""}${roleAssignmentDisabled ? " disabled" : ""}>${escapeHtml(t("managerRole"))}</option>`;
                const coachOption = isAdmin()
                  ? `<option value="Coach"${value === "Coach" ? " selected" : ""}${roleAssignmentDisabled && value !== "Coach" ? " disabled" : ""}>${escapeHtml(t("coachRole"))}</option>`
                  : "";
                const leaderOption = `<option value="Captain"${value === "Captain" ? " selected" : ""}${roleAssignmentDisabled && value !== "Captain" ? " disabled" : ""}>${escapeHtml(t("captainRole"))}</option>`;
                return `<select data-account-role="${escapeHtml(user.id)}" aria-label="${escapeHtml(t("deleteAccountRole", { username: user.username }))}">
                  <option value="Viewer"${value === "Viewer" ? " selected" : ""}>${escapeHtml(t("viewOnly"))}</option>
                  ${coachOption}${leaderOption}${managerOption}
                </select>`;
              })()
            : `<span class="role-lock">${escapeHtml(t("chooseTeam"))}</span>`}
        </div>`;
    const contact = isAdmin() ? user.email || user.phone || "" : "";
    const contactNote = contact
      ? ` · ${contact}${user.contactVerified === false ? ` (${t("unverifiedContact")})` : ""}`
      : "";
    return `<div class="account-role-row"><span><strong>${escapeHtml(user.name || user.username)}</strong><small>${escapeHtml(getAccountRoleLabel(user))}${escapeHtml(contactNote)}</small></span>${roleControls}</div>`;
  }).join("") || `<p class="directory-empty">${escapeHtml(t("noAccounts"))}</p>`;
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return entities[character];
  });
}

function initials(name) {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part.charAt(0).toUpperCase())
    .join("");
}

function roleClass(role) {
  return `role-${role.toLowerCase().replace(/\s+/g, "-")}`;
}

function renderClub() {
  const { club } = data;
  const accent = teamAccentColor(currentTeam());
  document.querySelector(".main-content").style.setProperty("--team-accent", accent);
  document.querySelector(".club-banner").style.setProperty("--team-accent", accent);
  document.querySelector("#club-name").textContent =
    club.name.trim() || DEFAULT_DATA.club.name;
  document.querySelector("#club-location").textContent =
    club.location.trim() || t("addLocation");

  const phoneLink = document.querySelector("#club-phone");
  phoneLink.textContent = club.phone.trim() || t("addContact");
  phoneLink.href = club.phone.trim()
    ? `tel:${club.phone.replace(/[^\d+]/g, "")}`
    : "#";
  phoneLink.setAttribute(
    "aria-label",
    club.phone.trim()
      ? `${t("callClub")} ${club.phone}`
      : t("addClubContact"),
  );
  const logo = document.querySelector("#club-logo");
  const crestFallback = document.querySelector(".club-logo-default");
  logo.hidden = !club.logo;
  logo.src = club.logo || "";
  crestFallback.hidden = Boolean(club.logo);

  const telegramLink = document.querySelector("#telegram-link");
  const telegramUrl = safeTelegramUrl(club.telegram);
  telegramLink.href = telegramUrl || "#";
  telegramLink.setAttribute(
    "aria-disabled",
    telegramUrl ? "false" : "true",
  );
  telegramLink.title = telegramUrl
    ? t("openTelegram")
    : t("addTelegram");

  renderStats();
}

function safeTelegramUrl(value) {
  const candidate = value.trim();
  if (!candidate) return "";
  try {
    const parsed = new URL(
      candidate.startsWith("@")
        ? `https://t.me/${candidate.slice(1)}`
        : candidate.includes("://")
          ? candidate
          : `https://${candidate}`,
    );
    return parsed.protocol === "https:" &&
      (parsed.hostname === "t.me" || parsed.hostname === "telegram.me")
      ? parsed.href
      : "";
  } catch {
    return "";
  }
}

function renderStats() {
  const total = data.members.length;
  const staff = data.members.filter((member) =>
    ["Head Coach", "Assistant Coach", "Coach", "Manager", "Medical Staff"].includes(member.role),
  ).length;
  const players = data.members.filter((member) =>
    ["Player", "Goalkeeper", "Defender", "Midfielder", "Forward"].includes(
      member.role,
    ),
  ).length;
  const weekStart = Date.now() - 7 * 24 * 60 * 60 * 1000;
  const activity = (store.posts || []).filter((post) =>
    post.teamId === currentTeamId && Date.parse(post.createdAt) >= weekStart,
  ).length;

  document.querySelector("#member-total").textContent = formatNumber(total);
  document.querySelector("#staff-total").textContent = formatNumber(staff);
  document.querySelector("#player-total").textContent = formatNumber(players);
  document.querySelector("#activity-total").textContent = formatNumber(activity);
  document.querySelector("#nav-count").textContent = formatNumber(total);
  document.querySelector("#roster-count").textContent = formatNumber(total);
  document.querySelector("#role-summary").textContent =
    total === 0
      ? t("readySquad")
      : `${formatNumber(players)} ${t(players === 1 ? "playerCount" : "playersCount")} · ${formatNumber(total - players)} ${t("staffCount")}`;
}

function renderMembers() {
  const search = document
    .querySelector("#search-input")
    .value.trim()
    .toLowerCase();
  const roleFilter = document.querySelector("#role-filter").value;
  const visibleMembers = sortMembersByTeamHierarchy(data.members).filter((member) => {
    const matchesSearch =
      member.name.toLowerCase().includes(search) ||
      member.role.toLowerCase().includes(search) ||
      translatedRole(member.role).toLowerCase().includes(search);
    const matchesRole = roleFilter === "all" || member.role === roleFilter;
    return matchesSearch && matchesRole;
  });
  const grid = document.querySelector("#roster-grid");

  grid.innerHTML = visibleMembers
    .map((member) => {
      const photo = member.photo
        ? `<img src="${escapeHtml(member.photo)}" alt="">`
        : escapeHtml(initials(member.name));
      const number = member.number !== "" ? `#${escapeHtml(localizeDigits(member.number))}` : "";
      const role = escapeHtml(translatedRole(member.role));
      const phone = member.contact
        ? `<a class="member-phone" href="tel:${escapeHtml(member.contact.replace(/[^\d+]/g, ""))}">${escapeHtml(member.contact)}</a>`
        : `<span class="member-phone">${escapeHtml(t("addContact"))}</span>`;

      return `
        <article class="member-card">
          <div class="member-card-top">
            <span class="member-role ${roleClass(member.role)}">${role}</span>
            <div class="member-photo">${photo}</div>
            ${canManageCurrentTeam() ? `<button class="member-menu" type="button" data-action="edit" data-id="${escapeHtml(member.id)}" aria-label="${escapeHtml(t("editMemberTitle"))}: ${escapeHtml(member.name)}">···</button>` : ""}
          </div>
          <div class="member-card-info">
            <h3 class="member-name">${escapeHtml(member.name)}</h3>
            <div class="member-meta"><span>${number || escapeHtml(t("teamRoster"))}</span>${phone}</div>
            ${canManageCurrentTeam() ? `<div class="member-actions">
              <button type="button" data-action="edit" data-id="${escapeHtml(member.id)}">${escapeHtml(t("editMemberTitle"))}</button>
              <button class="delete-member" type="button" data-action="delete" data-id="${escapeHtml(member.id)}">${escapeHtml(t("remove"))}</button>
              </div>` : ""}
          </div>
        </article>`;
    })
    .join("");

  const isEmpty = data.members.length === 0;
  document.querySelector("#empty-state").hidden = !isEmpty;
  document.querySelector("#no-results").hidden =
    isEmpty || visibleMembers.length > 0;
  grid.hidden = isEmpty || visibleMembers.length === 0;
}

function render() {
  const team = currentTeam();
  const hasTeam = Boolean(team);
  const canManageTeamNow = canManageCurrentTeam();
  const mainContent = document.querySelector(".main-content");
  mainContent.dataset.view = hasTeam ? "team" : "directory";
  mainContent.style.setProperty("--team-accent", hasTeam ? teamAccentColor(team) : "#d4a03a");
  document.querySelector("#auth-screen").hidden = false;
  document.querySelector("#app-shell").hidden = false;
  setAuthMode(authMode);
  document.querySelector("#auth-signed-in").hidden = !activeAccount;
  document.querySelector("#logout-button").hidden = !activeAccount;
  document.querySelector("#top-logout-button").hidden = !activeAccount;
  syncStaffLoginFloat();
  const displayName = activeAccount?.name || activeAccount?.username || "";
  document.querySelector("#user-name").textContent = displayName || "Public visitor";
  document.querySelector("#user-avatar").textContent =
    activeAccount ? initials(displayName) || "?" : "PV";
  document.querySelector("#welcome-role").textContent = displayName || t("publicGreeting");
  document.querySelector("#top-avatar").textContent =
    activeAccount ? initials(displayName) || "?" : "PV";
  document.querySelector("#top-avatar").setAttribute(
    "aria-label",
    displayName || "Public visitor",
  );
  const activeTeamRole = activeAccount?.teamRoles[currentTeamId];
  const translatedAccessRole = isAdmin()
    ? getSystemRoleLabel(activeAccount.systemRole)
    : activeTeamRole === "Coach"
      ? t("coachRole")
      : activeTeamRole === "Captain"
        ? t("captainRole")
          : activeTeamRole === "Team Manager"
            ? t("managerRole")
          : t("viewOnlyAccess");
  document.querySelector("#auth-session-label").textContent = activeAccount
    ? `${language === "km" ? "បានចូលគណនីជា" : "Signed in as"} ${displayName} · ${translatedAccessRole}`
    : "";
  const role = activeAccount ? translatedAccessRole : t("publicView");
  document.querySelector("#user-role").textContent = role;
  document.querySelector("#management-hub").hidden = !canAccessManagement();
  document.querySelector("#management-current-team").textContent = team?.club.name || "";
  document.querySelector("#management-create-team-button").hidden = !canCreateTeam();
  document.querySelector("#management-edit-team-button").hidden = !canManageTeamNow;
  document.querySelector("#management-add-member-button").hidden = !canManageTeamNow;
  document.querySelector("#management-bulk-add-members-button").hidden = !canManageTeamNow;
  document.querySelector("#add-member-button").hidden = !canManageTeamNow;
  document.querySelector("#bulk-add-members-button").hidden = !canManageTeamNow;
  document.querySelector("#empty-bulk-add-button").hidden = !canManageTeamNow;
  document.querySelector("#edit-club-button").hidden = !canManageTeamNow;
  document.querySelector("#contact-edit-button").hidden = !canManageTeamNow;
  document.querySelector("#back-to-teams").hidden = !hasTeam;
  document.querySelector("#team-directory-page").hidden = hasTeam;
  document.querySelector(".welcome-row").hidden = true;
  document.querySelector(".club-banner").hidden = !hasTeam;
  document.querySelector("#team-contact-card").hidden = !hasTeam;
  document.querySelector(".stats-grid").hidden = !hasTeam;
  document.querySelector("#roster").hidden = !hasTeam;
  document.querySelector(".social-feed-section").hidden = !hasTeam;
  document.querySelectorAll("#main-navigation .nav-link").forEach((link) => {
    const active = hasTeam
      ? link.getAttribute("href") === "#roster"
      : link.getAttribute("href") === "#overview";
    link.classList.toggle("active", active);
    if (active) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });
  document.querySelector("#add-member-button").disabled = !canManageTeamNow;
  renderTeams();
  renderAccountRoles();
  renderPosts();
  if (hasTeam) renderClub();
  else renderStats();
  renderMembers();
}

function showToast(message) {
  const toast = document.querySelector("#toast");
  toast.textContent = message;
  toast.classList.add("visible");
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove("visible"), 2600);
}

function updatePhotoPreview(photo) {
  const preview = document.querySelector("#photo-preview");
  preview.replaceChildren();
  if (photo) {
    const image = document.createElement("img");
    image.src = photo;
    image.alt = t("selectedPhotoAlt");
    preview.append(image);
  } else {
    const label = document.createElement("span");
    label.id = "photo-initials";
    label.textContent =
      initials(document.querySelector("#member-name").value) || "?";
    preview.append(label);
  }
  document.querySelector("#remove-photo").hidden = !photo;
}

function openMemberDialog(member) {
  if (!canManageCurrentTeam()) return;
  memberForm.reset();
  document.querySelector("#member-error").hidden = true;
  document.querySelector("#member-id").value = member?.id || "";
  document.querySelector("#member-name").value = member?.name || "";
  document.querySelector("#member-role").value = member?.role || "";
  document.querySelector("#member-number").value = member?.number ?? "";
  document.querySelector("#member-contact").value = member?.contact || "";
  document.querySelector("#member-dialog-title").textContent = t(
    member ? "editMemberTitle" : "addMemberTitle",
  );
  document.querySelector("#save-member-button").textContent = t(
    member ? "saveChanges" : "addMemberSubmit",
  );
  draftPhoto = member?.photo || "";
  updatePhotoPreview(draftPhoto);
  memberDialog.showModal();
  document.querySelector("#member-name").focus();
}

function normalizeBulkRole(value, fallbackRole) {
  const candidate = String(value || "").trim().toLowerCase();
  if (!candidate) return fallbackRole;
  const aliases = {
    gk: "Goalkeeper",
    goalie: "Goalkeeper",
    keeper: "Goalkeeper",
    def: "Defender",
    defence: "Defender",
    defense: "Defender",
    mid: "Midfielder",
    midfield: "Midfielder",
    fwd: "Forward",
    striker: "Forward",
    attack: "Forward",
    hc: "Head Coach",
    "head coach": "Head Coach",
    assistant: "Assistant Coach",
    "assistant coach": "Assistant Coach",
    coach: "Coach",
    captain: "Captain",
    player: "Player",
    medical: "Medical Staff",
    medic: "Medical Staff",
    staff: "Medical Staff",
    manager: "Manager",
    "team manager": "Manager",
  };
  if (aliases[candidate]) return aliases[candidate];
  for (const role of VALID_ROLES) {
    if (role.toLowerCase() === candidate) return role;
  }
  for (const locale of Object.keys(TRANSLATIONS)) {
    for (const [role, key] of Object.entries(ROLE_TRANSLATION_KEYS)) {
      const label = TRANSLATIONS[locale]?.[key];
      if (label && label.toLowerCase() === candidate) return role;
    }
  }
  return "";
}

function splitBulkCells(line) {
  const trimmed = line.trim();
  if (trimmed.includes("\t")) {
    return trimmed
      .split("\t")
      .map((cell) => cell.trim().replace(/^"(.*)"$/, "$1"));
  }
  const separator = trimmed.includes(",")
    ? ","
    : trimmed.includes(";")
      ? ";"
      : "";
  if (!separator) return [trimmed];
  const cells = [];
  let current = "";
  let quoted = false;
  for (let index = 0; index < trimmed.length; index += 1) {
    const character = trimmed[index];
    if (character === '"') {
      if (quoted && trimmed[index + 1] === '"') {
        current += '"';
        index += 1;
      } else {
        quoted = !quoted;
      }
    } else if (character === separator && !quoted) {
      cells.push(current.trim());
      current = "";
    } else {
      current += character;
    }
  }
  cells.push(current.trim());
  return cells;
}

function parseBulkMemberLines(text, defaultRole) {
  const rows = [];
  const seen = new Set(
    data.members
      .map((member) => member.name.trim().toLowerCase())
      .filter(Boolean),
  );
  const lines = String(text || "").replace(/\r/g, "").split("\n");
  let firstDataRow = true;
  let overflow = false;

  for (let index = 0; index < lines.length; index += 1) {
    const trimmed = lines[index].trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    if (rows.length >= BULK_MEMBER_LIMIT) {
      overflow = true;
      break;
    }
    const cells = splitBulkCells(trimmed);
    if (firstDataRow) {
      firstDataRow = false;
      const header = (cells[0] || "").toLowerCase();
      if (
        ["name", "full name", "fullname", "ឈ្មោះ", "ឈ្មោះពេញ"].includes(header)
      ) {
        continue;
      }
    }

    let name = (cells[0] || "").replace(/\s+/g, " ").trim();
    let roleText = (cells[1] || "").trim();
    let numberText = (cells[2] || "").trim();
    const contact = (cells[3] || "").trim();

    if (roleText && /^#?\d{1,2}$/.test(roleText) && !numberText) {
      numberText = roleText;
      roleText = "";
    }

    const role = normalizeBulkRole(roleText, defaultRole);
    const number = numberText.replace(/^#/, "").trim();
    let error = "";
    if (!name) error = "bulkMissingName";
    else if (name.length > 60) name = name.slice(0, 60);
    if (!error && number && (!/^\d{1,2}$/.test(number) || Number(number) > 99)) {
      error = "bulkInvalidNumber";
    }
    if (!error && !role) error = "bulkInvalidRole";
    if (!error && seen.has(name.toLowerCase())) error = "bulkDuplicate";
    if (!error) seen.add(name.toLowerCase());

    rows.push({
      line: index + 1,
      name,
      role,
      number,
      contact: contact.slice(0, 30),
      displayRole: role || roleText,
      error,
    });
  }

  return {
    rows,
    valid: rows.filter((row) => !row.error),
    invalid: rows.filter((row) => row.error),
    overflow,
  };
}

function renderBulkMemberPreview() {
  const input = document.querySelector("#bulk-members-input");
  const defaultRole =
    document.querySelector("#bulk-default-role").value || "Player";
  const parsed = parseBulkMemberLines(input.value, defaultRole);
  bulkPreviewState = parsed;
  const preview = document.querySelector("#bulk-preview");
  const body = document.querySelector("#bulk-preview-body");
  const error = document.querySelector("#bulk-member-error");
  const submit = document.querySelector("#bulk-add-submit");
  const summary = document.querySelector("#bulk-preview-summary");

  document.querySelector("#bulk-ready-count").textContent = localizeDigits(
    parsed.valid.length,
  );
  preview.hidden = parsed.rows.length === 0;
  summary.textContent =
    parsed.rows.length === 0
      ? ""
      : t("bulkPreviewSummary", {
          ready: localizeDigits(parsed.valid.length),
          skipped: localizeDigits(parsed.invalid.length),
        });

  body.innerHTML = parsed.rows
    .map((row) => {
      const status = row.error
        ? `${t("bulkLine", { line: localizeDigits(row.line) })} · ${t(row.error)}`
        : t("bulkStatusReady");
      return `<tr class="${row.error ? "bulk-row-invalid" : ""}">
        <td>${escapeHtml(row.name || "—")}</td>
        <td>${escapeHtml(
          row.displayRole ? translatedRole(row.role || row.displayRole) : "—",
        )}</td>
        <td>${escapeHtml(row.number ? localizeDigits(row.number) : "—")}</td>
        <td>${escapeHtml(row.contact || "—")}</td>
        <td><span class="bulk-status ${
          row.error ? "bulk-status-invalid" : "bulk-status-ready"
        }">${escapeHtml(status)}</span></td>
      </tr>`;
    })
    .join("");

  submit.textContent =
    parsed.valid.length > 0
      ? parsed.valid.length === 1
        ? t("bulkAddSubmitOne")
        : t("bulkAddSubmit", {
            count: localizeDigits(parsed.valid.length),
          })
      : t("bulkAddSubmitDefault");
  submit.disabled = parsed.valid.length === 0;

  error.hidden = true;
  if (parsed.overflow) {
    error.textContent = t("bulkOverLimit");
    error.hidden = false;
  } else if (parsed.invalid.length > 0) {
    error.textContent = t("bulkSkippedNote");
    error.hidden = false;
  }
}

function openBulkMemberDialog() {
  if (!canManageCurrentTeam()) return;
  document.querySelector("#bulk-member-form").reset();
  document.querySelector("#bulk-default-role").value = "Player";
  document.querySelector("#bulk-members-input").value = "";
  bulkPreviewState = { rows: [], valid: [], invalid: [], overflow: false };
  renderBulkMemberPreview();
  bulkMemberDialog.showModal();
  document.querySelector("#bulk-members-input").focus();
}

function openClubDialog() {
  if (!canManageCurrentTeam()) return;
  document.querySelector("#club-error").hidden = true;
  document.querySelector("#club-name-input").value = data.club.name;
  document.querySelector("#club-location-input").value = data.club.location;
  draftClubLogo = data.club.logo || "";
  document.querySelector("#club-logo-input").value = "";
  document.querySelector("#club-logo-name").textContent =
    draftClubLogo ? t("uploadNameSelected") : t("logoHelp");
  document.querySelector("#club-phone-input").value = data.club.phone;
  document.querySelector("#club-telegram-input").value = data.club.telegram;
  clubDialog.showModal();
  document.querySelector("#club-name-input").focus();
}

function base64ToBytes(value) {
  return Uint8Array.from(atob(value), (character) => character.charCodeAt(0));
}

function createId() {
  if (typeof globalThis.crypto?.randomUUID === "function") {
    return globalThis.crypto.randomUUID();
  }
  if (typeof globalThis.crypto?.getRandomValues === "function") {
    const bytes = globalThis.crypto.getRandomValues(new Uint8Array(16));
    bytes[6] = (bytes[6] & 0x0f) | 0x40;
    bytes[8] = (bytes[8] & 0x3f) | 0x80;
    const hex = [...bytes].map((byte) => byte.toString(16).padStart(2, "0")).join("");
    return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`;
  }
  throw new Error("This browser does not support secure ID generation.");
}

function isValidBase64Bytes(value, expectedLength) {
  if (typeof value !== "string" || !/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(value)) {
    return false;
  }
  try {
    return base64ToBytes(value).length === expectedLength;
  } catch {
    return false;
  }
}

async function verifyLegacyPassword(password, salt, expectedHash) {
  const encoder = new TextEncoder();
  const passwordBytes = encoder.encode(password);
  let derived;
  if (globalThis.crypto?.subtle) {
    const key = await crypto.subtle.importKey("raw", passwordBytes, "PBKDF2", false, ["deriveBits"]);
    derived = new Uint8Array(await crypto.subtle.deriveBits(
      { name: "PBKDF2", salt, iterations: 210000, hash: "SHA-256" },
      key,
      256,
    ));
  } else {
    derived = await derivePbkdf2Sha256(passwordBytes, salt, 210000);
  }
  return btoa(String.fromCharCode(...derived)) === expectedHash;
}

const SHA256_ROUND_CONSTANTS = new Uint32Array([
  0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5,
  0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174,
  0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
  0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967,
  0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
  0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
  0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3,
  0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2,
]);

function sha256(bytes) {
  const paddedLength = Math.ceil((bytes.length + 9) / 64) * 64;
  const padded = new Uint8Array(paddedLength);
  padded.set(bytes);
  padded[bytes.length] = 0x80;
  const view = new DataView(padded.buffer);
  const bitLength = bytes.length * 8;
  view.setUint32(paddedLength - 8, Math.floor(bitLength / 0x100000000), false);
  view.setUint32(paddedLength - 4, bitLength >>> 0, false);

  const state = new Uint32Array([
    0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a,
    0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19,
  ]);
  const words = new Uint32Array(64);
  const rotateRight = (value, count) => (value >>> count) | (value << (32 - count));
  for (let offset = 0; offset < paddedLength; offset += 64) {
    for (let index = 0; index < 16; index += 1) {
      words[index] = view.getUint32(offset + index * 4, false);
    }
    for (let index = 16; index < 64; index += 1) {
      const x = words[index - 15];
      const y = words[index - 2];
      const s0 = rotateRight(x, 7) ^ rotateRight(x, 18) ^ (x >>> 3);
      const s1 = rotateRight(y, 17) ^ rotateRight(y, 19) ^ (y >>> 10);
      words[index] = (words[index - 16] + s0 + words[index - 7] + s1) >>> 0;
    }
    let a = state[0];
    let b = state[1];
    let c = state[2];
    let d = state[3];
    let e = state[4];
    let f = state[5];
    let g = state[6];
    let h = state[7];
    for (let index = 0; index < 64; index += 1) {
      const sum1 = rotateRight(e, 6) ^ rotateRight(e, 11) ^ rotateRight(e, 25);
      const choice = (e & f) ^ (~e & g);
      const temp1 = (h + sum1 + choice + SHA256_ROUND_CONSTANTS[index] + words[index]) >>> 0;
      const sum0 = rotateRight(a, 2) ^ rotateRight(a, 13) ^ rotateRight(a, 22);
      const majority = (a & b) ^ (a & c) ^ (b & c);
      const temp2 = (sum0 + majority) >>> 0;
      h = g;
      g = f;
      f = e;
      e = (d + temp1) >>> 0;
      d = c;
      c = b;
      b = a;
      a = (temp1 + temp2) >>> 0;
    }
    state[0] = (state[0] + a) >>> 0;
    state[1] = (state[1] + b) >>> 0;
    state[2] = (state[2] + c) >>> 0;
    state[3] = (state[3] + d) >>> 0;
    state[4] = (state[4] + e) >>> 0;
    state[5] = (state[5] + f) >>> 0;
    state[6] = (state[6] + g) >>> 0;
    state[7] = (state[7] + h) >>> 0;
  }
  const result = new Uint8Array(32);
  const resultView = new DataView(result.buffer);
  state.forEach((value, index) => resultView.setUint32(index * 4, value, false));
  return result;
}

function hmacSha256(key, message) {
  let normalizedKey = key;
  if (normalizedKey.length > 64) normalizedKey = sha256(normalizedKey);
  const innerInput = new Uint8Array(64 + message.length);
  const outerInput = new Uint8Array(96);
  for (let index = 0; index < 64; index += 1) {
    const byte = normalizedKey[index] || 0;
    innerInput[index] = byte ^ 0x36;
    outerInput[index] = byte ^ 0x5c;
  }
  innerInput.set(message, 64);
  outerInput.set(sha256(innerInput), 64);
  return sha256(outerInput);
}

async function derivePbkdf2Sha256(password, salt, iterations) {
  const firstBlockInput = new Uint8Array(salt.length + 4);
  firstBlockInput.set(salt);
  firstBlockInput.set([0, 0, 0, 1], salt.length);
  let current = hmacSha256(password, firstBlockInput);
  const derived = current.slice();
  for (let iteration = 1; iteration < iterations; iteration += 1) {
    current = hmacSha256(password, current);
    for (let index = 0; index < derived.length; index += 1) {
      derived[index] ^= current[index];
    }
    if (iteration % 1024 === 0) {
      await new Promise((resolve) => setTimeout(resolve, 0));
    }
  }
  return derived;
}

const EMAIL_PATTERN =
  /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)+$/i;

function normalizeEmail(value) {
  const email = value.trim().toLowerCase();
  if (email.length > 254 || !EMAIL_PATTERN.test(email)) return "";
  const [localPart, domain] = email.split("@");
  if (localPart.length > 64 || /^\.|\.\.|\.$/.test(localPart)) return "";
  if (!/^[a-z]{2,}$/.test(domain.split(".").pop())) return "";
  return email;
}

function normalizePhone(value) {
  const compact = value.trim().replace(/[\s().-]/g, "");
  if (!/^\+?[1-9]\d{7,14}$/.test(compact)) return "";
  return compact.startsWith("+") ? compact : `+${compact}`;
}

function findAccountByIdentifier(identifier) {
  const value = identifier.trim();
  if (!value) return null;
  const normalized = value.toLowerCase();
  const byUsername = store.users.find((user) => user.username.toLowerCase() === normalized);
  if (byUsername) return byUsername;
  if (value.includes("@")) {
    const email = normalizeEmail(value);
    return email
      ? store.users.find((user) => (user.email || "").toLowerCase() === email) || null
      : null;
  }
  const phone = normalizePhone(value);
  return phone
    ? store.users.find((user) => user.phone === phone) || null
    : null;
}

function contactInUse(type, value, exceptId = "") {
  return store.users.some((user) => {
    if (user.id === exceptId) return false;
    return type === "email"
      ? (user.email || "").toLowerCase() === value
      : user.phone === value;
  });
}

function usernameFromContact(type, value) {
  const raw = type === "email" ? value.split("@")[0] : value.replace(/\D/g, "");
  let base = raw.toLowerCase().replace(/[^a-z0-9._-]/g, "").slice(0, 18) || "member";
  if (base.length < 3) base = `${base}fan`.slice(0, 18);
  let candidate = base;
  let suffix = 1;
  while (store.users.some((user) => user.username.toLowerCase() === candidate)) {
    suffix += 1;
    candidate = `${base.slice(0, 18 - String(suffix).length)}${suffix}`;
  }
  return candidate;
}

function showAuthError(message) {
  const error = document.querySelector("#auth-error");
  error.textContent = message;
  error.hidden = false;
}

let authMode = "login";
let authScreenInView = false;

function setAuthMode(mode) {
  authMode = mode === "register" ? "register" : "login";
  const registering = authMode === "register";
  const signedIn = Boolean(activeAccount);
  const loginButton = document.querySelector("#auth-mode-login");
  const registerButton = document.querySelector("#auth-mode-register");
  loginButton.classList.toggle("is-active", !registering);
  loginButton.setAttribute("aria-selected", String(!registering));
  registerButton.classList.toggle("is-active", registering);
  registerButton.setAttribute("aria-selected", String(registering));
  document.querySelector(".auth-mode-switch").hidden = signedIn;
  document.querySelector("#auth-form").hidden = signedIn || registering;
  document.querySelector("#register-form").hidden = signedIn || !registering;
  document.querySelector("#auth-title").textContent = registering
    ? t("registerTitle")
    : t("teamLogin");
  document.querySelector(".auth-panel-intro").textContent = registering
    ? t("registerIntro")
    : t("authPanelIntro");
  if (!signedIn) {
    document.querySelector("#auth-error").hidden = true;
    document.querySelector("#register-error").hidden = true;
  }
}

function syncStaffLoginFloat() {
  const authRect = document.querySelector("#auth-screen").getBoundingClientRect();
  authScreenInView = authRect.top < window.innerHeight - 60 && authRect.bottom > 60;
  document.querySelector("#staff-login-float").hidden =
    Boolean(activeAccount) || authScreenInView;
}

let staffLoginFloatFrame = 0;
window.addEventListener("scroll", () => {
  if (staffLoginFloatFrame) return;
  staffLoginFloatFrame = requestAnimationFrame(() => {
    staffLoginFloatFrame = 0;
    syncStaffLoginFloat();
  });
}, { passive: true });
window.addEventListener("resize", syncStaffLoginFloat);

document.querySelector("#auth-mode-login").addEventListener("click", () => {
  setAuthMode("login");
  document.querySelector("#auth-username").focus();
});
document.querySelector("#auth-mode-register").addEventListener("click", () => {
  setAuthMode("register");
  document.querySelector("#register-name").focus();
});

async function authenticate(event) {
  event.preventDefault();
  const identifier = document.querySelector("#auth-username").value.trim();
  const password = document.querySelector("#auth-password").value;
  const error = document.querySelector("#auth-error");
  error.hidden = true;

  if (!identifier || !password) {
    showAuthError(t("enterCredentials"));
    return;
  }
  const submitButton = document.querySelector("#auth-submit");
  submitButton.disabled = true;
  try {
    const existing = findAccountByIdentifier(identifier);
    if (!existing) {
      showAuthError(t("signInIncorrect"));
      return;
    }
    let verified = typeof existing.password === "string" && existing.password === password;
    const usesLegacyCredentials = typeof existing.password !== "string";
    if (usesLegacyCredentials) {
      if (!isValidBase64Bytes(existing.passwordSalt, 16) ||
          !isValidBase64Bytes(existing.passwordHash, 32)) {
        showAuthError(t("signInDamaged"));
        return;
      }
      verified = await verifyLegacyPassword(
        password,
        base64ToBytes(existing.passwordSalt),
        existing.passwordHash,
      );
    }
    if (!verified) {
      showAuthError(t("signInIncorrect"));
      return;
    }
    const legacyCredentials = usesLegacyCredentials
      ? { passwordSalt: existing.passwordSalt, passwordHash: existing.passwordHash }
      : null;
    if (usesLegacyCredentials) {
      existing.password = password;
      delete existing.passwordSalt;
      delete existing.passwordHash;
    }
    activeAccount = existing;

    const team = currentTeam();
    data = team ? { club: team.club, members: team.members } : structuredClone(DEFAULT_DATA);
    if (!persistData()) {
      if (legacyCredentials) {
        delete existing.password;
        Object.assign(existing, legacyCredentials);
      }
      activeAccount = null;
      return;
    }
    document.querySelector("#auth-form").reset();
    render();
    stopStadiumAmbience();
    playWhistle();
  } catch (caught) {
    console.error("Could not complete local account authentication.", caught);
    showAuthError(t("signInFailed"));
  } finally {
    submitButton.disabled = false;
  }
}

document.querySelector("#auth-form").addEventListener("submit", authenticate);

document.querySelector("#register-form").addEventListener("submit", (event) => {
  event.preventDefault();
  if (activeAccount) return;
  const name = document.querySelector("#register-name").value.trim();
  const contactValue = document.querySelector("#register-contact").value.trim();
  const password = document.querySelector("#register-password").value;
  const confirmation = document.querySelector("#register-password-confirm").value;
  const error = document.querySelector("#register-error");
  const fail = (key) => {
    error.textContent = t(key);
    error.hidden = false;
  };
  error.hidden = true;
  if (name.length < 2) return fail("registerInvalidName");
  if (!contactValue) return fail("registerInvalidContact");
  let contactType = "";
  let contact = "";
  if (contactValue.includes("@")) {
    contact = normalizeEmail(contactValue);
    if (!contact) return fail("registerInvalidEmail");
    contactType = "email";
  } else {
    contact = normalizePhone(contactValue);
    if (!contact) return fail("registerInvalidPhone");
    contactType = "phone";
  }
  if (password.length < 8) return fail("registerPasswordShort");
  if (password !== confirmation) return fail("registerPasswordMismatch");
  if (contactInUse(contactType, contact)) return fail("registerContactExists");
  const submitButton = document.querySelector("#register-submit");
  submitButton.disabled = true;
  try {
    const user = {
      id: createId(),
      username: usernameFromContact(contactType, contact),
      name,
      email: contactType === "email" ? contact : "",
      phone: contactType === "phone" ? contact : "",
      password,
      contactVerified: false,
      systemRole: "viewer",
      teamCreationRole: "",
      teamCreationUsed: false,
      teamRoles: {},
      createdAt: new Date().toISOString(),
    };
    store.users.push(user);
    activeAccount = user;
    const team = currentTeam();
    data = team ? { club: team.club, members: team.members } : structuredClone(DEFAULT_DATA);
    if (!persistData()) {
      store.users = store.users.filter((item) => item.id !== user.id);
      activeAccount = null;
      fail("registerFailed");
      return;
    }
    document.querySelector("#register-form").reset();
    render();
    stopStadiumAmbience();
    playCheer();
    showToast(t("registerWelcome", { name }));
  } catch (caught) {
    console.error("Could not create the member account.", caught);
    fail("registerFailed");
  } finally {
    submitButton.disabled = false;
  }
});

function logout() {
  activeAccount = null;
  store.activeUserId = "";
  persistData();
  render();
}
document.querySelector("#logout-button").addEventListener("click", logout);
document.querySelector("#top-logout-button").addEventListener("click", logout);
document.querySelector("#bottom-logout-button").addEventListener("click", logout);
document.querySelector("#create-account-button").addEventListener("click", () => {
  if (!isAdmin() && !canManageTeamAccess()) return;
  accountForm.reset();
  document.querySelector("#account-error").hidden = true;
  for (const option of document.querySelector("#new-account-role").options) {
    if (!isAdmin() && ["Coach", "create-team-coach"].includes(option.value)) {
      option.disabled = true;
    } else {
      option.disabled = !currentTeam() &&
        ["Team Manager", "Coach", "Captain"].includes(option.value);
    }
  }
  accountDialog.showModal();
  document.querySelector("#new-account-username").focus();
});
accountForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!isAdmin() && !canManageTeamAccess()) return;
  const username = document.querySelector("#new-account-username").value.trim();
  const password = document.querySelector("#new-account-password").value;
  const role = document.querySelector("#new-account-role").value;
  const error = document.querySelector("#account-error");
  error.hidden = true;
  if (!isAdmin() && !["Viewer", "Team Manager", "Captain"].includes(role)) {
    error.textContent = t("roleNotAllowed");
    error.hidden = false;
    return;
  }
  if (TEAM_MANAGEMENT_ROLES.has(role) && !currentTeam()) {
    error.textContent = t("chooseTeam");
    error.hidden = false;
    return;
  }
  if (!/^[a-zA-Z0-9._-]{3,24}$/.test(username) || password.length < 8) {
    error.textContent = t("usernamePasswordInvalid");
    error.hidden = false;
    return;
  }
  if (store.users.some((user) => user.username.toLowerCase() === username.toLowerCase())) {
    error.textContent = t("usernameExists");
    error.hidden = false;
    return;
  }
  const user = {
    id: createId(),
    username,
    password,
    systemRole: "viewer",
    teamCreationRole: isAdmin() && role === "create-team-coach" ? "Coach" : "",
    teamCreationUsed: false,
    teamRoles: {},
  };
  if (currentTeam() && TEAM_MANAGEMENT_ROLES.has(role)) {
    user.teamRoles[currentTeamId] = role;
    user.teamCreationUsed = true;
  }
  store.users.push(user);
  if (!persistData()) {
    store.users = store.users.filter((item) => item.id !== user.id);
    return;
  }
  accountDialog.close();
  render();
  showToast(t("accountCreated", { username }));
});
function openTeamDialog() {
  if (!canCreateTeam()) return;
  teamForm.reset();
  draftTeamLogo = "";
  const logoPreview = document.querySelector("#team-logo-preview");
  logoPreview.classList.remove("has-logo");
  logoPreview.innerHTML = `<span class="team-logo-preview-empty">${escapeHtml(t("logoPreview"))}</span>`;
  document.querySelector("#team-logo-name").textContent = t("logoHelp");
  document.querySelector("#team-error").hidden = true;
  document.querySelector("#team-category-input").value = "football";
  teamDialog.showModal();
  document.querySelector("#team-name-input").focus();
}

document.querySelector("#management-create-team-button").addEventListener("click", openTeamDialog);
document.querySelector("#management-edit-team-button").addEventListener("click", openClubDialog);
document.querySelector("#management-add-member-button").addEventListener("click", () => {
  openMemberDialog();
});
document
  .querySelector("#management-bulk-add-members-button")
  .addEventListener("click", openBulkMemberDialog);
teamForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!canCreateTeam()) return;
  const name = document.querySelector("#team-name-input").value.trim();
  const telegram = document.querySelector("#team-telegram-input").value.trim();
  const error = document.querySelector("#team-error");
  if (!name) {
    error.textContent = t("teamNameRequired");
    error.hidden = false;
    return;
  }
  if (telegram && !safeTelegramUrl(telegram)) {
    error.textContent = t("invalidTelegram");
    error.hidden = false;
    return;
  }
  const team = {
    id: createId(),
    club: {
      name,
      location: document.querySelector("#team-location-input").value.trim(),
      logo: draftTeamLogo,
      phone: document.querySelector("#team-phone-input").value.trim(),
      telegram,
      category: document.querySelector("#team-category-input").value,
      accentColor: TEAM_CATEGORY_COLORS[document.querySelector("#team-category-input").value],
      description: "",
      foundedYear: "",
    },
    members: [],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    views: 0,
  };
  const previousTeams = store.teams.slice();
  const previousTeamId = currentTeamId;
  const previousData = data;
  const previousCreationRole = activeAccount.teamCreationRole;
  const previousCreationUsed = activeAccount.teamCreationUsed;
  store.teams.push(team);
  if (!isAdmin() && activeAccount.teamCreationRole === "Coach") {
    activeAccount.teamRoles[team.id] = activeAccount.teamCreationRole;
    activeAccount.teamCreationRole = "";
    activeAccount.teamCreationUsed = true;
  }
  if (!persistData()) {
    store.teams = previousTeams;
    if (!isAdmin()) {
      delete activeAccount.teamRoles[team.id];
      activeAccount.teamCreationRole = previousCreationRole;
      activeAccount.teamCreationUsed = previousCreationUsed;
    }
    currentTeamId = previousTeamId;
    data = previousData;
    return;
  }
  directoryHighlightId = team.id;
  currentTeamId = "";
  data = structuredClone(DEFAULT_DATA);
  render();
  teamDialog.close();
  showToast(t("teamCreated"));
  playCheer();
  if (window.location.hash !== "#teams") window.location.hash = "#teams";
  requestAnimationFrame(() => {
    const card = [...document.querySelectorAll("[data-team-card]")]
      .find((item) => item.dataset.teamCard === team.id);
    card?.scrollIntoView({ behavior: "smooth", block: "center" });
    window.setTimeout(() => {
      card?.classList.remove("team-card-highlight");
      if (directoryHighlightId === team.id) directoryHighlightId = "";
    }, 2000);
  });
});
document.querySelector("#teams-grid").addEventListener("click", (event) => {
  const openButton = event.target.closest("[data-team-open]");
  const editButton = event.target.closest("[data-team-edit]");
  const deleteButton = event.target.closest("[data-team-delete]");
  if (editButton && canManageTeam(editButton.dataset.teamEdit)) {
    selectTeam(editButton.dataset.teamEdit);
    openClubDialog();
    return;
  }
  if (openButton) {
    selectTeam(openButton.dataset.teamOpen);
    return;
  }
  if (deleteButton && isAdmin()) {
    const team = store.teams.find((item) => item.id === deleteButton.dataset.teamDelete);
    if (!team || !window.confirm(t("deleteTeamConfirm", { name: team.club.name }))) return;
    const oldTeams = store.teams;
    const oldTeamRoles = store.users.map((user) => ({ user, roles: { ...user.teamRoles } }));
    store.teams = store.teams.filter((item) => item.id !== team.id);
    for (const user of store.users) delete user.teamRoles[team.id];
    const deletedCurrentTeam = currentTeamId === team.id;
    if (deletedCurrentTeam) {
      currentTeamId = "";
      data = structuredClone(DEFAULT_DATA);
    }
    if (!persistData()) {
      store.teams = oldTeams;
      for (const { user, roles } of oldTeamRoles) user.teamRoles = roles;
      return;
    }
    render();
    if (deletedCurrentTeam && window.location.hash !== "#teams") {
      window.location.hash = "#teams";
    }
    showToast(t("teamDeleted"));
  }
});
document.querySelector("#banner-ball").addEventListener("click", (event) => {
  const ball = event.currentTarget;
  ball.querySelectorAll(".confetti-particle").forEach((particle) => particle.remove());
  for (let index = 0; index < 12; index += 1) {
    const particle = document.createElement("span");
    particle.className = "confetti-particle";
    particle.style.setProperty("--particle-angle", `${index * 30}deg`);
    particle.style.setProperty("--particle-color", ["#d4a03a", "#faf8f3", "#9acb74"][index % 3]);
    ball.append(particle);
    window.setTimeout(() => particle.remove(), 1000);
  }
});
document.querySelector("#account-roles").addEventListener("change", (event) => {
  const systemRoleSelect = event.target.closest("[data-system-role]");
  if (systemRoleSelect) {
    if (!isOwner()) return;
    const user = store.users.find((item) => item.id === systemRoleSelect.dataset.systemRole);
    if (!user || user.systemRole === "owner") return;
    const previousRole = user.systemRole;
    const nextRole = ["admin", "developer", "viewer"].includes(systemRoleSelect.value)
      ? systemRoleSelect.value
      : "viewer";
    user.systemRole = nextRole;
    if (!persistData()) {
      user.systemRole = previousRole;
      systemRoleSelect.value = previousRole;
      return;
    }
    render();
    showToast(
      t(nextRole === "admin"
        ? "adminPromoted"
        : nextRole === "developer"
          ? "developerPromoted"
          : "adminDemoted"),
    );
    return;
  }
  const select = event.target.closest("[data-account-role]");
  if (!select || !currentTeamId || (!isAdmin() && !canManageTeamAccess())) return;
  const user = store.users.find((item) => item.id === select.dataset.accountRole);
  if (!user || user.systemRole !== "viewer" || (!isAdmin() && user.id === activeAccount.id)) return;
  const allowedRoles = isAdmin()
    ? new Set(["Viewer", "Coach", "Captain", "Team Manager"])
    : new Set(["Viewer", "Captain", "Team Manager"]);
  if (!allowedRoles.has(select.value)) {
    render();
    return;
  }
  const previousCreationRole = user.teamCreationRole;
  const previousCreationUsed = user.teamCreationUsed;
  if (
    TEAM_MANAGEMENT_ROLES.has(select.value) &&
    getAssignedManagementTeamId(user) &&
    getAssignedManagementTeamId(user) !== currentTeamId
  ) {
    showToast(t("teamRoleLimit"));
    render();
    return;
  }
  const previousRole = user.teamRoles[currentTeamId];
  if (TEAM_MANAGEMENT_ROLES.has(select.value)) {
    user.teamRoles[currentTeamId] = select.value;
    user.teamCreationRole = "";
    user.teamCreationUsed = true;
  } else {
    delete user.teamRoles[currentTeamId];
  }
  if (!persistData()) {
    if (previousRole) user.teamRoles[currentTeamId] = previousRole;
    else delete user.teamRoles[currentTeamId];
    user.teamCreationRole = previousCreationRole;
    user.teamCreationUsed = previousCreationUsed;
    return;
  }
  render();
});

document.querySelector("#add-member-button").addEventListener("click", () => {
  openMemberDialog();
});
document.querySelector("#empty-add-button").addEventListener("click", () => {
  openMemberDialog();
});
document.querySelector("#empty-bulk-add-button").addEventListener("click", openBulkMemberDialog);
document
  .querySelector("#bulk-add-members-button")
  .addEventListener("click", openBulkMemberDialog);
document.querySelector("#edit-club-button").addEventListener("click", openClubDialog);
document.querySelector("#contact-edit-button").addEventListener("click", openClubDialog);
document.querySelector("#spotlight-previous").addEventListener("click", () => {
  if (!store.teams.length) return;
  spotlightIndex = (spotlightIndex - 1 + store.teams.length) % store.teams.length;
  renderSpotlight();
});
document.querySelector("#spotlight-next").addEventListener("click", () => {
  if (!store.teams.length) return;
  spotlightIndex = (spotlightIndex + 1) % store.teams.length;
  renderSpotlight();
});
document.querySelector("#spotlight-details").addEventListener("toggle", renderSpotlight);
document.querySelector("#post-composer").addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!canPublishPosts()) return;
  const message = document.querySelector("#post-message").value.trim();
  const fileInput = document.querySelector("#post-media-input");
  const files = Array.from(fileInput.files || []);
  const error = document.querySelector("#post-error");
  error.hidden = true;
  if (!message && !files.length) {
    error.textContent = t("mediaMissingMessage");
    error.hidden = false;
    return;
  }
  if (files.some((file) => !file.type.startsWith("image/") && !file.type.startsWith("video/"))) {
    error.textContent = t("chooseImageOrVideo");
    error.hidden = false;
    return;
  }
  if (files.some((file) => file.size > POST_MEDIA_MAX_BYTES)) {
    error.textContent = t("mediaTooLarge");
    error.hidden = false;
    return;
  }
  const media = files.map((file) => ({
    id: createId(),
    type: file.type,
  }));
  const post = {
    id: createId(),
    author: activeAccount.username,
    message,
    media,
    teamId: document.querySelector("#post-team-select").value,
    createdAt: new Date().toISOString(),
  };
  const previousPosts = store.posts;
  const savedMediaIds = [];
  try {
    for (const [index, file] of files.entries()) {
      await savePostMedia(media[index].id, file);
      savedMediaIds.push(media[index].id);
    }
    store.posts = [post, ...store.posts];
    if (!persistData()) {
      store.posts = previousPosts;
      for (const id of savedMediaIds) {
        try {
          await deletePostMedia(id);
        } catch (cleanupError) {
          console.error("Could not clean up an unsaved post attachment.", cleanupError);
        }
      }
      return;
    }
    document.querySelector("#post-composer").reset();
    document.querySelector("#post-media-name").textContent = t("noMediaSelected");
    renderPosts();
    showToast(t("updatePublished"));
  } catch (caught) {
    console.error("Could not publish the team update.", caught);
    store.posts = previousPosts;
    for (const id of savedMediaIds) {
      try {
        await deletePostMedia(id);
      } catch (cleanupError) {
        console.error("Could not clean up an unsaved post attachment.", cleanupError);
      }
    }
    error.textContent = t("postFailed");
    error.hidden = false;
  }
});
document.querySelector("#post-list").addEventListener("click", async (event) => {
  const button = event.target.closest("[data-post-delete]");
  if (!button) return;
  const post = store.posts.find((item) => item.id === button.dataset.postDelete);
  if (!post || (!isAdmin() && activeAccount?.username !== post.author)) return;
  if (!window.confirm(t("deleteUpdateConfirm"))) return;
  const previousPosts = store.posts;
  store.posts = store.posts.filter((item) => item.id !== post.id);
  if (!persistData()) {
    store.posts = previousPosts;
    return;
  }
  renderPosts();
  let mediaCleanupFailed = false;
  for (const attachment of post.media || []) {
    try {
      await deletePostMedia(attachment.id);
    } catch (caught) {
      console.error("Could not delete the update attachment.", caught);
      mediaCleanupFailed = true;
    }
  }
  if (mediaCleanupFailed) {
    showToast(t("updateMediaCleanupWarning"));
    return;
  }
  showToast(t("updateDeleted"));
});
document.querySelector("#post-media-input").addEventListener("change", (event) => {
  const files = Array.from(event.target.files || []);
  document.querySelector("#post-media-name").textContent = files.length === 0
    ? t("noMediaSelected")
    : files.length === 1
      ? `${files[0].name} (${(files[0].size / (1024 * 1024)).toFixed(1)} MB)`
      : t("mediaFilesSelected", { count: files.length });
  document.querySelector("#post-error").hidden = true;
});
function toggleLanguage() {
  language = language === "en" ? "km" : "en";
  try {
    localStorage.setItem(LANGUAGE_KEY, language);
  } catch (error) {
    console.error("Could not save the language preference.", error);
  }
  applyLanguage();
}
document.querySelector("#language-toggle").addEventListener("click", toggleLanguage);
document.querySelector("#auth-language-toggle").addEventListener("click", toggleLanguage);
function loadSoundPreference() {
  try {
    return localStorage.getItem(SOUND_KEY) !== "false";
  } catch {
    return true;
  }
}

function updateSoundToggle() {
  const button = document.querySelector("#auth-sound-toggle");
  if (!button) return;
  const label = document.querySelector("#auth-sound-label");
  button.setAttribute("aria-pressed", String(soundEnabled));
  button.classList.toggle("is-muted", !soundEnabled);
  if (label) label.textContent = t(soundEnabled ? "soundOn" : "soundOff");
}

function getStadiumAudio() {
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) return null;
  if (!stadiumAudio) {
    const context = new AudioContextClass();
    const master = context.createGain();
    master.gain.value = 0.7;
    master.connect(context.destination);
    stadiumAudio = { context, master, ambience: null };
  }
  if (stadiumAudio.context.state === "suspended") {
    stadiumAudio.context.resume().catch(() => {});
  }
  return stadiumAudio;
}

function startStadiumAmbience() {
  if (!soundEnabled) return;
  const audio = getStadiumAudio();
  if (!audio || audio.ambience) return;
  const { context, master } = audio;
  const buffer = context.createBuffer(1, context.sampleRate * 3, context.sampleRate);
  const samples = buffer.getChannelData(0);
  let smooth = 0;
  for (let index = 0; index < samples.length; index += 1) {
    smooth = (smooth + 0.02 * (Math.random() * 2 - 1)) / 1.02;
    samples[index] = smooth * 3.4;
  }
  const source = context.createBufferSource();
  source.buffer = buffer;
  source.loop = true;
  const filter = context.createBiquadFilter();
  filter.type = "lowpass";
  filter.frequency.value = 760;
  const gain = context.createGain();
  gain.gain.value = 0.0001;
  const lfo = context.createOscillator();
  lfo.frequency.value = 0.11;
  const lfoDepth = context.createGain();
  lfoDepth.gain.value = 0.009;
  lfo.connect(lfoDepth).connect(gain.gain);
  source.connect(filter).connect(gain).connect(master);
  const now = context.currentTime;
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(0.024, now + 2.2);
  source.start();
  lfo.start();
  audio.ambience = { source, lfo, gain };
}

function stopStadiumAmbience() {
  if (!stadiumAudio?.ambience) return;
  const { context, ambience } = stadiumAudio;
  stadiumAudio.ambience = null;
  try {
    ambience.gain.gain.cancelScheduledValues(context.currentTime);
    ambience.gain.gain.setTargetAtTime(0.0001, context.currentTime, 0.25);
    window.setTimeout(() => {
      try {
        ambience.source.stop();
      } catch {}
      try {
        ambience.lfo.stop();
      } catch {}
    }, 700);
  } catch {}
}

function playWhistle() {
  if (!soundEnabled) return;
  const audio = getStadiumAudio();
  if (!audio) return;
  const { context, master } = audio;
  const now = context.currentTime;
  for (const offset of [0, 0.17]) {
    const start = now + offset;
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(2050, start);
    oscillator.frequency.exponentialRampToValueAtTime(2380, start + 0.07);
    gain.gain.setValueAtTime(0.0001, start);
    gain.gain.exponentialRampToValueAtTime(0.07, start + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.22);
    oscillator.connect(gain).connect(master);
    oscillator.start(start);
    oscillator.stop(start + 0.24);
  }
}

function playCheer() {
  if (!soundEnabled) return;
  const audio = getStadiumAudio();
  if (!audio) return;
  const { context, master } = audio;
  const now = context.currentTime;
  const buffer = context.createBuffer(1, context.sampleRate * 1.1, context.sampleRate);
  const samples = buffer.getChannelData(0);
  for (let index = 0; index < samples.length; index += 1) {
    samples[index] = (Math.random() * 2 - 1) * (1 - index / samples.length);
  }
  const source = context.createBufferSource();
  source.buffer = buffer;
  const filter = context.createBiquadFilter();
  filter.type = "bandpass";
  filter.frequency.value = 950;
  filter.Q.value = 0.7;
  const gain = context.createGain();
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(0.055, now + 0.12);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 1);
  source.connect(filter).connect(gain).connect(master);
  source.start(now);
}

function syncStadiumSound() {
  updateSoundToggle();
  if (soundEnabled) startStadiumAmbience();
  else stopStadiumAmbience();
}

document.querySelector("#auth-sound-toggle").addEventListener("click", () => {
  soundEnabled = !soundEnabled;
  try {
    localStorage.setItem(SOUND_KEY, String(soundEnabled));
  } catch (error) {
    console.error("Could not save the sound preference.", error);
  }
  syncStadiumSound();
  if (soundEnabled) playWhistle();
});
document.querySelector("#auth-screen").addEventListener(
  "pointerdown",
  () => {
    if (soundEnabled) startStadiumAmbience();
  },
  { once: true },
);
document.querySelector("#appearance-toggle").addEventListener("click", () => {
  updateBackgroundPreview();
  appearanceDialog.showModal();
});
document.querySelector("#background-color-input").addEventListener("input", (event) => {
  const color = event.currentTarget.value;
  if (!/^#[\da-f]{6}$/i.test(color)) return;
  saveWorkspaceBackground({ mode: "color", color, image: "" });
});
document.querySelector("#background-photo-input").addEventListener("change", async (event) => {
  const input = event.currentTarget;
  const file = input.files?.[0];
  if (!file) return;
  if (!/^image\/(png|jpeg|webp|gif|avif)$/.test(file.type)) {
    showToast(t("backgroundImageType"));
    input.value = "";
    return;
  }
  if (file.size > MAX_BACKGROUND_IMAGE_BYTES) {
    showToast(t("backgroundImageTooLarge"));
    input.value = "";
    return;
  }
  try {
    const image = await readImageAsDataUrl(file);
    document.querySelector("#background-status").textContent = t("scanningBackground");
    const imageTone = await scanWorkspaceImage(image);
    if (saveWorkspaceBackground({ ...workspaceBackground, mode: "photo", image, imageTone })) {
      input.value = "";
    }
  } catch (error) {
    console.error("Could not scan the selected workspace background photo.", error);
    showToast(t("backgroundImageReadFailed"));
    input.value = "";
  }
});
document.querySelector("#reset-background-button").addEventListener("click", () => {
  if (saveWorkspaceBackground({ ...DEFAULT_WORKSPACE_BACKGROUND })) {
    document.querySelector("#background-photo-input").value = "";
    showToast(t("backgroundReset"));
  }
});

document.querySelectorAll("[data-close-dialog]").forEach((button) => {
  button.addEventListener("click", () => button.closest("dialog").close());
});

for (const dialog of [memberDialog, bulkMemberDialog, clubDialog, teamDialog, accountDialog, appearanceDialog]) {
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
}

document.querySelector("#member-name").addEventListener("input", () => {
  if (!draftPhoto) updatePhotoPreview("");
});

imageInput.addEventListener("change", () => {
  const file = imageInput.files?.[0];
  if (!file) return;
  if (!file.type.startsWith("image/")) {
    showToast(t("chooseImage"));
    imageInput.value = "";
    return;
  }
  if (file.size > 2 * 1024 * 1024) {
    showToast(t("photoTooLarge"));
    imageInput.value = "";
    return;
  }

  const reader = new FileReader();
  reader.addEventListener("load", () => {
    if (typeof reader.result !== "string") {
      showToast(t("readPhotoError"));
      return;
    }
    draftPhoto = reader.result;
    updatePhotoPreview(draftPhoto);
  });

  document.querySelector("#team-logo-input").addEventListener("change", () => {
    document.querySelector("#team-error").hidden = true;
  });
  document.querySelector("#club-logo-input").addEventListener("change", () => {
    document.querySelector("#club-error").hidden = true;
  });
  reader.addEventListener("error", () => {
    showToast(t("readPhotoError"));
  });
  reader.readAsDataURL(file);
});

document.querySelector("#remove-photo").addEventListener("click", () => {
  draftPhoto = "";
  imageInput.value = "";
  updatePhotoPreview("");
});

memberForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!canManageCurrentTeam()) return;
  const name = document.querySelector("#member-name").value.trim();
  const role = document.querySelector("#member-role").value;
  const error = document.querySelector("#member-error");
  if (!name || !VALID_ROLES.has(role)) {
    error.textContent = t("memberValidation");
    error.hidden = false;
    return;
  }

  const existingId = document.querySelector("#member-id").value;
  const previous = data.members.find((member) => member.id === existingId);
  const member = {
    id: previous?.id || createId(),
    name,
    role,
    number: document.querySelector("#member-number").value,
    contact: document.querySelector("#member-contact").value.trim(),
    photo: draftPhoto,
  };
  const nextMembers = previous
    ? data.members.map((item) => (item.id === existingId ? member : item))
    : [...data.members, member];
  const previousMembers = data.members;
  data = { ...data, members: nextMembers };
  if (!persistData()) {
    data = { ...data, members: previousMembers };
    return;
  }
  render();
  memberDialog.close();
  showToast(t(previous ? "memberUpdated" : "memberAdded"));
});

bulkMemberForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!canManageCurrentTeam()) return;
  const parsed = parseBulkMemberLines(
    document.querySelector("#bulk-members-input").value,
    document.querySelector("#bulk-default-role").value || "Player",
  );
  bulkPreviewState = parsed;
  const error = document.querySelector("#bulk-member-error");

  if (!parsed.valid.length) {
    error.textContent = parsed.rows.length
      ? t("bulkNoValidRows")
      : t("bulkNoRows");
    error.hidden = false;
    return;
  }

  const previousMembers = data.members;
  const additions = parsed.valid.map((row) => ({
    id: createId(),
    name: row.name,
    role: row.role,
    number: row.number,
    contact: row.contact,
    photo: "",
  }));
  data = { ...data, members: [...previousMembers, ...additions] };
  if (!persistData()) {
    data = { ...data, members: previousMembers };
    return;
  }
  render();
  bulkMemberDialog.close();
  showToast(
    additions.length === 1
      ? t("bulkAddedOne")
      : t("bulkAdded", { count: localizeDigits(additions.length) }),
  );
});

document
  .querySelector("#bulk-members-input")
  .addEventListener("input", renderBulkMemberPreview);
document
  .querySelector("#bulk-default-role")
  .addEventListener("change", renderBulkMemberPreview);

clubForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!canManageCurrentTeam()) return;
  const name = document.querySelector("#club-name-input").value.trim();
  const telegram = document.querySelector("#club-telegram-input").value.trim();
  const error = document.querySelector("#club-error");
  if (!name) {
    error.textContent = t("clubNameRequired");
    error.hidden = false;
    return;
  }
  if (telegram && !safeTelegramUrl(telegram)) {
    error.textContent = t("invalidTelegram");
    error.hidden = false;
    return;
  }

  const previousClub = data.club;
  data = {
    ...data,
    club: {
      ...previousClub,
      name,
      location: document.querySelector("#club-location-input").value.trim(),
      logo: draftClubLogo,
      phone: document.querySelector("#club-phone-input").value.trim(),
      telegram,
    },
  };
  if (!persistData()) {
    data = { ...data, club: previousClub };
    return;
  }
  render();
  clubDialog.close();
  showToast(t("clubSaved"));
});

document.querySelector("#search-input").addEventListener("input", renderMembers);
document.querySelector("#role-filter").addEventListener("change", renderMembers);
document.querySelector("#clear-search").addEventListener("click", () => {
  document.querySelector("#search-input").value = "";
  document.querySelector("#role-filter").value = "all";
  renderMembers();
});

document.querySelector("#roster-grid").addEventListener("click", (event) => {
  if (!canManageCurrentTeam()) return;
  const button = event.target.closest("[data-action]");
  if (!button) return;
  const member = data.members.find((item) => item.id === button.dataset.id);
  if (!member) return;

  if (button.dataset.action === "edit") {
    openMemberDialog(member);
  } else if (button.dataset.action === "delete") {
    const approved = window.confirm(t("confirmRemove", { name: member.name }));
    if (!approved) return;
    const previousMembers = data.members;
    data = {
      ...data,
      members: data.members.filter((item) => item.id !== member.id),
    };
    if (!persistData()) {
      data = { ...data, members: previousMembers };
      return;
    }
    render();
    showToast(t("memberRemoved", { name: member.name }));
  }
});

activeAccount = null;
currentTeamId = "";
data = structuredClone(DEFAULT_DATA);
applyLanguage();
renderRouteFromHash();