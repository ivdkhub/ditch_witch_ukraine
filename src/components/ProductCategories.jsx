import React, { useState } from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { useTranslation } from '../i18n/LanguageContext';
import { useTheme } from '../theme/ThemeContext';
import SmoothProductCard from './SmoothProductCard';

export default function ProductCategories({ onNavigateToProducts }) {
  const { t } = useTranslation();
  const { theme } = useTheme();

  const [hoveredCatId, setHoveredCatId] = useState(null);

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
      isExternal: true,
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
    },
    {
      id: 'other',
      name: t.categories.cat11?.name || 'Інше / Інші товари',
      desc: t.categories.cat11?.desc || 'Інше спецобладнання, аксесуари та супутні матеріали.',
      image: '/Risorse/Immagini/category_drilling.png'
    }
  ];

  const handleCategoryClick = (catId) => {
    if (catId === 'american_augers') {
      window.open('https://www.americanaugers.com/', '_blank', 'noopener,noreferrer');
      return;
    }
    if (onNavigateToProducts) {
      onNavigateToProducts('products', catId);
    }
  };

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

        {/* Glassmorphism Category Cards Grid with Responsive Fluid Grid */}
        <div className="responsive-category-grid">
          {categories.map((cat, idx) => {
            const isHovered = hoveredCatId === cat.id;

            return (
              <SmoothProductCard key={cat.id} delay={0.04 * (idx % 5)}>
                <div
                  onClick={() => handleCategoryClick(cat.id)}
                  onMouseEnter={() => setHoveredCatId(cat.id)}
                  onMouseLeave={() => setHoveredCatId(null)}
                  style={{
                    backgroundColor: isDark ? 'rgba(26, 26, 26, 0.85)' : '#FFFFFF',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    borderRadius: '12px',
                    border: `2px solid ${isHovered ? '#FF6600' : isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.08)'}`,
                    padding: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    boxShadow: isHovered
                      ? isDark ? '0 12px 30px rgba(255, 102, 0, 0.3)' : '0 12px 30px rgba(255, 102, 0, 0.2)'
                      : isDark ? '0 4px 16px rgba(0,0,0,0.4)' : '0 4px 16px rgba(0,0,0,0.06)',
                    height: '100%',
                    boxSizing: 'border-box',
                    transition: 'border-color 0.28s ease, box-shadow 0.28s ease'
                  }}
                >
                  <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                    <div style={{
                      height: '140px',
                      maxHeight: '140px',
                      aspectRatio: '16 / 10',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '16px',
                      overflow: 'hidden',
                      boxSizing: 'border-box'
                    }}>
                      <img
                        src={cat.image}
                        alt={cat.name}
                        style={{
                          maxHeight: '130px',
                          maxWidth: '90%',
                          objectFit: 'contain',
                          display: 'block',
                          margin: 'auto',
                          transform: isHovered ? 'scale(1.08)' : 'scale(1)',
                          transition: 'transform 0.35s cubic-bezier(0.2, 0.8, 0.2, 1)'
                        }}
                      />
                    </div>

                    <h3
                      className="line-clamp-2"
                      style={{
                        fontSize: '1.15rem',
                        fontWeight: 800,
                        color: isHovered ? '#FF6600' : isDark ? '#FFFFFF' : '#111111',
                        marginBottom: '6px',
                        lineHeight: 1.3,
                        minHeight: '2.6em',
                        transition: 'color 0.25s ease'
                      }}
                      title={cat.name}
                    >
                      {cat.name}
                    </h3>

                    <p
                      className="line-clamp-2"
                      style={{
                        fontSize: '0.86rem',
                        color: isDark ? '#A0A0A0' : '#666666',
                        lineHeight: 1.5,
                        marginBottom: '16px',
                        minHeight: '2.8em'
                      }}
                    >
                      {cat.desc}
                    </p>
                  </div>

                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: '#FF6600',
                    fontWeight: 700,
                    fontSize: '0.88rem',
                    minHeight: '44px',
                    marginTop: 'auto',
                    paddingTop: '6px'
                  }}>
                    <span>{cat.isExternal ? 'americanaugers.com' : t.categories.btnView}</span>
                    {cat.isExternal ? (
                      <ExternalLink size={16} />
                    ) : (
                      <ArrowRight size={16} style={{ transform: isHovered ? 'translateX(4px)' : 'translateX(0)', transition: 'transform 0.25s ease' }} />
                    )}
                  </div>
                </div>
              </SmoothProductCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
