import React, { useState } from 'react';
import { Search, Download, FileText, CheckCircle, ShieldCheck } from 'lucide-react';
import { useTranslation } from '../i18n/LanguageContext';
import { useTheme } from '../theme/ThemeContext';
import { useDocuments } from '../context/DocumentContext';

export default function DocumentsPage() {
  const { language } = useTranslation();
  const { theme } = useTheme();
  const { documents } = useDocuments();

  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

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
            DITCH WITCH UKRAINE DOCUMENTATION
          </span>
          <h1 style={{
            fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
            fontWeight: 900,
            marginTop: '8px',
            marginBottom: '14px',
            textTransform: 'uppercase'
          }}>
            {language === 'uk' ? 'Центр Завантаження Документації' : language === 'pl' ? 'Centrum Pobierania Dokumentacji' : 'Technical Documentation & Manuals'}
          </h1>
          <p style={{
            color: '#CED0D1',
            maxWidth: '750px',
            margin: '0 auto',
            fontSize: '1.05rem',
            lineHeight: 1.6
          }}>
            {language === 'uk'
              ? 'Офіційні брошури, паспорти обладнання, керівництва з експлуатації та таблиці рецептур бурових розчинів у форматі Word, PDF та Excel.'
              : language === 'pl'
              ? 'Oficjalne broszury, karty techniczne i instrukcje obsługi w formacie Word, PDF i Excel.'
              : 'Download official technical brochures, machine spec sheets, Subsite locating guides, and Baroid mud mix ratios.'}
          </p>
        </div>
      </div>

      <div className="container" style={{ marginTop: '40px' }}>
        {/* Search & Filter Bar */}
        <div style={{
          backgroundColor: isDark ? 'rgba(28, 28, 28, 0.75)' : 'rgba(255, 255, 255, 0.75)',
          backdropFilter: 'blur(10px)',
          borderRadius: '12px',
          padding: '24px',
          boxShadow: isDark ? '0 4px 20px rgba(0,0,0,0.5)' : '0 4px 20px rgba(0,0,0,0.06)',
          border: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)'}`,
          marginBottom: '36px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px'
        }}>
          {/* Category Tabs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
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
                    padding: '10px 20px',
                    fontSize: '0.9rem',
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
            <Search size={20} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#888' }} />
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
                padding: '14px 20px 14px 48px',
                color: isDark ? '#FFFFFF' : '#000000',
                fontSize: '0.95rem',
                outline: 'none'
              }}
            />
          </div>
        </div>

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
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '24px'
          }}>
            {filteredDocs.map((doc) => {
              const titleText = typeof doc.title === 'string' ? doc.title : doc.title[language] || doc.title.uk || doc.title.en;
              const descText = typeof doc.description === 'string' ? doc.description : doc.description[language] || doc.description.uk || doc.description.en;
              const catName = typeof doc.categoryName === 'string' ? doc.categoryName : (doc.categoryName && (doc.categoryName[language] || doc.categoryName.uk || doc.categoryName.en)) || doc.category;

              return (
                <div
                  key={doc.id}
                  style={{
                    backgroundColor: isDark ? 'rgba(28, 28, 28, 0.75)' : 'rgba(255, 255, 255, 0.75)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    borderRadius: '10px',
                    border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.08)'}`,
                    padding: '24px',
                    display: 'flex',
                    flexDirection: 'column',
                    justify: 'space-between',
                    boxShadow: isDark ? '0 4px 16px rgba(0,0,0,0.4)' : '0 4px 16px rgba(0,0,0,0.06)',
                    transition: 'transform 0.3s ease, border-color 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.borderColor = '#FF6600';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.08)';
                  }}
                >
                  <div>
                    {/* Header Badges */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                      <span style={{
                        backgroundColor: isDark ? 'rgba(255, 102, 0, 0.15)' : '#FFF4EC',
                        color: '#FF6600',
                        fontWeight: 800,
                        fontSize: '0.74rem',
                        padding: '3px 8px',
                        borderRadius: '4px',
                        textTransform: 'uppercase'
                      }}>
                        {catName}
                      </span>

                      <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
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
                    <h3 style={{
                      fontSize: '1.15rem',
                      fontWeight: 800,
                      color: isDark ? '#FFFFFF' : '#111111',
                      lineHeight: 1.35,
                      marginBottom: '10px'
                    }}>
                      {titleText}
                    </h3>

                    <p style={{
                      fontSize: '0.88rem',
                      color: isDark ? '#A0A0A0' : '#555555',
                      lineHeight: 1.5,
                      marginBottom: '24px'
                    }}>
                      {descText}
                    </p>
                  </div>

                  {/* One-Click Download Button */}
                  <a
                    href={doc.file}
                    download
                    className="btn-primary"
                    style={{ width: '100%', justifyContent: 'center', textDecoration: 'none' }}
                  >
                    <Download size={16} />
                    <span>
                      {language === 'uk' ? 'ЗАВАНТАЖИТИ ДОКУМЕНТ' : language === 'pl' ? 'POBIERZ DOKUMENT' : 'DOWNLOAD DOCUMENT'}
                    </span>
                  </a>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
