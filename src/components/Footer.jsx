import React from 'react';
import { Phone, Mail, MapPin, Lock, User } from 'lucide-react';
import { useTranslation } from '../i18n/LanguageContext';

export default function Footer({ onNavigate, onOpenAdmin }) {
  const { t, language } = useTranslation();

  const handleLinkClick = (page) => {
    if (onNavigate) {
      onNavigate(page);
    }
  };

  const contact1Name = language === 'uk' ? 'Ірина Лясковська' : 'Iryna Liaskovska';
  const contact1Role = language === 'uk' ? 'Директор' : language === 'pl' ? 'Dyrektor' : 'Director';

  const contact2Name = language === 'uk' ? 'Олег Липкин' : 'Oleg Lypkyn';
  const contact2Role = language === 'uk' ? 'Головний інженер' : language === 'pl' ? 'Główny Inżynier' : 'Chief Engineer';

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
        {/* Main 4-Column Responsive Grid */}
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
                <span>м. Київ, Україна (Офіційне представництво JLM Group)</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
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
              {t.footer.quickLinks}
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.88rem', padding: 0 }}>
              <li>
                <button
                  onClick={() => handleLinkClick('products')}
                  style={{ background: 'none', border: 'none', color: '#A0A0A0', cursor: 'pointer', padding: 0, textAlign: 'left', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#FF6600'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#A0A0A0'}
                >
                  {t.nav.products}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('used')}
                  style={{ background: 'none', border: 'none', color: '#A0A0A0', cursor: 'pointer', padding: 0, textAlign: 'left', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#FF6600'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#A0A0A0'}
                >
                  {t.nav.used}
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
                  onClick={() => handleLinkClick('about')}
                  style={{ background: 'none', border: 'none', color: '#A0A0A0', cursor: 'pointer', padding: 0, textAlign: 'left', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#FF6600'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#A0A0A0'}
                >
                  {t.nav.about}
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Person 1 - Ірина Лясковська / Iryna Liaskovska */}
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
              {contact1Name}
            </h4>

            <div style={{
              backgroundColor: '#161616',
              padding: '16px',
              borderRadius: '8px',
              borderLeft: '3px solid #FF6600',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              fontSize: '0.85rem'
            }}>
              <div style={{ fontWeight: 800, color: '#FFFFFF', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <User size={15} style={{ color: '#FF6600' }} />
                <span>{contact1Role}</span>
              </div>
              <a
                href="tel:+380503806692"
                style={{ color: '#E2E8F0', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#FF6600'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#E2E8F0'}
              >
                <Phone size={14} style={{ color: '#FF6600' }} />
                <span>+380 50 380 66 92</span>
              </a>
              <a
                href="mailto:buh@ditchwitch.kiev.ua"
                style={{ color: '#FF6600', textDecoration: 'none', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px' }}
                onMouseEnter={(e) => e.currentTarget.style.textDecoration = 'underline'}
                onMouseLeave={(e) => e.currentTarget.style.textDecoration = 'none'}
              >
                <Mail size={14} />
                <span>buh@ditchwitch.kiev.ua</span>
              </a>
            </div>
          </div>

          {/* Column 4: Contact Person 2 - Олег Липкин / Oleg Lypkyn */}
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
              {contact2Name}
            </h4>

            <div style={{
              backgroundColor: '#161616',
              padding: '16px',
              borderRadius: '8px',
              borderLeft: '3px solid #FF6600',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              fontSize: '0.85rem'
            }}>
              <div style={{ fontWeight: 800, color: '#FFFFFF', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <User size={15} style={{ color: '#FF6600' }} />
                <span>{contact2Role}</span>
              </div>
              <a
                href="tel:+380506894621"
                style={{ color: '#E2E8F0', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#FF6600'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#E2E8F0'}
              >
                <Phone size={14} style={{ color: '#FF6600' }} />
                <span>+380 50 689 46 21</span>
              </a>
              <a
                href="mailto:service@ditchwitch.kiev.ua"
                style={{ color: '#FF6600', textDecoration: 'none', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px' }}
                onMouseEnter={(e) => e.currentTarget.style.textDecoration = 'underline'}
                onMouseLeave={(e) => e.currentTarget.style.textDecoration = 'none'}
              >
                <Mail size={14} />
                <span>service@ditchwitch.kiev.ua</span>
              </a>
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
            <button
              onClick={() => {
                if (onOpenAdmin) onOpenAdmin();
                else if (onNavigate) onNavigate('admin');
              }}
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
