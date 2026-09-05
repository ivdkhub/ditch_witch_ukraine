import React, { useState } from 'react';
import { Phone, Mail, User, CheckCircle2, Send, ShieldCheck } from 'lucide-react';
import { useTranslation } from '../i18n/LanguageContext';
import { useTheme } from '../theme/ThemeContext';
import ParallaxCard from '../components/ParallaxCard';

export default function UsedEquipmentPage() {
  const { language } = useTranslation();
  const { theme } = useTheme();

  const isDark = theme === 'dark';

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    equipmentType: 'hdd',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
  };

  const consultantName = language === 'uk' ? 'Олег Липкин' : 'Oleg Lypkyn';
  const consultantRole = language === 'uk'
    ? 'Головний інженер / Консультант з б/в техніки'
    : language === 'pl'
    ? 'Główny Inżynier / Doradca ds. Sprzętu Używanego'
    : 'Chief Engineer & Pre-Owned Machinery Specialist';

  return (
    <div style={{
      backgroundColor: isDark ? '#0F0F0F' : '#F8F9FA',
      color: isDark ? '#FFFFFF' : '#111111',
      minHeight: '85vh',
      paddingBottom: '80px',
      transition: 'background-color 0.3s ease, color 0.3s ease'
    }}>
      {/* Header Banner with ParallaxCard Entrance */}
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
              {language === 'uk' ? 'ПРОГРАМА JLM USED EQUIPMENT' : language === 'pl' ? 'PROGRAM JLM SPRZĘT UŻYWANY' : 'JLM PRE-OWNED EQUIPMENT'}
            </span>
          </ParallaxCard>

          <ParallaxCard delay={0.25}>
            <h1 style={{
              fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
              fontWeight: 900,
              marginTop: '8px',
              marginBottom: '14px',
              textTransform: 'uppercase'
            }}>
              {language === 'uk' ? 'Вживана техніка Ditch Witch®' : language === 'pl' ? 'Używane Maszyny Ditch Witch®' : 'Used Ditch Witch® Equipment'}
            </h1>
          </ParallaxCard>

          <ParallaxCard delay={0.4}>
            <p style={{
              color: '#CED0D1',
              maxWidth: '780px',
              margin: '0 auto',
              fontSize: '1.05rem',
              lineHeight: 1.6
            }}>
              {language === 'uk'
                ? 'Офіційний підбір, інспекція та продаж перевіреної б/в техніки Ditch Witch® (бурові ГНБ, траншеєкопачі, локатори, міксери). Дізнайтеся наявність або замовте консультацію фахівця.'
                : language === 'pl'
                ? 'Oficjalny wybór i sprzedaż sprawdzonych używanych maszyn Ditch Witch®. Dowiedz się o aktualnej dostępności lub skonsultuj się z doradcą.'
                : 'Official selection, inspection, and sale of certified pre-owned Ditch Witch® machinery. Inquire about current stock or speak with our specialist.'}
            </p>
          </ParallaxCard>
        </div>
      </div>

      <div className="container" style={{ marginTop: '40px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '40px',
          alignItems: 'start'
        }}>
          {/* Left Column: Dedicated Contact Person Box with ParallaxCard Tilt */}
          <ParallaxCard delay={0.2} style={{ height: '100%' }}>
            <div style={{
              backgroundColor: isDark ? 'rgba(26, 26, 26, 0.85)' : '#FFFFFF',
              borderRadius: '14px',
              padding: '32px',
              border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.08)'}`,
              boxShadow: isDark ? '0 10px 30px rgba(0,0,0,0.5)' : '0 10px 30px rgba(0,0,0,0.06)',
              height: '100%',
              boxSizing: 'border-box'
            }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: 'rgba(255, 102, 0, 0.12)',
              color: '#FF6600',
              fontWeight: 800,
              fontSize: '0.8rem',
              padding: '6px 12px',
              borderRadius: '6px',
              marginBottom: '20px',
              textTransform: 'uppercase'
            }}>
              <ShieldCheck size={16} />
              <span>{language === 'uk' ? 'ОФІЦІЙНИЙ КОНСУЛЬТАНТ' : language === 'pl' ? 'OFICJALNY DORADCA' : 'OFFICIAL CONSULTANT'}</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '24px' }}>
              <div style={{
                width: '68px',
                height: '68px',
                borderRadius: '50%',
                backgroundColor: '#FF6600',
                color: '#FFFFFF',
                display: 'grid',
                placeItems: 'center',
                fontWeight: 900,
                fontSize: '1.5rem',
                lineHeight: 1,
                flexShrink: 0,
                boxShadow: '0 4px 14px rgba(255, 102, 0, 0.4)'
              }}>
                <span style={{ lineHeight: 1, margin: 0, padding: 0, display: 'block', textAlign: 'center' }}>OL</span>
              </div>
              <div>
                <h2 style={{ fontSize: '1.4rem', fontWeight: 900, marginBottom: '4px', color: isDark ? '#FFFFFF' : '#111111' }}>
                  {consultantName}
                </h2>
                <p style={{ color: '#FF6600', fontSize: '0.9rem', fontWeight: 700 }}>
                  {consultantRole}
                </p>
              </div>
            </div>

            <p style={{
              fontSize: '0.92rem',
              color: isDark ? '#B0B0B0' : '#555555',
              lineHeight: 1.6,
              marginBottom: '28px',
              borderBottom: `1px solid ${isDark ? '#2E2E2E' : '#E2E8F0'}`,
              paddingBottom: '20px'
            }}>
              {language === 'uk'
                ? `Зв’яжіться з ${consultantName} для отримання актуального списку вживаних бурових комплектів, траншеєкопачів та локаційних систем Subsite® на складі.`
                : `Contact ${consultantName} to get the latest list of inspected pre-owned HDD rigs, trenchers, and Subsite® locators available in stock.`}
            </p>

            {/* Direct Contact Links */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <a
                href="tel:+380506894621"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  backgroundColor: isDark ? 'rgba(36, 36, 36, 0.9)' : '#F1F5F9',
                  padding: '14px 18px',
                  borderRadius: '10px',
                  color: isDark ? '#FFFFFF' : '#0F172A',
                  textDecoration: 'none',
                  fontWeight: 800,
                  fontSize: '1rem',
                  border: '1px solid transparent',
                  transition: 'all 0.25s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#FF6600';
                  e.currentTarget.style.color = '#FF6600';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'transparent';
                  e.currentTarget.style.color = isDark ? '#FFFFFF' : '#0F172A';
                }}
              >
                <div style={{
                  backgroundColor: '#FF6600',
                  color: '#FFFFFF',
                  padding: '8px',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justify: 'center'
                }}>
                  <Phone size={18} />
                </div>
                <div>
                  <span style={{ display: 'block', fontSize: '0.75rem', color: '#888888', fontWeight: 600, textTransform: 'uppercase' }}>
                    {language === 'uk' ? 'Телефон / Мобільний' : 'Phone Number'}
                  </span>
                  <span>+380 50 689 46 21</span>
                </div>
              </a>

              <a
                href="mailto:service@ditchwitch.kiev.ua"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  backgroundColor: isDark ? 'rgba(36, 36, 36, 0.9)' : '#F1F5F9',
                  padding: '14px 18px',
                  borderRadius: '10px',
                  color: isDark ? '#FFFFFF' : '#0F172A',
                  textDecoration: 'none',
                  fontWeight: 800,
                  fontSize: '0.95rem',
                  border: '1px solid transparent',
                  transition: 'all 0.25s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#FF6600';
                  e.currentTarget.style.color = '#FF6600';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'transparent';
                  e.currentTarget.style.color = isDark ? '#FFFFFF' : '#0F172A';
                }}
              >
                <div style={{
                  backgroundColor: '#FF6600',
                  color: '#FFFFFF',
                  padding: '8px',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justify: 'center'
                }}>
                  <Mail size={18} />
                </div>
                <div style={{ overflow: 'hidden' }}>
                  <span style={{ display: 'block', fontSize: '0.75rem', color: '#888888', fontWeight: 600, textTransform: 'uppercase' }}>
                    {language === 'uk' ? 'Електронна пошта' : 'Direct E-mail'}
                  </span>
                  <span style={{ wordBreak: 'break-all' }}>service@ditchwitch.kiev.ua</span>
                </div>
              </a>
            </div>
            </div>
          </ParallaxCard>

          {/* Right Column: Inquiry & Callback Request Form with ParallaxCard Tilt */}
          <ParallaxCard delay={0.35} style={{ height: '100%' }}>
            <div style={{
              backgroundColor: isDark ? 'rgba(26, 26, 26, 0.85)' : '#FFFFFF',
              borderRadius: '14px',
              padding: '32px',
              border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.08)'}`,
              boxShadow: isDark ? '0 10px 30px rgba(0,0,0,0.5)' : '0 10px 30px rgba(0,0,0,0.06)',
              height: '100%',
              boxSizing: 'border-box'
            }}>
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                  <div style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    backgroundColor: '#FF6600',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px auto'
                  }}>
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '12px', color: isDark ? '#FFFFFF' : '#111111' }}>
                    {language === 'uk' ? 'Запит успішно надіслано!' : language === 'pl' ? 'Zapytanie zostało wysłane!' : 'Inquiry Sent Successfully!'}
                  </h3>
                  <p style={{ color: isDark ? '#CCCCCC' : '#555555', lineHeight: 1.6, maxWidth: '420px', margin: '0 auto 24px auto' }}>
                    {language === 'uk'
                      ? `Дякуємо! Ваш запит на підбір б/в техніки отримано. Консультант ${consultantName} зв'яжеться з Вами найближчим часом за вказаним номером телефону.`
                      : `Thank you! Your pre-owned equipment inquiry has been sent to ${consultantName}. He will contact you shortly.`}
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-primary"
                    style={{ margin: '0 auto' }}
                  >
                    {language === 'uk' ? 'НАДІСЛАТИ ЩЕ ОДИН ЗАПИТ' : 'SEND ANOTHER REQUEST'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h2 style={{ fontSize: '1.4rem', fontWeight: 900, marginBottom: '8px', color: isDark ? '#FFFFFF' : '#111111' }}>
                    {language === 'uk' ? 'Запит наявного обладнання б/в' : language === 'pl' ? 'Zapytanie o dostępność maszyn' : 'Request Available Pre-Owned Stock'}
                  </h2>
                  <p style={{ fontSize: '0.88rem', color: isDark ? '#AAA' : '#666', marginBottom: '24px' }}>
                    {language === 'uk'
                      ? 'Заповніть форму нижче, щоб дізнатися, що є в наявності на даний момент або замовити консультацію фахівця.'
                      : 'Fill in the form below to inquire about current stock or request a call from our consultant.'}
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 800, marginBottom: '6px', color: isDark ? '#CCC' : '#333' }}>
                        {language === 'uk' ? "Ваше Ім'я *" : 'Your Name *'}
                      </label>
                      <input
                        type="text"
                        required
                        placeholder={language === 'uk' ? 'Олександр' : 'John Smith'}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          borderRadius: '8px',
                          backgroundColor: isDark ? 'rgba(18, 18, 18, 0.8)' : '#F8F9FA',
                          border: `1px solid ${isDark ? '#333' : '#CCC'}`,
                          color: isDark ? '#FFFFFF' : '#111',
                          outline: 'none'
                        }}
                      />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 800, marginBottom: '6px', color: isDark ? '#CCC' : '#333' }}>
                          {language === 'uk' ? 'Номер телефону *' : 'Phone Number *'}
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+380..."
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          style={{
                            width: '100%',
                            minHeight: '44px',
                            boxSizing: 'border-box',
                            padding: '12px 16px',
                            borderRadius: '8px',
                            backgroundColor: isDark ? 'rgba(18, 18, 18, 0.8)' : '#F8F9FA',
                            border: `1px solid ${isDark ? '#333' : '#CCC'}`,
                            color: isDark ? '#FFFFFF' : '#111',
                            outline: 'none'
                          }}
                        />
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 800, marginBottom: '6px', color: isDark ? '#CCC' : '#333' }}>
                          E-mail
                        </label>
                        <input
                          type="email"
                          placeholder="example@mail.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          style={{
                            width: '100%',
                            minHeight: '44px',
                            boxSizing: 'border-box',
                            padding: '12px 16px',
                            borderRadius: '8px',
                            backgroundColor: isDark ? 'rgba(18, 18, 18, 0.8)' : '#F8F9FA',
                            border: `1px solid ${isDark ? '#333' : '#CCC'}`,
                            color: isDark ? '#FFFFFF' : '#111',
                            outline: 'none'
                          }}
                        />
                      </div>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 800, marginBottom: '6px', color: isDark ? '#CCC' : '#333' }}>
                        {language === 'uk' ? 'Категорія техніки, що цікавить' : 'Interested Equipment Category'}
                      </label>
                      <select
                        value={formData.equipmentType}
                        onChange={(e) => setFormData({ ...formData, equipmentType: e.target.value })}
                        style={{
                          width: '100%',
                          minHeight: '44px',
                          boxSizing: 'border-box',
                          padding: '12px 16px',
                          borderRadius: '8px',
                          backgroundColor: isDark ? '#1C1C1C' : '#F8F9FA',
                          border: `1px solid ${isDark ? '#333' : '#CCC'}`,
                          color: isDark ? '#FFFFFF' : '#111',
                          outline: 'none'
                        }}
                      >
                        <option value="hdd">{language === 'uk' ? 'Машини ГНБ (HDD Drills)' : 'HDD Drills'}</option>
                        <option value="trenchers">{language === 'uk' ? 'Траншеєкопачі / Віброукладачі' : 'Trenchers & Plows'}</option>
                        <option value="electronics">{language === 'uk' ? 'Локаційні системи Subsite®' : 'Subsite® Locators'}</option>
                        <option value="mixers">{language === 'uk' ? 'Змішувальні вузли / Міксери' : 'Bentonite Mixers'}</option>
                        <option value="other">{language === 'uk' ? 'Інше / Комплексні рішення' : 'Other'}</option>
                      </select>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 800, marginBottom: '6px', color: isDark ? '#CCC' : '#333' }}>
                        {language === 'uk' ? 'Коментар / Повідомлення' : 'Message / Details'}
                      </label>
                      <textarea
                        rows={4}
                        placeholder={language === 'uk' ? 'Вкажіть бажані характеристики або бюджет...' : 'Describe what model or specs you are looking for...'}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        style={{
                          width: '100%',
                          boxSizing: 'border-box',
                          padding: '12px 16px',
                          borderRadius: '8px',
                          backgroundColor: isDark ? 'rgba(18, 18, 18, 0.8)' : '#F8F9FA',
                          border: `1px solid ${isDark ? '#333' : '#CCC'}`,
                          color: isDark ? '#FFFFFF' : '#111',
                          outline: 'none',
                          resize: 'vertical'
                        }}
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn-primary touch-target"
                      style={{ width: '100%', justifyContent: 'center', marginTop: '10px' }}
                    >
                      <span>
                        {language === 'uk'
                          ? `НАДІСЛАТИ ЗАПИТ (${consultantName})`
                          : `SEND INQUIRY TO ${consultantName.toUpperCase()}`}
                      </span>
                      <Send size={18} />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </ParallaxCard>
        </div>
      </div>
    </div>
  );
}
