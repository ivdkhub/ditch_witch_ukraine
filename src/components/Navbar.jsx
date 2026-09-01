import React, { useState } from 'react';
import { Menu, X, ChevronDown, Home, ArrowRight, Wrench } from 'lucide-react';
import { useTranslation } from '../i18n/LanguageContext';
import { useTheme } from '../theme/ThemeContext';

export default function Navbar({ currentPage, onNavigate }) {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  const isDark = theme === 'dark';

  const productSubmenu = [
    {
      id: 'drilling',
      title: t.nav.directionalDrills,
      page: 'products',
      image: '/Risorse/Immagini/category_drilling.png'
    },
    {
      id: 'trenchers',
      title: t.nav.trenchers,
      page: 'products',
      image: '/Risorse/Immagini/category_trenchers.png'
    },
    {
      id: 'skidsteers',
      title: t.nav.skidSteers,
      page: 'products',
      image: '/Risorse/Immagini/category_skidsteers.png'
    },
    {
      id: 'vacuums',
      title: t.nav.vacuumExcavators,
      page: 'products',
      image: '/Risorse/Immagini/category_vacumexcavator.png'
    },
    {
      id: 'fluids',
      title: t.nav.fluidSystems,
      page: 'products',
      image: '/Risorse/Immagini/category_fluidSystems.png'
    },
    {
      id: 'subsite',
      title: t.nav.subsite,
      page: 'products',
      image: '/Risorse/Immagini/dirdrills_jt10.png'
    },
    {
      id: 'americanAugers',
      title: t.nav.americanAugers,
      page: 'products',
      image: '/Risorse/Immagini/dirdrills_jt5.png'
    }
  ];

  const handleNavClick = (page, categoryId = 'all') => {
    if (onNavigate) {
      onNavigate(page, categoryId);
    }
    setMobileMenuOpen(false);
    setProductsOpen(false);
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
      transition: 'background-color 0.3s ease, color 0.3s ease'
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justify: 'space-between',
        paddingTop: '10px',
        paddingBottom: '10px',
        width: '100%'
      }}>
        {/* Brand Logo & Ukraine Accent Badge */}
        <button
          onClick={() => handleNavClick('home')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 0
          }}
        >
          <img
            src={isDark ? "/Risorse/Immagini/DW_Logotype_Rev.png" : "/Risorse/Immagini/DW_Logotype.png"}
            alt="Ditch Witch Ukraine"
            style={{
              height: '48px',
              width: 'auto',
              objectFit: 'contain'
            }}
          />
          <span style={{
            fontSize: '0.8rem',
            fontWeight: 900,
            color: '#FF6600',
            backgroundColor: 'rgba(255, 102, 0, 0.1)',
            border: '1px solid rgba(255, 102, 0, 0.3)',
            borderRadius: '6px',
            padding: '4px 10px',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            display: 'inline-flex',
            alignItems: 'center',
            lineHeight: 1
          }}>
            УКРАЇНА
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '0', marginLeft: 'auto' }}>
          {/* Home Button */}
          <button
            onClick={() => handleNavClick('home')}
            style={{
              padding: '14px 18px',
              color: currentPage === 'home' ? '#FF6600' : isDark ? '#FFFFFF' : '#1E293B',
              fontWeight: 800,
              fontSize: '0.88rem',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              borderRight: `1px solid ${isDark ? '#2E2E2E' : '#E2E8F0'}`,
              borderBottom: currentPage === 'home' ? '3px solid #FF6600' : '3px solid transparent',
              background: 'none',
              borderTop: 'none',
              borderLeft: 'none',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '5px',
              transition: 'all 0.2s ease',
              lineHeight: 1
            }}
            onMouseEnter={(e) => {
              if (currentPage !== 'home') e.currentTarget.style.color = '#FF6600';
            }}
            onMouseLeave={(e) => {
              if (currentPage !== 'home') e.currentTarget.style.color = isDark ? '#FFFFFF' : '#1E293B';
            }}
          >
            <Home size={15} style={{ color: currentPage === 'home' ? '#FF6600' : 'inherit', flexShrink: 0 }} />
            <span>HOME</span>
          </button>

          {/* Products Dropdown with Large Transparent Background Images */}
          <div
            style={{ position: 'relative' }}
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <button
              onClick={() => handleNavClick('products', 'all')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                padding: '14px 18px',
                color: currentPage === 'products' ? '#FF6600' : isDark ? '#FFFFFF' : '#1E293B',
                fontWeight: 800,
                fontSize: '0.88rem',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                borderRight: `1px solid ${isDark ? '#2E2E2E' : '#E2E8F0'}`,
                borderBottom: currentPage === 'products' ? '3px solid #FF6600' : '3px solid transparent',
                background: 'none',
                borderTop: 'none',
                borderLeft: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                lineHeight: 1
              }}
              onMouseEnter={(e) => {
                if (currentPage !== 'products') e.currentTarget.style.color = '#FF6600';
              }}
              onMouseLeave={(e) => {
                if (currentPage !== 'products') e.currentTarget.style.color = isDark ? '#FFFFFF' : '#1E293B';
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
                width: '360px',
                boxShadow: isDark ? '0 16px 40px rgba(0,0,0,0.8)' : '0 16px 36px rgba(0,0,0,0.14)',
                borderTop: '3px solid #FF6600',
                borderRadius: '0 0 12px 12px',
                padding: '10px 0',
                zIndex: 1100,
                animation: 'fadeIn 0.2s ease',
                borderLeft: `1px solid ${isDark ? '#333' : '#E2E8F0'}`,
                borderRight: `1px solid ${isDark ? '#333' : '#E2E8F0'}`,
                borderBottom: `1px solid ${isDark ? '#333' : '#E2E8F0'}`
              }}>
                {productSubmenu.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleNavClick('products', item.id)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '16px',
                      width: '100%',
                      textAlign: 'left',
                      padding: '12px 20px',
                      color: isDark ? '#E2E8F0' : '#1E293B',
                      fontSize: '0.92rem',
                      fontWeight: 800,
                      border: 'none',
                      backgroundColor: 'transparent',
                      borderBottom: idx === productSubmenu.length - 1 ? 'none' : `1px solid ${isDark ? '#262626' : '#F1F5F9'}`,
                      cursor: 'pointer',
                      transition: 'all 0.25s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = isDark ? '#2A2A2A' : '#FFF4EC';
                      e.currentTarget.style.color = '#FF6600';
                      e.currentTarget.style.paddingLeft = '24px';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.color = isDark ? '#E2E8F0' : '#1E293B';
                      e.currentTarget.style.paddingLeft = '20px';
                    }}
                  >
                    <div style={{
                      width: '64px',
                      height: '48px',
                      display: 'flex',
                      alignItems: 'center',
                      justify: 'center',
                      flexShrink: 0,
                      backgroundColor: 'transparent'
                    }}>
                      <img
                        src={item.image}
                        alt={item.title}
                        style={{
                          maxHeight: '46px',
                          maxWidth: '64px',
                          objectFit: 'contain',
                          filter: isDark
                            ? 'drop-shadow(0 4px 8px rgba(0,0,0,0.6))'
                            : 'drop-shadow(0 4px 8px rgba(0,0,0,0.12))',
                          transition: 'transform 0.25s ease'
                        }}
                      />
                    </div>

                    <span style={{ flexGrow: 1, lineHeight: 1.25 }}>{item.title}</span>
                    <ArrowRight size={15} style={{ color: '#FF6600', opacity: 0.8, flexShrink: 0 }} />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Spare Parts & Service Button (replaces Offers) */}
          <button
            onClick={() => handleNavClick('service')}
            style={{
              padding: '14px 18px',
              color: currentPage === 'service' ? '#FF6600' : isDark ? '#FFFFFF' : '#1E293B',
              fontWeight: 800,
              fontSize: '0.88rem',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              borderRight: `1px solid ${isDark ? '#2E2E2E' : '#E2E8F0'}`,
              borderBottom: currentPage === 'service' ? '3px solid #FF6600' : '3px solid transparent',
              background: 'none',
              borderTop: 'none',
              borderLeft: 'none',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              lineHeight: 1
            }}
            onMouseEnter={(e) => {
              if (currentPage !== 'service') e.currentTarget.style.color = '#FF6600';
            }}
            onMouseLeave={(e) => {
              if (currentPage !== 'service') e.currentTarget.style.color = isDark ? '#FFFFFF' : '#1E293B';
            }}
          >
            {t.nav.partsService}
          </button>

          {/* Documentation Center Button */}
          <button
            onClick={() => handleNavClick('docs')}
            style={{
              padding: '14px 18px',
              color: currentPage === 'docs' ? '#FF6600' : isDark ? '#FFFFFF' : '#1E293B',
              fontWeight: 800,
              fontSize: '0.88rem',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              borderRight: `1px solid ${isDark ? '#2E2E2E' : '#E2E8F0'}`,
              borderBottom: currentPage === 'docs' ? '3px solid #FF6600' : '3px solid transparent',
              background: 'none',
              borderTop: 'none',
              borderLeft: 'none',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              lineHeight: 1
            }}
            onMouseEnter={(e) => {
              if (currentPage !== 'docs') e.currentTarget.style.color = '#FF6600';
            }}
            onMouseLeave={(e) => {
              if (currentPage !== 'docs') e.currentTarget.style.color = isDark ? '#FFFFFF' : '#1E293B';
            }}
          >
            {t.nav.docs}
          </button>

          {/* About Us Button */}
          <button
            onClick={() => handleNavClick('about')}
            style={{
              padding: '14px 18px',
              color: currentPage === 'about' ? '#FF6600' : isDark ? '#FFFFFF' : '#1E293B',
              fontWeight: 800,
              fontSize: '0.88rem',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              borderRight: `1px solid ${isDark ? '#2E2E2E' : '#E2E8F0'}`,
              borderBottom: currentPage === 'about' ? '3px solid #FF6600' : '3px solid transparent',
              background: 'none',
              borderTop: 'none',
              borderLeft: 'none',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              lineHeight: 1
            }}
            onMouseEnter={(e) => {
              if (currentPage !== 'about') e.currentTarget.style.color = '#FF6600';
            }}
            onMouseLeave={(e) => {
              if (currentPage !== 'about') e.currentTarget.style.color = isDark ? '#FFFFFF' : '#1E293B';
            }}
          >
            {t.nav.about}
          </button>

          {/* News Button (Rightmost menu item flush) */}
          <button
            onClick={() => handleNavClick('news')}
            style={{
              padding: '14px 0 14px 18px',
              color: currentPage === 'news' ? '#FF6600' : isDark ? '#FFFFFF' : '#1E293B',
              fontWeight: 800,
              fontSize: '0.88rem',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              borderBottom: currentPage === 'news' ? '3px solid #FF6600' : '3px solid transparent',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              lineHeight: 1
            }}
            onMouseEnter={(e) => {
              if (currentPage !== 'news') e.currentTarget.style.color = '#FF6600';
            }}
            onMouseLeave={(e) => {
              if (currentPage !== 'news') e.currentTarget.style.color = isDark ? '#FFFFFF' : '#1E293B';
            }}
          >
            {t.nav.news}
          </button>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            display: 'none',
            backgroundColor: '#FF6600',
            color: '#FFFFFF',
            border: 'none',
            borderRadius: '6px',
            padding: '8px 14px',
            cursor: 'pointer',
            alignItems: 'center',
            gap: '6px',
            fontWeight: 800,
            fontSize: '0.85rem'
          }}
          className="mobile-menu-btn"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          <span>{t.nav.menu}</span>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div style={{
          backgroundColor: isDark ? '#111111' : '#0F172A',
          color: '#FFFFFF',
          padding: '20px 24px',
          borderTop: '3px solid #FF6600'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <button
              onClick={() => handleNavClick('home')}
              style={{ textAlign: 'left', background: 'none', border: 'none', color: '#FFFFFF', fontWeight: 800, cursor: 'pointer', fontSize: '1rem' }}
            >
              HOME
            </button>

            <button
              onClick={() => handleNavClick('products', 'all')}
              style={{ textAlign: 'left', background: 'none', border: 'none', color: '#FF6600', fontWeight: 800, cursor: 'pointer', fontSize: '1rem' }}
            >
              {t.nav.products}
            </button>

            <button
              onClick={() => handleNavClick('service')}
              style={{ textAlign: 'left', background: 'none', border: 'none', color: '#E2E8F0', fontWeight: 800, cursor: 'pointer', fontSize: '1rem' }}
            >
              {t.nav.partsService}
            </button>

            <button
              onClick={() => handleNavClick('docs')}
              style={{ textAlign: 'left', background: 'none', border: 'none', color: '#E2E8F0', fontWeight: 800, cursor: 'pointer', fontSize: '1rem' }}
            >
              {t.nav.docs}
            </button>

            <button
              onClick={() => handleNavClick('about')}
              style={{ textAlign: 'left', background: 'none', border: 'none', color: '#E2E8F0', fontWeight: 800, cursor: 'pointer', fontSize: '1rem' }}
            >
              {t.nav.about}
            </button>

            <button
              onClick={() => handleNavClick('news')}
              style={{ textAlign: 'left', background: 'none', border: 'none', color: '#E2E8F0', fontWeight: 800, cursor: 'pointer', fontSize: '1rem' }}
            >
              {t.nav.news}
            </button>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 992px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
}
