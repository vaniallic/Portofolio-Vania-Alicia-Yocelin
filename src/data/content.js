// ─────────────────────────────────────────────────────────────
//  All the words on the website live here.
//  Change text, links, skills, experience or projects in this file
//  and the page updates automatically. No need to touch the layout.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Vania',
  fullName: 'Vania Alicia Yocelin',
  role: 'Computer Science Student',
  tagline: 'The girl behind the code',
  landingLine: 'Where code meets curiosity and creativity.',
  email: 'vania.yocelin@binus.ac.id',
  linkedin: 'https://www.linkedin.com/in/vania-alicia-yocelin',
  github: 'https://github.com/vaniallic',
  // Put your CV file in the /public folder with this exact name
  cv: '/Vania-Alicia-Yocelin-CV.pdf',
  location: 'Jakarta, Indonesia',
};

// Contact form (the "Contact" page).
// To receive messages straight in your inbox without opening the visitor's email app:
// 1. go to https://web3forms.com, enter your email, and copy the "Access Key" they send you
// 2. paste it below. Until then, the form opens the visitor's email app with everything filled in.
export const contactForm = {
  accessKey: 'ec9a3a76-941e-468c-92a9-cac950c6e77b',
  needs: ['Internship opportunity', 'Freelance / project', 'Collaboration', 'Just saying hi'],
};

// The three numbers inside the book on the first screen
export const stats = [
  { value: 3, suffix: '', label: 'live apps' },
  { value: 35, suffix: '+', label: 'tools & skills' },
  { value: 2, suffix: '+', label: 'years of coding' },
];

/* ─────────────── ABOUT ─────────────── */
export const about = {
  title: 'Every project starts',
  titleAccent: 'as a closed book.',
  paragraphs: [
    "I'm a Computer Science student at BINUS University, specializing in Artificial Intelligence, with a background in graphic design. I work across the full journey of a product, from understanding the problem and designing the interface to building, testing, and deploying it.",
    "Beyond the code, I lead teams in the BINUS Cyber Security Community, where I've learned to plan, communicate clearly, and deliver results with other people.",
  ],
  chips: ['UI/UX Design', 'Leadership', 'Public Speaking', 'Event Management', 'Teamwork'],
  facts: [
    { label: 'Currently', value: 'Computer Science, BINUS University · Class of 2028', color: 'opal' },
    { label: 'Based in', value: 'Jakarta, Indonesia', color: 'fae' },
    { label: 'Open to', value: 'Front-end & UI/UX internships, open to full-stack and AI/ML engineer roles', color: 'blood' },
    { label: 'Strengths', value: 'UI/UX design · Front-end development · Leadership · Public speaking', color: 'opal' },
    { label: 'Currently learning', value: 'Deep Learning · Speech Recognition · Operating Systems · Network Security', color: 'fae' },
    { label: 'Languages', value: 'Indonesian · English', color: 'blood' },
  ],
};

/* ─────────────── SKILLS ───────────────
   category: 'languages' | 'web' | 'ai' | 'cloud' | 'security' | 'tools'
   icon: key in skillIcons.js     color: the logo's own colour (shown on hover)
   tone: colour of the seal       used: shown on the back of the card
   level: 'Used in projects' | 'Used in labs' | 'Coursework' | 'Daily'            */
export const skills = [
  { name: 'Python', category: 'languages', icon: 'python', color: '#3776AB', tone: 'fae', level: 'Coursework', used: 'AI coursework and model training in Colab' },
  { name: 'C', category: 'languages', icon: 'c', color: '#A8B9CC', tone: 'opal', level: 'Coursework', used: 'Algorithm and programming coursework' },
  { name: 'C++', category: 'languages', icon: 'cplusplus', color: '#00599C', tone: 'blood', level: 'Coursework', used: 'Object-oriented programming coursework' },
  { name: 'JavaScript', category: 'languages', icon: 'javascript', color: '#F7DF1E', tone: 'fae', level: 'Used in projects', used: 'Sinéfolis, MediMeet and this portfolio' },
  { name: 'Dart', category: 'languages', icon: 'dart', color: '#0175C2', tone: 'opal', level: 'Used in projects', used: 'Waste2Taste' },
  { name: 'SQL', category: 'languages', icon: 'sql', color: '#E07A5F', tone: 'blood', level: 'Used in projects', used: 'MediMeet database rules and database coursework' },
  { name: 'HTML', category: 'languages', icon: 'html', color: '#E34F26', tone: 'fae', level: 'Used in projects', used: 'Every web project I build' },
  { name: 'CSS', category: 'languages', icon: 'css', color: '#663399', tone: 'opal', level: 'Used in projects', used: 'Layouts, responsive design and animation' },

  { name: 'React', category: 'web', icon: 'react', color: '#61DAFB', tone: 'blood', level: 'Used in projects', used: 'Sinéfolis, MediMeet and this portfolio' },
  { name: 'Tailwind CSS', category: 'web', icon: 'tailwind', color: '#06B6D4', tone: 'fae', level: 'Used in projects', used: 'Sinéfolis and MediMeet' },
  { name: 'Flutter', category: 'web', icon: 'flutter', color: '#02569B', tone: 'opal', level: 'Used in projects', used: 'Waste2Taste web app' },
  { name: 'Node.js', category: 'web', icon: 'node', color: '#5FA04E', tone: 'blood', level: 'Used in projects', used: 'Waste2Taste serverless API' },
  { name: 'PWA', category: 'web', icon: 'pwa', color: '#5A0FC8', tone: 'fae', level: 'Used in projects', used: 'MediMeet and Waste2Taste, installable on phones' },

  { name: 'TensorFlow', category: 'ai', icon: 'tensorflow', color: '#FF6F00', tone: 'fae', level: 'Coursework', used: 'Deep learning coursework' },
  { name: 'Keras', category: 'ai', icon: 'keras', color: '#D00000', tone: 'opal', level: 'Coursework', used: 'Deep learning coursework' },
  { name: 'scikit-learn', category: 'ai', icon: 'sklearn', color: '#F7931E', tone: 'blood', level: 'Coursework', used: 'Machine learning coursework' },
  { name: 'NumPy', category: 'ai', icon: 'numpy', color: '#4DABCF', tone: 'fae', level: 'Coursework', used: 'Data preparation for ML and vision tasks' },
  { name: 'Pandas', category: 'ai', icon: 'pandas', color: '#E70488', tone: 'opal', level: 'Coursework', used: 'Data cleaning and analysis' },
  { name: 'OpenCV', category: 'ai', icon: 'opencv', color: '#5C3EE8', tone: 'blood', level: 'Coursework', used: 'Computer vision coursework' },
  { name: 'Matplotlib', category: 'ai', icon: 'matplotlib', color: '#11557C', tone: 'fae', level: 'Coursework', used: 'Plotting results and training curves' },

  { name: 'Supabase', category: 'cloud', icon: 'supabase', color: '#3FCF8E', tone: 'opal', level: 'Used in projects', used: 'MediMeet accounts, database and security rules' },
  { name: 'Firebase', category: 'cloud', icon: 'firebase', color: '#FFCA28', tone: 'blood', level: 'Used in projects', used: 'Waste2Taste auth, Firestore and hosting' },
  { name: 'Vercel', category: 'cloud', icon: 'vercel', color: '#1b0a22', tone: 'fae', level: 'Used in projects', used: 'Deploys and serverless functions' },
  { name: 'Gemini API', category: 'cloud', icon: 'gemini', color: '#8E75B2', tone: 'opal', level: 'Used in projects', used: 'Photo-to-ingredient scan in Waste2Taste' },

  { name: 'Linux', category: 'security', icon: 'linux', color: '#E8A400', tone: 'blood', level: 'Used in labs', used: 'TryHackMe labs and the command line' },
  { name: 'Kali Linux', category: 'security', icon: 'kali', color: '#557C94', tone: 'fae', level: 'Used in labs', used: 'TryHackMe labs' },
  { name: 'Bash', category: 'security', icon: 'bash', color: '#4EAA25', tone: 'opal', level: 'Used in labs', used: 'Scripting and terminal work in labs' },
  { name: 'Nmap', category: 'security', icon: 'nmap', color: '#4682B4', tone: 'blood', level: 'Used in labs', used: 'Port and service scanning in TryHackMe' },
  { name: 'Wireshark', category: 'security', icon: 'wireshark', color: '#1679A7', tone: 'fae', level: 'Used in labs', used: 'Packet analysis in TryHackMe' },
  { name: 'Burp Suite', category: 'security', icon: 'burp', color: '#FF6633', tone: 'opal', level: 'Used in labs', used: 'Web app testing in TryHackMe' },
  { name: 'Netcat', category: 'security', icon: 'netcat', color: '#2E8B57', tone: 'blood', level: 'Used in labs', used: 'Listeners and reverse shells in labs' },

  { name: 'Figma', category: 'tools', icon: 'figma', color: '#F24E1E', tone: 'fae', level: 'Used in projects', used: 'Designing Sinéfolis and MediMeet' },
  { name: 'VS Code', category: 'tools', icon: 'vscode', color: '#007ACC', tone: 'opal', level: 'Daily', used: 'Where everything gets written' },
  { name: 'Google Colab', category: 'tools', icon: 'colab', color: '#F9AB00', tone: 'blood', level: 'Coursework', used: 'Training AI models' },
  { name: 'Git & GitHub', category: 'tools', icon: 'github', color: '#1b0a22', tone: 'fae', level: 'Used in projects', used: 'Version control for every project' },
  { name: 'Canva', category: 'tools', icon: 'canva', color: '#00C4CC', tone: 'opal', level: 'Daily', used: 'Media and publications for organizations' },
];

export const skillFilters = [
  { id: 'languages', label: 'Languages' },
  { id: 'web', label: 'Web & Mobile' },
  { id: 'ai', label: 'AI & Data' },
  { id: 'cloud', label: 'Backend & Cloud' },
  { id: 'security', label: 'Security' },
  { id: 'tools', label: 'Tools' },
  { id: 'all', label: 'All' },
];

// "now: true" adds a "Now" tag
export const coursework = [
  {
    group: 'Artificial Intelligence',
    items: [
      { name: 'Machine Learning' },
      { name: 'Deep Learning', now: true },
      { name: 'Computer Vision' },
      { name: 'Natural Language Processing' },
      { name: 'Speech Recognition', now: true },
      { name: 'Computational Biology' },
      { name: 'Research Methodology' },
    ],
  },
  {
    group: 'Computer Science core',
    items: [
      { name: 'Algorithm & Programming' },
      { name: 'Software Engineering' },
      { name: 'Operating Systems', now: true },
      { name: 'Network Security & Fundamentals', now: true },
      { name: 'Object-Oriented Programming' },
      { name: 'Database Systems' },
    ],
  },
];

export const certifications = [
  {
    title: 'Microsoft Elevate AI Training: Azure AI Fundamentals (AI-900T00-A)',
    issuer: 'Microsoft × BINUS University × GreatNusa',
    meta: ['15 hours', 'March 2026'],
    file: '/certificates/microsoft-azure-ai-fundamentals.pdf',
    thumb: '/certificates/microsoft-azure-ai-fundamentals.webp',
  },
];

/* Accepted (author) version only, with the IEEE notice stamped on page 1.
   IEEE rules: never upload the IEEE Xplore version; always link to the published paper. */
export const publications = [
  {
    title: 'Evaluating the Robustness of Transformer-based Models Against Data Poisoning Attacks in Social Media Sentiment Analysis',
    venue: '13th ICISS 2026 · Institut Teknologi Bandung',
    authors: 'C. Augustine, D. Nicholas, V. A. Yocelin, F. R. Tambunan, Meiliana',
    role: 'Fine-tuned and evaluated RoBERTa, literature review, Related Works chapter, poster and research trailer',
    meta: ['IEEE Xplore', 'October 2026'],
    file: '/publications/iciss-2026-data-poisoning.pdf',
    thumb: '/publications/iciss-2026-data-poisoning.webp',
    xplore: 'https://ieeexplore.ieee.org/document/11715026',
  },
];

/* ─────────────── EXPERIENCE ───────────────
   category: 'leadership' | 'media' | 'volunteer' | 'achievement' (or a list of them)
   photos: files in /public/experience/<folder>/   polaroids: the two photos shown on hover (numbers)
   captions: optional, same order as photos                                                    */
export const experience = [
  {
    id: 'csc',
    category: ['leadership', 'media', 'volunteer'],
    label: 'Organization',
    title: 'Cyber Security Community',
    org: 'BINUS University · Alam Sutera',
    subtitle: 'Regional Head · Alam Sutera',
    period: '2024 – now',
    year: 'Now',
    description: 'Grew from the media team to leading the regional chapter and its leadership program.',
    roles: [
      { title: 'General Manager', where: 'LDKA', period: '27/28' },
      { title: 'Project Manager', where: 'LDKA', period: '26/27' },
      { title: 'Regional Head', where: 'Alam Sutera', period: '25/26', now: true },
      { title: 'Director, Cyber Fortify Video', where: 'Media & Publication', period: '24/25' },
    ],
    highlights: [
      'Speaker, “Branding” session · LDKCP CSC 2026: EAGLE',
      'VIP Delegate, CSC Representative · Indonesia Apps Summit 2026',
      'Event Secretary · CTF Contest CSC 2025',
      'Media & Publication Committee · Rumpun Day Penalaran, PKM CSC, company visit to CTI Group',
    ],
    folder: 'csc',
    photos: 8,
    polaroids: [6, 8],
    captions: [
      'Campfire night at LDKCP CSC',
      'LDKCP CSC 2025: ATLAS',
      'Company visit to CTI Group',
      'CSC Expo for Binusian 30',
      'Study case session at LDKA CSC 26/27',
      'LDKA CSC 26/27',
      'First meeting of CSC activists 26/27',
      'LDKCP CSC 2026: EAGLE, where I delivered the Branding session',
    ],
  },
  {
    id: 'freshman-leader',
    category: 'leadership',
    title: 'Freshman Leader',
    org: 'BINUS University · Binusian 29 & 30',
    period: '2025 & 2026',
    year: '2025',
    description: 'Led new students through BINUS campus orientation, helping them get to know campus life from day one.',
    folder: 'freshman-leader',
    photos: 10,
    polaroids: [4, 5],
  },
  {
    id: 'freshman-partner',
    category: 'leadership',
    title: 'Freshman Partner',
    org: 'BINUS University · Binusian 29 & 30',
    period: '2025 – now',
    year: '2025',
    description: 'Accompanied and led a group of freshmen through their first-year adaptation at BINUS.',
    folder: 'freshman-partner',
    photos: 5,
    polaroids: [1, 5],
  },
  {
    id: 'bulletin-board',
    category: 'achievement',
    title: '1st Place, 3D Bulletin Board',
    org: 'Museum Waja Sampai Kaputing',
    period: '2023',
    year: '2023',
    description: 'Won out of 144 participants for Indonesian Museum Day.',
    folder: 'bulletin-board',
    photos: 3,
    polaroids: [1, 2],
    captions: [
      'With our 3D bulletin board diorama',
      'The team behind the winning entry',
      '1st place, Indonesian Museum Day 2023',
    ],
  },
  {
    id: 'student-council',
    category: ['leadership', 'volunteer'],
    label: 'Leadership',
    title: 'Treasurer, Student Council',
    org: 'SMA Kristen Kanaan Banjarmasin',
    period: '2022 – 2023',
    year: '2022',
    description: "Managed the student council's budget and finances, and served on the committee of a national-scale basketball competition in South Kalimantan.",
    highlights: ['Committee · National-scale basketball competition, South Kalimantan'],
    folder: 'student-council',
    photos: 5,
    polaroids: [2, 3],
    captions: [
      'Independence Day celebration at school',
      'Bazaar at KBC XI',
      'MPLS (new student orientation) committee',
      'Media sponsor for a product booth at KBC XI',
      'LDKS, student council leadership training 2022/2023',
    ],
  },
];

export const experienceFilters = [
  { id: 'all', label: 'All' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'media', label: 'Media & Publication' },
  { id: 'volunteer', label: 'Volunteer' },
  { id: 'achievement', label: 'Achievement' },
];

/* ─────────────── PROJECTS ───────────────
   Screenshots live in /public/projects/<slug>/
   layout: 'web' = browser + phone, 'mobile' = three phones
   featured: true → shown in "Selected work". Every project appears on "All projects".                  */
export const projects = [
  {
    id: 'sinefolis',
    featured: true,
    category: 'Web',
    year: '2025 – 26',
    name: 'Sinéfolis',
    type: 'Cinema booking web app',
    summary: 'A cinema booking web app with real movies now showing in Indonesia, redesigned and rebuilt from my HCI course prototype.',
    role: 'Solo · UI/UX redesign, front-end, serverless',
    facts: [
      { label: 'Role', value: 'Solo: UI/UX redesign, front-end and serverless back-end' },
      { label: 'Origin', value: 'My Human–Computer Interaction course prototype, BINUS (Aug 2025) · rebuilt in 2026' },
      { label: 'Result', value: 'Live web app · 9 pages · real TMDB data · desktop & mobile' },
    ],
    stack: ['React', 'Vite', 'Tailwind CSS', 'React Router', 'Motion', 'TMDB API', 'Vercel Functions'],
    live: 'https://sinefolis-cinema.vercel.app',
    repo: 'https://github.com/vaniallic/sinefolis',
    layout: 'web',
    cover: '/projects/sinefolis/home.webp',
    hero: '/projects/sinefolis/showtimes.webp',
    phones: ['/projects/sinefolis/m-seats.webp', '/projects/sinefolis/m-ticket.webp'],
    story: {
      title: 'What I',
      accent: 'fixed',
      after: 'from my own prototype',
      items: [
        { problem: 'Navbar with no background', detail: 'covered content while scrolling.', fix: 'Gave it a background that blurs in on scroll.' },
        { problem: 'Dark, empty hero', detail: 'with no headline or next step.', fix: 'Featured-movie carousel with title, info and a Book button.' },
        { problem: 'No selected state', detail: 'on date and time, so users lost track.', fix: 'Clear selected states plus a step bar for the booking flow.' },
        { problem: 'Placeholder cards', detail: 'with typos and impossible dates.', fix: 'Real content: 8 cinemas in 4 cities and working promo codes.' },
      ],
    },
    galleryTitle: ['The booking', 'flow'],
    gallery: [
      { src: '/projects/sinefolis/detail.webp', cap: 'Movie detail with trailer and cast' },
      { src: '/projects/sinefolis/seats.webp', cap: 'Interactive seat map' },
      { src: '/projects/sinefolis/checkout.webp', cap: 'Checkout with seat-hold timer' },
      { src: '/projects/sinefolis/ticket.webp', cap: 'E-ticket with QR code' },
      { src: '/projects/sinefolis/promotions.webp', cap: 'Promotions with copyable codes' },
      { src: '/projects/sinefolis/home.webp', cap: 'Home with featured-movie carousel' },
    ],
  },
  {
    id: 'medimeet',
    featured: true,
    category: 'Mobile',
    year: '2025 – now',
    name: 'MediMeet',
    type: 'Healthcare booking app · PWA',
    summary: 'Find a doctor, book a consultation, pay and pick up prescriptions in one mobile-first app with real accounts and live map data.',
    role: 'Concept from a group course project · designed and built solo',
    facts: [
      { label: 'Role', value: 'Designed and built the working app on my own' },
      { label: 'Origin', value: 'Concept and Figma prototype from a group course project (Jun 2025) · built in 2026' },
      { label: 'Result', value: 'Live PWA · 17 pages · 7 database tables · 10 server functions' },
    ],
    stack: ['React 19', 'Tailwind CSS', 'React Router', 'Supabase', 'PostgreSQL', 'Leaflet', 'OpenStreetMap', 'PWA'],
    live: 'https://medimeet-mauve.vercel.app',
    repo: 'https://github.com/vaniallic/MediMeet',
    layout: 'mobile',
    cover: '/projects/medimeet/home.webp',
    phones: ['/projects/medimeet/home.webp', '/projects/medimeet/doctor.webp', '/projects/medimeet/success.webp'],
    story: {
      title: 'Technical',
      accent: 'challenges',
      after: '',
      items: [
        { problem: 'Two people, one time slot', detail: 'could book the same doctor at the same moment.', fix: 'Enforced in the database with a partial unique index; unpaid bookings release after 15 minutes.' },
        { problem: 'Keeping data private', detail: 'when every user shares one database.', fix: 'Row Level Security and SQL functions handle payment, cancellation and pickup on the server.' },
        { problem: 'Trying it without a backend', detail: 'so reviewers can open it instantly.', fix: 'Two data layers with the same interface: local demo mode and Supabase, switched by one variable.' },
        { problem: 'Real places, no paid API', detail: 'for nearby hospitals and pharmacies.', fix: 'OpenStreetMap tiles with Overpass and Nominatim, called only when needed.' },
      ],
    },
    galleryTitle: ['From search to', 'prescription'],
    gallery: [
      { src: '/projects/medimeet/landing.webp', cap: 'Landing', mobile: true },
      { src: '/projects/medimeet/home.webp', cap: 'Home and services', mobile: true },
      { src: '/projects/medimeet/specialists.webp', cap: 'Choose a specialist', mobile: true },
      { src: '/projects/medimeet/doctor.webp', cap: 'Pick a date and time', mobile: true },
      { src: '/projects/medimeet/checkout.webp', cap: 'Checkout', mobile: true },
      { src: '/projects/medimeet/pay.webp', cap: 'Simulated QRIS payment', mobile: true },
      { src: '/projects/medimeet/success.webp', cap: 'Queue number', mobile: true },
      { src: '/projects/medimeet/pharmacy.webp', cap: 'Prescription pickup', mobile: true },
    ],
    note: 'Doctors, schedules, fees and payments are simulated. Partner hospitals come from the original prototype.',
  },
  {
    id: 'waste2taste',
    featured: true,
    category: 'Mobile',
    year: '2026 – now',
    name: 'Waste2Taste',
    type: 'Food-waste app · Flutter PWA',
    summary: 'Turns what is in your fridge into dinner ideas, flags what will spoil first, and reads ingredients from a photo with Gemini.',
    role: 'Idea from a group project · rebuilt the app solo',
    facts: [
      { label: 'Role', value: 'Rebuilt the entire app on my own' },
      { label: 'Origin', value: 'Idea from a Software Engineering group project, BINUS (Jun 2026) · rebuilt solo' },
      { label: 'Result', value: 'Live PWA · 12 screens · ~4,250 lines · 68 commits' },
    ],
    stack: ['Flutter', 'Dart', 'Firebase Auth', 'Firestore', 'Node.js', 'Vercel', 'Gemini API', 'TheMealDB'],
    live: 'https://waste2taste-372f4.web.app',
    repo: 'https://github.com/vaniallic/Waste2Taste',
    layout: 'mobile',
    cover: '/projects/waste2taste/home.webp',
    phones: ['/projects/waste2taste/home.webp', '/projects/waste2taste/recipes.webp', '/projects/waste2taste/cook.webp'],
    story: {
      title: 'Technical',
      accent: 'challenges',
      after: '',
      items: [
        { problem: 'Scans failing on phone photos', detail: 'that were several MB, over the server limit.', fix: 'The app shrinks each photo to a ~1024 px JPEG before sending it.' },
        { problem: 'The AI model was retired', detail: 'and the new one was often overloaded.', fix: 'The backend tries several Gemini models in turn, 10 seconds each, set by an environment variable.' },
        { problem: 'Scan results the app did not know', detail: 'because Gemini names things freely.', fix: 'Names are matched against the online catalogue: full name first, then word by word.' },
        { problem: 'A paid API open to abuse', detail: 'since every scan costs quota.', fix: 'Key kept on the server, 10 scans per 10 minutes per IP, plus file type and size checks.' },
      ],
    },
    galleryTitle: ['From fridge to', 'dinner'],
    gallery: [
      { src: '/projects/waste2taste/onboarding.webp', cap: 'Onboarding', mobile: true },
      { src: '/projects/waste2taste/home.webp', cap: 'Fridge, spoil-first', mobile: true },
      { src: '/projects/waste2taste/add.webp', cap: 'Add ingredients', mobile: true },
      { src: '/projects/waste2taste/recipes.webp', cap: 'Cook now / Almost / Other', mobile: true },
      { src: '/projects/waste2taste/recipe.webp', cap: 'What you have and what is missing', mobile: true },
      { src: '/projects/waste2taste/cook.webp', cap: 'Cook mode with timers', mobile: true },
      { src: '/projects/waste2taste/history.webp', cap: 'Cooking history', mobile: true },
    ],
  },
  {
    id: 'pathora',
    featured: false,
    status: 'In progress',
    category: 'Web',
    year: '2026',
    name: 'Pathora',
    type: 'Bali nature & culture trip planner',
    summary: 'Plan and book nature and cultural activities in Bali led by local communities. An AI assistant builds the itinerary around weather, crowds and holidays, and hosts confirm before anyone pays.',
    role: 'Group project (4 people), Venture course · UI design, research, front-end prototype',
    facts: [
      { label: 'Role', value: 'UI design, user and market research, and the front-end prototype' },
      { label: 'Origin', value: 'Group project for the Venture course at BINUS, with Felix, Kevin and Rebecca' },
      { label: 'Status', value: 'Working prototype · sample data · simulated payment · rule-based assistant' },
    ],
    stack: ['HTML', 'CSS', 'JavaScript', 'localStorage', 'Figma'],
    live: 'https://pathoraweb.netlify.app',
    repo: 'https://github.com/liliishere/VC-Pathora',
    layout: 'web',
    cover: '/projects/pathora/home.webp',
    hero: '/projects/pathora/assistant.webp',
    phones: ['/projects/pathora/m-home.webp', '/projects/pathora/m-activity.webp'],
    story: {
      title: 'The problem we',
      accent: 'researched',
      after: '',
      items: [
        { problem: 'Tourism piles up in South Bali', detail: 'while the north, east and west stay quiet.', fix: 'Activities are spread across regions, with crowd labels to nudge people somewhere calmer.' },
        { problem: 'Travelers want something local', detail: '77% look for authentic experiences that reflect local culture.', fix: 'A catalogue of nature and culture activities run by villagers and local communities.' },
        { problem: 'Small hosts are hard to find', detail: 'and mostly rely on private messages and word of mouth.', fix: 'A Host Studio where locals accept or decline requests, so travelers pay only once a slot is confirmed.' },
        { problem: 'Planning is scattered', detail: 'across 10–12 apps, and nature trips depend on weather, holidays and Nyepi.', fix: 'One calendar with weather, crowds and ceremony days, plus an AI assistant that adds activities straight to the plan.' },
      ],
    },
    galleryTitle: ['Inside the', 'prototype'],
    gallery: [
      { src: '/projects/pathora/explore.webp', cap: 'Explore 14 activities with crowd labels' },
      { src: '/projects/pathora/activity.webp', cap: 'Activity detail with availability calendar' },
      { src: '/projects/pathora/assistant.webp', cap: 'AI assistant builds a 3-day plan' },
      { src: '/projects/pathora/calendar.webp', cap: 'Trip calendar with weather and ceremony days' },
      { src: '/projects/pathora/passport.webp', cap: 'Nature Passport stamps' },
      { src: '/projects/pathora/host.webp', cap: 'Host Studio for local providers' },
    ],
    note: 'Still in progress: prices, weather and crowd data are samples, payment is simulated, and the assistant is rule-based for now. Next up are the backend and a real language model.',
  },
];

export const sections = [
  { id: 'about', label: 'About Me', blurb: 'Who I am and how I work.' },
  { id: 'skills', label: 'Skills', blurb: "Languages, frameworks, AI and security tools I've used." },
  { id: 'experience', label: 'Experience', blurb: 'Leadership, orientation and campus events.' },
  { id: 'work', label: 'My Work', blurb: 'Three live apps I designed and built.' },
  { id: 'contact', label: 'Contact', blurb: "Let's talk about working together." },
];
