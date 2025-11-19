import React from 'react';
import { Quote } from './Quote';

export type FaultCardProps = {
  time: string;
  title: string;
  description: string;
  quote: string;
  isActive?: boolean;
  className?: string;
  onClick?: () => void;
  dotColor?: string;
  onQuoteClick?: () => void;
};

export function FaultCard({
  time,
  title,
  description,
  quote,
  isActive = false,
  className = '',
  onClick,
  dotColor = 'var(--danger-danger-default, #bd4246)',
  onQuoteClick
}: FaultCardProps) {
  const [isHovered, setIsHovered] = React.useState(false);

  const borderColor = isActive 
    ? 'var(--neutral-neutral-80, #c6c6d2)' 
    : 'var(--neutral-neutral-95, #f1f1f4)';

  const containerStyle: React.CSSProperties = {
    background: 'var(--neutral-white, #ffffff)',
    border: `1px solid ${borderColor}`,
    borderRadius: 'var(--radius-radius-16, 16px)',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    alignItems: 'flex-end',
    width: '100%',
    boxSizing: 'border-box',
    direction: 'rtl',
    cursor: onClick ? 'pointer' : 'default',
    transition: 'border-color 0.2s ease',
  };

  const headerContainerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
    alignItems: 'flex-end',
    width: '100%',
  };

  const timeStyle: React.CSSProperties = {
    fontFamily: 'var(--cc-font-primary)',
    fontSize: '12px',
    fontWeight: 400,
    lineHeight: 'normal',
    color: 'var(--neutral-black, #17171d)',
    textAlign: 'right',
    margin: 0,
    width: '100%',
  };

  const titleRowStyle: React.CSSProperties = {
    display: 'flex',
    gap: '8px',
    alignItems: 'center',
    width: '100%',
    direction: 'rtl',
  };

  const titleStyle: React.CSSProperties = {
    fontFamily: 'var(--cc-font-primary)',
    fontSize: '16px',
    fontWeight: 500,
    lineHeight: '1',
    color: 'var(--neutral-black, #17171d)',
    textAlign: 'right',
    margin: 0,
  };

  const dotStyle: React.CSSProperties = {
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    background: dotColor,
    flexShrink: 0,
  };

  const descriptionStyle: React.CSSProperties = {
    fontFamily: 'var(--cc-font-primary)',
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: 'normal',
    color: 'var(--neutral-black, #17171d)',
    textAlign: 'right',
    width: '100%',
    margin: 0,
  };

  return (
    <div
      style={containerStyle}
      className={className}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {/* Header: Time, Title with Dot, Description */}
      <div style={headerContainerStyle}>
        {/* Time Stamp */}
        <p style={timeStyle}>{time}</p>
        
        {/* Title with Red Dot Indicator */}
        <div style={titleRowStyle}>
          <div style={dotStyle} />
          <p style={titleStyle}>{title}</p>
        </div>
        
        {/* Description */}
        <p style={descriptionStyle}>{description}</p>
      </div>

      {/* Quote Component */}
      <Quote
        text={quote}
        maxWidth="100%"
        onClick={onQuoteClick}
      />
    </div>
  );
}
