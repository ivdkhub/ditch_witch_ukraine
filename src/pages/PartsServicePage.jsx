import React, { useState } from 'react';
import {
  Wrench,
  ShieldCheck,
  Phone,
  Mail,
  Send,
  Download,
  CheckCircle2,
  Settings,
  Truck,
  BookOpen,
  Cpu,
  Layers,
  ArrowRight,
  User,
  Package,
  Check,
  Tag
} from 'lucide-react';
import { useTranslation } from '../i18n/LanguageContext';
import { useTheme } from '../theme/ThemeContext';
import { useParts } from '../context/PartsContext';

export default function PartsServicePage() {
  const { language } = useTranslation();
  const { theme } = useTheme();
  const { parts } = useParts();

  const [activeFilter, setActiveFilter] = useState('all'); // 'all' | 'kit' | 'single'
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    machineModel: '',
    partName: '',
    vinCode: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const isDark = theme === 'dark';

  const olegName = language === 'uk' ? 'Олег Липкин' : 'Oleg Lypkyn';
  const olegRole = language === 'uk'
    ? 'Головний інженер та спеціаліст із запчастин Ditch Witch®'
    : language === 'pl'
    ? 'Główny Inżynier i Specjalista ds. Części Zamiennych'
    : 'Chief Engineer & Parts Specialist';

  const filteredParts = parts.filter((p) => {
    if (activeFilter === 'all') return true;
    return p.type === activeFilter;
  });

  const handleOrderPart = (part) => {
    const partTitle = part.title[language] || part.title.uk || part.title.en;
    setFormData((prev) => ({
      ...prev,
      partName: `${partTitle} (Артикул: ${part.code || ''})`,
      machineModel: part.models || ''
    }));
    const formElement = document.getElementById('parts-order-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
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
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 10 }}>
          <span style={{
            color: '#FF6600',
            fontWeight: 800,
            fontSize: '0.85rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase'
          }}>
            DITCH WITCH UKRAINE SERVICE & PARTS
          </span>
          <h1 style={{
            fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
            fontWeight: 900,
            marginTop: '8px',
            marginBottom: '14px',
            textTransform: 'uppercase'
          }}>
            {language === 'uk' ? 'Запчастини та Офіційний Сервіс' : language === 'pl' ? 'Części Zamienne i Serwis' : 'Genuine Parts & Certified Service'}
          </h1>
          <p style={{
            color: '#CED0D1',
            maxWidth: '780px',
            margin: '0 auto',
            fontSize: '1.05rem',
            lineHeight: 1.6
          }}>
            {language === 'uk'
              ? 'Офіційне сервісне обслуговування, виїзні мобільні бригади 24/7, прямі поставки оригінальних запчастин, бурових штанг та електроніки Subsite з центрального складу в Києві.'
              : language === 'pl'
              ? 'Oficjalny serwis, wyjazdowe brygady 24/7, dostawy oryginalnych części i żerdzi wiertniczych z magazynu w Kijowie.'
              : 'Certified technician support, 24/7 mobile field service, genuine OEM spare parts, drill pipes, and Subsite locating electronics.'}
          </p>
        </div>
      </div>

      <div className="container" style={{ marginTop: '50px' }}>
        {/* Service Highlights Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px',
          marginBottom: '60px'
        }}>
          <div style={{
            backgroundColor: isDark ? 'rgba(28, 28, 28, 0.75)' : 'rgba(255, 255, 255, 0.75)',
            backdropFilter: 'blur(10px)',
            padding: '28px',
            borderRadius: '12px',
            border: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)'}`
          }}>
            <Truck size={32} style={{ color: '#FF6600', marginBottom: '14px' }} />
            <h3 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '8px' }}>
              {language === 'uk' ? 'Мобільний Сервіс 24/7' : '24/7 Mobile Field Service'}
            </h3>
            <p style={{ fontSize: '0.88rem', color: isDark ? '#AAA' : '#666', lineHeight: 1.5, margin: 0 }}>
              {language === 'uk'
                ? 'Оперативний виїзд обладнаного автомобіля сервісу безпосередньо на ваш будівельний об’єкт у будь-якій точці України.'
                : 'Rapid deployment of fully equipped service vans to your jobsite anywhere in Ukraine.'}
            </p>
          </div>

          <div style={{
            backgroundColor: isDark ? 'rgba(28, 28, 28, 0.75)' : 'rgba(255, 255, 255, 0.75)',
            backdropFilter: 'blur(10px)',
            padding: '28px',
            borderRadius: '12px',
            border: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)'}`
          }}>
            <ShieldCheck size={32} style={{ color: '#FF6600', marginBottom: '14px' }} />
            <h3 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '8px' }}>
              {language === 'uk' ? '100% Оригінальні Запасні Частини' : language === 'pl' ? '100% Oryginalne Części Zamienne' : '100% Genuine Spare Parts'}
            </h3>
            <p style={{ fontSize: '0.88rem', color: isDark ? '#AAA' : '#666', lineHeight: 1.5, margin: 0 }}>
              {language === 'uk'
                ? 'Прямі поставки зі заводу Дітч Вітч США. Гарантія на кожну деталь та зносостійкий буровий інструмент.'
                : 'Direct factory imports with official warranty on every pipe, tooth, and hydraulic valve.'}
            </p>
          </div>

          {/* RENAMED ITEM: Діагностика електронних систем локацій */}
          <div style={{
            backgroundColor: isDark ? 'rgba(28, 28, 28, 0.75)' : 'rgba(255, 255, 255, 0.75)',
            backdropFilter: 'blur(10px)',
            padding: '28px',
            borderRadius: '12px',
            border: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)'}`
          }}>
            <Cpu size={32} style={{ color: '#FF6600', marginBottom: '14px' }} />
            <h3 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '8px' }}>
              {language === 'uk' ? 'Діагностика електронних систем локацій' : language === 'pl' ? 'Diagnostyka Systemów Lokalizacji' : 'Locating Electronics Diagnostics'}
            </h3>
            <p style={{ fontSize: '0.88rem', color: isDark ? '#AAA' : '#666', lineHeight: 1.5, margin: 0 }}>
              {language === 'uk'
                ? 'Тестування, калібрування та сервіс електронних локаційних систем Subsite®, зондів TXU та приймачів серії TK.'
                : 'Calibration, testing, and service of Subsite® locating systems, beacon sondes, and receivers.'}
            </p>
          </div>

          <div style={{
            backgroundColor: isDark ? 'rgba(28, 28, 28, 0.75)' : 'rgba(255, 255, 255, 0.75)',
            backdropFilter: 'blur(10px)',
            padding: '28px',
            borderRadius: '12px',
            border: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)'}`
          }}>
            <BookOpen size={32} style={{ color: '#FF6600', marginBottom: '14px' }} />
            <h3 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '8px' }}>
              {language === 'uk' ? 'Навчання Операторів' : 'Operator Certified Training'}
            </h3>
            <p style={{ fontSize: '0.88rem', color: isDark ? '#AAA' : '#666', lineHeight: 1.5, margin: 0 }}>
              {language === 'uk'
                ? 'Практичне навчання робочих бригад ефективній та безаварійній експлуатації бурових установок.'
                : 'Hands-on operator safety and high-productivity directional drilling techniques.'}
            </p>
          </div>
        </div>

        {/* Dedicated Service Specialist Card for Oleg Lypkyn / Олег Липкин */}
        <div style={{
          backgroundColor: isDark ? 'rgba(26, 26, 26, 0.9)' : '#FFFFFF',
          borderRadius: '14px',
          padding: '30px 36px',
          border: `2px solid #FF6600`,
          boxShadow: isDark ? '0 10px 30px rgba(255,102,0,0.2)' : '0 10px 30px rgba(255,102,0,0.12)',
          marginBottom: '60px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justify: 'space-between',
          gap: '24px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              backgroundColor: '#FF6600',
              color: '#FFFFFF',
              display: 'grid',
              placeItems: 'center',
              fontWeight: 900,
              fontSize: '1.45rem',
              lineHeight: 1,
              flexShrink: 0,
              boxShadow: '0 4px 14px rgba(255, 102, 0, 0.4)'
            }}>
              <span style={{ lineHeight: 1, margin: 0, padding: 0, display: 'block', textAlign: 'center' }}>OL</span>
            </div>
            <div>
              <span style={{
                color: '#FF6600',
                fontWeight: 800,
                fontSize: '0.75rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase'
              }}>
                {language === 'uk' ? 'СЕРВІСНИЙ ІНЖЕНЕР' : 'SERVICE ENGINEER'}
              </span>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 900, marginTop: '2px', marginBottom: '4px', color: isDark ? '#FFFFFF' : '#111111' }}>
                {olegName}
              </h3>
              <p style={{ color: isDark ? '#CCCCCC' : '#555555', fontSize: '0.9rem', margin: 0 }}>
                {olegRole}
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
            <a
              href="tel:+380506894621"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                backgroundColor: '#FF6600',
                color: '#FFFFFF',
                padding: '12px 20px',
                borderRadius: '8px',
                fontWeight: 800,
                fontSize: '0.95rem',
                textDecoration: 'none',
                boxShadow: '0 4px 12px rgba(255, 102, 0, 0.3)',
                transition: 'transform 0.2s ease'
              }}
            >
              <Phone size={18} />
              <span>+380 50 689 46 21</span>
            </a>

            <a
              href="mailto:service@ditchwitch.kiev.ua"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                backgroundColor: isDark ? '#222222' : '#F1F5F9',
                color: isDark ? '#FFFFFF' : '#0F172A',
                border: `1px solid ${isDark ? '#333' : '#CBD5E1'}`,
                padding: '12px 20px',
                borderRadius: '8px',
                fontWeight: 800,
                fontSize: '0.95rem',
                textDecoration: 'none',
                transition: 'all 0.2s ease'
              }}
            >
              <Mail size={18} style={{ color: '#FF6600' }} />
              <span>service@ditchwitch.kiev.ua</span>
            </a>
          </div>
        </div>

        {/* Dynamic SPARE PARTS & KITS CATALOG SECTION */}
        <div style={{ marginBottom: '60px' }}>
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <span style={{ color: '#FF6600', fontWeight: 800, fontSize: '0.85rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              OFFICIAL PARTS CATALOG & MAINTENANCE KITS
            </span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 900, marginTop: '6px', textTransform: 'uppercase' }}>
              {language === 'uk' ? 'Каталог Запчастин та Витратних Матеріалів' : 'Recommended Spare Parts & Service Kits'}
            </h2>
            <p style={{ color: isDark ? '#BBB' : '#666', maxWidth: '680px', margin: '8px auto 0 auto', fontSize: '0.95rem' }}>
              {language === 'uk'
                ? 'Рекомендовані комплекти планового технічного обслуговування (ТО) та окремі видаткові деталі для спецтехніки Ditch Witch®.'
                : 'Recommended OEM maintenance kits and individual replacement parts for Ditch Witch® machinery.'}
            </p>
          </div>

          {/* Filter Switcher Tabs */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '32px', flexWrap: 'wrap' }}>
            <button
              onClick={() => setActiveFilter('all')}
              className="touch-target"
              style={{
                backgroundColor: activeFilter === 'all' ? '#FF6600' : isDark ? '#222' : '#E2E8F0',
                color: activeFilter === 'all' ? '#FFF' : isDark ? '#CCC' : '#333',
                border: 'none',
                borderRadius: '8px',
                padding: '10px 20px',
                fontWeight: 800,
                fontSize: '0.88rem',
                cursor: 'pointer',
                transition: 'all 0.25s ease'
              }}
            >
              {language === 'uk' ? 'Всі Запчастини та Комплекти' : 'All Parts & Kits'} ({parts.length})
            </button>

            <button
              onClick={() => setActiveFilter('kit')}
              className="touch-target"
              style={{
                backgroundColor: activeFilter === 'kit' ? '#FF6600' : isDark ? '#222' : '#E2E8F0',
                color: activeFilter === 'kit' ? '#FFF' : isDark ? '#CCC' : '#333',
                border: 'none',
                borderRadius: '8px',
                padding: '10px 20px',
                fontWeight: 800,
                fontSize: '0.88rem',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.25s ease'
              }}
            >
              <Package size={16} />
              <span>{language === 'uk' ? 'Комплекти ТО (Kits)' : 'Maintenance Kits'} ({parts.filter(p => p.type === 'kit').length})</span>
            </button>

            <button
              onClick={() => setActiveFilter('single')}
              className="touch-target"
              style={{
                backgroundColor: activeFilter === 'single' ? '#FF6600' : isDark ? '#222' : '#E2E8F0',
                color: activeFilter === 'single' ? '#FFF' : isDark ? '#CCC' : '#333',
                border: 'none',
                borderRadius: '8px',
                padding: '10px 20px',
                fontWeight: 800,
                fontSize: '0.88rem',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.25s ease'
              }}
            >
              <Wrench size={16} />
              <span>{language === 'uk' ? 'Окремі Запчастини' : 'Single Parts'} ({parts.filter(p => p.type === 'single').length})</span>
            </button>

            <button
              onClick={() => setActiveFilter('used')}
              className="touch-target"
              style={{
                backgroundColor: activeFilter === 'used' ? '#FF6600' : isDark ? '#222' : '#E2E8F0',
                color: activeFilter === 'used' ? '#FFF' : isDark ? '#CCC' : '#333',
                border: 'none',
                borderRadius: '8px',
                padding: '10px 20px',
                fontWeight: 800,
                fontSize: '0.88rem',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.25s ease'
              }}
            >
              <Tag size={16} />
              <span>{language === 'uk' ? 'Вживана Спецтехніка (Б/В)' : language === 'pl' ? 'Sprzęt Używany' : 'Pre-Owned Equipment'} ({parts.filter(p => p.type === 'used').length})</span>
            </button>
          </div>

          {/* Parts Grid (NO PRICES SHOWN) */}
          <div className="responsive-card-grid">
            {filteredParts.map((part) => {
              const titleText = part.title[language] || part.title.uk || part.title.en;
              const descText = part.desc[language] || part.desc.uk || part.desc.en;

              return (
                <div
                  key={part.id}
                  style={{
                    backgroundColor: isDark ? 'rgba(28, 28, 28, 0.85)' : '#FFFFFF',
                    borderRadius: '12px',
                    border: `1px solid ${part.type === 'kit' || part.type === 'used' ? '#FF6600' : isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)'}`,
                    padding: '24px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    height: '100%',
                    boxSizing: 'border-box',
                    boxShadow: part.type === 'kit' || part.type === 'used'
                      ? isDark ? '0 8px 24px rgba(255, 102, 0, 0.2)' : '0 8px 24px rgba(255, 102, 0, 0.12)'
                      : isDark ? '0 4px 16px rgba(0,0,0,0.4)' : '0 4px 16px rgba(0,0,0,0.06)',
                    position: 'relative'
                  }}
                >
                  <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                    {/* Badge */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                      <span style={{
                        backgroundColor: part.type === 'kit' || part.type === 'used' ? '#FF6600' : isDark ? '#333' : '#E2E8F0',
                        color: part.type === 'kit' || part.type === 'used' ? '#FFFFFF' : isDark ? '#FFF' : '#333',
                        fontWeight: 900,
                        fontSize: '0.72rem',
                        padding: '4px 10px',
                        borderRadius: '4px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
                      }}>
                        {part.type === 'kit'
                          ? (language === 'uk' ? 'КОМПЛЕКТ ТО' : 'MAINTENANCE KIT')
                          : part.type === 'used'
                          ? (language === 'uk' ? 'ВЖИВАНА СПЕЦТЕХНІКА (Б/В)' : 'PRE-OWNED EQUIPMENT')
                          : (language === 'uk' ? 'ОКРЕМА ДЕТАЛЬ' : 'SINGLE PART')}
                      </span>
                    </div>

                    <div style={{
                      aspectRatio: '16 / 10',
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '16px',
                      backgroundColor: isDark ? 'rgba(18,18,18,0.5)' : '#F8F9FA',
                      borderRadius: '8px',
                      padding: '12px',
                      boxSizing: 'border-box',
                      overflow: 'hidden'
                    }}>
                      <img
                        src={part.image || '/Risorse/Immagini/dirdrills_jt10.png'}
                        alt={titleText}
                        style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }}
                      />
                    </div>

                    <h3 className="line-clamp-2" style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '6px', color: isDark ? '#FFF' : '#111', lineHeight: 1.3 }}>
                      {titleText}
                    </h3>

                    {/* Part Code & Compatible Models */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginBottom: '12px', fontSize: '0.78rem', color: '#888' }}>
                      {part.code && <div><strong>{language === 'uk' ? 'Артикул / Код:' : 'Code:'}</strong> <span style={{ color: isDark ? '#DDD' : '#444' }}>{part.code}</span></div>}
                      {part.models && <div><strong>{language === 'uk' ? 'Специфікація:' : 'Specs:'}</strong> <span style={{ color: '#FF6600' }}>{part.models}</span></div>}
                    </div>

                    <p className="line-clamp-3" style={{ fontSize: '0.86rem', color: isDark ? '#AAA' : '#666', lineHeight: 1.5, marginBottom: '16px' }}>
                      {descText}
                    </p>

                    {/* Included items bullet list if Kit or Used Equipment */}
                    {(part.type === 'kit' || part.type === 'used') && Array.isArray(part.items) && part.items.length > 0 && (
                      <div style={{
                        backgroundColor: isDark ? 'rgba(15, 15, 15, 0.7)' : '#F1F5F9',
                        borderRadius: '8px',
                        padding: '12px 14px',
                        marginBottom: '20px',
                        fontSize: '0.8rem'
                      }}>
                        <span style={{ fontWeight: 800, display: 'block', marginBottom: '6px', color: '#FF6600', textTransform: 'uppercase' }}>
                          {part.type === 'used'
                            ? (language === 'uk' ? 'Комплектація б/в техніки:' : 'Equipment Highlights:')
                            : (language === 'uk' ? 'Склад комплекту:' : 'Included in Kit:')}
                        </span>
                        <ul style={{ paddingLeft: '18px', margin: 0, color: isDark ? '#CCC' : '#444', lineHeight: 1.5 }}>
                          {part.items.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Order Button */}
                  <div style={{ display: 'flex', gap: '10px', marginTop: 'auto', paddingTop: '16px' }}>
                    <button
                      onClick={() => handleOrderPart(part)}
                      className="btn-primary touch-target"
                      style={{ width: '100%', justifyContent: 'center', padding: '12px 14px', fontSize: '0.9rem' }}
                    >
                      <Send size={16} />
                      <span>
                        {part.type === 'kit'
                          ? (language === 'uk' ? 'Замовити комплект' : language === 'pl' ? 'Zamów zestaw' : 'Order Kit')
                          : part.type === 'used'
                          ? (language === 'uk' ? 'Замовити б/в техніку' : language === 'pl' ? 'Zapytaj o sprzęt używany' : 'Inquire Used Rig')
                          : (language === 'uk' ? 'Замовити запчастину' : language === 'pl' ? 'Zamów część' : 'Order Spare Part')}
                      </span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* PARTS & SERVICE ORDER FORM SECTION */}
        <div id="parts-order-form" style={{
          backgroundColor: isDark ? 'rgba(24, 24, 24, 0.9)' : '#FFFFFF',
          borderRadius: '16px',
          padding: '40px',
          border: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)'}`,
          boxShadow: isDark ? '0 12px 36px rgba(0,0,0,0.6)' : '0 12px 36px rgba(0,0,0,0.08)'
        }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
              <Wrench size={40} style={{ color: '#FF6600', marginBottom: '12px' }} />
              <h2 style={{ fontSize: '1.8rem', fontWeight: 900, textTransform: 'uppercase' }}>
                {language === 'uk' ? 'Запит на Запчастини або Сервісне Обслуговування' : 'Parts Order & Service Request'}
              </h2>
              <p style={{ fontSize: '0.92rem', color: isDark ? '#AAA' : '#666', marginTop: '6px' }}>
                {language === 'uk'
                  ? `Заповніть форму для оперативної перевірки наявності деталей на складі у Києві. Консультант ${olegName} зв'яжеться з Вами.`
                  : `Fill in the details below. Our certified specialist ${olegName} will check stock availability and get back to you.`}
              </p>
            </div>

            {submitted ? (
              <div style={{
                textAlign: 'center',
                padding: '40px 20px',
                backgroundColor: 'rgba(255, 102, 0, 0.08)',
                borderRadius: '12px',
                border: '2px solid #FF6600'
              }}>
                <CheckCircle2 size={48} style={{ color: '#FF6600', marginBottom: '16px' }} />
                <h3 style={{ fontSize: '1.4rem', fontWeight: 900, marginBottom: '8px' }}>
                  {language === 'uk' ? 'Заявка успішно прийнята!' : 'Order Request Submitted!'}
                </h3>
                <p style={{ fontSize: '0.95rem' }}>
                  {language === 'uk'
                    ? `Сервісний інженер ${olegName} перевіряє наявність на складі в Києві та зателефонує вам найближчим часом.`
                    : `Our certified service engineer ${olegName} is verifying stock availability at the Kyiv warehouse and will call you shortly.`}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 800, marginBottom: '6px', textTransform: 'uppercase' }}>
                    {language === 'uk' ? 'Ваше Ім’я / Назва Компанії *' : 'Name / Company Name *'}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={language === 'uk' ? 'ТОВ "БудСпецМережі"' : 'Company Ltd.'}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      backgroundColor: isDark ? '#181818' : '#F9F9FB',
                      border: `1px solid ${isDark ? '#333' : '#CCC'}`,
                      padding: '12px 14px',
                      borderRadius: '6px',
                      color: isDark ? '#FFF' : '#000',
                      fontSize: '0.9rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 800, marginBottom: '6px', textTransform: 'uppercase' }}>
                    {language === 'uk' ? 'Номер Телефону *' : 'Contact Phone Number *'}
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+380 50 689 46 21"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{
                      width: '100%',
                      backgroundColor: isDark ? '#181818' : '#F9F9FB',
                      border: `1px solid ${isDark ? '#333' : '#CCC'}`,
                      padding: '12px 14px',
                      borderRadius: '6px',
                      color: isDark ? '#FFF' : '#000',
                      fontSize: '0.9rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 800, marginBottom: '6px', textTransform: 'uppercase' }}>
                    {language === 'uk' ? 'Модель Спецтехніки (напр. JT10, C16X)' : 'Machine Model (e.g. JT10, C16X)'}
                  </label>
                  <input
                    type="text"
                    placeholder="Ditch Witch JT10"
                    value={formData.machineModel}
                    onChange={(e) => setFormData({ ...formData, machineModel: e.target.value })}
                    style={{
                      width: '100%',
                      backgroundColor: isDark ? '#181818' : '#F9F9FB',
                      border: `1px solid ${isDark ? '#333' : '#CCC'}`,
                      padding: '12px 14px',
                      borderRadius: '6px',
                      color: isDark ? '#FFF' : '#000',
                      fontSize: '0.9rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 800, marginBottom: '6px', textTransform: 'uppercase' }}>
                    {language === 'uk' ? 'Необхідна Запчастина або Послуга' : 'Requested Part or Service'}
                  </label>
                  <input
                    type="text"
                    placeholder={language === 'uk' ? 'Бурові штанги Power Pipe, фільтри...' : 'Drill pipes, filters, repair...'}
                    value={formData.partName}
                    onChange={(e) => setFormData({ ...formData, partName: e.target.value })}
                    style={{
                      width: '100%',
                      backgroundColor: isDark ? '#181818' : '#F9F9FB',
                      border: `1px solid ${isDark ? '#333' : '#CCC'}`,
                      padding: '12px 14px',
                      borderRadius: '6px',
                      color: isDark ? '#FFF' : '#000',
                      fontSize: '0.9rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div style={{ gridColumn: '1 / -1' }}>
                  <button
                    type="submit"
                    className="btn-primary"
                    style={{
                      justify: 'flex-start',
                      paddingLeft: '24px',
                      gap: '12px',
                      fontSize: '0.95rem',
                      paddingTop: '14px',
                      paddingBottom: '14px'
                    }}
                  >
                    <Send size={18} />
                    <span style={{ fontWeight: 900 }}>
                      {language === 'uk' ? 'Замовити запчастину' : language === 'pl' ? 'Zamów część' : 'Order Spare Part'}
                    </span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
