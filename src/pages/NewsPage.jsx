import React, { useState } from 'react';
import { Search, Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';
import { useTranslation } from '../i18n/LanguageContext';
import { useTheme } from '../theme/ThemeContext';
import { useNews } from '../context/NewsContext';
import ArticleModal from '../components/ArticleModal';

export default function NewsPage() {
  const { language } = useTranslation();
  const { theme } = useTheme();
  const { newsList } = useNews();

  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArticle, setSelectedArticle] = useState(null);

  const isDark = theme === 'dark';

  const categoryFilterTabs = [
    { id: 'all', label: { uk: 'Всі Статті', en: 'All Articles', pl: 'Wszystkie Artykuły' } },
    { id: 'guides', label: { uk: 'Поради та Гайди', en: 'Guides & Advice', pl: 'Poradniki i Wskazówki' } },
    { id: 'maintenance', label: { uk: 'Сервіс та ТО', en: 'Service & Maintenance', pl: 'Serwis i Konserwacja' } },
    { id: 'spotlights', label: { uk: 'Огляди Техніки', en: 'Equipment Spotlights', pl: 'Prezentacje Sprzętu' } },
    { id: 'releases', label: { uk: 'Прес-релізи та Новини', en: 'Press Releases & News', pl: 'Komunikaty Prasowe' } },
    { id: 'other', label: { uk: 'Інше', en: 'Other', pl: 'Inne' } }
  ];

  const filteredArticles = newsList.filter((article) => {
    const matchesCat = activeCategory === 'all' || article.category === activeCategory || article.categoryKey === activeCategory;
    const titleText = (typeof article.title === 'string' ? article.title : article.title[language] || article.title.uk || article.title.en || '').toLowerCase();
    const summaryText = (typeof article.summary === 'string' ? article.summary : article.summary[language] || article.summary.uk || article.summary.en || '').toLowerCase();
    const matchesSearch = titleText.includes(searchQuery.toLowerCase()) || summaryText.includes(searchQuery.toLowerCase());

    return matchesCat && matchesSearch;
  });

  const featuredArticle = newsList.find((a) => a.featured) || newsList[0];

  return (
    <div style={{
      backgroundColor: isDark ? '#0F0F0F' : '#F8F9FA',
      color: isDark ? '#FFFFFF' : '#111111',
      minHeight: '80vh',
      paddingBottom: '80px',
      transition: 'background-color 0.3s ease, color 0.3s ease'
    }}>
      {/* Hero Header Banner */}
      <div style={{
        backgroundColor: '#050505',
        color: '#FFFFFF',
        padding: '60px 0',
        borderBottom: '4px solid #FF6600',
        position: 'relative'
      }}>
        <div className="container" style={{ textAlign: 'center', zIndex: 10, position: 'relative' }}>
          <span style={{
            color: '#FF6600',
            fontWeight: 800,
            fontSize: '0.85rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase'
          }}>
            DITCH WITCH UKRAINE
          </span>
          <h1 style={{
            fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
            fontWeight: 900,
            marginTop: '8px',
            marginBottom: '14px',
            textTransform: 'uppercase'
          }}>
            {language === 'uk' ? 'Новини, Посібники та Статті' : language === 'pl' ? 'Aktualności i Poradniki' : 'News, Guides & Technical Insights'}
          </h1>
          <p style={{
            color: '#CED0D1',
            maxWidth: '750px',
            margin: '0 auto',
            fontSize: '1.05rem',
            lineHeight: 1.6
          }}>
            {language === 'uk'
              ? 'Останні оновлення галузі підземного будівництва, поради експертів з обслуговування ГНБ та огляди нової спецтехніки.'
              : language === 'pl'
              ? 'Najnowsze aktualności z branży budownictwa podziemnego, porady ekspertów dotyczące HDB i przeglądy sprzętu.'
              : 'Stay up to date with underground construction technology, HDD maintenance tips, and equipment engineering spotlights.'}
          </p>
        </div>
      </div>

      <div className="container" style={{ marginTop: '40px' }}>
        {/* Featured Article Card */}
        {featuredArticle && activeCategory === 'all' && searchQuery === '' && (
          <div style={{
            backgroundColor: isDark ? '#1C1C1C' : '#FFFFFF',
            borderRadius: '12px',
            overflow: 'hidden',
            border: `1px solid ${isDark ? '#2C2C2C' : '#EAEAEA'}`,
            boxShadow: isDark ? '0 6px 24px rgba(0,0,0,0.5)' : '0 6px 24px rgba(0,0,0,0.06)',
            marginBottom: '40px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            alignItems: 'center'
          }}>
            <div style={{
              backgroundColor: isDark ? '#141414' : '#F2F4F7',
              padding: '40px',
              display: 'flex',
              alignItems: 'center',
              justify: 'center',
              minHeight: '280px'
            }}>
              <img
                src={featuredArticle.image}
                alt={featuredArticle.title[language] || featuredArticle.title.en}
                style={{
                  maxHeight: '240px',
                  maxWidth: '100%',
                  objectFit: 'contain'
                }}
              />
            </div>

            <div style={{ padding: '36px' }}>
              <span style={{
                backgroundColor: '#FF6600',
                color: '#FFFFFF',
                fontWeight: 800,
                fontSize: '0.75rem',
                padding: '4px 10px',
                borderRadius: '3px',
                textTransform: 'uppercase',
                marginBottom: '16px',
                display: 'inline-block'
              }}>
                {language === 'uk' ? 'ГОЛОВНА СТАТТЯ' : language === 'pl' ? 'GŁÓWNY ARTYKUŁ' : 'FEATURED STORY'}
              </span>

              <h2 style={{
                fontSize: '1.8rem',
                fontWeight: 900,
                lineHeight: 1.25,
                marginBottom: '12px',
                color: isDark ? '#FFFFFF' : '#000000'
              }}>
                {featuredArticle.title[language] || featuredArticle.title.en}
              </h2>

              <p style={{
                color: isDark ? '#CCCCCC' : '#555555',
                fontSize: '0.98rem',
                lineHeight: 1.6,
                marginBottom: '24px'
              }}>
                {featuredArticle.summary[language] || featuredArticle.summary.en}
              </p>

              <button
                onClick={() => setSelectedArticle(featuredArticle)}
                className="btn-primary"
              >
                <span>{language === 'uk' ? 'ЧИТАТИ СТАТТЮ' : language === 'pl' ? 'CZYTAJ ARTYKUŁ' : 'READ FULL STORY'}</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        )}

        {/* Filter Bar & Search */}
        <div style={{
          backgroundColor: isDark ? '#1C1C1C' : '#FFFFFF',
          borderRadius: '12px',
          padding: '24px',
          boxShadow: isDark ? '0 4px 20px rgba(0,0,0,0.5)' : '0 4px 20px rgba(0,0,0,0.06)',
          border: `1px solid ${isDark ? '#2C2C2C' : '#EAEAEA'}`,
          marginBottom: '40px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px'
        }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            {categoryFilterTabs.map((tab) => {
              const isActive = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  style={{
                    backgroundColor: isActive ? '#FF6600' : isDark ? '#282828' : '#F0F2F5',
                    color: isActive ? '#FFFFFF' : isDark ? '#DDDDDD' : '#333333',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '12px 24px',
                    fontSize: '0.92rem',
                    fontWeight: 800,
                    cursor: 'pointer',
                    transition: 'all 0.25s ease'
                  }}
                >
                  {tab.label[language] || tab.label.en}
                </button>
              );
            })}
          </div>

          <div style={{ position: 'relative' }}>
            <Search size={20} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#888' }} />
            <input
              type="text"
              placeholder={language === 'uk' ? 'Пошук статей та гайдів...' : language === 'pl' ? 'Szukaj artykułów i poradników...' : 'Search articles and maintenance guides...'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                backgroundColor: isDark ? '#141414' : '#F9F9FB',
                border: `1px solid ${isDark ? '#333333' : '#CCCCCC'}`,
                borderRadius: '8px',
                padding: '14px 20px 14px 48px',
                color: isDark ? '#FFFFFF' : '#000000',
                fontSize: '0.95rem',
                outline: 'none'
              }}
            />
          </div>
        </div>

        {/* Articles Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '30px'
        }}>
          {filteredArticles.map((art) => (
            <div
              key={art.id}
              style={{
                backgroundColor: isDark ? '#1C1C1C' : '#FFFFFF',
                borderRadius: '10px',
                border: `1px solid ${isDark ? '#2C2C2C' : '#EAEAEA'}`,
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justify: 'space-between',
                boxShadow: isDark ? '0 4px 16px rgba(0,0,0,0.4)' : '0 4px 16px rgba(0,0,0,0.06)',
                transition: 'transform 0.3s ease, border-color 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.borderColor = '#FF6600';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = isDark ? '#2C2C2C' : '#EAEAEA';
              }}
            >
              <div>
                <div style={{
                  backgroundColor: isDark ? '#141414' : '#F2F4F7',
                  padding: '24px',
                  height: '200px',
                  display: 'flex',
                  alignItems: 'center',
                  justify: 'center'
                }}>
                  <img
                    src={art.image}
                    alt={art.title[language] || art.title.en}
                    style={{
                      maxHeight: '160px',
                      maxWidth: '100%',
                      objectFit: 'contain'
                    }}
                  />
                </div>

                <div style={{ padding: '24px' }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    fontSize: '0.78rem',
                    color: '#FF6600',
                    fontWeight: 700,
                    marginBottom: '10px'
                  }}>
                    <span>{art.category.toUpperCase()}</span>
                    <span style={{ color: '#888' }}>•</span>
                    <span style={{ color: isDark ? '#888888' : '#666666' }}>
                      {language === 'en' ? art.dateEn : language === 'pl' ? art.datePl : art.date}
                    </span>
                  </div>

                  <h3 style={{
                    fontSize: '1.2rem',
                    fontWeight: 800,
                    color: isDark ? '#FFFFFF' : '#111111',
                    lineHeight: 1.35,
                    marginBottom: '10px'
                  }}>
                    {art.title[language] || art.title.en}
                  </h3>

                  <p style={{
                    fontSize: '0.88rem',
                    color: isDark ? '#A0A0A0' : '#555555',
                    lineHeight: 1.5,
                    marginBottom: '20px'
                  }}>
                    {art.summary[language] || art.summary.en}
                  </p>
                </div>
              </div>

              <div style={{ padding: '0 24px 24px 24px' }}>
                <button
                  onClick={() => setSelectedArticle(art)}
                  className="btn-primary"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <span>{language === 'uk' ? 'ЧИТАТИ СТАТТЮ' : language === 'pl' ? 'CZYTAJ ARTYKUŁ' : 'READ STORY'}</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full Article Reader Modal */}
      {selectedArticle && (
        <ArticleModal
          article={selectedArticle}
          onClose={() => setSelectedArticle(null)}
        />
      )}
    </div>
  );
}
