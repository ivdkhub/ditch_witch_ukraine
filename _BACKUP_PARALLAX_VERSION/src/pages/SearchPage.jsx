import React, { useState } from 'react';
import { Search, ArrowRight, ShieldCheck, Filter } from 'lucide-react';
import { useTranslation } from '../i18n/LanguageContext';
import { useTheme } from '../theme/ThemeContext';
import { useProducts } from '../context/ProductContext';
import ProductModal from '../components/ProductModal';

export default function SearchPage({ initialQuery = '', onNavigateToProducts }) {
  const { language } = useTranslation();
  const { theme } = useTheme();
  const { visibleProducts } = useProducts();

  const [query, setQuery] = useState(initialQuery);
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const isDark = theme === 'dark';

  const categoryFilterTabs = [
    { id: 'all', label: { uk: 'Всі Категорії', en: 'All Categories', pl: 'Wszystkie Kategorie' } },
    { id: 'drilling', label: { uk: 'Установки ГНБ', en: 'Directional Drills', pl: 'Wiertnice HDB' } },
    { id: 'trenchers', label: { uk: 'Траншеєкопачі', en: 'Trenchers', pl: 'Koparki Łańcuchowe' } },
    { id: 'skidsteers', label: { uk: 'Міні-навантажувачі', en: 'Skid Steers', pl: 'Ładowarki Kompaktowe' } },
    { id: 'vacuums', label: { uk: 'Вакуумні Екскаватори', en: 'Vacuum Excavators', pl: 'Koparki Próżniowe' } },
    { id: 'fluids', label: { uk: 'Приготування Розчину', en: 'Fluid Systems', pl: 'Systemy Płuczkowe' } }
  ];

  // Filter visible products based on searchQuery and category
  const searchResults = visibleProducts.filter((prod) => {
    const matchesCategory = activeCategory === 'all' || prod.category === activeCategory;

    const titleUk = (prod.title.uk || '').toLowerCase();
    const titleEn = (prod.title.en || '').toLowerCase();
    const titlePl = (prod.title.pl || '').toLowerCase();

    const taglineUk = (prod.tagline.uk || '').toLowerCase();
    const taglineEn = (prod.tagline.en || '').toLowerCase();

    const descUk = (prod.desc.uk || '').toLowerCase();

    const q = query.toLowerCase().trim();

    const matchesQuery =
      q === '' ||
      titleUk.includes(q) ||
      titleEn.includes(q) ||
      titlePl.includes(q) ||
      taglineUk.includes(q) ||
      taglineEn.includes(q) ||
      descUk.includes(q) ||
      prod.category.includes(q);

    return matchesCategory && matchesQuery;
  });

  return (
    <div style={{
      backgroundColor: isDark ? '#0F0F0F' : '#F8F9FA',
      color: isDark ? '#FFFFFF' : '#111111',
      minHeight: '80vh',
      paddingBottom: '80px',
      transition: 'background-color 0.3s ease, color 0.3s ease'
    }}>
      {/* Search Page Hero Banner */}
      <div style={{
        backgroundColor: '#050505',
        color: '#FFFFFF',
        padding: '50px 0',
        borderBottom: '4px solid #FF6600',
        position: 'relative'
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <span style={{
            color: '#FF6600',
            fontWeight: 800,
            fontSize: '0.85rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase'
          }}>
            DITCH WITCH SEARCH ENGINE
          </span>
          <h1 style={{
            fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
            fontWeight: 900,
            marginTop: '8px',
            marginBottom: '20px',
            textTransform: 'uppercase'
          }}>
            {language === 'uk' ? 'Пошук Спецтехніки та Обладнання' : language === 'pl' ? 'Wyszukiwarka Sprzętu Ditch Witch' : 'Ditch Witch Equipment Search'}
          </h1>

          {/* Search Bar Input */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: isDark ? '#1C1C1C' : '#FFFFFF',
            border: '2px solid #FF6600',
            borderRadius: '40px',
            padding: '6px 6px 6px 20px',
            maxWidth: '650px',
            boxShadow: '0 8px 24px rgba(255, 102, 0, 0.25)'
          }}>
            <Search size={22} style={{ color: '#FF6600', marginRight: '12px', flexShrink: 0 }} />
            <input
              type="text"
              placeholder={language === 'uk' ? 'Введіть модель або тип (напр. JT10, C16X, Вакуум)...' : 'Search machine model or type (e.g. JT10, C16X)...'}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              style={{
                width: '100%',
                backgroundColor: 'transparent',
                border: 'none',
                color: isDark ? '#FFFFFF' : '#111111',
                fontSize: '1.05rem',
                fontWeight: 600,
                outline: 'none'
              }}
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#888',
                  cursor: 'pointer',
                  padding: '4px 10px',
                  fontWeight: 700,
                  fontSize: '0.9rem'
                }}
              >
                ✕
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="container" style={{ marginTop: '36px' }}>
        {/* Results Stats & Category Filter Tabs */}
        <div style={{
          backgroundColor: isDark ? '#1C1C1C' : '#FFFFFF',
          borderRadius: '12px',
          padding: '24px',
          boxShadow: isDark ? '0 4px 20px rgba(0,0,0,0.5)' : '0 4px 20px rgba(0,0,0,0.06)',
          border: `1px solid ${isDark ? '#2C2C2C' : '#EAEAEA'}`,
          marginBottom: '36px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 800, margin: 0 }}>
              {query.trim() !== '' ? (
                <>
                  {language === 'uk' ? 'Результати пошуку для' : 'Search results for'}: <span style={{ color: '#FF6600' }}>"{query}"</span>
                </>
              ) : (
                <>{language === 'uk' ? 'Всі наявні моделі спецтехніки' : 'All available machinery'}</>
              )}
            </h3>

            <div style={{
              backgroundColor: '#FF6600',
              color: '#FFFFFF',
              fontWeight: 800,
              fontSize: '0.8rem',
              padding: '4px 12px',
              borderRadius: '20px'
            }}>
              {searchResults.length} {language === 'uk' ? 'моделей знайдено' : 'models found'}
            </div>
          </div>

          {/* Category Tabs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
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
                    padding: '8px 18px',
                    fontSize: '0.88rem',
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
        </div>

        {/* Product Cards Grid */}
        {searchResults.length === 0 ? (
          <div style={{
            textAlign: 'center',
            padding: '70px 20px',
            backgroundColor: isDark ? '#181818' : '#FFFFFF',
            borderRadius: '12px',
            border: `1px solid ${isDark ? '#2C2C2C' : '#EAEAEA'}`
          }}>
            <Search size={48} style={{ color: '#FF6600', marginBottom: '16px', opacity: 0.8 }} />
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '8px' }}>
              {language === 'uk' ? 'За вашим запитом нічого не знайдено' : 'No equipment matches your search query'}
            </h3>
            <p style={{ color: '#888', maxWidth: '500px', margin: '0 auto 20px auto' }}>
              {language === 'uk' ? 'Спробуйте перевірити орфографію або оберіть іншу категорію техніки.' : 'Try checking your search spelling or selecting a different equipment category.'}
            </p>
            <button
              onClick={() => { setQuery(''); setActiveCategory('all'); }}
              className="btn-primary"
            >
              <span>{language === 'uk' ? 'СКАСУВАТИ ПОШУК' : 'RESET SEARCH'}</span>
            </button>
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '30px'
          }}>
            {searchResults.map((prod) => {
              const titleText = prod.title[language] || prod.title.uk || prod.title.en;
              const taglineText = prod.tagline[language] || prod.tagline.uk || prod.tagline.en;

              return (
                <div
                  key={prod.id}
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
                    {/* Machine Image Box */}
                    <div style={{
                      backgroundColor: isDark ? '#141414' : '#F2F4F7',
                      padding: '24px',
                      height: '220px',
                      display: 'flex',
                      alignItems: 'center',
                      justify: 'center',
                      position: 'relative'
                    }}>
                      {prod.featured && (
                        <span style={{
                          position: 'absolute',
                          top: '12px',
                          left: '12px',
                          backgroundColor: '#FF6600',
                          color: '#FFFFFF',
                          fontWeight: 800,
                          fontSize: '0.7rem',
                          padding: '3px 8px',
                          borderRadius: '3px',
                          textTransform: 'uppercase'
                        }}>
                          {language === 'uk' ? 'ФЛАГМАН' : language === 'pl' ? 'POLECANE' : 'FEATURED'}
                        </span>
                      )}

                      <img
                        src={prod.image}
                        alt={titleText}
                        style={{
                          maxHeight: '180px',
                          maxWidth: '100%',
                          objectFit: 'contain'
                        }}
                      />
                    </div>

                    {/* Content Box */}
                    <div style={{ padding: '24px' }}>
                      <h3 style={{
                        fontSize: '1.25rem',
                        fontWeight: 800,
                        color: isDark ? '#FFFFFF' : '#111111',
                        marginBottom: '8px',
                        lineHeight: 1.3
                      }}>
                        {titleText}
                      </h3>

                      <p style={{
                        color: '#FF6600',
                        fontSize: '0.88rem',
                        fontWeight: 700,
                        marginBottom: '16px'
                      }}>
                        {taglineText}
                      </p>

                      {/* Specs Summary */}
                      <div style={{
                        borderTop: `1px solid ${isDark ? '#2E2E2E' : '#EEEEEE'}`,
                        paddingTop: '12px',
                        marginBottom: '16px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '6px'
                      }}>
                        {Object.entries(prod.specs).slice(0, 3).map(([sKey, sVal], idx) => (
                          <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem' }}>
                            <span style={{ color: isDark ? '#999' : '#666', textTransform: 'capitalize' }}>{sKey}:</span>
                            <strong style={{ color: isDark ? '#FFF' : '#222' }}>{sVal}</strong>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Action Button to Open Full Modal */}
                  <div style={{ padding: '0 24px 24px 24px' }}>
                    <button
                      onClick={() => setSelectedProduct(prod)}
                      className="btn-primary"
                      style={{ width: '100%', justifyContent: 'center' }}
                    >
                      <span>
                        {language === 'uk' ? 'ХАРАКТЕРИСТИКИ ТА ЦІНА' : language === 'pl' ? 'SPECYFIKACJA I CENA' : 'SPECS & QUOTE'}
                      </span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Detailed Spec Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
}
