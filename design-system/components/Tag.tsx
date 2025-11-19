import React from 'react';

export type TagVariant = 'default' | 'danger' | 'success' | 'warning';
export type TagState = 'default' | 'active';

export type TagProps = {
  label: string;
  count?: number;
  variant?: TagVariant;
  state?: TagState;
  onClick?: () => void;
  className?: string;
};

export function Tag({
  label,
  count,
  variant = 'default',
  state = 'default',
  onClick,
  className = '',
}: TagProps) {
  const isActive = state === 'active';

  // Container styles
  const containerStyle: React.CSSProperties = {
    background: 'var(--neutral-white, #ffffff)',
    border: `1px solid ${isActive ? 'var(--neutral-neutral-80, #c6c6d2)' : 'var(--neutral-neutral-90, #e2e2e8)'}`,
    borderRadius: 'var(--radius-radius-100, 100px)',
    padding: '6px 16px',
    display: 'inline-flex',
    gap: '4px',
    alignItems: 'center',
    cursor: onClick ? 'pointer' : 'default',
    transition: 'border-color 0.2s ease',
    direction: 'rtl',
  };

  // Label text style
  const labelStyle: React.CSSProperties = {
    fontFamily: 'var(--cc-font-primary)',
    fontSize: '14px',
    fontWeight: 500,
    lineHeight: 'normal',
    color: 'var(--neutral-black, #17171d)',
    textAlign: 'right',
    whiteSpace: 'nowrap',
  };

  // Count badge styles based on variant
  const getCountBadgeStyles = (): React.CSSProperties => {
    const baseStyle: React.CSSProperties = {
      minWidth: '20px',
      height: '20px',
      padding: '2.5px 4px',
      borderRadius: '62.5px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    };

    switch (variant) {
      case 'danger':
        return {
          ...baseStyle,
          background: 'var(--danger-danger-surface, #f8eced)',
        };
      case 'success':
        return {
          ...baseStyle,
          background: 'var(--success-success-surface, #e8f5e6)',
        };
      case 'warning':
        return {
          ...baseStyle,
          background: 'var(--warning-warning-surface, #fff4e5)',
        };
      default:
        return {
          ...baseStyle,
          background: 'var(--neutral-neutral-95, #f1f1f4)',
        };
    }
  };

  // Count text color based on variant
  const getCountTextColor = (): string => {
    switch (variant) {
      case 'danger':
        return 'var(--danger-danger-400, #973538)';
      case 'success':
        return 'var(--success-success-400, #3d7a36)';
      case 'warning':
        return 'var(--warning-warning-400, #995c00)';
      default:
        return 'var(--neutral-neutral-text-default, #808191)';
    }
  };

  const countStyle: React.CSSProperties = {
    fontFamily: 'var(--cc-font-primary)',
    fontSize: '12px',
    fontWeight: 400,
    lineHeight: 'normal',
    color: getCountTextColor(),
    textAlign: 'center',
  };

  return (
    <div
      style={containerStyle}
      className={className}
      onClick={onClick}
    >
      <span style={labelStyle}>{label}</span>
      {count !== undefined && (
        <div style={getCountBadgeStyles()}>
          <span style={countStyle}>{count}</span>
        </div>
      )}
    </div>
  );
}

