import React, { useState, useRef, useEffect } from 'react';

type DropdownOption = {
  label: string;
  value: string;
};

type DropdownProps = {
  label?: string;
  value?: string;
  options: DropdownOption[];
  onChange?: (value: string) => void;
  className?: string;
  size?: 'sm' | 'lg';
};

export function Dropdown({ 
  label, 
  value, 
  options, 
  onChange, 
  className = '',
  size = 'sm'
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find(opt => opt.value === value) || options[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (optionValue: string) => {
    onChange?.(optionValue);
    setIsOpen(false);
  };

  const buttonStyle: React.CSSProperties = {
    border: '1px solid var(--neutral-neutral-80, #c6c6d2)',
    boxSizing: 'border-box',
    display: 'flex',
    gap: 'var(--spacing-spacing-xs, 4px)',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: size === 'sm' ? '6px 16px' : '8px 16px',
    borderRadius: 'var(--radius-radius-8, 8px)',
    background: 'var(--neutral-white, #ffffff)',
    cursor: 'pointer',
    fontFamily: 'var(--cc-font-primary)',
    fontSize: 'var(--typography-button-size, 16px)',
    fontWeight: 'var(--typography-button-weight, 500)',
    color: 'var(--neutral-black, #17171d)',
    direction: 'rtl',
    textAlign: 'right',
    transition: 'background 0.2s ease',
    whiteSpace: 'nowrap',
  };

  const buttonHoverStyle: React.CSSProperties = {
    ...buttonStyle,
    background: 'var(--neutral-neutral-95, #f1f1f4)',
  };

  const dropdownMenuStyle: React.CSSProperties = {
    position: 'absolute',
    top: 'calc(100% + 4px)',
    right: 0,
    background: 'var(--neutral-white, #ffffff)',
    border: '1px solid var(--neutral-neutral-95, #f1f1f4)',
    borderRadius: 'var(--radius-radius-8, 8px)',
    boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.1)',
    minWidth: '100%',
    zIndex: 1000,
    direction: 'rtl',
    overflow: 'hidden',
  };

  const dropdownItemStyle: React.CSSProperties = {
    padding: '8px 16px',
    cursor: 'pointer',
    fontFamily: 'var(--cc-font-primary)',
    fontSize: 'var(--typography-body-size, 16px)',
    fontWeight: 400,
    color: 'var(--neutral-black, #17171d)',
    textAlign: 'right',
    direction: 'rtl',
    transition: 'background 0.2s ease',
  };

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div style={{ display: 'flex', gap: '8px', alignItems: 'center', direction: 'rtl' }}>
      {label && (
        <span style={{
          fontFamily: 'var(--cc-font-primary)',
          fontSize: 'var(--typography-body-size, 16px)',
          color: 'var(--neutral-neutral-text-default, #444456)',
          textAlign: 'right',
          direction: 'rtl',
        }}>
          {label}
        </span>
      )}
      <div ref={dropdownRef} style={{ position: 'relative' }} className={className}>
        <button
          type="button"
          style={isHovered ? buttonHoverStyle : buttonStyle}
          onClick={() => setIsOpen(!isOpen)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <span>{selectedOption.label}</span>
          {/* Chevron Icon - שמאלי */}
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              transition: 'transform 0.2s ease',
              transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            }}
          >
            <path
              d="M5 7.5L10 12.5L15 7.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {isOpen && (
          <div style={dropdownMenuStyle}>
            {options.map((option) => (
              <div
                key={option.value}
                style={{
                  ...dropdownItemStyle,
                  background: option.value === value ? 'var(--neutral-neutral-97, #fafafa)' : 'transparent',
                }}
                onClick={() => handleSelect(option.value)}
                onMouseEnter={(e) => {
                  if (option.value !== value) {
                    (e.target as HTMLDivElement).style.background = 'var(--neutral-neutral-97, #fafafa)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (option.value !== value) {
                    (e.target as HTMLDivElement).style.background = 'transparent';
                  }
                }}
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
