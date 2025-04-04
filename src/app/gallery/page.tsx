'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';

const images = [
  { id: 1, src: '/images/gallery.png' },
  { id: 2, src: '/images/gallery2.png' },
  { id: 3, src: '/images/gallery3.png' },
  { id: 4, src: '/images/gallery4.png' },
  { id: 5, src: '/images/gallery5.png' }
];

const GalleryImage = ({ src, index }: { src: string; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        scale: {
          type: "spring",
          damping: 15,
          stiffness: 100
        }
      }}
      className="relative aspect-[4/3] w-full overflow-hidden rounded-xl shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        animate={{
          scale: isHovered ? 1.05 : 1,
          filter: isHovered ? 'brightness(1.1)' : 'brightness(1)'
        }}
        transition={{ duration: 0.3 }}
        className="relative w-full h-full"
      >
        <Image
          src={src}
          alt="Gallery Image"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={index < 4}
        />
        <motion.div
          animate={{
            opacity: isHovered ? 1 : 0,
            backdropFilter: isHovered ? 'blur(2px)' : 'blur(0px)'
          }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-black/30"
        />
      </motion.div>
    </motion.div>
  );
};

export default function GalleryPage() {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-gotu mb-4 text-light-text dark:text-dark-text">
          दृश्य यात्रा | Visual Journey
        </h1>
      </motion.div>
      
      <motion.div 
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {images.map((image, index) => (
          <GalleryImage
            key={image.id}
            src={image.src}
            index={index}
          />
        ))}
      </motion.div>
    </div>
  );
} 