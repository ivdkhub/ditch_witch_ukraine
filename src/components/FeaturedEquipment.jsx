import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from '../i18n/LanguageContext';
import { useTheme } from '../theme/ThemeContext';
import { useProducts } from '../context/ProductContext';
import ProductModal from './ProductModal';
import SmoothProductCard from './SmoothProductCard';

export default function FeaturedEquipment({ onNavigateToProducts }) {
  const { t, language } = useTranslation();
  const { theme } = useTheme();
  const { products } = useProducts();

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [hoveredCardId, setHoveredCardId] = useState(null);

  const isDark = theme === 'dark';

  // Always show ONLY the 3 specified HDD machines: JT5, JT10, JT20
  const targetIds = ['jt5', 'jt10', 'jt20'];
  const featuredList = targetIds
    .map((id) => products.find((p) => p.id === id))
    .filter(Boolean);

  return (
    <section style={{
      padding: '80px 0',
      backgroundColor: isDark ? '#0A0A0A' : '#F4F5F7',
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

        <div className="responsive-card-grid">
          {featuredList.map((machine, idx) => {
            const titleText = machine.title[language] || machine.title.uk || machine.title.en;
            const taglineText = machine.tagline[language] || machine.tagline.uk || machine.tagline.en;
            const isHovered = hoveredCardId === machine.id;

            return (
              <SmoothProductCard key={machine.id} delay={0.08 * (idx + 1)}>
                <div
                  onMouseEnter={() => setHoveredCardId(machine.id)}
                  onMouseLeave={() => setHoveredCardId(null)}
                  style={{
                    backgroundColor: isDark ? 'rgba(24, 24, 24, 0.85)' : '#FFFFFF',
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
                    {/* Dead-Centered Image Container Box with Explicit Aspect Ratio */}
                    <div style={{
                      backgroundColor: isDark ? 'rgba(18, 18, 18, 0.6)' : 'rgba(242, 244, 247, 0.8)',
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
                        {language === 'uk' ? 'ТОП ГНБ' : language === 'pl' ? 'POLECANE' : 'TOP HDD'}
                      </span>

                      <img
                        src={machine.image}
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

                      {machine.specs && (
                        <div style={{
                          backgroundColor: isDark ? 'rgba(16, 16, 16, 0.6)' : '#F8F9FA',
                          borderRadius: '6px',
                          padding: '10px 12px',
                          marginBottom: '16px',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '5px',
                          fontSize: '0.78rem',
                          border: `1px solid ${isDark ? '#2A2A2A' : '#EAEAEA'}`,
                          minWidth: 0,
                          boxSizing: 'border-box'
                        }}>
                          {Object.entries(machine.specs).slice(0, 3).map(([key, val]) => (
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

                  <div style={{ padding: '0 clamp(14px, 3.5vw, 22px) 20px clamp(14px, 3.5vw, 22px)', marginTop: 'auto', boxSizing: 'border-box' }}>
                    <button
                      onClick={() => setSelectedProduct(machine)}
                      className="btn-primary"
                      style={{ width: '100%', justifyContent: 'center', minHeight: '44px' }}
                    >
                      <span>{t.featured.btnDetails}</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </SmoothProductCard>
            );
          })}
        </div>

        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <button
            onClick={() => onNavigateToProducts && onNavigateToProducts('products')}
            className="btn-outline"
            style={{
              borderColor: '#FF6600',
              color: isDark ? '#FFFFFF' : '#111111',
              minHeight: '44px'
            }}
          >
            <span>{t.featured.btnViewAll}</span>
            <ArrowRight size={16} />
          </button>
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
