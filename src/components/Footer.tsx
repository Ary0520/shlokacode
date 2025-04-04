'use client';

import { useState } from 'react';
import { Mail, Instagram } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement newsletter subscription
    console.log('Subscribed:', email);
    setEmail('');
  };

  return (
    <footer className="bg-[#2A4834] text-[#E6D5B8] relative">
      <div className="absolute inset-0 bg-[url('/images/indian-pattern.png')] opacity-10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-gotu mb-6 text-white">तत्सम Society</h3>
            <p className="text-[#A7C4BC] leading-relaxed">
              A sanctuary for poetic souls and cultural enthusiasts, where words bloom like lotus flowers in the garden of creativity.
            </p>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="text-2xl font-gotu mb-6 text-white">Newsletter</h3>
            <p className="text-[#A7C4BC] mb-6 leading-relaxed">
              Join our literary journey. Receive poetry, stories, and event updates in your inbox.
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full bg-[#1C3223] text-white border border-[#4A6741] focus:outline-none focus:ring-2 focus:ring-[#A7C4BC] placeholder:text-[#A7C4BC]/50"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-[#A7C4BC] text-[#2A4834] rounded-full hover:bg-[#8BA69E] focus:outline-none focus:ring-2 focus:ring-[#A7C4BC] transition-colors"
              >
                <Mail className="h-5 w-5" />
              </button>
            </form>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-2xl font-gotu mb-6 text-white">Connect</h3>
            <div className="flex space-x-6">
              <a
                href="https://www.instagram.com/tatsam.nsut"
                className="text-[#A7C4BC] hover:text-white transition-colors p-2 hover:bg-[#1C3223] rounded-full"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#4A6741] mt-12 pt-8 text-center text-[#A7C4BC]">
          <p className="font-gotu">
            &copy; {new Date().getFullYear()} तत्सम Society. Cultivating Culture Through Words.
          </p>
        </div>
      </div>
    </footer>
  );
} 