import React, { useState, useEffect } from 'react';
import { X, PlusCircle, Globe, Check, Upload, Image as ImageIcon, Sparkles } from 'lucide-react';
import { useTranslation } from '../i18n/LanguageContext';
import { useTheme } from '../theme/ThemeContext';
import { useProducts } from '../context/ProductContext';

export const PRODUCT_CATEGORIES = [
  { id: 'drilling', uk: 'Бурові Установки ГНБ', en: 'Directional Drills', pl: 'Wiertnice HDB' },
  { id: 'trenchers', uk: 'Траншеєкопачі', en: 'Trenchers', pl: 'Koparki Łańcuchowe' },
  { id: 'skidsteers', uk: 'Міні-Навантажувачі SK', en: 'Stand-On Skid Steers', pl: 'Ładowarki SK' },
  { id: 'vacuums', uk: 'Вакуумні Екскаватори', en: 'Vacuum Excavators', pl: 'Koparki Próżniowe' },
  { id: 'fluids', uk: 'Змішувальні Системи', en: 'Fluid Systems', pl: 'Systemy Płuczkowe' },
  { id: 'electronics', uk: 'Локаційні Системи Subsite', en: 'Subsite Electronics', pl: 'Systemy Subsite' },
  { id: 'other', uk: 'Інше / Інші товари (Altro)', en: 'Other Products', pl: 'Inny Sprzęt' }
];

export const STOCK_PRODUCT_IMAGES = [
  { label: '🚜 Stock ГНБ JT10', url: '/Risorse/Immagini/dirdrills_jt10.png' },
  { label: '🚜 Stock ГНБ JT5', url: '/Risorse/Immagini/dirdrills_jt5.png' },
  { label: '⚙️ Stock C16X Trencher', url: '/Risorse/Immagini/c16x.png' },
  { label: '📂 Stock Категорія Спецтехніки', url: '/Risorse/Immagini/category_drilling.png' },
  { label: '📦 Stock Запчастини & Спецтехніка', url: '/Risorse/Immagini/category_trenchers.png' }
];

export const PREDEFINED_SPEC_KEYS = [
  { key: 'pullback', label: 'Зусилля зворотної тяги (Pullback Force)' },
  { key: 'thrust', label: 'Зусилля подачі (Thrust Force)' },
  { key: 'torque', label: 'Крутний момент шпинделя (Max Torque)' },
  { key: 'innerTorque', label: 'Внутрішній крутний момент (Rock Bit)' },
  { key: 'outerTorque', label: 'Зовнішній крутний момент (Outer Pipe)' },
  { key: 'spindleSpeed', label: 'Швидкість шпинделя (Spindle Speed)' },
  { key: 'fluidFlow', label: 'Потік бурового насоса (Max Mud Flow)' },
  { key: 'rodLength', label: 'Довжина бурової штанги (Rod Length)' },
  { key: 'bendRadius', label: 'Мін. радіус вигину штанг (Bend Radius)' },
  { key: 'engine', label: 'Марка/Модель двигуна (Engine Model)' },
  { key: 'power', label: 'Потужність двигуна (Engine Power)' },
  { key: 'dimensions', label: 'Габаритні розміри (L x W x H)' },
  { key: 'weight', label: 'Експлуатаційна маса (Weight)' },
  { key: 'terrainType', label: 'Тип ґрунту / Скельна порода' },
  { key: 'digDepth', label: 'Глибина копання (Dig Depth)' },
  { key: 'digWidth', label: 'Ширина копання (Dig Width)' },
  { key: 'trackSystem', label: 'Гусеничний хід (Track System)' },
  { key: 'tankCapacity', label: 'Бак для шламу (Spoil Tank)' },
  { key: 'waterTank', label: 'Водяний бак (Water Tank)' }
];

export default function AddProductModal({ isOpen, onClose, editingProduct = null }) {
  const { language } = useTranslation();
  const { theme } = useTheme();
  const { addProduct, updateProduct } = useProducts();

  const isDark = theme === 'dark';

  const [category, setCategory] = useState('drilling');
  const [titleUk, setTitleUk] = useState('');
  const [titleEn, setTitleEn] = useState('');
  const [titlePl, setTitlePl] = useState('');
  const [taglineUk, setTaglineUk] = useState('');
  const [descUk, setDescUk] = useState('');
  const [image, setImage] = useState(STOCK_PRODUCT_IMAGES[0].url);
  const [featured, setFeatured] = useState(false);

  // Dynamic Specs Array: [{ id: 1, key: 'pullback', value: '178 kN' }, ...]
  const [specsList, setSpecsList] = useState([]);

  // Country visibility targeting
  const [allowedCountries, setAllowedCountries] = useState(['ALL']);

  useEffect(() => {
    if (editingProduct) {
      setCategory(editingProduct.category || 'drilling');
      setTitleUk(editingProduct.title?.uk || editingProduct.title || '');
      setTitleEn(editingProduct.title?.en || editingProduct.title || '');
      setTitlePl(editingProduct.title?.pl || editingProduct.title || '');
      setTaglineUk(editingProduct.tagline?.uk || editingProduct.tagline || '');
      setDescUk(editingProduct.desc?.uk || editingProduct.desc || '');
      setImage(editingProduct.image || '');
      setFeatured(!!editingProduct.featured);
      setAllowedCountries(editingProduct.allowedCountries || ['ALL']);

      if (editingProduct.specs && typeof editingProduct.specs === 'object') {
        const rows = Object.entries(editingProduct.specs).map(([k, v], idx) => ({
          id: `spec-${idx}-${Date.now()}`,
          key: k,
          value: String(v)
        }));
        setSpecsList(rows);
      } else {
        setSpecsList([
          { id: 'spec-1', key: 'pullback', value: '178 kN (40,000 lbs)' },
          { id: 'spec-2', key: 'thrust', value: '178 kN (40,000 lbs)' },
          { id: 'spec-3', key: 'torque', value: '7,460 N·m (5,500 ft-lb)' },
          { id: 'spec-4', key: 'engine', value: 'Cummins QSB4.5' },
          { id: 'spec-5', key: 'power', value: '160 HP / 119 kW' },
          { id: 'spec-6', key: 'weight', value: '9,300 kg' }
        ]);
      }
    } else {
      setCategory('drilling');
      setTitleUk('');
      setTitleEn('');
      setTitlePl('');
      setTaglineUk('');
      setDescUk('');
      setImage(STOCK_PRODUCT_IMAGES[0].url);
      setFeatured(false);
      setAllowedCountries(['ALL']);
      setSpecsList([
        { id: 'spec-1', key: 'pullback', value: '178 kN (40,000 lbs)' },
        { id: 'spec-2', key: 'thrust', value: '178 kN (40,000 lbs)' },
        { id: 'spec-3', key: 'torque', value: '7,460 N·m (5,500 ft-lb)' },
        { id: 'spec-4', key: 'engine', value: 'Cummins QSB4.5' },
        { id: 'spec-5', key: 'power', value: '160 HP / 119 kW' },
        { id: 'spec-6', key: 'weight', value: '9,300 kg' }
      ]);
    }
  }, [editingProduct, isOpen]);

  if (!isOpen) return null;

  const handleFileUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (event) => {
        setImage(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

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

  // Spec Row Handlers
  const addSpecRow = (isCustom = false) => {
    setSpecsList((prev) => [
      ...prev,
      { id: `spec-${Date.now()}`, key: isCustom ? '' : 'thrust', value: '', isCustom }
    ]);
  };

  const removeSpecRow = (id) => {
    setSpecsList((prev) => prev.filter((item) => item.id !== id));
  };

  const updateSpecRow = (id, field, val) => {
    setSpecsList((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [field]: val } : item))
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!titleUk && !titleEn) {
      alert('Будь ласка, введіть назву продукту.');
      return;
    }

    // Assemble dynamic specs object
    const specsObj = {};
    specsList.forEach(({ key, value }) => {
      if (key && key.trim() && value && value.trim()) {
        specsObj[key.trim()] = value.trim();
      }
    });

    const payload = {
      id: editingProduct ? editingProduct.id : `custom-prod-${Date.now()}`,
      category,
      categoryKey: category,
      image,
      featured,
      title: {
        uk: titleUk || titleEn,
        en: titleEn || titleUk,
        pl: titlePl || titleUk
      },
      tagline: {
        uk: taglineUk || 'Офіційна техніка Ditch Witch',
        en: taglineUk || 'Official Ditch Witch Machinery',
        pl: taglineUk || 'Oficjalny sprzęt Ditch Witch'
      },
      desc: {
        uk: descUk || 'Спеціалізована техніка Ditch Witch з повним технічним обслуговуванням та гарантією.',
        en: descUk || 'Specialized Ditch Witch equipment with full service and warranty support.',
        pl: descUk || 'Specjalistyczny sprzęt Ditch Witch z pełnym serwisem i gwarancją.'
      },
      specs: specsObj,
      allowedCountries
    };

    if (editingProduct) {
      updateProduct(payload);
    } else {
      addProduct(payload);
    }

    onClose();
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(0,0,0,0.85)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justify: 'center',
        zIndex: 2500,
        padding: '20px'
      }}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: isDark ? '#1C1C1C' : '#FFFFFF',
          color: isDark ? '#FFFFFF' : '#111111',
          width: '100%',
          maxWidth: '740px',
          maxHeight: '90vh',
          overflowY: 'auto',
          borderRadius: '16px',
          padding: '32px',
          boxShadow: '0 20px 50px rgba(0,0,0,0.6)',
          border: `1px solid ${isDark ? '#333333' : '#E0E0E0'}`,
          position: 'relative'
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            backgroundColor: isDark ? '#2C2C2C' : '#F0F0F0',
            border: 'none',
            color: isDark ? '#CCC' : '#555',
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            display: 'grid',
            placeItems: 'center',
            padding: 0,
            margin: 0,
            lineHeight: 0,
            cursor: 'pointer',
            outline: 'none'
          }}
        >
          <X size={18} style={{ display: 'block', margin: 'auto' }} />
        </button>

        {/* Modal Header */}
        <div style={{ marginBottom: '24px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: 'rgba(255, 102, 0, 0.15)',
            color: '#FF9944',
            padding: '4px 12px',
            borderRadius: '20px',
            fontWeight: 800,
            fontSize: '0.8rem',
            marginBottom: '8px'
          }}>
            <PlusCircle size={15} />
            <span>КАТАЛОГ ПРОДУКЦІЇ (PRODUCT CATALOG)</span>
          </div>

          <h2 style={{ fontSize: '1.4rem', fontWeight: 900, textTransform: 'uppercase', margin: 0 }}>
            {editingProduct ? 'Редагування Товару' : 'Додати Новий Товар у Каталог'}
          </h2>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          {/* Category Dropdown */}
          <div>
            <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 800, marginBottom: '6px', textTransform: 'uppercase', color: '#FF9944' }}>
              Категорія Товару *
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              style={{
                width: '100%',
                backgroundColor: isDark ? '#141414' : '#F9F9FB',
                border: `1px solid ${isDark ? '#333' : '#CCC'}`,
                borderRadius: '6px',
                padding: '10px 14px',
                color: isDark ? '#FFF' : '#000',
                fontSize: '0.9rem',
                outline: 'none'
              }}
            >
              {PRODUCT_CATEGORIES.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.uk} ({cat.en})
                </option>
              ))}
            </select>
          </div>

          {/* Title UK, EN, PL */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 800, marginBottom: '6px', textTransform: 'uppercase', color: '#FF9944' }}>
                Назва (Українська) *
              </label>
              <input
                type="text"
                required
                placeholder="напр. Установка ГНБ JT10"
                value={titleUk}
                onChange={(e) => setTitleUk(e.target.value)}
                style={{
                  width: '100%',
                  backgroundColor: isDark ? '#141414' : '#F9F9FB',
                  border: `1px solid ${isDark ? '#333' : '#CCC'}`,
                  borderRadius: '6px',
                  padding: '10px 14px',
                  color: isDark ? '#FFF' : '#000',
                  fontSize: '0.9rem',
                  outline: 'none'
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 800, marginBottom: '6px', textTransform: 'uppercase', color: '#FF9944' }}>
                Назва (English)
              </label>
              <input
                type="text"
                placeholder="e.g. JT10 Directional Drill"
                value={titleEn}
                onChange={(e) => setTitleEn(e.target.value)}
                style={{
                  width: '100%',
                  backgroundColor: isDark ? '#141414' : '#F9F9FB',
                  border: `1px solid ${isDark ? '#333' : '#CCC'}`,
                  borderRadius: '6px',
                  padding: '10px 14px',
                  color: isDark ? '#FFF' : '#000',
                  fontSize: '0.9rem',
                  outline: 'none'
                }}
              />
            </div>
          </div>

          {/* Tagline */}
          <div>
            <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 800, marginBottom: '6px', textTransform: 'uppercase', color: '#FF9944' }}>
              Коротке Гасло (Tagline)
            </label>
            <input
              type="text"
              placeholder="напр. Потужність та компактність у поєднанні з максимальною надійністю"
              value={taglineUk}
              onChange={(e) => setTaglineUk(e.target.value)}
              style={{
                width: '100%',
                backgroundColor: isDark ? '#141414' : '#F9F9FB',
                border: `1px solid ${isDark ? '#333' : '#CCC'}`,
                borderRadius: '6px',
                padding: '10px 14px',
                color: isDark ? '#FFF' : '#000',
                fontSize: '0.9rem',
                outline: 'none'
              }}
            />
          </div>

          {/* Image Selection */}
          <div>
            <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 800, marginBottom: '6px', textTransform: 'uppercase', color: '#FF9944' }}>
              Зображення Товару
            </label>

            <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '8px' }}>
              <label style={{
                backgroundColor: 'rgba(255, 102, 0, 0.15)',
                color: '#FF9944',
                border: '1px solid rgba(255, 102, 0, 0.35)',
                borderRadius: '6px',
                padding: '8px 14px',
                fontSize: '0.8rem',
                fontWeight: 800,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                whiteSpace: 'nowrap'
              }}>
                <Upload size={15} />
                <span>Завантажити з ПК</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  style={{ display: 'none' }}
                />
              </label>

              <input
                type="text"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                placeholder="або введіть URL / шлях до зображення..."
                style={{
                  flexGrow: 1,
                  backgroundColor: isDark ? '#141414' : '#F9F9FB',
                  border: `1px solid ${isDark ? '#333' : '#CCC'}`,
                  borderRadius: '6px',
                  padding: '8px 12px',
                  color: isDark ? '#FFF' : '#000',
                  fontSize: '0.82rem',
                  outline: 'none'
                }}
              />
            </div>

            {image && (
              <div style={{ borderRadius: '8px', overflow: 'hidden', height: '110px', backgroundColor: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src={image} alt="Preview" style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }} />
              </div>
            )}
          </div>

          {/* Geo Targeting */}
          <div>
            <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 800, marginBottom: '6px', textTransform: 'uppercase', color: '#FF9944' }}>
              Країни Показу (Geo-Targeting Visibility)
            </label>
            <div style={{ display: 'flex', gap: '8px' }}>
              {[
                { code: 'ALL', label: '🌐 Всі країни (ALL)' },
                { code: 'UA', label: '🇺🇦 Україна (UA)' },
                { code: 'PL', label: '🇵🇱 Польща (PL)' }
              ].map((c) => {
                const isSelected = allowedCountries.includes(c.code);
                return (
                  <button
                    type="button"
                    key={c.code}
                    onClick={() => toggleCountry(c.code)}
                    style={{
                      backgroundColor: isSelected ? 'rgba(255, 102, 0, 0.2)' : isDark ? '#141414' : '#F0F0F0',
                      color: isSelected ? '#FF9944' : isDark ? '#888' : '#555',
                      border: isSelected ? '1px solid #FF9944' : `1px solid ${isDark ? '#333' : '#DDD'}`,
                      borderRadius: '6px',
                      padding: '6px 12px',
                      fontSize: '0.8rem',
                      fontWeight: 800,
                      cursor: 'pointer'
                    }}
                  >
                    {c.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* DYNAMIC COMPLETE TECHNICAL SPECIFICATION EDITOR SECTION */}
          <div style={{
            backgroundColor: isDark ? '#141414' : '#F8FAFC',
            border: `1px solid ${isDark ? '#2E2E2E' : '#E2E8F0'}`,
            borderRadius: '12px',
            padding: '18px'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px', flexWrap: 'wrap', gap: '8px' }}>
              <div>
                <h4 style={{ fontSize: '0.92rem', fontWeight: 900, textTransform: 'uppercase', margin: 0, color: '#FF6600' }}>
                  ⚙️ ТЕХНІЧНІ ХАРАКТЕРИСТИКИ (TECHNICAL SPECS EDITOR)
                </h4>
                <p style={{ fontSize: '0.76rem', color: isDark ? '#94A3B8' : '#64748B', margin: '2px 0 0 0' }}>
                  Виберіть зі списку або напишіть власну назву будь-якого параметра.
                </p>
              </div>

              <div style={{ display: 'flex', gap: '8px' }}>
                <button
                  type="button"
                  onClick={() => addSpecRow(false)}
                  style={{
                    backgroundColor: 'rgba(255, 102, 0, 0.15)',
                    color: '#FF6600',
                    border: '1px solid rgba(255, 102, 0, 0.35)',
                    borderRadius: '6px',
                    padding: '6px 10px',
                    fontSize: '0.78rem',
                    fontWeight: 800,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                  title="Додати параметр із загального списку"
                >
                  <PlusCircle size={14} />
                  <span>+ Стандартний</span>
                </button>

                <button
                  type="button"
                  onClick={() => addSpecRow(true)}
                  style={{
                    backgroundColor: 'rgba(16, 185, 129, 0.15)',
                    color: '#10B981',
                    border: '1px solid rgba(16, 185, 129, 0.35)',
                    borderRadius: '6px',
                    padding: '6px 10px',
                    fontSize: '0.78rem',
                    fontWeight: 800,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                  title="Написати власну назву нового параметра"
                >
                  <PlusCircle size={14} />
                  <span>✏️ + Власний параметр</span>
                </button>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {specsList.map((row) => (
                <div key={row.id} style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  {/* Key selector or direct text input */}
                  {row.isCustom ? (
                    <div style={{ display: 'flex', width: '46%', gap: '4px', alignItems: 'center' }}>
                      <input
                        type="text"
                        placeholder="Назва вашого параметра (напр. Екологічний стандарт)"
                        value={row.key}
                        onChange={(e) => updateSpecRow(row.id, 'key', e.target.value)}
                        style={{
                          width: '100%',
                          backgroundColor: isDark ? '#1C1C1C' : '#FFFFFF',
                          border: `1px solid ${isDark ? '#FF6600' : '#FF6600'}`,
                          borderRadius: '6px',
                          padding: '8px 10px',
                          color: isDark ? '#FFF' : '#0F172A',
                          fontSize: '0.82rem',
                          outline: 'none',
                          fontWeight: 700
                        }}
                      />
                      <button
                        type="button"
                        onClick={() => updateSpecRow(row.id, 'isCustom', false)}
                        title="Переключити на вибір зі списку"
                        style={{
                          backgroundColor: isDark ? '#2E2E2E' : '#E2E8F0',
                          color: isDark ? '#CCC' : '#475569',
                          border: 'none',
                          borderRadius: '4px',
                          padding: '6px 8px',
                          fontSize: '0.75rem',
                          cursor: 'pointer'
                        }}
                      >
                        📋
                      </button>
                    </div>
                  ) : (
                    <div style={{ display: 'flex', width: '46%', gap: '4px', alignItems: 'center' }}>
                      <select
                        value={row.key}
                        onChange={(e) => {
                          if (e.target.value === '__CUSTOM__') {
                            updateSpecRow(row.id, 'isCustom', true);
                            updateSpecRow(row.id, 'key', '');
                          } else {
                            updateSpecRow(row.id, 'key', e.target.value);
                          }
                        }}
                        style={{
                          width: '100%',
                          backgroundColor: isDark ? '#1C1C1C' : '#FFFFFF',
                          border: `1px solid ${isDark ? '#333' : '#CBD5E1'}`,
                          borderRadius: '6px',
                          padding: '8px 10px',
                          color: isDark ? '#FFF' : '#0F172A',
                          fontSize: '0.82rem',
                          outline: 'none',
                          fontWeight: 700
                        }}
                      >
                        {PREDEFINED_SPEC_KEYS.map((pk) => (
                          <option key={pk.key} value={pk.key}>
                            {pk.label}
                          </option>
                        ))}
                        {!PREDEFINED_SPEC_KEYS.some((pk) => pk.key === row.key) && (
                          <option value={row.key}>{row.key}</option>
                        )}
                        <option value="__CUSTOM__">✏️ + Власний параметр (Ввести назву вручну...)</option>
                      </select>
                      <button
                        type="button"
                        onClick={() => updateSpecRow(row.id, 'isCustom', true)}
                        title="Написати власну назву параметра"
                        style={{
                          backgroundColor: isDark ? '#2E2E2E' : '#E2E8F0',
                          color: isDark ? '#CCC' : '#475569',
                          border: 'none',
                          borderRadius: '4px',
                          padding: '6px 8px',
                          fontSize: '0.75rem',
                          cursor: 'pointer'
                        }}
                      >
                        ✏️
                      </button>
                    </div>
                  )}

                  {/* Spec Value input */}
                  <input
                    type="text"
                    placeholder="Значення (напр. 178 kN або Stage V)"
                    value={row.value}
                    onChange={(e) => updateSpecRow(row.id, 'value', e.target.value)}
                    style={{
                      flexGrow: 1,
                      backgroundColor: isDark ? '#1C1C1C' : '#FFFFFF',
                      border: `1px solid ${isDark ? '#333' : '#CBD5E1'}`,
                      borderRadius: '6px',
                      padding: '8px 10px',
                      color: isDark ? '#FFF' : '#0F172A',
                      fontSize: '0.82rem',
                      outline: 'none',
                      fontWeight: 600
                    }}
                  />

                  {/* Remove row */}
                  <button
                    type="button"
                    onClick={() => removeSpecRow(row.id)}
                    style={{
                      backgroundColor: 'rgba(239, 68, 68, 0.15)',
                      color: '#EF4444',
                      border: 'none',
                      borderRadius: '6px',
                      width: '32px',
                      height: '32px',
                      display: 'grid',
                      placeItems: 'center',
                      cursor: 'pointer',
                      flexShrink: 0
                    }}
                    title="Видалити параметр"
                  >
                    <X size={16} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Description */}
          <div>
            <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 800, marginBottom: '6px', textTransform: 'uppercase', color: '#FF9944' }}>
              Детальний Опис Товару
            </label>
            <textarea
              rows={4}
              value={descUk}
              onChange={(e) => setDescUk(e.target.value)}
              placeholder="Детальні технічні характеристики, сфера застосування та комплектація..."
              style={{
                width: '100%',
                backgroundColor: isDark ? '#141414' : '#F9F9FB',
                border: `1px solid ${isDark ? '#333' : '#CCC'}`,
                borderRadius: '6px',
                padding: '10px 14px',
                color: isDark ? '#FFF' : '#000',
                fontSize: '0.88rem',
                outline: 'none',
                resize: 'vertical'
              }}
            />
          </div>

          <button
            type="submit"
            style={{
              width: '100%',
              backgroundColor: 'rgba(255, 102, 0, 0.18)',
              color: '#FF9944',
              border: '1px solid rgba(255, 102, 0, 0.35)',
              borderRadius: '8px',
              padding: '12px',
              fontWeight: 900,
              fontSize: '0.92rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justify: 'center',
              gap: '8px',
              marginTop: '8px',
              boxShadow: '0 4px 14px rgba(255, 102, 0, 0.15)',
              transition: 'all 0.2s ease'
            }}
          >
            <Check size={18} />
            <span>{editingProduct ? 'ЗБЕРЕГТИ ЗМІНИ' : 'ЗБЕРЕГТИ ТО В КАТАЛОЗІ'}</span>
          </button>
        </form>
      </div>
    </div>
  );
}
