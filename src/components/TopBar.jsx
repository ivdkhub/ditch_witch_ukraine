import React, { useState, useRef, useEffect } from 'react';
import { Phone, Search, ShieldCheck, ArrowRight, X } from 'lucide-react';
import { useTranslation } from '../i18n/LanguageContext';
import LanguageSelector from './LanguageSelector';
import ThemeToggle from './ThemeToggle';
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
      padding: '10px 0',
      transition: 'background-color 0.3s ease, color 0.3s ease',
      position: 'relative',
      zIndex: 1200
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justify: 'space-between',
        width: '100%',
        gap: '16px'
      }}>
        {/* Left Side: Phone (+380 50 380 66 92) & Official Distributor Badge */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
          <a
            href="tel:+380503806692"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              color: isDark ? '#E2E8F0' : '#1E293B',
              fontSize: '0.9rem',
              fontWeight: 700,
              textDecoration: 'none',
              transition: 'color 0.2s',
              whiteSpace: 'nowrap'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#FF6600'}
            onMouseLeave={(e) => e.currentTarget.style.color = isDark ? '#E2E8F0' : '#1E293B'}
          >
            <Phone size={16} style={{ color: '#FF6600', flexShrink: 0 }} />
            <span style={{ lineHeight: 1 }}>+380 50 380 66 92</span>
          </a>

          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            color: isDark ? '#94A3B8' : '#64748B',
            fontSize: '0.8rem',
            fontWeight: 800,
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
            whiteSpace: 'nowrap'
          }}>
            <ShieldCheck size={16} style={{ color: '#FF6600', flexShrink: 0 }} />
            <span style={{ lineHeight: 1 }}>{t.topbar.distributorBadge}</span>
          </div>
        </div>

        {/* Right Side: Theme Toggle, Language Selector & Live Dropdown Search Bar */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          marginLeft: 'auto'
        }}>
          <ThemeToggle />
          <LanguageSelector />

          {/* Interactive Live Search Container */}
          <div ref={searchContainerRef} style={{ position: 'relative' }}>
            <form onSubmit={handleSearchSubmit} style={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: isDark ? '#222222' : '#FFFFFF',
              border: `1px solid ${isDark ? '#383838' : '#CBD5E1'}`,
              borderRadius: '30px',
              padding: '3px 3px 3px 14px',
              boxShadow: isDark ? '0 2px 8px rgba(0,0,0,0.3)' : '0 2px 6px rgba(0,0,0,0.04)',
              width: '270px',
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
                  fontSize: '0.85rem',
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
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#888',
                    cursor: 'pointer',
                    padding: '0 4px',
                    marginRight: '2px',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  <X size={14} />
                </button>
              )}
              <button
                type="submit"
                style={{
                  backgroundColor: '#FF6600',
                  border: 'none',
                  borderRadius: '50%',
                  width: '32px',
                  height: '32px',
                  minWidth: '32px',
                  padding: 0,
                  margin: 0,
                  color: '#FFFFFF',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justify: 'center',
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
              <div style={{
                position: 'absolute',
                top: 'calc(100% + 8px)',
                right: 0,
                width: '380px',
                backgroundColor: isDark ? '#1C1C1C' : '#FFFFFF',
                border: `1px solid ${isDark ? '#333333' : '#E2E8F0'}`,
                borderRadius: '12px',
                boxShadow: isDark ? '0 12px 40px rgba(0,0,0,0.8)' : '0 12px 30px rgba(0,0,0,0.15)',
                zIndex: 2000,
                overflow: 'hidden',
                animation: 'fadeIn 0.2s ease'
              }}>
                <div style={{
                  padding: '10px 16px',
                  backgroundColor: isDark ? '#141414' : '#F8FAFC',
                  borderBottom: `1px solid ${isDark ? '#2B2B2B' : '#E2E8F0'}`,
                  fontSize: '0.78rem',
                  fontWeight: 800,
                  color: '#FF6600',
                  textTransform: 'uppercase',
                  display: 'flex',
                  justify: 'space-between',
                  alignItems: 'center'
                }}>
                  <span>{language === 'uk' ? 'Результати пошуку' : 'Matching Equipment'}</span>
                  <span>{matchingProducts.length} {language === 'uk' ? 'знайдено' : 'found'}</span>
                </div>

                {matchingProducts.length === 0 ? (
                  <div style={{ padding: '24px 16px', textAlign: 'center', color: '#888', fontSize: '0.88rem' }}>
                    {language === 'uk' ? 'Моделей не знайдено' : 'No matching equipment'}
                  </div>
                ) : (
                  <div style={{ maxHeight: '360px', overflowY: 'auto' }}>
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
                            justify: 'center',
                            flexShrink: 0,
                            padding: '4px'
                          }}>
                            <img
                              src={product.image}
                              alt={titleText}
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
        </div>
      </div>

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
