import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '../data/projects';
import ScrollReveal from '../components/ScrollReveal';

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="work" ref={containerRef} className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <ScrollReveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-16 lg:mb-24">
            <h2 className="text-display-md text-text-primary">
              SELECTED WORK
            </h2>
            <p className="text-body-md text-text-secondary max-w-sm">
              A selection of digital experiences, identities and websites.
            </p>
          </div>
        </ScrollReveal>
      </div>

      <div className="relative">
        {projects.map((project, index) => (
          <ProjectCard key={project.number} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: typeof projects[0];
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  });

  const scale = useSpring(
    useTransform(scrollYProgress, [0, 0.5], [0.92, 1]),
    { stiffness: 120, damping: 30 }
  );

  return (
    <motion.div
      ref={cardRef}
      style={{ scale }}
      className="relative"
    >
      <div
        className="max-w-7xl mx-auto px-6 lg:px-12 sticky"
        style={{ top: `${96 + index * 24}px` }}
      >
        <motion.a
          href={project.link}
          whileHover="hover"
          className="relative block bg-dark border border-border-subtle rounded-2xl lg:rounded-3xl overflow-hidden group"
        >
          {/* Image — dominates the card */}
          <div className="relative aspect-[16/9] lg:aspect-[16/8] overflow-hidden bg-border-subtle">
            <motion.img
              src={project.image}
              alt={`${project.title} — ${project.category}`}
              loading="lazy"
              variants={{ hover: { scale: 1.04 } }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
              className="w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/30 to-transparent" />

            {/* Large number */}
            <span className="absolute top-6 left-6 text-display-sm text-text-primary/20 font-bold select-none">
              {project.number}
            </span>

            {/* Metadata — top right */}
            <div className="absolute top-6 right-6 flex items-center gap-3 text-text-primary/80">
              <span className="text-xs uppercase tracking-widest">{project.category}</span>
              <span className="text-xs uppercase tracking-widest text-text-primary/50">{project.year}</span>
            </div>

            {/* Info — bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <h3 className="text-heading-lg lg:text-display-sm text-text-primary">
                  {project.title}
                </h3>
                <p className="text-text-secondary text-sm mt-2 max-w-md hidden lg:block">
                  {project.description}
                </p>
              </div>

              <div className="flex items-center gap-3 text-text-primary shrink-0">
                <span className="text-sm uppercase tracking-wider">View Project</span>
                <motion.span
                  variants={{ hover: { x: 6 } }}
                  transition={{ duration: 0.3 }}
                >
                  <ArrowUpRight className="w-5 h-5" />
                </motion.span>
              </div>
            </div>
          </div>
        </motion.a>
      </div>
    </motion.div>
  );
}
