import React from 'react';
import { useTranslation } from '../i18n/LanguageContext';
import { useTheme } from '../theme/ThemeContext';

// Vector SVG Flags for crisp rendering on all platforms
const FlagUA = () => (
  <svg width="22" height="15" viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ borderRadius: '2px', display: 'block', flexShrink: 0, pointerEvents: 'none' }}>
    <rect width="22" height="7.5" fill="#0057B7" />
    <rect y="7.5" width="22" height="7.5" fill="#FFD700" />
    <rect width="22" height="15" rx="1.5" stroke="rgba(0,0,0,0.15)" strokeWidth="0.5" />
  </svg>
);

const FlagGB = () => (
  <svg width="22" height="15" viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ borderRadius: '2px', display: 'block', flexShrink: 0, pointerEvents: 'none' }}>
    <rect width="22" height="15" fill="#012169" />
    <path d="M0 0L22 15M22 0L0 15" stroke="#FFFFFF" strokeWidth="2.5" />
    <path d="M0 0L22 15M22 0L0 15" stroke="#C8102E" strokeWidth="1.5" />
    <path d="M11 0V15M0 7.5H22" stroke="#FFFFFF" strokeWidth="4" />
    <path d="M11 0V15M0 7.5H22" stroke="#C8102E" strokeWidth="2.5" />
    <rect width="22" height="15" rx="1.5" stroke="rgba(0,0,0,0.15)" strokeWidth="0.5" />
  </svg>
);

const FlagPL = () => (
  <svg width="22" height="15" viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ borderRadius: '2px', display: 'block', flexShrink: 0, pointerEvents: 'none' }}>
    <rect width="22" height="7.5" fill="#FFFFFF" />
    <rect y="7.5" width="22" height="7.5" fill="#DC143C" />
    <rect width="22" height="15" rx="1.5" stroke="rgba(0,0,0,0.15)" strokeWidth="0.5" />
  </svg>
);

export default function LanguageSelector() {
  const { language, changeLanguage, setLanguage } = useTranslation();
  const { theme } = useTheme();

  const isDark = theme === 'dark';

  const handleSelectLanguage = (code) => {
    if (typeof changeLanguage === 'function') {
      changeLanguage(code);
    } else if (typeof setLanguage === 'function') {
      setLanguage(code);
    }
  };

  const languages = [
    { code: 'uk', label: 'UA', Flag: FlagUA, title: 'Українська' },
    { code: 'en', label: 'EN', Flag: FlagGB, title: 'English' },
    { code: 'pl', label: 'PL', Flag: FlagPL, title: 'Polski' }
  ];

  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        backgroundColor: isDark ? '#222222' : '#E2E8F0',
        border: `1px solid ${isDark ? '#383838' : '#CBD5E1'}`,
        borderRadius: '30px',
        padding: '3px',
        boxShadow: isDark ? '0 2px 8px rgba(0,0,0,0.3)' : '0 2px 6px rgba(0,0,0,0.06)',
        transition: 'all 0.3s ease'
      }}
    >
      {languages.map((lang) => {
        const isActive = language === lang.code;
        const FlagComponent = lang.Flag;
        return (
          <button
            key={lang.code}
            onClick={() => handleSelectLanguage(lang.code)}
            title={lang.title}
            type="button"
            style={{
              display: 'flex',
              alignItems: 'center',
              justify: 'center',
              gap: '7px',
              backgroundColor: isActive ? '#FF6600' : 'transparent',
              color: isActive ? '#FFFFFF' : isDark ? '#B0B0B0' : '#334155',
              border: 'none',
              borderRadius: '24px',
              padding: '6px 14px',
              fontSize: '0.85rem',
              fontWeight: 800,
              cursor: 'pointer',
              transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
              boxShadow: isActive ? '0 2px 10px rgba(255, 102, 0, 0.4)' : 'none'
            }}
            onMouseEnter={(e) => {
              if (!isActive) {
                e.currentTarget.style.color = '#FF6600';
                e.currentTarget.style.backgroundColor = isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.05)';
              }
            }}
            onMouseLeave={(e) => {
              if (!isActive) {
                e.currentTarget.style.color = isDark ? '#B0B0B0' : '#334155';
                e.currentTarget.style.backgroundColor = 'transparent';
              }
            }}
          >
            <FlagComponent />
            <span style={{ lineHeight: 1, pointerEvents: 'none' }}>{lang.label}</span>
          </button>
        );
      })}
    </div>
  );
}
