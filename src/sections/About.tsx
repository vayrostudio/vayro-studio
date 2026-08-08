import { motion, useInView, useScroll, useTransform, useReducedMotion, type MotionValue } from 'framer-motion';
import { useRef } from 'react';
import ScrollReveal from '../components/ScrollReveal';

const STATEMENT = 'VAYRO is a digital studio focused on websites, identities and experiences that turn attention into perception.';

interface WordProps {
  word: string;
  progress: MotionValue<number>;
  start: number;
  end: number;
  reduceMotion: boolean;
}

function Word({ word, progress, start, end, reduceMotion }: WordProps) {
  const opacity = useTransform(progress, [start, end], reduceMotion ? [1, 1] : [0.12, 1]);
  return (
    <motion.span style={{ opacity }} className="inline-block mr-[0.28em]">
      {word}
    </motion.span>
  );
}

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(textRef, { once: true, margin: '-100px' });
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [120, -120]);

  // Word reveal tracks the paragraph entering the viewport
  const { scrollYProgress: wordProgress } = useScroll({
    target: textRef,
    offset: ['start 0.9', 'start 0.4'],
  });

  const words = STATEMENT.split(' ');

  return (
    <section id="about" ref={containerRef} className="py-32 lg:py-48 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-32 lg:mb-48">
          {/* Left — Label */}
          <ScrollReveal className="lg:col-span-3">
            <span className="text-xs uppercase tracking-[0.3em] text-text-secondary">
              ( About Vayro )
            </span>
          </ScrollReveal>

          {/* Right — Word-by-word reveal */}
          <p
            ref={textRef}
            className="lg:col-span-9 text-display-sm lg:text-display-md text-text-primary"
          >
            {words.map((word, i) => (
              <Word
                key={i}
                word={word}
                progress={wordProgress}
                start={i / words.length}
                end={(i + 1) / words.length}
                reduceMotion={Boolean(reduceMotion)}
              />
            ))}
          </p>
        </div>

        {/* Supporting block */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="md:col-span-4 lg:col-span-3">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-display-lg text-text-primary"
            >
              WE MAKE
              <br />
              <span className="opacity-40">BRANDS MATTER.</span>
            </motion.h2>
          </div>

          <div className="md:col-span-8 lg:col-span-6 lg:col-start-6 space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-heading-md text-text-primary"
            >
              We build digital presence for brands that want to look sharper,
              communicate better, and stand out online.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-body-md text-text-secondary"
            >
              Less noise. More impact. Every decision is intentional — from the
              first sketch to the final interaction.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Oversized backdrop type */}
      <motion.div
        style={{ y }}
        aria-hidden="true"
        className="absolute -bottom-10 left-0 right-0 pointer-events-none"
      >
        <div className="text-[19vw] font-bold leading-none text-text-primary/[0.04] whitespace-nowrap select-none text-center">
          VAYRO
        </div>
      </motion.div>
    </section>
  );
}
