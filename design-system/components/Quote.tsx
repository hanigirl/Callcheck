import React, { useState } from 'react';

type QuoteProps = React.HTMLAttributes<HTMLDivElement> & {
  text: string;
  maxWidth?: string;
};

export function Quote({ text, maxWidth = '247px', className = '', ...rest }: QuoteProps) {
  const [isHovered, setIsHovered] = useState(false);

  const containerStyle: React.CSSProperties = {
    background: isHovered ? 'var(--neutral-neutral-surface, #f1f1f4)' : 'var(--neutral-neutral-97, #fafafa)',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'row',
    gap: '12px',
    height: '56px',
    alignItems: 'center',
    justifyContent: 'flex-start', // Start from right in RTL
    padding: '16px 20px',
    borderRadius: 'var(--radius-radius-16, 16px)',
    width: maxWidth,
    direction: 'rtl',
    cursor: 'pointer',
    transition: 'background 0.2s ease',
  };

  const textStyle: React.CSSProperties = {
    fontFamily: 'var(--cc-font-primary)',
    fontSize: 'var(--typography-body-size, 16px)',
    fontWeight: 400,
    lineHeight: 'normal',
    color: 'var(--neutral-black, #17171d)',
    textAlign: 'right',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    flex: 1,
    minWidth: 0,
  };

  const iconStyle: React.CSSProperties = {
    width: '13px',
    height: '13.73px',
    flexShrink: 0,
  };

  return (
    <div
      style={containerStyle}
      className={className}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...rest}
    >
      <svg
        style={iconStyle}
        viewBox="0 0 13 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.49609 0C7.04835 0 7.49605 0.447757 7.49609 1V12.7305C7.49591 13.2826 7.04826 13.7305 6.49609 13.7305C5.9442 13.7301 5.49628 13.2824 5.49609 12.7305V1C5.49614 0.447954 5.94411 0.000319369 6.49609 0ZM11.9932 2.9209C12.5453 2.92099 12.993 3.36881 12.9932 3.9209V9.80957C12.993 10.3616 12.5452 10.8095 11.9932 10.8096C11.4412 10.8093 10.9934 10.3615 10.9932 9.80957V3.9209C10.9933 3.36889 11.4412 2.92113 11.9932 2.9209ZM1 4.6416C1.55225 4.6416 1.99995 5.08936 2 5.6416V8.08887C2 8.64115 1.55228 9.08887 1 9.08887C0.447909 9.08864 0 8.64101 0 8.08887V5.6416C4.86701e-05 5.0895 0.447939 4.64183 1 4.6416Z"
          fill="#4659E4"
        />
      </svg>
      <p style={textStyle}>
        {text}
      </p>
    </div>
  );
}

