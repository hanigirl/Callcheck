import React from 'react';
import { Button } from './Button';
import { Badge } from './Badge';

// Table cell renderer type
export type TableCellRenderer = (data: any, rowIndex: number) => React.ReactNode;

// Table column definition
export type TableColumn = {
  key: string;
  header: string;
  width?: string | number;
  render?: TableCellRenderer;
  align?: 'left' | 'right' | 'center';
};

// Table row data type
export type TableRow = {
  [key: string]: any;
};

// Table Row component (separate component to handle hover state)
type TableRowProps = {
  row: TableRow;
  rowIndex: number;
  columns: TableColumn[];
  rowStyle: React.CSSProperties;
  rowHoverStyle: React.CSSProperties;
  cellStyle: (width?: string | number, align?: 'left' | 'right' | 'center') => React.CSSProperties;
  onRowClick?: (row: TableRow, index: number) => void;
};

function TableRow({
  row,
  rowIndex,
  columns,
  rowStyle,
  rowHoverStyle,
  cellStyle,
  onRowClick,
}: TableRowProps) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      style={isHovered ? rowHoverStyle : rowStyle}
      onClick={() => onRowClick?.(row, rowIndex)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {columns.map((column) => (
        <div key={column.key} style={cellStyle(column.width, column.align)}>
          {column.render
            ? column.render(row[column.key], rowIndex)
            : <span style={{ fontSize: 'var(--font-size-16)', fontFamily: 'var(--cc-font-display)', color: 'var(--gray-gray-100)', textAlign: column.align || 'right' }}>{String(row[column.key] || '')}</span>
          }
        </div>
      ))}
    </div>
  );
}

// Quote icon component (blue)
const QuoteIcon = () => (
  <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 4.5C0 2.567 1.567 1 3.5 1H4C5.10457 1 6 1.89543 6 3V9.5C6 11.433 4.433 13 2.5 13H2C0.895431 13 0 12.1046 0 11V4.5Z" fill="#4659E4"/>
    <path d="M7 4.5C7 2.567 8.567 1 10.5 1H11C12.1046 1 13 1.89543 13 3V9.5C13 11.433 11.433 13 9.5 13H9C7.89543 13 7 12.1046 7 11V4.5Z" fill="#4659E4"/>
  </svg>
);

// Quote chip component for displaying quotes - matches Figma design
const QuoteChip = ({ text, onClick }: { text: string; onClick?: () => void }) => {
  const chipStyle: React.CSSProperties = {
    background: 'var(--neutral-neutral-97, #fafafa)',
    borderRadius: 'var(--radius-radius-16, 16px)',
    padding: '16px 20px',
    display: 'flex',
    gap: '12px',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '247px',
    height: '56px',
    flexShrink: 0,
    direction: 'rtl',
    cursor: onClick ? 'pointer' : 'default',
    boxSizing: 'border-box',
  };

  const textStyle: React.CSSProperties = {
    flex: 1,
    minWidth: 0,
    fontSize: '16px',
    fontFamily: 'var(--cc-font-primary)',
    fontWeight: 400, // Regular
    lineHeight: 'normal',
    color: 'var(--neutral-black, #17171d)',
    textAlign: 'right',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    height: '24px',
  };

  const iconStyle: React.CSSProperties = {
    width: '13px',
    height: '14px',
    flexShrink: 0,
  };

  return (
    <div style={chipStyle} onClick={onClick}>
      <p style={textStyle}>{text}</p>
      <div style={iconStyle}>
        <QuoteIcon />
      </div>
    </div>
  );
};

// Quotes container - displays multiple quotes with "+X נוספים" text
type QuotesContainerProps = {
  quotes: string[];
  maxVisible?: number;
  onQuoteClick?: (quote: string, index: number) => void;
};

const QuotesContainer = ({ quotes, maxVisible = 2, onQuoteClick }: QuotesContainerProps) => {
  const containerStyle: React.CSSProperties = {
    display: 'flex',
    gap: '8px',
    alignItems: 'center',
    justifyContent: 'flex-end',
    direction: 'rtl',
    flex: 1,
    minWidth: 0,
  };

  const moreTextStyle: React.CSSProperties = {
    fontSize: '14px',
    fontFamily: 'var(--cc-font-primary)',
    fontWeight: 400,
    lineHeight: 'normal',
    color: 'var(--neutral-black, #17171d)',
    whiteSpace: 'nowrap',
    textAlign: 'right',
  };

  const visibleQuotes = quotes.slice(0, maxVisible);
  const remainingCount = quotes.length - maxVisible;

  return (
    <div style={containerStyle}>
      {/* Show visible quotes - first quote on right */}
      {visibleQuotes.map((quote, index) => (
        <QuoteChip 
          key={index} 
          text={quote} 
          onClick={onQuoteClick ? () => onQuoteClick(quote, index) : undefined}
        />
      ))}
      {/* Show "+X נוספים" if there are more quotes */}
      {remainingCount > 0 && (
        <span style={moreTextStyle}>{remainingCount}+ נוספים</span>
      )}
    </div>
  );
};

// Event count badge component - matches Figma design with danger surface
const EventCountBadge = ({ count }: { count: number }) => {
  const badgeStyle: React.CSSProperties = {
    background: 'var(--danger-danger-surface, #f8eced)',
    borderRadius: '100px',
    width: '32px',
    height: '32px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '4px',
    boxSizing: 'border-box',
  };

  const textStyle: React.CSSProperties = {
    fontSize: '16px',
    fontFamily: 'var(--cc-font-primary)',
    fontWeight: 500, // Medium
    lineHeight: '100%',
    color: 'var(--danger-danger-400, #973538)',
    textAlign: 'center',
  };

  return (
    <div style={badgeStyle}>
      <span style={textStyle}>{count}</span>
    </div>
  );
};

// Table component props
export type TableProps = {
  title?: string;
  titleCount?: number;
  headerButton?: {
    label: string | React.ReactNode;
    onClick?: () => void;
  };
  columns: TableColumn[];
  rows: TableRow[];
  className?: string;
  onRowClick?: (row: TableRow, index: number) => void;
};

export function Table({
  title,
  titleCount,
  headerButton,
  columns,
  rows,
  className = '',
  onRowClick,
}: TableProps) {
  // Table container style - responsive
  const tableStyle: React.CSSProperties = {
    background: 'var(--gray-white)',
    borderRadius: 'var(--radius-radius-16)',
    padding: 'var(--spacing-spacing-24, 24px)',
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--spacing-spacing-8)',
    width: '100%',
    maxWidth: '100%',
    boxSizing: 'border-box',
    direction: 'rtl',
    overflow: 'hidden', // Prevent content from overflowing
    alignItems: 'flex-end', // Align table content to the right
  };

  // Header style - RTL: title on right, button on left
  const headerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 var(--spacing-spacing-24)',
    width: '100%',
    direction: 'rtl',
    // In RTL: first element (title) appears on right, second element (button) appears on left
  };

  // Title style
  const titleStyle: React.CSSProperties = {
    fontSize: 'var(--font-size-24)',
    fontFamily: 'var(--cc-font-display)',
    fontWeight: '600', // DemiBold
    lineHeight: '1',
    color: 'var(--gray-gray-100)',
    textAlign: 'right',
    direction: 'rtl',
  };

  const titleCountStyle: React.CSSProperties = {
    fontSize: 'var(--font-size-16)',
    fontFamily: 'var(--cc-font-display)',
    fontWeight: 'normal',
    color: 'var(--gray-gray-300)',
    marginRight: '4px',
  };

  // Column headers style - RTL: aligned right to left, responsive
  const columnHeadersStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start', // In RTL with direction:'rtl', flex-start is visual right
    padding: '0 var(--spacing-spacing-24)',
    gap: '0',
    width: '100%',
    maxWidth: '100%',
    direction: 'rtl',
    overflow: 'hidden',
    boxSizing: 'border-box',
  };

  const columnHeaderStyle = (width?: string | number, align?: 'left' | 'right' | 'center'): React.CSSProperties => ({
    fontSize: 'var(--font-size-12)',
    fontFamily: 'var(--cc-font-display)',
    fontWeight: 'normal',
    color: 'var(--gray-gray-300)',
    textAlign: align || 'right',
    padding: 0,
    width: width ? (typeof width === 'number' ? `${width}px` : width) : 'auto',
    minWidth: 0, // Allow shrinking
    flexShrink: 1, // Allow shrinking when needed
    flexBasis: width ? (typeof width === 'number' ? `${width}px` : width) : 'auto',
    maxWidth: '100%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    direction: 'rtl',
    boxSizing: 'border-box',
  });

  // Row style - RTL: aligned right to left, responsive
  const rowStyle: React.CSSProperties = {
    background: 'var(--gray-white)',
    borderBottom: '1px solid var(--gray-gray-950)',
    padding: '16px 24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start', // In RTL with direction:'rtl', flex-start is visual right
    gap: '0',
    width: '100%',
    maxWidth: '100%',
    boxSizing: 'border-box',
    cursor: onRowClick ? 'pointer' : 'default',
    transition: 'background 0.2s ease',
    direction: 'rtl',
    overflow: 'hidden',
  };

  const rowHoverStyle: React.CSSProperties = {
    ...rowStyle,
    background: 'var(--gray-gray-970)',
  };

  const cellStyle = (width?: string | number, align?: 'left' | 'right' | 'center'): React.CSSProperties => ({
    padding: '0',
    display: 'flex',
    alignItems: 'center',
    // In RTL with direction: 'rtl': flex-start is visual RIGHT, flex-end is visual LEFT
    // align 'right' -> flex-start (visual right in RTL)
    // align 'left' -> flex-end (visual left in RTL)
    justifyContent: align === 'center' ? 'center' : align === 'left' ? 'flex-end' : 'flex-start',
    width: width ? (typeof width === 'number' ? `${width}px` : width) : 'auto',
    minWidth: 0, // Allow shrinking
    flexShrink: 1, // Allow shrinking when needed
    flexBasis: width ? (typeof width === 'number' ? `${width}px` : width) : 'auto',
    maxWidth: '100%',
    overflow: 'hidden',
    direction: 'rtl',
    textAlign: align || 'right',
    boxSizing: 'border-box',
  });

  return (
    <div className={className} style={tableStyle}>
      {/* Header with button and title - RTL: title on right, button on left */}
      {(headerButton || title) && (
        <div style={headerStyle}>
          {title && (
            <div style={{ display: 'flex', alignItems: 'baseline', direction: 'rtl' }}>
              <h2 style={titleStyle}>{title}</h2>
              {titleCount !== undefined && (
                <span style={titleCountStyle}> ({titleCount})</span>
              )}
            </div>
          )}
          {headerButton && (
            typeof headerButton.label === 'string' ? (
              <Button
                variant="secondary"
                size="default"
                onClick={headerButton.onClick}
              >
                {headerButton.label}
              </Button>
            ) : (
              <div style={{ display: 'flex', alignItems: 'center' }}>
                {headerButton.label}
              </div>
            )
          )}
        </div>
      )}

      {/* Column Headers */}
      <div style={columnHeadersStyle}>
        {columns.map((column) => (
          <div key={column.key} style={cellStyle(column.width, column.align)}>
            <div style={columnHeaderStyle(column.width, column.align)}>
              {column.header}
            </div>
          </div>
        ))}
      </div>

      {/* Rows */}
      <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        {rows.map((row, rowIndex) => (
          <TableRow
            key={rowIndex}
            row={row}
            rowIndex={rowIndex}
            columns={columns}
            rowStyle={rowStyle}
            rowHoverStyle={rowHoverStyle}
            cellStyle={cellStyle}
            onRowClick={onRowClick}
          />
        ))}
      </div>
    </div>
  );
}

// Export helper components for common use cases
Table.QuoteChip = QuoteChip;
Table.QuotesContainer = QuotesContainer;
Table.EventCountBadge = EventCountBadge;

