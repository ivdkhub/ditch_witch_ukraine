import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { useTranslation } from '../i18n/LanguageContext';
import { useTheme } from '../theme/ThemeContext';

export default function ScrollToTopButton() {
  const { language } = useTranslation();
  const { theme } = useTheme();
  const [visible, setVisible] = useState(false);

  const isDark = theme === 'dark';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!visible) return null;

  const labelText = language === 'uk' ? 'НАГОРУ' : language === 'pl' ? 'DO GÓRY' : 'TOP';

  return (
    <button
      onClick={scrollToTop}
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        backgroundColor: '#FF6600',
        color: '#FFFFFF',
        border: 'none',
        borderRadius: '30px',
        padding: '10px 18px',
        fontSize: '0.82rem',
        fontWeight: 900,
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        cursor: 'pointer',
        boxShadow: '0 6px 20px rgba(0,0,0,0.3)',
        zIndex: 9999,
        transition: 'transform 0.2s ease, background-color 0.2s ease, opacity 0.25s ease',
        animation: 'fadeIn 0.25s ease forwards'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-3px)';
        e.currentTarget.style.backgroundColor = '#E55C00';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.backgroundColor = '#FF6600';
      }}
      title={labelText}
    >
      <span>{labelText}</span>
      <ArrowUp size={16} style={{ strokeWidth: 3 }} />
    </button>
  );
}
