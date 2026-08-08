import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';
import { marqueeProjects } from '../data/projects';

interface MarqueeTileProps {
  image: string;
  title: string;
}

function MarqueeTile({ image, title }: MarqueeTileProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
      className="relative flex-shrink-0 w-64 sm:w-80 md:w-[28rem] aspect-[4/3] rounded-xl overflow-hidden bg-border-subtle group cursor-pointer"
    >
      <img
        src={image}
        alt={title}
        loading="lazy"
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
      />
      <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/40 transition-colors duration-500" />
      <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
        <p className="text-text-primary text-sm font-medium tracking-wide">{title}</p>
      </div>
    </motion.div>
  );
}

export default function Marquee() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], ['0%', '-12%']);
  const x2 = useTransform(scrollYProgress, [0, 1], ['-12%', '0%']);

  // With reduced motion, keep the strips static
  const row1 = reduceMotion ? { x: '0%' as const } : { x: x1 };
  const row2 = reduceMotion ? { x: '0%' as const } : { x: x2 };

  return (
    <section
      aria-label="Selected work preview"
      className="py-20 md:py-28 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-12 flex items-end justify-between">
        <h2 className="text-sm uppercase tracking-[0.2em] text-text-secondary">
          Selected Work
        </h2>
        <span className="text-xs uppercase tracking-widest text-text-secondary/60 hidden md:block">
          Scroll to explore
        </span>
      </div>

      <div ref={containerRef} className="relative">
        {/* Row 1 */}
        <div className="mb-5">
          <motion.div style={row1} className="flex gap-5 w-max">
            {[...marqueeProjects, ...marqueeProjects].map((project, index) => (
              <MarqueeTile key={`row1-${index}`} image={project.image} title={project.title} />
            ))}
          </motion.div>
        </div>

        {/* Row 2 */}
        <div>
          <motion.div style={row2} className="flex gap-5 w-max">
            {[...marqueeProjects, ...marqueeProjects].reverse().map((project, index) => (
              <MarqueeTile key={`row2-${index}`} image={project.image} title={project.title} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
