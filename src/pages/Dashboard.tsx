import React from 'react';
import { Sidebar, TopBar, Table, Quote, Dropdown, Badge } from '@design-system';
import { SearchSuggestion } from '@design-system/components/SearchInput';
import homeIcon from '@design-system/icons/home.svg';
import filesIcon from '@design-system/icons/files.svg';
import callsIcon from '@design-system/icons/calls.svg';
import callersIcon from '@design-system/icons/callers.svg';
import clientsIcon from '@design-system/icons/clients.svg';
import logoIcon from '@design-system/icons/logo.svg';
import arrowDownIcon from '@design-system/icons/arrow-down.svg';

type DashboardProps = {
  onNavigate: (page: 'dashboard' | 'calls' | 'transcription') => void;
};

const Dashboard: React.FC<DashboardProps> = ({ onNavigate }) => {
  const [timePeriod, setTimePeriod] = React.useState('week');
  const [department, setDepartment] = React.useState('all');
  const [circleProgress, setCircleProgress] = React.useState(0);
  const [hoveredDay, setHoveredDay] = React.useState<number | null>(null);
  const [graphProgress, setGraphProgress] = React.useState(0);

  // פונקציה שמחזירה נתונים על פי תקופה ומחלקה
  const getDataByPeriodAndDepartment = () => {
    // נתונים לפי תקופה
    const weeklyData = {
      all: [
        { day: 'יום א\'', score: 63 },
        { day: 'יום ב\'', score: 45 },
        { day: 'יום ג\'', score: 54 },
        { day: 'יום ד\'', score: 80 },
        { day: 'יום ה\'', score: 46 },
        { day: 'יום ו\'', score: 90 },
        { day: 'יום ש\'', score: 71 },
      ],
      renewals: [
        { day: 'יום א\'', score: 72 },
        { day: 'יום ב\'', score: 55 },
        { day: 'יום ג\'', score: 68 },
        { day: 'יום ד\'', score: 85 },
        { day: 'יום ה\'', score: 52 },
        { day: 'יום ו\'', score: 78 },
        { day: 'יום ש\'', score: 81 },
      ],
      sales: [
        { day: 'יום א\'', score: 58 },
        { day: 'יום ב\'', score: 42 },
        { day: 'יום ג\'', score: 61 },
        { day: 'יום ד\'', score: 73 },
        { day: 'יום ה\'', score: 49 },
        { day: 'יום ו\'', score: 84 },
        { day: 'יום ש\'', score: 67 },
      ],
      service: [
        { day: 'יום א\'', score: 81 },
        { day: 'יום ב\'', score: 76 },
        { day: 'יום ג\'', score: 88 },
        { day: 'יום ד\'', score: 92 },
        { day: 'יום ה\'', score: 79 },
        { day: 'יום ו\'', score: 95 },
        { day: 'יום ש\'', score: 86 },
      ],
    };

    const monthlyData = {
      all: [
        { day: 'שבוע 1', score: 68 },
        { day: 'שבוע 2', score: 72 },
        { day: 'שבוע 3', score: 65 },
        { day: 'שבוע 4', score: 88 },
      ],
      renewals: [
        { day: 'שבוע 1', score: 75 },
        { day: 'שבוע 2', score: 68 },
        { day: 'שבוע 3', score: 81 },
        { day: 'שבוע 4', score: 92 },
      ],
      sales: [
        { day: 'שבוע 1', score: 62 },
        { day: 'שבוע 2', score: 58 },
        { day: 'שבוע 3', score: 71 },
        { day: 'שבוע 4', score: 79 },
      ],
      service: [
        { day: 'שבוע 1', score: 85 },
        { day: 'שבוע 2', score: 89 },
        { day: 'שבוע 3', score: 82 },
        { day: 'שבוע 4', score: 94 },
      ],
    };

    const yearlyData = {
      all: [
        { day: 'ינואר', score: 65 },
        { day: 'פברואר', score: 70 },
        { day: 'מרץ', score: 68 },
        { day: 'אפריל', score: 75 },
        { day: 'מאי', score: 82 },
        { day: 'יוני', score: 78 },
        { day: 'יולי', score: 71 },
        { day: 'אוגוסט', score: 85 },
        { day: 'ספטמבר', score: 79 },
        { day: 'אוקטובר', score: 88 },
        { day: 'נובמבר', score: 91 },
        { day: 'דצמבר', score: 86 },
      ],
      renewals: [
        { day: 'ינואר', score: 71 },
        { day: 'פברואר', score: 68 },
        { day: 'מרץ', score: 74 },
        { day: 'אפריל', score: 79 },
        { day: 'מאי', score: 85 },
        { day: 'יוני', score: 81 },
        { day: 'יולי', score: 76 },
        { day: 'אוגוסט', score: 88 },
        { day: 'ספטמבר', score: 83 },
        { day: 'אוקטובר', score: 90 },
        { day: 'נובמבר', score: 93 },
        { day: 'דצמבר', score: 89 },
      ],
      sales: [
        { day: 'ינואר', score: 58 },
        { day: 'פברואר', score: 63 },
        { day: 'מרץ', score: 61 },
        { day: 'אפריל', score: 69 },
        { day: 'מאי', score: 75 },
        { day: 'יוני', score: 72 },
        { day: 'יולי', score: 66 },
        { day: 'אוגוסט', score: 79 },
        { day: 'ספטמבר', score: 73 },
        { day: 'אוקטובר', score: 82 },
        { day: 'נובמבר', score: 85 },
        { day: 'דצמבר', score: 80 },
      ],
      service: [
        { day: 'ינואר', score: 82 },
        { day: 'פברואר', score: 86 },
        { day: 'מרץ', score: 84 },
        { day: 'אפריל', score: 88 },
        { day: 'מאי', score: 92 },
        { day: 'יוני', score: 90 },
        { day: 'יולי', score: 87 },
        { day: 'אוגוסט', score: 94 },
        { day: 'ספטמבר', score: 91 },
        { day: 'אוקטובר', score: 95 },
        { day: 'נובמבר', score: 97 },
        { day: 'דצמבר', score: 93 },
      ],
    };

    // נתוני כרטיסים לפי מחלקה
    const cardData = {
      all: {
        avgScore: 86,
        weeklyChange: 5,
        categories: [
          { name: 'שירותיות', percent: 42, color: 'var(--purple-purple-500)' },
          { name: 'רגוליציה', percent: 84, color: 'var(--data-vizualization-purple-medium)' },
          { name: 'מכירה', percent: 56, color: 'var(--data-vizualization-purple-light)' },
        ],
      },
      renewals: {
        avgScore: 78,
        weeklyChange: 8,
        categories: [
          { name: 'שירותיות', percent: 65, color: 'var(--purple-purple-500)' },
          { name: 'רגוליציה', percent: 88, color: 'var(--data-vizualization-purple-medium)' },
          { name: 'מכירה', percent: 71, color: 'var(--data-vizualization-purple-light)' },
        ],
      },
      sales: {
        avgScore: 72,
        weeklyChange: 3,
        categories: [
          { name: 'שירותיות', percent: 38, color: 'var(--purple-purple-500)' },
          { name: 'רגוליציה', percent: 76, color: 'var(--data-vizualization-purple-medium)' },
          { name: 'מכירה', percent: 82, color: 'var(--data-vizualization-purple-light)' },
        ],
      },
      service: {
        avgScore: 92,
        weeklyChange: 2,
        categories: [
          { name: 'שירותיות', percent: 95, color: 'var(--purple-purple-500)' },
          { name: 'רגוליציה', percent: 91, color: 'var(--data-vizualization-purple-medium)' },
          { name: 'מכירה', percent: 89, color: 'var(--data-vizualization-purple-light)' },
        ],
      },
    };

    // בחירת הנתונים הנכונים
    let trendData;
    if (timePeriod === 'week') {
      trendData = weeklyData[department as keyof typeof weeklyData] || weeklyData.all;
    } else if (timePeriod === 'month') {
      trendData = monthlyData[department as keyof typeof monthlyData] || monthlyData.all;
    } else {
      trendData = yearlyData[department as keyof typeof yearlyData] || yearlyData.all;
    }

    const cards = cardData[department as keyof typeof cardData] || cardData.all;

    return { trendData, cards };
  };

  const { trendData, cards } = getDataByPeriodAndDepartment();

  // טקסטים דינמיים לפי תקופה
  const getPeriodText = () => {
    if (timePeriod === 'week') return 'שבועי';
    if (timePeriod === 'month') return 'חודשי';
    return 'שנתי';
  };

  const periodText = getPeriodText();

  // אנימציה של העיגול - מתעדכנת כשמשנים נתונים
  React.useEffect(() => {
    setCircleProgress(0); // איפוס
    
    const targetProgress = cards.avgScore / 100; // ציון דינמי
    const duration = 1500; // 1.5 שניות
    
    // התחל רק אחרי עיכוב קטן כדי לוודא שהקומפוננטה נטענה
    const timeoutId = setTimeout(() => {
      const startTime = Date.now();

      const animateCircle = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // easing function (ease-out)
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const newProgress = easeOut * targetProgress;
        
        setCircleProgress(newProgress);

        if (progress < 1) {
          requestAnimationFrame(animateCircle);
        }
      };

      animateCircle();
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [department, timePeriod, cards.avgScore]);

  // אנימציה של הגרף - מתעדכנת כשמשנים נתונים
  React.useEffect(() => {
    setGraphProgress(0); // איפוס
    
    const duration = 1500; // 1.5 שניות
    
    // התחל רק אחרי עיכוב קטן כדי לוודא שהקומפוננטה נטענה
    const timeoutId = setTimeout(() => {
      const startTime = Date.now();

      const animateGraph = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // easing function (ease-out)
        const easeOut = 1 - Math.pow(1 - progress, 3);
        
        setGraphProgress(easeOut);

        if (progress < 1) {
          requestAnimationFrame(animateGraph);
        }
      };

      animateGraph();
    }, 300); // התחל אחרי העיגול

    return () => clearTimeout(timeoutId);
  }, [department, timePeriod]);

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

  const timePeriodOptions = [
    { label: 'השבוע', value: 'week' },
    { label: 'החודש', value: 'month' },
    { label: 'השנה', value: 'year' },
  ];

  const departmentOptions = [
    { label: 'כל המחלקות', value: 'all' },
    { label: 'חידושים', value: 'renewals' },
    { label: 'מכירה', value: 'sales' },
    { label: 'שירות', value: 'service' },
  ];

  // Styles
  const appContainerStyle: React.CSSProperties = {
    width: '100%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    background: '#FAFAFA',
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
    order: 1, // צד ימין ב-RTL
  };

  const contentAreaStyle: React.CSSProperties = {
    flex: 1,
    overflowY: 'auto',
    padding: '71px',
    boxSizing: 'border-box',
    order: 2, // צד שמאל ב-RTL
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: '#FAFAFA',
  };

  const contentWrapperStyle: React.CSSProperties = {
    width: '100%',
    maxWidth: '1440px',
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--spacing-spacing-large)',
  };

  const mainContentWidth = '1217px';

  const headerSectionStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--spacing-spacing-large)',
    alignItems: 'flex-start',
    width: mainContentWidth,
    maxWidth: '100%',
    direction: 'rtl',
    textAlign: 'right',
  };

  const headerTextContainerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--spacing-spacing-medium)',
    alignItems: 'flex-start',
    width: '367px',
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
  };

  const headerSubtitleStyle: React.CSSProperties = {
    fontFamily: 'var(--cc-font-primary)',
    fontSize: '18px',
    lineHeight: 'normal',
    color: 'var(--neutral-neutral-text-default)',
    textAlign: 'right',
    direction: 'rtl',
    width: '402px',
  };

  const filtersContainerStyle: React.CSSProperties = {
    display: 'flex',
    gap: 'var(--spacing-spacing-large)',
    alignItems: 'center',
    justifyContent: 'flex-end',
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
    alignItems: 'flex-start',
  };

  const cardGradeStyle: React.CSSProperties = {
    ...cardStyle,
    width: '596.5px',
    height: '291px',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    overflow: 'hidden',
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
          <div style={contentWrapperStyle}>
          {/* Header Section */}
          <div style={headerSectionStyle}>
            <div style={headerTextContainerStyle}>
              <div>
                <h1 style={headerTitleStyle}>היי טל,</h1>
                <p style={headerSubtitleStyle}>
                  נראה שהמוקד בשליטה והנציגים שומרים על רמה גבוהה
                </p>
              </div>
              <div style={filtersContainerStyle}>
                <Dropdown
                  label="תקופה"
                  value={timePeriod}
                  options={timePeriodOptions}
                  onChange={setTimePeriod}
                  size="sm"
                />
                <div style={{ minWidth: 'fit-content' }}>
                  <Dropdown
                    label="מחלקות"
                    value={department}
                    options={departmentOptions}
                    onChange={setDepartment}
                    size="sm"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Cards Row */}
          <div style={cardsRowStyle}>
            {/* Card Trend - מגמה שבועית */}
            <div style={cardTrendStyle}>
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                width: '100%',
                direction: 'rtl',
              }}>
                {/* Right side - Title */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                  direction: 'rtl',
                  textAlign: 'right',
                }}>
                  <h2 style={{
                    fontFamily: 'var(--cc-font-primary)',
                    fontSize: 'var(--cc-typography-h2-size)',
                    lineHeight: 'var(--cc-typography-h2-line-height)',
                    fontWeight: 600,
                    color: 'var(--neutral-black)',
                    textAlign: 'right',
                    direction: 'rtl',
                  }}>
                    {`מגמה ${periodText}ית`}
                  </h2>
                </div>
                {/* Left side - Stats */}
                <div style={{
                  display: 'flex',
                  gap: 'var(--spacing-spacing-medium)',
                  alignItems: 'flex-start',
                  direction: 'rtl',
                }}>
                  {/* ממוצע שבועי - rightmost */}
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 'var(--spacing-spacing-xs)',
                    alignItems: 'flex-end',
                    width: '77px',
                    direction: 'rtl',
                    textAlign: 'right',
                  }}>
                    <p style={{
                      fontFamily: 'var(--cc-font-primary)',
                      fontSize: 'var(--cc-typography-body-sm-size)',
                      color: 'var(--neutral-neutral-text-default)',
                      textAlign: 'right',
                      direction: 'rtl',
                    }}>
                      {`ממוצע ${periodText}`}
                    </p>
                    <p style={{
                      fontFamily: 'var(--cc-font-primary)',
                      fontSize: 'var(--cc-typography-h3-size)',
                      fontWeight: 600,
                      color: 'var(--neutral-black)',
                      textAlign: 'right',
                      direction: 'rtl',
                      lineHeight: 1,
                    }}>
                      {cards.avgScore}<span style={{ fontSize: 'var(--cc-typography-body-size)' }}>%</span>
                    </p>
                  </div>
                  {/* מהתקופה הקודמת - leftmost */}
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 'var(--spacing-spacing-xs)',
                    alignItems: 'flex-end',
                    width: '77px',
                    direction: 'rtl',
                    textAlign: 'right',
                  }}>
                    <p style={{
                      fontFamily: 'var(--cc-font-primary)',
                      fontSize: 'var(--cc-typography-body-sm-size)',
                      color: 'var(--neutral-neutral-text-default)',
                      textAlign: 'right',
                      direction: 'rtl',
                    }}>
                      {timePeriod === 'week' ? 'משבוע שעבר' : timePeriod === 'month' ? 'מחודש שעבר' : 'משנה שעברה'}
                    </p>
                    <Badge 
                      text={`${cards.weeklyChange}%`}
                      variant="danger" 
                      icon={arrowDownIcon} 
                      showIcon={true}
                    />
                  </div>
                </div>
              </div>
              {/* Weekly Trend Graph */}
              <div 
                style={{
                  height: '180px',
                  width: '100%',
                  position: 'relative',
                  direction: 'ltr',
                }}
                onMouseLeave={() => setHoveredDay(null)}
              >
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 580 180"
                  preserveAspectRatio="none"
                  style={{ overflow: 'visible' }}
                >
                  <defs>
                    <linearGradient id="areaGradient" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="var(--primary-primary-default-50, #4659e4)" stopOpacity="0.1" />
                      <stop offset="100%" stopColor="var(--primary-primary-default-50, #4659e4)" stopOpacity="0.01" />
                    </linearGradient>
                  </defs>

                  {/* Create path for area and line */}
                  {(() => {
                    const width = 580;
                    const height = 160;
                    const paddingTop = 20;
                    const paddingBottom = 20;
                    const graphHeight = height - paddingTop - paddingBottom;
                    const pointSpacing = width / (trendData.length - 1);
                    
                    const points = trendData.map((data, index) => ({
                      x: index * pointSpacing,
                      y: paddingTop + (graphHeight - ((data.score - 10) / 90) * graphHeight),
                      score: data.score,
                      day: data.day,
                    }));

                    const linePathData = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');
                    const areaPathData = `${linePathData} L ${points[points.length - 1].x} ${paddingTop + graphHeight} L ${points[0].x} ${paddingTop + graphHeight} Z`;

                    // חישוב אורך הקו לאנימציה
                    const pathElement = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                    pathElement.setAttribute('d', linePathData);
                    const pathLength = pathElement.getTotalLength();

                    // Grid lines for scores: 10, 20, 30...100
                    const gridLines = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

                    return (
                      <>
                        {/* Grid lines */}
                        {gridLines.map((score) => {
                          const y = paddingTop + (graphHeight - ((score - 10) / 90) * graphHeight);
                          return (
                            <line
                              key={score}
                              x1={0}
                              y1={y}
                              x2={width}
                              y2={y}
                              stroke="var(--neutral-neutral-97, #fafafa)"
                              strokeWidth="1"
                              opacity="0.6"
                            />
                          );
                        })}

                        {/* Area fill */}
                        <path
                          d={areaPathData}
                          fill="url(#areaGradient)"
                          style={{
                            clipPath: `inset(0 ${100 - (graphProgress * 100)}% 0 0)`,
                          }}
                        />
                        
                        {/* Line */}
                        <path
                          d={linePathData}
                          fill="none"
                          stroke="var(--primary-primary-default-50, #4659e4)"
                          strokeWidth="2"
                          strokeLinejoin="round"
                          strokeLinecap="round"
                          strokeDasharray={pathLength}
                          strokeDashoffset={pathLength * (1 - graphProgress)}
                        />

                        {/* Points and hover areas */}
                        {points.map((point, index) => {
                          // חישוב אם הנקודה צריכה להיות גלויה על פי ה-progress
                          const pointProgress = (index / (points.length - 1));
                          const isVisible = graphProgress >= pointProgress;
                          
                          return (
                            <g key={index} style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.3s ease' }}>
                              {/* Invisible hover area */}
                              <rect
                                x={point.x - 40}
                                y={0}
                                width={80}
                                height={height}
                                fill="transparent"
                                style={{ cursor: 'pointer' }}
                                onMouseEnter={() => setHoveredDay(index)}
                              />
                              
                              {/* Point circle */}
                              <circle
                                cx={point.x}
                                cy={point.y}
                                r={hoveredDay === index ? 5 : 3}
                                fill="var(--primary-primary-default-50, #4659e4)"
                                stroke="var(--neutral-white, #ffffff)"
                                strokeWidth={hoveredDay === index ? 2.5 : 1.5}
                                style={{ 
                                  transition: 'all 0.2s ease',
                                  filter: hoveredDay === index ? 'drop-shadow(0 2px 8px rgba(70, 89, 228, 0.4))' : 'none'
                                }}
                              />

                            {/* Tooltip on hover - עיצוב חדש מ-Figma */}
                            {hoveredDay === index && (
                              <>
                                {/* Dashed line - מלמעלה למטה לכל אורך הגרף */}
                                <line
                                  x1={point.x}
                                  y1={paddingTop}
                                  x2={point.x}
                                  y2={paddingTop + graphHeight}
                                  stroke="var(--neutral-neutral-80, #c6c6d2)"
                                  strokeWidth="1"
                                  strokeDasharray="3 3"
                                />
                                
                                {/* Badge container - ממוקם בגובה הנקודה */}
                                <g>
                                  <rect
                                    x={point.x + 8}
                                    y={point.y - 16}
                                    width={95}
                                    height={32}
                                    rx="8"
                                    fill="var(--neutral-neutral-95, #f1f1f4)"
                                    style={{ 
                                      filter: 'drop-shadow(0px 0px 24px rgba(174, 174, 152, 0.16))'
                                    }}
                                  />
                                  {/* Day - Regular - מימין (RTL) */}
                                  <text
                                    x={point.x + 91}
                                    y={point.y + 5}
                                    textAnchor="end"
                                    fill="var(--neutral-black, #060034)"
                                    style={{
                                      fontSize: '14px',
                                      fontWeight: 400,
                                      fontFamily: 'var(--cc-font-primary)',
                                      unicodeBidi: 'plaintext',
                                    }}
                                  >
                                    {point.day}
                                  </text>
                                  {/* Score - DemiBold - משמאל (RTL) */}
                                  <text
                                    x={point.x + 20}
                                    y={point.y + 5}
                                    textAnchor="start"
                                    fill="var(--neutral-black, #060034)"
                                    style={{
                                      fontSize: '14px',
                                      fontWeight: 600,
                                      fontFamily: 'var(--cc-font-primary)',
                                    }}
                                  >
                                    {point.score}%
                                  </text>
                                </g>
                              </>
                            )}
                          </g>
                          );
                        })}

                        {/* X-axis labels (days) */}
                        {trendData.map((data, index) => {
                          const x = index * pointSpacing;
                          return (
                            <text
                              key={`label-${index}`}
                              x={x}
                              y={height + 15}
                              textAnchor="middle"
                              fill="var(--neutral-neutral-text-default, #444456)"
                              style={{
                                fontSize: '12px',
                                fontFamily: 'var(--cc-font-primary)',
                                direction: 'rtl',
                              }}
                            >
                              {data.day}
                            </text>
                          );
                        })}
                      </>
                    );
                  })()}
                </svg>
              </div>
            </div>

            {/* Card Grade - ציון שבועי ממוצע */}
            <div style={cardGradeStyle}>
              {/* חלוקה לשני חלקים: ימין ושמאל */}
              <div style={{
                display: 'flex',
                direction: 'rtl',
                gap: 'var(--spacing-spacing-large)',
                height: '100%',
                width: '100%',
              }}>
                {/* צד ימני - כותרת + לפי קטגוריה + פסים */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--spacing-spacing-medium)',
                  flex: 1,
                  direction: 'rtl',
                }}>
                  {/* כותרת */}
                  <h2 style={{
                    fontFamily: 'var(--cc-font-primary)',
                    fontSize: 'var(--cc-typography-h2-size)',
                    lineHeight: 'var(--cc-typography-h2-line-height)',
                    fontWeight: 600,
                    color: 'var(--neutral-black)',
                    textAlign: 'right',
                    direction: 'rtl',
                  }}>
                    {`ציון ${periodText} ממוצע למוקד`}
                  </h2>

                  {/* לפי קטגוריה + פסים */}
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 'var(--spacing-spacing-small)',
                  }}>
                    <p style={{
                      fontFamily: 'var(--cc-font-primary)',
                      fontSize: 'var(--cc-typography-body-size)',
                      fontWeight: 600,
                      color: 'var(--neutral-black)',
                      textAlign: 'right',
                      direction: 'rtl',
                    }}>
                      לפי קטגוריה
                    </p>
                    {/* Category bars */}
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '8px',
                    }}>
                      {cards.categories.map((category, index) => (
                        <div key={index} style={{
                          display: 'flex',
                          gap: '5px',
                          alignItems: 'center',
                          justifyContent: 'flex-start',
                          direction: 'rtl',
                        }}>
                          <span style={{
                            fontSize: 'var(--cc-typography-body-sm-size)',
                            fontFamily: 'var(--cc-font-primary)',
                            color: 'var(--neutral-black)',
                            width: '48px',
                            textAlign: 'right',
                          }}>{category.name}</span>
                          <div style={{
                            width: '77px',
                            height: '12px',
                            background: 'var(--primary-primary-surface)',
                            borderRadius: '100px',
                            position: 'relative',
                            overflow: 'hidden',
                          }}>
                            <div style={{
                              position: 'absolute',
                              right: 0,
                              top: 0,
                              width: `${category.percent}%`,
                              height: '100%',
                              background: category.color,
                              borderRadius: '100px',
                            }} />
                          </div>
                          <span style={{
                            fontSize: 'var(--cc-typography-body-sm-size)',
                            fontFamily: 'var(--cc-font-primary)',
                            color: 'var(--neutral-neutral-text-default)',
                          }}>{category.percent}%</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* צד שמאלי - עיגול ממורכז */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <svg width="180" height="180" viewBox="0 0 180 180" style={{ transform: 'rotate(-90deg)' }}>
                    {/* Background ring (gray) */}
                    <circle
                      cx="90"
                      cy="90"
                      r="78"
                      fill="none"
                      stroke="var(--neutral-neutral-95, #f1f1f4)"
                      strokeWidth="24"
                    />
                    {/* Progress ring (blue) with rounded caps */}
                    <circle
                      cx="90"
                      cy="90"
                      r="78"
                      fill="none"
                      stroke="var(--primary-primary-default-50, #4659e4)"
                      strokeWidth="24"
                      strokeDasharray={2 * Math.PI * 78}
                      strokeDashoffset={2 * Math.PI * 78 * (1 - circleProgress)}
                      strokeLinecap="round"
                    />
                    {/* Center text */}
                    <text
                      x="90"
                      y="90"
                      textAnchor="middle"
                      dominantBaseline="central"
                      style={{
                        fontSize: '32px',
                        fontWeight: 600,
                        fontFamily: 'var(--cc-font-primary)',
                        fill: 'var(--neutral-black)',
                        transform: 'rotate(90deg)',
                        transformOrigin: '90px 90px',
                      }}
                    >
                      {Math.round(circleProgress * 100)}%
                    </text>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Table - אירועים לטיפול */}
          <div style={{ width: mainContentWidth, maxWidth: '100%' }}>
            <Table
              title="אירועים לטיפול"
              titleCount={7}
              headerButton={{
                label: 'כל האירועים',
                onClick: () => console.log('כל האירועים clicked'),
              }}
              columns={[
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
                          width: '100%',
                          textAlign: 'right',
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
                  align: 'right',
                  render: (count: number) => <Table.EventCountBadge count={count} />,
                },
                {
                  key: 'quote',
                  header: 'ציטוט',
                  width: 600,
                  align: 'right',
                  render: (data: any) => {
                    const quoteData = typeof data === 'object' && data !== null ? data : {};
                    const quotes = quoteData.quotes || (Array.isArray(data) ? data : []);

                    return (
                      <div style={{
                        display: 'flex',
                        gap: 'var(--spacing-spacing-small)',
                        alignItems: 'center',
                        direction: 'rtl',
                        width: '100%',
                      }}>
                        {/* Show first two quotes if available - order: first quote on right, second on left */}
                        {quotes.length > 0 && (
                          <Quote text={quotes[0]} />
                        )}
                        {quotes.length > 1 && (
                          <Quote text={quotes[1]} />
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
                    date: '12 מאי, 2025',
                    hour: '11:12 AM',
                  },
                  events: 12,
                  quote: {
                    quotes: ['לא מדובר בהחלטה חד צדדית', 'אנחנו פונים אליך כדי לחדש תרצה שנציג יחזור אליך?'],
                  },
                },
                {
                  title: {
                    title: 'שיחת סגירה על פוליסת בריאות',
                    subtitle: 'שירה בלומברג',
                  },
                  date: {
                    date: '12 מאי, 2025',
                    hour: '11:12 AM',
                  },
                  events: 6,
                  quote: {
                    quotes: ['לא מדובר בהחלטה חד צדדית', 'אנחנו פונים אליך כדי לחדש תרצה שנציג יחזור אליך?'],
                  },
                },
                {
                  title: {
                    title: 'חידוש ביטוח רכב - לקוח מתלונן על עלייה במחיר',
                    subtitle: 'דניאל כהן',
                  },
                  date: {
                    date: '11 מאי, 2025',
                    hour: '3:45 PM',
                  },
                  events: 8,
                  quote: {
                    quotes: ['לא אכפת לי מה כתוב בחוזה, אתם מנצלים אותי', 'אני לא מבין למה המחיר עולה כל שנה'],
                  },
                },
                {
                  title: {
                    title: 'חידוש ביטוח דירה - אי הסבר על שינוי תנאים',
                    subtitle: 'מיכל לוי',
                  },
                  date: {
                    date: '11 מאי, 2025',
                    hour: '2:20 PM',
                  },
                  events: 15,
                  quote: {
                    quotes: ['אני לא מסכים לחתום על משהו שלא הסברתם לי', 'תשלחו לי את זה במייל ואני אחשוב על זה'],
                  },
                },
                {
                  title: {
                    title: 'חידוש ביטוח חיים - שיחה ללא גילוי מלא',
                    subtitle: 'רונית אברהם',
                  },
                  date: {
                    date: '10 מאי, 2025',
                    hour: '4:50 PM',
                  },
                  events: 10,
                  quote: {
                    quotes: ['זה לא משנה, בטוח תשלמו בסוף', 'אתם תמיד מוצאים תירוצים לא לשלם'],
                  },
                },
                {
                  title: {
                    title: 'חידוש פוליסת נסיעות - לחץ יתר על הלקוח',
                    subtitle: 'עומר דהן',
                  },
                  date: {
                    date: '10 מאי, 2025',
                    hour: '1:15 PM',
                  },
                  events: 9,
                  quote: {
                    quotes: ['אם לא תחדש עכשיו תישאר בלי כיסוי', 'אני לא יכול לתת לך זמן לחשוב, ההצעה בתוקף רק היום'],
                  },
                },
                {
                  title: {
                    title: 'חידוש ביטוח עסקי - אי עמידה בהתחייבויות',
                    subtitle: 'אורי גולן',
                  },
                  date: {
                    date: '9 מאי, 2025',
                    hour: '10:30 AM',
                  },
                  events: 14,
                  quote: {
                    quotes: ['הבטחתי לך? אני לא זוכר שהבטחתי משהו כזה', 'זה לא אחריותי, תדבר עם המחלקה המשפטית'],
                  },
                },
              ]}
              onRowClick={(_row: any, index: number) => {
                if (index === 0) {
                  onNavigate('calls');
                }
              }}
            />
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

