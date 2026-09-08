import React from 'react';

/**
 * FileFormatIcon - Elegant, crisp vector file icons for PDF, DOCX, XLSX, etc.
 * Replaces plain text badges with authentic file document icons.
 */
export default function FileFormatIcon({ format = 'PDF', size = 22, title = '' }) {
  const fmt = (format || '').toUpperCase().trim();
  const width = size;
  const height = Math.round(size * 1.25);
  const displayTitle = title || `${fmt} document`;

  // Color profiles
  const config = {
    PDF: {
      bg: '#DC2626',
      fold: '#B91C1C',
      flap: '#FCA5A5',
      accent: '#991B1B',
      text: 'PDF'
    },
    DOCX: {
      bg: '#2563EB',
      fold: '#1D4ED8',
      flap: '#93C5FD',
      accent: '#1E40AF',
      text: 'DOC'
    },
    DOC: {
      bg: '#2563EB',
      fold: '#1D4ED8',
      flap: '#93C5FD',
      accent: '#1E40AF',
      text: 'DOC'
    },
    XLSX: {
      bg: '#16A34A',
      fold: '#15803D',
      flap: '#86EFAC',
      accent: '#166534',
      text: 'XLS'
    },
    XLS: {
      bg: '#16A34A',
      fold: '#15803D',
      flap: '#86EFAC',
      accent: '#166534',
      text: 'XLS'
    },
    ZIP: {
      bg: '#D97706',
      fold: '#B45309',
      flap: '#FDE68A',
      accent: '#92400E',
      text: 'ZIP'
    },
    DEFAULT: {
      bg: '#64748B',
      fold: '#475569',
      flap: '#CBD5E1',
      accent: '#334155',
      text: fmt.slice(0, 3) || 'FILE'
    }
  };

  const theme = config[fmt] || config.DEFAULT;

  return (
    <div
      title={displayTitle}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        userSelect: 'none',
        lineHeight: 1
      }}
    >
      <svg
        width={width}
        height={height}
        viewBox="0 0 20 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.18))',
          overflow: 'visible'
        }}
      >
        {/* Main Paper Body with folded top-right corner */}
        <path
          d="M3 1C1.89543 1 1 1.89543 1 3V22C1 23.1046 1.89543 24 3 24H17C18.1046 24 19 23.1046 19 22V7L13 1H3Z"
          fill={theme.bg}
        />

        {/* Fold Under-shadow */}
        <path
          d="M13 1V5.8C13 6.46 13.54 7 14.2 7H19L13 1Z"
          fill={theme.fold}
        />

        {/* Fold Flap (Lighter paper back) */}
        <path
          d="M13 1L19 7H14.5C13.67 7 13 6.33 13 5.5V1Z"
          fill={theme.flap}
          fillOpacity="0.85"
        />

        {/* Micro file decoration / label plate */}
        {fmt === 'DOCX' || fmt === 'DOC' ? (
          // Word stylized 'W' + micro lines
          <g>
            <path
              d="M5 12L6.8 18.5H8.2L9.5 13.8L10.8 18.5H12.2L14 12H12.6L11.5 16.5L10.2 12H8.8L7.5 16.5L6.4 12H5Z"
              fill="#FFFFFF"
            />
            <rect x="4.5" y="20.5" width="10" height="1" rx="0.5" fill="#FFFFFF" fillOpacity="0.65" />
          </g>
        ) : fmt === 'PDF' ? (
          // PDF stylized mark + label
          <g>
            <rect x="2.5" y="11" width="14" height="7.5" rx="1.5" fill="#000000" fillOpacity="0.18" />
            <text
              x="9.5"
              y="16.5"
              fill="#FFFFFF"
              fontSize="5.2"
              fontWeight="900"
              fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif"
              textAnchor="middle"
              letterSpacing="0.4px"
            >
              PDF
            </text>
            <rect x="4" y="20.5" width="11" height="1" rx="0.5" fill="#FFFFFF" fillOpacity="0.75" />
          </g>
        ) : fmt === 'XLSX' || fmt === 'XLS' ? (
          // Excel stylized 'X' + grid
          <g>
            <path
              d="M6 12L8.5 15.5L6 19H7.6L9.3 16.6L11 19H12.6L10.1 15.5L12.6 12H11L9.3 14.4L7.6 12H6Z"
              fill="#FFFFFF"
            />
            <rect x="4.5" y="20.5" width="10" height="1" rx="0.5" fill="#FFFFFF" fillOpacity="0.65" />
          </g>
        ) : (
          // Default: format text
          <g>
            <text
              x="10"
              y="16"
              fill="#FFFFFF"
              fontSize="4.8"
              fontWeight="900"
              fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif"
              textAnchor="middle"
              letterSpacing="0.3px"
            >
              {theme.text}
            </text>
            <rect x="4.5" y="19" width="10" height="1" rx="0.5" fill="#FFFFFF" fillOpacity="0.65" />
          </g>
        )}
      </svg>
    </div>
  );
}
