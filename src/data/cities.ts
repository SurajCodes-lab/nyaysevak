// Week 5: 8 tier-1 Indian cities × 5 practice areas = 40 unique local-intent landing pages.
// City-level data is used to produce genuinely distinct content per page (courts, neighbourhoods,
// bar councils, local fee ranges) so pages are not templated "doorway" duplicates.

export interface City {
  slug: string;
  name: string;
  state: string;
  geo: { lat: number; lng: number };
  population: string;
  neighbourhoods: string[];
  localBar: string;
  highCourt: { name: string; slug: string };
  districtCourts: string[];
  districtCourtsSlug?: string; // links to /courts/:slug for that state's district courts
  blurb: string; // one-liner used in H2/description contexts
}

export const cities: City[] = [
  {
    slug: "delhi",
    name: "Delhi",
    state: "Delhi",
    geo: { lat: 28.6139, lng: 77.2090 },
    population: "3.3 crore (NCR)",
    neighbourhoods: [
      "Connaught Place", "Dwarka", "Rohini", "Saket", "South Extension",
      "Karol Bagh", "Lajpat Nagar", "Rajouri Garden", "Pitampura", "Nehru Place",
      "Noida", "Gurgaon", "Faridabad", "Ghaziabad",
    ],
    localBar: "Bar Council of Delhi",
    highCourt: { name: "Delhi High Court", slug: "delhi-high-court" },
    districtCourts: [
      "Tis Hazari Courts", "Patiala House Courts", "Karkardooma Courts",
      "Saket Courts", "Rohini Courts", "Dwarka Courts",
    ],
    districtCourtsSlug: "delhi-district-courts",
    blurb:
      "India's capital and the seat of the Supreme Court, hosting the country's most active commercial and constitutional litigation ecosystem.",
  },
  {
    slug: "mumbai",
    name: "Mumbai",
    state: "Maharashtra",
    geo: { lat: 19.0760, lng: 72.8777 },
    population: "2.1 crore (MMR)",
    neighbourhoods: [
      "Fort", "Colaba", "Bandra", "Andheri", "Borivali",
      "Powai", "Goregaon", "Dadar", "Worli", "Malad",
      "Thane", "Navi Mumbai", "Kalyan", "Vashi",
    ],
    localBar: "Bar Council of Maharashtra & Goa",
    highCourt: { name: "Bombay High Court", slug: "bombay-high-court" },
    districtCourts: [
      "Mumbai City Civil & Sessions Court (Fort)",
      "Dindoshi Sessions Court (Goregaon)",
      "Bandra Metropolitan Magistrate Court",
      "Andheri Metropolitan Magistrate Court",
      "Borivali Court",
      "Thane District & Sessions Court",
    ],
    districtCourtsSlug: "maharashtra-district-courts",
    blurb:
      "India's financial capital and home to the Bombay High Court — the leading forum for commercial, corporate, arbitration, and securities litigation.",
  },
  {
    slug: "bangalore",
    name: "Bangalore",
    state: "Karnataka",
    geo: { lat: 12.9716, lng: 77.5946 },
    population: "1.4 crore",
    neighbourhoods: [
      "MG Road", "Koramangala", "Indiranagar", "Whitefield", "Electronic City",
      "Jayanagar", "Malleshwaram", "HSR Layout", "Marathahalli", "Yelahanka",
      "Hebbal", "Sarjapur", "Banashankari", "Rajajinagar",
    ],
    localBar: "Karnataka State Bar Council",
    highCourt: { name: "Karnataka High Court", slug: "karnataka-high-court" },
    districtCourts: [
      "City Civil Court (Mayo Hall)",
      "City Civil & Sessions Court (Bengaluru Urban)",
      "Magistrate Courts at Halasuru Gate, Jayanagar, Yelahanka",
      "Bangalore Rural District Court",
    ],
    districtCourtsSlug: "karnataka-district-courts",
    blurb:
      "India's technology capital — a major centre for IT, startups, and IP-driven disputes, served by a fast-moving Karnataka High Court bench.",
  },
  {
    slug: "chennai",
    name: "Chennai",
    state: "Tamil Nadu",
    geo: { lat: 13.0827, lng: 80.2707 },
    population: "1.1 crore (CMA)",
    neighbourhoods: [
      "T. Nagar", "Anna Nagar", "Adyar", "Velachery", "Mylapore",
      "Nungambakkam", "Besant Nagar", "Tambaram", "Guindy", "OMR",
      "Porur", "Chromepet", "Perambur", "Ambattur",
    ],
    localBar: "Bar Council of Tamil Nadu & Puducherry",
    highCourt: { name: "Madras High Court", slug: "madras-high-court" },
    districtCourts: [
      "City Civil Court, Chennai",
      "Principal Sessions Court, Chennai",
      "Chief Metropolitan Magistrate Court (Egmore)",
      "Saidapet Court, Alandur Court",
      "Chengalpattu District & Sessions Court",
      "Tiruvallur District Court",
    ],
    districtCourtsSlug: "tamil-nadu-district-courts",
    blurb:
      "South India's largest judicial hub — Madras High Court has original civil jurisdiction and one of the heaviest commercial dockets in the country.",
  },
  {
    slug: "hyderabad",
    name: "Hyderabad",
    state: "Telangana",
    geo: { lat: 17.3850, lng: 78.4867 },
    population: "1.05 crore",
    neighbourhoods: [
      "Banjara Hills", "Jubilee Hills", "HITEC City", "Gachibowli", "Madhapur",
      "Begumpet", "Kukatpally", "Secunderabad", "Ameerpet", "Kondapur",
      "Shamshabad", "LB Nagar", "Miyapur", "Uppal",
    ],
    localBar: "Bar Council of Andhra Pradesh & Telangana",
    highCourt: { name: "Telangana High Court", slug: "telangana-high-court" },
    districtCourts: [
      "Metropolitan Sessions Court, Nampally",
      "City Civil Court, Hyderabad",
      "Ranga Reddy District Court at L. B. Nagar",
      "Medchal-Malkajgiri District Court",
    ],
    districtCourtsSlug: "telangana-district-courts",
    blurb:
      "A rapidly growing IT and pharma corridor where cyber, corporate, and real-estate litigation has surged with the city's expansion into HITEC City and the ORR belt.",
  },
  {
    slug: "pune",
    name: "Pune",
    state: "Maharashtra",
    geo: { lat: 18.5204, lng: 73.8567 },
    population: "72 lakh",
    neighbourhoods: [
      "Shivajinagar", "Koregaon Park", "Viman Nagar", "Hinjewadi", "Baner",
      "Aundh", "Kothrud", "Hadapsar", "Wakad", "Kharadi",
      "Pimpri-Chinchwad", "Magarpatta", "Camp", "Wagholi",
    ],
    localBar: "Bar Council of Maharashtra & Goa (Pune Chapter)",
    highCourt: { name: "Bombay High Court", slug: "bombay-high-court" },
    districtCourts: [
      "District & Sessions Court, Shivajinagar",
      "Civil Court (Senior Division), Pune",
      "Metropolitan Magistrate Courts, Shivajinagar",
      "Pimpri-Chinchwad Court, Khadki Cantonment Court",
    ],
    districtCourtsSlug: "maharashtra-district-courts",
    blurb:
      "Western India's education and auto-manufacturing hub — Pune's courts handle heavy volumes of commercial, employment, and consumer litigation routed through the Bombay High Court.",
  },
  {
    slug: "kolkata",
    name: "Kolkata",
    state: "West Bengal",
    geo: { lat: 22.5726, lng: 88.3639 },
    population: "1.5 crore (KMA)",
    neighbourhoods: [
      "Park Street", "Ballygunge", "Salt Lake (Bidhannagar)", "New Town", "Howrah",
      "Dum Dum", "Garia", "Tollygunge", "Alipore", "Behala",
      "Jadavpur", "Rajarhat", "Shyambazar", "Esplanade",
    ],
    localBar: "Bar Council of West Bengal",
    highCourt: { name: "Calcutta High Court", slug: "calcutta-high-court" },
    districtCourts: [
      "City Civil Court, Kolkata",
      "Alipore District & Sessions Court",
      "Sealdah Court (Chief Metropolitan Magistrate)",
      "Barasat District Court (North 24 Parganas)",
      "Howrah District Court",
    ],
    districtCourtsSlug: "west-bengal-district-courts",
    blurb:
      "India's oldest chartered High Court sits in Kolkata — a jurisdiction with deep tradition in commercial, admiralty, testamentary, and constitutional matters.",
  },
  {
    slug: "ahmedabad",
    name: "Ahmedabad",
    state: "Gujarat",
    geo: { lat: 23.0225, lng: 72.5714 },
    population: "82 lakh (AMA)",
    neighbourhoods: [
      "Navrangpura", "Satellite", "Vastrapur", "Bodakdev", "SG Highway",
      "Maninagar", "Chandkheda", "Naranpura", "Thaltej", "Paldi",
      "Gandhinagar", "Gota", "Bopal", "Prahladnagar",
    ],
    localBar: "Bar Council of Gujarat",
    highCourt: { name: "Gujarat High Court", slug: "gujarat-high-court" },
    districtCourts: [
      "City Civil & Sessions Court, Bhadra",
      "Metropolitan Magistrate Courts, Gheekanta",
      "Mirzapur Court",
      "Gandhinagar District & Sessions Court",
    ],
    districtCourtsSlug: "gujarat-district-courts",
    blurb:
      "Gujarat's commercial capital — a major centre for corporate, textile, and real-estate matters, with the Gujarat High Court handling high volumes of writ and tax litigation.",
  },
  {
    slug: "jaipur",
    name: "Jaipur",
    state: "Rajasthan",
    geo: { lat: 26.9124, lng: 75.7873 },
    population: "40+ lakh (metro)",
    neighbourhoods: [
      "C-Scheme", "Malviya Nagar", "Vaishali Nagar", "Mansarovar", "Raja Park",
      "Bani Park", "Tonk Road", "Jagatpura", "Sodala", "Jhotwara",
      "Sanganer", "Vidhyadhar Nagar", "Civil Lines", "Ajmer Road",
    ],
    localBar: "Bar Council of Rajasthan",
    highCourt: { name: "Rajasthan High Court (Jaipur Bench)", slug: "rajasthan-high-court" },
    districtCourts: [
      "Jaipur District & Sessions Court",
      "Jaipur Metropolitan Magistrate Courts",
      "Commercial Court, Jaipur",
      "Family Court, Jaipur",
      "Motor Accident Claims Tribunal (MACT), Jaipur",
    ],
    blurb:
      "Rajasthan's capital and the seat of the Rajasthan High Court's Jaipur Bench — a fast-growing centre for real-estate, consumer, family, and commercial litigation.",
  },
  {
    slug: "noida",
    name: "Noida",
    state: "Uttar Pradesh",
    geo: { lat: 28.5355, lng: 77.3910 },
    population: "65+ lakh (Gautam Buddh Nagar + Greater Noida)",
    neighbourhoods: [
      "Sector 18", "Sector 62", "Sector 137", "Sector 15", "Sector 50",
      "Greater Noida", "Noida Extension (Greater Noida West)", "Sector 76",
      "Film City (Sector 16A)", "Sector 27", "Sector 104", "Sector 168",
      "Pari Chowk", "Knowledge Park",
    ],
    localBar: "Gautam Buddh Nagar Bar Association",
    highCourt: { name: "Allahabad High Court", slug: "allahabad-high-court" },
    districtCourts: [
      "Gautam Buddh Nagar District & Sessions Court (Surajpur)",
      "Commercial Court, Gautam Buddh Nagar",
      "Family Court, Gautam Buddh Nagar",
      "UP RERA (builder–buyer complaints)",
      "Motor Accident Claims Tribunal (MACT), Gautam Buddh Nagar",
    ],
    blurb:
      "NCR's fastest-growing real-estate and IT hub — ground zero for builder–buyer (RERA) disputes, with the Gautam Buddh Nagar courts at Surajpur and writs to the Allahabad High Court.",
  },
  {
    slug: "ghaziabad",
    name: "Ghaziabad",
    state: "Uttar Pradesh",
    geo: { lat: 28.6692, lng: 77.4538 },
    population: "50+ lakh (Ghaziabad district)",
    neighbourhoods: [
      "Indirapuram", "Vaishali", "Kaushambi", "Vasundhara", "Raj Nagar",
      "Raj Nagar Extension", "Sahibabad", "Crossings Republik", "Wave City",
      "Nyay Khand", "Kavi Nagar", "Govindpuram", "Loni", "Modinagar",
    ],
    localBar: "Ghaziabad Bar Association",
    highCourt: { name: "Allahabad High Court", slug: "allahabad-high-court" },
    districtCourts: [
      "Ghaziabad District & Sessions Court (Kacheri)",
      "Commercial Court, Ghaziabad",
      "Family Court, Ghaziabad",
      "UP RERA (builder–buyer complaints)",
      "Motor Accident Claims Tribunal (MACT), Ghaziabad",
    ],
    blurb:
      "A major NCR industrial and residential district in Uttar Pradesh — high volumes of cheque-bounce, commercial-recovery and builder–buyer (RERA) matters, heard at the Ghaziabad district courts with writs to the Allahabad High Court.",
  },
  {
    slug: "faridabad",
    name: "Faridabad",
    state: "Haryana",
    geo: { lat: 28.4089, lng: 77.3178 },
    population: "22+ lakh (Faridabad district)",
    neighbourhoods: [
      "Sector 15", "Sector 16", "NIT Faridabad", "Old Faridabad", "Ballabgarh",
      "Neharpar (Greater Faridabad)", "Sector 21", "Sector 37", "Badkhal",
      "Sector 88", "Sector 82", "Surajkund", "Tigaon", "Sector 46",
    ],
    localBar: "Faridabad Bar Association",
    highCourt: { name: "Punjab & Haryana High Court", slug: "punjab-haryana-high-court" },
    districtCourts: [
      "Faridabad District & Sessions Court (Sector 12)",
      "Ballabgarh Sub-Divisional Courts",
      "Commercial Court, Faridabad",
      "Family Court, Faridabad",
      "Haryana RERA (Panchkula/Gurugram bench) — builder–buyer complaints",
    ],
    blurb:
      "Haryana's largest industrial city and a core NCR market — a hub for manufacturing, labour and commercial-recovery disputes, heard at the Faridabad and Ballabgarh courts with writs to the Punjab & Haryana High Court.",
  },
  {
    slug: "gurgaon",
    name: "Gurgaon",
    state: "Haryana",
    geo: { lat: 28.4595, lng: 77.0266 },
    population: "30+ lakh (Gurugram district)",
    neighbourhoods: [
      "DLF Cyber City", "Golf Course Road", "Sohna Road", "MG Road", "Udyog Vihar",
      "DLF Phase 1–5", "Sushant Lok", "Sector 14", "Sector 56", "New Gurgaon",
      "Manesar", "Palam Vihar", "South City", "Sector 29",
    ],
    localBar: "Gurugram Bar Association",
    highCourt: { name: "Punjab & Haryana High Court", slug: "punjab-haryana-high-court" },
    districtCourts: [
      "Gurugram District & Sessions Court",
      "Commercial Court, Gurugram",
      "Family Court, Gurugram",
      "Haryana RERA, Gurugram Bench (builder–buyer complaints)",
      "Motor Accident Claims Tribunal (MACT), Gurugram",
    ],
    blurb:
      "India's corporate capital — home to most multinational India headquarters, driving heavy commercial, employment, and real-estate (RERA) litigation, with district courts in Gurugram and writs to the Punjab & Haryana High Court at Chandigarh.",
  },
];

// The practice-area slugs we target per city.
// The first five are the highest-volume Indian-legal-search verticals; each
// corresponds to an existing /practice-areas/[slug] page, so anchor-links flow correctly.
// Week 18 (NCR proposal Phase 2): high-buyer-intent MATTER slugs — these are NOT
// practice-area slugs; use cityMatterParentPractice to reach their pillar page.
// Content-gated: a combo only renders (and is only linked) when cityPracticeContent
// has a hand-written entry for it — so adding a slug here never creates thin pages.
export const cityPracticeSlugs = [
  "criminal-law",
  "civil-law",
  "family-matrimonial",
  "property-real-estate",
  "corporate-business",
  // Week 18 high-value matter slugs (content exists only where hand-written)
  "cheque-bounce-recovery",
  "rera-complaint",
  "company-registration",
] as const;

export type CityPracticeSlug = (typeof cityPracticeSlugs)[number];

// Matter slug → parent practice-area slug (for pillar links, related guides,
// and the /practice-areas/[slug] anchor on city×matter pages).
export const cityMatterParentPractice: Partial<Record<CityPracticeSlug, string>> = {
  "cheque-bounce-recovery": "banking-finance",
  "rera-complaint": "property-real-estate",
  "company-registration": "corporate-business",
};

// Human-friendly labels used in H1/metadata (kept in one place to avoid drift).
export const cityPracticeLabels: Record<CityPracticeSlug, {
  short: string;      // "Criminal"
  title: string;      // "Criminal Lawyer"
  long: string;       // "Criminal Defence Lawyer"
  keyword: string;    // "criminal lawyer"
}> = {
  "criminal-law": {
    short: "Criminal",
    title: "Criminal Lawyer",
    long: "Criminal Defence Lawyer",
    keyword: "criminal lawyer",
  },
  "civil-law": {
    short: "Civil",
    title: "Civil Lawyer",
    long: "Civil Litigation Lawyer",
    keyword: "civil lawyer",
  },
  "family-matrimonial": {
    short: "Divorce & Family",
    title: "Divorce Lawyer",
    long: "Divorce & Family Lawyer",
    keyword: "divorce lawyer",
  },
  "property-real-estate": {
    short: "Property",
    title: "Property Lawyer",
    long: "Property & Real Estate Lawyer",
    keyword: "property lawyer",
  },
  "corporate-business": {
    short: "Corporate",
    title: "Corporate Lawyer",
    long: "Corporate & Business Lawyer",
    keyword: "corporate lawyer",
  },
  // Week 18 matter labels — phrased so every template slot reads naturally:
  // "Best {title} in {city}", "{long} in {city}", "{keyword} near me".
  "cheque-bounce-recovery": {
    short: "Cheque Bounce",
    title: "Cheque Bounce Lawyer",
    long: "Cheque Bounce & Recovery Lawyer",
    keyword: "cheque bounce lawyer",
  },
  "rera-complaint": {
    short: "RERA / Builder-Buyer",
    title: "RERA Lawyer",
    long: "RERA & Builder-Buyer Dispute Lawyer",
    keyword: "RERA lawyer",
  },
  "company-registration": {
    short: "Company Registration",
    title: "Company Registration Lawyer",
    long: "Company Registration & Startup Lawyer",
    keyword: "company registration lawyer",
  },
};

export function getCityBySlug(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}

export function isCityPracticeSlug(slug: string): slug is CityPracticeSlug {
  return (cityPracticeSlugs as readonly string[]).includes(slug);
}
