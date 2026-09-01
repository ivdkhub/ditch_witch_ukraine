import React, { useState, useEffect } from 'react';
import { X, User, Building, Phone, Mail, MapPin, Tag, Wrench, Shield, CheckCircle } from 'lucide-react';
import { useTranslation } from '../i18n/LanguageContext';
import { useTheme } from '../theme/ThemeContext';

export default function AddCustomerDossierModal({ isOpen, onClose, onSave, editingDossier }) {
  const { language } = useTranslation();
  const { theme } = useTheme();

  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [taxId, setTaxId] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [region, setRegion] = useState('');
  const [clientType, setClientType] = useState('V.I.P. Постійний Клієнт');
  const [fleet, setFleet] = useState('');
  const [totalDealsValue, setTotalDealsValue] = useState('');
  const [notes, setNotes] = useState('');

  useEffect(() => {
    if (editingDossier) {
      setName(editingDossier.name || '');
      setCompany(editingDossier.company || '');
      setTaxId(editingDossier.taxId || '');
      setPhone(editingDossier.phone || '');
      setEmail(editingDossier.email || '');
      setCity(editingDossier.city || '');
      setRegion(editingDossier.region || '');
      setClientType(editingDossier.clientType || 'V.I.P. Постійний Клієнт');
      setFleet(editingDossier.fleet || '');
      setTotalDealsValue(editingDossier.totalDealsValue || '');
      setNotes(editingDossier.notes || '');
    } else {
      setName('');
      setCompany('');
      setTaxId('');
      setPhone('');
      setEmail('');
      setCity('');
      setRegion('');
      setClientType('V.I.P. Постійний Клієнт');
      setFleet('');
      setTotalDealsValue('');
      setNotes('');
    }
  }, [editingDossier, isOpen]);

  if (!isOpen) return null;

  const isDark = theme === 'dark';

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    const dossierData = {
      id: editingDossier ? editingDossier.id : `CLI-${Math.floor(100 + Math.random() * 900)}`,
      name,
      company,
      taxId,
      phone,
      email,
      city,
      region,
      clientType,
      fleet,
      totalDealsValue: totalDealsValue || 'За запитом',
      notes,
      createdAt: editingDossier ? editingDossier.createdAt : new Date().toISOString().slice(0, 10)
    };

    onSave(dossierData);
    onClose();
  };

  const inputStyle = {
    width: '100%',
    backgroundColor: isDark ? '#0F172A' : '#FFFFFF',
    border: `1px solid ${isDark ? '#334155' : '#CBD5E1'}`,
    padding: '10px 12px',
    borderRadius: '6px',
    color: isDark ? '#F8FAFC' : '#0F172A',
    fontSize: '0.88rem',
    outline: 'none'
  };

  const labelStyle = {
    display: 'block',
    fontSize: '0.78rem',
    fontWeight: 800,
    marginBottom: '6px',
    textTransform: 'uppercase',
    color: isDark ? '#FCD34D' : '#D97706'
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
        zIndex: 2800,
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
          maxWidth: '720px',
          maxHeight: '90vh',
          overflowY: 'auto',
          borderRadius: '16px',
          padding: '32px',
          boxShadow: '0 20px 50px rgba(0,0,0,0.6)',
          border: `1px solid ${isDark ? '#333333' : '#E0E0E0'}`,
          position: 'relative'
        }}
      >
        {/* Dead-centered Close button */}
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
            cursor: 'pointer',
            outline: 'none'
          }}
        >
          <X size={18} />
        </button>

        {/* Modal Header */}
        <div style={{ marginBottom: '24px' }}>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 900, textTransform: 'uppercase', margin: 0, color: isDark ? '#FFF' : '#111' }}>
            {editingDossier ? 'Редагувати Досьє Клієнта' : '+ Створити Нове Досьє Клієнта (CRM)'}
          </h2>
          <p style={{ fontSize: '0.85rem', color: '#888', marginTop: '4px' }}>
            Заповніть інформацію про замовника для ведення історії комерційних угод та аналітики.
          </p>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
            <div>
              <label style={labelStyle}>ПІБ Контактної Особи *</label>
              <input
                type="text"
                required
                placeholder="напр. Олександр Ковальчук"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={inputStyle}
              />
            </div>

            <div>
              <label style={labelStyle}>Назва Компанії / Організації</label>
              <input
                type="text"
                placeholder="напр. ТОВ БудСервіс ГНБ"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                style={inputStyle}
              />
            </div>

            <div>
              <label style={labelStyle}>Код ЄДРПОУ / ІПН</label>
              <input
                type="text"
                placeholder="напр. 38472910"
                value={taxId}
                onChange={(e) => setTaxId(e.target.value)}
                style={inputStyle}
              />
            </div>

            <div>
              <label style={labelStyle}>Категорія Клієнта</label>
              <select
                value={clientType}
                onChange={(e) => setClientType(e.target.value)}
                style={inputStyle}
              >
                <option value="V.I.P. Постійний Клієнт">🌟 V.I.P. Постійний Клієнт</option>
                <option value="Підрядник ГНБ">🚜 Підрядник ГНБ</option>
                <option value="Комунальне Підприємство">🏢 Комунальне Підприємство</option>
                <option value="Міжнародний Партнер (PL)">🇵🇱 Міжнародний Партнер (PL)</option>
                <option value="Новий Літ">🆕 Новий Літ</option>
              </select>
            </div>

            <div>
              <label style={labelStyle}>Номер Телефону *</label>
              <input
                type="tel"
                required
                placeholder="+380 67 123 45 67"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                style={inputStyle}
              />
            </div>

            <div>
              <label style={labelStyle}>Email Адреса</label>
              <input
                type="email"
                placeholder="client@company.ua"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={inputStyle}
              />
            </div>

            <div>
              <label style={labelStyle}>Місто</label>
              <input
                type="text"
                placeholder="напр. Київ"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                style={inputStyle}
              />
            </div>

            <div>
              <label style={labelStyle}>Область / Регіон</label>
              <input
                type="text"
                placeholder="напр. Київська обл."
                value={region}
                onChange={(e) => setRegion(e.target.value)}
                style={inputStyle}
              />
            </div>
          </div>

          <div>
            <label style={labelStyle}>Наявний Парк Спецтехніки Клієнта</label>
            <input
              type="text"
              placeholder="напр. Ditch Witch JT10, FM13V Mixer, Subsite TK Recon"
              value={fleet}
              onChange={(e) => setFleet(e.target.value)}
              style={inputStyle}
            />
          </div>

          <div>
            <label style={labelStyle}>Загальний Оціночний Бюджет / Вартість Угод</label>
            <input
              type="text"
              placeholder="напр. €112,000"
              value={totalDealsValue}
              onChange={(e) => setTotalDealsValue(e.target.value)}
              style={inputStyle}
            />
          </div>

          <div>
            <label style={labelStyle}>Спеціальні Примітки та Історія Взаємодії</label>
            <textarea
              rows={4}
              placeholder="Вкажіть особливі побажання клієнта, історію обслуговування чи умови лізингу..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              style={{ ...inputStyle, resize: 'vertical' }}
            />
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: '10px' }}>
            <button
              type="button"
              onClick={onClose}
              style={{
                backgroundColor: isDark ? '#2C2C2C' : '#E2E8F0',
                color: isDark ? '#CCC' : '#333',
                border: 'none',
                borderRadius: '8px',
                padding: '10px 18px',
                fontWeight: 800,
                fontSize: '0.85rem',
                cursor: 'pointer'
              }}
            >
              Скасувати
            </button>

            <button
              type="submit"
              className="btn-primary"
              style={{ padding: '10px 22px', fontSize: '0.85rem', fontWeight: 800 }}
            >
              <span>{editingDossier ? 'Зберегти Зміни' : 'Створити Досьє'}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
