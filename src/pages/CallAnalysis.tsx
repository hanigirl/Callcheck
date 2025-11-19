import React from 'react';
import { TopBar, Sidebar, Table, Quote, Button, Dropdown, Tag } from '@design-system';
import logoIcon from '@design-system/icons/logo.svg';
import homeIcon from '@design-system/icons/home.svg';
import callsIcon from '@design-system/icons/calls.svg';
import callersIcon from '@design-system/icons/callers.svg';
import clientsIcon from '@design-system/icons/clients.svg';

type CallAnalysisProps = {
  onNavigate: (page: 'dashboard' | 'calls' | 'transcription') => void;
};

const CallAnalysis: React.FC<CallAnalysisProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = React.useState<string>('סיכום כללי');
  const [circleProgress, setCircleProgress] = React.useState(0);
  const [tableFilter, setTableFilter] = React.useState('all');
  const [hoveredStrip, setHoveredStrip] = React.useState<number | null>(null);

  // אנימציה של העיגול
  React.useEffect(() => {
    setCircleProgress(0);
    
    const targetProgress = 0.78; // 78%
    const duration = 1500;
    
    const timeoutId = setTimeout(() => {
      const startTime = Date.now();

      const animateCircle = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
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
  }, []);


  const categories = [
    { name: 'שירותיות', percent: 42, color: 'var(--purple-purple-500)' },
    { name: 'רגוליציה', percent: 84, color: 'var(--data-vizualization-purple-medium)' },
    { name: 'מכירה', percent: 56, color: 'var(--data-vizualization-purple-light)' },
  ];

  const filterOptions = [
    { value: 'all', label: 'כל הקטגוריות' },
    { value: 'regulation', label: 'רגולציה' },
    { value: 'service', label: 'שירות' },
    { value: 'sales', label: 'מכירה' },
  ];

  const mainContentWidth = '1217px';

  // Container styles - זהה ל-Dashboard
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

  const pageContentStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--spacing-spacing-large, 40px)',
    width: '100%',
    direction: 'rtl',
  };

  const headerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    direction: 'rtl',
  };

  const titleRowStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: 'var(--spacing-spacing-small, 8px)',
    direction: 'rtl',
  };

  const buttonRowStyle: React.CSSProperties = {
    display: 'flex',
    gap: '8px',
    direction: 'rtl',
  };

  const cardsRowStyle: React.CSSProperties = {
    display: 'flex',
    gap: 'var(--spacing-spacing-large, 40px)',
    width: '100%',
    direction: 'rtl',
    alignItems: 'stretch',
  };

  const cardStyle: React.CSSProperties = {
    background: 'var(--neutral-white, #ffffff)',
    borderRadius: 'var(--radius-radius-16, 16px)',
    padding: 'var(--spacing-spacing-24, 24px)',
    flex: 1,
    direction: 'rtl',
    display: 'flex',
    flexDirection: 'column',
  };

  const cardGradeStyle: React.CSSProperties = {
    background: 'var(--neutral-white, #ffffff)',
    borderRadius: 'var(--radius-radius-16, 16px)',
    padding: 'var(--spacing-spacing-24, 24px)',
    flex: 1,
    direction: 'rtl',
  };

  return (
    <div style={appContainerStyle}>
      {/* Top Bar */}
      <TopBar 
        userName="טל אטיאס"
        searchSuggestions={[]}
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
              { id: 'dashboard', label: 'בקרה', iconPath: homeIcon, isActive: false, onClick: () => onNavigate('dashboard') },
              { id: 'calls', label: 'שיחות', iconPath: callsIcon, isActive: true },
              { id: 'callers', label: 'נציגים', iconPath: callersIcon, isActive: false },
              { id: 'clients', label: 'לקוחות', iconPath: clientsIcon, isActive: false },
              { id: 'settings', label: 'הגדרות', iconPath: homeIcon, isActive: false },
            ]}
          />
        </div>

        {/* Content Area */}
        <div style={contentAreaStyle}>
          <div style={contentWrapperStyle}>
          <div style={pageContentStyle}>
          {/* Header */}
          <div style={headerStyle}>
            <div style={titleRowStyle}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '100px',
                border: '1px solid var(--neutral-neutral-90, #e2e2e8)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <span style={{ fontSize: '20px' }}>📝</span>
              </div>
              <h1 style={{
                fontFamily: 'var(--cc-font-primary)',
                fontSize: 'var(--cc-typography-h1-size)',
                fontWeight: 600,
                color: 'var(--neutral-black)',
                textAlign: 'right',
                direction: 'rtl',
                margin: 0,
              }}>
                שיחת מכירה עם לקוח על חידוש פוליסה קיימת
              </h1>
            </div>
            
            <div style={buttonRowStyle}>
              <Button variant="secondary" size="large" onClick={() => onNavigate('transcription')}>
                תמלול השיחה
              </Button>
              
              <Button variant="primary" size="large">
                שליחת דו״ח
              </Button>
            </div>
          </div>

          {/* Cards Row */}
          <div style={cardsRowStyle}>
            {/* Card: Call Details */}
            <div style={cardStyle}>
              <h2 style={{
                fontFamily: 'var(--cc-font-primary)',
                fontSize: 'var(--cc-typography-h2-size)',
                fontWeight: 600,
                color: 'var(--neutral-black)',
                textAlign: 'right',
                direction: 'rtl',
                marginBottom: 'var(--spacing-spacing-large, 40px)',
              }}>
                שיחה 162378
              </h2>
              
              <div style={{
                display: 'flex',
                gap: 'var(--spacing-spacing-24, 24px)',
                flexWrap: 'wrap',
                marginBottom: 'var(--spacing-spacing-large, 40px)',
                direction: 'rtl',
              }}>
                <div style={{ display: 'flex', flexDirection: 'column', minWidth: '72px', direction: 'rtl' }}>
                  <p style={{
                    fontFamily: 'var(--cc-font-primary)',
                    fontSize: 'var(--cc-typography-h4-size)',
                    fontWeight: 600,
                    color: 'var(--neutral-black)',
                    margin: 0,
                    marginBottom: '8px',
                    textAlign: 'right',
                  }}>תאריך</p>
                  <p style={{
                    fontFamily: 'var(--cc-font-primary)',
                    fontSize: 'var(--cc-typography-body-sm-size)',
                    fontWeight: 400,
                    color: 'var(--neutral-neutral-text-default)',
                    margin: 0,
                    textAlign: 'right',
                  }}>12 יוני 2025</p>
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', minWidth: '72px', direction: 'rtl' }}>
                  <p style={{
                    fontFamily: 'var(--cc-font-primary)',
                    fontSize: 'var(--cc-typography-h4-size)',
                    fontWeight: 600,
                    color: 'var(--neutral-black)',
                    margin: 0,
                    marginBottom: '8px',
                    textAlign: 'right',
                  }}>שעה</p>
                  <p style={{
                    fontFamily: 'var(--cc-font-primary)',
                    fontSize: 'var(--cc-typography-body-sm-size)',
                    fontWeight: 400,
                    color: 'var(--neutral-neutral-text-default)',
                    margin: 0,
                    textAlign: 'right',
                  }}>10:10-11:19</p>
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', minWidth: '72px', direction: 'rtl' }}>
                  <p style={{
                    fontFamily: 'var(--cc-font-primary)',
                    fontSize: 'var(--cc-typography-h4-size)',
                    fontWeight: 600,
                    color: 'var(--neutral-black)',
                    margin: 0,
                    marginBottom: '8px',
                    textAlign: 'right',
                  }}>זמן שיחה</p>
                  <p style={{
                    fontFamily: 'var(--cc-font-primary)',
                    fontSize: 'var(--cc-typography-body-sm-size)',
                    fontWeight: 400,
                    color: 'var(--neutral-neutral-text-default)',
                    margin: 0,
                    textAlign: 'right',
                  }}>01:09:12</p>
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', minWidth: '72px', direction: 'rtl' }}>
                  <p style={{
                    fontFamily: 'var(--cc-font-primary)',
                    fontSize: 'var(--cc-typography-h4-size)',
                    fontWeight: 600,
                    color: 'var(--neutral-black)',
                    margin: 0,
                    marginBottom: '8px',
                    textAlign: 'right',
                  }}>מחלקה</p>
                  <p style={{
                    fontFamily: 'var(--cc-font-primary)',
                    fontSize: 'var(--cc-typography-body-sm-size)',
                    fontWeight: 400,
                    color: 'var(--neutral-black)',
                    margin: 0,
                    textAlign: 'right',
                  }}>חידושים</p>
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', minWidth: '72px', direction: 'rtl' }}>
                  <p style={{
                    fontFamily: 'var(--cc-font-primary)',
                    fontSize: 'var(--cc-typography-h4-size)',
                    fontWeight: 600,
                    color: 'var(--neutral-black)',
                    margin: 0,
                    marginBottom: '8px',
                    textAlign: 'right',
                  }}>סוג</p>
                  <p style={{
                    fontFamily: 'var(--cc-font-primary)',
                    fontSize: 'var(--cc-typography-body-sm-size)',
                    fontWeight: 400,
                    color: 'var(--neutral-black)',
                    margin: 0,
                    textAlign: 'right',
                  }}>מכירה - חידוש</p>
                </div>
              </div>
              
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--spacing-spacing-medium, 16px)',
                direction: 'rtl',
              }}>
                <p style={{
                  fontFamily: 'var(--cc-font-primary)',
                  fontSize: 'var(--cc-typography-h4-size)',
                  fontWeight: 600,
                  color: 'var(--neutral-black)',
                  margin: 0,
                  textAlign: 'right',
                }}>משתתפים</p>
                
                <div style={{
                  display: 'flex',
                  gap: 'var(--spacing-spacing-medium, 16px)',
                  direction: 'rtl',
                }}>
                  <div style={{ display: 'flex', gap: '8px', direction: 'rtl' }}>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      background: 'var(--neutral-neutral-surface, #f1f1f4)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontFamily: 'var(--cc-font-primary)',
                      fontSize: '20px',
                      fontWeight: 600,
                      color: 'var(--neutral-black)',
                      overflow: 'hidden',
                    }}>
                      👤
                    </div>
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      direction: 'rtl',
                    }}>
                      <p style={{
                        fontFamily: 'var(--cc-font-primary)',
                        fontSize: 'var(--cc-typography-body-xs-size)',
                        fontWeight: 400,
                        color: 'var(--neutral-neutral-text-default)',
                        margin: 0,
                        textAlign: 'right',
                      }}>נציג/ה</p>
                      <p style={{
                        fontFamily: 'var(--cc-font-primary)',
                        fontSize: 'var(--cc-typography-body-accented-size)',
                        fontWeight: 500,
                        color: 'var(--neutral-black)',
                        margin: 0,
                        textAlign: 'right',
                      }}>יפעת הללי</p>
                    </div>
                  </div>
                  
                  <span style={{ fontSize: '24px' }}>⇄</span>
                  
                  <div style={{ display: 'flex', gap: '8px', direction: 'rtl' }}>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      background: 'var(--neutral-neutral-surface, #f1f1f4)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontFamily: 'var(--cc-font-primary)',
                      fontSize: '20px',
                      fontWeight: 600,
                      color: 'var(--neutral-black)',
                    }}>
                      ג
                    </div>
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      direction: 'rtl',
                    }}>
                      <p style={{
                        fontFamily: 'var(--cc-font-primary)',
                        fontSize: 'var(--cc-typography-body-xs-size)',
                        fontWeight: 400,
                        color: 'var(--neutral-neutral-text-default)',
                        margin: 0,
                        textAlign: 'right',
                      }}>לקוח/ה</p>
                      <p style={{
                        fontFamily: 'var(--cc-font-primary)',
                        fontSize: 'var(--cc-typography-body-accented-size)',
                        fontWeight: 500,
                        color: 'var(--neutral-black)',
                        margin: 0,
                        textAlign: 'right',
                      }}>גפן אלון</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card Grade - ציון שיחה */}
            <div style={cardGradeStyle}>
              <div style={{
                display: 'flex',
                direction: 'rtl',
                gap: 'var(--spacing-spacing-large)',
                height: '100%',
                width: '100%',
              }}>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--spacing-spacing-medium)',
                  flex: 1,
                  direction: 'rtl',
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
                    ציון שיחה
                  </h2>

                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 'var(--spacing-spacing-small)',
                    alignItems: 'flex-start',
                    width: '100%',
                  }}>
                    <p style={{
                      fontFamily: 'var(--cc-font-primary)',
                      fontSize: 'var(--cc-typography-body-size)',
                      fontWeight: 600,
                      color: 'var(--neutral-black)',
                      textAlign: 'right',
                      direction: 'rtl',
                      width: '100%',
                    }}>
                      לפי קטגוריה
                    </p>
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '8px',
                      width: '100%',
                    }}>
                      {categories.map((category, index) => (
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

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <svg width="180" height="180" viewBox="0 0 180 180" style={{ transform: 'rotate(-90deg)' }}>
                    <circle
                      cx="90"
                      cy="90"
                      r="78"
                      fill="none"
                      stroke="var(--neutral-neutral-95, #f1f1f4)"
                      strokeWidth="24"
                    />
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

          {/* Summary Card */}
          <div style={{
            ...cardStyle,
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--spacing-spacing-medium, 16px)',
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
              direction: 'rtl',
            }}>
              <h2 style={{
                fontFamily: 'var(--cc-font-primary)',
                fontSize: 'var(--cc-typography-h2-size)',
                fontWeight: 600,
                color: 'var(--neutral-black)',
                textAlign: 'right',
                margin: 0,
              }}>
                תקציר
              </h2>
              
              <Button variant="secondary" size="default">
                שיתוף
              </Button>
            </div>
            
            <div style={{
              display: 'flex',
              gap: '8px',
              flexWrap: 'wrap',
              direction: 'rtl',
            }}>
              {['סיכום כללי', 'רגולציה', 'מכירה', 'שירותיות'].map((tag, index) => {
                const isSelected = selectedCategory === tag;
                return (
                  <button
                    key={index}
                    onClick={() => setSelectedCategory(tag)}
                    style={{
                      background: isSelected ? 'var(--neutral-neutral-95)' : 'var(--neutral-white)',
                      border: '1px solid var(--neutral-neutral-90)',
                      borderRadius: '100px',
                      padding: '6px 16px',
                      cursor: 'pointer',
                      fontFamily: 'var(--cc-font-primary)',
                      fontSize: 'var(--cc-typography-body-sm-size)',
                      fontWeight: 500,
                      color: 'var(--neutral-black)',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      if (!isSelected) {
                        e.currentTarget.style.background = 'var(--neutral-neutral-95)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isSelected) {
                        e.currentTarget.style.background = 'var(--neutral-white)';
                      }
                    }}
                  >
                    {tag}
                  </button>
                );
              })}
            </div>
            
            {selectedCategory === 'סיכום כללי' ? (
              <div style={{
                fontFamily: 'var(--cc-font-primary)',
                fontSize: 'var(--cc-typography-body-size)',
                fontWeight: 400,
                lineHeight: '1.5',
                color: 'var(--neutral-neutral-text-default)',
                textAlign: 'right',
                direction: 'rtl',
                overflow: 'auto',
              }}>
                <p style={{ marginBottom: '8px' }}>
                  בשיחה נציגת השירות הציגה ללקוח את פרטי פוליסת הביטוח ואת תנאי החידוש השנתיים.
                  הלקוח גילה עניין והפגין רצון להבין את הכיסוי הביטוחי לעומק. עם זאת, במהלך השיחה עלו מספר מושגים מקצועיים (כמו תקופת אכשרה, השתתפות עצמית ורצף ביטוחי) שלא הוסברו בצורה מספקת. הנציג ניסתה להשיב, אך לא פירטה במלואם את ההיבטים הרגולטוריים הנדרשים להסבר.
                </p>
                <p style={{ marginBottom: 0 }}>
                  למרות זאת, האווירה בשיחה הייתה חיובית והלקוח היה אדיב וקשוב. הנציג הציגה את יתרונות הפוליסה ואת השירותים הנלווים, מה שתרם לאמון הלקוח. הלקוח ביקש לוודא את גובה הפרמיה והיקף הכיסוי לפני קבלת החלטה. הנציגה התחייבה לשלוח סיכום כתוב עם פירוט התנאים והסברים נוספים. ניכר שהלקוח מתקרב לשלב קבלת ההחלטה אך דרוש לו חיזוק בהבנת המונחים.
                   בסך הכול – שיחה טובה וזורמת, עם צורך בהעמקת ההסבר הרגולטורי להמשך טיפול.
                </p>
              </div>
            ) : (
              <div style={{
                display: 'flex',
                gap: '56px',
                width: '100%',
                direction: 'rtl',
              }}>
                {(() => {
                  let contentData;
                  
                  if (selectedCategory === 'רגולציה') {
                    contentData = {
                      right: [
                        { title: 'שיקוף התהליך', dots: 1 } as { title: string; subtitle?: string; dots: number },
                        { title: 'פירוט תנאי הפוליסה', dots: 2 } as { title: string; subtitle?: string; dots: number },
                        { title: 'פירוט תנאי תשלומים', dots: 2 } as { title: string; subtitle?: string; dots: number },
                      ],
                      left: [
                        { title: 'בירור והתאמת צרכים', dots: 1 } as { title: string; subtitle?: string; dots: number },
                        { title: 'הצגת מידע מהותי על הפוליסה', dots: 2 } as { title: string; subtitle?: string; dots: number },
                        { title: 'הצגת השוואה בין הפוליסות', subtitle: 'היתה השוואה רק בין 2 פוליסות למרות שישנן 4 סוגים שונים', dots: 3 } as { title: string; subtitle?: string; dots: number },
                      ],
                    };
                  } else if (selectedCategory === 'מכירה') {
                    contentData = {
                      right: [
                        { title: 'בירור צרכים', dots: 1 } as { title: string; subtitle?: string; dots: number },
                        { title: 'הצגת ערך ויתרונות', dots: 2 } as { title: string; subtitle?: string; dots: number },
                        { title: 'טיפול בהתנגדויות', dots: 3 } as { title: string; subtitle?: string; dots: number },
                      ],
                      left: [
                        { title: 'התאמה מדויקת למוצר', dots: 1 } as { title: string; subtitle?: string; dots: number },
                        { title: 'יצירת דחיפות', dots: 2 } as { title: string; subtitle?: string; dots: number },
                        { title: 'סגירת מכירה', subtitle: 'לא בוצעה נסיון סגירה ישיר ומתאים', dots: 3 } as { title: string; subtitle?: string; dots: number },
                      ],
                    };
                  } else if (selectedCategory === 'שירותיות') {
                    contentData = {
                      right: [
                        { title: 'איכות שירות', dots: 1 } as { title: string; subtitle?: string; dots: number },
                        { title: 'זמן המתנה', dots: 1 } as { title: string; subtitle?: string; dots: number },
                        { title: 'מענה לצרכי הלקוח', dots: 2 } as { title: string; subtitle?: string; dots: number },
                      ],
                      left: [
                        { title: 'אמפתיה והקשבה', dots: 1 } as { title: string; subtitle?: string; dots: number },
                        { title: 'בהירות הסבר', dots: 2 } as { title: string; subtitle?: string; dots: number },
                        { title: 'מעקב ופתרון בעיה', subtitle: 'לא הוצע מעקב או פתרון חלופי', dots: 3 } as { title: string; subtitle?: string; dots: number },
                      ],
                    };
                  }

                  return (
                    <>
                      {/* Right Column */}
                      <div style={{
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0',
                        direction: 'rtl',
                      }}>
                        {contentData?.right.map((item, index) => (
                          <div key={index} style={{
                            background: 'var(--neutral-white, #ffffff)',
                            borderRadius: '16px',
                            padding: '16px 0',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            minHeight: '77px',
                            direction: 'rtl',
                          }}>
                            {item.subtitle ? (
                              <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '4px',
                                direction: 'rtl',
                              }}>
                                <p style={{
                                  fontFamily: 'var(--cc-font-primary)',
                                  fontSize: '16px',
                                  fontWeight: 500,
                                  color: 'var(--neutral-black)',
                                  textAlign: 'right',
                                  margin: 0,
                                }}>
                                  {item.title}
                                </p>
                                <p style={{
                                  fontFamily: 'var(--cc-font-primary)',
                                  fontSize: '16px',
                                  fontWeight: 400,
                                  color: 'var(--neutral-neutral-text-default)',
                                  textAlign: 'right',
                                  margin: 0,
                                }}>
                                  {item.subtitle}
                                </p>
                              </div>
                            ) : (
                              <p style={{
                                fontFamily: 'var(--cc-font-primary)',
                                fontSize: '16px',
                                fontWeight: 500,
                                color: 'var(--neutral-black)',
                                textAlign: 'right',
                                margin: 0,
                              }}>
                                {item.title}
                              </p>
                            )}
                            <div style={{
                              display: 'flex',
                              gap: '4px',
                              alignItems: 'center',
                            }}>
                              {Array.from({ length: item.dots }).map((_, i) => (
                                <div key={i} style={{ width: '8px', height: '8px', background: 'var(--neutral-black)', borderRadius: '50%' }} />
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Left Column */}
                      <div style={{
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0',
                        direction: 'rtl',
                      }}>
                        {contentData?.left.map((item, index) => (
                          <div key={index} style={{
                            background: 'var(--neutral-white, #ffffff)',
                            borderRadius: '16px',
                            padding: '16px 0',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            minHeight: '77px',
                            direction: 'rtl',
                          }}>
                            {item.subtitle ? (
                              <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '4px',
                                direction: 'rtl',
                              }}>
                                <p style={{
                                  fontFamily: 'var(--cc-font-primary)',
                                  fontSize: '16px',
                                  fontWeight: 500,
                                  color: 'var(--neutral-black)',
                                  textAlign: 'right',
                                  margin: 0,
                                }}>
                                  {item.title}
                                </p>
                                <p style={{
                                  fontFamily: 'var(--cc-font-primary)',
                                  fontSize: '16px',
                                  fontWeight: 400,
                                  color: 'var(--neutral-neutral-text-default)',
                                  textAlign: 'right',
                                  margin: 0,
                                }}>
                                  {item.subtitle}
                                </p>
                              </div>
                            ) : (
                              <p style={{
                                fontFamily: 'var(--cc-font-primary)',
                                fontSize: '16px',
                                fontWeight: 500,
                                color: 'var(--neutral-black)',
                                textAlign: 'right',
                                margin: 0,
                              }}>
                                {item.title}
                              </p>
                            )}
                            <div style={{
                              display: 'flex',
                              gap: '4px',
                              alignItems: 'center',
                            }}>
                              {Array.from({ length: item.dots }).map((_, i) => (
                                <div key={i} style={{ width: '8px', height: '8px', background: 'var(--neutral-black)', borderRadius: '50%' }} />
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </>
                  );
                })()}
              </div>
            )}
          </div>

          {/* Analysis Card */}
          <div style={{
            ...cardStyle,
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--spacing-spacing-large, 40px)',
            height: '218px',
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
              direction: 'rtl',
            }}>
              <h2 style={{
                fontFamily: 'var(--cc-font-primary)',
                fontSize: 'var(--cc-typography-h2-size)',
                fontWeight: 600,
                color: 'var(--neutral-black)',
                textAlign: 'right',
                margin: 0,
              }}>
                ניתוח שיחה
              </h2>
              
              <Button 
                variant="secondary" 
                size="default"
                onClick={() => onNavigate('transcription')}
              >
                הצג תמלול מלא
              </Button>
            </div>
            
            {/* Bar and Time Labels Container */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              width: '100%',
            }}>
            <div style={{
              display: 'flex',
              gap: '4px',
              width: '100%',
              height: '20px',
              direction: 'rtl',
              position: 'relative',
            }}>
              {/* Strip 1 - Danger */}
              <div 
                style={{
                  background: 'var(--danger-danger-bar, #d78e90)',
                  borderRadius: '8px',
                  width: '89px',
                  height: '20px',
                  cursor: 'pointer',
                  position: 'relative',
                }}
                onMouseEnter={() => setHoveredStrip(0)}
                onMouseLeave={() => setHoveredStrip(null)}
              >
                {hoveredStrip === 0 && (
                  <div style={{
                    position: 'absolute',
                    bottom: '28px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    zIndex: 1000,
                  }}>
                    <Tag label="מכירה" count={3} variant="danger" />
                    <div style={{
                      position: 'absolute',
                      bottom: '-6px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: 0,
                      height: 0,
                      borderLeft: '6px solid transparent',
                      borderRight: '6px solid transparent',
                      borderTop: '6px solid var(--neutral-white, #ffffff)',
                    }} />
                  </div>
                )}
              </div>

              {/* Strip 2 - Danger */}
              <div 
                style={{
                  background: 'var(--danger-danger-bar, #d78e90)',
                  borderRadius: '8px',
                  width: '46px',
                  height: '20px',
                  cursor: 'pointer',
                  position: 'relative',
                }}
                onMouseEnter={() => setHoveredStrip(1)}
                onMouseLeave={() => setHoveredStrip(null)}
              >
                {hoveredStrip === 1 && (
                  <div style={{
                    position: 'absolute',
                    bottom: '28px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    zIndex: 1000,
                  }}>
                    <Tag label="רגולציה" count={2} variant="danger" />
                    <div style={{
                      position: 'absolute',
                      bottom: '-6px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: 0,
                      height: 0,
                      borderLeft: '6px solid transparent',
                      borderRight: '6px solid transparent',
                      borderTop: '6px solid var(--neutral-white, #ffffff)',
                    }} />
                  </div>
                )}
              </div>

              {/* Strip 3 - Neutral */}
              <div style={{
                background: 'var(--neutral-neutral-surface, #f1f1f4)',
                borderRadius: '8px',
                flex: 1,
                height: '20px',
              }} />

              {/* Strip 4 - Success */}
              <div 
                style={{
                  background: 'var(--success-success-bar, #99d78e)',
                  borderRadius: '8px',
                  width: '46px',
                  height: '20px',
                  cursor: 'pointer',
                  position: 'relative',
                }}
                onMouseEnter={() => setHoveredStrip(3)}
                onMouseLeave={() => setHoveredStrip(null)}
              >
                {hoveredStrip === 3 && (
                  <div style={{
                    position: 'absolute',
                    bottom: '28px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    zIndex: 1000,
                  }}>
                    <Tag label="שירותיות" count={1} variant="success" />
                    <div style={{
                      position: 'absolute',
                      bottom: '-6px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: 0,
                      height: 0,
                      borderLeft: '6px solid transparent',
                      borderRight: '6px solid transparent',
                      borderTop: '6px solid var(--neutral-white, #ffffff)',
                    }} />
                  </div>
                )}
              </div>

              {/* Strip 5 - Neutral */}
              <div style={{
                background: 'var(--neutral-neutral-surface, #f1f1f4)',
                borderRadius: '8px',
                width: '159px',
                height: '20px',
              }} />

              {/* Strip 6 - Success */}
              <div 
                style={{
                  background: 'var(--success-success-bar, #99d78e)',
                  borderRadius: '8px',
                  width: '46px',
                  height: '20px',
                  cursor: 'pointer',
                  position: 'relative',
                }}
                onMouseEnter={() => setHoveredStrip(5)}
                onMouseLeave={() => setHoveredStrip(null)}
              >
                {hoveredStrip === 5 && (
                  <div style={{
                    position: 'absolute',
                    bottom: '28px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    zIndex: 1000,
                  }}>
                    <Tag label="מכירה" count={2} variant="success" />
                    <div style={{
                      position: 'absolute',
                      bottom: '-6px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: 0,
                      height: 0,
                      borderLeft: '6px solid transparent',
                      borderRight: '6px solid transparent',
                      borderTop: '6px solid var(--neutral-white, #ffffff)',
                    }} />
                  </div>
                )}
              </div>

              {/* Strip 7 - Neutral */}
              <div style={{
                background: 'var(--neutral-neutral-surface, #f1f1f4)',
                borderRadius: '8px',
                width: '159px',
                height: '20px',
              }} />

              {/* Strip 8 - Success */}
              <div 
                style={{
                  background: 'var(--success-success-bar, #99d78e)',
                  borderRadius: '8px',
                  width: '96px',
                  height: '20px',
                  cursor: 'pointer',
                  position: 'relative',
                }}
                onMouseEnter={() => setHoveredStrip(7)}
                onMouseLeave={() => setHoveredStrip(null)}
              >
                {hoveredStrip === 7 && (
                  <div style={{
                    position: 'absolute',
                    bottom: '28px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    zIndex: 1000,
                  }}>
                    <Tag label="רגולציה" count={1} variant="success" />
                    <div style={{
                      position: 'absolute',
                      bottom: '-6px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: 0,
                      height: 0,
                      borderLeft: '6px solid transparent',
                      borderRight: '6px solid transparent',
                      borderTop: '6px solid var(--neutral-white, #ffffff)',
                    }} />
                  </div>
                )}
              </div>
            </div>
            
            {/* Time Labels */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
              direction: 'rtl',
            }}>
              <span style={{
                fontFamily: 'var(--cc-font-primary)',
                fontSize: '12px',
                fontWeight: 400,
                color: 'var(--neutral-neutral-text-default)',
                textAlign: 'right',
              }}>
                10:10
              </span>
              <span style={{
                fontFamily: 'var(--cc-font-primary)',
                fontSize: '12px',
                fontWeight: 400,
                color: 'var(--neutral-neutral-text-default)',
                textAlign: 'left',
              }}>
                11:15
              </span>
            </div>
            </div>
          </div>

          {/* Events Table */}
          <Table
            title="סיכום אירועים לטיפול"
            titleCount={(() => {
              const allRows = [
                { category: 'מכירה' },
                { category: 'מכירה' },
                { category: 'שירות' },
                { category: 'שירות' },
                { category: 'רגולציה' },
                { category: 'רגולציה' },
              ];

              if (tableFilter === 'all') {
                return allRows.length;
              } else if (tableFilter === 'regulation') {
                return allRows.filter(row => row.category === 'רגולציה').length;
              } else if (tableFilter === 'service') {
                return allRows.filter(row => row.category === 'שירות').length;
              } else if (tableFilter === 'sales') {
                return allRows.filter(row => row.category === 'מכירה').length;
              }
              
              return allRows.length;
            })()}
            headerButton={{
              label: (
                <Dropdown
                  label=""
                  value={tableFilter}
                  options={filterOptions}
                  onChange={setTableFilter}
                  size="sm"
                />
              ) as any,
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
                key: 'category',
                header: 'קטגוריה',
                width: 138,
                align: 'right',
                render: (category: string) => (
                  <div style={{
                    border: '1px solid var(--neutral-neutral-90)',
                    borderRadius: '100px',
                    padding: '6px 16px',
                    display: 'inline-flex',
                    fontFamily: 'var(--cc-font-primary)',
                    fontSize: 'var(--cc-typography-body-sm-size)',
                    fontWeight: 500,
                    color: 'var(--neutral-black)',
                  }}>
                    {category}
                  </div>
                ),
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
            rows={(() => {
              const allRows = [
                {
                  title: {
                    title: 'פניה ישירה מידי בלי חימום של הלקוח',
                    subtitle: 'יפעת הללי',
                  },
                  category: 'מכירה',
                  quote: {
                    quotes: ['אנחנו פונים אליך כדי לחדש אותה', 'תרצה שנציג יחזור אליך?'],
                  },
                },
                {
                  title: {
                    title: 'הצגת אפשרויות נוספות לאחר פנייה ראשונית',
                    subtitle: 'שירה בלומברג',
                  },
                  category: 'מכירה',
                  quote: {
                    quotes: ['יש שירותים חדשים כדאי להצטרף', 'תרצה לשמוע על המבצע?'],
                  },
                },
                {
                  title: {
                    title: 'מענה על שאלות נוספות בנוגע לשירות',
                    subtitle: 'דניאל כהן',
                  },
                  category: 'שירות',
                  quote: {
                    quotes: ['אני ממליץ לבדוק את ההמלצות', 'זה יכול לעזור להחליט'],
                  },
                },
                {
                  title: {
                    title: 'הצעת פגישה כדי לדון בפרטים',
                    subtitle: 'מיכל לוי',
                  },
                  category: 'שירות',
                  quote: {
                    quotes: ['אפשר לערוך פגישה אישית', 'נבין את הצרכים שלך יותר טוב'],
                  },
                },
                {
                  title: {
                    title: 'הסבר על התנאים של הניסיון',
                    subtitle: 'רונית אברהם',
                  },
                  category: 'רגולציה',
                  quote: {
                    quotes: ['אנחנו מציעים ניסיון חינם', 'למשך חודש ללא התחייבות'],
                  },
                },
                {
                  title: {
                    title: 'הבהרת מדיניות החזר והבטחות',
                    subtitle: 'עומר דהן',
                  },
                  category: 'רגולציה',
                  quote: {
                    quotes: ['יש מדיניות החזר כספי', 'עד שישה חודשים מהרכישה'],
                  },
                },
              ];

              // Filter by category
              if (tableFilter === 'all') {
                return allRows;
              } else if (tableFilter === 'regulation') {
                return allRows.filter(row => row.category === 'רגולציה');
              } else if (tableFilter === 'service') {
                return allRows.filter(row => row.category === 'שירות');
              } else if (tableFilter === 'sales') {
                return allRows.filter(row => row.category === 'מכירה');
              }
              
              return allRows;
            })()}
          />
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallAnalysis;
