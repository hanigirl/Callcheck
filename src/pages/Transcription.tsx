import React from 'react';
import { TopBar, Sidebar, FaultCard, Dropdown } from '@design-system';
import logoIcon from '@design-system/icons/logo.svg';
import homeIcon from '@design-system/icons/home.svg';
import callsIcon from '@design-system/icons/calls.svg';
import callersIcon from '@design-system/icons/callers.svg';
import clientsIcon from '@design-system/icons/clients.svg';

type TranscriptionProps = {
  onNavigate: (page: 'dashboard' | 'calls' | 'transcription') => void;
};

type TranscriptMessage = {
  speaker: string;
  avatar: string;
  text: string;
  id: string;
};

const Transcription: React.FC<TranscriptionProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = React.useState<'events' | 'highlights'>('events');
  const [selectedCategory, setSelectedCategory] = React.useState<string>('all');
  const [highlightedQuote, setHighlightedQuote] = React.useState<string | null>(null);

  // Data for Events tab (red dots - issues)
  const eventsData = [
    {
      time: "00:10",
      title: "פניה ישירה מידי בלי חימום של הלקוח",
      description: "מומלץ לנהל סמול-טוק לפני הפנייה הישירה על מנת ליצור קשר אישי וחם התואם את הערכים של החברה",
      quote: "אנחנו פונים אליך כדי לחדש אותה",
      messageId: "msg-3"
    },
    {
      time: "01:25",
      title: "הצגת אפשרויות נוספות לאחר פנייה ראשונית",
      description: "הנציגה טענה שייתכן ונצטרך אבל חשוב לשקף ללקוח שמחובתנו לעשות כך",
      quote: "ייתכן שנצטרך להחיל תקופת אכשרה של כמה שבועות",
      messageId: "msg-3"
    },
    {
      time: "02:45",
      title: "אין דגש על ההבדלים בין הפוליסות",
      description: "הנציגה לא הדגישה מספיק את היתרונות והשוני בין הפוליסות השונות",
      quote: "זה די דומה למה שיש לך עכשיו",
      messageId: "msg-3"
    },
    {
      time: "04:10",
      title: "חוסר בהירות בהסבר על תקופת האכשרה",
      description: "הלקוח נותר עם שאלות לגבי תקופת האכשרה ומשמעותה",
      quote: "אני לא ממש מבין מה זה אומר",
      messageId: "msg-4"
    }
  ];

  // Data for Highlights tab (green dots - positive moments)
  const highlightsData = [
    {
      time: "00:15",
      title: "פתיחה חמה ומקצועית של השיחה",
      description: "הנציגה התחילה את השיחה בצורה מקצועית ונעימה, יצרה אווירה חיובית",
      quote: 'שלום, מדברת שירה מחברת הביטוח "מגן"',
      messageId: "msg-1"
    },
    {
      time: "02:30",
      title: "הסבר ברור על תהליך אישור רגולטורי",
      description: "הנציגה הסבירה בצורה מצוינת את התהליך הרגולטורי ושקיפות החברה",
      quote: "לא מדובר בהחלטה חד-צדדית שלנו, אלא בעדכון שעבר פיקוח",
      messageId: "msg-5"
    },
    {
      time: "03:45",
      title: "סבלנות והקשבה לשאלות הלקוח",
      description: "הנציגה הפגינה סבלנות רבה והקשיבה בקפידה לכל שאלות הלקוח",
      quote: "בטח, אני כאן כדי לענות על כל השאלות שלך",
      messageId: "msg-5"
    },
    {
      time: "05:20",
      title: "סיכום ברור של השיחה",
      description: "הנציגה סיכמה את השיחה בצורה ברורה ונתנה ללקוח תחושת ביטחון",
      quote: "אשלח לך את כל הפרטים במייל ואני כאן לכל שאלה",
      messageId: "msg-7"
    }
  ];

  const currentData = activeTab === 'events' ? eventsData : highlightsData;
  const dotColor = activeTab === 'events' ? 'var(--danger-danger-default, #bd4246)' : '#55BD42';
  const highlightColor = activeTab === 'events' ? 'rgba(189, 66, 70, 0.1)' : 'rgba(85, 189, 66, 0.1)';

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
    order: 1, // Rightmost in RTL
  };

  const contentAreaStyle: React.CSSProperties = {
    flex: 1,
    overflowY: 'auto',
    boxSizing: 'border-box',
    order: 2, // Left of Nav in RTL
    display: 'flex',
    background: '#FAFAFA',
    gap: '40px', // Gap between columns
  };

  const rightColumnStyle: React.CSSProperties = {
    flex: 2, // 2/3 width
    display: 'flex',
    flexDirection: 'column',
    gap: '40px',
    padding: '40px 71px 40px 0', // Padding only on the right column (top, right, bottom, left)
  };

  const leftColumnStyle: React.CSSProperties = {
    flex: 1, // 1/3 width
    minWidth: '320px',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    background: 'var(--neutral-white, #ffffff)',
    borderRight: '1px solid var(--neutral-neutral-95, #f1f1f4)',
    padding: '24px',
    boxSizing: 'border-box',
    height: '100%',
  };

  const transcriptMessages: TranscriptMessage[] = [
    { id: 'msg-1', speaker: 'יפעת הללי', text: 'שלום, מדברת שירה מחברת הביטוח "מגן". אני מתקשרת לגבי חידוש פוליסת הביטוח שלך. אפשר לוודא שאני מדבר עם גברת אלון?', avatar: '👤' },
    { id: 'msg-2', speaker: 'גפן אלון', text: 'כן, זה אני. על איזו פוליסה מדובר?', avatar: 'ג' },
    { id: 'msg-3', speaker: 'יפעת הללי', text: 'מדובר בפוליסת ביטוח הבריאות שלך, שמסתיימת בסוף החודש. אנחנו פונים אליך כדי לחדש אותה לשנה נוספת באותם תנאים, בכפוף לשינויים במחיר על פי עדכון תעריפים שאושר על ידי רשות שוק ההון. ייתכן שנצטרך להחיל תקופת אכשרה של כמה שבועות על מנת לאשר את הכיסוי המלא. זה די דומה למה שיש לך עכשיו אבל עם כמה שיפורים.', avatar: '👤' },
    { id: 'msg-4', speaker: 'גפן אלון', text: 'רגע, מה זה אומר "תעריפים שאושרו"? אני לא ממש מבין מה זה אומר ואיך זה משפיע על המחיר שלי?', avatar: 'ג' },
    { id: 'msg-5', speaker: 'יפעת הללי', text: 'לפי התקנות, כל שינוי בתעריף ביטוחי בריאות מחויב באישור רגולטורי של רשות שוק ההון. כלומר, לא מדובר בהחלטה חד-צדדית שלנו, אלא בעדכון שעבר פיקוח ואישור על ידי הרשות הממשלתית. בטח, אני כאן כדי לענות על כל השאלות שלך ולהסביר כל פרט שצריך.', avatar: '👤' },
    { id: 'msg-6', speaker: 'גפן אלון', text: 'הבנתי. ואם אני לא מחדש עכשיו, מה קורה?', avatar: 'ג' },
    { id: 'msg-7', speaker: 'יפעת הללי', text: 'במקרה שלא תחדש, הפוליסה תסתיים בתום התקופה, ולא תהיה לך רציפות ביטוחית. אשלח לך את כל הפרטים במייל ואני כאן לכל שאלה שתצוץ בהמשך.', avatar: '👤' },
  ];

  const handleQuoteClick = (messageId: string, quote: string) => {
    const element = document.getElementById(messageId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setHighlightedQuote(quote);
      // Remove highlight after 3 seconds
      setTimeout(() => setHighlightedQuote(null), 3000);
    }
  };

  return (
    <div style={appContainerStyle}>
      <TopBar userName="טל אטיאס" searchSuggestions={[]} />

      <div style={mainContentStyle}>
        <div style={sidebarContainerStyle}>
          <Sidebar
            logo={<img src={logoIcon} alt="Callcheck Logo" style={{ width: '31px', height: '23px', display: 'block' }} />}
            items={[
              { id: 'dashboard', label: 'בקרה', iconPath: homeIcon, isActive: false, onClick: () => onNavigate('dashboard') },
              { id: 'calls', label: 'שיחות', iconPath: callsIcon, isActive: true, onClick: () => onNavigate('calls') },
              { id: 'callers', label: 'נציגים', iconPath: callersIcon, isActive: false },
              { id: 'clients', label: 'לקוחות', iconPath: clientsIcon, isActive: false },
              { id: 'settings', label: 'הגדרות', iconPath: homeIcon, isActive: false },
            ]}
          />
        </div>

        <div style={contentAreaStyle}>
          {/* Right Column - Transcription Content (2/3) */}
          <div style={rightColumnStyle}>
             {/* Header */}
             <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', width: '100%' }}>
              <button onClick={() => onNavigate('calls')} style={{
                background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--cc-font-primary)',
                fontSize: '14px', color: 'var(--neutral-neutral-text-default)', padding: 0, display: 'flex',
                alignItems: 'center', gap: '4px',
              }}>
                <span>→</span>
                <span>שיחת מכירה עם לקוח על חידוש פוליסה קיימת</span>
              </button>
              <h1 style={{ fontFamily: 'var(--cc-font-primary)', fontSize: '32px', fontWeight: 600,
                color: 'var(--neutral-black)', textAlign: 'right', margin: 0, width: '100%' }}>
                תמלול השיחה
              </h1>
            </div>

            {/* Participants Card */}
            <div style={{
              background: 'var(--neutral-white)',
              borderRadius: '16px',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}>
              {/* Participants Section */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%' }}>
                <p style={{ 
                  fontFamily: 'var(--cc-font-primary)', 
                  fontSize: '16px', 
                  fontWeight: 600,
                  lineHeight: 'normal',
                  color: 'var(--neutral-neutral-text-default)', 
                  textAlign: 'right',
                  margin: 0,
                }}>
                  משתתפים
                </p>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                  {/* Participant 1 - Client */}
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
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
                      color: 'var(--neutral-neutral-text-default)',
                    }}>
                      ג
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                      <p style={{ 
                        fontFamily: 'var(--cc-font-primary)', 
                        fontSize: '12px', 
                        fontWeight: 400,
                        lineHeight: 'normal',
                        color: 'var(--neutral-black)', 
                        textAlign: 'right',
                        margin: 0,
                      }}>
                        לקוח/ה
                      </p>
                      <p style={{ 
                        fontFamily: 'var(--cc-font-primary)', 
                        fontSize: '14px', 
                        fontWeight: 400,
                        lineHeight: 'normal',
                        color: 'var(--neutral-neutral-text-default)', 
                        textAlign: 'right',
                        margin: 0,
                      }}>
                        גפן אלון
                      </p>
                    </div>
                  </div>

                  {/* Arrow Icon */}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 7L9 12L14 17" stroke="var(--neutral-neutral-text-default)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>

                  {/* Participant 2 - Agent */}
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      background: '#ddd',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                      <span style={{ fontSize: '20px' }}>👤</span>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                      <p style={{ 
                        fontFamily: 'var(--cc-font-primary)', 
                        fontSize: '12px', 
                        fontWeight: 400,
                        lineHeight: 'normal',
                        color: 'var(--neutral-black)', 
                        textAlign: 'right',
                        margin: 0,
                      }}>
                        נציג/ה
                      </p>
                      <p style={{ 
                        fontFamily: 'var(--cc-font-primary)', 
                        fontSize: '14px', 
                        fontWeight: 400,
                        lineHeight: 'normal',
                        color: 'var(--neutral-neutral-text-default)', 
                        textAlign: 'right',
                        margin: 0,
                      }}>
                        יפעת הללי
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Chat Area */}
            <div style={{
              background: 'var(--neutral-white)',
              borderRadius: '16px',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '32px',
            }}>
              {transcriptMessages.map((msg, i) => {
                const getHighlightedText = (text: string, quote: string | null) => {
                  if (!quote) return text;
                  const index = text.indexOf(quote);
                  if (index === -1) return text;
                  
                  return (
                    <>
                      {text.substring(0, index)}
                      <span style={{ 
                        background: highlightColor, 
                        padding: '2px 4px', 
                        borderRadius: '4px',
                        transition: 'background 0.3s ease'
                      }}>
                        {quote}
                      </span>
                      {text.substring(index + quote.length)}
                    </>
                  );
                };

                return (
                  <div 
                    key={i} 
                    id={msg.id}
                    style={{ 
                      display: 'flex', 
                      gap: '16px', 
                      alignItems: 'flex-start',
                      padding: '16px',
                      borderRadius: '8px',
                      transition: 'background 0.3s ease',
                    }}>
                    <div style={{ 
                      width: '40px', 
                      height: '40px', 
                      borderRadius: '50%', 
                      flexShrink: 0,
                      background: 'var(--neutral-neutral-surface, #f1f1f4)',
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      fontFamily: 'var(--cc-font-primary)',
                      fontSize: '20px', 
                      fontWeight: 600, 
                      color: 'var(--neutral-neutral-text-default)',
                    }}>
                      {msg.avatar}
                    </div>
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'flex-start' }}>
                      <p style={{ fontFamily: 'var(--cc-font-primary)', fontSize: '16px', fontWeight: 400, lineHeight: '1.5',
                        color: 'var(--neutral-black)', margin: 0, textAlign: 'right', direction: 'rtl', width: '100%' }}>
                        {getHighlightedText(msg.text, highlightedQuote)}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Left Column - Sidebar Content (1/3) */}
          <div style={leftColumnStyle}>
            {/* Tabs & Filters */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', direction: 'rtl' }}>
               <div style={{ display: 'flex', gap: '24px' }}>
                  <button 
                    onClick={() => setActiveTab('events')}
                    style={{
                      background: 'none', border: 'none', 
                      borderBottom: activeTab === 'events' ? '2px solid var(--neutral-black)' : '2px solid transparent',
                      padding: '8px 0', cursor: 'pointer', 
                      fontFamily: 'var(--cc-font-primary)', fontSize: '16px',
                      fontWeight: activeTab === 'events' ? 600 : 400, 
                      color: activeTab === 'events' ? 'var(--neutral-black)' : 'var(--neutral-neutral-text-default)',
                    }}
                  >
                    אירועים לטיפול
                  </button>
                  <button 
                    onClick={() => setActiveTab('highlights')}
                    style={{
                      background: 'none', border: 'none', 
                      borderBottom: activeTab === 'highlights' ? '2px solid var(--neutral-black)' : '2px solid transparent',
                      padding: '8px 0', cursor: 'pointer', 
                      fontFamily: 'var(--cc-font-primary)', fontSize: '16px',
                      fontWeight: activeTab === 'highlights' ? 600 : 400, 
                      color: activeTab === 'highlights' ? 'var(--neutral-black)' : 'var(--neutral-neutral-text-default)',
                    }}
                  >
                    היילייטס
                  </button>
               </div>
               <Dropdown
                 value={selectedCategory}
                 options={[
                   { label: 'כל הקטגוריות', value: 'all' },
                   { label: 'רגולציה', value: 'regulation' },
                   { label: 'מכירות', value: 'sales' },
                   { label: 'שירות', value: 'service' },
                 ]}
                 onChange={setSelectedCategory}
                 size="sm"
               />
            </div>

            {/* Cards List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%', alignItems: 'stretch' }}>
              {currentData.map((card, index) => (
                <FaultCard 
                  key={index}
                  time={card.time} 
                  title={card.title}
                  description={card.description}
                  quote={card.quote}
                  dotColor={dotColor}
                  onQuoteClick={() => handleQuoteClick(card.messageId, card.quote)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transcription;
