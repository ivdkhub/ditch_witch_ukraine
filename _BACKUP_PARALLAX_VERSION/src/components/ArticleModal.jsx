import React from 'react';
import { X, Calendar, Clock, Share2, Tag, ArrowRight } from 'lucide-react';
import { useTranslation } from '../i18n/LanguageContext';
import { useTheme } from '../theme/ThemeContext';

export default function ArticleModal({ article, onClose }) {
  const { language } = useTranslation();
  const { theme } = useTheme();

  if (!article) return null;

  const isDark = theme === 'dark';

  const title = article.title[language] || article.title.en;
  const subtitle = article.subtitle[language] || article.subtitle.en;
  const content = article.content[language] || article.content.en;
  const date = language === 'en' ? article.dateEn : language === 'pl' ? article.datePl : article.date;
  const readTime = language === 'en' ? article.readTimeEn : language === 'pl' ? article.readTimePl : article.readTime;

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      backgroundColor: 'rgba(0,0,0,0.8)',
      backdropFilter: 'blur(5px)',
      display: 'flex',
      alignItems: 'center',
      justify: 'center',
      zIndex: 2000,
      padding: '20px'
    }} onClick={onClose}>
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: isDark ? '#1C1C1C' : '#FFFFFF',
          color: isDark ? '#FFFFFF' : '#111111',
          width: '100%',
          maxWidth: '850px',
          maxHeight: '90vh',
          borderRadius: '12px',
          overflowY: 'auto',
          boxShadow: '0 20px 50px rgba(0,0,0,0.6)',
          border: `1px solid ${isDark ? '#333333' : '#E0E0E0'}`,
          position: 'relative',
          animation: 'fadeIn 0.25s ease forwards'
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            backgroundColor: isDark ? '#2C2C2C' : '#F0F0F0',
            color: isDark ? '#FFFFFF' : '#000000',
            border: 'none',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justify: 'center',
            cursor: 'pointer',
            zIndex: 10
          }}
        >
          <X size={20} />
        </button>

        {/* Article Image Banner */}
        <div style={{
          backgroundColor: isDark ? '#141414' : '#F4F5F7',
          padding: '40px 20px',
          display: 'flex',
          justify: 'center',
          alignItems: 'center',
          borderBottom: '4px solid #FF6600'
        }}>
          <img
            src={article.image}
            alt={title}
            style={{
              maxHeight: '220px',
              maxWidth: '100%',
              objectFit: 'contain'
            }}
          />
        </div>

        {/* Article Content Container */}
        <div style={{ padding: '32px 36px' }}>
          {/* Metadata Badges */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            fontSize: '0.82rem',
            color: '#FF6600',
            fontWeight: 700,
            marginBottom: '14px',
            flexWrap: 'wrap'
          }}>
            <span style={{
              backgroundColor: '#FF6600',
              color: '#FFFFFF',
              padding: '3px 10px',
              borderRadius: '3px',
              textTransform: 'uppercase'
            }}>
              {article.category.toUpperCase()}
            </span>

            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: isDark ? '#A0A0A0' : '#666666' }}>
              <Calendar size={14} />
              <span>{date}</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: isDark ? '#A0A0A0' : '#666666' }}>
              <Clock size={14} />
              <span>{readTime}</span>
            </div>
          </div>

          {/* Article Title & Subtitle */}
          <h1 style={{
            fontSize: 'clamp(1.8rem, 3vw, 2.3rem)',
            fontWeight: 900,
            lineHeight: 1.2,
            marginBottom: '12px',
            color: isDark ? '#FFFFFF' : '#000000'
          }}>
            {title}
          </h1>

          <p style={{
            fontSize: '1.1rem',
            fontWeight: 600,
            color: '#FF6600',
            lineHeight: 1.5,
            marginBottom: '24px'
          }}>
            {subtitle}
          </p>

          {/* Main Article HTML Body */}
          <div
            className="article-body"
            dangerouslySetInnerHTML={{ __html: content }}
            style={{
              fontSize: '1.02rem',
              lineHeight: 1.8,
              color: isDark ? '#DDDDDD' : '#333333'
            }}
          />

          {/* Footer Call to Action */}
          <div style={{
            marginTop: '40px',
            borderTop: `1px solid ${isDark ? '#2E2E2E' : '#EAEAEA'}`,
            paddingTop: '24px',
            display: 'flex',
            justify: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px'
          }}>
            <div style={{ fontWeight: 800, color: '#FF6600', fontSize: '0.9rem', textTransform: 'uppercase' }}>
              DITCH WITCH UKRAINE • ОФІЦІЙНИЙ СЕРВІС ТА ДИСТРИБУЦІЯ
            </div>

            <button onClick={onClose} className="btn-primary">
              <span>ЗАКРИТИ СТАТТЮ</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
