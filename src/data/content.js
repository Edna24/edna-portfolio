/** Site copy and placeholders — swap or load from an API later. */

import { images } from './assets'


export const site = {
  name: 'Edna Paulinus',
  tagline: 'Creative technologist · engineering · design · intelligent automation',

  socialLinks: {
    tiktok: 'https://www.tiktok.com/@crystal_trix',
    github: 'https://github.com/Edna24',
    x: 'https://x.com/Edna_Paulinus',
    instagram: 'https://www.instagram.com/official.lumivex/',
    email: 'mailto:official.lumivex@gmail.com',
  },
}



export const about = {
  title: 'About Me',

  lead: 'Engineering Mindset. Creative Soul.',

  
paragraphs: [
  'I’m an Electrical/Electronics Engineering student and graphic designer driven by curiosity about how things work—and how they can work better. My interests bring together visual creativity, engineering thinking, and AI automation.',

  'Lumivex began with my passion for design and has grown into a bigger vision: bringing design, technology, and automation together to create useful solutions. Through Lumivex Studio and Lumivex Nexus, I’m developing that vision one project at a time.'
],


  cta: {
    label: 'More About Me →',
    href: '#what-i-do',
  },

  profileDetails: [
    {
      symbol: '✦',
      label: 'Education',
      value: 'Currently studying Electrical/Electronics Engineering',
      detail: '300 Level · University of Uyo',
    },
    {
      symbol: '⚙',
      label: 'Current Focus',
      value: 'Graphic Design · AI Automation',
      detail: 'Technology · Entrepreneurship',
    },
    {
      symbol: '⌖',
      label: 'Location',
      value: 'Nigeria',
      detail: 'Open to global opportunities',
    },
  ],
}


export const services = {
  sectionIndex: '02',
  title: 'What I Do',
  intro:
    'I bring together technology, creativity, and strategy to explore practical solutions for real-world problems, while building my skills through design projects, automation experiments, and hands-on learning.',

  items: [
    {
      id: 'automation',
      icon: 'automation',
      title: 'AI & Intelligent Automation',
      description:
        'Explore AI-assisted workflows, automation patterns, and practical system prototypes through projects in development.',
    },
    {
      id: 'workflow',
      icon: 'systems',
      title: 'Business Workflow Automation',
      description:
        'Design clearer, more maintainable workflows for repetitive processes, approvals, reporting, and everyday operations.',
    },
    {
      id: 'design',
      icon: 'design',
      title: 'Digital Design & Brand Experiences',
      description:
        'Create visual identities, brand-aligned assets, and thoughtful digital designs through Lumivex Studio and personal projects.',
    },
    {
      id: 'experimentation',
      icon: 'systems',
      title: 'Technology Projects & Experimentation',
      description:
        'Explore ideas through prototypes, technical experiments, and practical learning across engineering and technology.',
    },
  ],
}

export const projects = {
  sectionIndex: '03',
  title: 'Featured work',
  intro:
    'Case-study presentations with interface visuals — replace placeholders with your approved screenshots when ready.',
  items: [
    {
      id: 'techcrush',
      number: '01',
      name: 'TechCrush — Multi-currency treasury capstone',
      status: 'completed',
      statusNote: 'Learning / capstone — not a production financial platform',
      description:
        'Concept for treasury automation spanning exposure visibility, threshold alerts, and approval before hedging actions.',
      problem:
        'Manual tracking of multi-currency exposure and inconsistent approval steps before hedging decisions.',
      approach:
        'Modeled exposure checks, alert thresholds, and an approval gate before executing hedge workflows — as a capstone learning exercise.',
      outcome:
        'Demonstrated end-to-end flow and dashboard mockups; production deployment and live financial data were out of scope.',
      role: 'Capstone developer — title to confirm',
      tools: ['Workflow modeling', 'Dashboard UI', '[Stack — placeholder]'],
      tags: ['Treasury', 'Multi-currency', 'Capstone'],
      mediaVariant: 'treasury-capstone',
      imageKey: 'techcrush',
      link: null,
      linkLabel: 'Case study — coming soon',
    },
    {
      id: 'lumivex',
      number: '02',
      name: 'Lumivex Studio — Design work',
      status: 'ongoing',
      statusNote: null,
      description:
        'Visual and digital design under my studio practice — layouts, brand materials, and client-ready deliverables.',
      problem:
        'Communicate brand and product ideas clearly across formats without over-designed noise.',
      approach:
        'Editorial layouts, restrained palettes, and reusable visual systems aligned to each brief.',
      outcome:
        'Ongoing studio output — add approved pieces to the mosaic when you publish them.',
      role: 'Designer · Lumivex Studio',
      tools: ['Visual design', 'Layout systems', '[Tools — placeholder]'],
      tags: ['Digital design', 'Branding', 'Studio'],
      mediaVariant: 'design-samples',
      imageKey: 'lumivex',
      link: null,
      linkLabel: 'Gallery — coming soon',
    },
    {
      id: 'nexusflow',
      number: '03',
      name: 'NexusFlow — Lumivex Nexus prototype',
      status: 'in-development',
      statusNote: 'Prototype — synthetic demo data only',
      description:
        'Business-operations dashboard concept for orders, inventory signals, and payment status — part of Lumivex Nexus.',
      problem:
        'Scattered operational signals make it hard to see what needs attention across fulfillment and payments.',
      approach:
        'Single-pane prototype UI with example rows and status chips — electric-blue Nexus accents, royal blue for the wider portfolio.',
      outcome:
        'In development; not deployed, no client results claimed.',
      role: 'Builder · Lumivex Nexus',
      tools: ['Product UI', 'Workflow states', '[Stack — placeholder]'],
      tags: ['Lumivex Nexus', 'Prototype', 'Operations'],
      mediaVariant: 'nexus-ops-dashboard',
      imageKey: 'nexusflow',
      theme: 'nexus',
      link: null,
      linkLabel: 'Prototype preview — not available',
    },
  ],
}


export const achievements = {
  sectionIndex: '04',
  title: 'Achievements & Experience',
  intro:
    'Milestones in professional development, creative practice, and project work across engineering, design, and intelligent automation.',

  items: [
    
{
  title: 'Certified AI Automation Specialist',
  detail:
    'Issued by TechCrush, an ACTD-accredited professional training institution. Accredited by the American Council of Training and Development (ACTD), USA.',
  period: '31 August 2026',
  type: 'training',
  certificateUrl:
    'https://techcrush.s3.eu-west-1.amazonaws.com/certificates/AI-Automation/49a02710-e91b-4d14-9a8c-f326d548dbbf-1788175040546.pdf',
},

    {
      title: 'TechCrush Treasury Automation Capstone',
      detail:
        'A multi-currency treasury automation learning project exploring exposure checks, threshold alerts, and approval workflows.',
      period: 'Capstone complete',
      type: 'project',
    },
    {
      title: 'Lumivex Studio',
      detail:
        'Building a creative practice focused on graphic design, branding, and digital design experiences.',
      period: 'Ongoing',
      type: 'studio',
    },
    {
      title: 'Lumivex Nexus — NexusFlow',
      detail:
        'Developing a business-operations dashboard prototype as part of a broader exploration of AI and intelligent automation.',
      period: 'In development',
      type: 'nexus',
    },
  ],
}


export const contact = {
  sectionIndex: '05',
  title: 'Contact',
  intro:
    'Collaborations, studio inquiries, or engineering conversations.',
  email: 'official.lumivex@gmail.com',
  emailHref: site.socialLinks.email,
  location: 'Nigeria',
  social: [
    {
      label: 'GitHub',
      href: site.socialLinks.github,
      placeholder: false,
    },
    {
      label: 'X',
      href: site.socialLinks.x,
      placeholder: false,
    },
    {
      label: 'Instagram',
      href: site.socialLinks.instagram,
      placeholder: false,
    },
    {
      label: 'TikTok',
      href: site.socialLinks.tiktok,
      placeholder: false,
    },
  ],
  note: 'For collaborations and professional inquiries, feel free to reach out by email.',
}

export const footer = {
  personalLine: site.name,
  lumivexLine: 'Building with Lumivex',
  copyright: `© ${new Date().getFullYear()} Edna Paulinus. Personal portfolio.`,
}

export const lumivexBrand = {
  founderLine: 'Founder of Lumivex',
  buildingLine: 'Building with Lumivex',
  nexusLabel: 'Lumivex Nexus',
  nexusDescription:
    'My developing initiative for AI-assisted workflow and intelligent automation — separate from this personal portfolio.',
  websiteUrl: null,
  logo: images.brand.lumivexLogo,
}

export const hero = {
  kicker: 'Edna Paulinus',
  titleLines: [
    'Creative technologist',
    'crafting systems,',
    'interfaces & automation.',
  ],
  supporting:
    'Engineering student and designer exploring how thoughtful automation and clear design reduce friction in everyday work.',
  supportingSecondary:
    'Capstones, studio projects, and Lumivex Nexus prototypes — honest scope, real learning.',
  primaryCta: { href: '#projects', label: 'View projects' },
  secondaryCta: { href: '#contact', label: 'Contact' },
  panels: [
    {
      label: 'Currently',
      value: 'Engineering · Graphic Design · AI Automation',
    },
    {
      label: 'Studio',
      value: 'Lumivex — digital design',
    },
  ],
}
