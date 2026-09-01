import React, { useState } from 'react';
import { X, PlusCircle, Globe, Check } from 'lucide-react';
import { useTranslation } from '../i18n/LanguageContext';
import { useTheme } from '../theme/ThemeContext';
import { useProducts } from '../context/ProductContext';

export default function AddProductModal({ isOpen, onClose }) {
  const { language } = useTranslation();
  const { theme } = useTheme();
  const { addProduct } = useProducts();

  const isDark = theme === 'dark';

  const [category, setCategory] = useState('drilling');
  const [titleUk, setTitleUk] = useState('');
  const [titleEn, setTitleEn] = useState('');
  const [titlePl, setTitlePl] = useState('');
  const [taglineUk, setTaglineUk] = useState('');
  const [descUk, setDescUk] = useState('');
  const [image, setImage] = useState('/Risorse/Immagini/dirdrills_jt10.png');
  const [featured, setFeatured] = useState(false);

  // Specs
  const [specEngine, setSpecEngine] = useState('Kubota 50 HP Diesel');
  const [specThrust, setSpecThrust] = useState('35 kN (8,000 lbs)');
  const [specWeight, setSpecWeight] = useState('2100 kg');

  // Country visibility targeting
  const [allowedCountries, setAllowedCountries] = useState(['ALL']);

  if (!isOpen) return null;

  const availableImages = [
    { label: 'JT10 Drill', url: '/Risorse/Immagini/dirdrills_jt10.png' },
    { label: 'JT5 Drill', url: '/Risorse/Immagini/dirdrills_jt5.png' },
    { label: 'C16X Trencher', url: '/Risorse/Immagini/c16x.png' },
    { label: 'Drilling Category', url: '/Risorse/Immagini/category_drilling.png' },
    { label: 'Trenchers Category', url: '/Risorse/Immagini/category_trenchers.png' },
    { label: 'Skid Steers Category', url: '/Risorse/Immagini/category_skidsteers.png' },
    { label: 'Vacuum Excavator Category', url: '/Risorse/Immagini/category_vacumexcavator.png' },
    { label: 'Fluid Systems Category', url: '/Risorse/Immagini/category_fluidSystems.png' }
  ];

  const toggleCountry = (countryCode) => {
    if (countryCode === 'ALL') {
      setAllowedCountries(['ALL']);
      return;
    }

    let updated = allowedCountries.filter((c) => c !== 'ALL');
    if (updated.includes(countryCode)) {
      updated = updated.filter((c) => c !== countryCode);
    } else {
      updated.push(countryCode);
    }

    if (updated.length === 0) {
      updated = ['ALL'];
    }
    setAllowedCountries(updated);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!titleUk && !titleEn) {
      alert('Будь ласка, введіть назву продукту.');
      return;
    }

    addProduct({
      category,
      categoryKey: category,
      image,
      featured,
      titleUk: titleUk || titleEn,
      titleEn: titleEn || titleUk,
      titlePl: titlePl || titleUk,
      taglineUk: taglineUk || 'Новий високопродуктивний macchinario',
      taglineEn: taglineUk || 'New high performance machine',
      taglinePl: taglineUk || 'Nowa wydajna maszyna',
      descUk: descUk || 'Спеціалізована техніка Ditch Witch з повним технічним обслуговуванням та гарантією.',
      descEn: descUk || 'Specialized Ditch Witch equipment with full service and warranty support.',
      descPl: descUk || 'Specjalistyczny sprzęt Ditch Witch z pełnym serwisem i gwarancją.',
      specs: {
        Engine: specEngine,
        'Thrust/Power': specThrust,
        Weight: specWeight
      },
      allowedCountries
    });

    onClose();
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
      zIndex: 2600,
      padding: '20px'
    }} onClick={onClose}>
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: isDark ? '#1C1C1C' : '#FFFFFF',
          color: isDark ? '#FFFFFF' : '#111111',
          width: '100%',
          maxWidth: '750px',
          maxHeight: '90vh',
          borderRadius: '12px',
          padding: '32px',
          overflowY: 'auto',
          boxShadow: '0 20px 50px rgba(0,0,0,0.6)',
          border: `1px solid ${isDark ? '#333333' : '#E0E0E0'}`,
          position: 'relative'
        }}
      >
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
            width: '34px',
            height: '34px',
            display: 'flex',
            alignItems: 'center',
            justify: 'center',
            cursor: 'pointer'
          }}
        >
          <X size={18} />
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
          <PlusCircle size={24} style={{ color: '#FF6600' }} />
          <h2 style={{ fontSize: '1.5rem', fontWeight: 900, textTransform: 'uppercase', margin: 0 }}>
            {language === 'uk' ? 'Додати Новий Товар до Каталогу' : 'Add New Product to Catalog'}
          </h2>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          {/* Category */}
          <div>
            <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 800, color: '#FF6600', marginBottom: '6px', textTransform: 'uppercase' }}>
              Категорія Обладнання *
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              style={{
                width: '100%',
                backgroundColor: isDark ? '#141414' : '#F9F9FB',
                border: `1px solid ${isDark ? '#333' : '#CCC'}`,
                padding: '10px 12px',
                borderRadius: '6px',
                color: isDark ? '#FFF' : '#000',
                outline: 'none'
              }}
            >
              <option value="drilling">Установки ГНБ (Directional Drills)</option>
              <option value="trenchers">Траншеєкопачі (Trenchers)</option>
              <option value="skidsteers">Міні-навантажувачі (Skid Steers)</option>
              <option value="vacuums">Вакуумні Екскаватори (Vacuum Excavators)</option>
              <option value="fluids">Приготування Розчину (Fluid Systems)</option>
            </select>
          </div>

          {/* Title Ukrainian */}
          <div>
            <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 800, color: '#FF6600', marginBottom: '6px', textTransform: 'uppercase' }}>
              Назва Техніки (Українська 🇺🇦) *
            </label>
            <input
              type="text"
              required
              placeholder="напр. Установка ГНБ JT24"
              value={titleUk}
              onChange={(e) => setTitleUk(e.target.value)}
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

          {/* Title English */}
          <div>
            <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 800, color: '#FF6600', marginBottom: '6px', textTransform: 'uppercase' }}>
              Назва (English 🇬🇧)
            </label>
            <input
              type="text"
              placeholder="e.g. Ditch Witch JT24 Directional Drill"
              value={titleEn}
              onChange={(e) => setTitleEn(e.target.value)}
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

          {/* Title Polish */}
          <div>
            <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 800, color: '#FF6600', marginBottom: '6px', textTransform: 'uppercase' }}>
              Назва (Polski 🇵🇱)
            </label>
            <input
              type="text"
              placeholder="np. Wiertnica HDB Ditch Witch JT24"
              value={titlePl}
              onChange={(e) => setTitlePl(e.target.value)}
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

          {/* Tagline */}
          <div style={{ gridColumn: '1 / -1' }}>
            <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 800, color: '#FF6600', marginBottom: '6px', textTransform: 'uppercase' }}>
              Короткий Опис / Слоган
            </label>
            <input
              type="text"
              placeholder="напр. Потужна установка для складних ґрунтових умов"
              value={taglineUk}
              onChange={(e) => setTaglineUk(e.target.value)}
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

          {/* Full Description */}
          <div style={{ gridColumn: '1 / -1' }}>
            <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 800, color: '#FF6600', marginBottom: '6px', textTransform: 'uppercase' }}>
              Повний Опис Техніки
            </label>
            <textarea
              rows={3}
              placeholder="Детальний опис можливостей та сфери застосування..."
              value={descUk}
              onChange={(e) => setDescUk(e.target.value)}
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

          {/* Image Selection */}
          <div style={{ gridColumn: '1 / -1' }}>
            <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 800, color: '#FF6600', marginBottom: '6px', textTransform: 'uppercase' }}>
              Оберіть Фотографію Техніки
            </label>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '10px' }}>
              {availableImages.map((imgItem, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setImage(imgItem.url)}
                  style={{
                    backgroundColor: image === imgItem.url ? '#FF6600' : isDark ? '#262626' : '#E8E8E8',
                    color: image === imgItem.url ? '#FFF' : isDark ? '#CCC' : '#333',
                    border: 'none',
                    borderRadius: '6px',
                    padding: '6px 12px',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    cursor: 'pointer'
                  }}
                >
                  {imgItem.label}
                </button>
              ))}
            </div>
            <input
              type="text"
              placeholder="або вкажіть власний шлях/URL до фото"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              style={{
                width: '100%',
                backgroundColor: isDark ? '#141414' : '#F9F9FB',
                border: `1px solid ${isDark ? '#333' : '#CCC'}`,
                padding: '8px 12px',
                borderRadius: '6px',
                color: isDark ? '#FFF' : '#000',
                fontSize: '0.85rem'
              }}
            />
          </div>

          {/* Specs */}
          <div>
            <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 800, color: '#FF6600', marginBottom: '6px', textTransform: 'uppercase' }}>
              Двигун / Engine
            </label>
            <input
              type="text"
              value={specEngine}
              onChange={(e) => setSpecEngine(e.target.value)}
              style={{
                width: '100%',
                backgroundColor: isDark ? '#141414' : '#F9F9FB',
                border: `1px solid ${isDark ? '#333' : '#CCC'}`,
                padding: '8px 12px',
                borderRadius: '6px',
                color: isDark ? '#FFF' : '#000'
              }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 800, color: '#FF6600', marginBottom: '6px', textTransform: 'uppercase' }}>
              Тяга / Потужність
            </label>
            <input
              type="text"
              value={specThrust}
              onChange={(e) => setSpecThrust(e.target.value)}
              style={{
                width: '100%',
                backgroundColor: isDark ? '#141414' : '#F9F9FB',
                border: `1px solid ${isDark ? '#333' : '#CCC'}`,
                padding: '8px 12px',
                borderRadius: '6px',
                color: isDark ? '#FFF' : '#000'
              }}
            />
          </div>

          {/* GEO TARGETING COUNTRY VISIBILITY RESTRICTION */}
          <div style={{
            gridColumn: '1 / -1',
            backgroundColor: isDark ? '#141414' : '#F0F4F8',
            padding: '16px',
            borderRadius: '8px',
            borderLeft: '4px solid #FF6600'
          }}>
            <label style={{ fontSize: '0.88rem', fontWeight: 900, color: '#FF6600', marginBottom: '8px', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Globe size={18} />
              <span>Гео-Цільова Видимість (Visible Only to Specific Countries)</span>
            </label>
            <p style={{ fontSize: '0.8rem', color: isDark ? '#AAA' : '#555', marginBottom: '12px' }}>
              Оберіть країни, відвідувачі яких зможуть бачити цей товар у каталозі:
            </p>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              {[
                { code: 'ALL', label: '🌐 Всі Країни (All Countries)' },
                { code: 'UA', label: '🇺🇦 Україна (UA)' },
                { code: 'PL', label: '🇵🇱 Польща (PL)' },
                { code: 'UK', label: '🇬🇧 UK' }
              ].map((countryItem) => {
                const isSelected = allowedCountries.includes(countryItem.code);
                return (
                  <button
                    key={countryItem.code}
                    type="button"
                    onClick={() => toggleCountry(countryItem.code)}
                    style={{
                      backgroundColor: isSelected ? '#FF6600' : isDark ? '#262626' : '#FFFFFF',
                      color: isSelected ? '#FFFFFF' : isDark ? '#CCC' : '#333',
                      border: `1px solid ${isSelected ? '#FF6600' : isDark ? '#333' : '#CCC'}`,
                      borderRadius: '20px',
                      padding: '8px 16px',
                      fontSize: '0.82rem',
                      fontWeight: 800,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}
                  >
                    {isSelected && <Check size={14} />}
                    <span>{countryItem.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <button
            type="submit"
            className="btn-primary"
            style={{ gridColumn: '1 / -1', justifyContent: 'center', marginTop: '10px' }}
          >
            <PlusCircle size={18} />
            <span>ОПУБЛІКУВАТИ ТОВАР У КАТАЛОЗІ</span>
          </button>
        </form>
      </div>
    </div>
  );
}
