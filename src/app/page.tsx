'use client';

import Image from "next/image";
import { Calendar, BookOpen, Users, Camera, Feather, Heart, Star } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import FloatingLeaves from '@/components/FloatingLeaves';
import ScrollReveal from '@/components/ScrollReveal';

// Dummy data for recent events and blogs
const recentEvents = [
  {
    id: 1,
    title: "काव्य संध्या - Poetry Evening",
    date: "April 15, 2024",
    description: "An evening of soulful poetry recitation and musical renditions.",
    image: "/images/events.png"
  },
  {
    id: 2,
    title: "कथा वाचन - Storytelling Session",
    date: "April 20, 2024",
    description: "Immerse yourself in the art of traditional storytelling.",
    image: "/images/events2.png"
  }
];

const recentBlogs = [
  {
    id: 1,
    title: "शब्दों की शक्ति - The Power of Words",
    author: "Kavita Sharma",
    date: "March 28, 2024",
    excerpt: "Words are the colors with which we paint our thoughts on the canvas of silence...",
    image: "/images/gallery.png"
  },
  {
    id: 2,
    title: "आधुनिक काल में सांस्कृतिक अभिव्यक्ति",
    author: "Rahul Verma",
    date: "March 25, 2024",
    excerpt: "Exploring the evolution of cultural expression in contemporary times...",
    image: "/images/gallery2.png"
  }
];

export default function Home() {
  return (
    <>
      <FloatingLeaves />
      <div className="space-y-24">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero-bg.jpg"
              alt="Tatsam Society Background"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#2A4834]/90" />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10 text-center text-white max-w-4xl px-4"
          >
            <motion.h1
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-5xl md:text-7xl font-gotu mb-6"
            >
              तत्सम Society
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl md:text-2xl mb-8 font-mulish text-[#E6D5B8]"
            >
              Where words dance, stories breathe, and culture thrives
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <Link
                href="/events"
                className="group px-8 py-4 bg-[#A7C4BC] text-[#2A4834] rounded-full hover:bg-[#8BA69E] transition-all duration-300 font-medium text-lg relative overflow-hidden"
              >
                <span className="relative z-10">Explore Events</span>
                <motion.div
                  className="absolute inset-0 bg-[#2A4834]"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
              <a
                href="https://www.instagram.com/tatsam.nsut"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-transparent text-white border-2 border-[#A7C4BC] rounded-full hover:bg-[#A7C4BC]/20 transition-all duration-300 font-medium text-lg"
              >
                Our Journey
              </a>
            </motion.div>
          </motion.div>
        </section>

        {/* Features Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal width="100%">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Feather className="h-12 w-12 text-[#2A4834] mb-6" />,
                  title: "कविता",
                  description: "दिल को छूने वाली कविताओं के माध्यम से अपनी आत्मा को अभिव्यक्त करें"
                },
                {
                  icon: <BookOpen className="h-12 w-12 text-[#2A4834] mb-6" />,
                  title: "कहानियां",
                  description: "ऐसी कहानियाँ बुनें जो पाठकों को नई दुनिया में ले जाएँ"
                },
                {
                  icon: <Heart className="h-12 w-12 text-[#2A4834] mb-6" />,
                  title: "संस्कृति",
                  description: "हमारी समृद्ध विरासत और परंपराओं का जश्न मनाएं"
                },
                {
                  icon: <Star className="h-12 w-12 text-[#2A4834] mb-6" />,
                  title: "समुदाय",
                  description: "साथी कलाकारों और उत्साही लोगों से जुड़ें"
                }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  whileHover={{ y: -5 }}
                  className="p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-[#E6D5B8]/20 group"
                >
                  <motion.div
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-xl font-gotu mb-4 text-[#2A4834] group-hover:text-[#4A6741] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-[#4A6741]">{feature.description}</p>
                </motion.div>
              ))}
        </div>
          </ScrollReveal>
        </section>

        {/* Recent Events */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-4xl font-gotu mb-12 text-[#2A4834] text-center">
              Upcoming Events
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {recentEvents.map((event, index) => (
              <ScrollReveal key={event.id}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-[#E6D5B8]/20"
                >
                  <div className="relative h-96 overflow-hidden">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-contain transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-gotu mb-3 text-[#2A4834]">{event.title}</h3>
                    <p className="text-[#4A6741] mb-3 flex items-center">
                      <Calendar className="h-5 w-5 mr-2" />
                      {event.date}
                    </p>
                    <p className="text-[#4A6741] mb-4">{event.description}</p>
                    <Link
                      href="/events"
                      className="inline-block px-6 py-3 bg-[#2A4834] text-white rounded-full hover:bg-[#1C3223] transition-all duration-300"
                    >
                      Learn More
                    </Link>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Recent Blogs */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <ScrollReveal>
            <h2 className="text-4xl font-gotu mb-12 text-[#2A4834] text-center">
              Latest Writings
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {recentBlogs.map((blog, index) => (
              <ScrollReveal key={blog.id}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-[#E6D5B8]/20"
                >
                  <div className="relative h-96 overflow-hidden">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      className="object-contain transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-gotu mb-3 text-[#2A4834]">{blog.title}</h3>
                    <p className="text-[#4A6741] mb-3">
                      By {blog.author} • {blog.date}
                    </p>
                    <p className="text-[#4A6741] mb-4">{blog.excerpt}</p>
                    <Link
                      href="/blog"
                      className="inline-block px-6 py-3 bg-[#2A4834] text-white rounded-full hover:bg-[#1C3223] transition-all duration-300"
                    >
                      Read More
                    </Link>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </section>
    </div>
    </>
  );
}
