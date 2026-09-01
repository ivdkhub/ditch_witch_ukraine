import React, { useState } from 'react';
import { X, CheckCircle2, Send, Download } from 'lucide-react';
import { useTranslation } from '../i18n/LanguageContext';
import { useTheme } from '../theme/ThemeContext';
import { getSpecLabel } from '../i18n/translations';

export default function ProductModal({ product, onClose }) {
  const { language } = useTranslation();
  const { theme } = useTheme();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!product) return null;

  const isDark = theme === 'dark';

  const title = product.title[language] || product.title.uk || product.title.en;
  const tagline = product.tagline[language] || product.tagline.uk || product.tagline.en;
  const desc = product.desc[language] || product.desc.uk || product.desc.en;

  // Map product to official Word brochure document
  const docFileMap = {
    jt10: '/documents/23-2 укрBroszura JT5 v.11.2015.docx',
    jt5: '/documents/23-2 укрBroszura JT5 v.11.2015.docx',
    c16x: '/documents/10-2 укрBroszura UTG v.01.2016.docx',
    rt45: '/documents/10-2 укрBroszura UTG v.01.2016.docx',
    hxt75: '/documents/22 Mixersystem 2015 ver UA.docx',
    sk3000: '/documents/10-2 укрBroszura UTG v.01.2016.docx',
    fm13v: '/documents/22 Mixersystem 2015 ver UA.docx'
  };

  const docFile = docFileMap[product.id] || '/documents/21 УкрBroszura Порівняння бурових машин укр DW HDD v.11.2015.docx';

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      backgroundColor: 'rgba(0,0,0,0.85)',
      backdropFilter: 'blur(6px)',
      display: 'flex',
      alignItems: 'center',
      justify: 'center',
      zIndex: 2500,
      padding: '20px'
    }} onClick={onClose}>
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: isDark ? '#1C1C1C' : '#FFFFFF',
          color: isDark ? '#FFFFFF' : '#111111',
          width: '100%',
          maxWidth: '850px',
          maxHeight: '90vh',
          borderRadius: '14px',
          overflowY: 'auto',
          boxShadow: '0 20px 50px rgba(0,0,0,0.6)',
          border: `1px solid ${isDark ? '#333333' : '#E0E0E0'}`,
          position: 'relative',
          animation: 'fadeIn 0.25s ease forwards'
        }}
      >
        {/* Perfectly Centered Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            backgroundColor: isDark ? '#2C2C2C' : '#F0F0F0',
            color: isDark ? '#FFFFFF' : '#000000',
            border: 'none',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            minWidth: '36px',
            minHeight: '36px',
            padding: 0,
            margin: 0,
            display: 'flex',
            alignItems: 'center',
            justify: 'center',
            cursor: 'pointer',
            zIndex: 10,
            lineHeight: 1,
            boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
            transition: 'background-color 0.2s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#FF6600'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = isDark ? '#2C2C2C' : '#F0F0F0'}
          title="Close"
        >
          <X size={18} style={{ display: 'block', margin: 'auto', flexShrink: 0 }} />
        </button>

        {/* Modal Top Showcase */}
        <div style={{
          backgroundColor: isDark ? '#141414' : '#F4F5F7',
          padding: '36px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px',
          alignItems: 'center',
          borderBottom: '4px solid #FF6600'
        }}>
          <div style={{ textAlign: 'center' }}>
            <img
              src={product.image}
              alt={title}
              style={{
                maxHeight: '220px',
                maxWidth: '100%',
                objectFit: 'contain'
              }}
            />
          </div>

          <div>
            <span style={{
              backgroundColor: '#FF6600',
              color: '#FFFFFF',
              fontWeight: 800,
              fontSize: '0.75rem',
              padding: '4px 10px',
              borderRadius: '3px',
              textTransform: 'uppercase',
              marginBottom: '10px',
              display: 'inline-block'
            }}>
              DITCH WITCH UKRAINE
            </span>

            <h2 style={{ fontSize: '1.8rem', fontWeight: 900, lineHeight: 1.2, marginBottom: '8px' }}>
              {title}
            </h2>

            <p style={{ color: '#FF6600', fontWeight: 700, fontSize: '0.95rem', marginBottom: '16px' }}>
              {tagline}
            </p>

            <p style={{ fontSize: '0.9rem', color: isDark ? '#CCCCCC' : '#555555', lineHeight: 1.6, marginBottom: '16px' }}>
              {desc}
            </p>

            {/* DOWNLOAD BROCHURE BUTTON */}
            <a
              href={docFile}
              download
              className="btn-outline"
              style={{
                borderColor: '#FF6600',
                color: '#FF6600',
                padding: '8px 16px',
                fontSize: '0.82rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <Download size={15} />
              <span>
                {language === 'uk'
                  ? 'ЗАВАНТАЖИТИ ОФІЦІЙНУ БРОШУРУ (DOCX)'
                  : language === 'pl'
                  ? 'POBIERZ OFICJALNĄ BROSZURĘ (DOCX)'
                  : 'DOWNLOAD OFFICIAL BROCHURE (DOCX)'}
              </span>
            </a>
          </div>
        </div>

        {/* Modal Body: Technical Specs & Inquiry Form */}
        <div style={{ padding: '32px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
          {/* Tech Specs with Clean 2-Column Alignment */}
          <div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '16px', color: '#FF6600' }}>
              {language === 'uk' ? 'Технічні Характеристики' : language === 'pl' ? 'Specyfikacja Techniczna' : 'Technical Specifications'}
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {Object.entries(product.specs).map(([sKey, sVal], idx) => {
                const translatedLabel = getSpecLabel(sKey, language);

                return (
                  <div key={idx} style={{
                    display: 'grid',
                    gridTemplateColumns: '150px 1fr',
                    alignItems: 'center',
                    gap: '14px',
                    padding: '10px 14px',
                    backgroundColor: isDark ? '#222222' : '#F8F9FA',
                    borderRadius: '6px',
                    fontSize: '0.88rem'
                  }}>
                    <span style={{ color: isDark ? '#AAA' : '#666', fontWeight: 700, whiteSpace: 'nowrap' }}>
                      {translatedLabel}:
                    </span>
                    <strong style={{ color: isDark ? '#FFF' : '#111' }}>
                      {sVal}
                    </strong>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Inquiry Form */}
          <div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '16px', color: '#FF6600' }}>
              {language === 'uk' ? 'Запит Ціни та Наявності' : language === 'pl' ? 'Zapytaj o Cenę' : 'Request Price & Availability'}
            </h3>

            {submitted ? (
              <div style={{
                backgroundColor: isDark ? '#1F3A2B' : '#E8F5E9',
                border: '1px solid #4CAF50',
                color: isDark ? '#A5D6A7' : '#2E7D32',
                padding: '24px',
                borderRadius: '8px',
                textAlign: 'center'
              }}>
                <CheckCircle2 size={40} style={{ color: '#4CAF50', marginBottom: '12px' }} />
                <h4 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '6px' }}>
                  {language === 'uk' ? 'Запит успішно надіслано!' : language === 'pl' ? 'Zapytanie zostało wysłane!' : 'Inquiry Submitted Successfully!'}
                </h4>
                <p style={{ fontSize: '0.88rem' }}>
                  {language === 'uk'
                    ? 'Наш фахівець Ditch Witch Україна зателефонує вам найближчим часом.'
                    : language === 'pl'
                    ? 'Nasz specjalista Ditch Witch Ukraina skontaktuje się z Tobą.'
                    : 'Our Ditch Witch Ukraine specialist will contact you shortly.'}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, marginBottom: '4px' }}>
                    {language === 'uk' ? 'Ваше Ім’я / Компанія' : language === 'pl' ? 'Twoje Imię / Firma' : 'Your Name / Company'}
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{
                      width: '100%',
                      backgroundColor: isDark ? '#141414' : '#F9F9FB',
                      border: `1px solid ${isDark ? '#333' : '#CCC'}`,
                      padding: '10px 12px',
                      borderRadius: '6px',
                      color: isDark ? '#FFF' : '#000',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, marginBottom: '4px' }}>
                    {language === 'uk' ? 'Номер Телефону' : language === 'pl' ? 'Numer Telefonu' : 'Phone Number'}
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+380 50 380 66 92"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    style={{
                      width: '100%',
                      backgroundColor: isDark ? '#141414' : '#F9F9FB',
                      border: `1px solid ${isDark ? '#333' : '#CCC'}`,
                      padding: '10px 12px',
                      borderRadius: '6px',
                      color: isDark ? '#FFF' : '#000',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, marginBottom: '4px' }}>
                    {language === 'uk' ? 'Email (необов’язково)' : language === 'pl' ? 'Email (opcjonalnie)' : 'Email (optional)'}
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{
                      width: '100%',
                      backgroundColor: isDark ? '#141414' : '#F9F9FB',
                      border: `1px solid ${isDark ? '#333' : '#CCC'}`,
                      padding: '10px 12px',
                      borderRadius: '6px',
                      color: isDark ? '#FFF' : '#000',
                      outline: 'none'
                    }}
                  />
                </div>

                {/* Left-Aligned Submit Button */}
                <button
                  type="submit"
                  className="btn-primary"
                  style={{
                    justifyContent: 'flex-start',
                    paddingLeft: '20px',
                    gap: '12px',
                    marginTop: '6px',
                    width: '100%'
                  }}
                >
                  <Send size={16} style={{ flexShrink: 0 }} />
                  <span style={{ fontWeight: 800, letterSpacing: '0.02em' }}>
                    {language === 'uk'
                      ? 'ОТРИМАТИ КАТАЛОГ ТА ЦІНУ'
                      : language === 'pl'
                      ? 'ZAPYTAJ O CENĘ I KATALOG'
                      : 'REQUEST PRICE QUOTE'}
                  </span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
