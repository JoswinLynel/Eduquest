import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { cn } from '../lib/utils';

interface RevealProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: 0 | 100 | 200 | 300 | 400 | 500;
  duration?: number;
  className?: string;
  triggerOnce?: boolean;
}

export const Reveal = ({
  children,
  direction = 'up',
  delay = 0,
  className,
  triggerOnce = false,
}: RevealProps) => {
  const { ref, isRevealed } = useScrollReveal(0.1, triggerOnce);

  return (
    <div
      ref={ref}
      className={cn(
        'reveal-hidden',
        `reveal-${direction}`,
        delay > 0 && `reveal-delay-${delay}`,
        isRevealed && 'reveal-visible',
        className
      )}
    >
      {children}
    </div>
  );
};

