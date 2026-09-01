import React from 'react';
import { MapPin, Phone, Mail, Clock, ShieldCheck, Award, Wrench, Users, ArrowRight, Handshake, CheckCircle2 } from 'lucide-react';
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

  // Multi-language text exact from official JLM Scandinavia AB (JLM Ukraine)
  const contentData = {
    badge: {
      uk: 'DITCH WITCH УКРАЇНА • ГРУПА JLM',
      en: 'DITCH WITCH UKRAINE • JLM GROUP',
      pl: 'DITCH WITCH UKRAINA • GRUPA JLM'
    },
    title: {
      uk: 'Про Компанію Ditch Witch Україна',
      en: 'About Ditch Witch Ukraine',
      pl: 'O Firmie Ditch Witch Ukraina'
    },
    subtitle: {
      uk: 'Офіційне представництво групи JLM — ексклюзивного дистриб’ютора Ditch Witch® в Україні та Північній Європі.',
      en: 'Official representation of JLM Group — exclusive distributor of Ditch Witch® in Ukraine and Northern Europe.',
      pl: 'Oficjalny przedstawiciel grupy JLM — wyłącznego dystrybutora Ditch Witch® w Ukrainie i Europie Północnej.'
    },
    mainTextP1: {
      uk: 'Ditch Witch Ukraine входить до групи JLM, яка є офіційним представником Ditch Witch® у Швеції, Норвегії, Фінляндії, Данії, Польщі та Україні. Компанія Дітч Вітч Україна продає машини та пристрої для компаній, що спеціалізуються на будівництві підземної інфраструктури з початку сімдесятих років минулого століття. Штаб-квартира компанії знаходиться в Мальме (Швеція), де є центральний склад запасних частин та машин.',
      en: 'Ditch Witch Ukraine is part of the JLM Group, which is the official distributor of Ditch Witch® in Sweden, Norway, Finland, Denmark, Poland, and Ukraine. Ditch Witch Ukraine supplies machinery and equipment for companies specializing in underground infrastructure construction since the early 1970s. The company headquarters are located in Malmö (Sweden), housing the central spare parts and machinery warehouse.',
      pl: 'Ditch Witch Ukraina wchodzi w skład grupy JLM, która jest oficjalnym przedstawicielem Ditch Witch® w Szwecji, Norwegii, Finlandii, Danii, Polsce oraz w Ukrainie. Firma Ditch Witch Ukraina dostarcza maszyny i urządzenia dla przedsiębiorstw specjalizujących się w budownictwie infrastruktury podziemnej od początku lat siedemdziesiątych ubiegłego wieku. Siedziba główna firmy znajduje się w Malmö (Szwecja), gdzie mieści się centralny magazyn części zamiennych i maszyn.'
    },
    yearsHighlight: {
      uk: 'Ми працюємо на українському ринку вже 20 років.',
      en: 'We have been operating in the Ukrainian market for 20 years.',
      pl: 'Działamy na rynku ukraińskim już od 20 lat.'
    },
    brandsHighlight: {
      uk: 'Ми є єдиним представником торгових марок Ditch Witch®, Zahn®, Subsite® Electronics, HammerHead®, HammerHead Mole®, American Augers® – TRENCOR®, Häny, а також дистриб’ютором торгової марки Baroid®. В нас великий склад запасних частин.',
      en: 'We are the exclusive representative of Ditch Witch®, Zahn®, Subsite® Electronics, HammerHead®, HammerHead Mole®, American Augers® – TRENCOR®, Häny, and authorized distributor of Baroid®. We maintain an extensive spare parts warehouse in Kyiv.',
      pl: 'Jesteśmy wyłącznym przedstawicielem marek Ditch Witch®, Zahn®, Subsite® Electronics, HammerHead®, HammerHead Mole®, American Augers® – TRENCOR®, Häny, a także dystrybutorem marki Baroid®. Posiadamy duży magazyn części zamiennych.'
    },
    prioritiesTitle: {
      uk: 'Нашим пріоритетом є:',
      en: 'Our key priorities are:',
      pl: 'Naszym priorytetem jest:'
    },
    prioritiesList: [
      {
        uk: 'бути надійним партнером для клієнтів',
        en: 'being a reliable long-term partner for our clients',
        pl: 'bycie niezawodnym partnerem dla naszych klientów'
      },
      {
        uk: 'бути лідером у консалтинговій та технічній службі',
        en: 'leading in technical consulting and engineering service support',
        pl: 'liderstwo w usłudze doradczej i technicznej'
      },
      {
        uk: 'проявляти творчість та відкритість до загальних потреб клієнта',
        en: 'demonstrating creativity and openness to our clients overall needs',
        pl: 'wykazywanie kreatywności i otwartości na ogólne potrzeby klienta'
      },
      {
        uk: 'забезпечувати комплексне обслуговування машин та пристроїв торгової марки Ditch Witch® та продуктів пов’язаних компаній',
        en: 'providing complete lifecycle maintenance for Ditch Witch® machinery and partner products',
        pl: 'zapewnienie kompleksowej obsługi serwisowej maszyn i urządzeń marki Ditch Witch® oraz produktów firm powiązanych'
      }
    ]
  };

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
            {contentData.badge[language] || contentData.badge.uk}
          </span>
          <h1 style={{
            fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
            fontWeight: 900,
            marginTop: '8px',
            marginBottom: '14px',
            textTransform: 'uppercase'
          }}>
            {contentData.title[language] || contentData.title.uk}
          </h1>
          <p style={{
            color: '#CED0D1',
            maxWidth: '780px',
            margin: '0 auto',
            fontSize: '1.05rem',
            lineHeight: 1.6
          }}>
            {contentData.subtitle[language] || contentData.subtitle.uk}
          </p>
        </div>
      </div>

      <div className="container" style={{ marginTop: '50px' }}>
        {/* Main Official JLM About Us Narrative Section */}
        <div style={{
          backgroundColor: isDark ? 'rgba(28, 28, 28, 0.75)' : 'rgba(255, 255, 255, 0.75)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          borderRadius: '14px',
          border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.08)'}`,
          boxShadow: isDark ? '0 10px 30px rgba(0,0,0,0.5)' : '0 10px 30px rgba(0,0,0,0.06)',
          padding: '40px',
          marginBottom: '50px'
        }}>
          {/* Top JLM Group Partnership Banner */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justify: 'space-between',
            flexWrap: 'wrap',
            gap: '24px',
            paddingBottom: '30px',
            marginBottom: '30px',
            borderBottom: `1px solid ${isDark ? '#2B2B2B' : '#EAEAEA'}`
          }}>
            <div>
              <span style={{ color: '#FF6600', fontWeight: 800, fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                JLM GROUP SCANDINAVIA & UKRAINE
              </span>
              <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 900, marginTop: '4px' }}>
                {language === 'uk' ? 'Ditch Witch® в Україні та Європі' : language === 'pl' ? 'Ditch Witch® w Ukrainie i Europie' : 'Ditch Witch® in Ukraine & Europe'}
              </h2>
            </div>

            <div style={{
              backgroundColor: isDark ? '#141414' : '#FFFFFF',
              border: `1px solid ${isDark ? '#333' : '#DDD'}`,
              borderRadius: '10px',
              padding: '12px 24px',
              display: 'flex',
              alignItems: 'center',
              justify: 'center'
            }}>
              <img
                src="/Risorse/Immagini/jlm_logo.png"
                alt="JLM Group Logo"
                style={{ maxHeight: '55px', objectFit: 'contain' }}
              />
            </div>
          </div>

          {/* Detailed Narrative Paragraphs */}
          <p style={{
            fontSize: '1.05rem',
            lineHeight: 1.75,
            color: isDark ? '#DDDDDD' : '#333333',
            marginBottom: '24px'
          }}>
            {contentData.mainTextP1[language] || contentData.mainTextP1.uk}
          </p>

          {/* Highlight Badge Boxes */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '20px',
            marginBottom: '32px'
          }}>
            <div style={{
              backgroundColor: '#FF6600',
              color: '#FFFFFF',
              borderRadius: '10px',
              padding: '24px',
              boxShadow: '0 6px 20px rgba(255, 102, 0, 0.3)'
            }}>
              <Award size={32} style={{ marginBottom: '12px' }} />
              <h3 style={{ fontSize: '1.25rem', fontWeight: 900, marginBottom: '6px' }}>
                {contentData.yearsHighlight[language] || contentData.yearsHighlight.uk}
              </h3>
              <p style={{ fontSize: '0.88rem', opacity: 0.9, margin: 0 }}>
                {language === 'uk'
                  ? '20 років бездоганного сервісу та технічної підтримки спецтехніки в Україні.'
                  : '20 years of trusted machinery supply and engineering support across Ukraine.'}
              </p>
            </div>

            <div style={{
              backgroundColor: isDark ? '#181818' : '#F4F6F9',
              border: `1px solid ${isDark ? '#333' : '#E0E0E0'}`,
              borderRadius: '10px',
              padding: '24px'
            }}>
              <ShieldCheck size={32} style={{ color: '#FF6600', marginBottom: '12px' }} />
              <h4 style={{ fontSize: '1rem', fontWeight: 800, marginBottom: '8px', color: isDark ? '#FFF' : '#111' }}>
                {language === 'uk' ? 'Офіційний Дистриб’ютор ТМ' : 'Exclusive Brand Distribution'}
              </h4>
              <p style={{ fontSize: '0.88rem', color: isDark ? '#BBB' : '#555', lineHeight: 1.6, margin: 0 }}>
                {contentData.brandsHighlight[language] || contentData.brandsHighlight.uk}
              </p>
            </div>
          </div>

          {/* Company Priorities Checklist */}
          <div style={{
            backgroundColor: isDark ? '#161616' : '#FFFFFF',
            border: `1px solid ${isDark ? '#2C2C2C' : '#E2E8F0'}`,
            borderRadius: '10px',
            padding: '28px'
          }}>
            <h3 style={{
              fontSize: '1.2rem',
              fontWeight: 900,
              color: '#FF6600',
              textTransform: 'uppercase',
              marginBottom: '18px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              <Handshake size={22} />
              <span>{contentData.prioritiesTitle[language] || contentData.prioritiesTitle.uk}</span>
            </h3>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '16px'
            }}>
              {contentData.prioritiesList.map((item, idx) => {
                const text = item[language] || item.uk;
                return (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <CheckCircle2 size={20} style={{ color: '#FF6600', flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ fontSize: '0.95rem', fontWeight: 700, color: isDark ? '#EEE' : '#222', lineHeight: 1.5 }}>
                      {text}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div style={{ marginTop: '32px', textAlign: 'center' }}>
            <button onClick={onNavigateToProducts} className="btn-primary">
              <span>{language === 'uk' ? 'ПЕРЕГЛЯНУТИ КАТАЛОГ ТЕХНІКИ JLM' : 'VIEW JLM EQUIPMENT CATALOG'}</span>
              <ArrowRight size={16} />
            </button>
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
          {/* Clean Card Header with Button Flush Top-Right */}
          <div style={{
            padding: '24px 32px',
            borderBottom: `1px solid ${isDark ? '#2A2A2A' : '#EEEEEE'}`,
            display: 'flex',
            justify: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px'
          }}>
            <div>
              <span style={{ color: '#FF6600', fontWeight: 800, fontSize: '0.82rem', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                OFFICIAL LOCATION & CONTACTS
              </span>
            </div>

            <a
              href="https://maps.google.com/?q=Kaunaska+street+13,+Kyiv,+Ukraine"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ textDecoration: 'none', marginLeft: 'auto' }}
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
                  justify: 'center',
                  flexShrink: 0
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
                  justify: 'center',
                  flexShrink: 0
                }}>
                  <Phone size={22} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.85rem', fontWeight: 800, color: '#FF6600', textTransform: 'uppercase' }}>
                    {language === 'uk' ? 'Телефон Відділу Продажу та Сервісу' : 'Contact Phone Number'}
                  </h4>
                  <a
                    href="tel:+380503806692"
                    style={{ fontSize: '1.2rem', fontWeight: 900, marginTop: '4px', color: isDark ? '#FFF' : '#111', display: 'inline-block', textDecoration: 'none' }}
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
                  justify: 'center',
                  flexShrink: 0
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
