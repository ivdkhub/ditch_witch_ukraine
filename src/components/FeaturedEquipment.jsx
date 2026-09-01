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

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '30px'
        }}>
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
                    justify: 'space-between',
                    boxShadow: isHovered
                      ? isDark ? '0 12px 30px rgba(255, 102, 0, 0.3)' : '0 12px 30px rgba(255, 102, 0, 0.2)'
                      : isDark ? '0 4px 16px rgba(0,0,0,0.4)' : '0 4px 16px rgba(0,0,0,0.06)',
                    height: '100%',
                    transition: 'border-color 0.28s ease, box-shadow 0.28s ease'
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
                        {language === 'uk' ? 'ТОП ГНБ' : language === 'pl' ? 'POLECANE' : 'TOP HDD'}
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

                      {machine.specs && (
                        <div style={{
                          backgroundColor: isDark ? 'rgba(16, 16, 16, 0.6)' : '#F8F9FA',
                          borderRadius: '6px',
                          padding: '12px 14px',
                          marginBottom: '20px',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '6px',
                          fontSize: '0.8rem',
                          border: `1px solid ${isDark ? '#2A2A2A' : '#EAEAEA'}`
                        }}>
                          {Object.entries(machine.specs).slice(0, 3).map(([key, val]) => (
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
                      onClick={() => setSelectedProduct(machine)}
                      className="btn-primary"
                      style={{ width: '100%', justifyContent: 'center' }}
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

        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <button
            onClick={() => onNavigateToProducts && onNavigateToProducts('products')}
            className="btn-outline"
            style={{
              borderColor: '#FF6600',
              color: isDark ? '#FFFFFF' : '#111111'
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
