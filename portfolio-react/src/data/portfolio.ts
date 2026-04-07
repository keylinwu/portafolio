export interface Project {
  name: string
  company: string
  description: string
  tags: string[]
  color: string
  url: string
}

export interface Skill {
  name: string
  icon: string
  level: number
  description: string
}

export const profile = {
  name: 'Keylin Wu',
  title: 'Senior Mobile Developer',
  tagline: "I build apps people actually love using.",
  subtitle: "10 years turning caffeine into code. From Costa Rica with love.",
  bio: `I'm a software developer with 10+ years of dedicated experience in mobile development — Flutter, iOS (Swift & Objective-C), and everything in between. I've had the chance to work on some really cool projects for companies like SoFi, Warner Music Group, and EQ Bank, where I focused on architecture, code quality, and making sure my team always had my back.

I've collaborated with amazing people from Canada to Taiwan, the US, Argentina, Colombia, and my home base — Costa Rica. That multicultural journey taught me that great communication is just as important as great code.

When I'm not coding, you'll probably find me with my cats, binge-watching anime, or enjoying the beautiful Costa Rican mountains.`,
  email: 'keylinwup@gmail.com',
  socials: {
    github: 'https://github.com/keylinwu',
    linkedin: 'https://www.linkedin.com/in/keylinwup/',
  },
}

export const skills: Skill[] = [
  {
    name: 'Flutter',
    icon: '🦋',
    level: 95,
    description: 'Cross-platform magic. My main thing.',
  },
  {
    name: 'Swift / iOS',
    icon: '🍎',
    level: 90,
    description: 'Native iOS with love and precision.',
  },
  {
    name: 'Dart',
    icon: '🎯',
    level: 95,
    description: 'The language behind Flutter — I dream in Dart.',
  },
  {
    name: 'UI/UX',
    icon: '🎨',
    level: 85,
    description: 'Pixel-perfect interfaces that feel right.',
  },
  {
    name: 'Architecture',
    icon: '🏗️',
    level: 88,
    description: 'Clean code, scalable patterns, happy teams.',
  },
  {
    name: 'Team Leadership',
    icon: '🤝',
    level: 85,
    description: 'Tech lead who actually listens.',
  },
]

export const projects: Project[] = [
  {
    name: 'SoFi',
    company: 'Social Finance',
    description: 'Personal finance app helping millions manage money, invest, and bank smarter.',
    tags: ['iOS', 'Swift', 'FinTech'],
    color: '#6C5CE7',
    url: 'https://www.sofi.com',
  },
  {
    name: 'Keen',
    company: 'Ingenio',
    description: 'Psychic readings and spiritual advice platform connecting users with trusted advisors.',
    tags: ['Flutter', 'Dart', 'Lifestyle'],
    color: '#9B59B6',
    url: 'https://www.keen.com',
  },
  {
    name: 'Aya Healthcare',
    company: 'Aya Healthcare',
    description: 'Healthcare staffing platform connecting nurses and clinicians with travel and staff positions nationwide.',
    tags: ['iOS', 'Swift', 'Healthcare'],
    color: '#27AE60',
    url: 'https://www.ayahealthcare.com',
  },
  {
    name: 'AMP',
    company: 'Warner Music Group',
    description: 'Artist platform connecting musicians with fans through exclusive content and experiences.',
    tags: ['Flutter', 'Dart', 'Entertainment'],
    color: '#FF6B6B',
    url: 'https://www.warnermusicgroup.com',
  },
  {
    name: 'Exclusive Rewards',
    company: 'Warner Music Group',
    description: 'Loyalty rewards app for music fans with exclusive merch, tickets, and experiences.',
    tags: ['Flutter', 'Dart', 'Rewards'],
    color: '#FD79A8',
    url: 'https://www.warnermusicgroup.com',
  },
  {
    name: 'EQ Bank',
    company: 'Equitable Bank',
    description: 'Digital banking experience with high-interest savings and seamless money management.',
    tags: ['iOS', 'Swift', 'FinTech'],
    color: '#00B894',
    url: 'https://www.eqbank.ca',
  },
  {
    name: 'Betway',
    company: 'Betway',
    description: 'Sports betting and gaming platform with real-time odds and live streaming.',
    tags: ['iOS', 'Swift', 'Gaming'],
    color: '#00CEC9',
    url: 'https://www.betway.com',
  },
  {
    name: 'BlueBird',
    company: 'BlueBird',
    description: 'Innovative mobile solution bringing seamless connectivity to everyday users.',
    tags: ['Flutter', 'Mobile', 'Startup'],
    color: '#0984E3',
    url: 'https://www.bluebirdgroup.com',
  },
  {
    name: 'PC Express',
    company: 'Loblaws',
    description: 'Grocery shopping app for one of Canada\'s largest retailers. Click, pick, done.',
    tags: ['iOS', 'Swift', 'Retail'],
    color: '#E17055',
    url: 'https://www.pcexpress.ca',
  },
  {
    name: 'Playlist Notifier',
    company: 'Personal Project',
    description: 'Never miss when your favorite playlists get updated. Built with love.',
    tags: ['Flutter', 'Dart', 'Side Project'],
    color: '#A29BFE',
    url: 'https://github.com/keylinwu',
  },
]

export const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export type Vibe = 'professional' | 'interesting'
export type Mode = 'light' | 'dark'

export const vibeLabels: Record<Vibe, string> = {
  professional: 'Professional',
  interesting: 'Interesting',
}

export const vibeEmojis: Record<Vibe, string> = {
  professional: '💼',
  interesting: '✨',
}
