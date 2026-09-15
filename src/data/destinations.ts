import { Destination } from '../types';

export const DESTINATIONS: Destination[] = [
  {
    id: 'australia',
    code: 'AU',
    name: 'Australia',
    flagEmoji: '🇦🇺',
    image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=800&q=80',
    tagline: 'Top-ranking universities, post-study work rights and vibrant multicultural community',
    popularPoints: 'Group of Eight universities, up to 4 years post-study work, high quality of living.',
    overview: 'Australia is a prime destination for Bhutanese scholars, offering internationally recognized qualifications, research-led degrees, and safe, vibrant student cities.',
    whyStudy: [
      'Internationally accredited Group of Eight and leading technology universities',
      'Flexible post-study work rights (Temporary Graduate visa Subclass 485)',
      'Diverse cultural community and student support infrastructure',
      'Work rights during term time for international students'
    ],
    popularCourses: ['Information Technology & Cybersecurity', 'Nursing & Public Health', 'Business Analytics & Commerce', 'Civil & Environmental Engineering'],
    intakes: ['February / March', 'July / August', 'November (limited)'],
    postStudyWork: '2 to 4 years depending on qualification level and study location.',
    averageTuition: 'AUD $22,000 – $45,000 per year',
    costOfLiving: 'Approx. AUD $24,500 per year (financial requirement guideline)',
    admissionRequirements: [
      'Completion of BHSEC (Class 12) or Bachelor degree with verified academic transcripts',
      'English proficiency: IELTS, PTE Academic, or TOEFL iBT test scores',
      'Genuine Student (GS) assessment requirements and statement of purpose'
    ],
    visaGuidanceNote: 'Student Visa (Subclass 500) compliance requires proof of financial capacity, health insurance (OSHC), and clear academic intention. Visa grant is solely at the discretion of the Department of Home Affairs.'
  },
  {
    id: 'united-kingdom',
    code: 'GB',
    name: 'United Kingdom',
    flagEmoji: '🇬🇧',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80',
    tagline: 'World-renowned degrees, rich heritage, and 1-year master\'s programs',
    popularPoints: 'Russell Group institutions, accelerated degrees, 2-year Graduate Route visa.',
    overview: 'The UK is synonymous with academic prestige, home to centuries-old universities and leading modern institutions providing high-efficiency 1-year Master\'s and 3-year Bachelor\'s degrees.',
    whyStudy: [
      'Shorter degree duration: 3-year Bachelor\'s and 1-year Master\'s save living expenses and tuition',
      'Graduate Route allows 2 years (3 years for PhD) of post-study work',
      'Globally respected Russell Group and historic universities',
      'Access to international industry hubs and professional networks'
    ],
    popularCourses: ['Data Science & Artificial Intelligence', 'Finance & Accounting', 'Law & International Relations', 'Biomedical Science'],
    intakes: ['September / October (Major)', 'January / February'],
    postStudyWork: '2 years for undergraduate/master\'s graduates via the Graduate Route.',
    averageTuition: '£14,000 – £30,000 per year',
    costOfLiving: 'Approx. £9,207 (outside London) or £12,006 (inside London) per 9-month academic year',
    admissionRequirements: [
      'Class 12 board marks with competitive percentages or recognized degree',
      'English test scores (IELTS Academic / PTE / Duolingo where accepted)',
      'Personal statement, academic references, and valid passport'
    ],
    visaGuidanceNote: 'Confirmation of Acceptance for Studies (CAS) from a licensed UK sponsor is required before Student Visa application. Visa issuance is determined exclusively by UK Visas and Immigration (UKVI).'
  },
  {
    id: 'canada',
    code: 'CA',
    name: 'Canada',
    flagEmoji: '🇨🇦',
    image: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=800&q=80',
    tagline: 'High quality education, affordable tuition, and clear post-study pathways',
    popularPoints: 'Designated Learning Institutions, co-op work placements, Post-Graduation Work Permit (PGWP).',
    overview: 'Canada combines globally top-ranked research universities with hands-on polytechnics and community colleges offering co-operative work experience programs in safe, welcoming communities.',
    whyStudy: [
      'High standard of living in world-renowned student-friendly cities like Toronto, Vancouver, and Montreal',
      'Post-Graduation Work Permit (PGWP) of up to 3 years for eligible programs',
      'Hands-on practical colleges and prestigious research universities',
      'Competitive tuition compared to other major Western destinations'
    ],
    popularCourses: ['Computer Science & Cloud Computing', 'Hospitality & Tourism Management', 'Supply Chain Management', 'Health Administration'],
    intakes: ['September (Fall)', 'January (Winter)', 'May (Spring/Summer)'],
    postStudyWork: 'Up to 3 years depending on program length and institution eligibility.',
    averageTuition: 'CAD $18,000 – $36,000 per year',
    costOfLiving: 'Approx. CAD $20,635 per year (financial requirement guideline)',
    admissionRequirements: [
      'Provincial or central board high school credentials or university degree',
      'IELTS Academic, PTE, or TOEFL iBT test scores',
      'Provincial Attestation Letter (PAL) where required under current IRCC regulations'
    ],
    visaGuidanceNote: 'Study Permit application requires acceptance at a Designated Learning Institution (DLI) and Provincial Attestation Letter. Approvals are strictly determined by Immigration, Refugees and Citizenship Canada (IRCC).'
  },
  {
    id: 'united-states',
    code: 'US',
    name: 'United States',
    flagEmoji: '🇺🇸',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
    tagline: 'Diverse academic institutions, cutting-edge research, and flexible curricula',
    popularPoints: 'Over 4,000 accredited universities, OPT/STEM OPT work opportunities, campus life.',
    overview: 'The United States hosts the greatest diversity of higher education institutions globally, providing unparalleled research resources, campus facilities, and STEM work pathways.',
    whyStudy: [
      'Flexible curriculum allowing dual majors, minors, and interdisciplinary study',
      'STEM programs offer up to 36 months of Optional Practical Training (OPT)',
      'Pioneering research hubs, incubation centers, and university laboratories',
      'Generous merit scholarships and graduate assistantships'
    ],
    popularCourses: ['Software Engineering & AI', 'Business Administration (MBA)', 'Biotechnology', 'Electrical Engineering'],
    intakes: ['Fall (August / September)', 'Spring (January)', 'Summer (May - limited)'],
    postStudyWork: '12 months standard OPT; 24-month extension available for qualifying STEM degrees (total 36 months).',
    averageTuition: 'USD $20,000 – $50,000 per year',
    costOfLiving: 'Approx. USD $12,000 – $22,000 per academic year',
    admissionRequirements: [
      'High school diploma or Bachelor\'s transcripts with GPA evaluation (WES if needed)',
      'English proficiency (TOEFL, IELTS, Duolingo) and SAT/GRE where required',
      'Statement of purpose, letters of recommendation, and financial documentation'
    ],
    visaGuidanceNote: 'Form I-20 issued by SEVP-approved institution followed by F-1 visa interview at a US Embassy/Consulate. Consular officer has full jurisdiction over visa adjudication.'
  },
  {
    id: 'new-zealand',
    code: 'NZ',
    name: 'New Zealand',
    flagEmoji: '🇳🇿',
    image: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&w=800&q=80',
    tagline: 'World-class education in a safe, pristine environment with high student satisfaction',
    popularPoints: 'All 8 universities ranked in the top 3% globally, welcoming culture, post-study work.',
    overview: 'New Zealand offers world-leading education with an emphasis on research, creative innovation, and environmental sustainability amidst breathtaking natural beauty.',
    whyStudy: [
      '100% of New Zealand universities are ranked within the top 3% worldwide (QS)',
      'Safe, peaceful, and progressive environment for international scholars',
      'Post-study work visas available for eligible degree holders',
      'Excellent student pastoral care code mandated by the New Zealand government'
    ],
    popularCourses: ['Environmental Science & Forestry', 'Information Technology', 'Agribusiness & Agriculture', 'Construction Project Management'],
    intakes: ['February / March (Main)', 'July'],
    postStudyWork: '1 to 3 years depending on qualification level.',
    averageTuition: 'NZD $24,000 – $38,000 per year',
    costOfLiving: 'Approx. NZD $20,000 per year',
    admissionRequirements: [
      'Class 12 or Bachelor degree with good academic standing',
      'IELTS Academic, PTE Academic, or TOEFL',
      'Statement of intent and verification of funds'
    ],
    visaGuidanceNote: 'Fee Paying Student Visa requires unconditional offer of place and proof of maintenance funds. Decision rests with Immigration New Zealand.'
  },
  {
    id: 'ireland',
    code: 'IE',
    name: 'Ireland',
    flagEmoji: '🇮🇪',
    image: 'https://images.unsplash.com/photo-1549918864-48ac978761a4?auto=format&fit=crop&w=800&q=80',
    tagline: 'European tech hub, English-speaking education, and generous Third Level Graduate scheme',
    popularPoints: 'Home to European headquarters of Google, Meta, Apple; 2-year post-study work for masters.',
    overview: 'Ireland is Europe\'s premier technology and pharmaceuticals hub. As an English-speaking EU country, it offers high-calibre academic credentials paired with dynamic career opportunities.',
    whyStudy: [
      'The Silicon Valley of Europe with European bases of global multinational tech firms',
      'Third Level Graduate Scheme grants up to 2 years post-study work for Master\'s graduates',
      'Friendly, English-speaking nation known for warmth and culture',
      'Universities ranked among the top 1% worldwide in research impact'
    ],
    popularCourses: ['Cloud Computing & Analytics', 'Pharmaceutical Science', 'International Business', 'Digital Marketing'],
    intakes: ['September (Primary)', 'January (Selected courses)'],
    postStudyWork: '1 year for Bachelor (Honours); up to 2 years for Master\'s graduates.',
    averageTuition: '€12,000 – €25,000 per year',
    costOfLiving: 'Approx. €10,000 – €14,000 per year',
    admissionRequirements: [
      'Higher secondary school certificate or relevant university degree',
      'English language testing: IELTS or Duolingo/PTE',
      'Proof of financial independence and medical cover'
    ],
    visaGuidanceNote: 'Irish Student Visa requires full tuition fee settlement and valid health insurance. Irish Naturalisation and Immigration Service (INIS) is the deciding authority.'
  },
  {
    id: 'singapore',
    code: 'SG',
    name: 'Singapore',
    flagEmoji: '🇸🇬',
    image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=800&q=80',
    tagline: 'Asia\'s premier education capital, strategic proximity, and global business connectivity',
    popularPoints: 'World top 20 universities (NUS, NTU), global commercial center, close to Bhutan.',
    overview: 'Singapore stands at the crossroads of global innovation and commerce, offering top-tier university credentials and private institute pathways within easy travel distance from Bhutan.',
    whyStudy: [
      'Proximity to South Asia and Bhutan with convenient direct flight connections',
      'Pinnacle of educational quality with globally renowned institutions',
      'Safe, orderly, and highly developed cosmopolitan urban environment',
      'Hub for multinational banking, logistics, and technology headquarters'
    ],
    popularCourses: ['Finance & Wealth Management', 'Logistics & Supply Chain', 'Hospitality & Event Management', 'Computer Science'],
    intakes: ['August', 'January', 'Multiple intakes for private institutions'],
    postStudyWork: 'Dependent on employment pass eligibility and tuition grant schemes.',
    averageTuition: 'SGD $18,000 – $38,000 per year',
    costOfLiving: 'Approx. SGD $15,000 – $22,000 per year',
    admissionRequirements: [
      'Class 12 academic transcripts or undergraduate marks',
      'English proficiency or institutional placement assessment',
      'Solar application details and medical examination'
    ],
    visaGuidanceNote: 'Student Pass issued by the Immigration & Checkpoints Authority (ICA) of Singapore following university solar registration.'
  },
  {
    id: 'germany',
    code: 'DE',
    name: 'Germany',
    flagEmoji: '🇩🇪',
    image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=800&q=80',
    tagline: 'Engineering powerhouse, low or zero tuition fees at public universities, 18-month job seeker visa',
    popularPoints: 'World leader in engineering, automotive, and sustainability research.',
    overview: 'Germany provides cutting-edge technical education with nominal or zero tuition fees at many state universities, making it an attractive destination for ambitious STEM scholars.',
    whyStudy: [
      'Tuition-free or very low tuition at state public universities for international students',
      'Leading engineering, robotics, and industrial technology research facilities',
      '18-month post-study residence permit to search for qualified employment',
      'Strong economy and demand for qualified engineering and IT professionals'
    ],
    popularCourses: ['Automotive & Mechanical Engineering', 'Data Engineering', 'Renewable Energy', 'International Business'],
    intakes: ['Winter (September / October)', 'Summer (March / April)'],
    postStudyWork: 'Up to 18 months job-seeking visa following graduation.',
    averageTuition: '€0 – €3,000 per year (public universities; semester fees apply); private €10,000 – €18,000',
    costOfLiving: 'Approx. €11,208 per year (Blocked Account requirement)',
    admissionRequirements: [
      'Class 12 + 1 year university or Studienkolleg for direct bachelor admission, or recognized bachelor for master\'s',
      'English certificate (IELTS) for English-taught degrees; German A1/B2 for German-taught degrees',
      'Blocked bank account (Sperrkonto) showing mandatory maintenance funds'
    ],
    visaGuidanceNote: 'German National Visa (category D) requires APS certificate or university admission plus proof of Sperrkonto funds.'
  },
  {
    id: 'france',
    code: 'FR',
    name: 'France',
    flagEmoji: '🇫🇷',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80',
    tagline: 'Cultural prestige, globally recognized business schools, and subsidized student benefits',
    popularPoints: 'Triple-accredited Grandes Écoles, state housing subsidy (CAF), 2-year post-study permit.',
    overview: 'France provides world-class education in business, management, art, culinary, and engineering, supported by state student welfare subsidies and generous post-study pathways.',
    whyStudy: [
      'Home to world-ranked business schools (HEC, INSEAD, ESSEC, EDHEC)',
      'Subsidized student housing (CAF) and discounted transit for all students',
      'Hundreds of programs taught entirely in English',
      '2-year APS / post-study residence authorization for Master\'s graduates'
    ],
    popularCourses: ['Luxury Brand Management', 'International Business & MBA', 'Culinary Arts & Hospitality', 'Aeronautical Engineering'],
    intakes: ['September / October (Major)', 'January / February'],
    postStudyWork: 'Up to 2 years for Master\'s degree holders via RECE (Recherche d\'emploi / création d\'entreprise).',
    averageTuition: '€4,000 – €18,000 per year depending on public or private institution',
    costOfLiving: 'Approx. €8,000 – €12,000 per year (less with CAF housing aid)',
    admissionRequirements: [
      'Academic certificates with English or French certified translation',
      'IELTS or TOEFL scores for English-track programs',
      'Campus France procedural evaluation and motivation letter'
    ],
    visaGuidanceNote: 'Long-Stay Student Visa (VLS-TS) processed via Campus France and French Consular services.'
  },
  {
    id: 'switzerland',
    code: 'CH',
    name: 'Switzerland',
    flagEmoji: '🇨🇭',
    image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=800&q=80',
    tagline: 'Global gold standard for hospitality, culinary arts, banking, and scientific research',
    popularPoints: 'World #1 hospitality institutes, paid industry internships, unparalleled quality of life.',
    overview: 'Switzerland stands as the historic birthplace of luxury hospitality management and elite scientific research, providing immersive practical training with paid internships.',
    whyStudy: [
      'World-ranking hospitality academies with mandatory paid international internships',
      'Pristine, secure, and technologically advanced living standards in the heart of Europe',
      'Direct placement pipelines into international hotel groups, diplomacy, and finance',
      'Multilingual, multicultural exposure'
    ],
    popularCourses: ['International Hospitality Management', 'Culinary Arts & Pastry', 'Wealth Management', 'Biomedical Technology'],
    intakes: ['February', 'September', 'Quarterly intakes for culinary/hospitality schools'],
    postStudyWork: '6-month job search permit for qualifying higher education graduates.',
    averageTuition: 'CHF 25,000 – CHF 45,000 per year (often includes full room and board in hospitality institutes)',
    costOfLiving: 'Approx. CHF 18,000 – CHF 24,000 per year',
    admissionRequirements: [
      'High school completion or bachelor degree with minimum age 18',
      'English proficiency certification (IELTS / Cambridge / TOEFL)',
      'Motivation letter, CV, and financial solvency proof'
    ],
    visaGuidanceNote: 'Swiss National Visa (Type D) requires cantonal migration authority clearance and institution deposit verification.'
  }
];
