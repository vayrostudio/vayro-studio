import project01 from '../assets/projects/project-01.svg';
import project02 from '../assets/projects/project-02.svg';
import project03 from '../assets/projects/project-03.svg';
import project04 from '../assets/projects/project-04.svg';
import marquee01 from '../assets/projects/marquee-01.svg';
import marquee02 from '../assets/projects/marquee-02.svg';
import marquee03 from '../assets/projects/marquee-03.svg';
import marquee04 from '../assets/projects/marquee-04.svg';
import marquee05 from '../assets/projects/marquee-05.svg';
import marquee06 from '../assets/projects/marquee-06.svg';

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
    image: project01,
    link: '#',
  },
  {
    number: '02',
    title: 'Monolith Studio',
    category: 'Brand Identity / Web Design',
    year: '2025',
    description: 'Complete brand identity and digital presence for an architecture firm.',
    image: project02,
    link: '#',
  },
  {
    number: '03',
    title: 'Nova Collective',
    category: 'Digital Experience',
    year: '2024',
    description: 'An immersive digital experience for a creative collective.',
    image: project03,
    link: '#',
  },
  {
    number: '04',
    title: 'Stratum Labs',
    category: 'Web Development',
    year: '2024',
    description: 'High-performance web application with advanced animations.',
    image: project04,
    link: '#',
  },
];

export const marqueeProjects = [
  { image: marquee01, title: 'Project Alpha' },
  { image: marquee02, title: 'Project Beta' },
  { image: marquee03, title: 'Project Gamma' },
  { image: marquee04, title: 'Project Delta' },
  { image: marquee05, title: 'Project Epsilon' },
  { image: marquee06, title: 'Project Zeta' },
];
