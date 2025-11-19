import React from 'react';

type KpiDonutProps = {
  value: number; // 0..100
  size?: number; // px
  thickness?: number; // px
  trackColor?: string;
  valueColor?: string;
  children?: React.ReactNode;
  className?: string;
};

export function KpiDonut({ value, size = 204, thickness = 16, trackColor = 'var(--cc-color-neutral-50)', valueColor = '#4f46e5', children, className = '' }: KpiDonutProps) {
  const radius = (size - thickness) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - Math.min(Math.max(value, 0), 100) / 100);
  const center = size / 2;

  return (
    <div className={`relative inline-block`} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className={className}>
        <circle cx={center} cy={center} r={radius} stroke={trackColor} strokeWidth={thickness} fill="transparent" />
        <circle cx={center} cy={center} r={radius} stroke={valueColor} strokeWidth={thickness} fill="transparent" strokeDasharray={circumference} strokeDashoffset={offset} strokeLinecap="round" transform={`rotate(-90 ${center} ${center})`} />
      </svg>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl font-display text-text-strong">
        {Math.round(value)}%
      </div>
      {children && (
        <div className="absolute left-1/2 top-[calc(50%+28px)] -translate-x-1/2 text-sm text-text-muted">{children}</div>
      )}
    </div>
  );
}
