import React, { useState, useRef, useEffect } from 'react';
import { Phone, Search, ShieldCheck, ArrowRight, X } from 'lucide-react';
import { useTranslation } from '../i18n/LanguageContext';
import SettingsMenu from './SettingsMenu';
import { useTheme } from '../theme/ThemeContext';
import { useProducts } from '../context/ProductContext';
import ProductModal from './ProductModal';

export default function TopBar({ onOpenAdmin, onSearch }) {
  const { t, language } = useTranslation();
  const { theme } = useTheme();
  const { visibleProducts } = useProducts();

  const [searchQuery, setSearchQuery] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const isDark = theme === 'dark';
  const searchContainerRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleInputChange = (e) => {
    const val = e.target.value;
    setSearchQuery(val);
    if (val.trim() !== '') {
      setIsDropdownOpen(true);
    } else {
      setIsDropdownOpen(false);
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setIsDropdownOpen(true);
    }
  };

  const handleSelectProduct = (product) => {
    setIsDropdownOpen(false);
    setSelectedProduct(product);
  };

  // Filter matching products live
  const matchingProducts = visibleProducts.filter((prod) => {
    if (!searchQuery.trim()) return false;
    const q = searchQuery.toLowerCase().trim();
    const titleUk = (prod.title.uk || '').toLowerCase();
    const titleEn = (prod.title.en || '').toLowerCase();
    const taglineUk = (prod.tagline.uk || '').toLowerCase();

    return titleUk.includes(q) || titleEn.includes(q) || taglineUk.includes(q) || prod.category.includes(q);
  });

  return (
    <div style={{
      backgroundColor: isDark ? '#121212' : '#F8FAFC',
      color: isDark ? '#FFFFFF' : '#1E293B',
      fontSize: '0.85rem',
      borderBottom: `1px solid ${isDark ? '#262626' : '#E2E8F0'}`,
      padding: '8px 0',
      transition: 'background-color 0.3s ease, color 0.3s ease',
      position: 'relative',
      zIndex: 1200
    }}>
      <div className="container topbar-container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        gap: '12px'
      }}>
        {/* Left Side: Phones (+380 50 380 66 92 & +380 50 689 46 21) & Official Distributor Badge */}
        <div className="topbar-left" style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <Phone size={15} style={{ color: '#FF6600', flexShrink: 0 }} />
            <a
              href="tel:+380503806692"
              style={{
                color: isDark ? '#E2E8F0' : '#1E293B',
                fontSize: '0.88rem',
                fontWeight: 700,
                textDecoration: 'none',
                transition: 'color 0.2s',
                whiteSpace: 'nowrap'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#FF6600'}
              onMouseLeave={(e) => e.currentTarget.style.color = isDark ? '#E2E8F0' : '#1E293B'}
            >
              <span style={{ lineHeight: 1 }}>{t.topbar.phoneUA || '+380 50 380 66 92'}</span>
            </a>
            <span style={{ color: isDark ? '#475569' : '#CBD5E1', fontSize: '0.82rem', fontWeight: 700 }}>/</span>
            <a
              href="tel:+380506894621"
              style={{
                color: isDark ? '#CBD5E1' : '#475569',
                fontSize: '0.84rem',
                fontWeight: 700,
                textDecoration: 'none',
                transition: 'color 0.2s',
                whiteSpace: 'nowrap'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#FF6600'}
              onMouseLeave={(e) => e.currentTarget.style.color = isDark ? '#CBD5E1' : '#475569'}
              title={language === 'uk' ? 'Сервісна служба' : 'Service Line'}
            >
              <span style={{ lineHeight: 1 }}>{t.topbar.phoneUA2 || '+380 50 689 46 21'}</span>
            </a>
          </div>

          <div
            className="topbar-distributor-badge"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              color: isDark ? '#94A3B8' : '#64748B',
              fontSize: '0.78rem',
              fontWeight: 800,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              whiteSpace: 'nowrap'
            }}
          >
            <ShieldCheck size={15} style={{ color: '#FF6600', flexShrink: 0 }} />
            <span style={{ lineHeight: 1 }}>{t.topbar.distributorBadge}</span>
          </div>
        </div>

        {/* Center / Brand Badge: < JLM > (Requested in Red Box area) */}
        <div className="topbar-center" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          margin: '0 8px'
        }}>
          <span
            className="topbar-jlm-badge"
            style={{
              fontFamily: "'Oswald', 'Montserrat', system-ui, sans-serif",
              fontWeight: 800,
              fontSize: '1.3rem',
              color: 'rgb(255, 102, 0)',
              letterSpacing: '0.05em',
              lineHeight: 1,
              whiteSpace: 'nowrap'
            }}
          >
            &lt; JLM &gt;
          </span>
        </div>

        {/* Right Side: Fluid Live Dropdown Search Bar + Compact Animated Settings Gear Button */}
        <div className="topbar-right" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          marginLeft: 'auto'
        }}>
          {/* Interactive Live Search Container */}
          <div ref={searchContainerRef} className="topbar-search-container" style={{ position: 'relative' }}>
            <form onSubmit={handleSearchSubmit} className="topbar-search-form" style={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: isDark ? '#222222' : '#FFFFFF',
              border: `1px solid ${isDark ? '#383838' : '#CBD5E1'}`,
              borderRadius: '30px',
              padding: '2px 3px 2px 14px',
              minHeight: '40px',
              boxShadow: isDark ? '0 2px 8px rgba(0,0,0,0.3)' : '0 2px 6px rgba(0,0,0,0.04)',
              width: '260px',
              maxWidth: '100%',
              transition: 'all 0.25s ease',
              boxSizing: 'border-box'
            }}>
              <input
                type="text"
                placeholder={t.topbar.searchPlaceholder}
                value={searchQuery}
                onChange={handleInputChange}
                onFocus={() => searchQuery.trim() !== '' && setIsDropdownOpen(true)}
                style={{
                  backgroundColor: 'transparent',
                  border: 'none',
                  color: isDark ? '#FFFFFF' : '#0F172A',
                  fontSize: '0.84rem',
                  outline: 'none',
                  width: '100%',
                  fontWeight: 500,
                  lineHeight: 1
                }}
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => { setSearchQuery(''); setIsDropdownOpen(false); }}
                  aria-label="Clear search"
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#888',
                    cursor: 'pointer',
                    padding: '0 6px',
                    marginRight: '2px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minWidth: '28px',
                    minHeight: '28px'
                  }}
                >
                  <X size={15} />
                </button>
              )}
              <button
                type="submit"
                aria-label="Submit search"
                style={{
                  backgroundColor: '#FF6600',
                  border: 'none',
                  borderRadius: '50%',
                  width: '34px',
                  height: '34px',
                  minWidth: '34px',
                  minHeight: '34px',
                  padding: 0,
                  margin: 0,
                  color: '#FFFFFF',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 2px 6px rgba(255, 102, 0, 0.3)',
                  transition: 'transform 0.2s ease',
                  flexShrink: 0
                }}
                title="Search"
              >
                <Search size={15} style={{ display: 'block', margin: 'auto' }} />
              </button>
            </form>

            {/* LIVE MATCHING PRODUCTS DROPDOWN POPOVER */}
            {isDropdownOpen && (
              <div className="topbar-search-results-dropdown" style={{
                position: 'absolute',
                top: 'calc(100% + 8px)',
                right: 0,
                width: '420px',
                maxWidth: '92vw',
                backgroundColor: isDark ? '#1C1C1C' : '#FFFFFF',
                border: `1px solid ${isDark ? '#333333' : '#E2E8F0'}`,
                borderRadius: '12px',
                boxShadow: isDark ? '0 14px 45px rgba(0,0,0,0.85)' : '0 14px 35px rgba(0,0,0,0.18)',
                zIndex: 2500,
                overflow: 'hidden',
                animation: 'fadeIn 0.2s ease',
                boxSizing: 'border-box'
              }}>
                <div style={{
                  padding: '12px 16px',
                  backgroundColor: isDark ? '#141414' : '#F8FAFC',
                  borderBottom: `1px solid ${isDark ? '#2B2B2B' : '#E2E8F0'}`,
                  fontSize: '0.82rem',
                  fontWeight: 800,
                  color: '#FF6600',
                  textTransform: 'uppercase',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {language === 'uk' ? 'Результати пошуку' : language === 'pl' ? 'Wyniki wyszukiwania' : 'Search Results'}
                  </span>
                  <span style={{
                    backgroundColor: 'rgba(255, 102, 0, 0.15)',
                    color: '#FF6600',
                    padding: '3px 8px',
                    borderRadius: '12px',
                    fontSize: '0.75rem',
                    fontWeight: 800,
                    whiteSpace: 'nowrap',
                    flexShrink: 0
                  }}>
                    {matchingProducts.length} {language === 'uk' ? 'знайдено' : language === 'pl' ? 'znaleziono' : 'found'}
                  </span>
                </div>

                {matchingProducts.length === 0 ? (
                  <div style={{ padding: '24px 16px', textAlign: 'center', color: '#888', fontSize: '0.88rem' }}>
                    {language === 'uk' ? 'Моделей не знайдено' : 'No matching equipment'}
                  </div>
                ) : (
                  <div style={{ maxHeight: '340px', overflowY: 'auto' }}>
                    {matchingProducts.map((product) => {
                      const titleText = product.title[language] || product.title.uk || product.title.en;
                      const taglineText = product.tagline[language] || product.tagline.uk || product.tagline.en;

                      return (
                        <div
                          key={product.id}
                          onClick={() => handleSelectProduct(product)}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '14px',
                            padding: '12px 16px',
                            borderBottom: `1px solid ${isDark ? '#262626' : '#F1F5F9'}`,
                            cursor: 'pointer',
                            transition: 'background-color 0.2s ease'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = isDark ? '#2A2A2A' : '#FFF4EC';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = 'transparent';
                          }}
                        >
                          {/* Miniature Thumbnail */}
                          <div style={{
                            width: '54px',
                            height: '44px',
                            backgroundColor: isDark ? '#141414' : '#F2F4F7',
                            borderRadius: '6px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                            padding: '4px',
                            overflow: 'hidden'
                          }}>
                            <img
                              src={product.image || '/Risorse/Immagini/dirdrills_jt10.png'}
                              alt={titleText}
                              onError={(e) => {
                                e.currentTarget.onerror = null;
                                e.currentTarget.src = '/Risorse/Immagini/dirdrills_jt10.png';
                              }}
                              style={{ maxHeight: '36px', maxWidth: '100%', objectFit: 'contain' }}
                            />
                          </div>

                          {/* Info */}
                          <div style={{ flexGrow: 1, minWidth: 0 }}>
                            <div style={{ fontSize: '0.88rem', fontWeight: 800, color: isDark ? '#FFF' : '#111', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                              {titleText}
                            </div>
                            <div style={{ fontSize: '0.76rem', color: '#FF6600', fontWeight: 700, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                              {taglineText}
                            </div>
                          </div>

                          <ArrowRight size={14} style={{ color: '#FF6600', flexShrink: 0 }} />
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Unified Compact Settings Gear Button */}
          <SettingsMenu />
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .topbar-center {
            display: none !important;
          }
        }
        @media (max-width: 640px) {
          .topbar-container {
            flex-direction: column !important;
            align-items: stretch !important;
            gap: 8px !important;
          }
          .topbar-left {
            justify-content: center !important;
            width: 100% !important;
          }
          .topbar-distributor-badge {
            display: none !important;
          }
          .topbar-right {
            width: 100% !important;
            display: flex !important;
            align-items: center !important;
            gap: 8px !important;
            margin-left: 0 !important;
            position: relative !important;
          }
          .topbar-search-container {
            flex: 1 1 auto !important;
            width: 100% !important;
            min-width: 0 !important;
            position: static !important;
          }
          .topbar-search-form {
            width: 100% !important;
            min-width: 0 !important;
          }
          .topbar-search-results-dropdown {
            position: absolute !important;
            top: calc(100% + 8px) !important;
            left: 0 !important;
            right: 0 !important;
            width: 100% !important;
            max-width: 100% !important;
            z-index: 2500 !important;
          }
        }
      `}</style>

      {/* Product Specification Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
}
