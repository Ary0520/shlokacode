'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

const members = [
  {
    id: 1,
    name: 'आदित्य शर्मा | Aditya Sharma',
    role: 'संस्थापक और अध्यक्ष | Founder & President',
    description: 'A passionate advocate for Indian literature and arts, leading Tatsam Society with vision and dedication.',
    image: '/images/member5.png',
    specialization: 'Classical Literature & Poetry',
    achievements: 'National Youth Poetry Award 2023',
    contact: 'aditya@tatsam.org'
  },
  {
    id: 2,
    name: 'दीपिका पटेल | Deepika Patel',
    role: 'कार्यक्रम निदेशक | Program Director',
    description: 'Orchestrating cultural events that bridge traditional and contemporary Indian arts.',
    image: '/images/member6.png',
    specialization: 'Event Management & Cultural Programs',
    achievements: 'Best Cultural Event Series 2023',
    contact: 'deepika@tatsam.org'
  },
  {
    id: 3,
    name: 'राहुल मेहता | Rahul Mehta',
    role: 'साहित्य संपादक | Literary Editor',
    description: 'Curating and editing literary works that showcase the richness of Indian storytelling.',
    image: '/images/member7.png',
    specialization: 'Contemporary Literature & Translation',
    achievements: 'Editor\'s Choice Award 2023',
    contact: 'rahul@tatsam.org'
  },
  {
    id: 4,
    name: 'अनुष्का गुप्ता | Anushka Gupta',
    role: 'कला निदेशक | Art Director',
    description: 'Bringing visual arts and traditional Indian aesthetics to life through innovative designs.',
    image: '/images/member8.png',
    specialization: 'Visual Arts & Design',
    achievements: 'Young Artist of the Year 2023',
    contact: 'anushka@tatsam.org'
  }
];

const MemberCard = ({ member, index }: { member: typeof members[0]; index: number }) => {
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
      <div className="relative h-[300px] w-full overflow-hidden">
        <Image
          src={member.image}
          alt={member.name}
          fill
          priority={index < 2}
          className="object-contain transform group-hover:scale-102 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <p className="font-medium">{member.specialization}</p>
          <p className="text-sm opacity-90">{member.achievements}</p>
          <p className="text-sm opacity-90 mt-2">{member.contact}</p>
        </div>
      </div>
      <div className="p-6">
        <motion.h3 
          className="text-2xl font-gotu mb-2 text-light-text dark:text-dark-text"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: index * 0.3 }}
        >
          {member.name}
        </motion.h3>
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: index * 0.4 }}
          className="space-y-3"
        >
          <p className="text-lg font-medium text-light-accent dark:text-dark-accent">{member.role}</p>
          <p className="text-light-text/80 dark:text-dark-text/80">{member.description}</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default function MembersPage() {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-gotu mb-4 text-light-text dark:text-dark-text">
          Our Team Members
        </h1>
        <p className="text-xl text-light-text/80 dark:text-dark-text/80 max-w-2xl mx-auto">
          Meet the passionate individuals who bring Indian culture and literature to life
        </p>
      </motion.div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {members.map((member, index) => (
          <MemberCard key={member.id} member={member} index={index} />
        ))}
      </div>
    </div>
  );
} 