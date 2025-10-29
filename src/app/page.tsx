'use client';

import { Navigation } from '@/components/navigation';
import { ServiceCard } from '@/components/service-card';
import { TestimonialCard } from '@/components/testimonial-card';
import { TypingText } from '@/components/typing-text';
import { Button } from '@/components/ui/button';
import {
  Brain,
  Target,
  Users,
  FileText,
  ArrowRight,
  CheckCircle,
  Sparkles
} from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background gradient effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--background))] via-[hsl(var(--accent))] to-[hsl(var(--background))] opacity-30" />

        <div className="container-custom relative z-10 text-center animate-fadeIn">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8 flex justify-center">
              <div className="glass px-6 py-3 rounded-full inline-flex items-center space-x-2">
                <Sparkles className="w-4 h-4 text-[hsl(var(--primary))]" />
                <span className="text-sm text-[hsl(var(--muted-foreground))] font-medium">
                  The World's First AI Etiquette Consultancy
                </span>
              </div>
            </div>

            <h1 className="font-heading font-bold text-[hsl(var(--foreground))] mb-6 leading-tight">
              <TypingText
                text="Where Human Poise Meets Machine Precision"
                speed={60}
                className="block"
              />
            </h1>

            <p className="text-xl md:text-2xl text-[hsl(var(--muted-foreground))] mb-8 max-w-3xl mx-auto leading-relaxed">
              Teaching executives and leadership teams to communicate with AI systems with the same authority,
              empathy, and strategic thinking they bring to human interactions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button
                size="lg"
                className="bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:opacity-90 text-lg px-8 py-6 animate-glow"
              >
                Schedule Executive Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[hsl(var(--border))] text-[hsl(var(--foreground))] hover:bg-[hsl(var(--accent))] text-lg px-8 py-6"
              >
                View Services
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-sm text-[hsl(var(--muted-foreground))]">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-[hsl(var(--primary))]" />
                <span>Fortune 500 Trusted</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-[hsl(var(--primary))]" />
                <span>C-Suite Focused</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-[hsl(var(--primary))]" />
                <span>Proprietary Methodology</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-pulse-slow">
          <div className="w-6 h-10 border-2 border-[hsl(var(--primary))] rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-[hsl(var(--primary))] rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="section-padding bg-gradient-to-b from-[hsl(var(--background))] to-[hsl(var(--accent))]">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fadeIn">
            <h2 className="font-heading text-[hsl(var(--foreground))] mb-4">
              Executive AI Excellence
            </h2>
            <p className="text-xl text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto">
              Proprietary frameworks designed for leaders who demand precision in every interaction
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              icon={<Brain className="w-12 h-12" />}
              title="AI Communication Audits"
              description="Comprehensive analysis of your team's current AI interaction patterns with strategic improvement roadmap."
              price="$25,000"
              features={[
                "Full team assessment",
                "Usage pattern analysis",
                "Strategic recommendations",
                "Implementation roadmap"
              ]}
            />

            <ServiceCard
              icon={<Target className="w-12 h-12" />}
              title="Prompt Tone Calibration"
              description="Refine the tone, clarity, and structure of AI prompts to align with your brand's executive voice."
              price="$18,000"
              features={[
                "Brand voice analysis",
                "Prompt optimization",
                "Tone consistency framework",
                "Quality assurance protocol"
              ]}
            />

            <ServiceCard
              icon={<Users className="w-12 h-12" />}
              title="Executive AI Coaching"
              description="One-on-one workshops teaching leaders to maintain authority and strategic thinking in AI collaboration."
              price="$15,000"
              features={[
                "Personalized coaching",
                "Strategic prompt design",
                "Leadership communication",
                "Ongoing support"
              ]}
            />

            <ServiceCard
              icon={<FileText className="w-12 h-12" />}
              title="Enterprise Policy Framework"
              description="Professional guidelines establishing AI usage standards across your corporate ecosystem."
              price="$50,000"
              features={[
                "Custom policy development",
                "Compliance integration",
                "Training materials",
                "Implementation support"
              ]}
            />
          </div>

          <div className="text-center mt-12">
            <Link href="/services">
              <Button
                size="lg"
                className="bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:opacity-90"
              >
                Explore All Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* The PACE Protocol Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="glass-strong rounded-2xl p-12 md:p-16">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-heading text-[hsl(var(--foreground))] mb-6">
                The PACE Protocol™
              </h2>
              <p className="text-xl text-[hsl(var(--muted-foreground))] mb-12">
                Our proprietary framework for executive AI communication excellence
              </p>

              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] flex items-center justify-center font-heading font-bold text-xl flex-shrink-0">
                      P
                    </div>
                    <div>
                      <h3 className="font-heading text-xl mb-2 text-[hsl(var(--foreground))]">Precision</h3>
                      <p className="text-[hsl(var(--muted-foreground))]">
                        Articulate objectives with surgical clarity, eliminating ambiguity in AI instructions
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] flex items-center justify-center font-heading font-bold text-xl flex-shrink-0">
                      A
                    </div>
                    <div>
                      <h3 className="font-heading text-xl mb-2 text-[hsl(var(--foreground))]">Authority</h3>
                      <p className="text-[hsl(var(--muted-foreground))]">
                        Maintain executive leadership presence in every AI interaction
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] flex items-center justify-center font-heading font-bold text-xl flex-shrink-0">
                      C
                    </div>
                    <div>
                      <h3 className="font-heading text-xl mb-2 text-[hsl(var(--foreground))]">Clarity</h3>
                      <p className="text-[hsl(var(--muted-foreground))]">
                        Structure communications for optimal AI comprehension and strategic output
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] flex items-center justify-center font-heading font-bold text-xl flex-shrink-0">
                      E
                    </div>
                    <div>
                      <h3 className="font-heading text-xl mb-2 text-[hsl(var(--foreground))]">Empathy</h3>
                      <p className="text-[hsl(var(--muted-foreground))]">
                        Balance human values with technological capabilities for ethical AI collaboration
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-gradient-to-b from-[hsl(var(--background))] to-[hsl(var(--accent))]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-heading text-[hsl(var(--foreground))] mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto">
              C-suite executives transforming their AI communication strategies
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <TestimonialCard
              quote="Cognitive Decorum transformed how our leadership team approaches AI collaboration, resulting in 40% more strategic AI outputs and significantly improved decision-making quality."
              author="Sarah Chen"
              title="CEO"
              company="TechVantage Solutions"
            />

            <TestimonialCard
              quote="The prompt calibration workshop elevated our executive communication with AI from transactional to transformational. Our team now maintains the same professional authority with machines as they do with people."
              author="Michael Rodriguez"
              title="Chief Strategy Officer"
              company="GlobalSync Corporation"
            />

            <TestimonialCard
              quote="Their Enterprise Policy Framework provided the structure we needed to integrate AI tools across our organization while maintaining our corporate values and executive standards."
              author="Jennifer Park"
              title="Chief Operating Officer"
              company="Fortune 100 Financial Services Firm"
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

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="glass-strong rounded-2xl p-12 md:p-16 text-center">
            <h2 className="font-heading text-[hsl(var(--foreground))] mb-6">
              Ready to Elevate Your AI Leadership?
            </h2>
            <p className="text-xl text-[hsl(var(--muted-foreground))] mb-8 max-w-2xl mx-auto">
              Join the executives who are mastering the art of leading machines with the same poise they lead people.
            </p>
            <Button
              size="lg"
              className="bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:opacity-90 text-lg px-10 py-6 animate-glow"
            >
              Schedule Your Executive Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
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
