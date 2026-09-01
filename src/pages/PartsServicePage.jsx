import React, { useState } from 'react';
import {
  Wrench,
  ShieldCheck,
  Phone,
  Send,
  Download,
  CheckCircle2,
  Settings,
  Truck,
  BookOpen,
  Cpu,
  Layers,
  ArrowRight
} from 'lucide-react';
import { useTranslation } from '../i18n/LanguageContext';
import { useTheme } from '../theme/ThemeContext';

export default function PartsServicePage() {
  const { language } = useTranslation();
  const { theme } = useTheme();

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

  const partsCategories = [
    {
      id: 'hdd_tools',
      title: { uk: 'Буровий Інструмент ГНБ', en: 'HDD Drill Tools & Pipes', pl: 'Narzędzia i Żerdzie HDB' },
      desc: {
        uk: 'Оригінальні ковані бурові штанги Power Pipe Forged, розширювачі (Reamers), вертлюги та затискні сухарі.',
        en: 'Genuine Power Pipe Forged drill pipes, reamers, swivels, and drive chucks.',
        pl: 'Oryginalne kute żerdzie Power Pipe Forged, rozszerzacze, krętliki i uchwyty.'
      },
      image: '/Risorse/Immagini/dirdrills_jt10.png',
      docFile: '/documents/31 Power Pipe Forged 2015 ver UA.docx'
    },
    {
      id: 'subsite_electronics',
      title: { uk: 'Електроніка та Зонди Subsite', en: 'Subsite Electronics & Sondes', pl: 'Elektronika i Sondy Subsite' },
      desc: {
        uk: 'Високоточні локаційні системи Subsite TK Series, випромінювальні зонди TXU, приймачі та батерейні відсіки.',
        en: 'Subsite TK Series locating systems, TXU beacon sondes, receivers, and battery housings.',
        pl: 'Systemy lokalizacji Subsite serii TK, sondy nadawcze TXU i odbiorniki.'
      },
      image: '/Risorse/Immagini/dirdrills_jt5.png',
      docFile: '/documents/11-2 укрBroszura System Serii TK v.11.2015.docx'
    },
    {
      id: 'trencher_chains',
      title: { uk: 'Ланцюги та Зуби Траншеєкопачів', en: 'Trencher Chains & Carbide Teeth', pl: 'Łańcuchy i Zęby Koparek' },
      desc: {
        uk: 'Запатентні ланцюги DuraTooth, зірочки та твердосплавні зуби для копання мерзлого та скельного ґрунту.',
        en: 'Patented DuraTooth digging chains, sprockets, and carbide teeth for frost and rock.',
        pl: 'Opatentowane łańcuchy DuraTooth, koła łańcuchowe i zęby zwęglone.'
      },
      image: '/Risorse/Immagini/c16x.png',
      docFile: '/documents/10-2 укрBroszura UTG v.01.2016.docx'
    },
    {
      id: 'filters_fluids',
      title: { uk: 'Фільтри, Оливи та Змішувачі', en: 'Filters, Fluids & Mud Mixers', pl: 'Filtry, Oleje i Mieszalniki' },
      desc: {
        uk: 'Оригінальні фільтруючі елементи, гідравлічні оливи, компоненти змішувачів FM13V та бентоніти Baroid.',
        en: 'OEM filter elements, hydraulic fluids, FM13V mud mixer spare parts, and Baroid bentonite additives.',
        pl: 'Oryginalne filtry, oleje hydrauliczne, części do mieszalników FM13V i bentonity Baroid.'
      },
      image: '/Risorse/Immagini/category_fluidSystems.png',
      docFile: '/documents/22 Mixersystem 2015 ver UA.docx'
    }
  ];

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

          <div style={{
            backgroundColor: isDark ? 'rgba(28, 28, 28, 0.75)' : 'rgba(255, 255, 255, 0.75)',
            backdropFilter: 'blur(10px)',
            padding: '28px',
            borderRadius: '12px',
            border: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)'}`
          }}>
            <Cpu size={32} style={{ color: '#FF6600', marginBottom: '14px' }} />
            <h3 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '8px' }}>
              {language === 'uk' ? 'Діагностика Subsite' : 'Subsite Electronics Repair'}
            </h3>
            <p style={{ fontSize: '0.88rem', color: isDark ? '#AAA' : '#666', lineHeight: 1.5, margin: 0 }}>
              {language === 'uk'
                ? 'Тестування, калібрування та ремонт локаційних систем Subsite, зондів TXU та приймачів серії TK.'
                : 'Calibration, testing, and repair of Subsite TK locators, transmitters, and receivers.'}
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

        {/* PARTS CATEGORIES SHOWCASE */}
        <div style={{ marginBottom: '60px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span style={{ color: '#FF6600', fontWeight: 800, fontSize: '0.85rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              CATALOG OF SPARE PARTS & CONSUMABLES
            </span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 900, marginTop: '6px', textTransform: 'uppercase' }}>
              {language === 'uk' ? 'Каталог Запчастин та Витратних Матеріалів' : 'Spare Parts & Tooling Categories'}
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px'
          }}>
            {partsCategories.map((cat) => {
              const titleText = cat.title[language] || cat.title.uk || cat.title.en;
              const descText = cat.desc[language] || cat.desc.uk || cat.desc.en;

              return (
                <div
                  key={cat.id}
                  style={{
                    backgroundColor: isDark ? 'rgba(28, 28, 28, 0.75)' : 'rgba(255, 255, 255, 0.75)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    borderRadius: '10px',
                    border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.08)'}`,
                    padding: '24px',
                    display: 'flex',
                    flexDirection: 'column',
                    justify: 'space-between',
                    boxShadow: isDark ? '0 4px 16px rgba(0,0,0,0.4)' : '0 4px 16px rgba(0,0,0,0.06)'
                  }}
                >
                  <div>
                    <div style={{
                      backgroundColor: isDark ? 'rgba(18, 18, 18, 0.6)' : 'rgba(242, 244, 247, 0.8)',
                      padding: '16px',
                      borderRadius: '8px',
                      height: '160px',
                      display: 'flex',
                      alignItems: 'center',
                      justify: 'center',
                      marginBottom: '18px'
                    }}>
                      <img src={cat.image} alt={titleText} style={{ maxHeight: '130px', maxWidth: '100%', objectFit: 'contain' }} />
                    </div>

                    <h3 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '8px', color: isDark ? '#FFF' : '#111' }}>
                      {titleText}
                    </h3>
                    <p style={{ fontSize: '0.88rem', color: isDark ? '#AAA' : '#555', lineHeight: 1.5, marginBottom: '20px' }}>
                      {descText}
                    </p>
                  </div>

                  <a
                    href={cat.docFile}
                    download
                    className="btn-outline"
                    style={{
                      borderColor: '#FF6600',
                      color: '#FF6600',
                      justify: 'center',
                      fontSize: '0.8rem',
                      textDecoration: 'none'
                    }}
                  >
                    <Download size={14} />
                    <span>{language === 'uk' ? 'ЗАВАНТАЖИТИ КАТАЛОГ (DOCX)' : 'DOWNLOAD SPEC (DOCX)'}</span>
                  </a>
                </div>
              );
            })}
          </div>
        </div>

        {/* INQUIRY & SERVICE ORDER FORM */}
        <div style={{
          backgroundColor: isDark ? 'rgba(28, 28, 28, 0.75)' : 'rgba(255, 255, 255, 0.75)',
          backdropFilter: 'blur(10px)',
          borderRadius: '14px',
          border: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)'}`,
          boxShadow: isDark ? '0 10px 30px rgba(0,0,0,0.5)' : '0 10px 30px rgba(0,0,0,0.06)',
          overflow: 'hidden'
        }}>
          <div style={{
            padding: '28px 32px',
            borderBottom: `1px solid ${isDark ? '#2A2A2A' : '#EEEEEE'}`,
            backgroundColor: isDark ? '#141414' : '#F4F5F7',
            display: 'flex',
            justify: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px'
          }}>
            <div>
              <span style={{ color: '#FF6600', fontWeight: 800, fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                SPARE PARTS & SERVICE REQUEST FORM
              </span>
              <h3 style={{ fontSize: '1.6rem', fontWeight: 900, marginTop: '4px', textTransform: 'uppercase' }}>
                {language === 'uk' ? 'Замовлення Запчастин та Виклику Сервісу' : 'Order Spare Parts or Request Field Service'}
              </h3>
            </div>

            <a
              href="tel:+380503806692"
              className="btn-primary"
              style={{ textDecoration: 'none', marginLeft: 'auto', alignSelf: 'flex-start' }}
            >
              <Phone size={16} />
              <span>ГАРЯЧА ЛІНІЯ: +380 50 380 66 92</span>
            </a>
          </div>

          <div style={{ padding: '36px' }}>
            {submitted ? (
              <div style={{
                backgroundColor: isDark ? '#1F3A2B' : '#E8F5E9',
                border: '1px solid #4CAF50',
                color: isDark ? '#A5D6A7' : '#2E7D32',
                padding: '32px',
                borderRadius: '10px',
                textAlign: 'center'
              }}>
                <CheckCircle2 size={48} style={{ color: '#4CAF50', marginBottom: '14px' }} />
                <h3 style={{ fontSize: '1.4rem', fontWeight: 900, marginBottom: '8px' }}>
                  {language === 'uk' ? 'Заявку на запчастини успішно зареєстровано!' : 'Parts Inquiry Registered Successfully!'}
                </h3>
                <p style={{ fontSize: '0.95rem' }}>
                  {language === 'uk'
                    ? 'Інженер сервісної служби Ditch Witch Україна перевіряє наявність на складі в Києві та зателефонує вам.'
                    : 'Our certified service engineer is verifying stock availability at the Kyiv warehouse and will call you shortly.'}
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
                    placeholder="+380 50 380 66 92"
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
                      {language === 'uk' ? 'НАДІСЛАТИ ЗАЯВКУ НА ЗАПЧАСТИНИ' : 'SUBMIT PARTS & SERVICE ORDER'}
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
