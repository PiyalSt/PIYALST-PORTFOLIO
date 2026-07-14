import profile from './profile.jpg'
import projectImg1 from './projectsImg.jpg'

const assets = {
    profile
}

export default assets

export const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/skills', label: 'Skills' },
  { to: '/projects', label: 'Projects' },
  { to: '/education', label: 'Education' },
  { to: '/learninghub', label: 'LearningHub' },
  { to: '/contact', label: 'Contact' },
]

export const skills = {
  core: [
    { name: 'HTML5',      icon: '🟧', color: '#e34f26', level: 95, tag: 'Markup'     },
    { name: 'CSS3',       icon: '🎨', color: '#264de4', level: 90, tag: 'Styling'    },
    { name: 'JavaScript', icon: '🟨', color: '#f7df1e', level: 82, tag: 'ES6+'      },
    { name: 'TypeScript', icon: '🔷', color: '#3178c6', level: 60, tag: 'Typed JS'  },
  ],
  frameworks: [
    { name: 'React JS',  icon: '⚛️', color: '#61dafb', level: 85, tag: 'UI Library' },
    { name: 'Next.js',   icon: '▲',  color: '#ffffff', level: 75, tag: 'Framework'  },
    { name: 'Tailwind',  icon: '🌊', color: '#38bdf8', level: 88, tag: 'Utility CSS'},
    { name: 'Bootstrap', icon: '🅱️', color: '#7952b3', level: 90, tag: 'CSS Framework'},
    { name: 'Material UI',icon:'🔷', color: '#007fff', level: 78, tag: 'Component Lib'},
    { name: 'GSAP',      icon: '🟢', color: '#88ce02', level: 72, tag: 'Animation'  },
  ],
  toolsDesign: [
    { name: 'Git & GitHub',icon: '🔀', color: '#e34f26', level: 95, tag: 'Version Control'     },
    { name: 'Figma',       icon: '🌄', color: '#264de4', level: 90, tag: 'UI Design'    },
  ],
}


export const projects = [
  {
    title: "Project Name",
    description: "Short description of the project goes here.",
    image: projectImg1,
    techStack: ["React", "Tailwind", "Firebase"],
    github: "https://github.com/...",
    live: "https://...",
  },
  {
    title: "Project Name",
    description: "Short description of the project goes here.",
    image: projectImg1,
    techStack: ["React", "Tailwind", "Firebase"],
    github: "https://github.com/...",
    live: "https://...",
  },
  {
    title: "Project Name",
    description: "Short description of the project goes here.",
    image: projectImg1,
    techStack: ["React", "Tailwind", "Firebase"],
    github: "https://github.com/...",
    live: "https://...",
  },
  {
    title: "Project Name",
    description: "Short description of the project goes here.",
    image: projectImg1,
    techStack: ["React", "Tailwind", "Firebase"],
    github: "https://github.com/...",
    live: "https://...",
  },
  {
    title: "Project Name",
    description: "Short description of the project goes here.",
    image: projectImg1,
    techStack: ["React", "Tailwind", "Firebase"],
    github: "https://github.com/...",
    live: "https://...",
  },
  {
    title: "Project Name",
    description: "Short description of the project goes here.",
    image: projectImg1,
    techStack: ["React", "Tailwind", "Firebase"],
    github: "https://github.com/...",
    live: "https://...",
  },
];


export const education = [
  {
    year: "2026 - Present",
    degree: "Professional Full Stack Web Development",
    institution: "Creative IT Institute",
    location: "Dhaka, Bangladesh",
    gpa: "0.00",
  },
  {
    year: "2026",
    degree: "Professional Certification in Web Development",
    institution: "Creative IT Institute",
    location: "Dhaka, Bangladesh",
    gpa: "A+",
  },
  {
    year: "2021 - 2025",
    degree: "Diploma in Computer Science",
    institution: "Shariatpur Polytechnic Institute",
    location: "Dhaka, Bangladesh",
    gpa: "3.20 something!",
  },
  {
    year: "2019 - 2021",
    degree: "Secondary School Certificate (SSC)",
    institution: "Panga Mahesh Chandra Lala High School",
    location: "Domar, Nilphamari, Bangladesh",
    gpa: "3.83",
  },
];


export const learningHub = [
  {
    title: "Complete React Developer",
    platform: "Udemy",
    category: "Frontend",
    status: "Completed",
    certificate: "https://...",
  },
  {
    title: "JavaScript Algorithms",
    platform: "freeCodeCamp",
    category: "JavaScript",
    status: "In Progress",
    certificate: null,
  },
  {
    title: "Complete React Developer",
    platform: "Udemy",
    category: "Frontend",
    status: "Completed",
    certificate: "https://...",
  },
  {
    title: "JavaScript Algorithms",
    platform: "freeCodeCamp",
    category: "JavaScript",
    status: "In Progress",
    certificate: null,
  },
  {
    title: "Complete React Developer",
    platform: "Udemy",
    category: "Frontend",
    status: "Completed",
    certificate: "https://...",
  },
  {
    title: "JavaScript Algorithms",
    platform: "freeCodeCamp",
    category: "JavaScript",
    status: "In Progress",
    certificate: null,
  },
];