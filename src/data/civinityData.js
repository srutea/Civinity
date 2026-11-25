export const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "News", path: "/news" },
  { label: "Report Problem", path: "/report-problem" },
  { label: "Creativity", path: "/creativity" },
  { label: "Institutions", path: "/institutions" },
  { label: "Quiz", path: "/quiz" },
];

export const STATS_DATA = [
  {
    id: "total-citizens",
    label: "Total Citizens",
    labelBn: "মোট নাগরিক",
    value: 1482910,
    suffix: "+",
  },
  {
    id: "verified-citizens",
    label: "Verified Citizens",
    labelBn: "যাচাইকৃত নাগরিক",
    value: 964320,
    suffix: "+",
  },
  {
    id: "solved-complaints",
    label: "Solved Complaints",
    labelBn: "সমাধানকৃত অভিযোগ",
    value: 84715,
    suffix: "",
  },
  {
    id: "verified-news",
    label: "Verified News",
    labelBn: "যাচাইকৃত সংবাদ",
    value: 19430,
    suffix: "",
  },
];

export const FEATURES_DATA = [
  {
    id: "secure-registration",
    title: "Secure Registration",
    subtitle: "NID / Birth Certificate",
    description:
      "Verify your civic identity once using National ID or Birth Certificate numbers with OTP protection.",
    icon: "ShieldCheck",
    path: "/register",
  },
  {
    id: "national-news",
    title: "National News Portal",
    subtitle: "Public circulars & updates",
    description:
      "Follow district announcements, municipal notices, and national bulletins in Bangla and English.",
    icon: "Newspaper",
    path: "/news",
  },
  {
    id: "fact-verification",
    title: "Verified vs Misleading News",
    subtitle: "Transparent source rating",
    description:
      "Spot misinformation immediately with side-by-side source attribution and official fact-check seals.",
    icon: "BadgeCheck",
    path: "/news",
  },
  {
    id: "local-reporting",
    title: "Local Problem Reporting",
    subtitle: "Roads, water & lighting",
    description:
      "Submit geo-tagged ward issues with photos and track repair milestones from intake to resolution.",
    icon: "MapPin",
    path: "/report-problem",
  },
  {
    id: "creativity-section",
    title: "Creativity Section",
    subtitle: "Essays, art & civic ideas",
    description:
      "Publish student writing, neighborhood photography, and local improvement proposals for peer review.",
    icon: "PenTool",
    path: "/creativity",
  },
  {
    id: "institution-ranking",
    title: "School & College Ranking",
    subtitle: "Audited public metrics",
    description:
      "Compare schools and colleges by attendance, lab readiness, exam outcomes, and verified parent ratings.",
    icon: "GraduationCap",
    path: "/institutions",
  },
  {
    id: "quiz-sports",
    title: "Quiz & Sports Challenge",
    subtitle: "Weekly civic & youth cups",
    description:
      "Join timed constitutional literacy quizzes and inter-ward sports brackets to represent your district.",
    icon: "Trophy",
    path: "/quiz",
  },
  {
    id: "citizen-chat",
    title: "Chat",
    subtitle: "Ward & helpdesk channels",
    description:
      "Message verified ward representatives, school coordinators, and fellow citizens in moderated threads.",
    icon: "MessageSquare",
    path: "/login",
  },
];

export const NEWS_DATA = [
  {
    id: "news-1",
    category: "Public Transit",
    title: "Dhaka–Narayanganj commuter rail adds four morning express stops",
    date: "24 Nov 2026",
    image: `${import.meta.env.BASE_URL}images/news-transit.svg`,
    imageAlt: "Illustration of an elevated commuter train line over green civic trees",
    verified: true,
    source: "Ministry of Railways Bulletin",
  },
  {
    id: "news-2",
    category: "Digital Identity",
    title: "Birth certificate correction window opens across all 495 upazilas",
    date: "22 Nov 2026",
    image: `${import.meta.env.BASE_URL}images/news-identity.svg`,
    imageAlt: "Illustration of an official digital citizen verification seal and document",
    verified: true,
    source: "Office of the Registrar General",
  },
  {
    id: "news-3",
    category: "Education",
    title: "2026 secondary science lab grants published with ward-level audits",
    date: "19 Nov 2026",
    image: `${import.meta.env.BASE_URL}images/news-education.svg`,
    imageAlt: "Illustration of a school campus building and laboratory glassware",
    verified: true,
    source: "Directorate of Secondary Education",
  },
];

export const COMPLAINTS_DATA = [
  {
    id: "CMP-4092",
    title: "Broken streetlight poles along Mirpur Road Section 10",
    location: "Ward 03, Dhaka North",
    category: "Street Lighting",
    reportedAt: "2 hours ago",
    status: "Pending",
    summary:
      "Six consecutive LED poles remain unlit near the pedestrian crossing since Tuesday evening.",
  },
  {
    id: "CMP-4081",
    title: "Storm drain blockage cleared near Agrabad Commercial Gate",
    location: "Ward 27, Chattogram",
    category: "Drainage & Water",
    reportedAt: "Yesterday",
    status: "Solved",
    summary:
      "Municipal crew removed silt buildup and replaced the damaged iron grate within 18 hours.",
  },
  {
    id: "CMP-4068",
    title: "School zone speed bump repainting requested at Zilla School",
    location: "Ward 05, Rajshahi",
    category: "Road Safety",
    reportedAt: "3 days ago",
    status: "Solved",
    summary:
      "Reflective thermoplastic markings and crossing signs were installed ahead of morning assembly.",
  },
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: "01",
    title: "Register",
    description:
      "Enter your full name, district, and NID or Birth Certificate number in the Civinity app.",
  },
  {
    step: "02",
    title: "Verify with OTP",
    description:
      "Confirm your registered mobile number with a one-time 6-digit security code.",
  },
  {
    step: "03",
    title: "Get Verified Badge",
    description:
      "Receive a green civic verification seal linked to your district and local ward.",
  },
  {
    step: "04",
    title: "Use Services",
    description:
      "File local complaints, read fact-checked news, rank institutions, and enter quizzes.",
  },
];

export const TOP_INSTITUTIONS = [
  {
    rank: 1,
    name: "Dhaka Residential Model College",
    location: "Mohammadpur, Dhaka",
    type: "College",
    rating: 4.9,
    reviews: 1240,
  },
  {
    rank: 2,
    name: "Rajshahi Collegiate School",
    location: "Boalia, Rajshahi",
    type: "School",
    rating: 4.8,
    reviews: 985,
  },
  {
    rank: 3,
    name: "Chattogram Government High School",
    location: "Kotwali, Chattogram",
    type: "School",
    rating: 4.8,
    reviews: 874,
  },
  {
    rank: 4,
    name: "Sylhet Government Pilot High School",
    location: "Bandarbazar, Sylhet",
    type: "School",
    rating: 4.7,
    reviews: 712,
  },
];

export const QUIZ_LEADERBOARD = [
  {
    rank: 1,
    name: "Nusrat Jahan",
    district: "Dhaka",
    category: "Civic Law",
    streak: "14 wks",
    points: 2940,
  },
  {
    rank: 2,
    name: "Tanvir Ahmed",
    district: "Rajshahi",
    category: "National History",
    streak: "11 wks",
    points: 2815,
  },
  {
    rank: 3,
    name: "Mehedi Hasan",
    district: "Chattogram",
    category: "Sports & Youth",
    streak: "9 wks",
    points: 2690,
  },
  {
    rank: 4,
    name: "Farhana Yasmin",
    district: "Sylhet",
    category: "Civic Law",
    streak: "8 wks",
    points: 2540,
  },
  {
    rank: 5,
    name: "Rafiqul Islam",
    district: "Khulna",
    category: "Public Policy",
    streak: "7 wks",
    points: 2480,
  },
];
