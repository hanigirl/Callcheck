import React from 'react';

export type CategoryStatItem = {
  label: string;
  value: number; // 0-100 percentage
  color?: 'dark' | 'medium' | 'light';
};

type CategoryStatsProps = {
  title?: string;
  sectionTitle?: string;
  items: CategoryStatItem[];
  className?: string;
};

const colorMap = {
  dark: 'var(--purple-purple-500)', // #8c70e8
  medium: 'var(--purple-purple-600)', // #b7a4f4
  light: 'var(--purple-purple-800)', // #d7d0ec
};

// Progress bar width constant (matches Figma)
const BAR_WIDTH = 77;

export function CategoryStats({
  title = 'ציון שבועי ממוצע למוקד',
  sectionTitle = 'לפי קטגוריה',
  items,
  className = '',
}: CategoryStatsProps) {
  // Card container style
  const cardStyle: React.CSSProperties = {
    background: 'var(--gray-white)',
    padding: '24px',
    borderRadius: 'var(--radius-radius-16)',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    alignItems: 'flex-end',
  };

  // Title style (H2)
  const titleStyle: React.CSSProperties = {
    fontFamily: 'var(--cc-font-display)',
    fontSize: 'var(--cc-size-2xl)',
    fontWeight: 600,
    color: 'var(--gray-gray-100)',
    textAlign: 'right',
    lineHeight: 1,
    margin: 0,
  };

  // Section title style (H4)
  const sectionTitleStyle: React.CSSProperties = {
    fontFamily: 'var(--cc-font-display)',
    fontSize: 'var(--font-size-16)',
    fontWeight: 600,
    color: 'var(--gray-gray-100)',
    textAlign: 'right',
    lineHeight: 1,
    margin: 0,
  };

  // Category label style
  const labelStyle: React.CSSProperties = {
    fontFamily: 'var(--cc-font-display)',
    fontSize: 'var(--font-size-14)',
    fontWeight: 400,
    color: 'var(--gray-gray-100)',
    textAlign: 'right',
    width: '48px',
    lineHeight: 1,
  };

  // Percentage value style
  const valueStyle: React.CSSProperties = {
    fontFamily: 'var(--cc-font-display)',
    fontSize: 'var(--font-size-14)',
    fontWeight: 400,
    color: 'var(--gray-gray-300)',
    textAlign: 'right',
    lineHeight: 1,
  };

  // Track style (background bar)
  const trackStyle: React.CSSProperties = {
    width: `${BAR_WIDTH}px`,
    height: '12px',
    background: 'var(--blue-blue-950)',
    borderRadius: '100px',
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'row-reverse',
    alignItems: 'center',
  };

  // Get fill style for a specific value and color
  const getFillStyle = (value: number, color: 'dark' | 'medium' | 'light'): React.CSSProperties => {
    const fillWidth = Math.min(Math.max(value, 0), 100) * (BAR_WIDTH / 100);
    return {
      width: `${fillWidth}px`,
      height: '12px',
      background: colorMap[color],
      borderRadius: '100px',
    };
  };

  // Row style for each stat item
  const rowStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: '5px',
    width: '100%',
  };

  return (
    <div className={`cc-category-stats ${className}`} style={cardStyle}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', alignItems: 'flex-end' }}>
        {/* Title */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', width: '100%' }}>
          <p style={titleStyle}>{title}</p>
        </div>

        {/* Category Stats Section */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-end' }}>
          {/* Section Title */}
          <p style={sectionTitleStyle}>{sectionTitle}</p>

          {/* Stats Items */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'flex-start' }}>
            {items.map((item, index) => {
              const color = item.color || (['dark', 'medium', 'light'][index % 3] as 'dark' | 'medium' | 'light');
              return (
                <div key={index} style={rowStyle}>
                  {/* Percentage */}
                  <span style={valueStyle}>{item.value}%</span>
                  
                  {/* Progress Bar */}
                  <div style={trackStyle}>
                    <div style={getFillStyle(item.value, color)} />
                  </div>
                  
                  {/* Label */}
                  <span style={labelStyle}>{item.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
