export interface Project {
  number: string;
  title: string;
  category: string;
  year: string;
  description: string;
  image: string;
  link: string;
}

export const projects: Project[] = [
  {
    number: '01',
    title: 'Ethereal Finance',
    category: 'Web Design / Development',
    year: '2025',
    description: 'A premium fintech platform with sophisticated interactions and editorial layouts.',
    image: '/projects/project-01.svg',
    link: '#',
  },
  {
    number: '02',
    title: 'Monolith Studio',
    category: 'Brand Identity / Web Design',
    year: '2025',
    description: 'Complete brand identity and digital presence for an architecture firm.',
    image: '/projects/project-02.svg',
    link: '#',
  },
  {
    number: '03',
    title: 'Nova Collective',
    category: 'Digital Experience',
    year: '2024',
    description: 'An immersive digital experience for a creative collective.',
    image: '/projects/project-03.svg',
    link: '#',
  },
  {
    number: '04',
    title: 'Stratum Labs',
    category: 'Web Development',
    year: '2024',
    description: 'High-performance web application with advanced animations.',
    image: '/projects/project-04.svg',
    link: '#',
  },
];

export const marqueeProjects = [
  { image: '/projects/marquee-01.svg', title: 'Project Alpha' },
  { image: '/projects/marquee-02.svg', title: 'Project Beta' },
  { image: '/projects/marquee-03.svg', title: 'Project Gamma' },
  { image: '/projects/marquee-04.svg', title: 'Project Delta' },
  { image: '/projects/marquee-05.svg', title: 'Project Epsilon' },
  { image: '/projects/marquee-06.svg', title: 'Project Zeta' },
];
