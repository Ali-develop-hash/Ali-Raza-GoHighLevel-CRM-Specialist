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





export const services = [
  {
    id: 'pipeline',
    title: 'Pipeline & Automation Setup',
    desc: 'Custom sales pipelines with stage-based automated follow-ups.',
  },
  {
    id: 'textback',
    title: 'Missed Call Text-Back',
    desc: 'Instantly re-engage leads who call and don\u2019t reach you.',
  },
  {
    id: 'ai',
    title: 'AI Chatbot & Conversation AI',
    desc: '24/7 lead qualification and appointment booking.',
  },
  {
    id: 'reviews',
    title: 'Review Request Automation',
    desc: 'Automated post-service review requests via SMS and email.',
  },
  {
    id: 'calendar',
    title: 'Calendar & Booking Workflows',
    desc: 'Seamless appointment scheduling tied directly to your CRM.',
  },
  {
    id: 'subaccounts',
    title: 'Sub-Account & Snapshot Management',
    desc: 'Multi-location, multi-client GHL account architecture.',
  },
];

export const projects = [
  {
    id: 'astra',
    badge: 'Live Client',
    name: 'Astra Driving School',
    location: 'Driving School',
    tagline: 'Two-department ticketing & scheduling system',
    problem:
      'A UK driving school had no organized way to route calls and messages between departments \u2014 bookings vs. instructor queries \u2014 so leads were falling through the cracks.',
    solution: [
      'Two-department ticket & scheduling system built inside GHL',
      'Business phone numbers integrated with team-member call routing',
      'Automated alerts for unanswered messages',
      'Automated alerts for opportunities stalled in a pipeline stage',
    ],
    result: 'Every call and message now reaches the right department automatically \u2014 no more missed inquiries.',
    tags: ['GHL', 'Call Routing', 'Scheduling', 'Live Client'],
    screenshots: [astra01, astra02, astra03, astra04,astra05, astra06, astra07, astra08, astra09, astra10, astra11, astra12, astra13, astra14, astra15, astra16, astra17],
  },
  {
    id: 'prime-estate',
    badge: 'Portfolio Build',
    name: 'Prime Estate Realty',
    location: 'Real Estate',
    tagline: 'Lead pipeline with AI-powered follow-up',
    problem:
      'Real estate agents lose deals when leads sit unanswered for even a few hours after first contact.',
    solution: [
      'Missed-call-to-text automation',
      'AI chatbot for initial lead qualification',
      'Automated review request sequence',
      'Appointment booking calendar integration',
    ],
    result: 'Lead response time cut from hours to under 60 seconds.',
    tags: ['GHL', 'Automation', 'AI Chatbot', 'Real Estate'],
    screenshots: [prime01, prime02, prime03, prime04, prime05, prime06, prime07, prime08, prime09, prime10, prime11, prime12],
  },
  {
    id: 'raza-associates',
    badge: 'Portfolio Build',
    name: 'Raza & Associates',
    location: 'Law Firm',
    tagline: 'Legal intake with smart case routing',
    problem:
      'Law firms need to qualify and route leads by case type without a paralegal manually triaging every inquiry.',
    solution: [
      'Conversation AI for initial intake',
      'Conditional case-type routing with branching logic',
      'Automated document collection sequence',
      'Post-consultation review workflow',
    ],
    result: 'Manual intake sorting replaced with automatic case-type triage.',
    tags: ['GHL', 'Conversation AI', 'Legal', 'Workflow Automation'],
    screenshots: [raza01, raza02, raza03, raza04, raza05, raza06, raza07],
  },
];

export const stats = [
  { value: '1', label: 'Live client project' },
  { value: '3', label: 'Full-scale GHL builds' },
  { value: '1.5+', label: 'Years hands-on with GHL' },
];
