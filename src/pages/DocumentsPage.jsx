import React, { useState } from 'react';
import { Search, Download, FileText, CheckCircle, ShieldCheck, SlidersHorizontal, X, Check, Filter } from 'lucide-react';
import { useTranslation } from '../i18n/LanguageContext';
import { useTheme } from '../theme/ThemeContext';
import { useDocuments } from '../context/DocumentContext';
import ParallaxCard from '../components/ParallaxCard';

export default function DocumentsPage() {
  const { language } = useTranslation();
  const { theme } = useTheme();
  const { documents } = useDocuments();

  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const isDark = theme === 'dark';

  const categoryTabs = [
    { id: 'all', label: { uk: 'Всі Документи', en: 'All Documents', pl: 'Wszystkie Dokumenty' } },
    { id: 'drilling', label: { uk: 'Бурові ГНБ', en: 'HDD Drills', pl: 'Wiertnice HDB' } },
    { id: 'locating', label: { uk: 'Локації Subsite', en: 'Subsite Locating', pl: 'Lokalizacja Subsite' } },
    { id: 'tools', label: { uk: 'Інструмент та Штанги', en: 'Drill Tools & Pipes', pl: 'Narzędzia i Żerdzie' } },
    { id: 'fluids', label: { uk: 'Розчини та Бентоніт', en: 'Mud & Bentonite', pl: 'Płuczki i Bentonit' } },
    { id: 'guides', label: { uk: 'Порівняльні Гайди', en: 'Comparison Guides', pl: 'Poradniki' } }
  ];

  const filteredDocs = documents.filter((doc) => {
    const matchesCat = activeCategory === 'all' || doc.category === activeCategory;

    const q = query.toLowerCase().trim();
    const titleText = (typeof doc.title === 'string' ? doc.title : doc.title[language] || doc.title.uk || doc.title.en || '').toLowerCase();
    const descText = (typeof doc.description === 'string' ? doc.description : doc.description[language] || doc.description.uk || doc.description.en || '').toLowerCase();

    const matchesQuery = q === '' || titleText.includes(q) || descText.includes(q) || (doc.category && doc.category.includes(q));

    return matchesCat && matchesQuery;
  });

  const activeTabObj = categoryTabs.find((t) => t.id === activeCategory) || categoryTabs[0];
  const activeTabLabel = activeTabObj.label[language] || activeTabObj.label.en;

  return (
    <div style={{
      backgroundColor: isDark ? '#0F0F0F' : '#F8F9FA',
      color: isDark ? '#FFFFFF' : '#111111',
      minHeight: '80vh',
      paddingBottom: '80px',
      transition: 'background-color 0.3s ease, color 0.3s ease',
      overflowX: 'hidden',
      maxWidth: '100%'
    }}>
      {/* Hero Header Banner */}
      <div style={{
        backgroundColor: '#050505',
        color: '#FFFFFF',
        padding: '50px 0',
        borderBottom: '4px solid #FF6600',
        position: 'relative'
      }}>
        <div className="container" style={{ textAlign: 'center', zIndex: 10, position: 'relative' }}>
          <ParallaxCard delay={0.1}>
            <span style={{
              color: '#FF6600',
              fontWeight: 800,
              fontSize: '0.85rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase'
            }}>
              DITCH WITCH UKRAINE DOCUMENTATION
            </span>
            <h1 style={{
              fontSize: 'clamp(1.8rem, 4vw, 3.2rem)',
              fontWeight: 900,
              marginTop: '8px',
              marginBottom: '12px',
              textTransform: 'uppercase',
              lineHeight: 1.15
            }}>
              {language === 'uk' ? 'Каталог' : language === 'pl' ? 'Katalog' : 'Catalog'}
            </h1>
            <p style={{
              color: '#CED0D1',
              maxWidth: '750px',
              margin: '0 auto',
              fontSize: '1rem',
              lineHeight: 1.6
            }}>
              {language === 'uk'
                ? 'Офіційні брошури, паспорти обладнання, керівництва з експлуатації та таблиці рецептур бурових розчинів у форматі Word, PDF та Excel.'
                : language === 'pl'
                ? 'Oficjalne broszury, karty techniczne i instrukcje obsługi w formacie Word, PDF i Excel.'
                : 'Download official technical brochures, machine spec sheets, Subsite locating guides, and Baroid mud mix ratios.'}
            </p>
          </ParallaxCard>
        </div>
      </div>

      <div className="container" style={{ marginTop: '32px' }}>
        {/* DESKTOP Search & Filter Bar */}
        <div className="desktop-filter-bar" style={{
          backgroundColor: isDark ? 'rgba(28, 28, 28, 0.75)' : 'rgba(255, 255, 255, 0.75)',
          backdropFilter: 'blur(10px)',
          borderRadius: '12px',
          padding: '20px 24px',
          boxShadow: isDark ? '0 4px 20px rgba(0,0,0,0.5)' : '0 4px 20px rgba(0,0,0,0.06)',
          border: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)'}`,
          marginBottom: '32px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}>
          {/* Category Tabs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {categoryTabs.map((tab) => {
              const isActive = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  style={{
                    backgroundColor: isActive ? '#FF6600' : isDark ? 'rgba(40,40,40,0.8)' : '#F0F2F5',
                    color: isActive ? '#FFFFFF' : isDark ? '#DDDDDD' : '#333333',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '8px 16px',
                    minHeight: '40px',
                    fontSize: '0.86rem',
                    fontWeight: 800,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {tab.label[language] || tab.label.en}
                </button>
              );
            })}
          </div>

          {/* Live Search Input */}
          <div style={{ position: 'relative' }}>
            <Search size={18} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#888' }} />
            <input
              type="text"
              placeholder={language === 'uk' ? 'Пошук документації (напр. JT10, Subsite, Бентоніт, Штанги)...' : 'Search documentation (e.g. JT10, Subsite, Bentonite)...'}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              style={{
                width: '100%',
                backgroundColor: isDark ? 'rgba(20, 20, 20, 0.8)' : '#F9F9FB',
                border: `1px solid ${isDark ? '#333333' : '#CCCCCC'}`,
                borderRadius: '8px',
                padding: '12px 18px 12px 46px',
                minHeight: '44px',
                color: isDark ? '#FFFFFF' : '#000000',
                fontSize: '0.92rem',
                outline: 'none',
                boxSizing: 'border-box'
              }}
            />
          </div>
        </div>

        {/* MOBILE Compact Filter Bar (< 768px) */}
        <div className="mobile-filter-bar" style={{
          display: 'none',
          marginBottom: '24px',
          flexDirection: 'column',
          gap: '12px'
        }}>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <button
              onClick={() => setMobileFilterOpen(true)}
              className="touch-target"
              style={{
                flex: 1,
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundColor: activeCategory !== 'all' ? '#FF6600' : isDark ? '#222222' : '#FFFFFF',
                color: activeCategory !== 'all' ? '#FFFFFF' : isDark ? '#FFFFFF' : '#0F172A',
                border: `1px solid ${activeCategory !== 'all' ? '#FF6600' : isDark ? '#383838' : '#CBD5E1'}`,
                borderRadius: '10px',
                padding: '10px 16px',
                minHeight: '46px',
                fontWeight: 800,
                fontSize: '0.88rem',
                cursor: 'pointer',
                boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SlidersHorizontal size={18} />
                <span className="line-clamp-1">{activeTabLabel}</span>
              </div>
              <span style={{
                backgroundColor: activeCategory !== 'all' ? 'rgba(255,255,255,0.25)' : '#FF6600',
                color: '#FFFFFF',
                padding: '2px 8px',
                borderRadius: '12px',
                fontSize: '0.75rem',
                fontWeight: 900
              }}>
                {filteredDocs.length}
              </span>
            </button>
          </div>

          <div style={{ position: 'relative', width: '100%' }}>
            <Search size={18} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: '#888' }} />
            <input
              type="text"
              placeholder={language === 'uk' ? 'Пошук документації...' : 'Search documentation...'}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              style={{
                width: '100%',
                backgroundColor: isDark ? '#1C1C1C' : '#FFFFFF',
                border: `1px solid ${isDark ? '#333333' : '#CBD5E1'}`,
                borderRadius: '10px',
                padding: '10px 14px 10px 42px',
                minHeight: '44px',
                fontSize: '0.88rem',
                color: isDark ? '#FFFFFF' : '#111111',
                outline: 'none',
                boxSizing: 'border-box'
              }}
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                aria-label="Clear search"
                style={{
                  position: 'absolute',
                  right: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  color: '#888',
                  cursor: 'pointer',
                  padding: '4px'
                }}
              >
                <X size={16} />
              </button>
            )}
          </div>
        </div>

        {/* MOBILE Bottom Sheet Filter Modal */}
        {mobileFilterOpen && (
          <div
            className="animate-fade-in"
            onClick={() => setMobileFilterOpen(false)}
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.72)',
              backdropFilter: 'blur(6px)',
              WebkitBackdropFilter: 'blur(6px)',
              zIndex: 99999,
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'center'
            }}
          >
            <div
              className="animate-slide-up"
              onClick={(e) => e.stopPropagation()}
              style={{
                width: '100%',
                maxWidth: '600px',
                maxHeight: '85vh',
                backgroundColor: isDark ? '#181818' : '#FFFFFF',
                color: isDark ? '#FFFFFF' : '#0F172A',
                borderRadius: '18px 18px 0 0',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                boxShadow: '0 -10px 40px rgba(0,0,0,0.5)',
                borderTop: '3px solid #FF6600',
                paddingBottom: 'max(20px, var(--sab))'
              }}
            >
              <div style={{
                padding: '16px 20px',
                borderBottom: `1px solid ${isDark ? '#2B2B2B' : '#E2E8F0'}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Filter size={18} style={{ color: '#FF6600' }} />
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 900, textTransform: 'uppercase', margin: 0 }}>
                    {language === 'uk' ? 'Категорії документів' : 'Document Categories'}
                  </h3>
                </div>

                <button
                  onClick={() => setMobileFilterOpen(false)}
                  className="touch-target"
                  style={{
                    backgroundColor: isDark ? '#282828' : '#F1F5F9',
                    border: 'none',
                    borderRadius: '50%',
                    width: '38px',
                    height: '38px',
                    minWidth: '38px',
                    minHeight: '38px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: isDark ? '#FFF' : '#111',
                    cursor: 'pointer'
                  }}
                  aria-label="Close filters"
                >
                  <X size={18} />
                </button>
              </div>

              <div style={{
                padding: '16px 20px',
                overflowY: 'auto',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                maxHeight: '55vh'
              }}>
                {categoryTabs.map((tab) => {
                  const isActive = activeCategory === tab.id;
                  const count = tab.id === 'all'
                    ? documents.length
                    : documents.filter(d => d.category === tab.id).length;

                  return (
                    <button
                      key={tab.id}
                      onClick={() => {
                        setActiveCategory(tab.id);
                        setMobileFilterOpen(false);
                      }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '12px 14px',
                        minHeight: '46px',
                        borderRadius: '8px',
                        backgroundColor: isActive
                          ? 'rgba(255, 102, 0, 0.14)'
                          : isDark ? '#222222' : '#F8FAFC',
                        border: `1px solid ${isActive ? '#FF6600' : isDark ? '#333333' : '#E2E8F0'}`,
                        color: isActive ? '#FF6600' : isDark ? '#FFFFFF' : '#0F172A',
                        fontWeight: isActive ? 900 : 700,
                        fontSize: '0.9rem',
                        cursor: 'pointer',
                        textAlign: 'left'
                      }}
                    >
                      <span>{tab.label[language] || tab.label.en}</span>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{
                          backgroundColor: isActive ? '#FF6600' : isDark ? '#333' : '#E2E8F0',
                          color: isActive ? '#FFF' : isDark ? '#BBB' : '#555',
                          padding: '2px 8px',
                          borderRadius: '10px',
                          fontSize: '0.75rem',
                          fontWeight: 800
                        }}>
                          {count}
                        </span>
                        {isActive && <Check size={16} style={{ color: '#FF6600' }} />}
                      </div>
                    </button>
                  );
                })}
              </div>

              <div style={{
                padding: '12px 20px',
                borderTop: `1px solid ${isDark ? '#2B2B2B' : '#E2E8F0'}`,
                display: 'flex',
                gap: '10px'
              }}>
                <button
                  onClick={() => {
                    setActiveCategory('all');
                    setQuery('');
                    setMobileFilterOpen(false);
                  }}
                  className="btn-outline"
                  style={{
                    flex: 1,
                    borderColor: isDark ? '#444' : '#CBD5E1',
                    color: isDark ? '#CCC' : '#555',
                    fontSize: '0.84rem'
                  }}
                >
                  {language === 'uk' ? 'Скинути' : 'Reset'}
                </button>
                <button
                  onClick={() => setMobileFilterOpen(false)}
                  className="btn-primary"
                  style={{ flex: 2 }}
                >
                  <span>{language === 'uk' ? 'Показати' : 'Apply'} ({filteredDocs.length})</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Document Cards Grid */}
        {filteredDocs.length === 0 ? (
          <div style={{
            textAlign: 'center',
            padding: '60px 20px',
            backgroundColor: isDark ? 'rgba(24, 24, 24, 0.75)' : 'rgba(255, 255, 255, 0.75)',
            backdropFilter: 'blur(10px)',
            borderRadius: '12px',
            border: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)'}`
          }}>
            <FileText size={48} style={{ color: '#FF6600', marginBottom: '16px', opacity: 0.8 }} />
            <h3 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '8px' }}>
              {language === 'uk' ? 'Документів не знайдено' : 'No documents match your filter'}
            </h3>
            <p style={{ color: '#888' }}>
              {language === 'uk' ? 'Спробуйте змінити пошуковий запит або оберіть іншу категорію.' : 'Try adjusting your search query or category.'}
            </p>
          </div>
        ) : (
          <div className="responsive-card-grid">
            {filteredDocs.map((doc) => {
              const titleText = typeof doc.title === 'string' ? doc.title : doc.title[language] || doc.title.uk || doc.title.en;
              const descText = typeof doc.description === 'string' ? doc.description : doc.description[language] || doc.description.uk || doc.description.en;
              const catName = typeof doc.categoryName === 'string' ? doc.categoryName : (doc.categoryName && (doc.categoryName[language] || doc.categoryName.uk || doc.categoryName.en)) || doc.category;

              return (
                <ParallaxCard key={doc.id} delay={0.1} style={{ height: '100%' }}>
                  <div
                    style={{
                      backgroundColor: isDark ? 'rgba(28, 28, 28, 0.75)' : 'rgba(255, 255, 255, 0.75)',
                      backdropFilter: 'blur(10px)',
                      WebkitBackdropFilter: 'blur(10px)',
                      borderRadius: '12px',
                      border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.08)'}`,
                      padding: '22px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      boxShadow: isDark ? '0 4px 16px rgba(0,0,0,0.4)' : '0 4px 16px rgba(0,0,0,0.06)',
                      transition: 'border-color 0.3s ease',
                      boxSizing: 'border-box',
                      height: '100%'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#FF6600';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.08)';
                    }}
                  >
                  <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                    {/* Header Badges */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px', gap: '8px' }}>
                      <span style={{
                        backgroundColor: isDark ? 'rgba(255, 102, 0, 0.15)' : '#FFF4EC',
                        color: '#FF6600',
                        fontWeight: 800,
                        fontSize: '0.74rem',
                        padding: '3px 8px',
                        borderRadius: '4px',
                        textTransform: 'uppercase',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap'
                      }}>
                        {catName}
                      </span>

                      <div style={{ display: 'flex', gap: '6px', alignItems: 'center', flexShrink: 0 }}>
                        <span style={{
                          backgroundColor: doc.format === 'PDF' ? '#E53935' : doc.format === 'XLSX' || doc.format === 'XLS' ? '#2E7D32' : '#2563EB',
                          color: '#FFFFFF',
                          fontWeight: 900,
                          fontSize: '0.7rem',
                          padding: '2px 6px',
                          borderRadius: '3px'
                        }}>
                          {doc.format}
                        </span>
                        <span style={{ fontSize: '0.75rem', color: '#888', fontWeight: 600 }}>
                          {doc.size}
                        </span>
                      </div>
                    </div>

                    {/* Title & Description */}
                    <h3
                      className="line-clamp-2"
                      style={{
                        fontSize: '1.15rem',
                        fontWeight: 800,
                        color: isDark ? '#FFFFFF' : '#111111',
                        lineHeight: 1.35,
                        marginBottom: '8px',
                        minHeight: '2.6em'
                      }}
                      title={titleText}
                    >
                      {titleText}
                    </h3>

                    <p
                      className="line-clamp-2"
                      style={{
                        fontSize: '0.86rem',
                        color: isDark ? '#A0A0A0' : '#555555',
                        lineHeight: 1.5,
                        marginBottom: '20px',
                        minHeight: '2.8em'
                      }}
                    >
                      {descText}
                    </p>
                  </div>

                  {/* One-Click Download Button */}
                  <div style={{ marginTop: 'auto', paddingTop: '8px' }}>
                    <a
                      href={doc.file}
                      download
                      className="btn-primary"
                      style={{ width: '100%', justifyContent: 'center', textDecoration: 'none', minHeight: '44px' }}
                    >
                      <Download size={16} />
                      <span>
                        {language === 'uk' ? 'ЗАВАНТАЖИТИ ДОКУМЕНТ' : language === 'pl' ? 'POBIERZ DOKUMENT' : 'DOWNLOAD DOCUMENT'}
                      </span>
                    </a>
                  </div>
                  </div>
                </ParallaxCard>
              );
            })}
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .desktop-filter-bar {
            display: none !important;
          }
          .mobile-filter-bar {
            display: flex !important;
          }
        }
      `}</style>
    </div>
  );
}
