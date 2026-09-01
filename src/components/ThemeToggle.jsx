import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../theme/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        backgroundColor: isDark ? '#222222' : '#E2E8F0',
        border: `1px solid ${isDark ? '#383838' : '#CBD5E1'}`,
        color: isDark ? '#FFFFFF' : '#334155',
        borderRadius: '30px',
        padding: '6px 16px',
        fontSize: '0.82rem',
        fontWeight: 800,
        cursor: 'pointer',
        boxShadow: isDark ? '0 2px 8px rgba(0,0,0,0.3)' : '0 2px 6px rgba(0,0,0,0.06)',
        transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = '#FF6600';
        e.currentTarget.style.transform = 'translateY(-1px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = isDark ? '#383838' : '#CBD5E1';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
      title={isDark ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
    >
      {isDark ? (
        <>
          <Moon size={15} style={{ color: '#FF9800' }} />
          <span>DARK</span>
        </>
      ) : (
        <>
          <Sun size={15} style={{ color: '#FF6600' }} />
          <span>LIGHT</span>
        </>
      )}
    </button>
  );
}
