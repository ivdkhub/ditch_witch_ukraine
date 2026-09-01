import React, { useState, useEffect } from 'react';
import { FileText, User, Building, Phone, Mail, MapPin, Tag, DollarSign, X, CheckCircle } from 'lucide-react';
import { useTranslation } from '../i18n/LanguageContext';
import { useTheme } from '../theme/ThemeContext';

export default function AddInquiryModal({ isOpen, onClose, onSave, editingInquiry, customerDossiers = [] }) {
  const { language } = useTranslation();
  const { theme } = useTheme();

  const [formData, setFormData] = useState({
    id: '',
    date: '',
    customerId: '',
    customerName: '',
    company: '',
    phone: '',
    email: '',
    city: '',
    inquiryType: 'Придбання спецтехніки ГНБ',
    productModel: '',
    budget: '',
    status: 'Новий',
    notes: ''
  });

  useEffect(() => {
    if (editingInquiry) {
      setFormData({
        id: editingInquiry.id || '',
        date: editingInquiry.date || '',
        customerId: editingInquiry.customerId || '',
        customerName: editingInquiry.customerName || '',
        company: editingInquiry.company || '',
        phone: editingInquiry.phone || '',
        email: editingInquiry.email || '',
        city: editingInquiry.city || '',
        inquiryType: editingInquiry.inquiryType || 'Придбання спецтехніки ГНБ',
        productModel: editingInquiry.productModel || editingInquiry.machine || '',
        budget: editingInquiry.budget || '',
        status: editingInquiry.status || 'Новий',
        notes: editingInquiry.notes || ''
      });
    } else {
      const now = new Date();
      const dateStr = `${now.getDate().toString().padStart(2, '0')} Вересня ${now.getFullYear()} ${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
      const randomNum = Math.floor(100 + Math.random() * 900);
      setFormData({
        id: `INQ-2026-${randomNum}`,
        date: dateStr,
        customerId: '',
        customerName: '',
        company: '',
        phone: '',
        email: '',
        city: '',
        inquiryType: 'Придбання спецтехніки ГНБ',
        productModel: '',
        budget: '',
        status: 'Новий',
        notes: ''
      });
    }
  }, [editingInquiry, isOpen]);

  const handleSelectCustomerDossier = (cId) => {
    if (!cId) {
      setFormData((prev) => ({ ...prev, customerId: '' }));
      return;
    }
    const found = customerDossiers.find((c) => c.id === cId);
    if (found) {
      setFormData((prev) => ({
        ...prev,
        customerId: found.id,
        customerName: found.name || prev.customerName,
        company: found.company || prev.company,
        phone: found.phone || prev.phone,
        email: found.email || prev.email,
        city: found.city || prev.city
      }));
    }
  };

  if (!isOpen) return null;

  const isDark = theme === 'dark';

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  const inputStyle = {
    width: '100%',
    backgroundColor: isDark ? '#0F172A' : '#FFFFFF',
    border: `1px solid ${isDark ? '#334155' : '#CBD5E1'}`,
    padding: '10px 12px 10px 38px',
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
          maxWidth: '680px',
          maxHeight: '90vh',
          overflowY: 'auto',
          borderRadius: '16px',
          padding: '28px',
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
            <FileText size={15} />
            <span>ЖУРНАЛ КОМЕРЦІЙНИХ ЗАПИТІВ</span>
          </div>

          <h2 style={{ fontSize: '1.4rem', fontWeight: 900, textTransform: 'uppercase', margin: 0 }}>
            {editingInquiry ? 'Редагування Комерційного Запиту' : 'Новий Комерційний Запит (Ручне Внесення)'}
          </h2>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {/* Row 1: ID & Date */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div>
              <label style={labelStyle}>Номер Запиту (ID)</label>
              <div style={{ position: 'relative' }}>
                <Tag size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#888' }} />
                <input
                  type="text"
                  required
                  value={formData.id}
                  onChange={(e) => setFormData({ ...formData, id: e.target.value })}
                  style={inputStyle}
                />
              </div>
            </div>

            <div>
              <label style={labelStyle}>Дата та Час</label>
              <input
                type="text"
                required
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                style={{ ...inputStyle, paddingLeft: '14px' }}
              />
            </div>
          </div>

          {/* Customer Dossier Link Dropdown */}
          {Array.isArray(customerDossiers) && customerDossiers.length > 0 && (
            <div style={{ backgroundColor: isDark ? '#141414' : '#F1F5F9', padding: '14px', borderRadius: '8px', border: `1px solid ${isDark ? '#333' : '#E2E8F0'}` }}>
              <label style={{ ...labelStyle, color: '#FF6600', marginBottom: '4px' }}>
                👤 Прив’язати Досьє Клієнта з Бази (Автозаповнення CRM)
              </label>
              <select
                value={formData.customerId || ''}
                onChange={(e) => handleSelectCustomerDossier(e.target.value)}
                style={{
                  width: '100%',
                  backgroundColor: isDark ? '#1F1F1F' : '#FFFFFF',
                  border: `1px solid ${isDark ? '#444' : '#CCCCCC'}`,
                  padding: '10px 12px',
                  borderRadius: '6px',
                  color: isDark ? '#FFF' : '#000',
                  fontSize: '0.88rem',
                  outline: 'none',
                  fontWeight: 700
                }}
              >
                <option value="">-- Ввести дані вручну або створити новий контакт --</option>
                {customerDossiers.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.id} | {c.name} {c.company ? `(${c.company})` : ''} • {c.city || ''}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Row 2: Customer Name & Company */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div>
              <label style={labelStyle}>ПІБ Клієнта / Представника</label>
              <div style={{ position: 'relative' }}>
                <User size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#888' }} />
                <input
                  type="text"
                  required
                  placeholder="напр. Олександр Ковальчук"
                  value={formData.customerName}
                  onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                  style={inputStyle}
                />
              </div>
            </div>

            <div>
              <label style={labelStyle}>Компанія / Організація</label>
              <div style={{ position: 'relative' }}>
                <Building size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#888' }} />
                <input
                  type="text"
                  placeholder="напр. ТОВ СпецБудСервіс"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  style={inputStyle}
                />
              </div>
            </div>
          </div>

          {/* Row 3: Phone & Email */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div>
              <label style={labelStyle}>Номер Телефону</label>
              <div style={{ position: 'relative' }}>
                <Phone size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#888' }} />
                <input
                  type="text"
                  required
                  placeholder="+380 50 123 45 67"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  style={inputStyle}
                />
              </div>
            </div>

            <div>
              <label style={labelStyle}>Email Адреса</label>
              <div style={{ position: 'relative' }}>
                <Mail size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#888' }} />
                <input
                  type="email"
                  placeholder="client@company.ua"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={inputStyle}
                />
              </div>
            </div>
          </div>

          {/* Row 4: City & Inquiry Type */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div>
              <label style={labelStyle}>Місто / Регіон</label>
              <div style={{ position: 'relative' }}>
                <MapPin size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#888' }} />
                <input
                  type="text"
                  placeholder="Київ, Україна"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  style={inputStyle}
                />
              </div>
            </div>

            <div>
              <label style={labelStyle}>Тип Запиту</label>
              <select
                value={formData.inquiryType}
                onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                style={{ ...inputStyle, paddingLeft: '14px', cursor: 'pointer' }}
              >
                <option value="Придбання спецтехніки ГНБ">Придбання спецтехніки ГНБ</option>
                <option value="Придбання спецтехніки">Придбання спецтехніки</option>
                <option value="Замовлення комплектів ТО">Замовлення комплектів ТО</option>
                <option value="Замовлення запчастин">Замовлення запчастин</option>
                <option value="Діагностика та Сервіс Subsite">Діагностика та Сервіс Subsite</option>
                <option value="Оренда спецтехніки">Оренда спецтехніки</option>
                <option value="Консультація">Консультація</option>
              </select>
            </div>
          </div>

          {/* Row 5: Product Model & Budget */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div>
              <label style={labelStyle}>Модель / Артикул / Обладнання</label>
              <input
                type="text"
                placeholder="напр. Установка ГНБ JT10"
                value={formData.productModel}
                onChange={(e) => setFormData({ ...formData, productModel: e.target.value })}
                style={{ ...inputStyle, paddingLeft: '14px' }}
              />
            </div>

            <div>
              <label style={labelStyle}>Орієнтовний Бюджет / Вартість</label>
              <div style={{ position: 'relative' }}>
                <DollarSign size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#888' }} />
                <input
                  type="text"
                  placeholder="€45,000 або За прайсом"
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  style={inputStyle}
                />
              </div>
            </div>
          </div>

          {/* Row 6: Status */}
          <div>
            <label style={labelStyle}>Статус Опрацювання</label>
            <select
              value={formData.status}
              onChange={(e) => setFormData({ ...formData, status: e.target.value })}
              style={{ ...inputStyle, paddingLeft: '14px', cursor: 'pointer' }}
            >
              <option value="Новий">🔴 Новий (Потребує обробки)</option>
              <option value="В обробці">🟡 В обробці (Взято менеджер)</option>
              <option value="Узгоджено">🔵 Узгоджено (КП надіслано)</option>
              <option value="Завершено">🟢 Завершено (Угода укладена)</option>
              <option value="Скасовано">⚪ Скасовано</option>
            </select>
          </div>

          {/* Row 7: Notes */}
          <div>
            <label style={labelStyle}>Текст Звернення / Коментар Клієнта</label>
            <textarea
              rows={4}
              placeholder="Детальний опис потреб клієнта, примітки щодо термінів постачання..."
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              style={{
                width: '100%',
                backgroundColor: isDark ? '#141414' : '#F9F9FB',
                border: `1px solid ${isDark ? '#333333' : '#CCCCCC'}`,
                padding: '10px 14px',
                borderRadius: '6px',
                color: isDark ? '#FFFFFF' : '#000000',
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
            <CheckCircle size={18} />
            <span>{editingInquiry ? 'ЗБЕРЕГТИ ЗМІНИ' : 'ЗБЕРЕГТИ НОВИЙ ЗАПИТ'}</span>
          </button>
        </form>
      </div>
    </div>
  );
}
