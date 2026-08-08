import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import MagneticButton from '../components/MagneticButton';

export default function CTA() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section
      id="contact"
      ref={containerRef}
      className="py-32 lg:py-48 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-display-lg text-text-primary mb-8 lg:mb-12"
        >
          LET'S BUILD
          <br />
          <span className="opacity-40">SOMETHING DISTINCT.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-heading-md text-text-secondary max-w-2xl mx-auto mb-12 lg:mb-16"
        >
          Have a project in mind? Let's turn it into something worth remembering.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-wrap justify-center gap-6"
        >
          <MagneticButton
            href="mailto:hello@vayro.studio"
            className="px-8 py-4 bg-text-primary text-dark rounded-full text-sm font-medium uppercase tracking-wider hover:bg-opacity-90 transition-all"
          >
            Start a project
          </MagneticButton>
          <MagneticButton
            href="https://www.instagram.com/vayro.studio/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border border-border-subtle text-text-primary rounded-full text-sm font-medium uppercase tracking-wider hover:border-text-primary hover:border-opacity-40 transition-all"
          >
            Instagram
          </MagneticButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 lg:mt-24"
        >
          <a
            href="mailto:hello@vayro.studio"
            className="text-text-secondary hover:text-text-primary transition-colors duration-300"
          >
            hello@vayro.studio
          </a>
        </motion.div>
      </div>

      {/* Background Grain */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </section>
  );
}
