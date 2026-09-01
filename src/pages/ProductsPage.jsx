import React, { useState, useEffect } from 'react';
import { Search, ArrowRight, ShieldCheck } from 'lucide-react';
import { useTranslation } from '../i18n/LanguageContext';
import { useTheme } from '../theme/ThemeContext';
import { useProducts } from '../context/ProductContext';
import { getSpecLabel } from '../i18n/translations';
import ProductModal from '../components/ProductModal';

export default function ProductsPage({ initialCategory = 'all' }) {
  const { language } = useTranslation();
  const { theme } = useTheme();
  const { visibleProducts } = useProducts();

  const [activeCategory, setActiveCategory] = useState(initialCategory || 'all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const isDark = theme === 'dark';

  useEffect(() => {
    if (initialCategory) {
      setActiveCategory(initialCategory);
    }
  }, [initialCategory]);

  const categoryFilterTabs = [
    { id: 'all', label: { uk: 'Всі Моделі', en: 'All Equipment', pl: 'Wszystkie Modele' } },
    { id: 'drilling', label: { uk: 'Установки ГНБ', en: 'Directional Drills', pl: 'Wiertnice HDB' } },
    { id: 'trenchers', label: { uk: 'Траншеєкопачі', en: 'Trenchers', pl: 'Koparki Łańcuchowe' } },
    { id: 'skidsteers', label: { uk: 'Міні-навантажувачі', en: 'Skid Steers', pl: 'Ładowarki Kompaktowe' } },
    { id: 'vacuums', label: { uk: 'Вакуумні Екскаватори', en: 'Vacuum Excavators', pl: 'Koparki Próżniowe' } },
    { id: 'fluids', label: { uk: 'Приготування Розчину', en: 'Fluid Systems', pl: 'Systemy Płuczkowe' } }
  ];

  // Filter visible products based on selected category and search query
  const filteredProducts = visibleProducts.filter((prod) => {
    const matchesCategory = activeCategory === 'all' || prod.category === activeCategory;
    const titleText = (prod.title[language] || prod.title.uk || prod.title.en).toLowerCase();
    const descText = (prod.desc[language] || prod.desc.uk || prod.desc.en).toLowerCase();
    const matchesSearch = titleText.includes(searchQuery.toLowerCase()) || descText.includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
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
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 10 }}>
          <span style={{
            color: '#FF6600',
            fontWeight: 800,
            fontSize: '0.9rem',
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
            {language === 'uk' ? 'Каталог Спецтехніки Ditch Witch' : language === 'pl' ? 'Katalog Sprzętu Ditch Witch' : 'Ditch Witch Equipment Catalog'}
          </h1>
          <p style={{
            color: '#CED0D1',
            maxWidth: '750px',
            margin: '0 auto',
            fontSize: '1.05rem',
            lineHeight: 1.6
          }}>
            {language === 'uk'
              ? 'Найповніша лінійка бурових установок ГНБ, траншеєкопачів, вакуумних екскаваторів та навантажувачів від офіційного дистриб’ютора з гарантією та сервісом.'
              : language === 'pl'
              ? 'Pełna oferta wiertnic sterowanych HDB, koparek łańcuchowych, koparek próżniowych i ładowarek od oficjalnego dystrybutora z gwarancją.'
              : 'Complete range of directional drills, trenchers, vacuum excavators, and skid steers with official warranty and certified service.'}
          </p>
        </div>
      </div>

      {/* Main Catalog Section */}
      <div className="container" style={{ marginTop: '40px' }}>
        {/* Category Tabs & Search Bar Container */}
        <div style={{
          backgroundColor: isDark ? 'rgba(28, 28, 28, 0.75)' : 'rgba(255, 255, 255, 0.75)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          borderRadius: '12px',
          padding: '24px',
          boxShadow: isDark ? '0 4px 20px rgba(0,0,0,0.5)' : '0 4px 20px rgba(0,0,0,0.06)',
          border: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)'}`,
          marginBottom: '40px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px'
        }}>
          {/* Category Tabs */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '12px'
          }}>
            {categoryFilterTabs.map((tab) => {
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

          {/* Search Input Bar */}
          <div style={{ position: 'relative' }}>
            <Search size={20} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#888' }} />
            <input
              type="text"
              placeholder={language === 'uk' ? 'Пошук моделі (напр. JT10, C16X, Вакуум)...' : language === 'pl' ? 'Szukaj modelu (np. JT10, C16X)...' : 'Search machine model (e.g. JT10, C16X)...'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
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

        {/* Products Grid with 25% Transparency Glassmorphism */}
        {filteredProducts.length === 0 ? (
          <div style={{
            textAlign: 'center',
            padding: '60px 20px',
            backgroundColor: isDark ? 'rgba(24, 24, 24, 0.75)' : 'rgba(255, 255, 255, 0.75)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            borderRadius: '10px',
            border: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)'}`
          }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700 }}>
              {language === 'uk' ? 'Моделей не знайдено' : language === 'pl' ? 'Nie znaleziono modeli' : 'No equipment available'}
            </h3>
            <p style={{ color: '#888', marginTop: '8px' }}>
              {language === 'uk' ? 'Спробуйте обрати іншу категорію або змінити запит.' : 'Try selecting another category or adjusting your search.'}
            </p>
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '30px'
          }}>
            {filteredProducts.map((prod) => {
              const titleText = prod.title[language] || prod.title.uk || prod.title.en;
              const taglineText = prod.tagline[language] || prod.tagline.uk || prod.tagline.en;

              return (
                <div
                  key={prod.id}
                  style={{
                    backgroundColor: isDark ? 'rgba(28, 28, 28, 0.75)' : 'rgba(255, 255, 255, 0.75)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    borderRadius: '10px',
                    border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.08)'}`,
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
                    e.currentTarget.style.borderColor = isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.08)';
                  }}
                >
                  <div>
                    {/* Dead-Centered Image Container Box */}
                    <div style={{
                      backgroundColor: isDark ? 'rgba(20, 20, 20, 0.6)' : 'rgba(242, 244, 247, 0.8)',
                      padding: '20px',
                      height: '210px',
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justify: 'center',
                      position: 'relative',
                      overflow: 'hidden'
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
                          textTransform: 'uppercase',
                          zIndex: 5
                        }}>
                          {language === 'uk' ? 'ФЛАГМАН' : language === 'pl' ? 'POLECANE' : 'FEATURED'}
                        </span>
                      )}

                      <img
                        src={prod.image}
                        alt={titleText}
                        style={{
                          maxHeight: '170px',
                          maxWidth: '88%',
                          width: 'auto',
                          height: 'auto',
                          objectFit: 'contain',
                          display: 'block',
                          margin: 'auto'
                        }}
                      />
                    </div>

                    {/* Body Content */}
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

                      {/* Clean 2-Column Aligned Specs */}
                      <div style={{
                        borderTop: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)'}`,
                        paddingTop: '12px',
                        marginBottom: '16px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '6px'
                      }}>
                        {Object.entries(prod.specs).slice(0, 3).map(([sKey, sVal], idx) => {
                          const translatedLabel = getSpecLabel(sKey, language);

                          return (
                            <div key={idx} style={{
                              display: 'grid',
                              gridTemplateColumns: '135px 1fr',
                              alignItems: 'center',
                              gap: '8px',
                              fontSize: '0.82rem'
                            }}>
                              <span style={{ color: isDark ? '#999' : '#666', fontWeight: 700, whiteSpace: 'nowrap' }}>
                                {translatedLabel}:
                              </span>
                              <strong style={{ color: isDark ? '#FFF' : '#222' }}>
                                {sVal}
                              </strong>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Footer Action Button */}
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
