import React from 'react';
import { cn } from '@/lib/utils';

interface SectionTitleProps extends React.HTMLAttributes<HTMLDivElement> {
  tag?: React.ElementType;
  subtitle?: string;
  centered?: boolean;
}

export function SectionTitle({
  tag: Tag = 'h2',
  subtitle,
  centered = true,
  className,
  children,
  ...props
}: SectionTitleProps) {
  return (
    <div className={cn('space-y-2', centered && 'text-center', className)} {...props}>
      {subtitle && <p className="text-secondary font-semibold text-sm uppercase">{subtitle}</p>}
      <Tag className="text-3xl md:text-4xl font-bold text-dark">{children}</Tag>
    </div>
  );
}
