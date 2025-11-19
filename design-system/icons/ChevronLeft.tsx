import React from 'react';

type ChevronLeftIconProps = React.SVGProps<SVGSVGElement> & {
  color?: string;
};

export function ChevronLeftIcon({ color = 'currentColor', ...props }: ChevronLeftIconProps) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M12.5 15L7.5 10L12.5 5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

