import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { useTranslation } from '../i18n/LanguageContext';
import { useTheme } from '../theme/ThemeContext';
import { getSpecLabel } from '../i18n/translations';
import ProductModal from './ProductModal';

export default function FeaturedEquipment() {
  const { t, language } = useTranslation();
  const { theme } = useTheme();
  const [selectedProduct, setSelectedProduct] = useState(null);

  const isDark = theme === 'dark';

  const featuredList = [
    {
      id: 'jt10',
      title: { uk: 'Установка ГНБ Ditch Witch JT10', en: 'Ditch Witch JT10 Directional Drill', pl: 'Wiertnica HDB Ditch Witch JT10' },
      tagline: { uk: 'Компактність та потужність 40 к.с.', en: 'Compact 40 HP power package', pl: 'Kompaktowa moc 40 KM' },
      specs: { thrust: '44.5 кН', engine: 'Deutz 2.9L 40 к.с.', torque: '1490 Нм' },
      desc: { uk: 'Найкомпактніша установка ГНБ у своєму класі з автоматичною подачею штанги.', en: 'The most compact drill in its class with auto-rod loading.', pl: 'Najbardziej kompaktowa wiertnica z automatycznym podawaniem żerdzi.' },
      image: '/Risorse/Immagini/dirdrills_jt10.png',
      featured: true
    },
    {
      id: 'jt5',
      title: { uk: 'Установка ГНБ Ditch Witch JT5', en: 'Ditch Witch JT5 Directional Drill', pl: 'Wiertnica HDB Ditch Witch JT5' },
      tagline: { uk: 'Легендарна надійність для вузьких ділянок', en: 'Legendary reliability for tight residential yards', pl: 'Niezawodność w ciasnych przestrzeniach' },
      specs: { thrust: '22.2 кН', engine: 'Kubota 24.8 к.с.', width: '91 см' },
      desc: { uk: 'Малогабаритна установка для прокладання підземних ліній зв\'язку та електромереж.', en: 'Compact drill designed for telecom and power cable installation.', pl: 'Kompaktowa wiertnica przeznaczona do światłowodów i kabli.' },
      image: '/Risorse/Immagini/dirdrills_jt5.png',
      featured: true
    },
    {
      id: 'c16x',
      title: { uk: 'Траншеєкопач Ditch Witch C16X', en: 'Ditch Witch C16X Trencher', pl: 'Koparka Łańcuchowa C16X' },
      tagline: { uk: 'Запатентна система CX Track', en: 'Patented CX Track design', pl: 'System CX Track' },
      specs: { digDepth: 'до 910 мм', engine: 'Vanguard 16 к.с.', digWidth: '900 мм' },
      desc: { uk: 'Надійний траншеєкопач для швидкого копання канав під кабелі та водопровід.', en: 'Heavy-duty trencher for quick utility pipe and cable trenching.', pl: 'Niezawodna koparka do szybkiego wykopu pod kable i rury.' },
      image: '/Risorse/Immagini/c16x.png',
      featured: true
    }
  ];

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

        {/* 25% Transparency / Glassmorphism Cards Grid */}
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
                      {language === 'uk' ? 'ФЛАГМАН' : language === 'pl' ? 'POLECANE' : 'FEATURED'}
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
                      {Object.entries(machine.specs).map(([sKey, sVal], idx) => {
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
