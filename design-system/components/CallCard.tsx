import React from 'react';
import { ArrowsRightIcon } from '../icons/ArrowsRight';

type CallCardProps = {
  callId: string;
  callType: string; // e.g., "מכירה - חידוש"
  department: string; // e.g., "חידושים"
  callDuration: string; // e.g., "01:09:12"
  timeRange: string; // e.g., "10:10-11:19"
  date: string; // e.g., "12 יוני 2025"
  clientName: string;
  clientAvatar?: string; // URL or initials
  agentName: string;
  agentAvatar?: string; // URL or initials
  className?: string;
  onClick?: () => void;
};

export function CallCard({
  callId,
  callType,
  department,
  callDuration,
  timeRange,
  date,
  clientName,
  clientAvatar,
  agentName,
  agentAvatar,
  className = '',
  onClick,
}: CallCardProps) {
  const [isHovered, setIsHovered] = React.useState(false);

  // Card container styles - RTL aligned right
  const cardStyle: React.CSSProperties = {
    background: 'var(--gray-white)',
    borderRadius: 'var(--radius-radius-16)',
    padding: 'var(--spacing-spacing-24)',
    cursor: onClick ? 'pointer' : 'default',
    transition: 'all 0.2s ease',
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--spacing-spacing-40)',
    width: '100%',
    boxSizing: 'border-box',
    direction: 'rtl', // RTL for right alignment
  };

  // Title section (Call ID) - H2 DemiBold - aligned right
  const titleStyle: React.CSSProperties = {
    fontSize: 'var(--font-size-24)',
    fontFamily: 'var(--cc-font-display)',
    fontWeight: '600', // DemiBold
    lineHeight: '1',
    color: 'var(--gray-gray-100)',
    textAlign: 'right',
    margin: 0,
    padding: 0,
    direction: 'rtl',
  };

  // Info row container - aligned right with RTL
  const infoRowStyle: React.CSSProperties = {
    display: 'flex',
    gap: 'var(--spacing-spacing-24)',
    alignItems: 'flex-start',
    width: '100%',
  };

  // Individual info column - right aligned
  const infoColumnStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--spacing-spacing-8)',
    minWidth: '72px',
    textAlign: 'right',
    direction: 'rtl',
  };

  // Info label style - H4 DemiBold
  const infoLabelStyle: React.CSSProperties = {
    fontSize: 'var(--font-size-16)',
    fontFamily: 'var(--cc-font-display)',
    fontWeight: '600', // DemiBold
    lineHeight: '1',
    color: 'var(--gray-gray-100)',
    textAlign: 'right',
    direction: 'rtl',
  };

  // Info value style
  const infoValueStyle: React.CSSProperties = {
    fontSize: 'var(--font-size-14)',
    fontFamily: 'var(--cc-font-display)',
    fontWeight: 'normal',
    lineHeight: '1',
    color: 'var(--gray-gray-100)',
    textAlign: 'right',
    height: '32px',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    direction: 'rtl',
  };

  // Participants section - aligned right
  const participantsSectionStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px', // 16px בין הכותרת לשמות הנציגים
    width: '100%',
  };

  const participantsTitleStyle: React.CSSProperties = {
    fontSize: 'var(--font-size-16)',
    fontFamily: 'var(--cc-font-display)',
    fontWeight: '600', // DemiBold (H4)
    lineHeight: '1',
    color: 'var(--gray-gray-100)',
    textAlign: 'right',
    width: '100%',
    direction: 'rtl',
  };

  const participantsRowStyle: React.CSSProperties = {
    display: 'flex',
    gap: '16px', // 16px הוריזונטלי בין שם הלקוח לשם הנציג
    alignItems: 'center',
  };

  const participantContainerStyle: React.CSSProperties = {
    display: 'flex',
    gap: 'var(--spacing-spacing-8)',
    alignItems: 'center',
  };

  const participantInfoStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '0',
    direction: 'rtl',
  };

  const participantLabelStyle: React.CSSProperties = {
    fontSize: 'var(--font-size-12)',
    fontFamily: 'var(--cc-font-display)',
    fontWeight: 'normal',
    lineHeight: '1',
    color: 'var(--gray-gray-300)',
    textAlign: 'right',
    direction: 'rtl',
  };

  const participantNameStyle: React.CSSProperties = {
    fontSize: 'var(--font-size-16)',
    fontFamily: 'var(--cc-font-display)',
    fontWeight: '500', // Medium
    lineHeight: '1',
    color: 'var(--gray-gray-100)',
    textAlign: 'right',
    direction: 'rtl',
  };

  // Avatar styles
  const avatarStyle: React.CSSProperties = {
    width: '40px',
    height: '40px',
    borderRadius: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'var(--gray-gray-950)',
    fontSize: 'var(--font-size-20)',
    fontFamily: 'var(--cc-font-display)',
    fontWeight: '600',
    color: 'var(--gray-gray-100)',
    flexShrink: 0,
  };

  const arrowIconStyle: React.CSSProperties = {
    width: '24px',
    height: '24px',
    flexShrink: 0,
  };

  // Get avatar content - use initials (no default image for cards)
  const AvatarContent = ({ name, avatar }: { name: string; avatar?: string }) => {
    const [imageError, setImageError] = React.useState(false);
    const firstLetter = name.charAt(0);

    // If avatar provided, try to use it; otherwise use initial
    if (!avatar || imageError) {
      return <span>{firstLetter}</span>;
    }

    return (
      <img 
        src={avatar} 
        alt={name} 
        style={{ 
          width: '100%', 
          height: '100%', 
          borderRadius: '20px', 
          objectFit: 'cover',
          display: 'block'
        }}
        onError={() => {
          setImageError(true);
        }}
      />
    );
  };

  return (
    <div
      className={`cc-call-card ${className}`}
      style={cardStyle}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Call ID Title */}
      <div style={{ width: '100%' }}>
        <h2 style={titleStyle}>שיחה {callId}</h2>
      </div>

      {/* Info Row */}
      <div style={infoRowStyle}>
        <div style={infoColumnStyle}>
          <div style={infoLabelStyle}>סוג</div>
          <div style={infoValueStyle}>{callType}</div>
        </div>
        <div style={infoColumnStyle}>
          <div style={infoLabelStyle}>מחלקה</div>
          <div style={infoValueStyle}>{department}</div>
        </div>
        <div style={infoColumnStyle}>
          <div style={infoLabelStyle}>זמן שיחה</div>
          <div style={infoValueStyle}>{callDuration}</div>
        </div>
        <div style={infoColumnStyle}>
          <div style={infoLabelStyle}>שעה</div>
          <div style={infoValueStyle}>{timeRange}</div>
        </div>
        <div style={infoColumnStyle}>
          <div style={infoLabelStyle}>תאריך</div>
          <div style={infoValueStyle}>{date}</div>
        </div>
      </div>

      {/* Participants Section */}
      <div style={participantsSectionStyle}>
        <div style={participantsTitleStyle}>משתתפים</div>
        <div style={participantsRowStyle}>
          {/* Client - avatar on right of text */}
          <div style={participantContainerStyle}>
            <div style={avatarStyle}>
              <AvatarContent name={clientName} avatar={clientAvatar} />
            </div>
            <div style={participantInfoStyle}>
              <div style={participantLabelStyle}>לקוח/ה</div>
              <div style={participantNameStyle}>{clientName}</div>
            </div>
          </div>

          {/* Arrows Icon */}
          <div style={arrowIconStyle}>
            <ArrowsRightIcon width={24} height={24} color="var(--gray-gray-100)" />
          </div>

          {/* Agent - avatar on right of text */}
          <div style={participantContainerStyle}>
            <div style={avatarStyle}>
              <AvatarContent name={agentName} avatar={agentAvatar} />
            </div>
            <div style={participantInfoStyle}>
              <div style={participantLabelStyle}>נציג/ה</div>
              <div style={participantNameStyle}>{agentName}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
