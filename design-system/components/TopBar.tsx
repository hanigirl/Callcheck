import React from 'react';
import { SearchInput, SearchSuggestion } from './SearchInput';
import defaultAvatarImage from '../assets/avatar.png';

type TopBarProps = {
  userName: string;
  userAvatar?: string;
  onSearch?: (query: string) => void;
  searchSuggestions?: SearchSuggestion[];
  className?: string;
};

export function TopBar({
  userName,
  userAvatar,
  onSearch,
  searchSuggestions = [],
  className = '',
}: TopBarProps) {
  const handleSuggestionSelect = (suggestion: SearchSuggestion) => {
    onSearch?.(suggestion.label);
  };

  // Top bar container - sticky, full width, responsive, RTL
  const topBarStyle: React.CSSProperties = {
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    width: '100%',
    minHeight: '80px',
    height: '80px',
    background: 'var(--gray-white)',
    borderBottom: '1px solid var(--gray-gray-950)',
    padding: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '10px',
    boxSizing: 'border-box',
    direction: 'rtl',
  };

  // Search container - centered, responsive
  const searchContainerStyle: React.CSSProperties = {
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '638px',
    maxWidth: 'min(638px, calc(100% - 300px))',
    minWidth: '200px',
  };

  // User section - right side (in RTL, avatar should be on the right of the text)
  const userSectionStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    justifyContent: 'flex-end',
    flexShrink: 0,
    minWidth: '119px',
    direction: 'ltr', // LTR so avatar appears on the right of the text
  };

  // User name style
  const userNameStyle: React.CSSProperties = {
    fontSize: '16px',
    fontFamily: 'var(--cc-font-display)',
    fontWeight: '600', // DemiBold
    color: 'var(--gray-gray-100)',
    textAlign: 'right',
  };

  // Avatar style
  const avatarStyle: React.CSSProperties = {
    width: '40px',
    height: '40px',
    borderRadius: '20px',
    flexShrink: 0,
    objectFit: 'cover',
  };


  // Use provided avatar, or use default avatar image
  const avatarUrl = userAvatar || defaultAvatarImage;

  return (
    <div className={`cc-top-bar ${className}`} style={topBarStyle}>
      {/* Search Input - Centered */}
      <div style={searchContainerStyle}>
        <SearchInput
          placeholder="חפש לקוח, שיחה או מילת מפתח..."
          suggestions={searchSuggestions}
          onSearch={onSearch}
          onSuggestionSelect={handleSuggestionSelect}
        />
      </div>

      {/* User Section - Right Side (avatar on right of text) */}
      <div style={userSectionStyle}>
        <div style={userNameStyle}>{userName}</div>
        <img 
          src={avatarUrl} 
          alt={userName} 
          style={avatarStyle}
          onError={(e) => {
            // Fallback to random avatar if image fails to load
            (e.target as HTMLImageElement).src = `https://api.dicebear.com/7.x/avataaars/svg?seed=${userName}&size=40`;
          }}
        />
      </div>
    </div>
  );
}

