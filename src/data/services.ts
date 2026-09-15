import { Service } from '../types';

export const SERVICES: Service[] = [
  {
    id: 'education-counselling',
    title: 'Education Counselling',
    iconName: 'Compass',
    shortSummary: 'Personalized 1-on-1 career mapping matching your academic profile, aspirations, and budget.',
    description: 'Our experienced counsellors conduct comprehensive evaluations of your academic achievements, career interests, and financial plan to chart the most viable international educational pathway.',
    features: [
      'Comprehensive profile assessment and aptitude alignment',
      'Country comparison based on lifestyle, budget, and post-study opportunities',
      'Parental guidance and realistic budget forecasting',
      'Unbiased recommendations suited to your long-term career goals'
    ]
  },
  {
    id: 'university-selection',
    title: 'University Selection',
    iconName: 'GraduationCap',
    shortSummary: 'Direct matching with accredited, high-ranking institutions across 10 global destinations.',
    description: 'We help you navigate thousands of universities across Australia, UK, Canada, USA, Europe, and Asia to curate a balanced shortlist of dream, target, and safe universities.',
    features: [
      'Access to accredited public and private partner universities',
      'Analysis of institutional rankings, campus facilities, and graduate employability',
      'Location analysis including cost of living and student community demographics',
      'Direct communication with university admissions representatives'
    ]
  },
  {
    id: 'course-selection',
    title: 'Course Selection',
    iconName: 'BookOpen',
    shortSummary: 'Selecting future-proof undergraduate and postgraduate specializations with strong employment demand.',
    description: 'Ensuring your chosen course aligns with global skill shortage lists, emerging technologies, and personal passion to maximize career dividends.',
    features: [
      'Curriculum depth and module elective comparisons',
      'Identification of degrees offering accredited internships and co-op placements',
      'Verification of entry criteria (prerequisites, minimum marks, subject requirements)',
      'Articulation and credit transfer evaluation where applicable'
    ]
  },
  {
    id: 'application-assistance',
    title: 'Application Assistance',
    iconName: 'FileCheck',
    shortSummary: 'Flawless dossier compilation, Statement of Purpose (SOP) review, and fast submission.',
    description: 'Eliminating application errors and delays. We guide you through assembling certified transcripts, drafting compelling SOPs, and securing letters of recommendation.',
    features: [
      'End-to-end documentation audit and verification checklist',
      'Professional review and constructive feedback on Statements of Purpose (SOP)',
      'Direct electronic submission through official institutional agent portals',
      'Regular tracking and follow-up until Offer Letter (Conditional / Unconditional) is issued'
    ]
  },
  {
    id: 'visa-guidance',
    title: 'Visa Guidance',
    iconName: 'ShieldCheck',
    shortSummary: 'Meticulous visa documentation and interview preparation in strict compliance with immigration rules.',
    description: 'Visa regulations require precise evidence and genuine intent. We guide you through financial matrices, health requirements, and biometric processes.',
    features: [
      'Detailed checklist of statutory immigration requirements per country',
      'Financial documentation audit and funds justification advice',
      'Mock interview preparation for embassy consular rounds (e.g. US F-1 visa)',
      'Strict adherence to high compliance standards (Zero tolerance for fraudulent documents)'
    ]
  },
  {
    id: 'pre-departure',
    title: 'Pre-Departure Support',
    iconName: 'PlaneTakeoff',
    shortSummary: 'Comprehensive briefings on accommodation, travel arrangements, student banking, and cultural orientation.',
    description: 'Your journey does not end when your visa is approved. We ensure you step onto the aircraft fully prepared for life and studies in your new home country.',
    features: [
      'Pre-departure orientation sessions covering packing lists and customs rules',
      'Guidance on student accommodation, homestays, and on-campus halls',
      'Briefing on international student health cover (OSHC/IHS) and medical care',
      'Connecting with Bhutanese student associations in destination cities'
    ]
  },
  {
    id: 'english-test-prep',
    title: 'English Test Guidance',
    iconName: 'Languages',
    shortSummary: 'Advice and workshop orientation for IELTS, PTE Academic, and TOEFL examinations.',
    description: 'Guidance on test format selection, registration, score benchmarks, and preparatory study resources to meet required institution cut-offs.',
    features: [
      'Diagnostic advice to choose between IELTS, PTE, or TOEFL',
      'Understanding university band requirements (overall and individual components)',
      'Exam registration assistance and scheduling tips',
      'Periodic test-taking strategy sessions'
    ]
  },
  {
    id: 'scholarship-guidance',
    title: 'Scholarship Guidance',
    iconName: 'Award',
    shortSummary: 'Identifying merit-based, international student bursaries and tuition fee discounts.',
    description: 'Helping qualified Bhutanese students discover and apply for institutional scholarships that lower the total cost of higher education.',
    features: [
      'Curated lists of automatic and application-based university bursaries',
      'Guidance on drafting scholarship essays and research proposals',
      'Timeline management for scholarship application deadlines',
      'Eligibility benchmarking based on past academic performance'
    ]
  }
];
