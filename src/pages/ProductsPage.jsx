import React, { useState } from 'react';
import { Search, ArrowRight, ExternalLink, SlidersHorizontal, X, Check, Filter } from 'lucide-react';
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
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const isDark = theme === 'dark';

  const categoryFilterTabs = [
    { id: 'all', label: { uk: 'Всі Моделі', en: 'All Equipment', pl: 'Wszystkie Modele' } },
    { id: 'hdd', label: { uk: 'Машини ГНБ (HDD)', en: 'HDD Drills', pl: 'Wiertnice HDB' } },
    { id: 'mixers', label: { uk: 'Міксери бентонітові', en: 'Mud Mixers', pl: 'Mieszalniki' } },
    { id: 'electronics', label: { uk: 'Електронні системи локацій', en: 'Subsite® Electronics', pl: 'Elektronika Subsite®' } },
    { id: 'locators', label: { uk: 'Локатори Subsite®', en: 'Subsite® Locators', pl: 'Lokalizatory Subsite®' } },
    { id: 'trenchers', label: { uk: 'Траншеєкопачі & Віброукладачі', en: 'Trenchers & Plows', pl: 'Koparki Łańcuchowe' } },
    { id: 'bentonite', label: { uk: 'Бентоніт та полімери', en: 'Bentonite & Polymers', pl: 'Bentonit i Polimery' } },
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
    setMobileFilterOpen(false);
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

  const activeTabObj = categoryFilterTabs.find((t) => t.id === activeCategory) || categoryFilterTabs[0];
  const activeTabLabel = activeTabObj.label[language] || activeTabObj.label.en;

  return (
    <div style={{
      backgroundColor: isDark ? '#0F0F0F' : '#F8F9FA',
      color: isDark ? '#FFFFFF' : '#111111',
      minHeight: '85vh',
      paddingBottom: '80px',
      transition: 'background-color 0.3s ease, color 0.3s ease',
      overflowX: 'hidden',
      maxWidth: '100%'
    }}>
      {/* Header Banner */}
      <div style={{
        backgroundColor: '#050505',
        color: '#FFFFFF',
        padding: '50px 0',
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
            fontSize: 'clamp(1.8rem, 4vw, 3.2rem)',
            fontWeight: 900,
            marginTop: '8px',
            marginBottom: '12px',
            textTransform: 'uppercase',
            lineHeight: 1.15
          }}>
            {language === 'uk' ? 'Каталог Продукції та Спеціальної Техніки' : language === 'pl' ? 'Katalog Sprzętu i Maszyn Budowlanych' : 'Product & Construction Equipment Catalog'}
          </h1>
          <p style={{
            color: '#CED0D1',
            maxWidth: '780px',
            margin: '0 auto',
            fontSize: '1rem',
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
      <div className="container" style={{ marginTop: '32px' }}>
        {/* DESKTOP Filter & Search Container */}
        <div className="desktop-filter-bar" style={{
          backgroundColor: isDark ? 'rgba(28, 28, 28, 0.75)' : 'rgba(255, 255, 255, 0.75)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
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
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px'
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
                    padding: '8px 16px',
                    minHeight: '40px',
                    fontSize: '0.86rem',
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
            <Search size={18} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#888' }} />
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
                padding: '12px 18px 12px 46px',
                minHeight: '44px',
                fontSize: '0.92rem',
                color: isDark ? '#FFFFFF' : '#111111',
                outline: 'none',
                boxSizing: 'border-box'
              }}
            />
          </div>
        </div>

        {/* MOBILE Compact Filter & Search Bar (< 768px) */}
        <div className="mobile-filter-bar" style={{
          display: 'none',
          marginBottom: '24px',
          flexDirection: 'column',
          gap: '12px'
        }}>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            {/* Filter Trigger Button */}
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
                {filteredProducts.length}
              </span>
            </button>
          </div>

          {/* Quick Search on Mobile */}
          <div style={{ position: 'relative', width: '100%' }}>
            <Search size={18} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: '#888' }} />
            <input
              type="text"
              placeholder={language === 'uk' ? 'Пошук моделі (напр. JT10, C16X)...' : 'Search models...'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
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
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
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
              {/* Bottom Sheet Handle & Header */}
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
                    {language === 'uk' ? 'Категорії техніки' : language === 'pl' ? 'Kategorie maszyn' : 'Equipment Categories'}
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

              {/* Category Options List */}
              <div style={{
                padding: '16px 20px',
                overflowY: 'auto',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                maxHeight: '55vh'
              }}>
                {categoryFilterTabs.map((tab) => {
                  const isActive = activeCategory === tab.id;
                  const count = tab.id === 'all'
                    ? products.filter(p => p.category !== 'american_augers').length
                    : products.filter(p => p.category === tab.id).length;

                  return (
                    <button
                      key={tab.id}
                      onClick={() => handleTabClick(tab)}
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
                        {!tab.isExternal && (
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
                        )}
                        {tab.isExternal && <ExternalLink size={14} style={{ color: '#FF6600' }} />}
                        {isActive && <Check size={16} style={{ color: '#FF6600' }} />}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Bottom Actions */}
              <div style={{
                padding: '12px 20px',
                borderTop: `1px solid ${isDark ? '#2B2B2B' : '#E2E8F0'}`,
                display: 'flex',
                gap: '10px'
              }}>
                <button
                  onClick={() => {
                    setActiveCategory('all');
                    setSearchQuery('');
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
                  <span>{language === 'uk' ? 'Показати результати' : 'Apply Filters'} ({filteredProducts.length})</span>
                </button>
              </div>
            </div>
          </div>
        )}

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
          <div className="responsive-card-grid">
            {filteredProducts.map((prod, idx) => {
              const titleText = prod.title[language] || prod.title.uk || prod.title.en;
              const taglineText = prod.tagline[language] || prod.tagline.uk || prod.tagline.en;
              const isHovered = hoveredCardId === prod.id;

              return (
                <SmoothProductCard key={prod.id} delay={0.05 * (idx % 6)}>
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
                      justifyContent: 'space-between',
                      boxShadow: isHovered
                        ? isDark ? '0 12px 30px rgba(255, 102, 0, 0.3)' : '0 12px 30px rgba(255, 102, 0, 0.2)'
                        : isDark ? '0 4px 16px rgba(0,0,0,0.4)' : '0 4px 16px rgba(0,0,0,0.06)',
                      height: '100%',
                      boxSizing: 'border-box',
                      transition: 'border-color 0.28s ease, box-shadow 0.28s ease'
                    }}
                  >
                    <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                      {/* Image Box with Explicit Aspect Ratio for CLS Prevention */}
                      <div style={{
                        backgroundColor: isDark ? 'rgba(20, 20, 20, 0.6)' : 'rgba(242, 244, 247, 0.8)',
                        padding: '16px',
                        height: '200px',
                        maxHeight: '200px',
                        width: '100%',
                        aspectRatio: '16 / 10',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative',
                        overflow: 'hidden',
                        boxSizing: 'border-box'
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
                            maxHeight: '160px',
                            maxWidth: '90%',
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

                      {/* Card Content with Clamped Header and Description */}
                      <div style={{ padding: '20px clamp(14px, 3.5vw, 22px)', display: 'flex', flexDirection: 'column', flexGrow: 1, minWidth: 0, boxSizing: 'border-box' }}>
                        <h3
                          className="line-clamp-2"
                          style={{
                            fontSize: '1.2rem',
                            fontWeight: 800,
                            color: isHovered ? '#FF6600' : isDark ? '#FFFFFF' : '#111111',
                            marginBottom: '6px',
                            lineHeight: 1.3,
                            minHeight: '2.6em',
                            transition: 'color 0.25s ease'
                          }}
                          title={titleText}
                        >
                          {titleText}
                        </h3>

                        <p
                          className="line-clamp-2"
                          style={{
                            fontSize: '0.86rem',
                            color: isDark ? '#A0A0A0' : '#666666',
                            marginBottom: '16px',
                            lineHeight: 1.5,
                            minHeight: '2.8em'
                          }}
                        >
                          {taglineText}
                        </p>

                        {/* Fast Specs Overview in Structured 2-Column Key/Value Grid */}
                        {prod.specs && (
                          <div style={{
                            backgroundColor: isDark ? 'rgba(18, 18, 18, 0.6)' : '#F8F9FA',
                            borderRadius: '6px',
                            padding: '10px 12px',
                            marginBottom: '16px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '5px',
                            fontSize: '0.78rem',
                            border: `1px solid ${isDark ? '#2B2B2B' : '#EAEAEA'}`,
                            minWidth: 0,
                            boxSizing: 'border-box'
                          }}>
                            {Object.entries(prod.specs).slice(0, 3).map(([key, val]) => (
                              <div key={key} style={{ display: 'flex', justifyContent: 'space-between', color: isDark ? '#CCC' : '#555', gap: '8px', minWidth: 0, alignItems: 'center' }}>
                                <span style={{ textTransform: 'capitalize', fontWeight: 600, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', minWidth: 0, flexShrink: 1 }}>
                                  {key}:
                                </span>
                                <span style={{ fontWeight: 800, color: '#FF6600', whiteSpace: 'nowrap', flexShrink: 0, textAlign: 'right' }}>
                                  {val}
                                </span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Bottom-Aligned Action Button */}
                    <div style={{ padding: '0 clamp(14px, 3.5vw, 22px) 20px clamp(14px, 3.5vw, 22px)', marginTop: 'auto', boxSizing: 'border-box' }}>
                      <button
                        onClick={() => setSelectedProduct(prod)}
                        className="btn-primary"
                        style={{ width: '100%', justifyContent: 'center', minHeight: '44px' }}
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
