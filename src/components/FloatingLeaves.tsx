'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const Leaf = ({ delay, initialX, initialY, scale = 1, rotation = 0 }: { 
  delay: number; 
  initialX: number; 
  initialY: number;
  scale?: number;
  rotation?: number;
}) => {
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{
        left: `${initialX}%`,
        top: `${initialY}%`,
      }}
      initial={{ scale: 0, rotate: rotation }}
      animate={{
        y: [0, -30, 0],
        x: [0, 30, 0],
        rotate: [rotation, rotation + 360],
        scale: [0, scale, scale * 0.8],
      }}
      transition={{
        duration: 15 + Math.random() * 10,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <div className="relative w-12 h-12 opacity-20">
        <Image
          src="/images/leaves.png"
          alt="Decorative leaf"
          fill
          className="object-contain"
        />
      </div>
    </motion.div>
  );
};

export default function FloatingLeaves() {
  const [leaves, setLeaves] = useState<Array<{
    id: number;
    x: number;
    y: number;
    delay: number;
    scale: number;
    rotation: number;
  }>>([]);

  useEffect(() => {
    const newLeaves = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
      scale: 0.5 + Math.random() * 1,
      rotation: Math.random() * 360
    }));
    setLeaves(newLeaves);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {leaves.map((leaf) => (
        <Leaf 
          key={leaf.id} 
          delay={leaf.delay} 
          initialX={leaf.x} 
          initialY={leaf.y}
          scale={leaf.scale}
          rotation={leaf.rotation}
        />
      ))}
    </div>
  );
} 