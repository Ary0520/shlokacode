'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import ThemeToggle from './ThemeToggle';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState('en');

  return (
    <nav className="fixed top-0 w-full bg-light-accent/90 dark:bg-dark-accent/90 backdrop-blur-sm z-50 shadow-lg border-b border-light-border dark:border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="relative h-12 w-40">
              <Image
                src="/images/logo.png"
                alt="Tatsam Society Logo"
                fill
                className="object-contain"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-6">
              <a 
                href="https://www.instagram.com/tatsam.nsut" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-light-text dark:text-dark-text hover:text-light-hover dark:hover:text-dark-hover px-3 py-2 text-sm font-medium border-b-2 border-transparent hover:border-light-accent dark:hover:border-dark-accent transition-all"
              >
                About
              </a>
              <Link href="/events" className="text-light-text dark:text-dark-text hover:text-light-hover dark:hover:text-dark-hover px-3 py-2 text-sm font-medium border-b-2 border-transparent hover:border-light-accent dark:hover:border-dark-accent transition-all">
                Events
              </Link>
              <Link href="/members" className="text-light-text dark:text-dark-text hover:text-light-hover dark:hover:text-dark-hover px-3 py-2 text-sm font-medium border-b-2 border-transparent hover:border-light-accent dark:hover:border-dark-accent transition-all">
                Members
              </Link>
              <Link href="/blog" className="text-light-text dark:text-dark-text hover:text-light-hover dark:hover:text-dark-hover px-3 py-2 text-sm font-medium border-b-2 border-transparent hover:border-light-accent dark:hover:border-dark-accent transition-all">
                Blog
              </Link>
              <Link href="/gallery" className="text-light-text dark:text-dark-text hover:text-light-hover dark:hover:text-dark-hover px-3 py-2 text-sm font-medium border-b-2 border-transparent hover:border-light-accent dark:hover:border-dark-accent transition-all">
                Gallery
              </Link>

              {/* Theme Toggle */}
              <ThemeToggle />

              {/* Language Toggle */}
              <DropdownMenu.Root>
                <DropdownMenu.Trigger suppressHydrationWarning className="text-light-text dark:text-dark-text hover:text-light-hover dark:hover:text-dark-hover px-3 py-2 text-sm font-medium border-2 border-light-accent dark:border-dark-accent rounded-full hover:bg-light-accent/20 dark:hover:bg-dark-accent/20 transition-all">
                  {language === 'en' ? '🇬🇧 English' : '🇮🇳 हिंदी'}
                </DropdownMenu.Trigger>
                <DropdownMenu.Content className="bg-light-background dark:bg-dark-background rounded-md shadow-lg py-1 mt-2 border border-light-border dark:border-dark-border">
                  <DropdownMenu.Item
                    className="px-4 py-2 text-sm text-light-text dark:text-dark-text hover:bg-light-accent dark:hover:bg-dark-accent cursor-pointer"
                    onClick={() => setLanguage('en')}
                  >
                    🇬🇧 English
                  </DropdownMenu.Item>
                  <DropdownMenu.Item
                    className="px-4 py-2 text-sm text-light-text dark:text-dark-text hover:bg-light-accent dark:hover:bg-dark-accent cursor-pointer"
                    onClick={() => setLanguage('hi')}
                  >
                    🇮🇳 हिंदी
                  </DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu.Root>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-light-text dark:text-dark-text hover:text-light-hover dark:hover:text-dark-hover focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-light-background dark:bg-dark-background border-t border-light-border dark:border-dark-border">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a 
              href="https://www.instagram.com/tatsam.nsut" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block text-light-text dark:text-dark-text hover:text-light-hover dark:hover:text-dark-hover px-3 py-2 text-base font-medium hover:bg-light-accent dark:hover:bg-dark-accent rounded-md"
            >
              About
            </a>
            <Link href="/events" className="block text-light-text dark:text-dark-text hover:text-light-hover dark:hover:text-dark-hover px-3 py-2 text-base font-medium hover:bg-light-accent dark:hover:bg-dark-accent rounded-md">
              Events
            </Link>
            <Link href="/members" className="block text-light-text dark:text-dark-text hover:text-light-hover dark:hover:text-dark-hover px-3 py-2 text-base font-medium hover:bg-light-accent dark:hover:bg-dark-accent rounded-md">
              Members
            </Link>
            <Link href="/blog" className="block text-light-text dark:text-dark-text hover:text-light-hover dark:hover:text-dark-hover px-3 py-2 text-base font-medium hover:bg-light-accent dark:hover:bg-dark-accent rounded-md">
              Blog
            </Link>
            <Link href="/gallery" className="block text-light-text dark:text-dark-text hover:text-light-hover dark:hover:text-dark-hover px-3 py-2 text-base font-medium hover:bg-light-accent dark:hover:bg-dark-accent rounded-md">
              Gallery
            </Link>
            <div className="px-3 py-2">
              <button
                suppressHydrationWarning
                onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
                className="text-light-text dark:text-dark-text hover:text-light-hover dark:hover:text-dark-hover text-base font-medium border border-light-accent dark:border-dark-accent px-4 py-2 rounded-full hover:bg-light-accent dark:hover:bg-dark-accent w-full"
              >
                {language === 'en' ? '🇬🇧 English' : '🇮🇳 हिंदी'}
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
} 