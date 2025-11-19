import React from 'react';

type PillTone = 'neutral' | 'success' | 'danger';

type PillProps = React.HTMLAttributes<HTMLSpanElement> & {
  tone?: PillTone;
};

const tones: Record<PillTone, string> = {
  neutral: 'bg-neutral50 text-text',
  success: 'bg-success-bg text-success',
  danger: 'bg-danger-bg text-danger',
};

export function Pill({ tone = 'neutral', className = '', children, ...rest }: PillProps) {
  return (
    <span className={`inline-flex items-center rounded-full px-2 py-1 text-sm ${tones[tone]} ${className}`} {...rest}>
      {children}
    </span>
  );
}
