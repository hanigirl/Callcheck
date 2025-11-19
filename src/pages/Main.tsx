import React from 'react';
import { Button, Sidebar, TopBar, Table } from '@design-system';
import { SearchSuggestion } from '@design-system/components/SearchInput';
import homeIcon from '@design-system/icons/home.svg';
import filesIcon from '@design-system/icons/files.svg';
import callsIcon from '@design-system/icons/calls.svg';
import callersIcon from '@design-system/icons/callers.svg';
import clientsIcon from '@design-system/icons/clients.svg';
import logoIcon from '@design-system/icons/logo.svg';

const Main: React.FC = () => {
  const mockSearchSuggestions: SearchSuggestion[] = [
    {
      id: '1',
      type: 'שיחה',
      label: 'שיחת מכירה ללקוח חדש',
    },
    {
      id: '2',
      type: 'נציג',
      label: 'יפעת הללי',
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
    background: 'var(--neutral-50)',
    fontFamily: 'var(--cc-font-primary)',
    overflow: 'hidden',
    direction: 'rtl',
  };

  const mainContentStyle: React.CSSProperties = {
    flex: 1,
    display: 'flex',
    overflow: 'hidden',
    direction: 'rtl',
  };

  const sidebarContainerStyle: React.CSSProperties = {
    width: '80px',
    flexShrink: 0,
    background: 'var(--blue-blue-150, #1f1d4e)',
    overflowY: 'auto',
    order: 1,
  };

  const contentAreaStyle: React.CSSProperties = {
    flex: 1,
    overflowY: 'auto',
    padding: '71px 71px 0',
    boxSizing: 'border-box',
    order: 2,
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--spacing-spacing-large)',
  };

  // Main content width - default width for all page layouts
  // Card Grade (596.5px) + Card Trend (580.5px) + gap (40px) = 1217px
  const mainContentWidth = '1217px';

  const headerSectionStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--spacing-spacing-large)',
    alignItems: 'flex-start', // In RTL, flex-start is on the right
    width: mainContentWidth,
    maxWidth: '100%',
    direction: 'rtl',
    textAlign: 'right',
  };

  const headerTextContainerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--spacing-spacing-medium)',
    alignItems: 'flex-start', // In RTL, flex-start is on the right
    width: 'auto',
    minWidth: '367px',
    direction: 'rtl',
    textAlign: 'right',
  };

  const headerTitleStyle: React.CSSProperties = {
    fontFamily: 'var(--cc-font-primary)',
    fontSize: 'var(--cc-typography-h1-size)',
    lineHeight: 'var(--cc-typography-h1-line-height)',
    fontWeight: 600,
    color: 'var(--neutral-black)',
    textAlign: 'right',
    direction: 'rtl',
    maxWidth: '100%',
  };

  const headerSubtitleStyle: React.CSSProperties = {
    fontFamily: 'var(--cc-font-primary)',
    fontSize: '18px',
    lineHeight: 'normal',
    color: 'var(--neutral-neutral-text-default)',
    textAlign: 'right',
    direction: 'rtl',
    whiteSpace: 'nowrap',
  };

  const filtersContainerStyle: React.CSSProperties = {
    display: 'flex',
    gap: 'var(--spacing-spacing-large)',
    alignItems: 'flex-start',
    justifyContent: 'flex-start', // In RTL, flex-start aligns to the right
    direction: 'rtl',
  };

  const filterGroupStyle: React.CSSProperties = {
    display: 'flex',
    gap: '8px',
    alignItems: 'center',
    direction: 'rtl',
  };

  const filterLabelStyle: React.CSSProperties = {
    fontFamily: 'var(--cc-font-primary)',
    fontSize: 'var(--cc-typography-body-size)',
    color: 'var(--neutral-neutral-text-default)',
    textAlign: 'right',
    direction: 'rtl',
  };

  const cardsRowStyle: React.CSSProperties = {
    display: 'flex',
    gap: 'var(--spacing-spacing-large)',
    alignItems: 'center',
    width: mainContentWidth,
    maxWidth: '100%',
  };

  const cardStyle: React.CSSProperties = {
    background: 'var(--neutral-white)',
    border: '1px solid var(--neutral-neutral-95)',
    borderRadius: 'var(--radius-radius-16)',
    padding: 'var(--spacing-spacing-medium)',
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--spacing-spacing-small)',
    direction: 'rtl',
    textAlign: 'right',
    alignItems: 'flex-start', // In RTL, flex-start is on the right
  };

  const cardGradeStyle: React.CSSProperties = {
    ...cardStyle,
    width: '596.5px',
    height: '291px',
    justifyContent: 'space-between',
  };

  const cardTrendStyle: React.CSSProperties = {
    ...cardStyle,
    width: '580.5px',
    height: '291px',
    justifyContent: 'space-between',
  };

  return (
    <div style={appContainerStyle}>
      {/* Top Bar */}
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
              <img
                src={logoIcon}
                alt="Callcheck Logo"
                style={{ width: '31px', height: '23px', display: 'block' }}
              />
            }
            items={[
              {
                id: 'home',
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
          {/* Header Section */}
          <div style={headerSectionStyle}>
            <div style={headerTextContainerStyle}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '100%', direction: 'rtl', textAlign: 'right' }}>
                <h1 style={headerTitleStyle}>היי טל,</h1>
                <p style={headerSubtitleStyle}>
                  נראה שהמוקד בשליטה והנציגים שומרים על רמה גבוהה
                </p>
              </div>
              <div style={filtersContainerStyle}>
                <div style={filterGroupStyle}>
                  <Button variant="outline" size="sm">
                    השבוע
                  </Button>
                  <span style={filterLabelStyle}>תקופה</span>
                </div>
                <div style={filterGroupStyle}>
                  <Button variant="outline" size="sm">
                    כל המחלקות
                  </Button>
                  <span style={filterLabelStyle}>מחלקות</span>
                </div>
              </div>
            </div>
          </div>

          {/* Cards Row */}
          <div style={cardsRowStyle}>
            {/* Card Grade - ציון שבועי ממוצע */}
            <div style={cardGradeStyle}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-spacing-large)', alignItems: 'flex-start', direction: 'rtl', textAlign: 'right' }}>
                <h2 style={{ 
                  fontFamily: 'var(--cc-font-primary)',
                  fontSize: 'var(--cc-typography-h2-size)',
                  lineHeight: 'var(--cc-typography-h2-line-height)',
                  fontWeight: 600,
                  color: 'var(--neutral-black)',
                  textAlign: 'right',
                  direction: 'rtl',
                }}>
                  ציון שבועי ממוצע למוקד
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-spacing-small)', alignItems: 'flex-start', direction: 'rtl', textAlign: 'right' }}>
                  <p style={{
                    fontFamily: 'var(--cc-font-primary)',
                    fontSize: 'var(--cc-typography-body-size)',
                    fontWeight: 400,
                    color: 'var(--neutral-black)',
                    textAlign: 'right',
                    direction: 'rtl',
                  }}>
                    לפי קטגוריה
                  </p>
                  {/* Category stats would go here */}
                </div>
              </div>
              {/* Grade visualization would go here */}
            </div>

            {/* Card Trend - מגמה שבועית */}
            <div style={cardTrendStyle}>
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', width: '100%', direction: 'rtl' }}>
                <div style={{ display: 'flex', gap: 'var(--spacing-spacing-medium)', alignItems: 'flex-start', direction: 'rtl' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-spacing-xs)', alignItems: 'flex-start', width: '77px', direction: 'rtl', textAlign: 'right' }}>
                    <p style={{
                      fontFamily: 'var(--cc-font-primary)',
                      fontSize: 'var(--cc-typography-body-sm-size)',
                      color: 'var(--neutral-neutral-text-default)',
                      textAlign: 'right',
                      direction: 'rtl',
                    }}>
                      משבוע שעבר
                    </p>
                    <div style={{
                      background: 'var(--danger-danger-surface)',
                      borderRadius: 'var(--radius-radius-16)',
                      padding: 'var(--spacing-spacing-xs) var(--spacing-spacing-small)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 'var(--spacing-spacing-xs)',
                      direction: 'rtl',
                    }}>
                      <span style={{
                        fontFamily: 'var(--cc-font-primary)',
                        fontSize: 'var(--cc-typography-body-sm-size)',
                        fontWeight: 500,
                        color: 'var(--danger-danger-400)',
                      }}>5%</span>
                    </div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-spacing-xs)', alignItems: 'flex-start', width: '77px', direction: 'rtl', textAlign: 'right' }}>
                    <p style={{
                      fontFamily: 'var(--cc-font-primary)',
                      fontSize: 'var(--cc-typography-body-sm-size)',
                      color: 'var(--neutral-neutral-text-default)',
                      textAlign: 'right',
                      direction: 'rtl',
                    }}>
                      ממוצע שבועי
                    </p>
                    <p style={{
                      fontFamily: 'var(--cc-font-primary)',
                      fontSize: 'var(--cc-typography-h3-size)',
                      fontWeight: 600,
                      color: 'var(--neutral-black)',
                      textAlign: 'right',
                      direction: 'rtl',
                    }}>
                      92<span style={{ fontSize: 'var(--cc-typography-body-size)' }}>%</span>
                    </p>
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', direction: 'rtl', textAlign: 'right' }}>
                  <h2 style={{
                    fontFamily: 'var(--cc-font-primary)',
                    fontSize: 'var(--cc-typography-h2-size)',
                    lineHeight: 'var(--cc-typography-h2-line-height)',
                    fontWeight: 600,
                    color: 'var(--neutral-black)',
                    textAlign: 'right',
                    direction: 'rtl',
                  }}>
                    מגמה שבועית
                  </h2>
                </div>
              </div>
              {/* Graph visualization would go here */}
              <div style={{ height: '149px', width: '100%' }}>
                {/* Graph placeholder */}
              </div>
            </div>
          </div>

          {/* Table - אירועים לטיפול */}
          <div style={{ width: mainContentWidth, maxWidth: '100%' }}>
            <Table
              title="אירועים לטיפול"
              titleCount={2}
              headerButton={{
                label: 'כל האירועים',
                onClick: () => console.log('כל האירועים clicked'),
              }}
              columns={[
                // Column order: Title, Date, Event Count, Quotes (RTL order)
                // All cells are RTL and all content is aligned to the right
                {
                  key: 'title',
                  header: 'שיחה',
                  width: 385,
                  render: (data: any) => {
                    const titleObj = typeof data === 'object' ? data : { title: '', subtitle: '' };
                    return (
                      <div style={{ 
                        display: 'flex', 
                        flexDirection: 'column', 
                        gap: 'var(--spacing-spacing-xs)', 
                        alignItems: 'flex-end', 
                        direction: 'rtl', 
                        width: '100%',
                        textAlign: 'right',
                      }}>
                        <span style={{ 
                          fontSize: 'var(--typography-body-accented-size)',
                          fontWeight: 'var(--typography-body-accented-weight)',
                          lineHeight: 'var(--typography-body-accented-line-height)',
                          fontFamily: 'var(--cc-font-primary)',
                          color: 'var(--neutral-black)',
                          textAlign: 'right',
                          width: '100%',
                        }}>
                          {titleObj.title}
                        </span>
                        <span style={{ 
                          fontSize: 'var(--typography-body-xs-size)',
                          fontWeight: 'var(--typography-body-xs-weight)',
                          fontFamily: 'var(--cc-font-primary)',
                          color: 'var(--neutral-neutral-text-default)',
                          textAlign: 'right',
                          width: '100%',
                        }}>
                          {titleObj.subtitle}
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
                    // Separate date and hour on different lines
                    const dateObj = typeof data === 'object' ? data : { date: '', hour: '' };
                    return (
                      <div style={{ 
                        display: 'flex', 
                        flexDirection: 'column', 
                        gap: 'var(--spacing-spacing-xs)', 
                        alignItems: 'flex-end', 
                        direction: 'rtl', 
                        width: '100%',
                        textAlign: 'right',
                      }}>
                        <span style={{ 
                          fontSize: 'var(--typography-body-size)',
                          fontWeight: 'var(--typography-body-accented-weight)',
                          fontFamily: 'var(--cc-font-primary)',
                          color: 'var(--neutral-black)',
                          textAlign: 'right',
                          width: '100%',
                        }}>
                          {dateObj.date}
                        </span>
                        <span style={{ 
                          fontSize: 'var(--typography-body-size)',
                          fontWeight: 'var(--typography-body-accented-weight)',
                          fontFamily: 'var(--cc-font-primary)',
                          color: 'var(--neutral-black)',
                          textAlign: 'right',
                          width: '100%',
                        }}>
                          {dateObj.hour}
                        </span>
                      </div>
                    );
                  },
                },
                {
                  key: 'events',
                  header: 'אירועים',
                  width: 77,
                  render: (count: number) => (
                    <div style={{ 
                      display: 'flex', 
                      justifyContent: 'flex-end', 
                      alignItems: 'center',
                      direction: 'rtl', 
                      width: '100%',
                      textAlign: 'right',
                    }}>
                      <Table.EventCountBadge count={count} />
                    </div>
                  ),
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
                      <div style={{ 
                        display: 'flex', 
                        gap: 'var(--spacing-spacing-small)', 
                        alignItems: 'center', 
                        justifyContent: 'flex-start', 
                        direction: 'rtl', 
                        width: '100%', 
                        flexWrap: 'nowrap',
                        textAlign: 'right',
                        marginLeft: 'auto',
                      }}>
                        {additionalCount > 0 && (
                          <span style={{ 
                            fontSize: 'var(--typography-body-sm-size)',
                            fontFamily: 'var(--cc-font-primary)',
                            color: 'var(--neutral-black)',
                            whiteSpace: 'nowrap',
                            flexShrink: 0,
                            textAlign: 'right',
                          }}>
                            {additionalCount}+ נוספים
                          </span>
                        )}
                        {/* Show only first quote when space is limited (responsive) */}
                        {quotes.length > 0 && (
                          <div style={{ 
                            flexShrink: 0,
                          }}>
                            <Table.QuoteChip text={quotes[0]} />
                          </div>
                        )}
                      </div>
                    );
                  },
                },
              ]}
              rows={[
                {
                  title: {
                    title: 'שיחת מכירה עם לקוח על חידוש פוליסה קיימת',
                    subtitle: 'יפעת הללי',
                  },
                  date: {
                    date: '12 במאי 2025',
                    hour: '11:12 AM',
                  },
                  events: 12,
                  quote: {
                    quotes: ['לא מדובר בהחלטה חד צדדית', 'אנחנו פונים אליך כדי לחדש תרצה שנציג יחזור אליך?'],
                    additionalCount: 10,
                  },
                },
                {
                  title: {
                    title: 'שיחת סגירה על פוליסת בריאות',
                    subtitle: 'שירה בלומברג',
                  },
                  date: {
                    date: '12 במאי 2025',
                    hour: '11:12 AM',
                  },
                  events: 6,
                  quote: {
                    quotes: ['לא מדובר בהחלטה חד צדדית', 'אנחנו פונים אליך כדי לחדש תרצה שנציג יחזור אליך?'],
                    additionalCount: 4,
                  },
                },
              ]}
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Main;
