import React from 'react';
import { CategoryStats } from '@design-system';

type CategoryStatsDemoProps = {
  onNavigate: (page: 'dashboard' | 'calls' | 'transcription' | 'category-stats') => void;
};

const CategoryStatsDemo: React.FC<CategoryStatsDemoProps> = ({ onNavigate }) => {
  // Sample data matching the Figma design
  const categoryData = [
    { label: 'שירותיות', value: 42, color: 'dark' as const },
    { label: 'רגוליציה', value: 84, color: 'medium' as const },
    { label: 'מכירה', value: 56, color: 'light' as const },
  ];

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'var(--cc-color-page)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px',
        gap: '32px',
      }}
    >
      {/* Page Title */}
      <h1
        style={{
          fontFamily: 'var(--cc-font-display)',
          fontSize: '32px',
          fontWeight: 600,
          color: 'var(--gray-gray-100)',
          textAlign: 'center',
        }}
      >
        CategoryStats Component Demo
      </h1>

      {/* Back button */}
      <button
        onClick={() => onNavigate('dashboard')}
        style={{
          fontFamily: 'var(--cc-font-display)',
          fontSize: '14px',
          padding: '8px 16px',
          background: 'var(--gray-white)',
          border: '1px solid var(--gray-gray-800)',
          borderRadius: '8px',
          cursor: 'pointer',
          color: 'var(--gray-gray-300)',
        }}
      >
        ← Back to Dashboard
      </button>

      {/* Component Display */}
      <div
        style={{
          display: 'flex',
          gap: '24px',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        {/* Default Example (matching Figma) */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
          <span
            style={{
              fontFamily: 'var(--cc-font-display)',
              fontSize: '14px',
              color: 'var(--gray-gray-500)',
            }}
          >
            Default (Figma Design)
          </span>
          <CategoryStats
            title="ציון שבועי ממוצע למוקד"
            sectionTitle="לפי קטגוריה"
            items={categoryData}
          />
        </div>

        {/* Custom Example */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
          <span
            style={{
              fontFamily: 'var(--cc-font-display)',
              fontSize: '14px',
              color: 'var(--gray-gray-500)',
            }}
          >
            Custom Data Example
          </span>
          <CategoryStats
            title="ביצועים לפי מחלקה"
            sectionTitle="סיכום חודשי"
            items={[
              { label: 'שירות', value: 92, color: 'dark' },
              { label: 'מכירות', value: 78, color: 'medium' },
              { label: 'תמיכה', value: 65, color: 'light' },
              { label: 'חידושים', value: 88, color: 'dark' },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default CategoryStatsDemo;
