import React, { useState, useEffect } from 'react';
import { X, Package, Wrench, Check } from 'lucide-react';
import { useParts } from '../context/PartsContext';
import { useTheme } from '../theme/ThemeContext';

export default function AddPartModal({ isOpen, onClose, editingPart = null }) {
  const { addPartOrKit, updatePartOrKit } = useParts();
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const [type, setType] = useState('kit'); // 'kit' | 'single'
  const [category, setCategory] = useState('hdd');
  const [titleUk, setTitleUk] = useState('');
  const [code, setCode] = useState('');
  const [models, setModels] = useState('');
  const [descUk, setDescUk] = useState('');
  const [itemsText, setItemsText] = useState('');
  const [docFile, setDocFile] = useState('/documents/31 Power Pipe Forged 2015 ver UA.docx');

  useEffect(() => {
    if (editingPart) {
      setType(editingPart.type || 'kit');
      setCategory(editingPart.category || 'hdd');
      setTitleUk(editingPart.title?.uk || editingPart.title || '');
      setCode(editingPart.code || '');
      setModels(editingPart.models || '');
      setDescUk(editingPart.desc?.uk || editingPart.desc || '');
      setItemsText(Array.isArray(editingPart.items) ? editingPart.items.join('\n') : '');
      setDocFile(editingPart.docFile || '/documents/31 Power Pipe Forged 2015 ver UA.docx');
    } else {
      setType('kit');
      setCategory('hdd');
      setTitleUk('');
      setCode('');
      setModels('');
      setDescUk('');
      setItemsText('');
      setDocFile('/documents/31 Power Pipe Forged 2015 ver UA.docx');
    }
  }, [editingPart, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!titleUk.trim()) return;

    const itemsArray = itemsText
      .split('\n')
      .map((line) => line.trim())
      .filter((line) => line.length > 0);

    const partPayload = {
      id: editingPart ? editingPart.id : `part-${Date.now()}`,
      type,
      category,
      title: { uk: titleUk, en: titleUk, pl: titleUk },
      code: code || `DW-PART-${Math.floor(100 + Math.random() * 900)}`,
      models: models || 'Ditch Witch® Equipment',
      items: itemsArray,
      desc: { uk: descUk || titleUk, en: descUk || titleUk, pl: descUk || titleUk },
      image:
        category === 'hdd'
          ? '/Risorse/Immagini/dirdrills_jt10.png'
          : category === 'electronics'
          ? '/Risorse/Immagini/dirdrills_jt5.png'
          : category === 'trenchers'
          ? '/Risorse/Immagini/c16x.png'
          : '/Risorse/Immagini/category_fluidSystems.png',
      docFile
    };

    if (editingPart) {
      updatePartOrKit(partPayload);
    } else {
      addPartOrKit(partPayload);
    }

    onClose();
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 2000,
      backgroundColor: 'rgba(0,0,0,0.75)',
      backdropFilter: 'blur(8px)',
      display: 'flex',
      alignItems: 'center',
      justify: 'center',
      padding: '20px'
    }}>
      <div style={{
        backgroundColor: isDark ? '#1C1C1C' : '#FFFFFF',
        color: isDark ? '#FFFFFF' : '#111111',
        borderRadius: '16px',
        maxWidth: '650px',
        width: '100%',
        maxHeight: '90vh',
        overflowY: 'auto',
        boxShadow: isDark ? '0 20px 50px rgba(0,0,0,0.8)' : '0 20px 50px rgba(0,0,0,0.2)',
        border: `1px solid ${isDark ? '#333' : '#E2E8F0'}`,
        padding: '30px'
      }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ backgroundColor: '#FF6600', color: '#FFF', padding: '10px', borderRadius: '10px' }}>
              <Package size={22} />
            </div>
            <div>
              <h2 style={{ fontSize: '1.35rem', fontWeight: 900, textTransform: 'uppercase', margin: 0 }}>
                {editingPart ? 'Редагувати Запчастину / Комплект' : 'Додати Запчастину або Комплект'}
              </h2>
              <span style={{ fontSize: '0.8rem', color: '#888' }}>
                Панель Адміністратора Ditch Witch Ukraine
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            style={{ background: 'none', border: 'none', color: '#888', cursor: 'pointer' }}
          >
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          {/* Type Switcher (Kit vs Single Part) */}
          <div>
            <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 800, marginBottom: '8px', textTransform: 'uppercase', color: '#FF6600' }}>
              Тип Запису *
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <button
                type="button"
                onClick={() => setType('kit')}
                style={{
                  padding: '12px',
                  borderRadius: '8px',
                  border: `2px solid ${type === 'kit' ? '#FF6600' : isDark ? '#333' : '#CCC'}`,
                  backgroundColor: type === 'kit' ? 'rgba(255,102,0,0.12)' : 'transparent',
                  color: type === 'kit' ? '#FF6600' : isDark ? '#FFF' : '#333',
                  fontWeight: 800,
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justify: 'center',
                  gap: '8px'
                }}
              >
                <Package size={18} />
                <span>Комплект Запчастин (Kit)</span>
              </button>

              <button
                type="button"
                onClick={() => setType('single')}
                style={{
                  padding: '12px',
                  borderRadius: '8px',
                  border: `2px solid ${type === 'single' ? '#FF6600' : isDark ? '#333' : '#CCC'}`,
                  backgroundColor: type === 'single' ? 'rgba(255,102,0,0.12)' : 'transparent',
                  color: type === 'single' ? '#FF6600' : isDark ? '#FFF' : '#333',
                  fontWeight: 800,
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justify: 'center',
                  gap: '8px'
                }}
              >
                <Wrench size={18} />
                <span>Окремa Деталь (Single Part)</span>
              </button>
            </div>
          </div>

          {/* Title */}
          <div>
            <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 800, marginBottom: '6px', textTransform: 'uppercase' }}>
              Назва Запчастини / Комплекту *
            </label>
            <input
              type="text"
              required
              placeholder='напр. Комплект ТО 500 мотогодин JT10'
              value={titleUk}
              onChange={(e) => setTitleUk(e.target.value)}
              style={{
                width: '100%',
                backgroundColor: isDark ? '#111111' : '#F8F9FA',
                border: `1px solid ${isDark ? '#333' : '#CCC'}`,
                padding: '12px 14px',
                borderRadius: '8px',
                color: isDark ? '#FFF' : '#000',
                outline: 'none'
              }}
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            {/* Category */}
            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 800, marginBottom: '6px', textTransform: 'uppercase' }}>
                Категорія *
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                style={{
                  width: '100%',
                  backgroundColor: isDark ? '#111111' : '#F8F9FA',
                  border: `1px solid ${isDark ? '#333' : '#CCC'}`,
                  padding: '12px 14px',
                  borderRadius: '8px',
                  color: isDark ? '#FFF' : '#000',
                  outline: 'none'
                }}
              >
                <option value="hdd">Буровий Інструмент ГНБ (HDD)</option>
                <option value="electronics">Електроніка та Зонди Subsite®</option>
                <option value="trenchers">Ланцюги та Зуби Траншеєкопачів</option>
                <option value="mixers">Фільтри, Оливи та Міксери</option>
                <option value="other">Інше / Інші запчастини (Altro)</option>
              </select>
            </div>

            {/* Part Code */}
            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 800, marginBottom: '6px', textTransform: 'uppercase' }}>
                Артикул / Код Запчастини
              </label>
              <input
                type="text"
                placeholder="KIT-JT10-500H"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                style={{
                  width: '100%',
                  backgroundColor: isDark ? '#111111' : '#F8F9FA',
                  border: `1px solid ${isDark ? '#333' : '#CCC'}`,
                  padding: '12px 14px',
                  borderRadius: '8px',
                  color: isDark ? '#FFF' : '#000',
                  outline: 'none'
                }}
              />
            </div>
          </div>

          {/* Compatible Models */}
          <div>
            <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 800, marginBottom: '6px', textTransform: 'uppercase' }}>
              Сумісні Моделі Спецтехніки
            </label>
            <input
              type="text"
              placeholder="Ditch Witch JT10, JT5"
              value={models}
              onChange={(e) => setModels(e.target.value)}
              style={{
                width: '100%',
                backgroundColor: isDark ? '#111111' : '#F8F9FA',
                border: `1px solid ${isDark ? '#333' : '#CCC'}`,
                padding: '12px 14px',
                borderRadius: '8px',
                color: isDark ? '#FFF' : '#000',
                outline: 'none'
              }}
            />
          </div>

          {/* Kit Items List (If type === 'kit') */}
          {type === 'kit' && (
            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 800, marginBottom: '6px', textTransform: 'uppercase', color: '#FF6600' }}>
                Склад Комплекту (по одному елементу в рядок)
              </label>
              <textarea
                rows={4}
                placeholder={"Масляний фільтр двигуна Deutz\nПаливний фільтр тонкої очистки\nГідравлічний картридж високого тиску"}
                value={itemsText}
                onChange={(e) => setItemsText(e.target.value)}
                style={{
                  width: '100%',
                  backgroundColor: isDark ? '#111111' : '#F8F9FA',
                  border: `1px solid ${isDark ? '#333' : '#CCC'}`,
                  padding: '12px 14px',
                  borderRadius: '8px',
                  color: isDark ? '#FFF' : '#000',
                  outline: 'none',
                  fontSize: '0.88rem'
                }}
              />
            </div>
          )}

          {/* Description */}
          <div>
            <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 800, marginBottom: '6px', textTransform: 'uppercase' }}>
              Опис та призначення
            </label>
            <textarea
              rows={3}
              placeholder="Опишіть призначення запчастини або комплекту..."
              value={descUk}
              onChange={(e) => setDescUk(e.target.value)}
              style={{
                width: '100%',
                backgroundColor: isDark ? '#111111' : '#F8F9FA',
                border: `1px solid ${isDark ? '#333' : '#CCC'}`,
                padding: '12px 14px',
                borderRadius: '8px',
                color: isDark ? '#FFF' : '#000',
                outline: 'none',
                fontSize: '0.88rem'
              }}
            />
          </div>

          {/* Submit Action */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: '10px' }}>
            <button
              type="button"
              onClick={onClose}
              style={{
                padding: '12px 20px',
                borderRadius: '8px',
                backgroundColor: 'transparent',
                border: `1px solid ${isDark ? '#444' : '#CCC'}`,
                color: isDark ? '#AAA' : '#666',
                fontWeight: 700,
                cursor: 'pointer'
              }}
            >
              Скасувати
            </button>

            <button
              type="submit"
              className="btn-primary"
              style={{ padding: '12px 24px' }}
            >
              <Check size={18} />
              <span>{editingPart ? 'Зберегти Зміни' : 'Зберегти в Каталог'}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
