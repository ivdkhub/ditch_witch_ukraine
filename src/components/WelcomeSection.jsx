import React from 'react';
import { useTranslation } from '../i18n/LanguageContext';
import { useTheme } from '../theme/ThemeContext';

export default function WelcomeSection() {
  const { t } = useTranslation();
  const { theme } = useTheme();

  const isDark = theme === 'dark';

  return (
    <section style={{
      backgroundColor: isDark ? '#000000' : '#F4F5F7',
      color: isDark ? '#FFFFFF' : '#111111',
      padding: '60px 0',
      textAlign: 'center',
      borderBottom: '4px solid #FF6600',
      transition: 'background-color 0.3s ease, color 0.3s ease'
    }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        <h2 style={{
          fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
          fontWeight: 800,
          marginBottom: '20px',
          textTransform: 'uppercase',
          letterSpacing: '-0.01em',
          color: isDark ? '#FFFFFF' : '#000000'
        }}>
          {t.welcome.title}
        </h2>

        <p style={{
          fontSize: '1.1rem',
          lineHeight: 1.7,
          color: isDark ? '#CED0D1' : '#333333',
          marginBottom: '16px',
          fontWeight: 400
        }}>
          {t.welcome.desc1}
        </p>

        <p style={{
          fontSize: '1.05rem',
          lineHeight: 1.7,
          color: isDark ? '#A0A0A0' : '#555555',
          fontWeight: 400
        }}>
          {t.welcome.desc2}
        </p>
      </div>
    </section>
  );
}
