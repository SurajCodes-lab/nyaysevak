export interface HighCourt {
  slug: string;
  name: string;
  jurisdiction: string;
  benches: string[];
}

export const highCourts: HighCourt[] = [
  { slug: "allahabad-high-court", name: "Allahabad HC", jurisdiction: "Uttar Pradesh", benches: ["Lucknow"] },
  { slug: "andhra-pradesh-high-court", name: "Andhra Pradesh HC", jurisdiction: "Andhra Pradesh", benches: ["Amaravati"] },
  { slug: "bombay-high-court", name: "Bombay HC", jurisdiction: "Maharashtra, Goa, Dadra & Nagar Haveli, Daman & Diu", benches: ["Nagpur", "Aurangabad", "Panaji"] },
  { slug: "calcutta-high-court", name: "Calcutta HC", jurisdiction: "West Bengal, Andaman & Nicobar Islands", benches: ["Port Blair"] },
  { slug: "chhattisgarh-high-court", name: "Chhattisgarh HC", jurisdiction: "Chhattisgarh", benches: ["Bilaspur"] },
  { slug: "delhi-high-court", name: "Delhi HC", jurisdiction: "NCT of Delhi", benches: [] },
  { slug: "gauhati-high-court", name: "Gauhati HC", jurisdiction: "Assam, Nagaland, Mizoram, Arunachal Pradesh", benches: ["Kohima", "Aizawl", "Itanagar"] },
  { slug: "gujarat-high-court", name: "Gujarat HC", jurisdiction: "Gujarat", benches: ["Ahmedabad"] },
  { slug: "himachal-pradesh-high-court", name: "Himachal Pradesh HC", jurisdiction: "Himachal Pradesh", benches: ["Shimla"] },
  { slug: "jammu-kashmir-ladakh-high-court", name: "J&K and Ladakh HC", jurisdiction: "Jammu & Kashmir, Ladakh", benches: ["Jammu", "Srinagar"] },
  { slug: "jharkhand-high-court", name: "Jharkhand HC", jurisdiction: "Jharkhand", benches: ["Ranchi"] },
  { slug: "karnataka-high-court", name: "Karnataka HC", jurisdiction: "Karnataka", benches: ["Dharwad", "Kalaburagi"] },
  { slug: "kerala-high-court", name: "Kerala HC", jurisdiction: "Kerala, Lakshadweep", benches: ["Ernakulam"] },
  { slug: "madhya-pradesh-high-court", name: "Madhya Pradesh HC", jurisdiction: "Madhya Pradesh", benches: ["Indore", "Gwalior"] },
  { slug: "madras-high-court", name: "Madras HC", jurisdiction: "Tamil Nadu, Puducherry", benches: ["Madurai"] },
  { slug: "manipur-high-court", name: "Manipur HC", jurisdiction: "Manipur", benches: ["Imphal"] },
  { slug: "meghalaya-high-court", name: "Meghalaya HC", jurisdiction: "Meghalaya", benches: ["Shillong"] },
  { slug: "orissa-high-court", name: "Orissa HC", jurisdiction: "Odisha", benches: ["Cuttack"] },
  { slug: "patna-high-court", name: "Patna HC", jurisdiction: "Bihar", benches: ["Patna"] },
  { slug: "punjab-haryana-high-court", name: "Punjab & Haryana HC", jurisdiction: "Punjab, Haryana, Chandigarh", benches: ["Chandigarh"] },
  { slug: "rajasthan-high-court", name: "Rajasthan HC", jurisdiction: "Rajasthan", benches: ["Jodhpur", "Jaipur"] },
  { slug: "sikkim-high-court", name: "Sikkim HC", jurisdiction: "Sikkim", benches: ["Gangtok"] },
  { slug: "telangana-high-court", name: "Telangana HC", jurisdiction: "Telangana", benches: ["Hyderabad"] },
  { slug: "tripura-high-court", name: "Tripura HC", jurisdiction: "Tripura", benches: ["Agartala"] },
  { slug: "uttarakhand-high-court", name: "Uttarakhand HC", jurisdiction: "Uttarakhand", benches: ["Nainital"] },
];

export interface TribunalGroup {
  slug: string;
  title: string;
  items: string[];
}

export const tribunalGroups: TribunalGroup[] = [
  {
    slug: "financial-corporate-tribunals",
    title: "Financial & Corporate",
    items: ["NCLT - All 16 Benches", "NCLAT", "DRT - All locations", "DRAT", "SAT"],
  },
  {
    slug: "tax-tribunals",
    title: "Tax Tribunals",
    items: ["ITAT - All Benches", "GST Appellate Tribunals", "CESTAT"],
  },
  {
    slug: "regulatory-tribunals",
    title: "Regulatory Tribunals",
    items: ["CAT - All Benches", "NGT - All Benches", "TDSAT", "RERA - All States", "Armed Forces Tribunal", "APTEL"],
  },
  {
    slug: "consumer-labour-tribunals",
    title: "Consumer & Labour",
    items: ["NCDRC", "State Consumer Commissions", "District Consumer Forums", "Labour Courts - All States", "Industrial Tribunals", "Family Courts"],
  },
  {
    slug: "specialized-tribunals",
    title: "Specialized & Other",
    items: ["RERA Appellate Tribunals", "Railway Claims Tribunal", "IPAB (Intellectual Property Appellate Board)", "EPF Appellate Tribunal", "ESI Courts"],
  },
  {
    slug: "criminal-special-courts",
    title: "Criminal & Special Courts",
    items: ["Motor Accident Claims Tribunal (MACT)", "Juvenile Justice Boards", "Special Courts (CBI)", "Special Courts (ED)", "Special Courts (NIA)", "Special Courts (NDPS)"],
  },
  {
    slug: "lok-adalats",
    title: "Lok Adalats",
    items: ["National Lok Adalat", "State Lok Adalats", "District Lok Adalats", "Permanent Lok Adalats (Public Utility Services)"],
  },
];

export interface DistrictCourtState {
  slug: string;
  state: string;
  type: "state" | "ut";
  districts: string[];
}

function toSlug(s: string): string {
  return s.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export const districtCourts: DistrictCourtState[] = ([
  // States
  {
    state: "Andhra Pradesh",
    type: "state",
    districts: ["Visakhapatnam", "Vijayawada", "Guntur", "Nellore", "Kurnool", "Tirupati", "Rajahmundry", "Kakinada", "Anantapur", "Kadapa", "Eluru", "Ongole", "Srikakulam", "Chittoor"],
  },
  {
    state: "Arunachal Pradesh",
    type: "state",
    districts: ["Itanagar", "Naharlagun", "Tawang", "Bomdila", "Ziro", "Pasighat", "Along", "Tezu"],
  },
  {
    state: "Assam",
    type: "state",
    districts: ["Guwahati (Kamrup Metro)", "Dibrugarh", "Jorhat", "Silchar", "Nagaon", "Tezpur", "Tinsukia", "Barpeta", "Goalpara", "Nalbari", "Sivasagar", "Dhubri"],
  },
  {
    state: "Bihar",
    type: "state",
    districts: ["Patna", "Gaya", "Muzaffarpur", "Bhagalpur", "Darbhanga", "Purnia", "Ara (Bhojpur)", "Begusarai", "Munger", "Chapra (Saran)", "Samastipur", "Hajipur (Vaishali)", "Nalanda", "Sitamarhi"],
  },
  {
    state: "Chhattisgarh",
    type: "state",
    districts: ["Raipur", "Bilaspur", "Durg", "Rajnandgaon", "Korba", "Jagdalpur (Bastar)", "Raigarh", "Ambikapur (Surguja)", "Mahasamund", "Dhamtari"],
  },
  {
    state: "Goa",
    type: "state",
    districts: ["Panaji (North Goa)", "Margao (South Goa)"],
  },
  {
    state: "Gujarat",
    type: "state",
    districts: ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Bhavnagar", "Jamnagar", "Junagadh", "Gandhinagar", "Kutch (Bhuj)", "Anand", "Mehsana", "Bharuch", "Navsari", "Valsad", "Patan", "Banaskantha (Palanpur)"],
  },
  {
    state: "Haryana",
    type: "state",
    districts: ["Gurugram", "Faridabad", "Ambala", "Karnal", "Panipat", "Hisar", "Rohtak", "Sonipat", "Panchkula", "Sirsa", "Bhiwani", "Rewari", "Jhajjar", "Yamunanagar", "Kurukshetra"],
  },
  {
    state: "Himachal Pradesh",
    type: "state",
    districts: ["Shimla", "Dharamshala (Kangra)", "Mandi", "Kullu", "Solan", "Una", "Bilaspur", "Hamirpur", "Chamba", "Sirmaur (Nahan)"],
  },
  {
    state: "Jharkhand",
    type: "state",
    districts: ["Ranchi", "Jamshedpur (East Singhbhum)", "Dhanbad", "Bokaro", "Hazaribagh", "Deoghar", "Giridih", "Dumka", "Palamu (Daltonganj)", "Ramgarh"],
  },
  {
    state: "Karnataka",
    type: "state",
    districts: ["Bengaluru Urban", "Bengaluru Rural", "Mysuru", "Hubballi-Dharwad", "Mangaluru (Dakshina Kannada)", "Belagavi", "Kalaburagi", "Shivamogga", "Tumakuru", "Davanagere", "Ballari", "Udupi", "Hassan", "Raichur", "Vijayapura"],
  },
  {
    state: "Kerala",
    type: "state",
    districts: ["Thiruvananthapuram", "Kochi (Ernakulam)", "Kozhikode", "Thrissur", "Kollam", "Palakkad", "Alappuzha", "Kannur", "Kottayam", "Malappuram", "Idukki", "Wayanad", "Pathanamthitta", "Kasaragod"],
  },
  {
    state: "Madhya Pradesh",
    type: "state",
    districts: ["Bhopal", "Indore", "Jabalpur", "Gwalior", "Ujjain", "Sagar", "Rewa", "Satna", "Dewas", "Ratlam", "Chhindwara", "Hoshangabad", "Vidisha", "Khandwa", "Balaghat"],
  },
  {
    state: "Maharashtra",
    type: "state",
    districts: ["Mumbai City", "Mumbai Suburban", "Pune", "Nagpur", "Thane", "Nashik", "Aurangabad", "Solapur", "Kolhapur", "Satara", "Nanded", "Amravati", "Akola", "Ratnagiri", "Jalgaon", "Sangli", "Latur", "Palghar", "Beed"],
  },
  {
    state: "Manipur",
    type: "state",
    districts: ["Imphal East", "Imphal West", "Thoubal", "Bishnupur", "Churachandpur"],
  },
  {
    state: "Meghalaya",
    type: "state",
    districts: ["Shillong (East Khasi Hills)", "Tura (West Garo Hills)", "Jowai (West Jaintia Hills)", "Nongpoh (Ri-Bhoi)"],
  },
  {
    state: "Mizoram",
    type: "state",
    districts: ["Aizawl", "Lunglei", "Champhai", "Serchhip", "Kolasib"],
  },
  {
    state: "Nagaland",
    type: "state",
    districts: ["Kohima", "Dimapur", "Mokokchung", "Tuensang", "Wokha", "Mon"],
  },
  {
    state: "Odisha",
    type: "state",
    districts: ["Cuttack", "Bhubaneswar (Khordha)", "Berhampur (Ganjam)", "Sambalpur", "Balasore", "Rourkela (Sundargarh)", "Puri", "Baripada (Mayurbhanj)", "Koraput", "Angul", "Bolangir", "Jharsuguda", "Dhenkanal"],
  },
  {
    state: "Punjab",
    type: "state",
    districts: ["Ludhiana", "Amritsar", "Jalandhar", "Patiala", "Bathinda", "Mohali (SAS Nagar)", "Hoshiarpur", "Firozpur", "Moga", "Sangrur", "Kapurthala", "Muktsar", "Pathankot", "Gurdaspur", "Mansa"],
  },
  {
    state: "Rajasthan",
    type: "state",
    districts: ["Jaipur", "Jodhpur", "Udaipur", "Kota", "Ajmer", "Bikaner", "Alwar", "Bhilwara", "Sikar", "Bharatpur", "Sri Ganganagar", "Pali", "Chittorgarh", "Jaisalmer", "Nagaur", "Tonk", "Bundi"],
  },
  {
    state: "Sikkim",
    type: "state",
    districts: ["Gangtok (East Sikkim)", "Namchi (South Sikkim)", "Gyalshing (West Sikkim)", "Mangan (North Sikkim)"],
  },
  {
    state: "Tamil Nadu",
    type: "state",
    districts: ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli", "Salem", "Tirunelveli", "Vellore", "Erode", "Thoothukudi", "Dindigul", "Thanjavur", "Cuddalore", "Kancheepuram", "Tiruvannamalai", "Villupuram", "Namakkal", "Karur", "Krishnagiri"],
  },
  {
    state: "Telangana",
    type: "state",
    districts: ["Hyderabad", "Rangareddy", "Warangal", "Karimnagar", "Nizamabad", "Khammam", "Nalgonda", "Medak", "Adilabad", "Mahbubnagar", "Sangareddy", "Siddipet"],
  },
  {
    state: "Tripura",
    type: "state",
    districts: ["Agartala (West Tripura)", "Dharmanagar (North Tripura)", "Udaipur (Gomati)", "Kailashahar (Unakoti)"],
  },
  {
    state: "Uttar Pradesh",
    type: "state",
    districts: ["Lucknow", "Allahabad (Prayagraj)", "Varanasi", "Agra", "Kanpur Nagar", "Meerut", "Ghaziabad", "Noida (Gautam Buddh Nagar)", "Bareilly", "Gorakhpur", "Moradabad", "Aligarh", "Saharanpur", "Jhansi", "Mathura", "Firozabad", "Muzaffarnagar", "Sultanpur", "Azamgarh", "Faizabad (Ayodhya)", "Basti", "Mirzapur", "Etawah", "Bulandshahr", "Rae Bareli"],
  },
  {
    state: "Uttarakhand",
    type: "state",
    districts: ["Dehradun", "Haridwar", "Nainital", "Udham Singh Nagar", "Almora", "Haldwani", "Tehri Garhwal", "Pauri Garhwal", "Pithoragarh", "Chamoli", "Champawat", "Rudraprayag", "Bageshwar"],
  },
  {
    state: "West Bengal",
    type: "state",
    districts: ["Kolkata", "Howrah", "North 24 Parganas (Barasat)", "South 24 Parganas (Alipore)", "Hooghly", "Burdwan (Purba Bardhaman)", "Siliguri (Darjeeling)", "Asansol (Paschim Bardhaman)", "Malda", "Murshidabad", "Nadia (Krishnanagar)", "Midnapore (Paschim & Purba)", "Bankura", "Birbhum (Suri)", "Jalpaiguri", "Cooch Behar"],
  },
  // Union Territories
  {
    state: "Delhi",
    type: "ut",
    districts: ["Tis Hazari Courts", "Saket Courts", "Patiala House Courts", "Karkardooma Courts", "Dwarka Courts", "Rohini Courts", "New Delhi District", "Central District", "North District", "South District", "East District"],
  },
  {
    state: "Jammu & Kashmir",
    type: "ut",
    districts: ["Srinagar", "Jammu", "Anantnag", "Baramulla", "Pulwama", "Kupwara", "Budgam", "Udhampur", "Kathua", "Rajouri", "Poonch", "Doda"],
  },
  {
    state: "Ladakh",
    type: "ut",
    districts: ["Leh", "Kargil"],
  },
  {
    state: "Chandigarh",
    type: "ut",
    districts: ["Chandigarh District Court"],
  },
  {
    state: "Puducherry",
    type: "ut",
    districts: ["Puducherry", "Karaikal", "Mahe", "Yanam"],
  },
  {
    state: "Andaman & Nicobar Islands",
    type: "ut",
    districts: ["Port Blair"],
  },
  {
    state: "Dadra & Nagar Haveli and Daman & Diu",
    type: "ut",
    districts: ["Silvassa", "Daman", "Diu"],
  },
  {
    state: "Lakshadweep",
    type: "ut",
    districts: ["Kavaratti"],
  },
] as Omit<DistrictCourtState, "slug">[]).map((d) => ({ ...d, slug: `district-courts-${toSlug(d.state)}` }));
