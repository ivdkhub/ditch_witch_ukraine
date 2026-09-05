import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  ArrowRight,
  ExternalLink,
  Phone,
  Wrench,
  FileText,
  Building2,
  Newspaper,
  Package,
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { useTranslation } from '../i18n/LanguageContext';
import { useTheme } from '../theme/ThemeContext';
import { useProducts } from '../context/ProductContext';

export default function Navbar({ currentPage, onNavigate }) {
  const { t, language } = useTranslation();
  const { theme } = useTheme();
  const { navCategoryIds } = useProducts();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  const isDark = theme === 'dark';

  // Prevent background scrolling when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const allProductSubmenu = [
    {
      id: 'hdd',
      title: t.nav.directionalDrills,
      page: 'products',
      image: '/Risorse/Immagini/category_drilling.png'
    },
    {
      id: 'mixers',
      title: t.nav.fluidSystems,
      page: 'products',
      image: '/Risorse/Immagini/category_fluidSystems.png'
    },
    {
      id: 'electronics',
      title: t.nav.subsite,
      page: 'products',
      image: '/Risorse/Immagini/dirdrills_jt10.png'
    },
    {
      id: 'locators',
      title: t.categories?.cat4?.name || (language === 'uk' ? 'Локатори Subsite®' : 'Subsite Locators'),
      page: 'products',
      image: '/Risorse/Immagini/category_vacumexcavator.png'
    },
    {
      id: 'trenchers',
      title: t.nav.trenchers,
      page: 'products',
      image: '/Risorse/Immagini/c16x.png'
    },
    {
      id: 'bentonite',
      title: t.nav.bentonite,
      page: 'products',
      image: '/Risorse/Immagini/category_fluidSystems.png'
    },
    {
      id: 'skidsteers',
      title: t.nav.skidSteers,
      page: 'products',
      image: '/Risorse/Immagini/category_skidsteers.png'
    },
    {
      id: 'american_augers',
      title: t.nav.americanAugers,
      isExternal: true,
      image: '/Risorse/Immagini/dirdrills_jt5.png'
    },
    {
      id: 'recycling',
      title: t.nav.recycling,
      page: 'products',
      image: '/Risorse/Immagini/category_fluidSystems.png'
    },
    {
      id: 'consumables',
      title: t.nav.consumables || (language === 'uk' ? 'Витратні матеріали' : 'Consumables'),
      page: 'products',
      image: '/Risorse/Immagini/category_fluidSystems.png'
    },
    {
      id: 'other',
      title: t.nav.other || (language === 'uk' ? 'Інше / Інші товари' : language === 'pl' ? 'Inne' : 'Other'),
      page: 'products',
      image: '/Risorse/Immagini/mag_x_cor.png'
    }
  ];

  // Dynamically filter max 5 categories selected by Admin for Desktop Dropdown
  const productSubmenu = allProductSubmenu.filter((item) =>
    navCategoryIds.includes(item.id)
  ).slice(0, 5);

  const handleNavClick = (page, categoryId = 'all') => {
    if (categoryId === 'american_augers') {
      window.open('https://www.americanaugers.com/', '_blank', 'noopener,noreferrer');
      setMobileMenuOpen(false);
      setProductsOpen(false);
      return;
    }
    if (onNavigate) {
      onNavigate(page, categoryId);
    }
    setMobileMenuOpen(false);
    setProductsOpen(false);
  };

  // Touch swipe handling for mobile drawer dismissal
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchCurrentX, setTouchCurrentX] = useState(null);

  const handleDrawerTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
    setTouchCurrentX(e.touches[0].clientX);
  };

  const handleDrawerTouchMove = (e) => {
    setTouchCurrentX(e.touches[0].clientX);
  };

  const handleDrawerTouchEnd = () => {
    if (touchStartX !== null && touchCurrentX !== null) {
      const diffX = touchCurrentX - touchStartX;
      // Swiping right by 60px or more closes the drawer
      if (diffX > 60) {
        setMobileMenuOpen(false);
      }
    }
    setTouchStartX(null);
    setTouchCurrentX(null);
  };

  return (
    <header style={{
      backgroundColor: isDark ? '#181818' : '#FFFFFF',
      color: isDark ? '#FFFFFF' : '#0F172A',
      boxShadow: isDark ? '0 4px 20px rgba(0,0,0,0.5)' : '0 4px 20px rgba(0,0,0,0.06)',
      borderBottom: `2px solid ${isDark ? '#282828' : '#F1F5F9'}`,
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      paddingTop: 'var(--sat)',
      transition: 'background-color 0.3s ease, color 0.3s ease'
    }}>
      <div className="container nav-header-container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: '8px',
        paddingBottom: '8px',
        width: '100%',
        gap: '8px',
        minHeight: '56px'
      }}>
        <button
          onClick={() => handleNavClick('home')}
          className="nav-brand-button"
          aria-label="Ditch Witch Ukraine Home"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'none',
            backgroundColor: 'transparent',
            padding: '4px 0',
            border: 'none',
            outline: 'none',
            cursor: 'pointer',
            flexShrink: 1,
            flexWrap: 'nowrap',
            whiteSpace: 'nowrap',
            minHeight: '44px',
            textDecoration: 'none',
            boxShadow: 'none',
            marginRight: 'auto',
            minWidth: 0,
            maxWidth: 'calc(100% - 90px)'
          }}
          title="Ditch Witch Ukraine"
        >
          <img
            src={isDark ? '/Risorse/Immagini/DW_Ukraine_White.png' : '/Risorse/Immagini/DW_Ukraine_Black.png'}
            alt="Ditch Witch Ukraine"
            className="nav-brand-logo"
            style={{
              height: '40px',
              maxWidth: '100%',
              width: 'auto',
              objectFit: 'contain',
              display: 'block'
            }}
          />
        </button>

        <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '0', marginLeft: 'auto', flexShrink: 0, whiteSpace: 'nowrap' }}>
          <div
            style={{ position: 'relative' }}
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <button
              onClick={() => handleNavClick('products', 'all')}
              className="desktop-nav-btn"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                padding: '14px 12px',
                minHeight: '44px',
                color: currentPage === 'products' ? '#FF6600' : isDark ? '#FFFFFF' : '#1E293B',
                fontWeight: 800,
                fontSize: '0.82rem',
                letterSpacing: '0.03em',
                textTransform: 'uppercase',
                borderRight: `1px solid ${isDark ? '#2E2E2E' : '#E2E8F0'}`,
                borderLeft: `1px solid ${isDark ? '#2E2E2E' : '#E2E8F0'}`,
                borderBottom: currentPage === 'products' ? '3px solid #FF6600' : '3px solid transparent',
                background: 'none',
                borderTop: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                lineHeight: 1,
                whiteSpace: 'nowrap',
                flexShrink: 0
              }}
            >
              <span>{t.nav.products}</span>
              <ChevronDown size={14} style={{ color: '#FF6600', transform: productsOpen ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s', flexShrink: 0 }} />
            </button>

            {productsOpen && (
              <div style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                backgroundColor: isDark ? '#1C1C1C' : '#FFFFFF',
                width: '400px',
                maxWidth: '90vw',
                boxShadow: isDark ? '0 16px 40px rgba(0,0,0,0.8)' : '0 16px 36px rgba(0,0,0,0.14)',
                borderRadius: '0 0 10px 10px',
                border: `1px solid ${isDark ? '#333333' : '#E2E8F0'}`,
                borderTop: '3px solid #FF6600',
                padding: '16px',
                zIndex: 1100
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '12px',
                  paddingBottom: '8px',
                  borderBottom: `1px solid ${isDark ? '#2A2A2A' : '#F1F5F9'}`
                }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#FF6600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {language === 'uk' ? 'Популярні Категорії' : 'Featured Categories'}
                  </span>
                  <button
                    onClick={() => handleNavClick('products', 'all')}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: isDark ? '#94A3B8' : '#64748B',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}
                  >
                    <span>{language === 'uk' ? 'Всі товари' : 'All Products'}</span>
                    <ArrowRight size={12} />
                  </button>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '6px' }}>
                  {productSubmenu.map((subItem) => (
                    <button
                      key={subItem.id}
                      onClick={() => handleNavClick(subItem.page || 'products', subItem.id)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '10px 12px',
                        minHeight: '44px',
                        backgroundColor: isDark ? '#242424' : '#F8FAFC',
                        borderRadius: '6px',
                        border: `1px solid ${isDark ? '#333333' : '#E2E8F0'}`,
                        color: isDark ? '#FFFFFF' : '#0F172A',
                        textAlign: 'left',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'rgba(255, 102, 0, 0.12)';
                        e.currentTarget.style.borderColor = '#FF6600';
                        e.currentTarget.style.transform = 'translateX(4px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = isDark ? '#242424' : '#F8FAFC';
                        e.currentTarget.style.borderColor = isDark ? '#333333' : '#E2E8F0';
                        e.currentTarget.style.transform = 'translateX(0)';
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <img
                          src={subItem.image}
                          alt={subItem.title}
                          style={{
                            width: '28px',
                            height: '28px',
                            objectFit: 'contain',
                            borderRadius: '4px',
                            backgroundColor: isDark ? '#181818' : '#FFFFFF',
                            padding: '2px'
                          }}
                        />
                        <span style={{ fontSize: '0.85rem', fontWeight: 700 }}>
                          {subItem.title}
                        </span>
                      </div>
                      {subItem.isExternal ? (
                        <ExternalLink size={14} style={{ color: '#FF6600', opacity: 0.8 }} />
                      ) : (
                        <ChevronRight size={14} style={{ color: '#FF6600', opacity: 0.8 }} />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <button
            onClick={() => handleNavClick('service')}
            style={{
              padding: '14px 14px',
              minHeight: '44px',
              color: currentPage === 'service' ? '#FF6600' : isDark ? '#FFFFFF' : '#1E293B',
              fontWeight: 800,
              fontSize: '0.82rem',
              letterSpacing: '0.03em',
              textTransform: 'uppercase',
              borderRight: `1px solid ${isDark ? '#2E2E2E' : '#E2E8F0'}`,
              borderBottom: currentPage === 'service' ? '3px solid #FF6600' : '3px solid transparent',
              background: 'none',
              borderTop: 'none',
              borderLeft: 'none',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              lineHeight: 1,
              whiteSpace: 'nowrap',
              flexShrink: 0
            }}
          >
            {t.nav.partsService}
          </button>

          <button
            onClick={() => handleNavClick('docs')}
            style={{
              padding: '14px 14px',
              minHeight: '44px',
              color: currentPage === 'docs' ? '#FF6600' : isDark ? '#FFFFFF' : '#1E293B',
              fontWeight: 800,
              fontSize: '0.82rem',
              letterSpacing: '0.03em',
              textTransform: 'uppercase',
              borderRight: `1px solid ${isDark ? '#2E2E2E' : '#E2E8F0'}`,
              borderBottom: currentPage === 'docs' ? '3px solid #FF6600' : '3px solid transparent',
              background: 'none',
              borderTop: 'none',
              borderLeft: 'none',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              lineHeight: 1,
              whiteSpace: 'nowrap',
              flexShrink: 0
            }}
          >
            {t.nav.docs}
          </button>

          <button
            onClick={() => handleNavClick('used')}
            style={{
              padding: '14px 14px',
              minHeight: '44px',
              color: currentPage === 'used' ? '#FF6600' : isDark ? '#FFFFFF' : '#1E293B',
              fontWeight: 800,
              fontSize: '0.82rem',
              letterSpacing: '0.03em',
              textTransform: 'uppercase',
              borderRight: `1px solid ${isDark ? '#2E2E2E' : '#E2E8F0'}`,
              borderBottom: currentPage === 'used' ? '3px solid #FF6600' : '3px solid transparent',
              background: 'none',
              borderTop: 'none',
              borderLeft: 'none',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              lineHeight: 1,
              whiteSpace: 'nowrap',
              flexShrink: 0
            }}
          >
            {t.nav.used}
          </button>

          <button
            onClick={() => handleNavClick('about')}
            style={{
              padding: '14px 14px',
              minHeight: '44px',
              color: currentPage === 'about' ? '#FF6600' : isDark ? '#FFFFFF' : '#1E293B',
              fontWeight: 800,
              fontSize: '0.82rem',
              letterSpacing: '0.03em',
              textTransform: 'uppercase',
              borderRight: `1px solid ${isDark ? '#2E2E2E' : '#E2E8F0'}`,
              borderBottom: currentPage === 'about' ? '3px solid #FF6600' : '3px solid transparent',
              background: 'none',
              borderTop: 'none',
              borderLeft: 'none',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              lineHeight: 1,
              whiteSpace: 'nowrap',
              flexShrink: 0
            }}
          >
            {t.nav.about}
          </button>

          <button
            onClick={() => handleNavClick('news')}
            style={{
              padding: '14px 0 14px 14px',
              minHeight: '44px',
              color: currentPage === 'news' ? '#FF6600' : isDark ? '#FFFFFF' : '#1E293B',
              fontWeight: 800,
              fontSize: '0.82rem',
              letterSpacing: '0.03em',
              textTransform: 'uppercase',
              borderBottom: currentPage === 'news' ? '3px solid #FF6600' : '3px solid transparent',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              lineHeight: 1,
              whiteSpace: 'nowrap',
              flexShrink: 0
            }}
          >
            {t.nav.news}
          </button>
        </nav>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
          style={{
            display: 'none',
            backgroundColor: '#FF6600',
            color: '#FFFFFF',
            border: 'none',
            borderRadius: '8px',
            padding: '10px 14px',
            minWidth: '44px',
            minHeight: '44px',
            cursor: 'pointer',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px',
            fontWeight: 800,
            fontSize: '0.85rem',
            flexShrink: 0,
            boxShadow: '0 2px 8px rgba(255, 102, 0, 0.3)',
            transition: 'all 0.2s ease'
          }}
          className="mobile-menu-btn"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          <span style={{ textTransform: 'uppercase', fontSize: '0.82rem', letterSpacing: '0.04em' }}>{t.nav.menu}</span>
        </button>
      </div>

      {mobileMenuOpen && (
        <div
          className="mobile-drawer-overlay animate-fade-in"
          onClick={() => setMobileMenuOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.72)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            zIndex: 99999,
            display: 'flex',
            justifyContent: 'flex-end',
            transition: 'opacity 0.3s ease'
          }}
        >
          <div
            className="mobile-drawer-panel animate-slide-right"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleDrawerTouchStart}
            onTouchMove={handleDrawerTouchMove}
            onTouchEnd={handleDrawerTouchEnd}
            style={{
              width: '100%',
              maxWidth: '380px',
              height: '100%',
              maxHeight: '100dvh',
              backgroundColor: isDark ? '#141414' : '#FFFFFF',
              color: isDark ? '#FFFFFF' : '#0F172A',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '-8px 0 32px rgba(0,0,0,0.5)',
              borderLeft: `2px solid ${isDark ? '#2A2A2A' : '#E2E8F0'}`,
              overflow: 'hidden',
              boxSizing: 'border-box'
            }}
          >
            {/* Sticky/Pinned Drawer Header with Prominent High-Contrast Close Button */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '14px 16px',
              paddingTop: 'max(14px, var(--sat))',
              borderBottom: `1px solid ${isDark ? '#262626' : '#E2E8F0'}`,
              backgroundColor: isDark ? '#1A1A1A' : '#F8FAFC',
              flexShrink: 0,
              zIndex: 10,
              boxShadow: isDark ? '0 2px 10px rgba(0,0,0,0.4)' : '0 2px 8px rgba(0,0,0,0.04)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <img
                  src={isDark ? '/Risorse/Immagini/DW_Ukraine_White.png' : '/Risorse/Immagini/DW_Ukraine_Black.png'}
                  alt="Ditch Witch"
                  style={{ height: '26px', maxWidth: '140px', width: 'auto', objectFit: 'contain' }}
                />
                <span style={{ color: '#FF6600', fontWeight: 800, fontSize: '0.9rem' }}>&lt; JLM &gt;</span>
              </div>

              {/* Highly Visible Primary Close Button */}
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="touch-target"
                style={{
                  backgroundColor: '#FF6600',
                  color: '#FFFFFF',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '8px 12px',
                  minWidth: '44px',
                  minHeight: '44px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  cursor: 'pointer',
                  fontWeight: 800,
                  fontSize: '0.82rem',
                  boxShadow: '0 2px 8px rgba(255, 102, 0, 0.35)',
                  transition: 'all 0.2s ease',
                  flexShrink: 0
                }}
                aria-label="Close navigation menu"
              >
                <X size={18} />
                <span style={{ textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  {language === 'uk' ? 'Закрити' : language === 'pl' ? 'Zamknij' : 'Close'}
                </span>
              </button>
            </div>

            {/* Scrollable Drawer Body */}
            <div style={{
              flex: '1 1 auto',
              overflowY: 'auto',
              WebkitOverflowScrolling: 'touch',
              display: 'flex',
              flexDirection: 'column'
            }}>
              {/* Direct Call Banner */}
              <div style={{
                padding: '12px 16px',
                backgroundColor: 'rgba(255, 102, 0, 0.08)',
                borderBottom: `1px solid ${isDark ? '#262626' : '#E2E8F0'}`,
                display: 'flex',
                gap: '10px',
                flexShrink: 0
              }}>
                <a
                  href="tel:+380503806692"
                  style={{
                    flex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    backgroundColor: '#FF6600',
                    color: '#FFFFFF',
                    padding: '10px 14px',
                    minHeight: '44px',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    fontWeight: 800,
                    fontSize: '0.85rem',
                    boxShadow: '0 2px 8px rgba(255, 102, 0, 0.3)'
                  }}
                >
                  <Phone size={16} />
                  <span>+380 50 380 66 92</span>
                </a>
              </div>

              {/* Drawer Navigation Links */}
              <div style={{ padding: '16px 16px', display: 'flex', flexDirection: 'column', gap: '8px', flex: 1 }}>
                <div>
                  <button
                    onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '14px 16px',
                      minHeight: '48px',
                      borderRadius: '8px',
                      backgroundColor: currentPage === 'products' ? 'rgba(255, 102, 0, 0.12)' : isDark ? '#1F1F1F' : '#F1F5F9',
                      color: currentPage === 'products' ? '#FF6600' : isDark ? '#FFFFFF' : '#0F172A',
                      border: 'none',
                      fontWeight: 800,
                      fontSize: '0.95rem',
                      cursor: 'pointer',
                      textAlign: 'left'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <Package size={18} style={{ color: '#FF6600' }} />
                      <span>{t.nav.products}</span>
                    </div>
                    <ChevronDown size={18} style={{ transform: mobileProductsOpen ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s', color: '#FF6600' }} />
                  </button>

                  {mobileProductsOpen && (
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '4px',
                      marginTop: '6px',
                      paddingLeft: '12px',
                      borderLeft: '2px solid #FF6600'
                    }}>
                      <button
                        onClick={() => handleNavClick('products', 'all')}
                        style={{
                          padding: '12px 14px',
                          minHeight: '44px',
                          borderRadius: '6px',
                          backgroundColor: 'transparent',
                          color: '#FF6600',
                          border: 'none',
                          fontWeight: 800,
                          fontSize: '0.88rem',
                          textAlign: 'left',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between'
                        }}
                      >
                        <span>🔥 {language === 'uk' ? 'Всі Товари та Техніка' : 'All Products'}</span>
                        <ArrowRight size={14} />
                      </button>

                      {allProductSubmenu.map((cat) => (
                        <button
                          key={cat.id}
                          onClick={() => handleNavClick(cat.page || 'products', cat.id)}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            padding: '11px 12px',
                            minHeight: '44px',
                            borderRadius: '6px',
                            backgroundColor: isDark ? '#1A1A1A' : '#F8FAFC',
                            color: isDark ? '#E2E8F0' : '#334155',
                            border: `1px solid ${isDark ? '#2E2E2E' : '#E2E8F0'}`,
                            fontWeight: 700,
                            fontSize: '0.82rem',
                            textAlign: 'left',
                            cursor: 'pointer'
                          }}
                        >
                          <img
                            src={cat.image}
                            alt={cat.title}
                            style={{ width: '22px', height: '22px', objectFit: 'contain' }}
                          />
                          <span style={{ flex: 1 }}>{cat.title}</span>
                          {cat.isExternal && <ExternalLink size={12} style={{ color: '#FF6600' }} />}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <button
                  onClick={() => handleNavClick('service')}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '14px 16px',
                    minHeight: '48px',
                    borderRadius: '8px',
                    backgroundColor: currentPage === 'service' ? 'rgba(255, 102, 0, 0.12)' : isDark ? '#1F1F1F' : '#F1F5F9',
                    color: currentPage === 'service' ? '#FF6600' : isDark ? '#FFFFFF' : '#0F172A',
                    border: 'none',
                    fontWeight: 800,
                    fontSize: '0.95rem',
                    cursor: 'pointer',
                    textAlign: 'left'
                  }}
                >
                  <Wrench size={18} style={{ color: '#FF6600' }} />
                  <span>{t.nav.partsService}</span>
                </button>

                <button
                  onClick={() => handleNavClick('docs')}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '14px 16px',
                    minHeight: '48px',
                    borderRadius: '8px',
                    backgroundColor: currentPage === 'docs' ? 'rgba(255, 102, 0, 0.12)' : isDark ? '#1F1F1F' : '#F1F5F9',
                    color: currentPage === 'docs' ? '#FF6600' : isDark ? '#FFFFFF' : '#0F172A',
                    border: 'none',
                    fontWeight: 800,
                    fontSize: '0.95rem',
                    cursor: 'pointer',
                    textAlign: 'left'
                  }}
                >
                  <FileText size={18} style={{ color: '#FF6600' }} />
                  <span>{t.nav.docs}</span>
                </button>

                <button
                  onClick={() => handleNavClick('used')}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '14px 16px',
                    minHeight: '48px',
                    borderRadius: '8px',
                    backgroundColor: currentPage === 'used' ? 'rgba(255, 102, 0, 0.12)' : isDark ? '#1F1F1F' : '#F1F5F9',
                    color: currentPage === 'used' ? '#FF6600' : isDark ? '#FFFFFF' : '#0F172A',
                    border: 'none',
                    fontWeight: 800,
                    fontSize: '0.95rem',
                    cursor: 'pointer',
                    textAlign: 'left'
                  }}
                >
                  <Sparkles size={18} style={{ color: '#FF6600' }} />
                  <span>{t.nav.used}</span>
                </button>

                <button
                  onClick={() => handleNavClick('about')}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '14px 16px',
                    minHeight: '48px',
                    borderRadius: '8px',
                    backgroundColor: currentPage === 'about' ? 'rgba(255, 102, 0, 0.12)' : isDark ? '#1F1F1F' : '#F1F5F9',
                    color: currentPage === 'about' ? '#FF6600' : isDark ? '#FFFFFF' : '#0F172A',
                    border: 'none',
                    fontWeight: 800,
                    fontSize: '0.95rem',
                    cursor: 'pointer',
                    textAlign: 'left'
                  }}
                >
                  <Building2 size={18} style={{ color: '#FF6600' }} />
                  <span>{t.nav.about}</span>
                </button>

                <button
                  onClick={() => handleNavClick('news')}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '14px 16px',
                    minHeight: '48px',
                    borderRadius: '8px',
                    backgroundColor: currentPage === 'news' ? 'rgba(255, 102, 0, 0.12)' : isDark ? '#1F1F1F' : '#F1F5F9',
                    color: currentPage === 'news' ? '#FF6600' : isDark ? '#FFFFFF' : '#0F172A',
                    border: 'none',
                    fontWeight: 800,
                    fontSize: '0.95rem',
                    cursor: 'pointer',
                    textAlign: 'left'
                  }}
                >
                  <Newspaper size={18} style={{ color: '#FF6600' }} />
                  <span>{t.nav.news}</span>
                </button>

                {/* Secondary Dismiss Button inside list */}
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn-outline"
                  style={{
                    width: '100%',
                    borderColor: isDark ? '#333333' : '#CBD5E1',
                    color: isDark ? '#CBD5E1' : '#475569',
                    fontSize: '0.84rem',
                    marginTop: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    minHeight: '44px'
                  }}
                >
                  <X size={16} />
                  <span>{language === 'uk' ? 'Закрити меню' : language === 'pl' ? 'Zamknij menu' : 'Close Menu'}</span>
                </button>
              </div>
            </div>

            {/* Mobile Drawer Footer with Quick Switchers */}
            <div style={{
              padding: '14px 16px',
              paddingBottom: 'max(16px, var(--sab))',
              borderTop: `1px solid ${isDark ? '#262626' : '#E2E8F0'}`,
              backgroundColor: isDark ? '#181818' : '#F8FAFC',
              flexShrink: 0
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#FF6600', fontSize: '0.78rem', fontWeight: 800, marginBottom: '4px' }}>
                <ShieldCheck size={16} />
                <span>{language === 'uk' ? 'ОФІЦІЙНИЙ ДИЛЕР В УКРАЇНІ' : 'OFFICIAL DEALER IN UKRAINE'}</span>
              </div>
              <p style={{ fontSize: '0.74rem', color: isDark ? '#94A3B8' : '#64748B', margin: 0 }}>
                {language === 'uk' ? 'Група JLM — Продаж, сервіс та оригінальні запчастини.' : 'JLM Group — Sales, service & original parts.'}
              </p>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 1360px) {
          .desktop-nav-btn {
            padding-left: 8px !important;
            padding-right: 8px !important;
            font-size: 0.76rem !important;
          }
        }
        @media (max-width: 1140px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: inline-flex !important;
          }
        }
        @media (max-width: 768px) {
          .nav-brand-logo {
            height: 34px !important;
            max-width: 180px !important;
          }
          .nav-brand-badge {
            font-size: 1.05rem !important;
          }
          .nav-header-container {
            padding-left: 12px !important;
            padding-right: 12px !important;
          }
          .mobile-menu-btn {
            padding: 8px 12px !important;
            min-height: 40px !important;
            font-size: 0.82rem !important;
          }
        }
        @media (max-width: 480px) {
          .nav-brand-logo {
            height: 28px !important;
            max-width: 140px !important;
          }
          .nav-brand-badge {
            font-size: 0.92rem !important;
          }
          .nav-brand-button {
            gap: 6px !important;
          }
          .nav-header-container {
            padding-left: 10px !important;
            padding-right: 10px !important;
            gap: 6px !important;
          }
          .mobile-menu-btn {
            padding: 8px 10px !important;
            font-size: 0.78rem !important;
          }
        }
        @media (max-width: 360px) {
          .nav-brand-logo {
            height: 24px !important;
            max-width: 115px !important;
          }
          .nav-brand-badge {
            font-size: 0.82rem !important;
          }
          .mobile-menu-btn {
            padding: 6px 8px !important;
            font-size: 0.72rem !important;
          }
        }
      `}</style>
    </header>
  );
}
