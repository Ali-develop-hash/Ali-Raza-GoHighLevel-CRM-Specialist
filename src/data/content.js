import astra01 from '../assets/projects/astra/1.png';
import astra02 from '../assets/projects/astra/2.png';
import astra03 from '../assets/projects/astra/3.png';
import astra04 from '../assets/projects/astra/4.png';
import astra05 from '../assets/projects/astra/5.png';
import astra06 from '../assets/projects/astra/6.png';
import astra07 from '../assets/projects/astra/7.png';
import astra08 from '../assets/projects/astra/8.png';
import astra09 from '../assets/projects/astra/9.png';
import astra10 from '../assets/projects/astra/10.png';
import astra11 from '../assets/projects/astra/11.png';
import astra12 from '../assets/projects/astra/12.png';
import astra13 from '../assets/projects/astra/13.png';
import astra14 from '../assets/projects/astra/14.png';
import astra15 from '../assets/projects/astra/15.png';
import astra16 from '../assets/projects/astra/16.png';
import astra17 from '../assets/projects/astra/17.png';

import prime01 from '../assets/projects/prime-estate/1.png';
import prime02 from '../assets/projects/prime-estate/2.png';
import prime03 from '../assets/projects/prime-estate/3.png';
import prime04 from '../assets/projects/prime-estate/4.png';
import prime05 from '../assets/projects/prime-estate/5.png';
import prime06 from '../assets/projects/prime-estate/6.png';
import prime07 from '../assets/projects/prime-estate/7.png';
import prime08 from '../assets/projects/prime-estate/8.png';
import prime09 from '../assets/projects/prime-estate/9.png';
import prime10 from '../assets/projects/prime-estate/10.png';
import prime11 from '../assets/projects/prime-estate/11.png';
import prime12 from '../assets/projects/prime-estate/12.png';

import raza01 from '../assets/projects/raza-associates/1.png';
import raza02 from '../assets/projects/raza-associates/2.png';
import raza03 from '../assets/projects/raza-associates/3.png';
import raza04 from '../assets/projects/raza-associates/4.png';
import raza05 from '../assets/projects/raza-associates/5.png';
import raza06 from '../assets/projects/raza-associates/6.png';
import raza07 from '../assets/projects/raza-associates/7.png';

/* ==========================================================================
   SERVICES & EXPERTISE
   ========================================================================== */
export const services = [
  {
    id: 'pipeline',
    title: 'Advanced Pipeline & Automation Architecture',
    desc: 'Multi-stage revenue pipelines with conditional branching, automated opportunity stage updates, SLA alert triggers, and automated task dispatch.',
    deliverables: ['Custom Stage Triggers', 'Stalled Opportunity Watchdog', 'Team Task Assignment', 'Revenue Sync'],
    badge: 'Core Specialty'
  },
  {
    id: 'textback',
    title: 'Sub-60s Missed Call Text-Back System',
    desc: 'Instant 2-way SMS engagement the second an inbound call goes unanswered, capturing hot leads before they contact competitors.',
    deliverables: ['Instant SMS Auto-Responder', 'Dynamic Custom Values', 'Team Notification Ring', 'After-Hours Logic'],
    badge: 'High ROI'
  },
  {
    id: 'ai',
    title: 'AI Conversation & Qualification Agents',
    desc: 'Custom-prompted Conversation AI workflows trained on your business knowledge base to qualify prospects 24/7 and auto-book appointments.',
    deliverables: ['FAQ & Knowledge Base Training', 'Budget & Intent Triage', 'Direct Calendar Booking', 'Human Agent Hand-off'],
    badge: 'Next-Gen AI'
  },
  {
    id: 'reviews',
    title: 'Automated Review & Reputation Engine',
    desc: 'Post-service review generation campaigns via SMS & Email with smart sentiment filtering and direct 5-star Google review routing.',
    deliverables: ['Google / Trustpilot Direct Links', 'Timing Delay Logic', 'Review Gate Filtering', 'Re-engagement Drips'],
    badge: 'Social Proof'
  },
  {
    id: 'calendar',
    title: 'Multi-Tier Calendar & Booking Workflows',
    desc: 'Round-robin team calendar routing, automated pre-meeting SMS/Email reminder sequences, and intelligent no-show recovery campaigns.',
    deliverables: ['Round-Robin Team Distribution', '24h/1h SMS Reminders', 'No-Show Reactivation', 'Deposit / Stripe Integration'],
    badge: 'Zero No-Shows'
  },
  {
    id: 'subaccounts',
    title: 'Sub-Account Architecture & Snapshot Deployment',
    desc: 'Modular, production-ready GHL snapshots with pre-mapped custom fields, custom values, and folders ready for immediate agency scale.',
    deliverables: ['Clean Custom Field Mapping', 'Turnkey Snapshot Bundles', 'SaaS Mode Setup', 'Role Permissions'],
    badge: 'Agency Scaler'
  },
];

/* ==========================================================================
   PROJECTS & CASE STUDIES
   ========================================================================== */
export const projects = [
  {
    id: 'astra',
    badge: 'Live Client Deployment',
    category: 'live',
    name: 'Astra Driving School',
    clientType: 'UK Driving Academy & Fleet',
    location: 'United Kingdom',
    tagline: 'Two-Department Ticketing, Call Routing & Scheduling Engine',
    metricHighlight: '0 Missed Inquiries Across 2 Departments',
    problem:
      'A rapidly growing UK driving school was overwhelmed by blended inbound communications. Student booking inquiries and instructor operational queries were coming into the same phone lines, causing high-value lesson bookings to slip through the cracks.',
    architecture: [
      'Configured dedicated UK VoIP business numbers with intelligent IVR menu routing for Student Bookings vs. Instructor Management.',
      'Constructed dual-department ticketing pipelines with real-time team assignment based on inquiry classification.',
      'Engineered automated watchdog triggers that ping senior staff if a student inquiry sits unaddressed for >15 minutes.',
      'Built automated pipeline progression rules that move students from Inquiry -> Trial Lesson -> Active Package -> Test Ready.'
    ],
    solution: [
      'Two-department ticket & scheduling system built natively inside GHL',
      'Business phone numbers integrated with team-member live call routing',
      'Automated SLA alerts for unanswered messages within 15 minutes',
      'Automated alerts for opportunities stalled in any pipeline stage',
      'Custom tags and custom fields tailored for UK driving instructor dispatch'
    ],
    result: '100% of calls and messages now reach the correct department automatically. Zero dropped leads, faster instructor dispatch, and a measurable surge in booked driving packages.',
    tags: ['GHL Workflows 2.0', 'UK Call Routing', 'Ticketing Engine', 'Live Client', 'SLA Watchdog'],
    screenshots: [
      astra01, astra02, astra03, astra04, astra05, astra06, astra07, astra08,
      astra09, astra10, astra11, astra12, astra13, astra14, astra15, astra16, astra17
    ],
  },
  {
    id: 'prime-estate',
    badge: 'Enterprise Snapshot',
    category: 'real-estate',
    name: 'Prime Estate Realty',
    clientType: 'Luxury Real Estate Agency',
    location: 'Residential & Commercial Brokerage',
    tagline: 'High-Velocity Real Estate Pipeline with AI-Powered Lead Nurture',
    metricHighlight: 'Lead Response Time Reduced from 3 Hours to <45 Seconds',
    problem:
      'Real estate agents were losing high-intent property buyers to competitor brokerages because inbound portal leads (Zillow, Facebook Ads, Website) waited hours before receiving a call or text.',
    architecture: [
      'Built an instantaneous speed-to-lead workflow trigger firing within 15 seconds of lead ingestion.',
      'Implemented an AI Conversational Bot configured to ask property criteria (budget, bedrooms, timeframe) and qualify buyer seriousness.',
      'Integrated an automated calendar booking link that syncs directly with assigned listing agents based on territory zip codes.',
      'Designed 90-day cold lead reactivation sequences to automatically revive inactive buyer databases.'
    ],
    solution: [
      'Sub-60s missed-call-to-text automation and instant lead form responder',
      'Conversation AI chatbot for dynamic 24/7 lead qualification',
      'Automated 5-star Google review request sequence post-closing',
      'Seamless multi-agent appointment booking calendar integration',
      'Custom pipeline stages: New Lead -> AI Engaging -> Tour Booked -> Offer Submitted'
    ],
    result: 'Speed-to-lead plummeted to under 45 seconds. Lead engagement rates tripled, and tour bookings increased by 42% in simulation benchmarks.',
    tags: ['Conversation AI', 'Speed-to-Lead', 'Real Estate Snapshot', 'Database Reactivation'],
    screenshots: [
      prime01, prime02, prime03, prime04, prime05, prime06,
      prime07, prime08, prime09, prime10, prime11, prime12
    ],
  },
  {
    id: 'raza-associates',
    badge: 'Multi-Branch Engine',
    category: 'legal',
    name: 'Raza & Associates',
    clientType: 'Legal & Advisory Practice',
    location: 'Corporate & Personal Injury Law',
    tagline: 'Automated Legal Intake Engine with Conditional Case-Type Routing',
    metricHighlight: '85% Reduction in Manual Paralegal Triage Hours',
    problem:
      'Paralegals and legal intake staff spent 4+ hours every day manually asking repetitive intake questions and sorting qualified claims from general inquiries.',
    architecture: [
      'Developed a smart conversational intake form and SMS bot with conditional If/Else branching logic.',
      'Segmented cases dynamically into Personal Injury, Corporate, Immigration, and General Litigation tracks.',
      'Triggered automated document request sequences with secure upload links sent via SMS and email.',
      'Configured automated attorney consultation booking with built-in retainer reminders.'
    ],
    solution: [
      'Conversation AI for initial legal intake and criteria verification',
      'Multi-branch conditional logic routing cases to designated senior attorneys',
      'Automated secure client document collection follow-up sequence',
      'Post-consultation automated follow-up and review capture workflow'
    ],
    result: 'Eliminated manual triage bottlenecks. Qualified case files now land on the supervising attorney’s desk with client details and documents pre-collected.',
    tags: ['Complex Logic', 'Conversation AI', 'Legal Intake Engine', 'Document Workflows'],
    screenshots: [
      raza01, raza02, raza03, raza04, raza05, raza06, raza07
    ],
  },
];

/* ==========================================================================
   TECHNICAL SKILLS MATRIX
   ========================================================================== */
export const skillsMatrix = [
  {
    category: 'GHL Core Architecture',
    icon: 'Layers',
    skills: [
      { name: 'Workflows 2.0 & Advanced Branching Logic', level: 98 },
      { name: 'Sub-Account & Turnkey Snapshot Deployment', level: 95 },
      { name: 'Custom Values, Fields & Folder Architecture', level: 96 },
      { name: 'Opportunity Pipelines & SLA Watchdogs', level: 94 },
      { name: 'Smart Lists, Filters & Bulk Automation', level: 95 },
    ]
  },
  {
    category: 'Messaging & Omnichannel',
    icon: 'MessageSquare',
    skills: [
      { name: 'Sub-60s Missed Call Text-Back Workflows', level: 99 },
      { name: 'LC Phone / Twilio VoIP & IVR Menu Routing', level: 92 },
      { name: 'Conversation AI & Custom Knowledge Bots', level: 90 },
      { name: 'LC Email & High-Deliverability Sequences', level: 93 },
      { name: 'WhatsApp & 2-Way Multichannel Inbox', level: 88 },
    ]
  },
  {
    category: 'Frontend & Custom Code Engineering',
    icon: 'Code2',
    skills: [
      { name: 'Custom CSS & JavaScript Funnel Injections', level: 95 },
      { name: 'React.js UI Components & Interactive Widgets', level: 92 },
      { name: 'Inbound & Outbound Webhooks (REST API)', level: 94 },
      { name: 'Zapier & Make.com Automation Bridges', level: 90 },
      { name: 'Stripe & Payment Gateway Integrations', level: 88 },
    ]
  },
  {
    category: 'Conversion & Growth Systems',
    icon: 'TrendingUp',
    skills: [
      { name: 'High-Converting Funnel & Form Design', level: 91 },
      { name: 'Database Reactivation Campaigns', level: 95 },
      { name: 'Automated 5-Star Review Generation Engines', level: 96 },
      { name: 'Team Calendar & Round-Robin Booking', level: 94 },
      { name: 'SaaS Mode Setup & Client Onboarding', level: 89 },
    ]
  }
];

/* ==========================================================================
   WORKFLOW SIMULATION PRESETS
   ========================================================================== */
export const workflowSimulationPresets = [
  {
    id: 'missed-call',
    title: 'Missed Call Text-Back System',
    industry: 'Home Services & Local Business',
    trigger: 'Inbound call missed on UK/US business line (Duration = 0s)',
    steps: [
      { step: 1, title: 'Call Ended (Missed / Busy)', detail: 'GHL detects call duration = 0s on LC Phone number', delay: '0.1s', tag: 'Trigger' },
      { step: 2, title: 'Check Contact & Past History', detail: 'Identifies if existing client or new prospect via Custom Field', delay: '0.4s', tag: 'Logic' },
      { step: 3, title: 'Instant 2-Way SMS Dispatched', detail: '"Hi there! Sorry we missed your call. How can we help you right now?"', delay: '1.2s', tag: 'SMS Action' },
      { step: 4, title: 'AI Conversation Bot Activates', detail: 'Listens for customer response and answers service & pricing questions', delay: '2.5s', tag: 'AI Agent' },
      { step: 5, title: 'Auto-Booking Link Delivered', detail: 'Sends dynamic calendar slot link when intent is verified', delay: '4.1s', tag: 'Conversion' },
      { step: 6, title: 'Internal Staff Alert Dispatched', detail: 'Pushes high-priority SMS alert to on-duty technician team', delay: '5.0s', tag: 'Internal Alert' },
    ],
    recoveredMetric: '+62% Lead Retention Rate'
  },
  {
    id: 'real-estate-ad',
    title: 'High-Ticket Inbound Lead Accelerator',
    industry: 'Real Estate & Brokerage',
    trigger: 'Lead Form submitted on Facebook Ad for $850k Property',
    steps: [
      { step: 1, title: 'Webhook Lead Ingested', detail: 'GHL parses name, phone, budget ($850k), and preferred move date', delay: '0.1s', tag: 'Trigger' },
      { step: 2, title: 'Create Opportunity & Tag Contact', detail: 'Adds to "High-Value Buyer" pipeline stage ($850k deal value)', delay: '0.5s', tag: 'Pipeline' },
      { step: 3, title: 'SMS & WhatsApp Broadcast Sent', detail: '"Hey Alex, saw you liked 42 Elm St! Would you like a private tour this Saturday?"', delay: '0.8s', tag: 'Omnichannel' },
      { step: 4, title: 'Wait 3 Min -> Ringless Voicemail', detail: 'Drops personalized voicemail if no immediate SMS reply', delay: '3.0s', tag: 'Voice Drop' },
      { step: 5, title: 'Round-Robin Listing Agent Assigned', detail: 'Dispatches lead to the top-producing agent in that territory', delay: '4.2s', tag: 'Dispatch' },
      { step: 6, title: 'Tour Scheduled & Calendar Synced', detail: 'Automated 24-hour & 1-hour pre-tour reminder sequence armed', delay: '5.4s', tag: 'Complete' },
    ],
    recoveredMetric: '< 45s Average Response Time'
  },
  {
    id: 'legal-triage',
    title: 'Automated Legal Intake & Case Routing',
    industry: 'Legal & Professional Services',
    trigger: 'Emergency contact form inquiry submitted on law firm website',
    steps: [
      { step: 1, title: 'Form Ingested & Contact Tagged', detail: 'GHL creates contact record and locks primary practice jurisdiction', delay: '0.1s', tag: 'Trigger' },
      { step: 2, title: 'AI Intake Interview Initiated', detail: 'Bot asks incident date, case details, and injury severity', delay: '0.9s', tag: 'AI Triage' },
      { step: 3, title: 'If/Else Branching Evaluation', detail: 'Case value > $10k -> Priority Track | Minor dispute -> Referral Partner', delay: '1.8s', tag: 'Branching' },
      { step: 4, title: 'Secure Document Link Generated', detail: 'SMS sent with encrypted upload link for police reports/medical records', delay: '2.9s', tag: 'Docs' },
      { step: 5, title: 'Retainer Consultation Booked', detail: 'Syncs 30-min Zoom consultation with Managing Partner calendar', delay: '4.0s', tag: 'Booking' },
      { step: 6, title: 'Post-Consultation Review Loop', detail: 'Automated review request armed for execution post-resolution', delay: '5.2s', tag: 'Reputation' },
    ],
    recoveredMetric: '85% Reduction in Intake Admin'
  }
];

/* ==========================================================================
   WHY HIRE ALI — VALUE PROPOSITION
   ========================================================================== */
export const whyHirePoints = [
  {
    title: 'Software Engineering Degree Foundation',
    subtitle: 'Deep algorithmic & architectural logic, not just drag-and-drop',
    desc: 'Most GHL users only know how to click basic pre-made templates. With a formal Software Engineering background, I structure workflows with zero race conditions, no infinite loops, proper error handling, and clean scalable schemas.',
    badge: 'Code + Logic'
  },
  {
    title: 'Custom CSS & JavaScript Capabilities',
    subtitle: 'Breaking free from default GHL builder limitations',
    desc: 'When GHL’s standard funnel elements fall short, I write custom CSS and JavaScript to implement custom sliders, dynamic calculators, sticky booking bars, or custom webhook bridges that standard freelancers cannot touch.',
    badge: 'Frontend Edge'
  },
  {
    title: 'Proven Live Client Track Record',
    subtitle: 'Battle-tested in real commercial environments',
    desc: 'Not just theoretical playground sub-accounts. Built live multi-department systems for UK clients (Astra Driving School) handling real telephony, customer tickets, and live booking schedules.',
    badge: 'Live Track Record'
  },
  {
    title: 'Fast, Asynchronous, Reliable Communication',
    subtitle: 'Clear documentation, video walkthroughs, and quick turnaround',
    desc: 'I deliver complete snapshot documentation, record clear video walkthroughs for your team, and maintain quick response times so you never wonder what stage a project is at.',
    badge: 'Reliability'
  }
];

/* ==========================================================================
   FREQUENTLY ASKED QUESTIONS (FAQ)
   ========================================================================== */
export const faqItems = [
  {
    q: 'Are you available for full-time roles, agency contracts, or hourly projects?',
    a: 'Yes! I am actively open to full-time remote GHL Specialist positions, ongoing retainer contracts with marketing agencies, and high-impact custom build projects.'
  },
  {
    q: 'What is your background before GoHighLevel?',
    a: 'I hold a degree in Software Engineering. This gives me a massive technical edge in understanding data schemas, API webhooks, conditional logic trees, and custom web coding (HTML, CSS, JavaScript, React) when building inside GHL.'
  },
  {
    q: 'Can you integrate external tools like Zapier, Make, OpenAI, and Stripe with GHL?',
    a: 'Absolutely. I regularly build webhook integrations connecting GHL with custom webhooks, Make.com, Zapier, OpenAI API for advanced intelligence, and Stripe for seamless automated payment capture.'
  },
  {
    q: 'Can you build custom GHL Snapshots for our agency to resell to clients?',
    a: 'Yes. I engineer clean, modular, and white-label snapshots complete with Custom Values, Custom Fields, pre-tested Workflows, and Funnels that you can deploy across unlimited sub-accounts in seconds.'
  },
  {
    q: 'What is the fastest way to get in touch with you?',
    a: 'You can message me directly on WhatsApp (+92 332 6607846) for the fastest response, connect with me on LinkedIn, or book an audit call directly through this site.'
  }
];

/* ==========================================================================
   STATS & METRICS
   ========================================================================== */
export const stats = [
  { value: '1.5+', label: 'Years Hands-On with GHL', sub: 'Deep daily platform immersion' },
  { value: '3+', label: 'Full-Scale Enterprise Builds', sub: 'From intake to revenue capture' },
  { value: '<60s', label: 'Speed-to-Lead Architecture', sub: 'Instant SMS & AI engagement' },
  { value: '100%', label: 'On-Time Project Delivery', sub: 'Clean documentation & support' },
];

export const socialLinks = [
  { href: 'https://wa.me/923326607846', label: 'WhatsApp', handle: '+92 332 6607846' },
  { href: 'https://www.linkedin.com/in/ali-raza-0228091b7/', label: 'LinkedIn', handle: 'ali-raza-0228091b7' },
  { href: 'https://github.com/Ali-develop-hash', label: 'GitHub', handle: 'Ali-develop-hash' },
  { href: 'mailto:aaliraza2010@gmail.com', label: 'Email', handle: 'aaliraza2010@gmail.com' },
];
