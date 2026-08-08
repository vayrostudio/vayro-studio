import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 500, damping: 40, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 500, damping: 40, mass: 0.5 });

  useEffect(() => {
    // Only enable on fine pointer devices (desktop)
    if (!window.matchMedia('(pointer: fine)').matches) return;
    setEnabled(true);

    const move = (e: globalThis.MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const target = e.target as HTMLElement;
      const interactive = target.closest('a, button, [data-hover]');
      setHovering(Boolean(interactive));
    };

    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="fixed top-0 left-0 z-[100] pointer-events-none"
      style={{ x: springX, y: springY }}
    >
      <motion.div
        animate={{
          scale: hovering ? 1.6 : 1,
          opacity: hovering ? 0.9 : 0.6,
        }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className="w-2 h-2 -ml-1 -mt-1 rounded-full bg-text-primary mix-blend-difference"
      />
    </motion.div>
  );
}
