import React, { useState } from 'react';
import {
  Users,
  Eye,
  TrendingUp,
  Globe,
  FileText,
  Clock,
  LogOut,
  CheckCircle,
  Phone,
  Mail,
  Activity,
  PlusCircle,
  Trash2,
  Sliders,
  Check
} from 'lucide-react';
import { useTranslation } from '../i18n/LanguageContext';
import { useTheme } from '../theme/ThemeContext';
import { initialAnalyticsData } from '../data/analyticsData';
import { useProducts } from '../context/ProductContext';
import AddProductModal from '../components/AddProductModal';

export default function AdminDashboardPage({ onLogout }) {
  const { language } = useTranslation();
  const { theme } = useTheme();
  const { products, updateProductTargeting, deleteProduct, visitorCountry, setVisitorCountry } = useProducts();

  const [data, setData] = useState(initialAnalyticsData);
  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'products' | 'inquiries'
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const isDark = theme === 'dark';

  const toggleInquiryStatus = (id) => {
    setData((prev) => ({
      ...prev,
      recentInquiries: prev.recentInquiries.map((inq) => {
        if (inq.id === id) {
          const nextStatus =
            inq.status === 'Новий'
              ? 'В обробці'
              : inq.status === 'В обробці'
              ? 'Завершено'
              : 'Новий';
          return { ...inq, status: nextStatus };
        }
        return inq;
      })
    }));
  };

  const maxVisits = Math.max(...data.dailyTraffic.map((d) => d.visits));

  return (
    <div style={{
      backgroundColor: isDark ? '#0A0A0A' : '#F4F5F7',
      color: isDark ? '#FFFFFF' : '#111111',
      minHeight: '90vh',
      paddingBottom: '80px',
      transition: 'background-color 0.3s ease, color 0.3s ease'
    }}>
      {/* Admin Header Banner */}
      <div style={{
        backgroundColor: isDark ? '#141414' : '#1E1E1E',
        color: '#FFFFFF',
        padding: '24px 0',
        borderBottom: '4px solid #FF6600',
        boxShadow: '0 4px 14px rgba(0,0,0,0.3)'
      }}>
        <div className="container" style={{
          display: 'flex',
          justify: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px'
        }}>
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              backgroundColor: '#FF6600',
              color: '#FFFFFF',
              fontWeight: 800,
              fontSize: '0.75rem',
              padding: '3px 10px',
              borderRadius: '3px',
              textTransform: 'uppercase',
              marginBottom: '6px'
            }}>
              <Activity size={13} />
              <span>ADMINISTRATOR CONTROL PANEL</span>
            </div>
            <h1 style={{ fontSize: '1.8rem', fontWeight: 900, textTransform: 'uppercase', margin: 0 }}>
              Ditch Witch Ukraine — Management & Analytics
            </h1>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <button
              onClick={() => setIsAddModalOpen(true)}
              className="btn-primary"
              style={{ padding: '8px 16px', fontSize: '0.82rem' }}
            >
              <PlusCircle size={16} />
              <span>{language === 'uk' ? 'ДОДАТИ ТОВАР' : 'ADD PRODUCT'}</span>
            </button>

            <button
              onClick={onLogout}
              className="btn-outline"
              style={{ padding: '8px 16px', fontSize: '0.82rem' }}
            >
              <LogOut size={15} />
              <span>{language === 'uk' ? 'ВИЙТИ' : 'LOGOUT'}</span>
            </button>
          </div>
        </div>
      </div>

      <div className="container" style={{ marginTop: '32px' }}>
        {/* Admin Visitor Geo Simulation Tool */}
        <div style={{
          backgroundColor: isDark ? '#1C1C1C' : '#FFFFFF',
          border: `1px solid ${isDark ? '#333333' : '#E0E0E0'}`,
          borderLeft: '5px solid #FF6600',
          borderRadius: '8px',
          padding: '16px 20px',
          marginBottom: '24px',
          display: 'flex',
          alignItems: 'center',
          justify: 'space-between',
          flexWrap: 'wrap',
          gap: '16px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Globe size={20} style={{ color: '#FF6600' }} />
            <div>
              <strong style={{ fontSize: '0.92rem', color: isDark ? '#FFF' : '#111' }}>
                {language === 'uk' ? 'Симулятор Країни Відвідувача (Geo-Targeting Access Control):' : 'Admin Visitor Country Simulator:'}
              </strong>
              <div style={{ fontSize: '0.78rem', color: '#888', marginTop: '2px' }}>
                {language === 'uk'
                  ? 'Тестування: як виглядає сайт для покупця з України, Польщі чи інших країн.'
                  : 'Simulate how customers from Ukraine, Poland, or other regions view the catalog.'}
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {[
              { code: 'UA', label: '🇺🇦 Україна (UA)' },
              { code: 'PL', label: '🇵🇱 Польща (PL)' },
              { code: 'UK', label: '🇬🇧 UK' },
              { code: 'ALL', label: '🌐 Всі Країни (All)' }
            ].map((c) => {
              const isActive = visitorCountry === c.code;
              return (
                <button
                  key={c.code}
                  onClick={() => setVisitorCountry(c.code)}
                  style={{
                    backgroundColor: isActive ? '#FF6600' : isDark ? '#282828' : '#F0F0F0',
                    color: isActive ? '#FFFFFF' : isDark ? '#CCC' : '#333',
                    border: `1px solid ${isActive ? '#FF6600' : isDark ? '#3A3A3A' : '#CCC'}`,
                    borderRadius: '16px',
                    padding: '5px 14px',
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

        {/* Tabs */}
        <div style={{
          display: 'flex',
          gap: '10px',
          marginBottom: '28px',
          borderBottom: `1px solid ${isDark ? '#2C2C2C' : '#E0E0E0'}`,
          paddingBottom: '12px'
        }}>
          <button
            onClick={() => setActiveTab('overview')}
            style={{
              backgroundColor: activeTab === 'overview' ? '#FF6600' : isDark ? '#1C1C1C' : '#FFFFFF',
              color: activeTab === 'overview' ? '#FFFFFF' : isDark ? '#CCCCCC' : '#444444',
              border: 'none',
              borderRadius: '6px',
              padding: '10px 20px',
              fontSize: '0.9rem',
              fontWeight: 800,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <TrendingUp size={16} />
            <span>{language === 'uk' ? 'Огляд Трафіку' : 'Traffic Overview'}</span>
          </button>

          <button
            onClick={() => setActiveTab('products')}
            style={{
              backgroundColor: activeTab === 'products' ? '#FF6600' : isDark ? '#1C1C1C' : '#FFFFFF',
              color: activeTab === 'products' ? '#FFFFFF' : isDark ? '#CCCCCC' : '#444444',
              border: 'none',
              borderRadius: '6px',
              padding: '10px 20px',
              fontSize: '0.9rem',
              fontWeight: 800,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <Sliders size={16} />
            <span>{language === 'uk' ? 'Управління Товарами та Гео-Видимістю' : 'Product & Geo-Targeting Management'}</span>
            <span style={{
              backgroundColor: '#FFFFFF',
              color: '#FF6600',
              borderRadius: '10px',
              fontSize: '0.72rem',
              fontWeight: 900,
              padding: '1px 6px',
              marginLeft: '4px'
            }}>
              {products.length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('inquiries')}
            style={{
              backgroundColor: activeTab === 'inquiries' ? '#FF6600' : isDark ? '#1C1C1C' : '#FFFFFF',
              color: activeTab === 'inquiries' ? '#FFFFFF' : isDark ? '#CCCCCC' : '#444444',
              border: 'none',
              borderRadius: '6px',
              padding: '10px 20px',
              fontSize: '0.9rem',
              fontWeight: 800,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <FileText size={16} />
            <span>{language === 'uk' ? 'Запити на Ціну' : 'Quote Inquiries'}</span>
            <span style={{
              backgroundColor: '#FFFFFF',
              color: '#FF6600',
              borderRadius: '10px',
              fontSize: '0.72rem',
              fontWeight: 900,
              padding: '1px 6px',
              marginLeft: '4px'
            }}>
              {data.recentInquiries.length}
            </span>
          </button>
        </div>

        {/* TAB 1: OVERVIEW & TRAFFIC STATS */}
        {activeTab === 'overview' && (
          <>
            {/* Top Stat Cards */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '20px',
              marginBottom: '32px'
            }}>
              <div style={{
                backgroundColor: isDark ? '#1A1A1A' : '#FFFFFF',
                borderRadius: '10px',
                padding: '20px',
                border: `1px solid ${isDark ? '#2C2C2C' : '#EAEAEA'}`
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#888', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase' }}>
                  <span>{language === 'uk' ? 'Відвідувачів Сьогодні' : 'Visitors Today'}</span>
                  <Users size={18} style={{ color: '#FF6600' }} />
                </div>
                <div style={{ fontSize: '2rem', fontWeight: 900, marginTop: '8px', color: isDark ? '#FFF' : '#000' }}>
                  {data.summary.totalVisitorsToday.toLocaleString()}
                </div>
                <div style={{ fontSize: '0.78rem', color: '#00C853', marginTop: '4px', fontWeight: 700 }}>
                  ↑ +14.2% {language === 'uk' ? 'ніж учора' : 'vs yesterday'}
                </div>
              </div>

              <div style={{
                backgroundColor: isDark ? '#1A1A1A' : '#FFFFFF',
                borderRadius: '10px',
                padding: '20px',
                border: `1px solid ${isDark ? '#2C2C2C' : '#EAEAEA'}`
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#888', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase' }}>
                  <span>{language === 'uk' ? 'Переглядів За Тиждень' : 'Weekly Pageviews'}</span>
                  <Eye size={18} style={{ color: '#FF6600' }} />
                </div>
                <div style={{ fontSize: '2rem', fontWeight: 900, marginTop: '8px', color: isDark ? '#FFF' : '#000' }}>
                  {data.summary.totalVisitorsWeek.toLocaleString()}
                </div>
                <div style={{ fontSize: '0.78rem', color: '#00C853', marginTop: '4px', fontWeight: 700 }}>
                  ↑ +8.7% {language === 'uk' ? 'цього тижня' : 'this week'}
                </div>
              </div>

              <div style={{
                backgroundColor: isDark ? '#1A1A1A' : '#FFFFFF',
                borderRadius: '10px',
                padding: '20px',
                border: `1px solid ${isDark ? '#2C2C2C' : '#EAEAEA'}`
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#888', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase' }}>
                  <span>{language === 'uk' ? 'Конверсія у Запити' : 'Inquiry Conv. Rate'}</span>
                  <TrendingUp size={18} style={{ color: '#FF6600' }} />
                </div>
                <div style={{ fontSize: '2rem', fontWeight: 900, marginTop: '8px', color: isDark ? '#FFF' : '#000' }}>
                  {data.summary.conversionRate}
                </div>
                <div style={{ fontSize: '0.78rem', color: '#00C853', marginTop: '4px', fontWeight: 700 }}>
                  ↑ +1.2% {language === 'uk' ? 'оптимізація' : 'optimized'}
                </div>
              </div>

              <div style={{
                backgroundColor: isDark ? '#1A1A1A' : '#FFFFFF',
                borderRadius: '10px',
                padding: '20px',
                border: `1px solid ${isDark ? '#2C2C2C' : '#EAEAEA'}`
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#888', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase' }}>
                  <span>{language === 'uk' ? 'Отримано Запитів' : 'Quote Inquiries'}</span>
                  <FileText size={18} style={{ color: '#FF6600' }} />
                </div>
                <div style={{ fontSize: '2rem', fontWeight: 900, marginTop: '8px', color: isDark ? '#FFF' : '#000' }}>
                  {data.summary.totalInquiries}
                </div>
                <div style={{ fontSize: '0.78rem', color: '#FF6600', marginTop: '4px', fontWeight: 700 }}>
                  {language === 'uk' ? '18 комерційних замовлень' : '18 active leads'}
                </div>
              </div>
            </div>

            {/* Daily Traffic & Geo Chart */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '30px',
              marginBottom: '32px'
            }}>
              <div style={{
                backgroundColor: isDark ? '#1A1A1A' : '#FFFFFF',
                borderRadius: '10px',
                padding: '24px',
                border: `1px solid ${isDark ? '#2C2C2C' : '#EAEAEA'}`
              }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '20px', color: '#FF6600' }}>
                  {language === 'uk' ? 'Динаміка Відвідувань За Тиждень' : 'Daily Visitor Traffic Trends'}
                </h3>
                <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', height: '220px', paddingTop: '20px', gap: '12px' }}>
                  {data.dailyTraffic.map((item, idx) => {
                    const heightPercent = Math.round((item.visits / maxVisits) * 100);
                    return (
                      <div key={idx} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', justifyContent: 'flex-end' }}>
                        <span style={{ fontSize: '0.72rem', color: '#888', marginBottom: '6px', fontWeight: 700 }}>{item.visits}</span>
                        <div style={{
                          width: '100%',
                          maxWidth: '36px',
                          height: `${heightPercent}%`,
                          backgroundColor: '#FF6600',
                          borderRadius: '4px 4px 0 0'
                        }} />
                        <span style={{ fontSize: '0.8rem', fontWeight: 800, marginTop: '8px', color: isDark ? '#FFF' : '#222' }}>{item.day}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div style={{
                backgroundColor: isDark ? '#1A1A1A' : '#FFFFFF',
                borderRadius: '10px',
                padding: '24px',
                border: `1px solid ${isDark ? '#2C2C2C' : '#EAEAEA'}`
              }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '20px', color: '#FF6600' }}>
                  {language === 'uk' ? 'Географія Трафіку' : 'Traffic by Country'}
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {data.geoTraffic.map((geo, idx) => (
                    <div key={idx}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem', fontWeight: 700, marginBottom: '4px' }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <span>{geo.flag}</span>
                          <span>{geo.country}</span>
                        </span>
                        <span>{geo.percentage} ({geo.visitors.toLocaleString()})</span>
                      </div>
                      <div style={{ width: '100%', height: '8px', backgroundColor: isDark ? '#2B2B2B' : '#E0E0E0', borderRadius: '4px' }}>
                        <div style={{ width: geo.percentage, height: '100%', backgroundColor: idx === 0 ? '#FF6600' : '#444444', borderRadius: '4px' }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}

        {/* TAB 2: PRODUCT MANAGEMENT & GEO-TARGETING RESTRICTIONS */}
        {activeTab === 'products' && (
          <div style={{
            backgroundColor: isDark ? '#1A1A1A' : '#FFFFFF',
            borderRadius: '10px',
            padding: '24px',
            border: `1px solid ${isDark ? '#2C2C2C' : '#EAEAEA'}`
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '16px' }}>
              <div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 900, textTransform: 'uppercase', color: '#FF6600' }}>
                  {language === 'uk' ? 'Каталог Техніки та Налаштування Гео-Обмежень' : 'Product Catalog & Country Visibility Controls'}
                </h3>
                <p style={{ fontSize: '0.85rem', color: isDark ? '#AAA' : '#666', marginTop: '4px' }}>
                  {language === 'uk' ? 'Додавайте нові моделі та налаштовуйте видимість продукції залежно від країни відвідувача.' : 'Manage catalog items and restrict product visibility to specific countries.'}
                </p>
              </div>

              <button
                onClick={() => setIsAddModalOpen(true)}
                className="btn-primary"
              >
                <PlusCircle size={16} />
                <span>{language === 'uk' ? 'ДОДАТИ НОВИЙ ТОВАР' : 'ADD NEW PRODUCT'}</span>
              </button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
              {products.map((prod) => {
                const titleText = prod.title[language] || prod.title.uk || prod.title.en;
                return (
                  <div
                    key={prod.id}
                    style={{
                      backgroundColor: isDark ? '#222222' : '#F9F9FB',
                      borderRadius: '8px',
                      padding: '20px',
                      border: `1px solid ${isDark ? '#333333' : '#E5E5E5'}`,
                      display: 'flex',
                      flexDirection: 'column',
                      justify: 'space-between'
                    }}
                  >
                    <div>
                      <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '14px' }}>
                        <div style={{
                          backgroundColor: isDark ? '#141414' : '#FFFFFF',
                          padding: '10px',
                          borderRadius: '6px',
                          width: '70px',
                          height: '60px',
                          display: 'flex',
                          alignItems: 'center',
                          justify: 'center'
                        }}>
                          <img src={prod.image} alt={titleText} style={{ maxHeight: '48px', maxWidth: '100%', objectFit: 'contain' }} />
                        </div>
                        <div>
                          <span style={{ fontSize: '0.72rem', color: '#FF6600', fontWeight: 800, textTransform: 'uppercase' }}>
                            {prod.category}
                          </span>
                          <h4 style={{ fontSize: '1rem', fontWeight: 800, margin: 0, color: isDark ? '#FFF' : '#111' }}>
                            {titleText}
                          </h4>
                        </div>
                      </div>

                      {/* Geo Visibility Controls */}
                      <div style={{
                        backgroundColor: isDark ? '#181818' : '#FFFFFF',
                        padding: '12px',
                        borderRadius: '6px',
                        marginBottom: '16px',
                        border: `1px solid ${isDark ? '#2C2C2C' : '#EAEAEA'}`
                      }}>
                        <div style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', color: '#FF6600', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                          <Globe size={13} />
                          <span>{language === 'uk' ? 'Дозволені Країни (Доступ):' : 'Allowed Countries (Access):'}</span>
                        </div>

                        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                          {[
                            { code: 'ALL', label: '🌐 Всі' },
                            { code: 'UA', label: '🇺🇦 UA' },
                            { code: 'PL', label: '🇵🇱 PL' },
                            { code: 'UK', label: '🇬🇧 UK' }
                          ].map((cItem) => {
                            const isAllowed = prod.allowedCountries.includes(cItem.code);
                            return (
                              <button
                                key={cItem.code}
                                onClick={() => {
                                  let newAllowed = [...prod.allowedCountries];
                                  if (cItem.code === 'ALL') {
                                    newAllowed = ['ALL'];
                                  } else {
                                    newAllowed = newAllowed.filter((x) => x !== 'ALL');
                                    if (newAllowed.includes(cItem.code)) {
                                      newAllowed = newAllowed.filter((x) => x !== cItem.code);
                                    } else {
                                      newAllowed.push(cItem.code);
                                    }
                                    if (newAllowed.length === 0) newAllowed = ['ALL'];
                                  }
                                  updateProductTargeting(prod.id, newAllowed);
                                }}
                                style={{
                                  backgroundColor: isAllowed ? '#FF6600' : isDark ? '#2B2B2B' : '#EAEAEA',
                                  color: isAllowed ? '#FFFFFF' : isDark ? '#AAA' : '#666',
                                  border: 'none',
                                  borderRadius: '12px',
                                  padding: '3px 9px',
                                  fontSize: '0.75rem',
                                  fontWeight: 800,
                                  cursor: 'pointer'
                                }}
                              >
                                {cItem.label}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: `1px solid ${isDark ? '#333' : '#E5E5E5'}`, paddingTop: '12px' }}>
                      <span style={{ fontSize: '0.75rem', color: '#888' }}>
                        ID: {prod.id}
                      </span>
                      <button
                        onClick={() => deleteProduct(prod.id)}
                        style={{
                          backgroundColor: 'rgba(244, 67, 54, 0.15)',
                          color: '#F44336',
                          border: 'none',
                          borderRadius: '4px',
                          padding: '6px 10px',
                          fontSize: '0.78rem',
                          fontWeight: 700,
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px'
                        }}
                      >
                        <Trash2 size={13} />
                        <span>Видалити</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 3: INQUIRIES */}
        {activeTab === 'inquiries' && (
          <div style={{
            backgroundColor: isDark ? '#1A1A1A' : '#FFFFFF',
            borderRadius: '10px',
            padding: '24px',
            border: `1px solid ${isDark ? '#2C2C2C' : '#EAEAEA'}`
          }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 900, textTransform: 'uppercase', marginBottom: '20px', color: '#FF6600' }}>
              {language === 'uk' ? 'Журнал Комерційних Запитів Клієнтів' : 'Customer Quote Inquiries Log'}
            </h3>

            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.88rem' }}>
                <thead>
                  <tr style={{ backgroundColor: isDark ? '#262626' : '#F0F2F5', color: isDark ? '#FFF' : '#000', borderBottom: '2px solid #FF6600' }}>
                    <th style={{ padding: '12px' }}>ID / Дата</th>
                    <th style={{ padding: '12px' }}>Клієнт / Компанія</th>
                    <th style={{ padding: '12px' }}>Контактуйте</th>
                    <th style={{ padding: '12px' }}>Запитувана Машина</th>
                    <th style={{ padding: '12px' }}>Статус</th>
                    <th style={{ padding: '12px' }}>Дія</th>
                  </tr>
                </thead>
                <tbody>
                  {data.recentInquiries.map((inq) => (
                    <tr key={inq.id} style={{ borderBottom: `1px solid ${isDark ? '#2C2C2C' : '#EEEEEE'}` }}>
                      <td style={{ padding: '14px 12px' }}>
                        <strong style={{ color: '#FF6600' }}>{inq.id}</strong><br />
                        <span style={{ fontSize: '0.78rem', color: '#888' }}>{inq.date}</span>
                      </td>
                      <td style={{ padding: '14px 12px' }}>
                        <strong>{inq.customerName}</strong><br />
                        <span style={{ fontSize: '0.8rem', color: '#888' }}>{inq.company}</span>
                      </td>
                      <td style={{ padding: '14px 12px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <Phone size={13} style={{ color: '#FF6600' }} />
                          <span>{inq.phone}</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', color: '#888' }}>
                          <Mail size={13} />
                          <span>{inq.email}</span>
                        </div>
                      </td>
                      <td style={{ padding: '14px 12px', fontWeight: 700 }}>
                        {inq.machine}
                      </td>
                      <td style={{ padding: '14px 12px' }}>
                        <span style={{
                          backgroundColor:
                            inq.status === 'Новий'
                              ? 'rgba(255, 102, 0, 0.15)'
                              : inq.status === 'В обробці'
                              ? 'rgba(33, 150, 243, 0.15)'
                              : 'rgba(76, 175, 80, 0.15)',
                          color:
                            inq.status === 'Новий'
                              ? '#FF6600'
                              : inq.status === 'В обробці'
                              ? '#2196F3'
                              : '#4CAF50',
                          padding: '4px 10px',
                          borderRadius: '12px',
                          fontWeight: 800,
                          fontSize: '0.78rem'
                        }}>
                          {inq.status}
                        </span>
                      </td>
                      <td style={{ padding: '14px 12px' }}>
                        <button
                          onClick={() => toggleInquiryStatus(inq.id)}
                          style={{
                            backgroundColor: isDark ? '#2C2C2C' : '#E8E8E8',
                            color: isDark ? '#FFF' : '#000',
                            border: 'none',
                            borderRadius: '4px',
                            padding: '6px 10px',
                            fontSize: '0.78rem',
                            fontWeight: 700,
                            cursor: 'pointer'
                          }}
                        >
                          Змінити статус
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* Add New Product Modal */}
      <AddProductModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
      />
    </div>
  );
}
