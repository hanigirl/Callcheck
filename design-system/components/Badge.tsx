import React from 'react';

export type BadgeProps = {
  count?: number;
  text?: string;
  variant?: 'danger' | 'success' | 'neutral';
  icon?: string; // Path to icon SVG
  showIcon?: boolean;
};

export function Badge({ 
  count, 
  text, 
  variant = 'danger', 
  icon, 
  showIcon = false 
}: BadgeProps) {
  const getColors = () => {
    switch (variant) {
      case 'danger':
        return {
          background: 'var(--danger-danger-surface, #f8eced)',
          color: 'var(--danger-danger-400, #973538)',
        };
      case 'success':
        return {
          background: 'var(--success-success-surface, #e8f5e9)',
          color: 'var(--success-success-400, #4caf50)',
        };
      case 'neutral':
      default:
        return {
          background: 'var(--red-red-950, #f8eced)',
          color: 'var(--red-red-400, #e94047)',
        };
    }
  };

  const colors = getColors();

  const badgeStyle: React.CSSProperties = {
    background: colors.background,
    borderRadius: '100px',
    padding: showIcon && icon ? '6px 8px' : '6px 8px',
    minWidth: count !== undefined ? '32px' : 'auto',
    height: '32px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: showIcon && icon ? '4px' : '0',
    boxSizing: 'border-box',
    direction: 'rtl',
  };

  const textStyle: React.CSSProperties = {
    fontSize: '16px',
    fontFamily: 'var(--cc-font-primary)',
    fontWeight: count !== undefined ? 500 : 400, // Medium for count, Regular for text
    lineHeight: '100%',
    color: colors.color,
    textAlign: 'center',
  };

  return (
    <div style={badgeStyle}>
      {showIcon && icon && (
        <img 
          src={icon} 
          alt="" 
          style={{ 
            width: '12px', 
            height: '12px',
            flexShrink: 0,
          }} 
        />
      )}
      <span style={textStyle}>
        {count !== undefined ? count : text}
      </span>
    </div>
  );
}

