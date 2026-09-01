import React, { useState } from 'react';
import { Search, ArrowRight, ExternalLink } from 'lucide-react';
import { useTranslation } from '../i18n/LanguageContext';
import { useTheme } from '../theme/ThemeContext';
import { useProducts } from '../context/ProductContext';
import ProductModal from '../components/ProductModal';
import SmoothProductCard from '../components/SmoothProductCard';

export default function ProductsPage({ initialCategory = 'all' }) {
  const { language } = useTranslation();
  const { theme } = useTheme();
  const { products } = useProducts();

  const [activeCategory, setActiveCategory] = useState(initialCategory || 'all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [hoveredCardId, setHoveredCardId] = useState(null);

  const isDark = theme === 'dark';

  const categoryFilterTabs = [
    { id: 'all', label: { uk: 'Всі Моделі', en: 'All Equipment', pl: 'Wszystkie Modele' } },
    { id: 'hdd', label: { uk: 'Машини ГНБ (HDD)', en: 'HDD Drills', pl: 'Wiertnice HDB' } },
    { id: 'mixers', label: { uk: 'Міксери бентонітові', en: 'Mud Mixers', pl: 'Mieszalniki' } },
    { id: 'electronics', label: { uk: 'Електроніка - системи пошуку та локалізації', en: 'Subsite® Electronics', pl: 'Elektronika Subsite®' } },
    { id: 'locators', label: { uk: 'Локатори Subsite®', en: 'Subsite® Locators', pl: 'Lokalizatory Subsite®' } },
    { id: 'trenchers', label: { uk: 'Траншеєкопачі & Віброукладачі', en: 'Trenchers & Plows', pl: 'Koparki Łańcuchowe' } },
    { id: 'bentonite', label: { uk: 'Бентоніт Baroid®', en: 'Baroid® Bentonite', pl: 'Bentonit Baroid®' } },
    { id: 'skidsteers', label: { uk: 'Навантажувачі SK', en: 'Stand-On Skid Steers', pl: 'Ładowarki SK' } },
    { id: 'american_augers', isExternal: true, label: { uk: 'American Augers® ↗', en: 'American Augers® ↗', pl: 'American Augers® ↗' } },
    { id: 'recycling', label: { uk: 'Рециклінг розчину', en: 'Mud Recycling', pl: 'Recykling Płuczki' } },
    { id: 'consumables', label: { uk: 'Витратні матеріали', en: 'Consumable Materials', pl: 'Materiały Zużywalne' } },
    { id: 'other', label: { uk: 'Інше / Інші товари', en: 'Other Equipment', pl: 'Inny Sprzęt' } }
  ];

  const handleTabClick = (tab) => {
    if (tab.id === 'american_augers') {
      window.open('https://www.americanaugers.com/', '_blank', 'noopener,noreferrer');
      return;
    }
    setActiveCategory(tab.id);
  };

  const filteredProducts = products.filter((prod) => {
    if (prod.category === 'american_augers') return false; // American Augers has no local products, redirects to official site
    const matchesCat = activeCategory === 'all' || prod.category === activeCategory;
    const titleText = (prod.title[language] || prod.title.uk || prod.title.en || '').toLowerCase();
    const descText = (prod.desc[language] || prod.desc.uk || prod.desc.en || '').toLowerCase();
    const query = searchQuery.toLowerCase().trim();

    const matchesQuery = !query || titleText.includes(query) || descText.includes(query) || prod.id.includes(query);
    return matchesCat && matchesQuery;
  });

  return (
    <div style={{
      backgroundColor: isDark ? '#0F0F0F' : '#F8F9FA',
      color: isDark ? '#FFFFFF' : '#111111',
      minHeight: '85vh',
      paddingBottom: '80px',
      transition: 'background-color 0.3s ease, color 0.3s ease'
    }}>
      {/* Header Banner */}
      <div style={{
        backgroundColor: '#050505',
        color: '#FFFFFF',
        padding: '60px 0',
        borderBottom: '4px solid #FF6600',
        position: 'relative'
      }}>
        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 10 }}>
          <span style={{
            color: '#FF6600',
            fontWeight: 800,
            fontSize: '0.85rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase'
          }}>
            {language === 'uk' ? 'ОФІЦІЙНИЙ КАТАЛОГ ДІТЧ ВІТЧ УКРАЇНА' : language === 'pl' ? 'OFICJALNY KATALOG DITCH WITCH UKRAINA' : 'OFFICIAL DITCH WITCH UKRAINE CATALOG'}
          </span>
          <h1 style={{
            fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
            fontWeight: 900,
            marginTop: '8px',
            marginBottom: '14px',
            textTransform: 'uppercase'
          }}>
            {language === 'uk' ? 'Каталог Продукції та Спеціальної Техніки' : language === 'pl' ? 'Katalog Sprzętu i Maszyn Budowlanych' : 'Product & Construction Equipment Catalog'}
          </h1>
          <p style={{
            color: '#CED0D1',
            maxWidth: '780px',
            margin: '0 auto',
            fontSize: '1.05rem',
            lineHeight: 1.6
          }}>
            {language === 'uk'
              ? 'Найповніша лінійка бурових установок ГНБ, міксерів, локаційних систем Subsite®, навантажувачів та продукції Baroid® від офіційного дистриб’ютора JLM Group.'
              : language === 'pl'
              ? 'Pełna oferta wiertnic sterowanych HDB, mieszalników, elektroniki Subsite® i produktów Baroid® od oficjalnego dystrybutora Grupy JLM.'
              : 'Complete range of HDD drills, mud mixers, Subsite® locating systems, skid steers, and Baroid® products from official distributor JLM Group.'}
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
            gap: '10px'
          }}>
            {categoryFilterTabs.map((tab) => {
              const isActive = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabClick(tab)}
                  style={{
                    backgroundColor: isActive ? '#FF6600' : isDark ? 'rgba(40,40,40,0.8)' : '#F0F2F5',
                    color: isActive ? '#FFFFFF' : isDark ? '#DDDDDD' : '#333333',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '10px 18px',
                    fontSize: '0.88rem',
                    fontWeight: 800,
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  <span>{tab.label[language] || tab.label.en}</span>
                  {tab.isExternal && <ExternalLink size={14} />}
                </button>
              );
            })}
          </div>

          {/* Search Input Bar */}
          <div style={{ position: 'relative' }}>
            <Search size={20} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#888' }} />
            <input
              type="text"
              placeholder={language === 'uk' ? 'Пошук моделі (напр. JT10, Subsite, Baroid, C16X)...' : language === 'pl' ? 'Szukaj modelu (np. JT10, Subsite, Baroid)...' : 'Search machine model (e.g. JT10, Subsite, Baroid)...'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                backgroundColor: isDark ? 'rgba(20, 20, 20, 0.8)' : '#F9F9FB',
                border: `1px solid ${isDark ? '#333333' : '#CCCCCC'}`,
                borderRadius: '8px',
                padding: '14px 20px 14px 48px',
                fontSize: '0.95rem',
                color: isDark ? '#FFFFFF' : '#111111',
                outline: 'none'
              }}
            />
          </div>
        </div>

        {/* Product Cards Grid with Fast Smooth Entrance & Hover Zoom Effect */}
        {filteredProducts.length === 0 ? (
          <div style={{
            textAlign: 'center',
            padding: '60px 20px',
            backgroundColor: isDark ? 'rgba(28, 28, 28, 0.5)' : '#FFFFFF',
            borderRadius: '12px',
            border: `1px solid ${isDark ? '#333' : '#EEE'}`
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
            {filteredProducts.map((prod, idx) => {
              const titleText = prod.title[language] || prod.title.uk || prod.title.en;
              const taglineText = prod.tagline[language] || prod.tagline.uk || prod.tagline.en;
              const isHovered = hoveredCardId === prod.id;

              return (
                <SmoothProductCard key={prod.id} delay={0.06 * (idx % 6)}>
                  <div
                    onMouseEnter={() => setHoveredCardId(prod.id)}
                    onMouseLeave={() => setHoveredCardId(null)}
                    style={{
                      backgroundColor: isDark ? 'rgba(28, 28, 28, 0.85)' : '#FFFFFF',
                      borderRadius: '12px',
                      border: `2px solid ${isHovered ? '#FF6600' : isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.08)'}`,
                      overflow: 'hidden',
                      display: 'flex',
                      flexDirection: 'column',
                      justify: 'space-between',
                      boxShadow: isHovered
                        ? isDark ? '0 12px 30px rgba(255, 102, 0, 0.3)' : '0 12px 30px rgba(255, 102, 0, 0.2)'
                        : isDark ? '0 4px 16px rgba(0,0,0,0.4)' : '0 4px 16px rgba(0,0,0,0.06)',
                      height: '100%',
                      transition: 'border-color 0.28s ease, box-shadow 0.28s ease'
                    }}
                  >
                    <div>
                      {/* Image Box with Subtle Image Zoom on Hover */}
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
                            margin: 'auto',
                            transform: isHovered ? 'scale(1.06)' : 'scale(1)',
                            transition: 'transform 0.35s cubic-bezier(0.2, 0.8, 0.2, 1)'
                          }}
                        />
                      </div>

                      <div style={{ padding: '24px' }}>
                        <h3 style={{
                          fontSize: '1.25rem',
                          fontWeight: 800,
                          color: isHovered ? '#FF6600' : isDark ? '#FFFFFF' : '#111111',
                          marginBottom: '8px',
                          lineHeight: 1.3,
                          transition: 'color 0.25s ease'
                        }}>
                          {titleText}
                        </h3>

                        <p style={{
                          fontSize: '0.88rem',
                          color: isDark ? '#A0A0A0' : '#666666',
                          marginBottom: '20px',
                          lineHeight: 1.5,
                          minHeight: '42px'
                        }}>
                          {taglineText}
                        </p>

                        {/* Fast Specs Overview */}
                        {prod.specs && (
                          <div style={{
                            backgroundColor: isDark ? 'rgba(18, 18, 18, 0.6)' : '#F8F9FA',
                            borderRadius: '6px',
                            padding: '12px 14px',
                            marginBottom: '20px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '6px',
                            fontSize: '0.8rem',
                            border: `1px solid ${isDark ? '#2B2B2B' : '#EAEAEA'}`
                          }}>
                            {Object.entries(prod.specs).slice(0, 3).map(([key, val]) => (
                              <div key={key} style={{ display: 'flex', justifyContent: 'space-between', color: isDark ? '#CCC' : '#555' }}>
                                <span style={{ textTransform: 'capitalize', fontWeight: 600 }}>{key}:</span>
                                <span style={{ fontWeight: 800, color: '#FF6600' }}>{val}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    <div style={{ padding: '0 24px 24px 24px' }}>
                      <button
                        onClick={() => setSelectedProduct(prod)}
                        className="btn-primary"
                        style={{ width: '100%', justifyContent: 'center' }}
                      >
                        <span>{language === 'uk' ? 'ТЕХНІЧНІ ХАРАКТЕРИСТИКИ' : language === 'pl' ? 'SPECYFIKACJA TECHNICZNA' : 'VIEW SPECIFICATIONS'}</span>
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                </SmoothProductCard>
              );
            })}
          </div>
        )}
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
}
