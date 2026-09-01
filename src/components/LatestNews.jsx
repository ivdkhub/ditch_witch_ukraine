import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from '../i18n/LanguageContext';
import { useTheme } from '../theme/ThemeContext';

export default function LatestNews({ onNavigateToNews }) {
  const { t } = useTranslation();
  const { theme } = useTheme();

  const isDark = theme === 'dark';

  const newsArticles = [
    {
      id: 1,
      title: t.news.a1.title,
      category: t.news.a1.cat,
      date: t.news.a1.date,
      desc: t.news.a1.desc,
      image: '/Risorse/Immagini/category_vacumexcavator.png'
    },
    {
      id: 2,
      title: t.news.a2.title,
      category: t.news.a2.cat,
      date: t.news.a2.date,
      desc: t.news.a2.desc,
      image: '/Risorse/Immagini/category_trenchers.png'
    },
    {
      id: 3,
      title: t.news.a3.title,
      category: t.news.a3.cat,
      date: t.news.a3.date,
      desc: t.news.a3.desc,
      image: '/Risorse/Immagini/category_drilling.png'
    }
  ];

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

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px'
        }}>
          {newsArticles.map((article) => (
            <div
              key={article.id}
              onClick={onNavigateToNews}
              style={{
                backgroundColor: isDark ? '#141414' : '#FFFFFF',
                borderRadius: '8px',
                border: `1px solid ${isDark ? '#262626' : '#E0E0E0'}`,
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
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
              <div style={{
                height: '180px',
                backgroundColor: isDark ? '#1E1E1E' : '#F9F9F9',
                display: 'flex',
                alignItems: 'center',
                justify: 'center',
                padding: '20px'
              }}>
                <img
                  src={article.image}
                  alt={article.title}
                  style={{
                    maxHeight: '140px',
                    maxWidth: '100%',
                    objectFit: 'contain'
                  }}
                />
              </div>

              <div style={{ padding: '24px', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    fontSize: '0.78rem',
                    color: '#FF6600',
                    fontWeight: 700,
                    marginBottom: '10px'
                  }}>
                    <span>{article.category}</span>
                    <span style={{ color: '#888' }}>•</span>
                    <span style={{ color: isDark ? '#888888' : '#666666' }}>{article.date}</span>
                  </div>

                  <h3 style={{
                    fontSize: '1.15rem',
                    fontWeight: 800,
                    color: isDark ? '#FFFFFF' : '#111111',
                    lineHeight: 1.35,
                    marginBottom: '12px'
                  }}>
                    {article.title}
                  </h3>

                  <p style={{
                    fontSize: '0.88rem',
                    color: isDark ? '#A0A0A0' : '#555555',
                    lineHeight: 1.5,
                    marginBottom: '20px'
                  }}>
                    {article.desc}
                  </p>
                </div>

                <div style={{
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
