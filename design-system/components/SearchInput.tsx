import React, { useState, useRef, useEffect } from 'react';

// Search Icon Component
const SearchIcon = () => (
  <div style={{ width: '24px', height: '24px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21 21L15 15M3 10C3 10.9193 3.18106 11.8295 3.53284 12.6788C3.88463 13.5281 4.40024 14.2997 5.05025 14.9497C5.70026 15.5998 6.47194 16.1154 7.32122 16.4672C8.1705 16.8189 9.08075 17 10 17C10.9193 17 11.8295 16.8189 12.6788 16.4672C13.5281 16.1154 14.2997 15.5998 14.9497 14.9497C15.5998 14.2997 16.1154 13.5281 16.4672 12.6788C16.8189 11.8295 17 10.9193 17 10C17 9.08075 16.8189 8.1705 16.4672 7.32122C16.1154 6.47194 15.5998 5.70026 14.9497 5.05025C14.2997 4.40024 13.5281 3.88463 12.6788 3.53284C11.8295 3.18106 10.9193 3 10 3C9.08075 3 8.1705 3.18106 7.32122 3.53284C6.47194 3.88463 5.70026 4.40024 5.05025 5.05025C4.40024 5.70026 3.88463 6.47194 3.53284 7.32122C3.18106 8.1705 3 9.08075 3 10Z"
        stroke="var(--gray-gray-700)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);

export type SearchSuggestion = {
  id: string;
  label: string;
  type: 'שיחה' | 'נציג' | 'לקוח';
  highlightedText?: string; // Optional text to highlight in DemiBold
};

type SearchInputProps = {
  placeholder?: string;
  suggestions?: SearchSuggestion[];
  onSearch?: (query: string) => void;
  onSuggestionSelect?: (suggestion: SearchSuggestion) => void;
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
};

export function SearchInput({
  placeholder = 'חפש לקוח, שיחה או מילת מפתח...',
  suggestions = [],
  onSearch,
  onSuggestionSelect,
  className = '',
  value: controlledValue,
  onChange: controlledOnChange,
}: SearchInputProps) {
  const [inputValue, setInputValue] = useState(controlledValue || '');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState<SearchSuggestion[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Use controlled or uncontrolled value
  const value = controlledValue !== undefined ? controlledValue : inputValue;
  const setValue = controlledOnChange || setInputValue;

  // Filter suggestions based on input
  useEffect(() => {
    if (value.length > 0 && suggestions.length > 0) {
      const filtered = suggestions.filter((suggestion) =>
        suggestion.label.toLowerCase().includes(value.toLowerCase()) ||
        suggestion.type.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredSuggestions(filtered.slice(0, 10)); // Limit to 10 results
    } else {
      setFilteredSuggestions([]);
    }
  }, [value, suggestions]);

  // Show/hide dropdown
  useEffect(() => {
    setShowSuggestions(value.length > 0 && filteredSuggestions.length > 0);
  }, [value, filteredSuggestions]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    setSelectedIndex(-1);
  };

  const handleSuggestionClick = (suggestion: SearchSuggestion) => {
    setValue(suggestion.label);
    setShowSuggestions(false);
    setSelectedIndex(-1);
    onSuggestionSelect?.(suggestion);
    onSearch?.(suggestion.label);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) =>
        prev < filteredSuggestions.length - 1 ? prev + 1 : prev
      );
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : -1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (selectedIndex >= 0 && filteredSuggestions[selectedIndex]) {
        handleSuggestionClick(filteredSuggestions[selectedIndex]);
      } else {
        onSearch?.(value);
        setShowSuggestions(false);
      }
    } else if (e.key === 'Escape') {
      setShowSuggestions(false);
      setSelectedIndex(-1);
    }
  };

  const handleInputFocus = () => {
    if (value.length > 0 && filteredSuggestions.length > 0) {
      setShowSuggestions(true);
    }
  };

  // Highlight text in label - if highlightedText is provided, use it; otherwise highlight search query
  const renderHighlightedLabel = (label: string, highlightedText?: string) => {
    const textToHighlight = highlightedText || value;
    
    if (!textToHighlight || !textToHighlight.length) {
      return <span>{label}</span>;
    }

    // Find the text to highlight (case-insensitive)
    const lowerLabel = label.toLowerCase();
    const lowerHighlight = textToHighlight.toLowerCase();
    const index = lowerLabel.indexOf(lowerHighlight);

    if (index === -1) {
      return <span>{label}</span>;
    }

    const before = label.substring(0, index);
    const highlighted = label.substring(index, index + textToHighlight.length);
    const after = label.substring(index + textToHighlight.length);

    return (
      <>
        {before}
        <span style={{ fontWeight: '600', fontFamily: 'var(--cc-font-display)' }}>
          {highlighted}
        </span>
        {after}
      </>
    );
  };

  // Input wrapper style
  const inputWrapperStyle: React.CSSProperties = {
    position: 'relative',
    width: '100%',
    height: '48px',
    background: 'var(--gray-white)',
    border: '1px solid var(--gray-gray-950)',
    borderRadius: '8px',
    padding: '13px 20px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    justifyContent: 'flex-end',
    direction: 'rtl',
  };

  // Input style
  const inputStyle: React.CSSProperties = {
    flex: 1,
    border: 'none',
    outline: 'none',
    background: 'transparent',
    fontSize: '16px',
    fontFamily: 'var(--cc-font-display)',
    fontWeight: 'normal',
    color: 'var(--gray-gray-100)',
    textAlign: 'right',
    padding: 0,
    direction: 'rtl',
  };

  // Dropdown style
  const dropdownStyle: React.CSSProperties = {
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    marginTop: '4px',
    background: 'var(--gray-white)',
    border: '1px solid var(--gray-gray-950)',
    borderRadius: '8px',
    boxShadow: 'var(--cc-shadow-float)',
    maxHeight: '360px', // 10 items * 36px
    overflowY: 'auto',
    zIndex: 1001,
    direction: 'rtl',
  };

  // Suggestion item style
  const getSuggestionItemStyle = (index: number): React.CSSProperties => ({
    height: '36px',
    padding: '6px 16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottom: index < filteredSuggestions.length - 1 ? '1px solid var(--gray-gray-950)' : 'none',
    cursor: 'pointer',
    background: selectedIndex === index ? 'var(--gray-gray-970)' : 'transparent',
    transition: 'background 0.15s ease',
    direction: 'rtl', // RTL so type label appears on left
  });

  // Type label style (left side - appears on the left visually in RTL)
  const typeLabelStyle: React.CSSProperties = {
    fontSize: '12px',
    fontFamily: 'var(--cc-font-display)',
    fontWeight: 'normal',
    color: 'var(--gray-gray-700)',
    flexShrink: 0,
    whiteSpace: 'nowrap',
    lineHeight: 'normal',
  };

  // Main label style (right side - appears on the right visually in RTL)
  const mainLabelStyle: React.CSSProperties = {
    fontSize: '16px',
    fontFamily: 'var(--cc-font-display)',
    fontWeight: 'normal',
    color: 'var(--gray-gray-100)',
    textAlign: 'right',
    flex: 1,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  };

  return (
    <div className={`cc-search-input ${className}`} style={{ position: 'relative', width: '100%' }}>
      <div style={inputWrapperStyle}>
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          style={inputStyle}
        />
        <SearchIcon />
      </div>

      {/* Suggestions Dropdown */}
      {showSuggestions && filteredSuggestions.length > 0 && (
        <div ref={dropdownRef} style={dropdownStyle}>
          {filteredSuggestions.map((suggestion, index) => (
            <div
              key={suggestion.id}
              style={getSuggestionItemStyle(index)}
              onClick={() => handleSuggestionClick(suggestion)}
              onMouseEnter={() => setSelectedIndex(index)}
            >
              {/* Main label - appears on the right */}
              <div style={mainLabelStyle}>
                {renderHighlightedLabel(
                  suggestion.label, 
                  suggestion.highlightedText || (value.length > 0 ? value : undefined)
                )}
              </div>
              
              {/* Type label - appears on the left (first in RTL) */}
              <div style={typeLabelStyle}>{suggestion.type}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
