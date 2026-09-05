import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from '../i18n/LanguageContext';
import { useTheme } from '../theme/ThemeContext';
import { useNews } from '../context/NewsContext';
import ArticleModal from './ArticleModal';

export default function LatestNews({ onNavigateToNews }) {
  const { t, language } = useTranslation();
  const { theme } = useTheme();
  const { newsList } = useNews();
  const [selectedArticle, setSelectedArticle] = useState(null);

  const isDark = theme === 'dark';

  return (
    <section id="news" style={{
      padding: '80px 0',
      backgroundColor: isDark ? '#000000' : '#F0F2F5',
      color: isDark ? '#FFFFFF' : '#000000',
      transition: 'background-color 0.3s ease, color 0.3s ease'
    }}>
      <div className="container">
        <div style={{
          display: 'flex',
          justify: 'space-between',
          alignItems: 'flex-end',
          marginBottom: '40px',
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          <div>
            <span style={{
              color: '#FF6600',
              fontWeight: 800,
              fontSize: '0.85rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase'
            }}>
              {t.news.subtitle}
            </span>
            <h2 style={{
              fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
              fontWeight: 900,
              marginTop: '6px',
              textTransform: 'uppercase',
              color: isDark ? '#FFFFFF' : '#000000'
            }}>
              {t.news.title}
            </h2>
          </div>

          <button
            onClick={onNavigateToNews}
            className={isDark ? "btn-outline" : "btn-dark"}
          >
            <span>{t.news.allNews}</span>
            <ArrowRight size={16} />
          </button>
        </div>

        <div className="responsive-card-grid">
          {newsList.slice(0, 3).map((article) => {
            const titleText = article.title[language] || article.title.uk || article.title.en;
            const summaryText = article.summary[language] || article.summary.uk || article.summary.en;
            const dateText = language === 'en' ? article.dateEn : language === 'pl' ? article.datePl : article.date;

            return (
              <div
                key={article.id}
                onClick={() => setSelectedArticle(article)}
                style={{
                  backgroundColor: isDark ? '#141414' : '#FFFFFF',
                  borderRadius: '8px',
                  border: `1px solid ${isDark ? '#262626' : '#E0E0E0'}`,
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '100%',
                  boxSizing: 'border-box',
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease, border-color 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.borderColor = '#FF6600';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = isDark ? '#262626' : '#E0E0E0';
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <div style={{
                    aspectRatio: '16 / 10',
                    width: '100%',
                    backgroundColor: isDark ? '#1E1E1E' : '#F9F9F9',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '20px',
                    boxSizing: 'border-box',
                    overflow: 'hidden'
                  }}>
                    <img
                      src={article.image}
                      alt={titleText}
                      style={{
                        maxHeight: '100%',
                        maxWidth: '100%',
                        objectFit: 'contain'
                      }}
                    />
                  </div>

                  <div style={{ padding: '24px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      fontSize: '0.78rem',
                      color: '#FF6600',
                      fontWeight: 700,
                      marginBottom: '10px'
                    }}>
                      <span>{article.category.toUpperCase()}</span>
                      <span style={{ color: '#888' }}>•</span>
                      <span style={{ color: isDark ? '#888888' : '#666666' }}>{dateText}</span>
                    </div>

                    <h3 className="line-clamp-2" style={{
                      fontSize: '1.15rem',
                      fontWeight: 800,
                      color: isDark ? '#FFFFFF' : '#111111',
                      lineHeight: 1.35,
                      marginBottom: '12px'
                    }}>
                      {titleText}
                    </h3>

                    <p className="line-clamp-3" style={{
                      fontSize: '0.88rem',
                      color: isDark ? '#A0A0A0' : '#555555',
                      lineHeight: 1.5,
                      marginBottom: '20px'
                    }}>
                      {summaryText}
                    </p>
                  </div>
                </div>

                <div style={{
                  padding: '0 24px 24px 24px',
                  marginTop: 'auto',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  color: '#FF6600',
                  fontWeight: 700,
                  fontSize: '0.85rem'
                }}>
                  <span>{t.news.readMore}</span>
                  <ArrowRight size={15} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Direct Article Full Reader Modal */}
      {selectedArticle && (
        <ArticleModal
          article={selectedArticle}
          onClose={() => setSelectedArticle(null)}
        />
      )}
    </section>
  );
}
