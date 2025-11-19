import React from 'react';

type SidebarItem = {
  id: string;
  label: string;
  icon?: React.ReactNode;
  iconPath?: string; // Path to SVG icon
  isActive?: boolean;
  onClick?: () => void;
};

type SidebarProps = {
  items: SidebarItem[];
  logo?: React.ReactNode;
  className?: string;
};

export function Sidebar({ items, logo, className = '' }: SidebarProps) {
  const [hoveredItem, setHoveredItem] = React.useState<string | null>(null);

  // Sidebar container style
  const sidebarStyle: React.CSSProperties = {
    background: 'var(--blue-blue-150)',
    padding: '17px 19px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '10px',
    width: '100%',
    height: '100%',
    boxSizing: 'border-box',
  };

  // Logo container
  const logoContainerStyle: React.CSSProperties = {
    marginBottom: '40px',
  };

  // Items container - 40px between items (groups)
  const itemsContainerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '40px', // 40px between items (groups)
    alignItems: 'center',
    width: '100%',
  };

  // Individual item container
  const getItemStyle = (item: SidebarItem): React.CSSProperties => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '36px',
    cursor: item.onClick ? 'pointer' : 'default',
    transition: 'opacity 0.2s ease',
  });

  // Icon container - 4px margin bottom (between icon and label)
  const iconContainerStyle: React.CSSProperties = {
    width: '24px',
    height: '24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    marginBottom: '4px', // 4px between icon and label
  };

  // Label style - 12px font, Ploni regular
  const getLabelStyle = (item: SidebarItem, isHovered: boolean): React.CSSProperties => ({
    fontSize: '12px',
    fontFamily: 'var(--cc-font-display)',
    fontWeight: 'normal',
    color: 'var(--gray-white)',
    textAlign: 'right',
    whiteSpace: 'nowrap',
    opacity: isHovered || item.isActive ? 1 : 0.6, // White on hover/active, gray on default
  });

  const renderIcon = (item: SidebarItem, isHovered: boolean) => {
    const iconOpacity = isHovered || item.isActive ? 1 : 0.6;
    const iconStyle: React.CSSProperties = {
      width: '24px',
      height: '24px',
      opacity: iconOpacity,
      transition: 'opacity 0.2s ease',
      color: 'var(--gray-white)', // White color for icons
    };

    if (item.icon) {
      return <div style={iconStyle}>{item.icon}</div>;
    }
    if (item.iconPath) {
      return (
        <img
          src={item.iconPath}
          alt={item.label}
          style={{
            ...iconStyle,
            filter: `brightness(0) invert(1)`, // Make SVG white
          }}
        />
      );
    }
    return null;
  };

  return (
    <div className={`cc-sidebar ${className}`} style={sidebarStyle}>
      {logo && <div style={logoContainerStyle}>{logo}</div>}
      
      <div style={itemsContainerStyle}>
        {items.map((item) => {
          const isHovered = hoveredItem === item.id;
          return (
            <div
              key={item.id}
              style={getItemStyle(item)}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
              onClick={item.onClick}
            >
              <div style={iconContainerStyle}>
                {renderIcon(item, isHovered)}
              </div>
              <div style={getLabelStyle(item, isHovered)}>{item.label}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

