export const BUSINESS = {
  name: "Yogendra Singh Panwar",
  nameHindi: "योगेन्द्र सिंह पंवार",
  title: "Insurance & Financial Advisor",
  titleHindi: "बीमा एवं वित्तीय सलाहकार",
  titleTransliteration: "Bima evam Vittiya Salahkar",
  company: "OM Enterprises & Financial Solution",
  address: "Maldevta, Dehradun, Uttarakhand",
  phone1: "9759764093",
  phone2: "9760848347",
  email: "yogendrasingh748@gmail.com",
  since: 2007,
  whatsappUrl:
    "https://wa.me/919759764093?text=Hi%20Yogendra%20Ji%2C%20I%27d%20like%20a%20free%20consultation",
  tagline:
    "Two Decades of Trust — Serving Thousands of Happy LIC Customers Since 2007",
  hindiTags: "बीमा · निवेश · पेंशन",
  socials: {
    youtube: "https://youtube.com/@yogendrasinghpanwar9441",
    facebook: "https://www.facebook.com/yogendra.singh.panwar.140200",
    linkedin: "https://www.linkedin.com/in/yogendra-singh-panwar-85468790/",
    instagram: "https://www.instagram.com/yogendrasinghpanwar67",
  },
} as const;

export const STATS = [
  { value: 18, suffix: "+", label: "Years of Service", sublabel: "Since 2007" },
  {
    value: 200,
    suffix: "+",
    label: "Families Protected",
    sublabel: "Annually",
  },
  { value: 1000, suffix: "+", label: "Happy Clients", sublabel: "And Counting" },
  {
    value: 99,
    suffix: "%",
    label: "Claim Support",
    sublabel: "Success Rate",
  },
  {
    value: 6,
    suffix: "",
    label: "Service Categories",
    sublabel: "Complete Coverage",
  },
] as const;

export const SERVICES = [
  {
    icon: "Shield",
    titleEn: "Life Insurance",
    titleHi: "जीवन बीमा",
    description:
      "Insurance + Investment plans tailored for every life stage. Secure your family's future with LIC's trusted endowment, term, and money-back policies.",
  },
  {
    icon: "HeartPulse",
    titleEn: "Health Insurance",
    titleHi: "स्वास्थ्य बीमा",
    description:
      "Comprehensive health coverage for your entire family. Protection against medical emergencies with cashless hospitalization benefits.",
  },
  {
    icon: "Car",
    titleEn: "Vehicle Insurance",
    titleHi: "वाहन बीमा",
    description:
      "Two-wheeler and four-wheeler insurance made easy. Third-party and comprehensive plans with quick claim settlement.",
  },
  {
    icon: "TrendingUp",
    titleEn: "Investment Plans",
    titleHi: "निवेश योजनाएँ",
    description:
      "SIP, ULIP, and Wealth Plans for long-term growth. Build a large corpus through systematic and disciplined investment.",
  },
  {
    icon: "Landmark",
    titleEn: "Pension & Retirement",
    titleHi: "पेंशन योजनाएँ",
    description:
      "Tax-benefit retirement plans for a financially secure future. Regular income after retirement with government-backed schemes.",
  },
  {
    icon: "GraduationCap",
    titleEn: "Children's Future",
    titleHi: "बच्चों का फ्यूचर",
    description:
      "Education & Marriage fund plans starting today. Ensure your children's dreams are never compromised due to finances.",
  },
] as const;

export const USP_ITEMS = [
  {
    icon: "Banknote",
    titleEn: "Regular Income from Early Age",
    titleHi: "बढ़ते बीमा के साथ कम उम्र से रेगुलर इनकम",
    description:
      "Start early and enjoy the benefits of growing insurance cover paired with steady returns throughout your life.",
  },
  {
    icon: "BarChart3",
    titleEn: "Build a Large Corpus",
    titleHi: "रेगुलर इन्वेस्टमेंट से बड़ा फंड",
    description:
      "Systematic investment builds substantial wealth over time. Our plans make disciplined saving effortless.",
  },
  {
    icon: "Zap",
    titleEn: "Swift Service & Easy Claims",
    titleHi: "त्वरित सेवा व आसान क्लेम प्रक्रिया",
    description:
      "From policy issuance to claim settlement — experience fast, hassle-free service with personal attention.",
  },
] as const;

export const TRUST_POINTS = [
  "Doorstep service in Dehradun & surrounding areas",
  "Direct LIC agent — no middlemen",
  "Transparent, jargon-free guidance in Hindi & English",
  "17+ years of personal client relationships",
  "Participated in Guinness World Record attempt with LIC",
] as const;

export const TESTIMONIALS = [
  {
    name: "Rajesh Kumar",
    city: "Dehradun",
    quote:
      "Yogendra ji ne mujhe sahi plan choose karne mein bahut madad ki. Claim process bahut aasan thi!",
    rating: 5,
  },
  {
    name: "Sunita Devi",
    city: "Rishikesh",
    quote:
      "Two decades of trusted service — I've referred my entire family to Yogendra ji. Excellent guidance!",
    rating: 5,
  },
  {
    name: "Amit Rawat",
    city: "Dehradun",
    quote:
      "Best advisor in Dehradun. Always available, always helpful. Mere bachon ke future ke liye best plan diya.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    city: "Mussoorie",
    quote:
      "Very trustworthy and knowledgeable. Family ke liye best planning ki. Very professional approach!",
    rating: 5,
  },
  {
    name: "Manoj Thapa",
    city: "Dehradun",
    quote:
      "Yogendra ji ne mujhe best LIC plan suggest kiya. Bahut helpful service! Claim bhi time pe mila.",
    rating: 5,
  },
  {
    name: "Kavita Negi",
    city: "Haridwar",
    quote:
      "Professional and always available. Great experience overall. Retirement planning ke liye bahut acchi guidance mili.",
    rating: 5,
  },
  {
    name: "Deepak Bisht",
    city: "Dehradun",
    quote:
      "Meri poori family ka insurance Yogendra ji se karwa rakha hai. Bahut bharosemand aadmi hain.",
    rating: 5,
  },
  {
    name: "Anita Chauhan",
    city: "Vikasnagar",
    quote:
      "Health insurance claim mein bahut help ki. Paperwork se lekar settlement tak sab smooth tha.",
    rating: 5,
  },
] as const;

export const PLAN_TYPES = [
  { value: "term", label: "Term Plan" },
  { value: "endowment", label: "Endowment Plan" },
  { value: "moneyback", label: "Money Back Plan" },
  { value: "ulip", label: "ULIP" },
] as const;

export const SERVICE_INTERESTS = [
  "Life Insurance",
  "Health Insurance",
  "Vehicle Insurance",
  "Investment Plans",
  "Pension & Retirement",
  "Children's Future",
  "Other",
] as const;
