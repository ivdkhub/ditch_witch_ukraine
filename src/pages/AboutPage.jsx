import React from 'react';
import { MapPin, Phone, Clock, ShieldCheck, Award, ArrowRight, Handshake, CheckCircle2, Globe, Building2, Package, Sparkles, User, Mail } from 'lucide-react';
import { useTranslation } from '../i18n/LanguageContext';
import { useTheme } from '../theme/ThemeContext';
import ParallaxCard from '../components/ParallaxCard';

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
      uk: 'ДІТЧ ВІТЧ УКРАЇНА • ГРУПА JLM',
      en: 'DITCH WITCH UKRAINE • JLM GROUP',
      pl: 'DITCH WITCH UKRAINA • GRUPA JLM'
    },
    title: {
      uk: 'Про Компанію Дітч Вітч Україна',
      en: 'About Ditch Witch Ukraine',
      pl: 'O Firmie Ditch Witch Ukraina'
    },
    subtitle: {
      uk: 'Офіційне представництво групи JLM — ексклюзивного дистриб’ютора Дітч Вітч® в Україні та Північній Європі.',
      en: 'Official representation of JLM Group — exclusive distributor of Ditch Witch® in Ukraine and Northern Europe.',
      pl: 'Oficjalny przedstawiciel grupy JLM — wyłącznego dystrybutora Ditch Witch® w Ukrainie i Europie Północnej.'
    },
    stats: [
      { number: '20+', label: { uk: 'Років в Україні', en: 'Years in Ukraine', pl: 'Lat w Ukrainie' }, sub: { uk: 'Досвід та надійність з 2004 року', en: 'Trusted service since 2004', pl: 'Zaufanie od 2004 roku' } },
      { number: '6', label: { uk: 'Країн Європи', en: 'European Countries', pl: 'Krajów Europy' }, sub: { uk: 'Швеція, Норвегія, Фінляндія, Данія, Польща, Україна', en: 'Sweden, Norway, Finland, Denmark, Poland, Ukraine', pl: 'Szwecja, Norwegia, Finlandia, Dania, Polska, Ukraina' } },
      { number: '100%', label: { uk: 'Оригінал & Сервіс', en: 'Genuine & Service', pl: 'Oryginał i Serwis' }, sub: { uk: 'Прямий склад в Києві', en: 'Direct warehouse in Kyiv', pl: 'Magazyn bezpośrednio w Kijowie' } }
    ],
    mainTextP1: {
      uk: 'Дітч Вітч Україна входить до групи JLM, яка є офіційним представником Дітч Вітч® у Швеції, Норвегії, Фінляндії, Данії, Польщі та Україні. Компанія Дітч Вітч Україна продає машини та пристрої для компаній, що спеціалізуються на будівництві підземної інфраструктури з початку сімдесятих років минулого століття. Штаб-квартира компанії знаходиться в Мальме (Швеція), де є центральний склад запасних частин та машин.',
      en: 'Ditch Witch Ukraine is part of the JLM Group, which is the official distributor of Ditch Witch® in Sweden, Norway, Finland, Denmark, Poland, and Ukraine. Ditch Witch Ukraine supplies machinery and equipment for companies specializing in underground infrastructure construction since the early 1970s. The company headquarters are located in Malmö (Sweden), housing the central spare parts and machinery warehouse.',
      pl: 'Ditch Witch Ukraina wchodzi w skład grupy JLM, która jest oficjalnym przedstawicielem Ditch Witch® w Szwecji, Norwegii, Finlandii, Danii, Polsce oraz w Ukrainie. Firma Ditch Witch Ukraina dostarcza maszyny i urządzenia dla przedsiębiorstw specjalizujących się w budownictwie infrastruktury podziemnej od początku lat siedemdziesiątych ubiegłego wieku. Siedziba główna firmy znajduje się w Malmö (Szwecja), gdzie mieści się centralny magazyn części zamiennych i maszyn.'
    },
    brandsTitle: {
      uk: 'Ексклюзивні Торгові Марки:',
      en: 'Exclusive Official Brands:',
      pl: 'Wyłączne Marki:'
    },
    brandsList: ['Ditch Witch®', 'Zahn®', 'Subsite® Electronics', 'HammerHead®', 'HammerHead Mole®', 'American Augers® – TRENCOR®', 'Häny', 'Baroid®'],
    prioritiesTitle: {
      uk: 'Наші Ключові Пріоритети:',
      en: 'Our Strategic Priorities:',
      pl: 'Nasze Główne Priorytety:'
    },
    prioritiesList: [
      {
        icon: Handshake,
        title: { uk: 'Надійне Партнерство', en: 'Reliable Partnership', pl: 'Niezawodne Partnerstwo' },
        desc: { uk: 'Бути надійним та довгостроковим партнером для кожного клієнта.', en: 'Being a reliable long-term partner for all customer operations.', pl: 'Bycie niezawodnym partnerem dla każdego klienta.' }
      },
      {
        icon: Award,
        title: { uk: 'Лідерство в Сервісі', en: 'Service Leadership', pl: 'Liderstwo w Serwisie' },
        desc: { uk: 'Бути лідером у консалтинговій та сертифікованій технічній службі.', en: 'Leading in technical consulting and engineering service support.', pl: 'Liderstwo w usłudze doradczej i technicznej.' }
      },
      {
        icon: Sparkles,
        title: { uk: 'Творчість та Відкритість', en: 'Client Openness', pl: 'Otwartość na Klienta' },
        desc: { uk: 'Проявляти творчість та відкритість до загальних потреб клієнта.', en: 'Demonstrating creativity and openness to clients overall needs.', pl: 'Wykazywanie kreatywności i otwartości na potrzeby klienta.' }
      },
      {
        icon: ShieldCheck,
        title: { uk: 'Комплексний Сервіс', en: 'Complete Lifecycle Care', pl: 'Kompleksowy Сервіс' },
        desc: { uk: 'Забезпечувати комплексне обслуговування машин Дітч Вітч® та партнерів.', en: 'Providing full lifecycle maintenance for Ditch Witch® machinery.', pl: 'Kompleksowa obsługa serwisowa maszyn marki Ditch Witch®.' }
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
      {/* Header Banner Ultra-Slow Animated */}
      <div style={{
        backgroundColor: '#050505',
        color: '#FFFFFF',
        padding: '65px 0',
        borderBottom: '4px solid #FF6600',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 10 }}>
          <ParallaxCard delay={0.1}>
            <span style={{
              color: '#FF6600',
              fontWeight: 800,
              fontSize: '0.85rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase'
            }}>
              {contentData.badge[language] || contentData.badge.uk}
            </span>
          </ParallaxCard>

          <ParallaxCard delay={0.3}>
            <h1 style={{
              fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
              fontWeight: 900,
              marginTop: '8px',
              marginBottom: '14px',
              textTransform: 'uppercase'
            }}>
              {contentData.title[language] || contentData.title.uk}
            </h1>
          </ParallaxCard>

          <ParallaxCard delay={0.5}>
            <p style={{
              color: '#CED0D1',
              maxWidth: '780px',
              margin: '0 auto',
              fontSize: '1.05rem',
              lineHeight: 1.6
            }}>
              {contentData.subtitle[language] || contentData.subtitle.uk}
            </p>
          </ParallaxCard>
        </div>
      </div>

      <div className="container" style={{ marginTop: '50px' }}>
        {/* CARD 1: JLM GROUP OVERVIEW NARRATIVE REDESIGNED */}
        <ParallaxCard delay={0.15}>
          <div style={{
            backgroundColor: isDark ? 'rgba(28, 28, 28, 0.75)' : 'rgba(255, 255, 255, 0.75)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            borderRadius: '16px',
            border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.08)'}`,
            boxShadow: isDark ? '0 12px 36px rgba(0,0,0,0.5)' : '0 12px 36px rgba(0,0,0,0.06)',
            padding: '40px',
            marginBottom: '50px'
          }}>
            {/* Top Brand Header */}
            <ParallaxCard delay={0.25}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justify: 'center',
                textAlign: 'center',
                paddingBottom: '28px',
                marginBottom: '32px',
                borderBottom: `1px solid ${isDark ? '#2B2B2B' : '#EAEAEA'}`
              }}>
                <div>
                  <span style={{ color: '#FF6600', fontWeight: 800, fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                    PART OF JLM GROUP SCANDINAVIA | UKRAINE
                  </span>
                  <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 900, marginTop: '4px', margin: 0 }}>
                    {language === 'uk' ? 'Дітч Вітч® в Україні та Європі' : language === 'pl' ? 'Ditch Witch® w Ukrainie i Europie' : 'Ditch Witch® in Ukraine & Europe'}
                  </h2>
                </div>
              </div>
            </ParallaxCard>

            {/* Stat Counter & JLM Logo Card Grid (Staggered Cursor-Following Parallax Cards) */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
              gap: '20px',
              marginBottom: '40px'
            }}>
              {contentData.stats.map((st, idx) => (
                <ParallaxCard key={idx} delay={0.2 * (idx + 1)}>
                  <div
                    style={{
                      backgroundColor: isDark ? '#181818' : '#F4F6F9',
                      border: `1px solid ${isDark ? '#2E2E2E' : '#E2E8F0'}`,
                      borderRadius: '12px',
                      padding: '24px',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justify: 'center',
                      textAlign: 'center',
                      position: 'relative',
                      overflow: 'hidden',
                      height: '100%'
                    }}
                  >
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '4px',
                      height: '100%',
                      backgroundColor: '#FF6600'
                    }} />
                    <div style={{ fontSize: '2.4rem', fontWeight: 900, color: '#FF6600', lineHeight: 1 }}>
                      {st.number}
                    </div>
                    <div style={{ fontSize: '1rem', fontWeight: 800, marginTop: '8px', color: isDark ? '#FFF' : '#111' }}>
                      {st.label[language] || st.label.uk}
                    </div>
                    <div style={{ fontSize: '0.78rem', color: isDark ? '#999' : '#666', marginTop: '4px' }}>
                      {st.sub[language] || st.sub.uk}
                    </div>
                  </div>
                </ParallaxCard>
              ))}

              {/* JLM Logo Card (Cursor-Following Parallax) */}
              <ParallaxCard delay={0.8}>
                <div
                  style={{
                    backgroundColor: isDark ? '#181818' : '#F4F6F9',
                    border: `1px solid ${isDark ? '#2E2E2E' : '#E2E8F0'}`,
                    borderRadius: '12px',
                    padding: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justify: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                    minHeight: '120px',
                    lineHeight: 0,
                    height: '100%'
                  }}
                >
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '4px',
                    height: '100%',
                    backgroundColor: '#FF6600'
                  }} />
                  <img
                    src="/Risorse/Immagini/jlm_logo.png"
                    alt="JLM Group Logo"
                    style={{ maxHeight: '55px', maxWidth: '85%', objectFit: 'contain', margin: 'auto', display: 'block' }}
                  />
                </div>
              </ParallaxCard>
            </div>

            {/* 2-Column Split Layout (Staggered Cursor-Following Parallax Cards) */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '32px',
              marginBottom: '40px'
            }}>
              {/* Column 1: History & Warehouse Details */}
              <ParallaxCard delay={0.3}>
                <div style={{
                  backgroundColor: isDark ? '#151515' : '#FFFFFF',
                  border: `1px solid ${isDark ? '#282828' : '#E2E8F0'}`,
                  borderRadius: '12px',
                  padding: '28px',
                  display: 'flex',
                  flexDirection: 'column',
                  justify: 'space-between',
                  alignItems: 'center',
                  textAlign: 'center',
                  height: '100%'
                }}>
                  <div>
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justify: 'center',
                      gap: '8px',
                      color: '#FF6600',
                      marginBottom: '16px'
                    }}>
                      <div style={{
                        backgroundColor: 'rgba(255, 102, 0, 0.12)',
                        width: '50px',
                        height: '50px',
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justify: 'center',
                        lineHeight: 0
                      }}>
                        <Building2 size={26} style={{ display: 'block', margin: 'auto' }} />
                      </div>
                      <h3 style={{ fontSize: '1.1rem', fontWeight: 900, margin: 0, textTransform: 'uppercase' }}>
                        {language === 'uk' ? 'Штаб-квартира Мальме (Швеція)' : 'Malmö Headquarters (Sweden)'}
                      </h3>
                    </div>
                    <p style={{
                      fontSize: '0.96rem',
                      lineHeight: 1.75,
                      color: isDark ? '#CCCCCC' : '#333333',
                      margin: 0
                    }}>
                      {contentData.mainTextP1[language] || contentData.mainTextP1.uk}
                    </p>
                  </div>

                  <div style={{
                    marginTop: '20px',
                    paddingTop: '16px',
                    borderTop: `1px solid ${isDark ? '#262626' : '#F0F0F0'}`,
                    display: 'flex',
                    alignItems: 'center',
                    justify: 'center',
                    gap: '10px',
                    fontSize: '0.88rem',
                    fontWeight: 700,
                    color: '#FF6600',
                    textAlign: 'center',
                    width: '100%',
                    lineHeight: 0
                  }}>
                    <Package size={18} style={{ display: 'block', flexShrink: 0 }} />
                    <span style={{ lineHeight: 1.4 }}>{language === 'uk' ? 'Центральний склад обладнання та оригінальних запчастин' : 'Central machinery and OEM parts inventory warehouse'}</span>
                  </div>
                </div>
              </ParallaxCard>

              {/* Column 2: Exclusive Brands Badge Showcase */}
              <ParallaxCard delay={0.55}>
                <div style={{
                  backgroundColor: isDark ? '#151515' : '#FFFFFF',
                  border: `1px solid ${isDark ? '#282828' : '#E2E8F0'}`,
                  borderRadius: '12px',
                  padding: '28px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  height: '100%'
                }}>
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justify: 'center',
                    gap: '8px',
                    color: '#FF6600',
                    marginBottom: '16px'
                  }}>
                    <div style={{
                      backgroundColor: 'rgba(255, 102, 0, 0.12)',
                      width: '50px',
                      height: '50px',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justify: 'center',
                      lineHeight: 0
                    }}>
                      <Globe size={26} style={{ display: 'block', margin: 'auto' }} />
                    </div>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 900, margin: 0, textTransform: 'uppercase' }}>
                      {contentData.brandsTitle[language] || contentData.brandsTitle.uk}
                    </h3>
                  </div>

                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justify: 'center',
                    gap: '10px'
                  }}>
                    {contentData.brandsList.map((brand, bIdx) => (
                      <span
                        key={bIdx}
                        style={{
                          backgroundColor: isDark ? '#222222' : '#FFF4EC',
                          color: isDark ? '#FFFFFF' : '#D95300',
                          border: `1px solid ${isDark ? '#383838' : '#FFD8BE'}`,
                          borderRadius: '8px',
                          padding: '8px 14px',
                          fontSize: '0.88rem',
                          fontWeight: 800,
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          lineHeight: 1
                        }}
                      >
                        <CheckCircle2 size={14} style={{ color: '#FF6600', display: 'block', flexShrink: 0 }} />
                        <span>{brand}</span>
                      </span>
                    ))}
                  </div>

                  <div style={{
                    backgroundColor: isDark ? '#1E1E1E' : '#F9FAFC',
                    borderRadius: '8px',
                    padding: '16px',
                    marginTop: '20px',
                    fontSize: '0.85rem',
                    color: isDark ? '#AAA' : '#555',
                    lineHeight: 1.5,
                    textAlign: 'center',
                    width: '100%',
                    border: `1px solid ${isDark ? '#2B2B2B' : '#E5E7EB'}`
                  }}>
                    {language === 'uk'
                      ? 'Єдиний офіційний представник в Україні. Прямі постачання, сертифікат виробника та гарантія.'
                      : 'Exclusive official distributor in Ukraine. Direct factory imports with certified manufacturer warranty.'}
                  </div>
                </div>
              </ParallaxCard>
            </div>

            {/* Modern Priorities Card Grid (Staggered Cursor-Following Parallax Cards) */}
            <div>
              <ParallaxCard delay={0.2}>
                <h3 style={{
                  fontSize: '1.2rem',
                  fontWeight: 900,
                  color: '#FF6600',
                  textTransform: 'uppercase',
                  marginBottom: '24px',
                  textAlign: 'center'
                }}>
                  {contentData.prioritiesTitle[language] || contentData.prioritiesTitle.uk}
                </h3>
              </ParallaxCard>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '20px'
              }}>
                {contentData.prioritiesList.map((pr, pIdx) => {
                  const IconComponent = pr.icon;
                  const pTitle = pr.title[language] || pr.title.uk;
                  const pDesc = pr.desc[language] || pr.desc.uk;

                  return (
                    <ParallaxCard key={pIdx} delay={0.2 * (pIdx + 1)}>
                      <div
                        style={{
                          backgroundColor: isDark ? '#161616' : '#FFFFFF',
                          border: `1px solid ${isDark ? '#2C2C2C' : '#E2E8F0'}`,
                          borderRadius: '12px',
                          padding: '28px 20px',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justify: 'flex-start',
                          textAlign: 'center',
                          boxShadow: isDark ? '0 4px 12px rgba(0,0,0,0.3)' : '0 4px 12px rgba(0,0,0,0.04)',
                          height: '100%'
                        }}
                      >
                        {/* 100% Dead-Centered Icon Box Container */}
                        <div style={{
                          backgroundColor: 'rgba(255, 102, 0, 0.15)',
                          color: '#FF6600',
                          width: '56px',
                          height: '56px',
                          borderRadius: '14px',
                          display: 'flex',
                          alignItems: 'center',
                          justify: 'center',
                          lineHeight: 0,
                          marginBottom: '18px',
                          flexShrink: 0
                        }}>
                          <IconComponent size={28} style={{ display: 'block', margin: 'auto' }} />
                        </div>

                        <h4 style={{ fontSize: '1.08rem', fontWeight: 800, marginBottom: '10px', color: isDark ? '#FFF' : '#111', width: '100%', textAlign: 'center' }}>
                          {pTitle}
                        </h4>

                        <p style={{ fontSize: '0.88rem', color: isDark ? '#AAA' : '#666', lineHeight: 1.5, margin: 0, width: '100%', textAlign: 'center' }}>
                          {pDesc}
                        </p>
                      </div>
                    </ParallaxCard>
                  );
                })}
              </div>
            </div>

            <ParallaxCard delay={0.4}>
              <div style={{ marginTop: '40px', textAlign: 'center' }}>
                <button onClick={() => onNavigateToProducts && onNavigateToProducts('products')} className="btn-primary">
                  <span>{language === 'uk' ? 'ПЕРЕГЛЯНУТИ КАТАЛОГ ТЕХНІКИ JLM' : 'VIEW JLM EQUIPMENT CATALOG'}</span>
                  <ArrowRight size={16} style={{ display: 'block' }} />
                </button>
              </div>
            </ParallaxCard>
          </div>
        </ParallaxCard>

        {/* TEAM MEMBERS CARD (Matching Location Card dimensions & glassmorphism) */}
        <ParallaxCard delay={0.25}>
          <div style={{
            backgroundColor: isDark ? 'rgba(28, 28, 28, 0.75)' : 'rgba(255, 255, 255, 0.75)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            borderRadius: '16px',
            border: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)'}`,
            boxShadow: isDark ? '0 12px 36px rgba(0,0,0,0.5)' : '0 12px 36px rgba(0,0,0,0.06)',
            overflow: 'hidden',
            marginTop: '40px',
            marginBottom: '40px'
          }}>
            {/* Header Bar */}
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
                  OFFICIAL TEAM & KEY CONTACTS
                </span>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 900, margin: 0, marginTop: '2px', color: isDark ? '#FFF' : '#111' }}>
                  {language === 'uk' ? 'Команда Фахівців Ditch Witch® Україна' : language === 'pl' ? 'Zespół Specjalistów Ditch Witch® Ukraina' : 'Ditch Witch® Ukraine Key Team'}
                </h3>
              </div>

              <div style={{
                backgroundColor: 'rgba(255, 102, 0, 0.12)',
                color: '#FF6600',
                padding: '6px 14px',
                borderRadius: '20px',
                fontWeight: 800,
                fontSize: '0.8rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px'
              }}>
                <User size={15} />
                <span>{language === 'uk' ? '3 Керівники та Консультанти' : '3 Key Specialists'}</span>
              </div>
            </div>

            {/* 3 Creative Team Member Cards Grid */}
            <div style={{
              padding: '32px',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px'
            }}>
              {/* Member 1: Маханьков Дмитро */}
              <div style={{
                backgroundColor: isDark ? 'rgba(18, 18, 18, 0.8)' : '#F9FAFB',
                borderRadius: '12px',
                padding: '24px',
                border: `1px solid ${isDark ? '#2D2D2D' : '#E5E7EB'}`,
                display: 'flex',
                flexDirection: 'column',
                justify: 'space-between',
                gap: '16px'
              }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #FF6600 0%, #D95300 100%)',
                      color: '#FFFFFF',
                      display: 'grid',
                      placeItems: 'center',
                      fontWeight: 900,
                      fontSize: '1.4rem',
                      lineHeight: 1,
                      flexShrink: 0,
                      boxShadow: '0 4px 14px rgba(255, 102, 0, 0.4)'
                    }}>
                      <span style={{ lineHeight: 1, margin: 0, padding: 0, display: 'block', textAlign: 'center' }}>DM</span>
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1.25rem', fontWeight: 900, margin: 0, color: isDark ? '#FFF' : '#111' }}>
                        {language === 'uk' ? 'Маханьков Дмитро' : 'Dmytro Makhankov'}
                      </h4>
                      <a
                        href="mailto:d.makhankov@ditchwitch.kiev.ua"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          color: '#FF6600',
                          fontSize: '0.84rem',
                          fontWeight: 700,
                          textDecoration: 'none',
                          marginTop: '4px'
                        }}
                      >
                        <Mail size={14} />
                        <span>d.makhankov@ditchwitch.kiev.ua</span>
                      </a>
                    </div>
                  </div>
                </div>

                <a
                  href="tel:+380503813398"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justify: 'center',
                    gap: '8px',
                    backgroundColor: '#FF6600',
                    color: '#FFFFFF',
                    padding: '11px 16px',
                    borderRadius: '8px',
                    fontWeight: 800,
                    fontSize: '0.9rem',
                    textDecoration: 'none',
                    boxShadow: '0 4px 12px rgba(255, 102, 0, 0.3)',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <Phone size={16} />
                  <span>+380 50 381 33 98</span>
                </a>
              </div>

              {/* Member 2: Ірина Лясковська */}
              <div style={{
                backgroundColor: isDark ? 'rgba(18, 18, 18, 0.8)' : '#F9FAFB',
                borderRadius: '12px',
                padding: '24px',
                border: `1px solid ${isDark ? '#2D2D2D' : '#E5E7EB'}`,
                display: 'flex',
                flexDirection: 'column',
                justify: 'space-between',
                gap: '16px'
              }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #FF6600 0%, #E65C00 100%)',
                      color: '#FFFFFF',
                      display: 'grid',
                      placeItems: 'center',
                      fontWeight: 900,
                      fontSize: '1.4rem',
                      lineHeight: 1,
                      flexShrink: 0,
                      boxShadow: '0 4px 14px rgba(255, 102, 0, 0.4)'
                    }}>
                      <span style={{ lineHeight: 1, margin: 0, padding: 0, display: 'block', textAlign: 'center' }}>IL</span>
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1.25rem', fontWeight: 900, margin: 0, color: isDark ? '#FFF' : '#111' }}>
                        {language === 'uk' ? 'Ірина Лясковська' : 'Iryna Liaskovska'}
                      </h4>
                      <a
                        href="mailto:buh@ditchwitch.kiev.ua"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          color: '#FF6600',
                          fontSize: '0.84rem',
                          fontWeight: 700,
                          textDecoration: 'none',
                          marginTop: '4px'
                        }}
                      >
                        <Mail size={14} />
                        <span>buh@ditchwitch.kiev.ua</span>
                      </a>
                    </div>
                  </div>
                </div>

                <a
                  href="tel:+380503806692"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justify: 'center',
                    gap: '8px',
                    backgroundColor: '#FF6600',
                    color: '#FFFFFF',
                    padding: '11px 16px',
                    borderRadius: '8px',
                    fontWeight: 800,
                    fontSize: '0.9rem',
                    textDecoration: 'none',
                    boxShadow: '0 4px 12px rgba(255, 102, 0, 0.3)',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <Phone size={16} />
                  <span>+380 50 380 66 92</span>
                </a>
              </div>

              {/* Member 3: Олег Липкин */}
              <div style={{
                backgroundColor: isDark ? 'rgba(18, 18, 18, 0.8)' : '#F9FAFB',
                borderRadius: '12px',
                padding: '24px',
                border: `1px solid ${isDark ? '#2D2D2D' : '#E5E7EB'}`,
                display: 'flex',
                flexDirection: 'column',
                justify: 'space-between',
                gap: '16px'
              }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #FF6600 0%, #D95300 100%)',
                      color: '#FFFFFF',
                      display: 'grid',
                      placeItems: 'center',
                      fontWeight: 900,
                      fontSize: '1.4rem',
                      lineHeight: 1,
                      flexShrink: 0,
                      boxShadow: '0 4px 14px rgba(255, 102, 0, 0.4)'
                    }}>
                      <span style={{ lineHeight: 1, margin: 0, padding: 0, display: 'block', textAlign: 'center' }}>OL</span>
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1.25rem', fontWeight: 900, margin: 0, color: isDark ? '#FFF' : '#111' }}>
                        {language === 'uk' ? 'Олег Липкин' : 'Oleg Lypkyn'}
                      </h4>
                      <a
                        href="mailto:service@ditchwitch.kiev.ua"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          color: '#FF6600',
                          fontSize: '0.84rem',
                          fontWeight: 700,
                          textDecoration: 'none',
                          marginTop: '4px'
                        }}
                      >
                        <Mail size={14} />
                        <span>service@ditchwitch.kiev.ua</span>
                      </a>
                    </div>
                  </div>
                </div>

                <a
                  href="tel:+380506894621"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justify: 'center',
                    gap: '8px',
                    backgroundColor: '#FF6600',
                    color: '#FFFFFF',
                    padding: '11px 16px',
                    borderRadius: '8px',
                    fontWeight: 800,
                    fontSize: '0.9rem',
                    textDecoration: 'none',
                    boxShadow: '0 4px 12px rgba(255, 102, 0, 0.3)',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <Phone size={16} />
                  <span>+380 50 689 46 21</span>
                </a>
              </div>
            </div>
          </div>
        </ParallaxCard>

        {/* CARD 2: LOCATION MAP & CONTACT DETAILS ANIMATED */}
        <ParallaxCard delay={0.3}>
          <div style={{
            backgroundColor: isDark ? 'rgba(28, 28, 28, 0.75)' : 'rgba(255, 255, 255, 0.75)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            borderRadius: '16px',
            border: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)'}`,
            boxShadow: isDark ? '0 12px 36px rgba(0,0,0,0.5)' : '0 12px 36px rgba(0,0,0,0.06)',
            overflow: 'hidden'
          }}>
            {/* Header Bar */}
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
                <h3 style={{ fontSize: '1.4rem', fontWeight: 900, margin: 0, marginTop: '2px', color: isDark ? '#FFF' : '#111' }}>
                  {language === 'uk' ? 'Представництво в Києві' : 'Kyiv Representative Office'}
                </h3>
              </div>

              <a
                href="https://maps.google.com/?q=Kaunaska+street+13,+Kyiv,+Ukraine"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ textDecoration: 'none', marginLeft: 'auto' }}
              >
                <MapPin size={16} style={{ display: 'block' }} />
                <span>{language === 'uk' ? 'ОТРИМАТИ МАРШРУТ' : 'GET DIRECTIONS'}</span>
              </a>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))'
            }}>
              {/* Contact Info Details - Perfectly Centered Orange Icon Boxes */}
              <div style={{ padding: '36px', display: 'flex', flexDirection: 'column', gap: '28px' }}>
                
                {/* Item 1: Address */}
                <ParallaxCard delay={0.2}>
                  <div style={{ display: 'flex', gap: '18px', alignItems: 'center' }}>
                    <div style={{
                      backgroundColor: '#FF6600',
                      color: '#FFFFFF',
                      width: '54px',
                      height: '54px',
                      minWidth: '54px',
                      minHeight: '54px',
                      borderRadius: '14px',
                      display: 'flex',
                      alignItems: 'center',
                      justify: 'center',
                      lineHeight: 0,
                      flexShrink: 0,
                      boxShadow: '0 4px 12px rgba(255, 102, 0, 0.3)'
                    }}>
                      <MapPin size={26} style={{ display: 'block', margin: 'auto' }} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '0.85rem', fontWeight: 800, color: '#FF6600', textTransform: 'uppercase', margin: 0 }}>
                        {language === 'uk' ? 'Адреса Офісу та Складу' : 'Office & Warehouse Address'}
                      </h4>
                      <p style={{ fontSize: '1.05rem', fontWeight: 700, marginTop: '4px', color: isDark ? '#FFF' : '#111', margin: 0 }}>
                        {contactAddress}
                      </p>
                    </div>
                  </div>
                </ParallaxCard>

                {/* Item 2: Phone */}
                <ParallaxCard delay={0.4}>
                  <div style={{ display: 'flex', gap: '18px', alignItems: 'center' }}>
                    <div style={{
                      backgroundColor: '#FF6600',
                      color: '#FFFFFF',
                      width: '54px',
                      height: '54px',
                      minWidth: '54px',
                      minHeight: '54px',
                      borderRadius: '14px',
                      display: 'flex',
                      alignItems: 'center',
                      justify: 'center',
                      lineHeight: 0,
                      flexShrink: 0,
                      boxShadow: '0 4px 12px rgba(255, 102, 0, 0.3)'
                    }}>
                      <Phone size={26} style={{ display: 'block', margin: 'auto' }} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '0.85rem', fontWeight: 800, color: '#FF6600', textTransform: 'uppercase', margin: 0 }}>
                        {language === 'uk' ? 'Телефон Відділу Продажу та Сервісу' : 'Contact Phone Number'}
                      </h4>
                      <a
                        href="tel:+380503806692"
                        style={{ fontSize: '1.25rem', fontWeight: 900, marginTop: '4px', color: isDark ? '#FFF' : '#111', display: 'inline-block', textDecoration: 'none' }}
                      >
                        {contactPhone}
                      </a>
                    </div>
                  </div>
                </ParallaxCard>

                {/* Item 3: Hours */}
                <ParallaxCard delay={0.6}>
                  <div style={{ display: 'flex', gap: '18px', alignItems: 'center' }}>
                    <div style={{
                      backgroundColor: '#FF6600',
                      color: '#FFFFFF',
                      width: '54px',
                      height: '54px',
                      minWidth: '54px',
                      minHeight: '54px',
                      borderRadius: '14px',
                      display: 'flex',
                      alignItems: 'center',
                      justify: 'center',
                      lineHeight: 0,
                      flexShrink: 0,
                      boxShadow: '0 4px 12px rgba(255, 102, 0, 0.3)'
                    }}>
                      <Clock size={26} style={{ display: 'block', margin: 'auto' }} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '0.85rem', fontWeight: 800, color: '#FF6600', textTransform: 'uppercase', margin: 0 }}>
                        {language === 'uk' ? 'Графік Роботи' : 'Working Hours'}
                      </h4>
                      <p style={{ fontSize: '0.95rem', fontWeight: 600, marginTop: '4px', color: isDark ? '#DDD' : '#333', margin: 0 }}>
                        Пн - Пт: 09:00 - 18:00<br />
                        Сб - Нд: Вихідні (Мобільний сервіс 24/7)
                      </p>
                    </div>
                  </div>
                </ParallaxCard>

              </div>

              {/* Embedded Google Maps Container */}
              <ParallaxCard delay={0.5}>
                <div style={{ minHeight: '380px', width: '100%', position: 'relative', height: '100%' }}>
                  <iframe
                    title="Ditch Witch Ukraine Location Map"
                    src="https://maps.google.com/maps?q=Kaunaska%20street%13%2C%20Kyiv%2C%20Ukraine&t=&z=16&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: '380px' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </ParallaxCard>
            </div>
          </div>
        </ParallaxCard>
      </div>
    </div>
  );
}
