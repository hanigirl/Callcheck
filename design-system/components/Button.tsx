import React from 'react';

export type ButtonVariant = 'primary' | 'secondary';
export type ButtonSize = 'default' | 'large';

export type ButtonProps = {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  iconLeft?: string;
  iconRight?: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
};

export function Button({
  children,
  variant = 'secondary',
  size = 'default',
  iconLeft,
  iconRight,
  onClick,
  disabled = false,
  className = '',
  type = 'button',
}: ButtonProps) {
  const [isHovered, setIsHovered] = React.useState(false);

  // Base button styles
  const baseStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: 'var(--spacing-spacing-xs, 4px)',
    padding: '6px 16px',
    borderRadius: 'var(--radius-radius-8, 8px)',
    fontFamily: 'var(--cc-font-primary)',
    fontSize: 'var(--cc-typography-button-size, 16px)',
    fontWeight: 500,
    lineHeight: size === 'large' ? 1 : 'normal',
    cursor: disabled ? 'not-allowed' : 'pointer',
    border: 'none',
    transition: 'all 0.2s ease',
    direction: 'rtl',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
  };

  // Size variants
  const sizeStyles: React.CSSProperties = {
    height: size === 'large' ? '48px' : '36px',
  };

  // Icon size based on button size
  const iconSize = size === 'large' ? '24px' : '20px';

  // Variant and state styles
  const getVariantStyles = (): React.CSSProperties => {
    if (variant === 'primary') {
      return {
        background: isHovered && !disabled
          ? 'var(--primary-primary-hover-40, #3740d9)'
          : 'var(--primary-primary-default-50, #4659e4)',
        color: 'var(--neutral-white, #ffffff)',
        opacity: disabled ? 0.5 : 1,
      };
    }

    // secondary variant
    return {
      background: isHovered && !disabled
        ? 'var(--neutral-neutral-95, #f1f1f4)'
        : 'transparent',
      border: '1px solid var(--neutral-neutral-80, #c6c6d2)',
      color: 'var(--neutral-black, #17171d)',
      opacity: disabled ? 0.5 : 1,
    };
  };

  const buttonStyle: React.CSSProperties = {
    ...baseStyle,
    ...sizeStyles,
    ...getVariantStyles(),
  };

  const iconStyle: React.CSSProperties = {
    width: iconSize,
    height: iconSize,
    flexShrink: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <button
      type={type}
      style={buttonStyle}
      className={className}
      onClick={disabled ? undefined : onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      disabled={disabled}
    >
      {iconRight && (
        <span style={iconStyle}>
          <img 
            src={iconRight} 
            alt="" 
            style={{ 
              width: '100%', 
              height: '100%',
              filter: variant === 'primary' ? 'brightness(0) invert(1)' : 'none',
            }} 
          />
        </span>
      )}
      <span>{children}</span>
      {iconLeft && (
        <span style={iconStyle}>
          <img 
            src={iconLeft} 
            alt="" 
            style={{ 
              width: '100%', 
              height: '100%',
              filter: variant === 'primary' ? 'brightness(0) invert(1)' : 'none',
            }} 
          />
        </span>
      )}
    </button>
  );
}
