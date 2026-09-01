import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from '../i18n/LanguageContext';
import { useTheme } from '../theme/ThemeContext';

export default function ProductCategories({ onNavigateToProducts }) {
  const { t } = useTranslation();
  const { theme } = useTheme();

  const isDark = theme === 'dark';

  const categories = [
    {
      id: 'hdd',
      name: t.categories.cat1.name,
      desc: t.categories.cat1.desc,
      image: '/Risorse/Immagini/category_drilling.png'
    },
    {
      id: 'mixers',
      name: t.categories.cat2.name,
      desc: t.categories.cat2.desc,
      image: '/Risorse/Immagini/category_fluidSystems.png'
    },
    {
      id: 'electronics',
      name: t.categories.cat3.name,
      desc: t.categories.cat3.desc,
      image: '/Risorse/Immagini/dirdrills_jt10.png'
    },
    {
      id: 'locators',
      name: t.categories.cat4.name,
      desc: t.categories.cat4.desc,
      image: '/Risorse/Immagini/category_vacumexcavator.png'
    },
    {
      id: 'trenchers',
      name: t.categories.cat5.name,
      desc: t.categories.cat5.desc,
      image: '/Risorse/Immagini/c16x.png'
    },
    {
      id: 'bentonite',
      name: t.categories.cat6.name,
      desc: t.categories.cat6.desc,
      image: '/Risorse/Immagini/category_fluidSystems.png'
    },
    {
      id: 'skidsteers',
      name: t.categories.cat7.name,
      desc: t.categories.cat7.desc,
      image: '/Risorse/Immagini/category_skidsteers.png'
    },
    {
      id: 'american_augers',
      name: t.categories.cat8.name,
      desc: t.categories.cat8.desc,
      image: '/Risorse/Immagini/dirdrills_jt5.png'
    },
    {
      id: 'recycling',
      name: t.categories.cat9.name,
      desc: t.categories.cat9.desc,
      image: '/Risorse/Immagini/category_fluidSystems.png'
    },
    {
      id: 'consumables',
      name: t.categories.cat10.name,
      desc: t.categories.cat10.desc,
      image: '/Risorse/Immagini/category_fluidSystems.png'
    }
  ];

  return (
    <section style={{
      padding: '80px 0',
      backgroundColor: isDark ? '#121212' : '#FFFFFF',
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
            {t.categories.subtitle}
          </span>
          <h2 style={{
            fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
            fontWeight: 900,
            marginTop: '6px',
            textTransform: 'uppercase',
            color: isDark ? '#FFFFFF' : '#000000'
          }}>
            {t.categories.title}
          </h2>
        </div>

        {/* 25% Transparency / Glassmorphism Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px'
        }}>
          {categories.map((cat) => (
            <div
              key={cat.id}
              onClick={() => onNavigateToProducts && onNavigateToProducts('products', cat.id)}
              style={{
                backgroundColor: isDark ? 'rgba(26, 26, 26, 0.75)' : 'rgba(244, 246, 249, 0.75)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                borderRadius: '10px',
                border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.08)'}`,
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                justify: 'space-between',
                cursor: 'pointer',
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
                <div style={{
                  height: '160px',
                  display: 'flex',
                  alignItems: 'center',
                  justify: 'center',
                  marginBottom: '20px'
                }}>
                  <img
                    src={cat.image}
                    alt={cat.name}
                    style={{
                      maxHeight: '140px',
                      maxWidth: '100%',
                      objectFit: 'contain'
                    }}
                  />
                </div>

                <h3 style={{
                  fontSize: '1.2rem',
                  fontWeight: 800,
                  color: isDark ? '#FFFFFF' : '#111111',
                  marginBottom: '8px'
                }}>
                  {cat.name}
                </h3>

                <p style={{
                  fontSize: '0.88rem',
                  color: isDark ? '#A0A0A0' : '#666666',
                  lineHeight: 1.5,
                  marginBottom: '20px'
                }}>
                  {cat.desc}
                </p>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                color: '#FF6600',
                fontWeight: 700,
                fontSize: '0.88rem'
              }}>
                <span>{t.categories.btnView}</span>
                <ArrowRight size={16} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
