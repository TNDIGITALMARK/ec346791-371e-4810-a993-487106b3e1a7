'use client';

import { ReactNode } from 'react';
import { Card } from './ui/card';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  price: string;
  features: string[];
}

export function ServiceCard({ icon, title, description, price, features }: ServiceCardProps) {
  return (
    <Card className="glass p-8 hover:glass-strong transition-all duration-500 group cursor-pointer">
      <div className="mb-6 text-[hsl(var(--primary))] group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>

      <h3 className="text-2xl font-heading font-semibold mb-3 text-[hsl(var(--foreground))]">
        {title}
      </h3>

      <p className="text-[hsl(var(--muted-foreground))] mb-4 leading-relaxed">
        {description}
      </p>

      <div className="mb-6">
        <span className="text-3xl font-heading font-bold text-[hsl(var(--primary))]">
          {price}
        </span>
        <span className="text-[hsl(var(--muted-foreground))] ml-2">starting</span>
      </div>

      <div className="space-y-3">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start space-x-3">
            <div className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--primary))] mt-2 flex-shrink-0" />
            <span className="text-sm text-[hsl(var(--foreground))] opacity-90">
              {feature}
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
}
