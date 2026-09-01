import React from 'react';
import { Phone, MapPin, Lock } from 'lucide-react';
import { useTranslation } from '../i18n/LanguageContext';

export default function Footer({ onNavigate, onOpenAdmin }) {
  const { t } = useTranslation();

  const handleLinkClick = (page) => {
    if (onNavigate) {
      onNavigate(page);
    }
  };

  return (
    <footer style={{
      backgroundColor: '#0A0A0A',
      color: '#CED0D1',
      borderTop: '4px solid #FF6600',
      paddingTop: '60px',
      paddingBottom: '35px',
      overflow: 'hidden'
    }}>
      <div className="container">
        {/* Main 4-Column Responsive Grid with Gap & Bounds */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '40px 30px',
          marginBottom: '50px',
          alignItems: 'start'
        }}>
          {/* Column 1: Brand Info & Logo */}
          <div style={{ maxWidth: '100%' }}>
            <img
              src="/Risorse/Immagini/DW_Logotype_Rev.png"
              alt="Ditch Witch Ukraine"
              style={{
                maxHeight: '44px',
                maxWidth: '100%',
                width: 'auto',
                marginBottom: '20px',
                objectFit: 'contain',
                display: 'block'
              }}
            />
            <p style={{
              fontSize: '0.88rem',
              lineHeight: 1.6,
              color: '#A0A0A0',
              marginBottom: '24px'
            }}>
              {t.footer.aboutText}
            </p>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              fontSize: '0.88rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#E2E8F0' }}>
                <MapPin size={16} style={{ color: '#FF6600', flexShrink: 0 }} />
                <span>{t.footer.contactUA}</span>
              </div>
              <a
                href="tel:+380503806692"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  color: '#FFFFFF',
                  fontWeight: 700,
                  transition: 'color 0.2s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#FF6600'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#FFFFFF'}
              >
                <Phone size={16} style={{ color: '#FF6600', flexShrink: 0 }} />
                <span>+380 50 380 66 92</span>
              </a>
            </div>
          </div>

          {/* Column 2: Equipment Catalog */}
          <div style={{ maxWidth: '100%' }}>
            <h4 style={{
              color: '#FFFFFF',
              fontWeight: 800,
              fontSize: '0.98rem',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              marginBottom: '20px',
              borderBottom: '2px solid #FF6600',
              paddingBottom: '6px',
              display: 'inline-block'
            }}>
              {t.footer.productsTitle}
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.88rem', padding: 0 }}>
              <li>
                <button
                  onClick={() => handleLinkClick('products')}
                  style={{ background: 'none', border: 'none', color: '#A0A0A0', cursor: 'pointer', padding: 0, textAlign: 'left', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#FF6600'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#A0A0A0'}
                >
                  {t.nav.directionalDrills}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('products')}
                  style={{ background: 'none', border: 'none', color: '#A0A0A0', cursor: 'pointer', padding: 0, textAlign: 'left', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#FF6600'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#A0A0A0'}
                >
                  {t.nav.vacuumExcavators}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('products')}
                  style={{ background: 'none', border: 'none', color: '#A0A0A0', cursor: 'pointer', padding: 0, textAlign: 'left', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#FF6600'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#A0A0A0'}
                >
                  {t.nav.trenchers}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('products')}
                  style={{ background: 'none', border: 'none', color: '#A0A0A0', cursor: 'pointer', padding: 0, textAlign: 'left', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#FF6600'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#A0A0A0'}
                >
                  {t.nav.skidSteers}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('products')}
                  style={{ background: 'none', border: 'none', color: '#A0A0A0', cursor: 'pointer', padding: 0, textAlign: 'left', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#FF6600'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#A0A0A0'}
                >
                  {t.nav.fluidSystems}
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Ditch Witch Ukraine Links */}
          <div style={{ maxWidth: '100%' }}>
            <h4 style={{
              color: '#FFFFFF',
              fontWeight: 800,
              fontSize: '0.98rem',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              marginBottom: '20px',
              borderBottom: '2px solid #FF6600',
              paddingBottom: '6px',
              display: 'inline-block'
            }}>
              DITCH WITCH УКРАЇНА
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.88rem', padding: 0 }}>
              <li>
                <button
                  onClick={() => handleLinkClick('about')}
                  style={{ background: 'none', border: 'none', color: '#A0A0A0', cursor: 'pointer', padding: 0, textAlign: 'left', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#FF6600'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#A0A0A0'}
                >
                  {t.nav.about}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('service')}
                  style={{ background: 'none', border: 'none', color: '#A0A0A0', cursor: 'pointer', padding: 0, textAlign: 'left', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#FF6600'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#A0A0A0'}
                >
                  {t.nav.partsService}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('docs')}
                  style={{ background: 'none', border: 'none', color: '#A0A0A0', cursor: 'pointer', padding: 0, textAlign: 'left', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#FF6600'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#A0A0A0'}
                >
                  {t.nav.docs}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('news')}
                  style={{ background: 'none', border: 'none', color: '#A0A0A0', cursor: 'pointer', padding: 0, textAlign: 'left', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#FF6600'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#A0A0A0'}
                >
                  {t.nav.news}
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Official Distributor Badge & Motto */}
          <div style={{ maxWidth: '100%' }}>
            <h4 style={{
              color: '#FFFFFF',
              fontWeight: 800,
              fontSize: '0.98rem',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              marginBottom: '20px',
              borderBottom: '2px solid #FF6600',
              paddingBottom: '6px',
              display: 'inline-block'
            }}>
              {t.footer.distributorTitle}
            </h4>
            <p style={{ fontSize: '0.85rem', color: '#A0A0A0', lineHeight: 1.6, marginBottom: '20px' }}>
              {t.footer.distributorDesc}
            </p>
            <div style={{
              backgroundColor: '#161616',
              padding: '14px 18px',
              borderRadius: '6px',
              borderLeft: '4px solid #FF6600',
              fontSize: '0.82rem',
              color: '#CED0D1',
              boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
            }}>
              <strong style={{ color: '#FFFFFF', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                {t.footer.motto}
              </strong>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid #222222',
          paddingTop: '24px',
          display: 'flex',
          justify: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
          fontSize: '0.82rem',
          color: '#777777'
        }}>
          <div>
            © {new Date().getFullYear()} Ditch Witch Ukraine. {t.footer.rights}
          </div>

          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <a href="#" style={{ color: '#777777', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#FFF'} onMouseLeave={(e) => e.currentTarget.style.color = '#777777'}>
              {t.footer.privacy}
            </a>
            <a href="#" style={{ color: '#777777', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#FFF'} onMouseLeave={(e) => e.currentTarget.style.color = '#777777'}>
              {t.footer.terms}
            </a>
            <button
              onClick={onOpenAdmin}
              style={{
                background: 'none',
                border: 'none',
                color: '#FF6600',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                fontWeight: 800,
                fontSize: '0.82rem'
              }}
            >
              <Lock size={13} />
              <span>Admin Dashboard</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
