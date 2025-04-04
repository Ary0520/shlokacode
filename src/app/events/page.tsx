'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

const events = [
  {
    id: 1,
    title: 'ब्रह्मास्त्र',
    date: 'March 15, 2024',
    description: 'Join us for an enchanting evening of poetry where verses come alive. Experience the magic of words in both Hindi and English.',
    image: '/images/events.png',
    location: 'Main Auditorium, NSUT',
    time: '5:00 PM - 8:00 PM'
  },
  {
    id: 2,
    title: 'sample',
    date: 'April 2, 2024',
    description: 'A grand celebration of Indian culture featuring traditional dance, music, and art performances by talented artists.',
    image: '/images/events2.png',
    location: 'Open Air Theatre, NSUT',
    time: '11:00 AM - 6:00 PM'
  },
  {
    id: 3,
    title: 'निर्वाक',
    date: 'April 20, 2024',
    description: 'An intellectual gathering of literature enthusiasts discussing contemporary works and classical texts.',
    image: '/images/events3.png',
    location: 'Conference Hall, NSUT',
    time: '3:00 PM - 6:00 PM'
  },
  {
    id: 4,
    title: 'निर्वाक',
    date: 'May 5, 2024',
    description: 'Witness the confluence of traditional and modern art forms in this unique exhibition by emerging artists.',
    image: '/images/events4.png',
    location: 'Art Gallery, NSUT',
    time: '10:00 AM - 7:00 PM'
  }
];

const EventCard = ({ event, index }: { event: typeof events[0]; index: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="group relative bg-light-background dark:bg-dark-background rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-light-border dark:border-dark-border"
    >
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="object-contain transform group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
      <div className="p-6">
        <motion.h3 
          className="text-2xl font-gotu mb-2 text-light-text dark:text-dark-text"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: index * 0.3 }}
        >
          {event.title}
        </motion.h3>
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: index * 0.4 }}
          className="space-y-3"
        >
          <p className="text-light-text/80 dark:text-dark-text/80">{event.description}</p>
          <div className="pt-4 border-t border-light-border dark:border-dark-border">
            <p className="text-light-text/70 dark:text-dark-text/70">📅 {event.date}</p>
            <p className="text-light-text/70 dark:text-dark-text/70">🕒 {event.time}</p>
            <p className="text-light-text/70 dark:text-dark-text/70">📍 {event.location}</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default function EventsPage() {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-gotu mb-4 text-light-text dark:text-dark-text">
          Upcoming Events
        </h1>
        <p className="text-xl text-light-text/80 dark:text-dark-text/80 max-w-2xl mx-auto">
          Join us in celebrating Indian culture through literature, art, and performance
        </p>
      </motion.div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {events.map((event, index) => (
          <EventCard key={event.id} event={event} index={index} />
        ))}
      </div>
    </div>
  );
} 