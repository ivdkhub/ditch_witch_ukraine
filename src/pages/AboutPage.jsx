import React from 'react';
import { MapPin, Phone, Mail, Clock, ShieldCheck, Award, Wrench, Users, ArrowRight, Handshake } from 'lucide-react';
import { useTranslation } from '../i18n/LanguageContext';
import { useTheme } from '../theme/ThemeContext';

export default function AboutPage({ onNavigateToProducts }) {
  const { language } = useTranslation();
  const { theme } = useTheme();

  const isDark = theme === 'dark';

  const contactAddress = language === 'uk'
    ? 'Україна, м. Київ, вул. Каунаська, 13'
    : language === 'pl'
    ? 'Ukraina, Kijów, ul. Kowieńska 13'
    : 'Kaunaska Street 13, Kyiv, Ukraine';

  const contactPhone = '+380 50 380 66 92';

  return (
    <div style={{
      backgroundColor: isDark ? '#0F0F0F' : '#F8F9FA',
      color: isDark ? '#FFFFFF' : '#111111',
      minHeight: '80vh',
      paddingBottom: '80px',
      transition: 'background-color 0.3s ease, color 0.3s ease'
    }}>
      {/* Hero Header Banner */}
      <div style={{
        backgroundColor: '#050505',
        color: '#FFFFFF',
        padding: '60px 0',
        borderBottom: '4px solid #FF6600',
        position: 'relative'
      }}>
        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 10 }}>
          <span style={{
            color: '#FF6600',
            fontWeight: 800,
            fontSize: '0.85rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase'
          }}>
            DITCH WITCH UKRAINE
          </span>
          <h1 style={{
            fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
            fontWeight: 900,
            marginTop: '8px',
            marginBottom: '14px',
            textTransform: 'uppercase'
          }}>
            {language === 'uk' ? 'Про Компанію Ditch Witch Україна' : language === 'pl' ? 'O Firmie Ditch Witch Ukraina' : 'About Ditch Witch Ukraine'}
          </h1>
          <p style={{
            color: '#CED0D1',
            maxWidth: '750px',
            margin: '0 auto',
            fontSize: '1.05rem',
            lineHeight: 1.6
          }}>
            {language === 'uk'
              ? 'Офіційний дистриб’ютор спеціалізованої будівельної техніки для підземного прокладання комунікацій з власною сервісною службою та складом оригінальних запчастин.'
              : language === 'pl'
              ? 'Oficjalny dystrybutor maszyn budowlanych do bezwykopowej budowy podziemnej w Ukrainie z serwisem i magazynem części.'
              : 'Official distributor of underground construction machinery, HDD rigs, trenchers, and vacuum excavators in Ukraine.'}
          </p>
        </div>
      </div>

      <div className="container" style={{ marginTop: '50px' }}>
        {/* Company Overview & Guarantees Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '40px',
          alignItems: 'center',
          marginBottom: '60px'
        }}>
          <div>
            <span style={{
              color: '#FF6600',
              fontWeight: 800,
              fontSize: '0.85rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase'
            }}>
              {language === 'uk' ? 'НАШІ ПЕРЕВАГИ' : 'WHY CHOOSE US'}
            </span>
            <h2 style={{
              fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
              fontWeight: 900,
              marginTop: '6px',
              marginBottom: '20px',
              lineHeight: 1.2
            }}>
              {language === 'uk' ? 'Лідер у галузі безаварійного підземного будівництва' : 'Leading the Underground Utility Construction Industry'}
            </h2>
            <p style={{ fontSize: '1rem', lineHeight: 1.7, color: isDark ? '#CCCCCC' : '#444444', marginBottom: '16px' }}>
              {language === 'uk'
                ? 'Ditch Witch Україна постачає передову техніку для прокладання кабелів, газопроводів, водопроводів та зв’язку. Ми допомагаємо підрядникам вирішувати найскладніші завдання у міських та польових умовах.'
                : 'Ditch Witch Ukraine delivers advanced machinery for underground utility installation, power grid maintenance, and telecom expansion.'}
            </p>
            <p style={{ fontSize: '1rem', lineHeight: 1.7, color: isDark ? '#CCCCCC' : '#444444', marginBottom: '28px' }}>
              {language === 'uk'
                ? 'Всі машини проходять передпродажну підготовку та супроводжуються офіційною гарантією виробника The Charles Machine Works.'
                : 'All equipment is backed by manufacturer warranties, certified technical inspections, and full operator training.'}
            </p>

            <button
              onClick={onNavigateToProducts}
              className="btn-primary"
            >
              <span>{language === 'uk' ? 'ПЕРЕГЛЯНУТИ КАТАЛОГ ТЕХНІКИ' : 'VIEW EQUIPMENT CATALOG'}</span>
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Key Advantage Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div style={{
              backgroundColor: isDark ? 'rgba(28, 28, 28, 0.75)' : 'rgba(255, 255, 255, 0.75)',
              backdropFilter: 'blur(10px)',
              padding: '24px',
              borderRadius: '10px',
              border: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)'}`
            }}>
              <ShieldCheck size={28} style={{ color: '#FF6600', marginBottom: '12px' }} />
              <h4 style={{ fontSize: '1.05rem', fontWeight: 800, marginBottom: '6px' }}>
                {language === 'uk' ? 'Гарантія Якості' : 'Official Warranty'}
              </h4>
              <p style={{ fontSize: '0.85rem', color: isDark ? '#AAA' : '#666', margin: 0 }}>
                Сертифікована підтримка виробника.
              </p>
            </div>

            <div style={{
              backgroundColor: isDark ? 'rgba(28, 28, 28, 0.75)' : 'rgba(255, 255, 255, 0.75)',
              backdropFilter: 'blur(10px)',
              padding: '24px',
              borderRadius: '10px',
              border: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)'}`
            }}>
              <Wrench size={28} style={{ color: '#FF6600', marginBottom: '12px' }} />
              <h4 style={{ fontSize: '1.05rem', fontWeight: 800, marginBottom: '6px' }}>
                {language === 'uk' ? 'Власний Сервіс' : 'Certified Service'}
              </h4>
              <p style={{ fontSize: '0.85rem', color: isDark ? '#AAA' : '#666', margin: 0 }}>
                Мобільні сервісні бригади 24/7.
              </p>
            </div>

            <div style={{
              backgroundColor: isDark ? 'rgba(28, 28, 28, 0.75)' : 'rgba(255, 255, 255, 0.75)',
              backdropFilter: 'blur(10px)',
              padding: '24px',
              borderRadius: '10px',
              border: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)'}`
            }}>
              <Award size={28} style={{ color: '#FF6600', marginBottom: '12px' }} />
              <h4 style={{ fontSize: '1.05rem', fontWeight: 800, marginBottom: '6px' }}>
                {language === 'uk' ? 'Оригінальні Запчастини' : 'Genuine Parts'}
              </h4>
              <p style={{ fontSize: '0.85rem', color: isDark ? '#AAA' : '#666', margin: 0 }}>
                Великий склад інструменту в Києві.
              </p>
            </div>

            <div style={{
              backgroundColor: isDark ? 'rgba(28, 28, 28, 0.75)' : 'rgba(255, 255, 255, 0.75)',
              backdropFilter: 'blur(10px)',
              padding: '24px',
              borderRadius: '10px',
              border: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)'}`
            }}>
              <Users size={28} style={{ color: '#FF6600', marginBottom: '12px' }} />
              <h4 style={{ fontSize: '1.05rem', fontWeight: 800, marginBottom: '6px' }}>
                {language === 'uk' ? 'Навчання Операторів' : 'Operator Training'}
              </h4>
              <p style={{ fontSize: '0.85rem', color: isDark ? '#AAA' : '#666', margin: 0 }}>
                Навчання ефективному бурінню.
              </p>
            </div>
          </div>
        </div>

        {/* STRATEGIC PARTNERSHIP WITH JLM SECTION */}
        <div style={{
          backgroundColor: isDark ? 'rgba(28, 28, 28, 0.75)' : 'rgba(255, 255, 255, 0.75)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          borderRadius: '14px',
          border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.08)'}`,
          boxShadow: isDark ? '0 10px 30px rgba(0,0,0,0.5)' : '0 10px 30px rgba(0,0,0,0.06)',
          padding: '36px',
          marginBottom: '60px'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '32px',
            alignItems: 'center'
          }}>
            {/* JLM Logo Container */}
            <div style={{
              backgroundColor: isDark ? 'rgba(18, 18, 18, 0.85)' : '#FFFFFF',
              border: `1px solid ${isDark ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.1)'}`,
              borderRadius: '12px',
              padding: '24px',
              display: 'flex',
              alignItems: 'center',
              justify: 'center',
              boxShadow: isDark ? '0 6px 20px rgba(0,0,0,0.4)' : '0 6px 18px rgba(0,0,0,0.05)',
              minHeight: '140px'
            }}>
              <img
                src="/Risorse/Immagini/jlm_logo.png"
                alt="JLM Partnership Logo"
                style={{
                  maxHeight: '90px',
                  maxWidth: '100%',
                  objectFit: 'contain'
                }}
              />
            </div>

            {/* JLM Partnership Description */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#FF6600', fontWeight: 800, fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                <Handshake size={18} />
                <span>
                  {language === 'uk' ? 'Стратегічне Співробітництво' : language === 'pl' ? 'Strategiczne Partnerstwo' : 'Strategic Partnership'}
                </span>
              </div>

              <h3 style={{
                fontSize: 'clamp(1.5rem, 2.8vw, 2rem)',
                fontWeight: 900,
                marginTop: '6px',
                marginBottom: '14px',
                lineHeight: 1.2
              }}>
                {language === 'uk'
                  ? 'Партнерство з компанією JLM'
                  : language === 'pl'
                  ? 'Współpraca z firmą JLM'
                  : 'Collaboration with JLM'}
              </h3>

              <p style={{
                fontSize: '0.98rem',
                lineHeight: 1.65,
                color: isDark ? '#CCCCCC' : '#444444',
                marginBottom: '12px'
              }}>
                {language === 'uk'
                  ? 'Ditch Witch Україна плідно співпрацює з компанією JLM для забезпечення клієнтів найсучаснішими рішеннями у галузі безаварійного підземного будівництва, сервісного обслуговування та постачання високотехнологічного обладнання.'
                  : language === 'pl'
                  ? 'Ditch Witch Ukraina ściśle współpracuje z firmą JLM, dostarczając klientom najnowocześniejsze rozwiązania w zakresie bezwykopowej budowy podziemnej, serwisu oraz technologii.'
                  : 'Ditch Witch Ukraine maintains a strong strategic collaboration with JLM to provide customers with state-of-the-art trenchless utility installation solutions, expert field service support, and high-reliability machinery.'}
              </p>

              <p style={{
                fontSize: '0.92rem',
                lineHeight: 1.6,
                color: isDark ? '#AAAAAA' : '#666666'
              }}>
                {language === 'uk'
                  ? 'Спільна експертиза дає змогу впроваджувати ефективні інженерні проекти, розширювати номенклатуру бурового інструменту та забезпечувати найвищий рівень сервісної підтримки для наших партнерів.'
                  : language === 'pl'
                  ? 'Wspólna wiedza inżynieryjna pozwala na realizację skomplikowanych projektów i rozwój zaplecza serwisowego.'
                  : 'Our joint expertise enables seamless implementation of complex engineering projects and expands certified technical service coverage across Ukraine.'}
              </p>
            </div>
          </div>
        </div>

        {/* LOCATION MAP & CONTACT DETAILS SECTION */}
        <div style={{
          backgroundColor: isDark ? 'rgba(28, 28, 28, 0.75)' : 'rgba(255, 255, 255, 0.75)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          borderRadius: '14px',
          border: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)'}`,
          boxShadow: isDark ? '0 10px 30px rgba(0,0,0,0.5)' : '0 10px 30px rgba(0,0,0,0.06)',
          overflow: 'hidden'
        }}>
          <div style={{
            padding: '32px',
            borderBottom: `1px solid ${isDark ? '#2A2A2A' : '#EEEEEE'}`,
            display: 'flex',
            justify: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px'
          }}>
            <div>
              <span style={{ color: '#FF6600', fontWeight: 800, fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                OFFICIAL LOCATION & CONTACTS
              </span>
              <h3 style={{ fontSize: '1.6rem', fontWeight: 900, marginTop: '4px', textTransform: 'uppercase' }}>
                {language === 'uk' ? 'Контакти та Карта Проїзду' : 'Contact Us & Location Map'}
              </h3>
            </div>

            <a
              href="https://maps.google.com/?q=Kaunaska+street+13,+Kyiv,+Ukraine"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <MapPin size={16} />
              <span>{language === 'uk' ? 'ОТРИМАТИ МАРШРУТ' : 'GET DIRECTIONS'}</span>
            </a>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))'
          }}>
            {/* Contact Info Card */}
            <div style={{ padding: '36px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{
                  backgroundColor: '#FF6600',
                  color: '#FFFFFF',
                  padding: '10px',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justify: 'center'
                }}>
                  <MapPin size={22} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.85rem', fontWeight: 800, color: '#FF6600', textTransform: 'uppercase' }}>
                    {language === 'uk' ? 'Адреса Офісу та Складу' : 'Office & Warehouse Address'}
                  </h4>
                  <p style={{ fontSize: '1.05rem', fontWeight: 700, marginTop: '4px', color: isDark ? '#FFF' : '#111' }}>
                    {contactAddress}
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{
                  backgroundColor: '#FF6600',
                  color: '#FFFFFF',
                  padding: '10px',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justify: 'center'
                }}>
                  <Phone size={22} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.85rem', fontWeight: 800, color: '#FF6600', textTransform: 'uppercase' }}>
                    {language === 'uk' ? 'Телефон Відділу Продажу та Сервісу' : 'Contact Phone Number'}
                  </h4>
                  <a
                    href="tel:+380503806692"
                    style={{ fontSize: '1.2rem', fontWeight: 900, marginTop: '4px', color: isDark ? '#FFF' : '#111', display: 'inline-block' }}
                  >
                    {contactPhone}
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{
                  backgroundColor: '#FF6600',
                  color: '#FFFFFF',
                  padding: '10px',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justify: 'center'
                }}>
                  <Clock size={22} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.85rem', fontWeight: 800, color: '#FF6600', textTransform: 'uppercase' }}>
                    {language === 'uk' ? 'Графік Роботи' : 'Working Hours'}
                  </h4>
                  <p style={{ fontSize: '0.95rem', fontWeight: 600, marginTop: '4px', color: isDark ? '#DDD' : '#333' }}>
                    Пн - Пт: 09:00 - 18:00<br />
                    Сб - Нд: Вихідні (Мобільний сервіс 24/7)
                  </p>
                </div>
              </div>
            </div>

            {/* Embedded Google Maps Container */}
            <div style={{ minHeight: '380px', width: '100%', position: 'relative' }}>
              <iframe
                title="Ditch Witch Ukraine Location Map"
                src="https://maps.google.com/maps?q=Kaunaska%20street%2013%2C%20Kyiv%2C%20Ukraine&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '380px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
