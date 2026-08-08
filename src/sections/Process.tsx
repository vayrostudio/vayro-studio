import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { processSteps } from '../data/services';
import ScrollReveal from '../components/ScrollReveal';

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section className="py-24 lg:py-32 border-t border-border-subtle">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <ScrollReveal>
          <h2 className="text-display-md text-text-primary mb-16 lg:mb-24">
            HOW WE WORK
          </h2>
        </ScrollReveal>

        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8"
        >
          {processSteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="relative"
            >
              <span className="text-text-secondary/30 text-6xl lg:text-8xl font-bold">
                {step.number}
              </span>
              <h3 className="text-heading-md text-text-primary mt-4 lg:mt-6">
                {step.title}
              </h3>
              <p className="text-body-md text-text-secondary mt-3">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
