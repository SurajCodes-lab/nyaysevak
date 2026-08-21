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
    districtCourtsSlug: "district-courts-delhi",
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
    districtCourtsSlug: "district-courts-maharashtra",
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
    districtCourtsSlug: "district-courts-karnataka",
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
    districtCourtsSlug: "district-courts-tamil-nadu",
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
    districtCourtsSlug: "district-courts-telangana",
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
    districtCourtsSlug: "district-courts-maharashtra",
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
    districtCourtsSlug: "district-courts-west-bengal",
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
      "Shahibaug", "Gota", "Bopal", "Prahladnagar",
    ],
    localBar: "Bar Council of Gujarat",
    highCourt: { name: "Gujarat High Court", slug: "gujarat-high-court" },
    districtCourts: [
      "City Civil & Sessions Court, Bhadra",
      "Metropolitan Magistrate Courts, Gheekanta",
      "Mirzapur Court",
      "Commercial Court, Ahmedabad",
    ],
    districtCourtsSlug: "district-courts-gujarat",
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
    districtCourtsSlug: "district-courts-rajasthan",
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
    districtCourtsSlug: "district-courts-uttar-pradesh",
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
    districtCourtsSlug: "district-courts-uttar-pradesh",
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
    districtCourtsSlug: "district-courts-haryana",
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
    districtCourtsSlug: "district-courts-haryana",
    blurb:
      "India's corporate capital — home to most multinational India headquarters, driving heavy commercial, employment, and real-estate (RERA) litigation, with district courts in Gurugram and writs to the Punjab & Haryana High Court at Chandigarh.",
  },
  // ──────────────────────────────────────────────────────────────────────
  // NCR completion — Greater Noida shares the Gautam Buddh Nagar judiciary
  // at Surajpur with Noida, so the differentiation here is the AUTHORITY
  // (GNIDA / YEIDA allotments) rather than the courthouse.
  // ──────────────────────────────────────────────────────────────────────
  {
    slug: "greater-noida",
    name: "Greater Noida",
    state: "Uttar Pradesh",
    geo: { lat: 28.4744, lng: 77.5040 },
    population: "12 lakh (Gautam Buddh Nagar)",
    neighbourhoods: [
      "Alpha", "Beta", "Gamma", "Delta", "Omega",
      "Pari Chowk", "Knowledge Park", "Techzone IV", "Greater Noida West", "Noida Extension",
      "Bisrakh", "Kasna", "Surajpur", "Yamuna Expressway (YEIDA)",
    ],
    localBar: "Bar Council of Uttar Pradesh",
    highCourt: { name: "Allahabad High Court", slug: "allahabad-high-court" },
    districtCourts: [
      "Gautam Buddh Nagar District & Sessions Court, Surajpur",
      "Commercial Court, Gautam Buddh Nagar",
      "Family Court, Surajpur",
      "UP RERA (Greater Noida project complaints)",
      "Motor Accident Claims Tribunal (MACT), Gautam Buddh Nagar",
    ],
    districtCourtsSlug: "district-courts-uttar-pradesh",
    blurb:
      "The NCR's largest planned-development belt — where GNIDA and YEIDA allotment disputes, stalled builder-buyer projects, and UP RERA complaints dominate the litigation mix, all heard at the Gautam Buddh Nagar courts in Surajpur.",
  },

  // ──────────────────────────────────────────────────────────────────────
  // GUJARAT — every city writs to the Gujarat High Court at Ahmedabad
  // (single seat, no benches), so the local differentiation is the district
  // judiciary and the industry driving the disputes.
  // ──────────────────────────────────────────────────────────────────────
  {
    slug: "surat",
    name: "Surat",
    state: "Gujarat",
    geo: { lat: 21.1702, lng: 72.8311 },
    population: "75 lakh (metro)",
    neighbourhoods: [
      "Adajan", "Vesu", "Piplod", "Athwalines", "Ghod Dod Road",
      "Katargam", "Varachha", "Udhna", "Pal", "Rander",
      "Bhatar", "Majura Gate", "Dumas Road", "Sachin GIDC",
    ],
    localBar: "Bar Council of Gujarat",
    highCourt: { name: "Gujarat High Court", slug: "gujarat-high-court" },
    districtCourts: [
      "Surat District & Sessions Court",
      "Chief Judicial Magistrate Court, Surat",
      "Commercial Court, Surat",
      "Family Court, Surat",
      "Labour Court & Industrial Tribunal, Surat",
    ],
    districtCourtsSlug: "district-courts-gujarat",
    blurb:
      "India's diamond-polishing and man-made-textile capital — an SME-dense economy that generates exceptional volumes of cheque-bounce prosecutions, trade-credit recovery, and partnership disputes.",
  },
  {
    slug: "vadodara",
    name: "Vadodara",
    state: "Gujarat",
    geo: { lat: 22.3072, lng: 73.1812 },
    population: "22 lakh (metro)",
    neighbourhoods: [
      "Alkapuri", "Fatehgunj", "Gotri", "Akota", "Sayajigunj",
      "Manjalpur", "Karelibaug", "Nizampura", "Subhanpura", "Waghodia Road",
      "Vasna", "Makarpura", "Race Course", "Chhani",
    ],
    localBar: "Bar Council of Gujarat",
    highCourt: { name: "Gujarat High Court", slug: "gujarat-high-court" },
    districtCourts: [
      "Vadodara District & Sessions Court",
      "Commercial Court, Vadodara",
      "Family Court, Vadodara",
      "Labour Court & Industrial Tribunal, Vadodara",
      "Motor Accident Claims Tribunal (MACT), Vadodara",
    ],
    districtCourtsSlug: "district-courts-gujarat",
    blurb:
      "Gujarat's petrochemical and heavy-engineering centre — home to a large organised-sector workforce, which makes industrial and employment disputes unusually prominent alongside corporate and property litigation.",
  },
  {
    slug: "rajkot",
    name: "Rajkot",
    state: "Gujarat",
    geo: { lat: 22.3039, lng: 70.8022 },
    population: "18 lakh (metro)",
    neighbourhoods: [
      "Kalawad Road", "University Road", "Race Course", "Gondal Road", "Mavdi",
      "Nana Mava", "Yagnik Road", "150 Feet Ring Road", "Amin Marg", "Bhaktinagar",
      "Raiya Road", "Morbi Road", "Kotecha Chowk", "Aji GIDC",
    ],
    localBar: "Bar Council of Gujarat",
    highCourt: { name: "Gujarat High Court", slug: "gujarat-high-court" },
    districtCourts: [
      "Rajkot District & Sessions Court",
      "Commercial Court, Rajkot",
      "Family Court, Rajkot",
      "Labour Court, Rajkot",
      "Motor Accident Claims Tribunal (MACT), Rajkot",
    ],
    districtCourtsSlug: "district-courts-gujarat",
    blurb:
      "The commercial capital of Saurashtra and the hub of Gujarat's casting, forging, and engineering MSMEs — a proprietor-and-partnership economy where recovery, cheque-bounce, and firm-dissolution disputes dominate.",
  },
  {
    slug: "gandhinagar",
    name: "Gandhinagar",
    state: "Gujarat",
    geo: { lat: 23.2156, lng: 72.6369 },
    population: "14 lakh (district)",
    neighbourhoods: [
      "GIFT City", "Infocity", "Kudasan", "Randesan", "Sargasan",
      "Raysan", "Sector 11", "Sector 21", "Koba", "Vavol",
      "Adalaj", "Pethapur", "Sughad", "Chiloda",
    ],
    localBar: "Bar Council of Gujarat",
    highCourt: { name: "Gujarat High Court", slug: "gujarat-high-court" },
    districtCourts: [
      "Gandhinagar District & Sessions Court",
      "Commercial Court, Gandhinagar",
      "Family Court, Gandhinagar",
      "Central Administrative Tribunal, Ahmedabad Bench (central service matters)",
    ],
    districtCourtsSlug: "district-courts-gujarat",
    blurb:
      "Gujarat's administrative capital and the site of GIFT City — India's only operational IFSC — producing a distinctive mix of government-service litigation, land and urban-development disputes, and IFSCA-regulated corporate work.",
  },

  // ──────────────────────────────────────────────────────────────────────
  // RAJASTHAN — the state is split between two High Court seats: the
  // PRINCIPAL seat at Jodhpur and the Jaipur Bench. Which seat hears a writ
  // depends on the district it arises from, so this is the single most
  // important local fact on every Rajasthan page.
  // ──────────────────────────────────────────────────────────────────────
  {
    slug: "jodhpur",
    name: "Jodhpur",
    state: "Rajasthan",
    geo: { lat: 26.2389, lng: 73.0243 },
    population: "15 lakh (metro)",
    neighbourhoods: [
      "Ratanada", "Sardarpura", "Shastri Nagar", "Paota", "Chopasni Housing Board",
      "Basni", "Mandore", "Pal Road", "Banar Road", "High Court Colony",
      "Jhalamand", "Kudi Bhagtasni", "Bhagat Ki Kothi", "Nai Sarak",
    ],
    localBar: "Bar Council of Rajasthan",
    highCourt: { name: "Rajasthan High Court (Principal Seat, Jodhpur)", slug: "rajasthan-high-court" },
    districtCourts: [
      "Jodhpur District & Sessions Court",
      "Jodhpur Metropolitan Magistrate Courts",
      "Commercial Court, Jodhpur",
      "Family Court, Jodhpur",
      "Motor Accident Claims Tribunal (MACT), Jodhpur",
    ],
    districtCourtsSlug: "district-courts-rajasthan",
    blurb:
      "The principal seat of the Rajasthan High Court and the state's appellate centre — where writ, service, revenue, and mining-lease litigation from western Rajasthan is heard, alongside a deep senior-counsel bar.",
  },
  {
    slug: "udaipur",
    name: "Udaipur",
    state: "Rajasthan",
    geo: { lat: 24.5854, lng: 73.7125 },
    population: "10 lakh (metro)",
    neighbourhoods: [
      "Hiran Magri", "Fatehpura", "Ashok Nagar", "Bhuwana", "Sukher",
      "Panchwati", "Shobhagpura", "Goverdhan Vilas", "Madri", "Savina",
      "Bedla", "Chetak Circle", "Udaipole", "Sector 14",
    ],
    localBar: "Bar Council of Rajasthan",
    highCourt: { name: "Rajasthan High Court (Principal Seat, Jodhpur)", slug: "rajasthan-high-court" },
    districtCourts: [
      "Udaipur District & Sessions Court",
      "Commercial Court, Udaipur",
      "Family Court, Udaipur",
      "Motor Accident Claims Tribunal (MACT), Udaipur",
    ],
    districtCourtsSlug: "district-courts-rajasthan",
    blurb:
      "Rajasthan's tourism and hospitality capital, set in the Mewar marble and mining belt — driving land, lease, hotel-licensing, and mining-lease disputes, with writs going to the Jodhpur principal seat.",
  },
  {
    slug: "kota",
    name: "Kota",
    state: "Rajasthan",
    geo: { lat: 25.2138, lng: 75.8648 },
    population: "12 lakh (metro)",
    neighbourhoods: [
      "Talwandi", "Vigyan Nagar", "Rajeev Gandhi Nagar", "Mahaveer Nagar", "Jawahar Nagar",
      "Dadabari", "Landmark City", "Borkheda", "Nayapura", "Gumanpura",
      "Kunhari", "Anantpura", "Shrinathpuram", "Indraprastha Industrial Area",
    ],
    localBar: "Bar Council of Rajasthan",
    highCourt: { name: "Rajasthan High Court (Jaipur Bench)", slug: "rajasthan-high-court" },
    districtCourts: [
      "Kota District & Sessions Court",
      "Commercial Court, Kota",
      "Family Court, Kota",
      "Motor Accident Claims Tribunal (MACT), Kota",
    ],
    districtCourtsSlug: "district-courts-rajasthan",
    blurb:
      "India's coaching capital and a major industrial and power-generation centre — producing an unusual caseload of student and institute disputes, hostel and tenancy claims, consumer complaints, and criminal defence work.",
  },
  {
    slug: "ajmer",
    name: "Ajmer",
    state: "Rajasthan",
    geo: { lat: 26.4499, lng: 74.6399 },
    population: "6 lakh (city)",
    neighbourhoods: [
      "Vaishali Nagar", "Civil Lines", "Panchsheel", "Adarsh Nagar", "Kotra",
      "Pushkar Road", "Foy Sagar Road", "Alwar Gate", "Naya Bazar", "Ramganj",
      "Beawar Road", "Shastri Nagar", "Makarwali", "Nasirabad Road",
    ],
    localBar: "Bar Council of Rajasthan",
    highCourt: { name: "Rajasthan High Court (Jaipur Bench)", slug: "rajasthan-high-court" },
    districtCourts: [
      "Ajmer District & Sessions Court",
      "Family Court, Ajmer",
      "Commercial Court, Ajmer",
      "Motor Accident Claims Tribunal (MACT), Ajmer",
    ],
    districtCourtsSlug: "district-courts-rajasthan",
    blurb:
      "A divisional headquarters and the seat of the Rajasthan Public Service Commission and the state education boards — which makes public-service, recruitment, and education litigation unusually prominent alongside revenue and land disputes.",
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
  // Week 19 tranche — remaining focus matters for the NCR trio
  "anticipatory-bail",
  "mutual-consent-divorce",
  "nclt-ibc",
] as const;

export type CityPracticeSlug = (typeof cityPracticeSlugs)[number];

// Matter slug → parent practice-area slug (for pillar links, related guides,
// and the /practice-areas/[slug] anchor on city×matter pages).
export const cityMatterParentPractice: Partial<Record<CityPracticeSlug, string>> = {
  "cheque-bounce-recovery": "banking-finance",
  "rera-complaint": "property-real-estate",
  "company-registration": "corporate-business",
  "anticipatory-bail": "criminal-law",
  "mutual-consent-divorce": "family-matrimonial",
  "nclt-ibc": "corporate-business",
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
  // Week 19 matter labels
  "anticipatory-bail": {
    short: "Anticipatory Bail",
    title: "Anticipatory Bail Lawyer",
    long: "Anticipatory & Pre-Arrest Bail Lawyer",
    keyword: "anticipatory bail lawyer",
  },
  "mutual-consent-divorce": {
    short: "Mutual Consent Divorce",
    title: "Mutual Consent Divorce Lawyer",
    long: "Mutual Consent Divorce Lawyer",
    keyword: "mutual consent divorce lawyer",
  },
  "nclt-ibc": {
    short: "NCLT / Insolvency",
    title: "NCLT Lawyer",
    long: "NCLT & Insolvency (IBC) Lawyer",
    keyword: "NCLT lawyer",
  },
};

export function getCityBySlug(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}

export function isCityPracticeSlug(slug: string): slug is CityPracticeSlug {
  return (cityPracticeSlugs as readonly string[]).includes(slug);
}
