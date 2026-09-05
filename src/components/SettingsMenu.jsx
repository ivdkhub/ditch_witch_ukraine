import React, { useState, useRef, useEffect } from 'react';
import { Settings, Sun, Moon, Check, X } from 'lucide-react';
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

export default function SettingsMenu() {
  const { language, changeLanguage, setLanguage } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const isDark = theme === 'dark';

  const handleSelectLanguage = (code) => {
    if (typeof changeLanguage === 'function') {
      changeLanguage(code);
    } else if (typeof setLanguage === 'function') {
      setLanguage(code);
    }
  };

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const languages = [
    { code: 'uk', label: 'UA', Flag: FlagUA, name: 'Українська' },
    { code: 'en', label: 'EN', Flag: FlagGB, name: 'English' },
    { code: 'pl', label: 'PL', Flag: FlagPL, name: 'Polski' }
  ];

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div ref={menuRef} style={{ position: 'relative', display: 'inline-block' }}>
      {/* Animated Gear Settings Trigger Button with High-Contrast Color Management */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="Settings, Theme & Language"
        aria-expanded={isOpen}
        className="settings-gear-btn touch-target"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '40px',
          height: '40px',
          minWidth: '40px',
          minHeight: '40px',
          borderRadius: '50%',
          backgroundColor: isOpen
            ? '#FF6600'
            : isHovered
            ? isDark ? 'rgba(255, 102, 0, 0.18)' : 'rgba(255, 102, 0, 0.12)'
            : isDark ? '#222222' : '#FFFFFF',
          border: `1px solid ${isOpen || isHovered ? '#FF6600' : isDark ? '#383838' : '#CBD5E1'}`,
          cursor: 'pointer',
          boxShadow: isOpen
            ? '0 4px 14px rgba(255, 102, 0, 0.45)'
            : isDark ? '0 2px 8px rgba(0,0,0,0.3)' : '0 2px 6px rgba(0,0,0,0.06)',
          transition: 'all 0.25s ease',
          flexShrink: 0
        }}
        title={language === 'uk' ? 'Налаштування теми та мови' : language === 'pl' ? 'Ustawienia motywu i języka' : 'Theme & Language Settings'}
      >
        <Settings
          size={19}
          color={isOpen ? '#FFFFFF' : isHovered ? '#FF6600' : isDark ? '#FFFFFF' : '#1E293B'}
          style={{
            transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)',
            transition: 'transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), color 0.2s ease',
            display: 'block'
          }}
        />
      </button>

      {/* Settings Popover Dropdown */}
      {isOpen && (
        <div
          style={{
            position: 'absolute',
            top: 'calc(100% + 8px)',
            right: 0,
            width: '270px',
            maxWidth: 'calc(100vw - 32px)',
            backgroundColor: isDark ? '#1C1C1C' : '#FFFFFF',
            border: `1px solid ${isDark ? '#333333' : '#E2E8F0'}`,
            borderRadius: '14px',
            boxShadow: isDark ? '0 12px 36px rgba(0,0,0,0.8)' : '0 12px 30px rgba(0,0,0,0.15)',
            zIndex: 3000,
            padding: '16px',
            animation: 'fadeIn 0.2s ease',
            boxSizing: 'border-box'
          }}
        >
          {/* Header */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingBottom: '12px',
            marginBottom: '12px',
            borderBottom: `1px solid ${isDark ? '#2A2A2A' : '#E2E8F0'}`
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Settings size={16} style={{ color: '#FF6600' }} />
              <span style={{
                fontWeight: 800,
                fontSize: '0.86rem',
                color: isDark ? '#FFFFFF' : '#0F172A',
                textTransform: 'uppercase',
                letterSpacing: '0.04em'
              }}>
                {language === 'uk' ? 'Налаштування' : language === 'pl' ? 'Ustawienia' : 'Settings'}
              </span>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close Settings"
              style={{
                background: 'none',
                border: 'none',
                color: isDark ? '#888' : '#64748B',
                cursor: 'pointer',
                padding: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '6px'
              }}
            >
              <X size={16} />
            </button>
          </div>

          {/* Section 1: Theme Switcher */}
          <div style={{ marginBottom: '16px' }}>
            <span style={{
              display: 'block',
              fontSize: '0.74rem',
              fontWeight: 800,
              color: '#FF6600',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              marginBottom: '8px'
            }}>
              {language === 'uk' ? 'Тема оформлення' : language === 'pl' ? 'Motyw' : 'Theme Mode'}
            </span>

            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '6px',
              backgroundColor: isDark ? '#141414' : '#F1F5F9',
              padding: '4px',
              borderRadius: '10px'
            }}>
              <button
                type="button"
                onClick={() => isDark && toggleTheme()}
                className="touch-target"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  padding: '8px 10px',
                  borderRadius: '8px',
                  border: 'none',
                  fontSize: '0.8rem',
                  fontWeight: 800,
                  cursor: 'pointer',
                  backgroundColor: !isDark ? '#FFFFFF' : 'transparent',
                  color: !isDark ? '#0F172A' : '#888888',
                  boxShadow: !isDark ? '0 2px 6px rgba(0,0,0,0.1)' : 'none',
                  transition: 'all 0.2s ease'
                }}
              >
                <Sun size={15} style={{ color: !isDark ? '#FF6600' : '#888' }} />
                <span>{language === 'uk' ? 'Світла' : language === 'pl' ? 'Jasny' : 'Light'}</span>
              </button>

              <button
                type="button"
                onClick={() => !isDark && toggleTheme()}
                className="touch-target"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  padding: '8px 10px',
                  borderRadius: '8px',
                  border: 'none',
                  fontSize: '0.8rem',
                  fontWeight: 800,
                  cursor: 'pointer',
                  backgroundColor: isDark ? '#2A2A2A' : 'transparent',
                  color: isDark ? '#FFFFFF' : '#888888',
                  boxShadow: isDark ? '0 2px 6px rgba(0,0,0,0.4)' : 'none',
                  transition: 'all 0.2s ease'
                }}
              >
                <Moon size={15} style={{ color: isDark ? '#FF9800' : '#888' }} />
                <span>{language === 'uk' ? 'Темна' : language === 'pl' ? 'Ciemny' : 'Dark'}</span>
              </button>
            </div>
          </div>

          {/* Section 2: Language Selector */}
          <div>
            <span style={{
              display: 'block',
              fontSize: '0.74rem',
              fontWeight: 800,
              color: '#FF6600',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              marginBottom: '8px'
            }}>
              {language === 'uk' ? 'Мова сайту' : language === 'pl' ? 'Język' : 'Language'}
            </span>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              {languages.map((lang) => {
                const isActive = language === lang.code;
                const Flag = lang.Flag;

                return (
                  <button
                    key={lang.code}
                    type="button"
                    onClick={() => handleSelectLanguage(lang.code)}
                    className="touch-target"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '10px 12px',
                      borderRadius: '8px',
                      border: `1px solid ${isActive ? '#FF6600' : 'transparent'}`,
                      backgroundColor: isActive
                        ? isDark ? 'rgba(255, 102, 0, 0.15)' : 'rgba(255, 102, 0, 0.1)'
                        : isDark ? '#141414' : '#F8FAFC',
                      color: isActive ? '#FF6600' : isDark ? '#FFFFFF' : '#1E293B',
                      cursor: 'pointer',
                      fontSize: '0.84rem',
                      fontWeight: isActive ? 800 : 600,
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.backgroundColor = isDark ? '#262626' : '#F1F5F9';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.backgroundColor = isDark ? '#141414' : '#F8FAFC';
                      }
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <Flag />
                      <span>{lang.name}</span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <span style={{
                        fontSize: '0.72rem',
                        fontWeight: 800,
                        color: isActive ? '#FF6600' : '#888',
                        textTransform: 'uppercase'
                      }}>
                        {lang.label}
                      </span>
                      {isActive && <Check size={16} style={{ color: '#FF6600' }} />}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
