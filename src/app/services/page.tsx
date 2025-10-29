'use client';

import { Navigation } from '@/components/navigation';
import { ServiceCard } from '@/components/service-card';
import { Button } from '@/components/ui/button';
import {
  Brain,
  Target,
  Users,
  FileText,
  ArrowRight,
  CheckCircle2,
  Award,
  TrendingUp,
  Shield
} from 'lucide-react';
import Link from 'next/link';

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-[hsl(var(--background))] via-[hsl(var(--accent))] to-[hsl(var(--background))]">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center animate-fadeIn">
            <h1 className="font-heading font-bold text-[hsl(var(--foreground))] mb-6">
              Service Portfolio
            </h1>
            <p className="text-xl md:text-2xl text-[hsl(var(--muted-foreground))] leading-relaxed">
              Comprehensive AI etiquette consulting services designed for executive leadership excellence
            </p>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <ServiceCard
              icon={<Brain className="w-12 h-12" />}
              title="AI Communication Audits"
              description="Comprehensive analysis of how your leadership team currently interacts with AI systems, revealing patterns, inefficiencies, and strategic opportunities for optimization."
              price="$25,000"
              features={[
                "Full executive team assessment (5-15 leaders)",
                "GPT, Gemini, Copilot usage pattern analysis",
                "Prompt quality evaluation framework",
                "Brand voice alignment review",
                "30-day strategic improvement roadmap",
                "Follow-up consultation session"
              ]}
            />

            <ServiceCard
              icon={<Target className="w-12 h-12" />}
              title="Prompt Tone Calibration"
              description="Refine the tone, clarity, and structure of your organization's AI prompts to ensure every interaction reflects your brand's executive voice and strategic positioning."
              price="$18,000"
              features={[
                "Brand voice DNA extraction",
                "Prompt library optimization (up to 50 prompts)",
                "Tone consistency framework development",
                "Executive communication templates",
                "Quality assurance protocol",
                "3-month support period"
              ]}
            />

            <ServiceCard
              icon={<Users className="w-12 h-12" />}
              title="Executive AI Coaching"
              description="Personalized one-on-one workshops teaching C-suite leaders to maintain their authority, strategic thinking, and leadership presence when collaborating with AI systems."
              price="$15,000"
              features={[
                "4 personalized coaching sessions (2 hours each)",
                "Strategic prompt design training",
                "Leadership communication in AI age",
                "Real-world scenario practice",
                "Personalized playbook development",
                "6-month ongoing email support"
              ]}
            />

            <ServiceCard
              icon={<FileText className="w-12 h-12" />}
              title="Enterprise Policy Framework"
              description="Professional guidelines establishing comprehensive AI usage standards across your corporate ecosystem, ensuring compliance, consistency, and executive-level quality."
              price="$50,000"
              features={[
                "Custom policy development (25-50 pages)",
                "Legal and compliance integration",
                "Departmental usage guidelines",
                "Training materials and workshops",
                "Implementation support (90 days)",
                "Quarterly review sessions (1 year)"
              ]}
            />
          </div>

          {/* Service Add-ons */}
          <div className="glass-strong rounded-2xl p-12 mb-16">
            <h2 className="font-heading text-2xl font-semibold text-[hsl(var(--foreground))] mb-8 text-center">
              Service Enhancements
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8" />
                </div>
                <h3 className="font-heading text-lg font-semibold mb-2 text-[hsl(var(--foreground))]">
                  Certification Program
                </h3>
                <p className="text-sm text-[hsl(var(--muted-foreground))] mb-3">
                  Certify your leaders as AI Communication Professionals
                </p>
                <p className="text-[hsl(var(--primary))] font-semibold">+$5,000 per leader</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8" />
                </div>
                <h3 className="font-heading text-lg font-semibold mb-2 text-[hsl(var(--foreground))]">
                  Ongoing Optimization
                </h3>
                <p className="text-sm text-[hsl(var(--muted-foreground))] mb-3">
                  Quarterly audits and continuous improvement
                </p>
                <p className="text-[hsl(var(--primary))] font-semibold">$12,000/quarter</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8" />
                </div>
                <h3 className="font-heading text-lg font-semibold mb-2 text-[hsl(var(--foreground))]">
                  Crisis Response
                </h3>
                <p className="text-sm text-[hsl(var(--muted-foreground))] mb-3">
                  24-hour emergency AI communication consulting
                </p>
                <p className="text-[hsl(var(--primary))] font-semibold">$25,000/year retainer</p>
              </div>
            </div>
          </div>

          {/* Service Process */}
          <div className="mb-16">
            <h2 className="font-heading text-3xl font-semibold text-[hsl(var(--foreground))] mb-12 text-center">
              Our Engagement Process
            </h2>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="glass p-6 rounded-xl text-center">
                <div className="w-12 h-12 rounded-full bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] flex items-center justify-center font-heading font-bold text-xl mx-auto mb-4">
                  1
                </div>
                <h3 className="font-heading text-lg font-semibold mb-2 text-[hsl(var(--foreground))]">
                  Discovery Call
                </h3>
                <p className="text-sm text-[hsl(var(--muted-foreground))]">
                  60-minute consultation to understand your executive AI challenges and objectives
                </p>
              </div>

              <div className="glass p-6 rounded-xl text-center">
                <div className="w-12 h-12 rounded-full bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] flex items-center justify-center font-heading font-bold text-xl mx-auto mb-4">
                  2
                </div>
                <h3 className="font-heading text-lg font-semibold mb-2 text-[hsl(var(--foreground))]">
                  Custom Proposal
                </h3>
                <p className="text-sm text-[hsl(var(--muted-foreground))]">
                  Tailored service package with clear deliverables, timeline, and investment
                </p>
              </div>

              <div className="glass p-6 rounded-xl text-center">
                <div className="w-12 h-12 rounded-full bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] flex items-center justify-center font-heading font-bold text-xl mx-auto mb-4">
                  3
                </div>
                <h3 className="font-heading text-lg font-semibold mb-2 text-[hsl(var(--foreground))]">
                  Implementation
                </h3>
                <p className="text-sm text-[hsl(var(--muted-foreground))]">
                  Hands-on engagement with your leadership team and systems
                </p>
              </div>

              <div className="glass p-6 rounded-xl text-center">
                <div className="w-12 h-12 rounded-full bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] flex items-center justify-center font-heading font-bold text-xl mx-auto mb-4">
                  4
                </div>
                <h3 className="font-heading text-lg font-semibold mb-2 text-[hsl(var(--foreground))]">
                  Ongoing Support
                </h3>
                <p className="text-sm text-[hsl(var(--muted-foreground))]">
                  Continuous refinement and adaptation as AI tools evolve
                </p>
              </div>
            </div>
          </div>

          {/* Expected Outcomes */}
          <div className="glass-strong rounded-2xl p-12">
            <h2 className="font-heading text-3xl font-semibold text-[hsl(var(--foreground))] mb-8 text-center">
              Expected Outcomes
            </h2>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="flex items-start space-x-4">
                <CheckCircle2 className="w-6 h-6 text-[hsl(var(--primary))] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-[hsl(var(--foreground))] mb-1">
                    40-60% Increase in AI Output Quality
                  </h3>
                  <p className="text-sm text-[hsl(var(--muted-foreground))]">
                    More strategic, accurate, and actionable responses from AI systems
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle2 className="w-6 h-6 text-[hsl(var(--primary))] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-[hsl(var(--foreground))] mb-1">
                    30% Time Savings
                  </h3>
                  <p className="text-sm text-[hsl(var(--muted-foreground))]">
                    Reduced iteration cycles through better initial prompts
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle2 className="w-6 h-6 text-[hsl(var(--primary))] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-[hsl(var(--foreground))] mb-1">
                    Consistent Brand Voice
                  </h3>
                  <p className="text-sm text-[hsl(var(--muted-foreground))]">
                    All AI-generated content reflects your executive standards
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle2 className="w-6 h-6 text-[hsl(var(--primary))] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-[hsl(var(--foreground))] mb-1">
                    Enhanced Leadership Confidence
                  </h3>
                  <p className="text-sm text-[hsl(var(--muted-foreground))]">
                    Executives feel empowered to leverage AI strategically
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle2 className="w-6 h-6 text-[hsl(var(--primary))] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-[hsl(var(--foreground))] mb-1">
                    Competitive Advantage
                  </h3>
                  <p className="text-sm text-[hsl(var(--muted-foreground))]">
                    Differentiated AI capabilities in your industry
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle2 className="w-6 h-6 text-[hsl(var(--primary))] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-[hsl(var(--foreground))] mb-1">
                    ROI Within 6 Months
                  </h3>
                  <p className="text-sm text-[hsl(var(--muted-foreground))]">
                    Measurable productivity and decision-making improvements
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-b from-[hsl(var(--background))] to-[hsl(var(--accent))]">
        <div className="container-custom">
          <div className="glass-strong rounded-2xl p-12 md:p-16 text-center max-w-3xl mx-auto">
            <h2 className="font-heading text-[hsl(var(--foreground))] mb-6">
              Ready to Transform Your Executive AI Strategy?
            </h2>
            <p className="text-xl text-[hsl(var(--muted-foreground))] mb-8">
              Schedule a confidential consultation to discuss your organization's needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:opacity-90 text-lg px-10 py-6 animate-glow"
              >
                Book Discovery Call
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[hsl(var(--border))] text-[hsl(var(--foreground))] hover:bg-[hsl(var(--accent))] text-lg px-10 py-6"
              >
                Download Service Guide
              </Button>
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
