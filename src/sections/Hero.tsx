import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import MagneticButton from '../components/MagneticButton';

const EASE = [0.25, 0.1, 0.25, 1] as const;

export default function Hero() {
  const reduceMotion = useReducedMotion();

  const scrollTo = (selector: string) => {
    document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden">
      {/* Fine grid — background detail */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.09] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(242,242,240,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(242,242,240,0.8) 1px, transparent 1px)',
          backgroundSize: '160px 160px',
          maskImage: 'radial-gradient(ellipse 85% 75% at 50% 40%, black, transparent)',
          WebkitMaskImage: 'radial-gradient(ellipse 85% 75% at 50% 40%, black, transparent)',
        }}
      />

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 w-full pt-32 pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-end">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE }}
            className="lg:col-span-12 flex items-center gap-4 mb-2"
          >
            <span className="w-2 h-2 rounded-full bg-text-primary/60" />
            <span className="text-xs uppercase tracking-[0.3em] text-text-secondary">
              Premium Digital Studio
            </span>
            <span className="text-xs uppercase tracking-[0.3em] text-text-secondary/50 hidden sm:inline">
              — Est. 2024
            </span>
          </motion.div>

          {/* Main Title */}
          <div className="lg:col-span-9">
            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: EASE }}
              className="text-display-xl text-text-primary leading-[0.85]"
            >
              <span className="block">VAYRO</span>
              <span className="block opacity-40">STUDIO</span>
            </motion.h1>
          </div>

          {/* Supporting Content */}
          <div className="lg:col-span-3 flex flex-col gap-8">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
              className="text-body-md text-text-secondary"
            >
              Digital experiences, websites and identities built to make brands
              impossible to ignore.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
              className="flex flex-wrap gap-4"
            >
              <MagneticButton
                onClick={() => scrollTo('#contact')}
                className="px-6 py-3 bg-text-primary text-dark rounded-full text-sm font-medium uppercase tracking-wider hover:bg-opacity-90 transition-colors duration-300"
              >
                Start a project
              </MagneticButton>
              <MagneticButton
                onClick={() => scrollTo('#work')}
                className="px-6 py-3 border border-border-subtle text-text-primary rounded-full text-sm font-medium uppercase tracking-wider hover:border-text-primary hover:border-opacity-40 transition-colors duration-300"
              >
                View work
              </MagneticButton>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Floating metadata — right edge */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.9, ease: EASE }}
        aria-hidden="true"
        className="hidden lg:block absolute right-12 top-1/2 -translate-y-1/2"
      >
        <div className="[writing-mode:vertical-rl] rotate-180 flex items-center gap-6 text-[10px] uppercase tracking-[0.3em] text-text-secondary/50">
          <span>Web Design</span>
          <span className="w-px h-8 bg-text-secondary/30" />
          <span>Development</span>
          <span className="w-px h-8 bg-text-secondary/30" />
          <span>Identity</span>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-text-secondary text-[10px] uppercase tracking-[0.3em]">
          Scroll to explore
        </span>
        {!reduceMotion && (
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown className="w-4 h-4 text-text-secondary" />
          </motion.div>
        )}
        {reduceMotion && <ArrowDown className="w-4 h-4 text-text-secondary" />}
      </motion.div>

      {/* Background Grain */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </section>
  );
}
