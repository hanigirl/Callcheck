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

// Quote chip component for displaying quotes - responsive
const QuoteChip = ({ text, onClick }: { text: string; onClick?: () => void }) => {
  const chipStyle: React.CSSProperties = {
    background: 'var(--gray-gray-970)',
    borderRadius: 'var(--radius-radius-16)',
    padding: '16px 20px',
    display: 'flex',
    gap: '12px',
    alignItems: 'center',
    justifyContent: 'flex-end',
    minWidth: '120px', // Minimum width for readability
    maxWidth: '247px',
    flexShrink: 1, // Allow shrinking
    flexBasis: '247px',
    direction: 'rtl',
    cursor: onClick ? 'pointer' : 'default',
    boxSizing: 'border-box',
  };

  const textStyle: React.CSSProperties = {
    flex: 1,
    minWidth: 0, // Allow text to shrink
    fontSize: 'var(--font-size-16)',
    fontFamily: 'var(--cc-font-display)',
    fontWeight: 'normal',
    color: 'var(--gray-gray-100)',
    textAlign: 'right',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  };

  const iconStyle: React.CSSProperties = {
    width: '13px',
    height: '14px',
    flexShrink: 0,
  };

  // Simple quote icon (blue)
  const QuoteIcon = () => (
    <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.5 7C2.5 5.89543 3.39543 5 4.5 5H5.5C6.60457 5 7.5 5.89543 7.5 7V10.5C7.5 11.6046 6.60457 12.5 5.5 12.5H4.5C3.39543 12.5 2.5 11.6046 2.5 10.5V7Z" fill="#4659E4"/>
      <path d="M8.5 7C8.5 5.89543 9.39543 5 10.5 5H11.5C12.6046 5 13.5 5.89543 13.5 7V10.5C13.5 11.6046 12.6046 12.5 11.5 12.5H10.5C9.39543 12.5 8.5 11.6046 8.5 10.5V7Z" fill="#4659E4"/>
    </svg>
  );

  return (
    <div style={chipStyle} onClick={onClick}>
      <p style={textStyle}>{text}</p>
      <div style={iconStyle}>
        <QuoteIcon />
      </div>
    </div>
  );
};

// Event count badge component
const EventCountBadge = ({ count }: { count: number }) => {
  return <Badge count={count} variant="neutral" />;
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
    padding: 'var(--spacing-spacing-24)',
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
    padding: '16px var(--spacing-spacing-24)',
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
Table.EventCountBadge = EventCountBadge;

