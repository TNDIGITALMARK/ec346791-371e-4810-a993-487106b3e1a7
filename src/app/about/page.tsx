'use client';

import { Navigation } from '@/components/navigation';
import { TestimonialCard } from '@/components/testimonial-card';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  ArrowRight,
  BookOpen,
  Download,
  Mail,
  Award,
  Users,
  Building2,
  TrendingUp
} from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-[hsl(var(--background))] via-[hsl(var(--accent))] to-[hsl(var(--background))]">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center animate-fadeIn">
            <h1 className="font-heading font-bold text-[hsl(var(--foreground))] mb-6">
              The Authority in Executive AI Etiquette
            </h1>
            <p className="text-xl md:text-2xl text-[hsl(var(--muted-foreground))] leading-relaxed">
              Pioneering the discipline of AI interaction excellence for C-suite leadership
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="glass-strong rounded-2xl p-12 md:p-16 mb-16">
              <h2 className="font-heading text-3xl font-semibold text-[hsl(var(--foreground))] mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-lg text-[hsl(var(--muted-foreground))] leading-relaxed">
                <p>
                  In 2023, we observed a critical gap in executive leadership development: while C-suite leaders
                  excelled at human communication, their AI interactions often lacked the same precision, authority,
                  and strategic thinking that defined their leadership style.
                </p>
                <p>
                  As AI systems like ChatGPT, Gemini, and Copilot became integral to strategic decision-making,
                  we recognized that communication with artificial intelligence had become a core executive competency—yet
                  no formal training existed.
                </p>
                <p>
                  Cognitive Decorum was founded to fill this void. We are the world's first consultancy dedicated
                  exclusively to teaching executives how to maintain their professional authority and strategic
                  excellence when collaborating with AI systems.
                </p>
                <p className="text-[hsl(var(--foreground))] font-semibold">
                  Today, we serve Fortune 500 companies, helping leadership teams master the art of leading
                  machines with the same poise they lead people.
                </p>
              </div>
            </div>

            {/* Founder */}
            <div className="glass rounded-2xl p-12 mb-16">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-48 h-48 rounded-xl bg-[hsl(var(--primary))] flex items-center justify-center flex-shrink-0">
                  <Users className="w-24 h-24 text-[hsl(var(--primary-foreground))]" />
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-semibold text-[hsl(var(--foreground))] mb-2">
                    Dr. Alexandria Morrison
                  </h3>
                  <p className="text-[hsl(var(--primary))] font-semibold mb-4">
                    Founder & Chief AI Etiquette Officer
                  </p>
                  <div className="space-y-3 text-[hsl(var(--muted-foreground))]">
                    <p>
                      Former McKinsey Partner specializing in executive communication and organizational transformation.
                      Ph.D. in Computational Linguistics from MIT, with 15 years of C-suite advisory experience.
                    </p>
                    <p>
                      Alexandria pioneered the PACE Protocol™ framework, combining her expertise in human communication
                      psychology with deep technical understanding of large language models.
                    </p>
                    <p>
                      Featured speaker at Davos 2024, author of "Leading Machines: The Executive's Guide to AI Communication,"
                      and advisor to three Fortune 100 CEOs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="section-padding bg-gradient-to-b from-[hsl(var(--background))] to-[hsl(var(--accent))]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl font-semibold text-[hsl(var(--foreground))] mb-4">
              Our Methodology
            </h2>
            <p className="text-xl text-[hsl(var(--muted-foreground))] max-w-3xl mx-auto">
              Proprietary frameworks developed through research with 500+ C-suite executives
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="glass-strong p-8">
              <div className="w-16 h-16 rounded-full bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] flex items-center justify-center mb-6">
                <BookOpen className="w-8 h-8" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-[hsl(var(--foreground))] mb-4">
                The PACE Protocol™
              </h3>
              <p className="text-[hsl(var(--muted-foreground))] leading-relaxed">
                Our flagship framework teaching Precision, Authority, Clarity, and Empathy in AI communication.
                Proven to increase AI output quality by 40-60%.
              </p>
            </Card>

            <Card className="glass-strong p-8">
              <div className="w-16 h-16 rounded-full bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] flex items-center justify-center mb-6">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-[hsl(var(--foreground))] mb-4">
                Strategic Prompt Architecture
              </h3>
              <p className="text-[hsl(var(--muted-foreground))] leading-relaxed">
                A systematic approach to designing prompts that extract maximum strategic value from AI systems
                while maintaining executive voice.
              </p>
            </Card>

            <Card className="glass-strong p-8">
              <div className="w-16 h-16 rounded-full bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-[hsl(var(--foreground))] mb-4">
                Continuous Optimization Model
              </h3>
              <p className="text-[hsl(var(--muted-foreground))] leading-relaxed">
                AI tools evolve rapidly. Our methodology includes ongoing refinement protocols to ensure
                your leadership stays ahead of technological change.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl font-semibold text-[hsl(var(--foreground))] mb-4">
              Client Success Stories
            </h2>
            <p className="text-xl text-[hsl(var(--muted-foreground))] max-w-3xl mx-auto">
              Measurable transformation in executive AI leadership
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            <Card className="glass-strong p-8">
              <div className="flex items-start space-x-4 mb-6">
                <Building2 className="w-12 h-12 text-[hsl(var(--primary))] flex-shrink-0" />
                <div>
                  <h3 className="font-heading text-xl font-semibold text-[hsl(var(--foreground))] mb-2">
                    Fortune 100 Financial Services Firm
                  </h3>
                  <p className="text-sm text-[hsl(var(--primary))]">
                    Enterprise Policy Framework | AI Communication Audits
                  </p>
                </div>
              </div>
              <div className="space-y-4 text-[hsl(var(--muted-foreground))]">
                <p>
                  <strong className="text-[hsl(var(--foreground))]">Challenge:</strong> 200+ executives using AI
                  inconsistently, creating brand voice fragmentation and compliance concerns.
                </p>
                <p>
                  <strong className="text-[hsl(var(--foreground))]">Solution:</strong> Comprehensive policy framework
                  with departmental guidelines, training program for all C-suite leaders, and quarterly optimization sessions.
                </p>
                <p>
                  <strong className="text-[hsl(var(--foreground))]">Results:</strong> 55% improvement in AI output quality,
                  87% leadership satisfaction, zero compliance incidents in 18 months.
                </p>
              </div>
            </Card>

            <Card className="glass-strong p-8">
              <div className="flex items-start space-x-4 mb-6">
                <Building2 className="w-12 h-12 text-[hsl(var(--primary))] flex-shrink-0" />
                <div>
                  <h3 className="font-heading text-xl font-semibold text-[hsl(var(--foreground))] mb-2">
                    Global Technology Conglomerate
                  </h3>
                  <p className="text-sm text-[hsl(var(--primary))]">
                    Executive AI Coaching | Prompt Tone Calibration
                  </p>
                </div>
              </div>
              <div className="space-y-4 text-[hsl(var(--muted-foreground))]">
                <p>
                  <strong className="text-[hsl(var(--foreground))]">Challenge:</strong> CEO and 12 direct reports
                  struggling to maintain strategic authority in AI-assisted decision-making.
                </p>
                <p>
                  <strong className="text-[hsl(var(--foreground))]">Solution:</strong> Individual coaching for each
                  executive, custom prompt libraries, strategic communication templates.
                </p>
                <p>
                  <strong className="text-[hsl(var(--foreground))]">Results:</strong> 40% reduction in decision-making
                  time, 62% increase in strategic AI output, PACE Protocol integrated into leadership development.
                </p>
              </div>
            </Card>
          </div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <TestimonialCard
              quote="Cognitive Decorum transformed how our leadership team approaches AI collaboration, resulting in 40% more strategic AI outputs and significantly improved decision-making quality."
              author="Sarah Chen"
              title="CEO"
              company="TechVantage Solutions"
            />

            <TestimonialCard
              quote="The PACE Protocol is now embedded in our leadership development program. It's changed how we think about human-AI collaboration at the highest levels of strategy."
              author="David Armstrong"
              title="Managing Director"
              company="Global Technology Conglomerate"
            />
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="section-padding bg-gradient-to-b from-[hsl(var(--background))] to-[hsl(var(--accent))]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl font-semibold text-[hsl(var(--foreground))] mb-4">
              Thought Leadership Resources
            </h2>
            <p className="text-xl text-[hsl(var(--muted-foreground))] max-w-3xl mx-auto">
              Free guides and frameworks to elevate your AI communication
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="glass p-6 hover:glass-strong transition-all duration-500 cursor-pointer group">
              <Download className="w-10 h-10 text-[hsl(var(--primary))] mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-heading text-lg font-semibold text-[hsl(var(--foreground))] mb-2">
                Executive Guide to AI Etiquette
              </h3>
              <p className="text-sm text-[hsl(var(--muted-foreground))] mb-4">
                28-page comprehensive introduction to maintaining executive presence in AI interactions
              </p>
              <Button variant="outline" size="sm" className="w-full">
                Download PDF
              </Button>
            </Card>

            <Card className="glass p-6 hover:glass-strong transition-all duration-500 cursor-pointer group">
              <Download className="w-10 h-10 text-[hsl(var(--primary))] mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-heading text-lg font-semibold text-[hsl(var(--foreground))] mb-2">
                Prompt Tone Assessment Matrix
              </h3>
              <p className="text-sm text-[hsl(var(--muted-foreground))] mb-4">
                Self-assessment tool to evaluate your current AI communication quality
              </p>
              <Button variant="outline" size="sm" className="w-full">
                Download Worksheet
              </Button>
            </Card>

            <Card className="glass p-6 hover:glass-strong transition-all duration-500 cursor-pointer group">
              <Download className="w-10 h-10 text-[hsl(var(--primary))] mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-heading text-lg font-semibold text-[hsl(var(--foreground))] mb-2">
                PACE Protocol Quick Reference
              </h3>
              <p className="text-sm text-[hsl(var(--muted-foreground))] mb-4">
                One-page framework overview for immediate application in your AI work
              </p>
              <Button variant="outline" size="sm" className="w-full">
                Download Guide
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="glass-strong rounded-2xl p-12 md:p-16 max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <Mail className="w-16 h-16 text-[hsl(var(--primary))] mx-auto mb-6" />
              <h2 className="font-heading text-3xl font-semibold text-[hsl(var(--foreground))] mb-4">
                Start the Conversation
              </h2>
              <p className="text-xl text-[hsl(var(--muted-foreground))]">
                Schedule a confidential consultation to discuss your executive AI challenges
              </p>
            </div>

            <div className="space-y-4">
              <div className="glass rounded-lg p-6">
                <label htmlFor="name" className="block text-sm font-medium text-[hsl(var(--foreground))] mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-[hsl(var(--input))] border border-[hsl(var(--border))] rounded-lg px-4 py-3 text-[hsl(var(--foreground))] focus:ring-2 focus:ring-[hsl(var(--ring))] focus:border-transparent"
                  placeholder="Dr. Jane Smith"
                />
              </div>

              <div className="glass rounded-lg p-6">
                <label htmlFor="email" className="block text-sm font-medium text-[hsl(var(--foreground))] mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-[hsl(var(--input))] border border-[hsl(var(--border))] rounded-lg px-4 py-3 text-[hsl(var(--foreground))] focus:ring-2 focus:ring-[hsl(var(--ring))] focus:border-transparent"
                  placeholder="jane.smith@company.com"
                />
              </div>

              <div className="glass rounded-lg p-6">
                <label htmlFor="company" className="block text-sm font-medium text-[hsl(var(--foreground))] mb-2">
                  Company & Title
                </label>
                <input
                  type="text"
                  id="company"
                  className="w-full bg-[hsl(var(--input))] border border-[hsl(var(--border))] rounded-lg px-4 py-3 text-[hsl(var(--foreground))] focus:ring-2 focus:ring-[hsl(var(--ring))] focus:border-transparent"
                  placeholder="Fortune 500 Tech Company, Chief Strategy Officer"
                />
              </div>

              <div className="glass rounded-lg p-6">
                <label htmlFor="challenge" className="block text-sm font-medium text-[hsl(var(--foreground))] mb-2">
                  Primary AI Communication Challenge
                </label>
                <textarea
                  id="challenge"
                  rows={4}
                  className="w-full bg-[hsl(var(--input))] border border-[hsl(var(--border))] rounded-lg px-4 py-3 text-[hsl(var(--foreground))] focus:ring-2 focus:ring-[hsl(var(--ring))] focus:border-transparent"
                  placeholder="Describe your executive team's current AI usage challenges..."
                />
              </div>

              <div className="glass rounded-lg p-6">
                <label htmlFor="budget" className="block text-sm font-medium text-[hsl(var(--foreground))] mb-2">
                  Estimated Budget Range
                </label>
                <select
                  id="budget"
                  className="w-full bg-[hsl(var(--input))] border border-[hsl(var(--border))] rounded-lg px-4 py-3 text-[hsl(var(--foreground))] focus:ring-2 focus:ring-[hsl(var(--ring))] focus:border-transparent"
                >
                  <option>$15,000 - $25,000</option>
                  <option>$25,000 - $50,000</option>
                  <option>$50,000 - $100,000</option>
                  <option>$100,000+</option>
                  <option>Not yet determined</option>
                </select>
              </div>

              <Button
                size="lg"
                className="w-full bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:opacity-90 text-lg py-6 animate-glow"
              >
                Submit Consultation Request
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>

              <p className="text-sm text-[hsl(var(--muted-foreground))] text-center">
                We respond to all enterprise inquiries within 24 hours
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[hsl(var(--border))] py-12">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-heading text-xl font-bold mb-4 text-[hsl(var(--foreground))]">
                Cognitive Decorum
              </h3>
              <p className="text-sm text-[hsl(var(--muted-foreground))]">
                Executive AI etiquette consulting for the modern leader.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-[hsl(var(--foreground))]">Services</h4>
              <ul className="space-y-2 text-sm text-[hsl(var(--muted-foreground))]">
                <li><Link href="/services" className="hover:text-[hsl(var(--primary))]">AI Communication Audits</Link></li>
                <li><Link href="/services" className="hover:text-[hsl(var(--primary))]">Prompt Tone Calibration</Link></li>
                <li><Link href="/services" className="hover:text-[hsl(var(--primary))]">Executive Coaching</Link></li>
                <li><Link href="/services" className="hover:text-[hsl(var(--primary))]">Enterprise Frameworks</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-[hsl(var(--foreground))]">Company</h4>
              <ul className="space-y-2 text-sm text-[hsl(var(--muted-foreground))]">
                <li><Link href="/about" className="hover:text-[hsl(var(--primary))]">About Us</Link></li>
                <li><Link href="/about" className="hover:text-[hsl(var(--primary))]">Methodology</Link></li>
                <li><Link href="/about" className="hover:text-[hsl(var(--primary))]">Case Studies</Link></li>
                <li><Link href="/about" className="hover:text-[hsl(var(--primary))]">Resources</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-[hsl(var(--foreground))]">Contact</h4>
              <ul className="space-y-2 text-sm text-[hsl(var(--muted-foreground))]">
                <li>enterprise@cognitivedecorum.com</li>
                <li>+1 (555) 123-4567</li>
                <li>San Francisco, CA</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[hsl(var(--border))] pt-8 text-center text-sm text-[hsl(var(--muted-foreground))]">
            <p>&copy; 2025 Cognitive Decorum. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
