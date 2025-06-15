"use client";

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const MagneticButton = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
      animate={{ x, y }}
      transition={{ type: 'spring', stiffness: 250, damping: 15, mass: 0.5 }}
      className="group relative inline-flex items-center gap-2 px-10 py-5 bg-white text-neutral-900 rounded-full font-bold text-lg transition-colors"
    >
      {children}
    </motion.button>
  );
};

export default MagneticButton; 