import React from 'react';
import { Button, CallCard, Sidebar, TopBar, Table } from '@design-system';
import { SearchSuggestion } from '@design-system/components/SearchInput';
import homeIcon from '@design-system/icons/home.svg';
import filesIcon from '@design-system/icons/files.svg';
import callsIcon from '@design-system/icons/calls.svg';
import callersIcon from '@design-system/icons/callers.svg';
import clientsIcon from '@design-system/icons/clients.svg';
import logoIcon from '@design-system/icons/logo.svg';

// Simple calendar icon SVG component
const CalendarIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ display: 'inline-block' }}
  >
    <rect x="3" y="4" width="10" height="9" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <line x1="3" y1="7" x2="13" y2="7" stroke="currentColor" strokeWidth="1.5" />
    <line x1="6" y1="4" x2="6" y2="2" stroke="currentColor" strokeWidth="1.5" />
    <line x1="10" y1="4" x2="10" y2="2" stroke="currentColor" strokeWidth="1.5" />
    <text
      x="8"
      y="11.5"
      textAnchor="middle"
      fontSize="8"
      fill="currentColor"
      fontFamily="monospace"
      fontWeight="bold"
    >
      1
    </text>
  </svg>
);

const ForReview: React.FC = () => {
  // Mock search suggestions - in real app, this would come from API
  const mockSearchSuggestions: SearchSuggestion[] = [
    {
      id: '1',
      type: 'שיחה',
      label: 'שיחת מכירה לחידוש פוליסת ביטוח',
      highlightedText: 'מכירה',
    },
    {
      id: '2',
      type: 'שיחה',
      label: 'שיחת מכירה ללקוח חדש',
      highlightedText: 'מכירה',
    },
    {
      id: '3',
      type: 'שיחה',
      label: 'שיחה 162378 - גפן אלון',
    },
    {
      id: '4',
      type: 'שיחה',
      label: 'שיחה 162379 - יוסי לוי',
    },
    {
      id: '5',
      type: 'נציג',
      label: 'יפעת הללי',
    },
    {
      id: '6',
      type: 'נציג',
      label: 'שרה כהן',
    },
    {
      id: '7',
      type: 'לקוח',
      label: 'גפן אלון',
    },
    {
      id: '8',
      type: 'לקוח',
      label: 'יוסי לוי',
    },
    {
      id: '9',
      type: 'לקוח',
      label: 'מיכל דוד',
    },
  ];

  const handleSearch = (query: string) => {
    console.log('Search query:', query);
  };

  const appContainerStyle: React.CSSProperties = {
    width: '100%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    background: 'var(--cc-color-page)',
    fontFamily: 'var(--cc-font-sans)',
    overflow: 'hidden',
    direction: 'rtl',
  };

  const mainContentStyle: React.CSSProperties = {
    flex: 1,
    display: 'flex',
    overflow: 'hidden',
    direction: 'rtl',
  };

  // Sidebar on the right (RTL) - moved from left
  const sidebarContainerStyle: React.CSSProperties = {
    width: '80px',
    flexShrink: 0,
    background: 'var(--gray-gray-100)',
    overflowY: 'auto',
    order: 1, // First in RTL flow (appears on right visually)
  };

  const contentAreaStyle: React.CSSProperties = {
    flex: 1,
    overflowY: 'auto',
    padding: 'var(--spacing-spacing-40)',
    boxSizing: 'border-box',
    order: 2, // Second in RTL flow (appears on left visually)
  };

  const containerStyle: React.CSSProperties = {
    width: '100%',
    background: 'var(--cc-color-page)',
    fontFamily: 'var(--cc-font-sans)',
  };

  const sectionStyle: React.CSSProperties = {
    marginBottom: 'var(--spacing-spacing-40)',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: 'var(--font-size-32)',
    fontWeight: 'bold',
    marginBottom: 'var(--spacing-spacing-24)',
    color: 'var(--cc-color-text-strong)',
  };

  const subtitleStyle: React.CSSProperties = {
    fontSize: 'var(--font-size-20)',
    fontWeight: '600',
    marginBottom: 'var(--spacing-spacing-24)',
    marginTop: 'var(--spacing-spacing-40)',
    color: 'var(--cc-color-text)',
  };

  const groupStyle: React.CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 'var(--spacing-spacing-24)',
    alignItems: 'center',
    marginBottom: 'var(--spacing-spacing-24)',
  };

  const labelStyle: React.CSSProperties = {
    fontSize: 'var(--font-size-14)',
    color: 'var(--cc-color-text-muted)',
    marginBottom: 'var(--spacing-spacing-8)',
    display: 'block',
  };

  return (
    <div style={appContainerStyle}>
      {/* Top Bar - Sticky */}
      <TopBar
        userName="טל אטיאס"
        onSearch={handleSearch}
        searchSuggestions={mockSearchSuggestions}
      />

      {/* Main Content Area with Sidebar */}
      <div style={mainContentStyle}>
        {/* Sidebar */}
        <div style={sidebarContainerStyle}>
          <Sidebar
            logo={
              <img src={logoIcon} alt="Callcheck Logo" style={{ width: '31px', height: '23px', display: 'block' }} />
            }
            items={[
              {
                id: 'control',
                label: 'בקרה',
                iconPath: homeIcon,
                isActive: true,
                onClick: () => console.log('בקרה clicked'),
              },
              {
                id: 'departments',
                label: 'מחלקות',
                iconPath: filesIcon,
                onClick: () => console.log('מחלקות clicked'),
              },
              {
                id: 'calls',
                label: 'שיחות',
                iconPath: callsIcon,
                onClick: () => console.log('שיחות clicked'),
              },
              {
                id: 'agents',
                label: 'נציגים',
                iconPath: callersIcon,
                onClick: () => console.log('נציגים clicked'),
              },
              {
                id: 'clients',
                label: 'לקוחות',
                iconPath: clientsIcon,
                onClick: () => console.log('לקוחות clicked'),
              },
            ]}
          />
        </div>

        {/* Content Area */}
        <div style={contentAreaStyle}>
          <div style={containerStyle}>
            <h1 style={titleStyle}>For Review - Components Showcase</h1>
      <p style={{ fontSize: 'var(--font-size-16)', color: 'var(--cc-color-text-muted)', marginBottom: 'var(--spacing-spacing-40)' }}>
        כל מצבי הכפתורים בספריית הקומפוננטות
      </p>

            {/* Outline Variant */}
            <section style={sectionStyle}>
              <h2 style={subtitleStyle}>Outline Variant (אפור בהיר)</h2>

              <div style={{ marginBottom: 'var(--spacing-spacing-24)' }}>
                <span style={labelStyle}>Small Size (36px)</span>
                <div style={groupStyle}>
                  <Button variant="outline" size="sm">טקסט בלבד</Button>
                  <Button variant="outline" size="sm" iconLeft={<CalendarIcon />}>אייקון משמאל</Button>
                  <Button variant="outline" size="sm" iconRight={<CalendarIcon />}>אייקון מימין</Button>
                  <Button variant="outline" size="sm" icon={<CalendarIcon />} iconPosition="both">שיתוף</Button>
                </div>
              </div>

              <div style={{ marginBottom: 'var(--spacing-spacing-24)' }}>
                <span style={labelStyle}>Large Size (48px)</span>
                <div style={groupStyle}>
                  <Button variant="outline" size="lg">טקסט בלבד</Button>
                  <Button variant="outline" size="lg" iconLeft={<CalendarIcon />}>אייקון משמאל</Button>
                  <Button variant="outline" size="lg" iconRight={<CalendarIcon />}>אייקון מימין</Button>
                  <Button variant="outline" size="lg" icon={<CalendarIcon />} iconPosition="both">שיתוף</Button>
                </div>
              </div>

        <div style={{ marginBottom: 'var(--spacing-spacing-24)' }}>
          <span style={labelStyle}>Disabled</span>
          <div style={groupStyle}>
            <Button variant="outline" disabled>מבוטל</Button>
            <Button variant="outline" disabled icon={<CalendarIcon />} iconPosition="both">שיתוף</Button>
          </div>
        </div>
      </section>

            {/* Filled Variant */}
            <section style={sectionStyle}>
              <h2 style={subtitleStyle}>Filled Variant (כחול)</h2>

              <div style={{ marginBottom: 'var(--spacing-spacing-24)' }}>
                <span style={labelStyle}>Small Size (36px)</span>
                <div style={groupStyle}>
                  <Button variant="filled" size="sm">טקסט בלבד</Button>
                  <Button variant="filled" size="sm" iconLeft={<CalendarIcon />}>אייקון משמאל</Button>
                  <Button variant="filled" size="sm" iconRight={<CalendarIcon />}>אייקון מימין</Button>
                  <Button variant="filled" size="sm" icon={<CalendarIcon />} iconPosition="both">שיתוף</Button>
                </div>
              </div>

              <div style={{ marginBottom: 'var(--spacing-spacing-24)' }}>
                <span style={labelStyle}>Large Size (48px)</span>
                <div style={groupStyle}>
                  <Button variant="filled" size="lg">טקסט בלבד</Button>
                  <Button variant="filled" size="lg" iconLeft={<CalendarIcon />}>אייקון משמאל</Button>
                  <Button variant="filled" size="lg" iconRight={<CalendarIcon />}>אייקון מימין</Button>
                  <Button variant="filled" size="lg" icon={<CalendarIcon />} iconPosition="both">שיתוף</Button>
                </div>
              </div>

        <div style={{ marginBottom: 'var(--spacing-spacing-24)' }}>
          <span style={labelStyle}>Disabled</span>
          <div style={groupStyle}>
            <Button variant="filled" disabled>מבוטל</Button>
            <Button variant="filled" disabled icon={<CalendarIcon />} iconPosition="both">שיתוף</Button>
          </div>
        </div>
      </section>

            {/* Dark Variant */}
            <section style={sectionStyle}>
              <h2 style={subtitleStyle}>Dark Variant (כהה)</h2>

              <div style={{ marginBottom: 'var(--spacing-spacing-24)' }}>
                <span style={labelStyle}>Small Size (36px)</span>
                <div style={groupStyle}>
                  <Button variant="dark" size="sm">טקסט בלבד</Button>
                  <Button variant="dark" size="sm" iconLeft={<CalendarIcon />}>אייקון משמאל</Button>
                  <Button variant="dark" size="sm" iconRight={<CalendarIcon />}>אייקון מימין</Button>
                  <Button variant="dark" size="sm" icon={<CalendarIcon />} iconPosition="both">שיתוף</Button>
                </div>
              </div>

              <div style={{ marginBottom: 'var(--spacing-spacing-24)' }}>
                <span style={labelStyle}>Large Size (48px)</span>
                <div style={groupStyle}>
                  <Button variant="dark" size="lg">טקסט בלבד</Button>
                  <Button variant="dark" size="lg" iconLeft={<CalendarIcon />}>אייקון משמאל</Button>
                  <Button variant="dark" size="lg" iconRight={<CalendarIcon />}>אייקון מימין</Button>
                  <Button variant="dark" size="lg" icon={<CalendarIcon />} iconPosition="both">שיתוף</Button>
                </div>
              </div>

        <div style={{ marginBottom: 'var(--spacing-spacing-24)' }}>
          <span style={labelStyle}>Disabled</span>
          <div style={groupStyle}>
            <Button variant="dark" disabled>מבוטל</Button>
            <Button variant="dark" disabled icon={<CalendarIcon />} iconPosition="both">שיתוף</Button>
          </div>
        </div>
      </section>

      {/* Full Width */}
      <section style={sectionStyle}>
        <h2 style={subtitleStyle}>Full Width Buttons</h2>
        <div style={{ maxWidth: '600px', marginBottom: 'var(--spacing-spacing-24)' }}>
          <Button variant="outline" fullWidth icon={<CalendarIcon />} iconPosition="both" style={{ marginBottom: 'var(--spacing-spacing-8)' }}>
            שיתוף - רוחב מלא
          </Button>
          <Button variant="filled" fullWidth icon={<CalendarIcon />} iconPosition="both" style={{ marginBottom: 'var(--spacing-spacing-8)' }}>
            שיתוף - רוחב מלא
          </Button>
          <Button variant="dark" fullWidth icon={<CalendarIcon />} iconPosition="both">
            שיתוף - רוחב מלא
          </Button>
        </div>
      </section>

      {/* Interactive States */}
      <section style={sectionStyle}>
        <h2 style={subtitleStyle}>Interactive States</h2>
        <p style={{ fontSize: 'var(--font-size-14)', color: 'var(--cc-color-text-muted)', marginBottom: 'var(--spacing-spacing-24)' }}>
          נסי לעבור עם העכבר ולבדוק את אפקטי ה-hover ו-active
        </p>
        <div style={groupStyle}>
          <Button variant="outline">Hover me</Button>
          <Button variant="filled">Hover me</Button>
          <Button variant="dark">Hover me</Button>
        </div>
      </section>

      {/* Top Bar Info */}
      <section style={sectionStyle}>
        <h2 style={subtitleStyle}>Top Bar - סרגל עליון</h2>
        <p style={{ fontSize: 'var(--font-size-14)', color: 'var(--cc-color-text-muted)', marginBottom: 'var(--spacing-spacing-24)' }}>
          סרגל עליון עם חיפוש ואווטאר משתמש - מופיע למעלה בדף
        </p>
      </section>

      {/* Sidebar Info */}
      <section style={sectionStyle}>
        <h2 style={subtitleStyle}>Sidebar - סיידבר</h2>
        <p style={{ fontSize: 'var(--font-size-14)', color: 'var(--cc-color-text-muted)', marginBottom: 'var(--spacing-spacing-24)' }}>
          סיידבר ניווט עם אייקונים ותוויות - מופיע משמאל בדף
        </p>
      </section>

      {/* Call Cards */}
      <section style={sectionStyle}>
        <h2 style={subtitleStyle}>Call Cards - כרטיסיות שיחה</h2>
        <p style={{ fontSize: 'var(--font-size-14)', color: 'var(--cc-color-text-muted)', marginBottom: 'var(--spacing-spacing-24)' }}>
          כרטיסיות להצגת נתוני שיחות
        </p>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(580px, 1fr))',
          gap: 'var(--spacing-spacing-24)',
          marginBottom: 'var(--spacing-spacing-24)'
        }}>
          <CallCard
            callId="162378"
            callType="מכירה - חידוש"
            department="חידושים"
            callDuration="01:09:12"
            timeRange="10:10-11:19"
            date="12 יוני 2025"
            clientName="גפן אלון"
            agentName="יפעת הללי"
          />
          <CallCard
            callId="162379"
            callType="תמיכה"
            department="שירות לקוחות"
            callDuration="00:15:30"
            timeRange="14:20-14:35"
            date="12 יוני 2025"
            clientName="יוסי לוי"
            agentName="שרה כהן"
            onClick={() => alert('Clicked on call card')}
          />
          <CallCard
            callId="162380"
            callType="מכירה"
            department="מכירות"
            callDuration="00:42:18"
            timeRange="16:10-16:52"
            date="12 יוני 2025"
            clientName="מיכל דוד"
            agentName="דני אברהם"
          />
        </div>
      </section>

      {/* Table Component */}
      <section style={sectionStyle}>
        <h2 style={subtitleStyle}>Table - טבלה</h2>
        <p style={{ fontSize: 'var(--font-size-14)', color: 'var(--cc-color-text-muted)', marginBottom: 'var(--spacing-spacing-24)' }}>
          טבלה גמישה עם תאים שניתנים להתאמה
        </p>
        
        <Table
          title="אירועים לטיפול"
          titleCount={2}
          headerButton={{
            label: 'כל האירועים',
            onClick: () => console.log('כל האירועים clicked'),
          }}
          columns={[
            // RTL order: שיחה (call) first (will appear on right), then תאריך (date), אירועים (events), ציטוט (quote) last (will appear on left)
            {
              key: 'call',
              header: 'שיחה',
              width: 385,
              render: (data: any) => {
                const callObj = typeof data === 'object' ? data : { title: '', agent: '' };
                return (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', alignItems: 'flex-end', direction: 'rtl' }}>
                    <span style={{ fontSize: 'var(--font-size-16)', fontFamily: 'var(--cc-font-display)', fontWeight: '500', color: 'var(--gray-gray-100)' }}>
                      {callObj.title}
                    </span>
                    <span style={{ fontSize: 'var(--font-size-16)', fontFamily: 'var(--cc-font-display)', color: 'var(--gray-gray-300)' }}>
                      {callObj.agent}
                    </span>
                  </div>
                );
              },
            },
            {
              key: 'date',
              header: 'תאריך',
              width: 138,
              render: (data: any) => {
                const dateObj = typeof data === 'object' ? data : { date: '', time: '' };
                return (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', alignItems: 'flex-end', direction: 'rtl' }}>
                    <span style={{ fontSize: 'var(--font-size-16)', fontFamily: 'var(--cc-font-display)', color: 'var(--gray-gray-100)' }}>
                      {dateObj.date}
                    </span>
                    <span style={{ fontSize: 'var(--font-size-16)', fontFamily: 'var(--cc-font-display)', color: 'var(--gray-gray-300)' }}>
                      {dateObj.time}
                    </span>
                  </div>
                );
              },
            },
            {
              key: 'events',
              header: 'אירועים',
              width: 77,
              render: (count: number) => <Table.EventCountBadge count={count} />,
            },
            {
              key: 'quote',
              header: 'ציטוט',
              width: 600,
              render: (data: any) => {
                const quoteData = typeof data === 'object' && data !== null ? data : {};
                const quotes = quoteData.quotes || (Array.isArray(data) ? data : []);
                const additionalCount = quoteData.additionalCount || 0;
                
                return (
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center', justifyContent: 'flex-end', direction: 'rtl', width: '100%', maxWidth: '100%', overflow: 'hidden', flexWrap: 'wrap' }}>
                    {additionalCount > 0 && (
                      <span style={{ fontSize: 'var(--font-size-14)', fontFamily: 'var(--cc-font-display)', color: 'var(--gray-gray-100)', flexShrink: 0, whiteSpace: 'nowrap' }}>
                        {additionalCount}+ נוספים
                      </span>
                    )}
                    {quotes.map((quote: string, index: number) => (
                      <Table.QuoteChip key={index} text={quote} />
                    ))}
                  </div>
                );
              },
            },
          ]}
          rows={[
            {
              quote: {
                quotes: ['לא מדובר בהחלטה חד צדדית', 'אנחנו פונים אליך כדי לחדש תרצה שנציג יחזור אליך?'],
                additionalCount: 10,
              },
              events: 12,
              date: {
                date: '12 מאי, 2025',
                time: '11:12 AM',
              },
              call: {
                title: 'שיחת מכירה עם לקוח על חידוש פוליסה קיימת',
                agent: 'יפעת הללי',
              },
            },
            {
              quote: {
                quotes: ['לא מדובר בהחלטה חד צדדית', 'אנחנו פונים אליך כדי לחדש תרצה שנציג יחזור אליך?'],
                additionalCount: 4,
              },
              events: 6,
              date: {
                date: '12 מאי, 2025',
                time: '11:12 AM',
              },
              call: {
                title: 'שיחת סגירה על פוליסת בריאות',
                agent: 'שירה בלומברג',
              },
            },
          ]}
          onRowClick={(row: any, index: number) => {
            console.log('Row clicked:', row, index);
          }}
        />
      </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForReview;

