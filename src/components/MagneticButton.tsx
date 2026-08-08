import { motion, useMotionValue, useSpring } from 'framer-motion';
import { type ReactNode, type MouseEvent } from 'react';

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
  disabled?: boolean;
}

export default function MagneticButton({
  children,
  className = '',
  onClick,
  href,
  target,
  rel,
  disabled = false,
}: MagneticButtonProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    if (disabled) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const moveX = (e.clientX - centerX) * 0.2;
    const moveY = (e.clientY - centerY) * 0.2;
    x.set(moveX);
    y.set(moveY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      href={href}
      target={target}
      rel={rel}
      onClick={onClick}
      className={className}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      disabled={disabled}
    >
      {children}
    </Component>
  );
}
