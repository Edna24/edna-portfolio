/**
 * Image paths for your portfolio.
 * Set `src` to a public URL (e.g. "/images/hero/portrait-main.jpg") or a bundled import.
 * Leave `src` as null to show a labelled placeholder until you add real files.
 */

export const images = {
  hero: {
    portraitMain: {
      src: '/images/hero/portrait-main.png.png',
      alt: 'Edna Paulinus in a royal-blue blazer against a navy studio background',
      label: 'Main portrait',
      hint: 'public/images/hero/portrait-main.png.png',
    },
    contextSecondary: {
      src: null,
      alt: 'Supporting visual — workspace or learning (placeholder)',
      label: 'Supporting visual A',
      hint: 'public/images/hero/context-secondary.jpg',
    },
    contextTertiary: {
      src: null,
      alt: 'Supporting visual — environment or process (placeholder)',
      label: 'Supporting visual B',
      hint: 'public/images/hero/context-tertiary.jpg',
    },
  },
  about: {
    portrait: {
      src: null,
      alt: 'About section portrait (replace with your photograph)',
      label: 'Portrait',
      hint: 'public/images/about/portrait.jpg',
    },
    workOne: {
      src: null,
      alt: 'Supporting image — work or learning (placeholder)',
      label: 'Work / learning',
      hint: 'public/images/about/work-1.jpg',
    },
    workTwo: {
      src: null,
      alt: 'Supporting image — professional environment (placeholder)',
      label: 'Environment',
      hint: 'public/images/about/work-2.jpg',
    },
  },
  projects: {
    
techcrush: {
  src: '/images/projects/techcrush-workflow.jpg',
  alt: 'Actual n8n workflow for the Automated Corporate Multi-Currency Treasury and Hedging Engine capstone',
  label: 'Treasury automation workflow',
  hint: '',
},

lumivex: {
  src: '/images/projects/lumivex-studio-cover.png',
  alt: 'Lumivex Studio — chrome-silver typography with royal-purple accents on a black background',
  label: 'Lumivex Studio brand showcase',
  hint: '',
},
    nexusflow: {
      src: null,
      alt: 'NexusFlow prototype — operations dashboard (placeholder)',
      label: 'Product preview',
      hint: 'public/images/projects/nexusflow-cover.jpg',
    },
  },
  brand: {
    
lumivexLogo: {
  src: '/images/brand/lumivex-logo.jpeg',
  alt: 'Lumivex — Design, Automate, Evolve',
  hint: '',
  width: 1254,
  height: 1254,
},

  },
}
