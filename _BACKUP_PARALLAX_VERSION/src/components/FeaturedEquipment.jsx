import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from '../i18n/LanguageContext';
import { useTheme } from '../theme/ThemeContext';
import { useProducts } from '../context/ProductContext';
import { getSpecLabel } from '../i18n/translations';
import ProductModal from './ProductModal';

export default function FeaturedEquipment() {
  const { t, language } = useTranslation();
  const { theme } = useTheme();
  const { visibleProducts, topProductIds } = useProducts();
  const [selectedProduct, setSelectedProduct] = useState(null);

  const isDark = theme === 'dark';

  // Filter top 3 products chosen by admin or featured products fallback
  let featuredList = visibleProducts.filter((p) => topProductIds.includes(p.id));
  if (featuredList.length === 0) {
    featuredList = visibleProducts.slice(0, 3);
  }

  return (
    <section style={{
      padding: '80px 0',
      backgroundColor: isDark ? '#0A0A0A' : '#F8F9FA',
      color: isDark ? '#FFFFFF' : '#000000',
      transition: 'background-color 0.3s ease, color 0.3s ease'
    }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <span style={{
            color: '#FF6600',
            fontWeight: 800,
            fontSize: '0.85rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase'
          }}>
            {t.featured.subtitle}
          </span>
          <h2 style={{
            fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
            fontWeight: 900,
            marginTop: '6px',
            textTransform: 'uppercase',
            color: isDark ? '#FFFFFF' : '#000000'
          }}>
            {t.featured.title}
          </h2>
        </div>

        {/* Glassmorphism Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '30px'
        }}>
          {featuredList.map((machine) => {
            const titleText = machine.title[language] || machine.title.uk || machine.title.en;
            const taglineText = machine.tagline[language] || machine.tagline.uk || machine.tagline.en;

            return (
              <div
                key={machine.id}
                style={{
                  backgroundColor: isDark ? 'rgba(24, 24, 24, 0.75)' : 'rgba(255, 255, 255, 0.75)',
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
                    backgroundColor: isDark ? 'rgba(18, 18, 18, 0.6)' : 'rgba(242, 244, 247, 0.8)',
                    padding: '20px',
                    height: '210px',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justify: 'center',
                    position: 'relative',
                    overflow: 'hidden'
                  }}>
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
                      {language === 'uk' ? 'ТОП 3' : language === 'pl' ? 'POLECANE' : 'TOP CHOICE'}
                    </span>

                    <img
                      src={machine.image}
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

                    {/* Aligned Specs Grid */}
                    <div style={{
                      borderTop: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.08)'}`,
                      paddingTop: '12px',
                      marginBottom: '16px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '6px'
                    }}>
                      {Object.entries(machine.specs).slice(0, 3).map(([sKey, sVal], idx) => {
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

                <div style={{ padding: '0 24px 24px 24px' }}>
                  <button
                    onClick={() => setSelectedProduct(machine)}
                    className="btn-primary"
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    <span>{t.featured.specsBtn}</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </section>
  );
}
