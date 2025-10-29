'use client';

import { Card } from './ui/card';

interface TestimonialCardProps {
  quote: string;
  author: string;
  title: string;
  company: string;
}

export function TestimonialCard({ quote, author, title, company }: TestimonialCardProps) {
  return (
    <Card className="glass p-8 hover:glass-strong transition-all duration-500">
      <div className="mb-6">
        <svg
          className="w-10 h-10 text-[hsl(var(--primary))] opacity-50"
          fill="currentColor"
          viewBox="0 0 32 32"
        >
          <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2h2V8h-2zm12 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2h2V8h-2z" />
        </svg>
      </div>

      <p className="text-[hsl(var(--foreground))] text-lg leading-relaxed mb-6 italic">
        {quote}
      </p>

      <div className="border-t border-[hsl(var(--border))] pt-4">
        <p className="font-semibold text-[hsl(var(--foreground))]">
          {author}
        </p>
        <p className="text-sm text-[hsl(var(--muted-foreground))]">
          {title}
        </p>
        <p className="text-sm text-[hsl(var(--muted-foreground))] opacity-75">
          {company}
        </p>
      </div>
    </Card>
  );
}
