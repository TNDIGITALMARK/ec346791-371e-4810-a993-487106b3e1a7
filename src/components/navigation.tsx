'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[hsl(var(--background))] shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-heading font-bold tracking-tight text-[hsl(var(--foreground))]">
              Cognitive Decorum
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] transition-colors font-medium"
            >
              Services
            </Link>
            <Link
              href="/about"
              className="text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] transition-colors font-medium"
            >
              About
            </Link>
            <Button className="bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:opacity-90 animate-glow">
              Book Consultation
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[hsl(var(--foreground))]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden glass-strong rounded-lg p-6 mb-4 animate-fadeIn">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/services"
                className="text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/about"
                className="text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Button className="bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:opacity-90 w-full">
                Book Consultation
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
