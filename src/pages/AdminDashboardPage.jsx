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
  Check,
  Upload,
  Download,
  FolderPlus,
  Package,
  Wrench,
  Edit3,
  RotateCcw,
  Newspaper,
  X,
  UserCheck,
  Briefcase,
  Award,
  PhoneCall
} from 'lucide-react';
import { useTranslation } from '../i18n/LanguageContext';
import { useTheme } from '../theme/ThemeContext';
import { initialAnalyticsData, initialCustomerDossiers } from '../data/analyticsData';
import { useProducts } from '../context/ProductContext';
import { useDocuments } from '../context/DocumentContext';
import { useParts } from '../context/PartsContext';
import { useNews } from '../context/NewsContext';
import AddProductModal from '../components/AddProductModal';
import AddPartModal from '../components/AddPartModal';
import AddNewsModal from '../components/AddNewsModal';
import AddInquiryModal from '../components/AddInquiryModal';
import AddCustomerDossierModal from '../components/AddCustomerDossierModal';

export default function AdminDashboardPage({ onLogout }) {
  const { language } = useTranslation();
  const { theme } = useTheme();
  const { products, updateProductTargeting, deleteProduct, resetToDefaultProducts, visitorCountry, setVisitorCountry } = useProducts();
  const { documents, addDocument, deleteDocument } = useDocuments();
  const { parts, deletePartOrKit, resetToDefaultParts } = useParts();
  const { newsList, deleteNewsArticle, resetToDefaultNews } = useNews();

  const [data, setData] = useState(initialAnalyticsData);
  const [activeTab, setActiveTab] = useState('inquiries'); // 'inquiries' | 'dossiers' | 'overview' | 'products' | 'parts' | 'news' | 'documents'
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [productSearch, setProductSearch] = useState('');
  const [productCategoryFilter, setProductCategoryFilter] = useState('ALL');

  // Spare Parts Admin State
  const [isAddPartModalOpen, setIsAddPartModalOpen] = useState(false);
  const [editingPart, setEditingPart] = useState(null);

  // News Admin State
  const [isAddNewsModalOpen, setIsAddNewsModalOpen] = useState(false);
  const [editingNews, setEditingNews] = useState(null);

  // Commercial Inquiries Log State & Persistence
  const [inquiries, setInquiries] = useState(() => {
    const saved = localStorage.getItem('ditchwitch_inquiries');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error(e);
      }
    }
    return initialAnalyticsData.recentInquiries;
  });

  const [isAddInquiryModalOpen, setIsAddInquiryModalOpen] = useState(false);
  const [editingInquiry, setEditingInquiry] = useState(null);
  const [viewInquiry, setViewInquiry] = useState(null);
  const [inquirySearch, setInquirySearch] = useState('');
  const [inquiryStatusFilter, setInquiryStatusFilter] = useState('ALL');

  React.useEffect(() => {
    localStorage.setItem('ditchwitch_inquiries', JSON.stringify(inquiries));
  }, [inquiries]);

  const exportInquiriesToCSV = () => {
    const headers = ['ID', 'Date', 'Customer Name', 'Company', 'Phone', 'Email', 'City', 'Inquiry Type', 'Product/Model', 'Budget', 'Status', 'Notes'];
    const rows = inquiries.map((i) => [
      i.id,
      i.date,
      `"${(i.customerName || '').replace(/"/g, '""')}"`,
      `"${(i.company || '').replace(/"/g, '""')}"`,
      `"${(i.phone || '').replace(/"/g, '""')}"`,
      `"${(i.email || '').replace(/"/g, '""')}"`,
      `"${(i.city || '').replace(/"/g, '""')}"`,
      `"${(i.inquiryType || '').replace(/"/g, '""')}"`,
      `"${(i.productModel || i.machine || '').replace(/"/g, '""')}"`,
      `"${(i.budget || '').replace(/"/g, '""')}"`,
      `"${(i.status || '').replace(/"/g, '""')}"`,
      `"${(i.notes || '').replace(/"/g, '""')}"`
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,\uFEFF' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `DitchWitch_Commercial_Log_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Customer Dossiers State & Persistence (CRM)
  const [customerDossiers, setCustomerDossiers] = useState(() => {
    const saved = localStorage.getItem('ditchwitch_customer_dossiers');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error(e);
      }
    }
    return initialCustomerDossiers;
  });

  const [isAddDossierModalOpen, setIsAddDossierModalOpen] = useState(false);
  const [editingDossier, setEditingDossier] = useState(null);
  const [viewDossierModal, setViewDossierModal] = useState(null);
  const [dossierSearch, setDossierSearch] = useState('');
  const [dossierTypeFilter, setDossierTypeFilter] = useState('ALL');

  React.useEffect(() => {
    localStorage.setItem('ditchwitch_customer_dossiers', JSON.stringify(customerDossiers));
  }, [customerDossiers]);

  const saveDossier = (dossierData) => {
    setCustomerDossiers((prev) => {
      const exists = prev.some((d) => d.id === dossierData.id);
      if (exists) {
        return prev.map((d) => (d.id === dossierData.id ? dossierData : d));
      } else {
        return [dossierData, ...prev];
      }
    });
  };

  const deleteDossier = (id) => {
    if (window.confirm(language === 'uk' ? 'Ви дійсно бажаєте видалити це досьє клієнта?' : 'Are you sure you want to delete this customer dossier?')) {
      setCustomerDossiers((prev) => prev.filter((d) => d.id !== id));
    }
  };

  const exportDossiersToCSV = () => {
    const headers = ['ID', 'Name', 'Company', 'EDRPOU/VAT', 'Phone', 'Email', 'City', 'Region', 'Category', 'Fleet', 'Total Deals Value', 'Notes', 'Created Date'];
    const rows = customerDossiers.map((c) => [
      c.id,
      `"${(c.name || '').replace(/"/g, '""')}"`,
      `"${(c.company || '').replace(/"/g, '""')}"`,
      `"${(c.taxId || '').replace(/"/g, '""')}"`,
      `"${(c.phone || '').replace(/"/g, '""')}"`,
      `"${(c.email || '').replace(/"/g, '""')}"`,
      `"${(c.city || '').replace(/"/g, '""')}"`,
      `"${(c.region || '').replace(/"/g, '""')}"`,
      `"${(c.clientType || '').replace(/"/g, '""')}"`,
      `"${(c.fleet || '').replace(/"/g, '""')}"`,
      `"${(c.totalDealsValue || '').replace(/"/g, '""')}"`,
      `"${(c.notes || '').replace(/"/g, '""')}"`,
      c.createdAt || ''
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,\uFEFF' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `DitchWich_Customer_Dossiers_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const openCreateInquiryModal = () => {
    setEditingInquiry(null);
    setIsAddInquiryModalOpen(true);
  };

  const openEditInquiryModal = (inq) => {
    setEditingInquiry(inq);
    setIsAddInquiryModalOpen(true);
  };

  const saveInquiry = (inquiryData) => {
    setInquiries((prev) => {
      const exists = prev.some((item) => item.id === inquiryData.id);
      if (exists) {
        return prev.map((item) => (item.id === inquiryData.id ? inquiryData : item));
      } else {
        return [inquiryData, ...prev];
      }
    });
  };

  const deleteInquiry = (id) => {
    if (window.confirm(language === 'uk' ? 'Ви дійсно бажаєте видалити цей запит?' : 'Are you sure you want to delete this inquiry?')) {
      setInquiries((prev) => prev.filter((item) => item.id !== id));
    }
  };

  const resetToDefaultInquiries = () => {
    setInquiries(initialAnalyticsData.recentInquiries);
    localStorage.removeItem('ditchwitch_inquiries');
  };

  const cycleInquiryStatus = (id) => {
    const statuses = ['Новий', 'В обробці', 'Узгоджено', 'Завершено', 'Скасовано'];
    setInquiries((prev) =>
      prev.map((inq) => {
        if (inq.id === id) {
          const currentIndex = statuses.indexOf(inq.status);
          const nextStatus = statuses[(currentIndex + 1) % statuses.length];
          return { ...inq, status: nextStatus };
        }
        return inq;
      })
    );
  };

  const openCreateProductModal = () => {
    setEditingProduct(null);
    setIsAddModalOpen(true);
  };

  const openEditProductModal = (prod) => {
    setEditingProduct(prod);
    setIsAddModalOpen(true);
  };

  const confirmDeleteProduct = (id) => {
    if (window.confirm(language === 'uk' ? 'Ви дійсно бажаєте видалити цей товар з каталогу?' : 'Are you sure you want to delete this product?')) {
      deleteProduct(id);
    }
  };

  // New Document Upload State
  const [newDocTitle, setNewDocTitle] = useState('');
  const [newDocCategory, setNewDocCategory] = useState('drilling');
  const [newDocFormat, setNewDocFormat] = useState('DOCX');
  const [newDocDescription, setNewDocDescription] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const isDark = theme === 'dark';

  const themeColors = {
    bg: isDark ? '#0B0F19' : '#F8FAFC',
    cardBg: isDark ? '#1E293B' : '#FFFFFF',
    cardBorder: isDark ? '#334155' : '#E2E8F0',
    headerBg: isDark ? '#0F172A' : '#1E293B',
    textPrimary: isDark ? '#F8FAFC' : '#0F172A',
    textSecondary: isDark ? '#CBD5E1' : '#334155',
    textMuted: isDark ? '#94A3B8' : '#64748B',
    accent: isDark ? '#F59E0B' : '#D97706',
    accentBg: isDark ? 'rgba(245, 158, 11, 0.18)' : '#FEF3C7',
    accentBorder: isDark ? 'rgba(245, 158, 11, 0.35)' : '#FDE68A',
    accentText: isDark ? '#FCD34D' : '#92400E',
    tableHeaderBg: isDark ? '#0F172A' : '#F1F5F9',
    tableRowAlt: isDark ? 'rgba(255, 255, 255, 0.02)' : '#F9FAFB',
    tableBorder: isDark ? '#334155' : '#F1F5F9',
    inputBg: isDark ? '#0F172A' : '#FFFFFF',
    inputBorder: isDark ? '#334155' : '#CBD5E1'
  };

  const categoryNames = {
    drilling: { uk: 'Бурові Установки ГНБ', en: 'HDD Directional Drills', pl: 'Wiertnice Sterowane HDB' },
    locating: { uk: 'Локаційні Системи Subsite', en: 'Subsite Electronics Locating', pl: 'Systemy Lokalizacji Subsite' },
    tools: { uk: 'Буровий Інструмент та Штанги', en: 'Drilling Tools & Pipes', pl: 'Narzędzia i Żerdzie' },
    fluids: { uk: 'Бурові Розчини та Бентоніт', en: 'Drilling Fluids & Bentonite', pl: 'Płuczki i Bentonit' },
    guides: { uk: 'Гайди та Порівняння', en: 'Guides & Comparisons', pl: 'Poradniki' }
  };

  const handleDocumentUpload = (e) => {
    e.preventDefault();
    if (!newDocTitle.trim()) return;

    let fileUrl = '/documents/21 УкрBroszura Порівняння бурових машин укр DW HDD v.11.2015.docx';
    let fileSize = '2.4 MB';

    if (selectedFile) {
      fileUrl = URL.createObjectURL(selectedFile);
      fileSize = `${(selectedFile.size / (1024 * 1024)).toFixed(1)} MB`;
      const ext = selectedFile.name.split('.').pop().toUpperCase();
      if (ext) setNewDocFormat(ext);
    }

    const newDoc = {
      id: `doc-custom-${Date.now()}`,
      category: newDocCategory,
      categoryName: categoryNames[newDocCategory] || categoryNames.drilling,
      file: fileUrl,
      size: fileSize,
      format: newDocFormat,
      title: { uk: newDocTitle, en: newDocTitle, pl: newDocTitle },
      description: { uk: newDocDescription || newDocTitle, en: newDocDescription || newDocTitle, pl: newDocDescription || newDocTitle }
    };

    addDocument(newDoc);
    setNewDocTitle('');
    setNewDocDescription('');
    setSelectedFile(null);
  };

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

  const openEditPartModal = (part) => {
    setEditingPart(part);
    setIsAddPartModalOpen(true);
  };

  const openCreatePartModal = () => {
    setEditingPart(null);
    setIsAddPartModalOpen(true);
  };

  const openEditNewsModal = (article) => {
    setEditingNews(article);
    setIsAddNewsModalOpen(true);
  };

  const openCreateNewsModal = () => {
    setEditingNews(null);
    setIsAddNewsModalOpen(true);
  };

  return (
    <div style={{
      backgroundColor: themeColors.bg,
      color: themeColors.textPrimary,
      minHeight: '90vh',
      paddingBottom: '60px',
      transition: 'background-color 0.3s ease, color 0.3s ease'
    }}>
      {/* Top Header */}
      <div style={{
        backgroundColor: themeColors.headerBg,
        color: '#FFFFFF',
        padding: '24px 0',
        borderBottom: `4px solid ${themeColors.accent}`,
        boxShadow: '0 4px 14px rgba(0,0,0,0.2)'
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
              backgroundColor: 'rgba(245, 158, 11, 0.15)',
              color: '#FCD34D',
              border: '1px solid rgba(245, 158, 11, 0.3)',
              fontWeight: 800,
              fontSize: '0.75rem',
              padding: '4px 10px',
              borderRadius: '4px',
              textTransform: 'uppercase',
              marginBottom: '6px'
            }}>
              <Activity size={13} />
              <span>ADMINISTRATOR CONTROL PANEL</span>
            </div>
            <h1 style={{ fontSize: '1.8rem', fontWeight: 900, textTransform: 'uppercase', margin: 0, color: '#FFFFFF' }}>
              Ditch Witch Ukraine — Management & Analytics
            </h1>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
            <button
              onClick={openCreateNewsModal}
              style={{
                padding: '8px 14px',
                fontSize: '0.8rem',
                backgroundColor: 'rgba(59, 130, 246, 0.18)',
                color: '#93C5FD',
                border: '1px solid rgba(59, 130, 246, 0.35)',
                borderRadius: '6px',
                fontWeight: 800,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                transition: 'all 0.2s ease'
              }}
            >
              <Newspaper size={15} />
              <span>+ ОПУБЛІКУВАТИ НОВИНУ</span>
            </button>

            <button
              onClick={openCreatePartModal}
              style={{
                padding: '8px 14px',
                fontSize: '0.8rem',
                backgroundColor: 'rgba(34, 197, 94, 0.18)',
                color: '#86EFAC',
                border: '1px solid rgba(34, 197, 94, 0.35)',
                borderRadius: '6px',
                fontWeight: 800,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                transition: 'all 0.2s ease'
              }}
            >
              <Package size={15} />
              <span>+ ДОДАТИ ЗАПЧАСТИНУ</span>
            </button>

            <button
              onClick={() => setIsAddModalOpen(true)}
              style={{
                padding: '8px 14px',
                fontSize: '0.8rem',
                backgroundColor: 'rgba(245, 158, 11, 0.18)',
                color: '#FCD34D',
                border: '1px solid rgba(245, 158, 11, 0.35)',
                borderRadius: '6px',
                fontWeight: 800,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                transition: 'all 0.2s ease'
              }}
            >
              <PlusCircle size={15} />
              <span>{language === 'uk' ? 'ДОДАТИ ТОВАР' : 'ADD PRODUCT'}</span>
            </button>

            <button
              onClick={onLogout}
              style={{
                padding: '8px 14px',
                fontSize: '0.8rem',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                color: '#E2E8F0',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '6px',
                fontWeight: 800,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                transition: 'all 0.2s ease'
              }}
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
          backgroundColor: themeColors.cardBg,
          border: `1px solid ${themeColors.cardBorder}`,
          borderLeft: `5px solid ${themeColors.accent}`,
          borderRadius: '10px',
          padding: '16px 20px',
          marginBottom: '24px',
          display: 'flex',
          alignItems: 'center',
          justify: 'space-between',
          flexWrap: 'wrap',
          gap: '16px',
          boxShadow: isDark ? '0 4px 12px rgba(0,0,0,0.2)' : '0 2px 8px rgba(0,0,0,0.03)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Globe size={20} style={{ color: themeColors.accent }} />
            <div>
              <strong style={{ fontSize: '0.92rem', color: themeColors.textPrimary }}>
                {language === 'uk' ? 'Симулятор Країни Відвідувача (Geo-Targeting Access Control):' : 'Admin Visitor Country Simulator:'}
              </strong>
              <div style={{ fontSize: '0.78rem', color: themeColors.textMuted, marginTop: '2px' }}>
                {language === 'uk'
                  ? 'Тестування: як виглядає сайт для покупця з України, Польщі чи інших країн.'
                  : 'Simulate how customers from Ukraine, Poland, or other regions view the catalog.'}
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '8px' }}>
            {[
              { code: 'UA', label: '🇺🇦 Україна (UA)' },
              { code: 'PL', label: '🇵🇱 Польща (PL)' },
              { code: 'ALL', label: '🌐 Всі країни (ALL)' }
            ].map((c) => {
              const active = visitorCountry === c.code;
              return (
                <button
                  key={c.code}
                  onClick={() => setVisitorCountry(c.code)}
                  style={{
                    backgroundColor: active ? themeColors.accentBg : isDark ? '#0F172A' : '#F1F5F9',
                    color: active ? themeColors.accentText : themeColors.textSecondary,
                    border: active ? `1px solid ${themeColors.accentBorder}` : `1px solid ${themeColors.cardBorder}`,
                    borderRadius: '6px',
                    padding: '6px 14px',
                    fontSize: '0.8rem',
                    fontWeight: 800,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {c.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Navigation Tabs */}
        <div style={{
          display: 'flex',
          gap: '10px',
          marginBottom: '28px',
          borderBottom: `1px solid ${themeColors.cardBorder}`,
          paddingBottom: '12px',
          overflowX: 'auto'
        }}>
          {[
            { id: 'inquiries', icon: Clock, uk: 'Журнал комерційних запитів', en: 'Commercial Inquiries Log' },
            { id: 'dossiers', icon: UserCheck, uk: 'База Клієнтів & Досьє (CRM)', en: 'Client Dossiers & CRM' },
            { id: 'overview', icon: TrendingUp, uk: 'Огляд Трафіку', en: 'Traffic Overview' },
            { id: 'products', icon: Sliders, uk: 'Каталог Продукції', en: 'Product Catalog', pl: 'Katalog Produktów' },
            { id: 'parts', icon: Package, uk: 'Запчастини та Комплекти ТО', en: 'Spare Parts & Kits' },
            { id: 'news', icon: Newspaper, uk: 'Новини та Прес-релізи', en: 'News & Articles' },
            { id: 'documents', icon: FileText, uk: 'Центр Документації', en: 'Documentation Center' }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  backgroundColor: isActive ? themeColors.accentBg : themeColors.cardBg,
                  color: isActive ? themeColors.accentText : themeColors.textMuted,
                  border: isActive ? `1px solid ${themeColors.accentBorder}` : `1px solid ${themeColors.cardBorder}`,
                  borderRadius: '8px',
                  padding: '10px 18px',
                  fontSize: '0.88rem',
                  fontWeight: isActive ? 900 : 700,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  whiteSpace: 'nowrap',
                  boxShadow: isActive ? '0 2px 8px rgba(0, 0, 0, 0.05)' : 'none',
                  transition: 'all 0.2s ease'
                }}
              >
                <Icon size={16} />
                <span>{language === 'uk' ? tab.uk : tab.en}</span>
              </button>
            );
          })}
        </div>

        {/* TAB 1: OVERVIEW & METRICS */}
        {activeTab === 'overview' && (
          <div>
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
                border: `1px solid ${isDark ? '#2E2E2E' : '#E2E8F0'}`,
                boxShadow: isDark ? '0 4px 12px rgba(0,0,0,0.3)' : '0 4px 12px rgba(0,0,0,0.05)'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#888', marginBottom: '10px' }}>
                  <span style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase' }}>Перегляди Сторінок</span>
                  <Eye size={18} style={{ color: '#FF6600' }} />
                </div>
                <div style={{ fontSize: '1.8rem', fontWeight: 900 }}>
                  {(data?.summary?.totalPageViews || data?.pageViewsThisMonth || 84910).toLocaleString()}
                </div>
                <div style={{ fontSize: '0.78rem', color: '#22C55E', marginTop: '6px', fontWeight: 700 }}>+18.4% цього місяця</div>
              </div>

              <div style={{
                backgroundColor: isDark ? '#1A1A1A' : '#FFFFFF',
                borderRadius: '10px',
                padding: '20px',
                border: `1px solid ${isDark ? '#2E2E2E' : '#E2E8F0'}`,
                boxShadow: isDark ? '0 4px 12px rgba(0,0,0,0.3)' : '0 4px 12px rgba(0,0,0,0.05)'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#888', marginBottom: '10px' }}>
                  <span style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase' }}>Унікальні Відвідувачі</span>
                  <Users size={18} style={{ color: '#FF6600' }} />
                </div>
                <div style={{ fontSize: '1.8rem', fontWeight: 900 }}>
                  {(data?.summary?.totalVisitorsMonth || data?.uniqueVisitorsThisMonth || 34520).toLocaleString()}
                </div>
                <div style={{ fontSize: '0.78rem', color: '#22C55E', marginTop: '6px', fontWeight: 700 }}>+12.1% нових покупців</div>
              </div>

              <div style={{
                backgroundColor: isDark ? '#1A1A1A' : '#FFFFFF',
                borderRadius: '10px',
                padding: '20px',
                border: `1px solid ${isDark ? '#2E2E2E' : '#E2E8F0'}`,
                boxShadow: isDark ? '0 4px 12px rgba(0,0,0,0.3)' : '0 4px 12px rgba(0,0,0,0.05)'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#888', marginBottom: '10px' }}>
                  <span style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase' }}>Запити на Продукти</span>
                  <Phone size={18} style={{ color: '#FF6600' }} />
                </div>
                <div style={{ fontSize: '1.8rem', fontWeight: 900 }}>
                  {data?.summary?.totalInquiries || data?.totalInquiries || 18}
                </div>
                <div style={{ fontSize: '0.78rem', color: '#FF6600', marginTop: '6px', fontWeight: 700 }}>3 нових ліди сьогодні</div>
              </div>
            </div>
          </div>
        )}

        {/* TAB: SPARE PARTS & KITS MANAGEMENT */}
        {activeTab === 'parts' && (
          <div>
            <div style={{
              display: 'flex',
              justify: 'space-between',
              alignItems: 'center',
              marginBottom: '24px',
              flexWrap: 'wrap',
              gap: '16px'
            }}>
              <div>
                <h2 style={{ fontSize: '1.4rem', fontWeight: 900, textTransform: 'uppercase', margin: 0 }}>
                  Управління Запчастинами та Комплектами ТО
                </h2>
                <p style={{ fontSize: '0.88rem', color: '#888', marginTop: '4px' }}>
                  Додавайте, редагуйте та керуйте видатковими деталями і комплектами планового обслуговування.
                </p>
              </div>

              <div style={{ display: 'flex', gap: '12px' }}>
                <button
                  onClick={resetToDefaultParts}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    backgroundColor: isDark ? '#222' : '#E2E8F0',
                    color: isDark ? '#CCC' : '#333',
                    border: 'none',
                    borderRadius: '6px',
                    padding: '10px 16px',
                    fontSize: '0.85rem',
                    fontWeight: 800,
                    cursor: 'pointer'
                  }}
                >
                  <RotateCcw size={15} />
                  <span>Сновити Початкові Дані</span>
                </button>

                <button
                  onClick={openCreatePartModal}
                  style={{
                    padding: '10px 18px',
                    fontSize: '0.85rem',
                    backgroundColor: 'rgba(34, 197, 94, 0.15)',
                    color: '#86EFAC',
                    border: '1px solid rgba(34, 197, 94, 0.35)',
                    borderRadius: '6px',
                    fontWeight: 800,
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                >
                  <Package size={16} />
                  <span>+ Додати Деталь / Комплект</span>
                </button>
              </div>
            </div>

            {/* Spare Parts Table */}
            <div style={{
              backgroundColor: isDark ? '#1C1C1C' : '#FFFFFF',
              borderRadius: '12px',
              border: `1px solid ${isDark ? '#333333' : '#E2E8F0'}`,
              overflow: 'hidden',
              boxShadow: isDark ? '0 10px 30px rgba(0,0,0,0.5)' : '0 10px 30px rgba(0,0,0,0.06)'
            }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.88rem' }}>
                <thead>
                  <tr style={{
                    backgroundColor: isDark ? '#141414' : '#F1F5F9',
                    borderBottom: `2px solid ${isDark ? '#333' : '#CBD5E1'}`,
                    color: isDark ? '#FFF' : '#333',
                    fontSize: '0.8rem',
                    textTransform: 'uppercase'
                  }}>
                    <th style={{ padding: '14px 18px' }}>Тип</th>
                    <th style={{ padding: '14px 18px' }}>Назва Запчастини / Комплекту</th>
                    <th style={{ padding: '14px 18px' }}>Артикул / Код</th>
                    <th style={{ padding: '14px 18px' }}>Сумісні Моделі</th>
                    <th style={{ padding: '14px 18px', textAlign: 'right' }}>Дії</th>
                  </tr>
                </thead>
                <tbody>
                  {parts.map((item, idx) => {
                    const titleText = item.title?.uk || item.title || '';
                    return (
                      <tr
                        key={item.id}
                        style={{
                          borderBottom: `1px solid ${isDark ? '#282828' : '#F1F5F9'}`,
                          backgroundColor: idx % 2 === 0 ? 'transparent' : isDark ? 'rgba(255,255,255,0.02)' : '#FAFBFD'
                        }}
                      >
                        <td style={{ padding: '14px 18px' }}>
                          <span style={{
                            backgroundColor: item.type === 'kit' ? 'rgba(255, 102, 0, 0.18)' : isDark ? 'rgba(255,255,255,0.08)' : '#EAEAEA',
                            color: item.type === 'kit' ? '#FF9944' : isDark ? '#CCCCCC' : '#444444',
                            border: item.type === 'kit' ? '1px solid rgba(255, 102, 0, 0.3)' : `1px solid ${isDark ? '#3D3D3D' : '#D0D0D0'}`,
                            fontWeight: 900,
                            fontSize: '0.72rem',
                            padding: '3px 8px',
                            borderRadius: '4px',
                            textTransform: 'uppercase'
                          }}>
                            {item.type === 'kit' ? 'Комплект' : 'Деталь'}
                          </span>
                        </td>
                        <td style={{ padding: '14px 18px', fontWeight: 800, color: isDark ? '#FFF' : '#111' }}>
                          {titleText}
                          {item.type === 'kit' && item.items?.length > 0 && (
                            <div style={{ fontSize: '0.75rem', color: '#888', fontWeight: 400, marginTop: '2px' }}>
                              Містить {item.items.length} позицій
                            </div>
                          )}
                        </td>
                        <td style={{ padding: '14px 18px', fontFamily: 'monospace', fontSize: '0.85rem', color: '#FF9944' }}>
                          {item.code || '-'}
                        </td>
                        <td style={{ padding: '14px 18px', color: isDark ? '#CCC' : '#555' }}>
                          {item.models || '-'}
                        </td>
                        <td style={{ padding: '14px 18px', textAlign: 'right' }}>
                          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
                            <button
                              onClick={() => openEditPartModal(item)}
                              title="Редагувати"
                              style={{
                                backgroundColor: isDark ? '#2A2A2A' : '#F1F5F9',
                                color: '#FF6600',
                                border: 'none',
                                borderRadius: '6px',
                                padding: '6px 10px',
                                cursor: 'pointer'
                              }}
                            >
                              <Edit3 size={15} />
                            </button>

                            <button
                              onClick={() => deletePartOrKit(item.id)}
                              title="Видалити"
                              style={{
                                backgroundColor: isDark ? '#2A2A2A' : '#F1F5F9',
                                color: '#EF4444',
                                border: 'none',
                                borderRadius: '6px',
                                padding: '6px 10px',
                                cursor: 'pointer'
                              }}
                            >
                              <Trash2 size={15} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB: NEWS & ARTICLES MANAGEMENT */}
        {activeTab === 'news' && (
          <div>
            <div style={{
              display: 'flex',
              justify: 'space-between',
              alignItems: 'center',
              marginBottom: '24px',
              flexWrap: 'wrap',
              gap: '16px'
            }}>
              <div>
                <h2 style={{ fontSize: '1.4rem', fontWeight: 900, textTransform: 'uppercase', margin: 0 }}>
                  Управління Новинами та Статтями
                </h2>
                <p style={{ fontSize: '0.88rem', color: '#888', marginTop: '4px' }}>
                  Створюйте, редагуйте та публікуйте технічні огляди й прес-релізи для клієнтів Ditch Witch Ukraine.
                </p>
              </div>

              <div style={{ display: 'flex', gap: '12px' }}>
                <button
                  onClick={resetToDefaultNews}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    backgroundColor: isDark ? '#222' : '#E2E8F0',
                    color: isDark ? '#CCC' : '#333',
                    border: 'none',
                    borderRadius: '6px',
                    padding: '10px 16px',
                    fontSize: '0.85rem',
                    fontWeight: 800,
                    cursor: 'pointer'
                  }}
                >
                  <RotateCcw size={15} />
                  <span>Сновити Початкові Новини</span>
                </button>

                <button
                  onClick={openCreateNewsModal}
                  style={{
                    padding: '10px 18px',
                    fontSize: '0.85rem',
                    backgroundColor: 'rgba(59, 130, 246, 0.15)',
                    color: '#93C5FD',
                    border: '1px solid rgba(59, 130, 246, 0.35)',
                    borderRadius: '6px',
                    fontWeight: 800,
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                >
                  <Newspaper size={16} />
                  <span>+ Опублікувати Новину</span>
                </button>
              </div>
            </div>

            {/* News Table */}
            <div style={{
              backgroundColor: isDark ? '#1C1C1C' : '#FFFFFF',
              borderRadius: '12px',
              border: `1px solid ${isDark ? '#333333' : '#E2E8F0'}`,
              overflow: 'hidden',
              boxShadow: isDark ? '0 10px 30px rgba(0,0,0,0.5)' : '0 10px 30px rgba(0,0,0,0.06)'
            }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.88rem' }}>
                <thead>
                  <tr style={{
                    backgroundColor: isDark ? '#141414' : '#F1F5F9',
                    borderBottom: `2px solid ${isDark ? '#333' : '#CBD5E1'}`,
                    color: isDark ? '#FFF' : '#333',
                    fontSize: '0.8rem',
                    textTransform: 'uppercase'
                  }}>
                    <th style={{ padding: '14px 18px' }}>Дата</th>
                    <th style={{ padding: '14px 18px' }}>Заголовок Публікації</th>
                    <th style={{ padding: '14px 18px' }}>Категорія</th>
                    <th style={{ padding: '14px 18px' }}>Статус</th>
                    <th style={{ padding: '14px 18px', textAlign: 'right' }}>Дії</th>
                  </tr>
                </thead>
                <tbody>
                  {newsList.map((item, idx) => {
                    const titleText = item.title?.uk || item.title || '';
                    return (
                      <tr
                        key={item.id}
                        style={{
                          borderBottom: `1px solid ${isDark ? '#282828' : '#F1F5F9'}`,
                          backgroundColor: idx % 2 === 0 ? 'transparent' : isDark ? 'rgba(255,255,255,0.02)' : '#FAFBFD'
                        }}
                      >
                        <td style={{ padding: '14px 18px', color: '#888', fontSize: '0.82rem' }}>
                          {item.date}
                        </td>
                        <td style={{ padding: '14px 18px', fontWeight: 800, color: isDark ? '#FFF' : '#111' }}>
                          {titleText}
                        </td>
                        <td style={{ padding: '14px 18px', color: '#FF6600', fontWeight: 700, fontSize: '0.82rem', textTransform: 'uppercase' }}>
                          {item.categoryKey || item.category}
                        </td>
                        <td style={{ padding: '14px 18px' }}>
                          {item.featured ? (
                            <span style={{ backgroundColor: '#FF6600', color: '#FFF', padding: '3px 8px', borderRadius: '4px', fontSize: '0.72rem', fontWeight: 900 }}>
                              FEATURED
                            </span>
                          ) : (
                            <span style={{ color: '#888', fontSize: '0.8rem' }}>Стандартна</span>
                          )}
                        </td>
                        <td style={{ padding: '14px 18px', textAlign: 'right' }}>
                          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
                            <button
                              onClick={() => openEditNewsModal(item)}
                              title="Редагувати"
                              style={{
                                backgroundColor: isDark ? '#2A2A2A' : '#F1F5F9',
                                color: '#FF6600',
                                border: 'none',
                                borderRadius: '6px',
                                padding: '6px 10px',
                                cursor: 'pointer'
                              }}
                            >
                              <Edit3 size={15} />
                            </button>

                            <button
                              onClick={() => deleteNewsArticle(item.id)}
                              title="Видалити"
                              style={{
                                backgroundColor: isDark ? '#2A2A2A' : '#F1F5F9',
                                color: '#EF4444',
                                border: 'none',
                                borderRadius: '6px',
                                padding: '6px 10px',
                                cursor: 'pointer'
                              }}
                            >
                              <Trash2 size={15} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 2: PRODUCT CATALOG (Каталог Продукції) */}
        {activeTab === 'products' && (
          <div>
            <div style={{
              display: 'flex',
              justify: 'space-between',
              alignItems: 'center',
              marginBottom: '24px',
              flexWrap: 'wrap',
              gap: '16px'
            }}>
              <div>
                <h2 style={{ fontSize: '1.4rem', fontWeight: 900, textTransform: 'uppercase', margin: 0 }}>
                  Каталог Продукції & Спецтехніки
                </h2>
                <p style={{ fontSize: '0.88rem', color: '#888', marginTop: '4px' }}>
                  Повна панель керування технікою Ditch Witch: додавання, редагування, вилучення з/без фото та гео-таргетинг (UA, PL, ALL).
                </p>
              </div>

              <div style={{ display: 'flex', gap: '12px' }}>
                <button
                  onClick={resetToDefaultProducts}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    backgroundColor: isDark ? '#222' : '#E2E8F0',
                    color: isDark ? '#CCC' : '#333',
                    border: 'none',
                    borderRadius: '6px',
                    padding: '10px 16px',
                    fontSize: '0.85rem',
                    fontWeight: 800,
                    cursor: 'pointer'
                  }}
                >
                  <RotateCcw size={15} />
                  <span>Сновити Початкові Товари</span>
                </button>

                <button
                  onClick={openCreateProductModal}
                  style={{
                    padding: '10px 18px',
                    fontSize: '0.85rem',
                    backgroundColor: 'rgba(255, 102, 0, 0.18)',
                    color: '#FF9944',
                    border: '1px solid rgba(255, 102, 0, 0.35)',
                    borderRadius: '6px',
                    fontWeight: 800,
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    boxShadow: '0 4px 14px rgba(255, 102, 0, 0.15)'
                  }}
                >
                  <PlusCircle size={16} />
                  <span>+ Додати Новий Товар</span>
                </button>
              </div>
            </div>

            {/* Filter Bar & Search */}
            <div style={{
              display: 'flex',
              justify: 'space-between',
              alignItems: 'center',
              marginBottom: '20px',
              gap: '16px',
              flexWrap: 'wrap'
            }}>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {[
                  { id: 'ALL', uk: 'Всі Товари' },
                  { id: 'drilling', uk: 'ГНБ' },
                  { id: 'trenchers', uk: 'Траншеєкопачі' },
                  { id: 'skidsteers', uk: 'SK Навантажувачі' },
                  { id: 'vacuums', uk: 'Вакуумні' },
                  { id: 'fluids', uk: 'Змішувальні' },
                  { id: 'electronics', uk: 'Subsite®' },
                  { id: 'other', uk: 'Інше (Altro)' }
                ].map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setProductCategoryFilter(cat.id)}
                    style={{
                      backgroundColor: productCategoryFilter === cat.id ? 'rgba(255, 102, 0, 0.2)' : isDark ? '#242424' : '#F0F0F0',
                      color: productCategoryFilter === cat.id ? '#FF9944' : isDark ? '#AAA' : '#555',
                      border: productCategoryFilter === cat.id ? '1px solid rgba(255, 102, 0, 0.4)' : `1px solid ${isDark ? '#333' : '#E0E0E0'}`,
                      borderRadius: '6px',
                      padding: '5px 12px',
                      fontSize: '0.8rem',
                      fontWeight: 800,
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {cat.uk}
                  </button>
                ))}
              </div>

              <input
                type="text"
                placeholder="Пошук моделі або категорії..."
                value={productSearch}
                onChange={(e) => setProductSearch(e.target.value)}
                style={{
                  backgroundColor: isDark ? '#1C1C1C' : '#FFFFFF',
                  border: `1px solid ${isDark ? '#333' : '#E0E0E0'}`,
                  borderRadius: '6px',
                  padding: '8px 14px',
                  fontSize: '0.85rem',
                  color: isDark ? '#FFF' : '#111',
                  minWidth: '240px',
                  outline: 'none'
                }}
              />
            </div>

            {/* Products Table */}
            <div style={{
              backgroundColor: isDark ? '#1C1C1C' : '#FFFFFF',
              borderRadius: '12px',
              border: `1px solid ${isDark ? '#333333' : '#E2E8F0'}`,
              overflow: 'hidden',
              boxShadow: isDark ? '0 10px 30px rgba(0,0,0,0.5)' : '0 10px 30px rgba(0,0,0,0.06)'
            }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.88rem' }}>
                <thead>
                  <tr style={{
                    backgroundColor: isDark ? '#141414' : '#F1F5F9',
                    borderBottom: `2px solid ${isDark ? '#333' : '#CBD5E1'}`,
                    color: isDark ? '#FFF' : '#333',
                    fontSize: '0.78rem',
                    textTransform: 'uppercase'
                  }}>
                    <th style={{ padding: '14px 18px' }}>Фото / Зображення</th>
                    <th style={{ padding: '14px 18px' }}>Модель & Опис</th>
                    <th style={{ padding: '14px 18px' }}>Категорія</th>
                    <th style={{ padding: '14px 18px' }}>Країни Показу</th>
                    <th style={{ padding: '14px 18px', textAlign: 'right' }}>Дії</th>
                  </tr>
                </thead>
                <tbody>
                  {products
                    .filter((p) => {
                      const matchesCategory = productCategoryFilter === 'ALL' || p.category === productCategoryFilter;
                      const titleText = (p.title?.uk || p.title?.en || p.title || '').toLowerCase();
                      const matchesSearch = !productSearch || titleText.includes(productSearch.toLowerCase());
                      return matchesCategory && matchesSearch;
                    })
                    .map((prod, idx) => {
                      const titleText = prod.title?.uk || prod.title?.en || prod.title;
                      const taglineText = prod.tagline?.uk || prod.tagline?.en || prod.tagline;

                      return (
                        <tr
                          key={prod.id}
                          style={{
                            borderBottom: `1px solid ${isDark ? '#282828' : '#F1F5F9'}`,
                            backgroundColor: idx % 2 === 0 ? 'transparent' : isDark ? 'rgba(255,255,255,0.02)' : '#FAFBFD'
                          }}
                        >
                          <td style={{ padding: '14px 18px', width: '100px' }}>
                            {prod.image ? (
                              <div style={{
                                width: '70px',
                                height: '50px',
                                borderRadius: '6px',
                                overflow: 'hidden',
                                backgroundColor: isDark ? '#111' : '#F4F4F4',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                              }}>
                                <img
                                  src={prod.image}
                                  alt={titleText}
                                  style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }}
                                />
                              </div>
                            ) : (
                              <div style={{
                                width: '70px',
                                height: '50px',
                                borderRadius: '6px',
                                border: `1px dashed ${isDark ? '#444' : '#CCC'}`,
                                backgroundColor: isDark ? '#141414' : '#F9F9FB',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: '#888',
                                fontSize: '0.7rem',
                                fontWeight: 700
                              }}>
                                Без фото
                              </div>
                            )}
                          </td>

                          <td style={{ padding: '14px 18px' }}>
                            <div style={{ fontWeight: 800, color: isDark ? '#FFF' : '#111', fontSize: '0.94rem' }}>
                              {titleText}
                            </div>
                            {taglineText && (
                              <div style={{ fontSize: '0.78rem', color: '#888', marginTop: '2px' }}>
                                {taglineText}
                              </div>
                            )}
                          </td>

                          <td style={{ padding: '14px 18px' }}>
                            <span style={{
                              backgroundColor: prod.category === 'other' ? 'rgba(168, 85, 247, 0.15)' : 'rgba(255, 102, 0, 0.15)',
                              color: prod.category === 'other' ? '#C084FC' : '#FF9944',
                              border: prod.category === 'other' ? '1px solid rgba(168, 85, 247, 0.3)' : '1px solid rgba(255, 102, 0, 0.3)',
                              borderRadius: '4px',
                              padding: '4px 8px',
                              fontSize: '0.75rem',
                              fontWeight: 800,
                              textTransform: 'uppercase'
                            }}>
                              {prod.category === 'other' ? 'Інше (Altro)' : prod.category}
                            </span>
                          </td>

                          <td style={{ padding: '14px 18px' }}>
                            <div style={{ display: 'flex', gap: '6px' }}>
                              {['ALL', 'UA', 'PL'].map((country) => {
                                const isAllowed = prod.allowedCountries?.includes(country);
                                return (
                                  <button
                                    key={country}
                                    onClick={() => {
                                      let next = [...(prod.allowedCountries || ['ALL'])];
                                      if (country === 'ALL') {
                                        next = ['ALL'];
                                      } else {
                                        next = next.filter((c) => c !== 'ALL');
                                        if (next.includes(country)) {
                                          next = next.filter((c) => c !== country);
                                        } else {
                                          next.push(country);
                                        }
                                        if (next.length === 0) next = ['ALL'];
                                      }
                                      updateProductTargeting(prod.id, next);
                                    }}
                                    style={{
                                      backgroundColor: isAllowed ? 'rgba(59, 130, 246, 0.18)' : isDark ? '#2A2A2A' : '#E2E8F0',
                                      color: isAllowed ? '#60A5FA' : isDark ? '#888' : '#666',
                                      border: isAllowed ? '1px solid rgba(59, 130, 246, 0.35)' : 'none',
                                      borderRadius: '4px',
                                      padding: '4px 8px',
                                      fontSize: '0.75rem',
                                      fontWeight: 800,
                                      cursor: 'pointer'
                                    }}
                                  >
                                    {country}
                                  </button>
                                );
                              })}
                            </div>
                          </td>

                          <td style={{ padding: '14px 18px', textAlign: 'right' }}>
                            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
                              <button
                                onClick={() => openEditProductModal(prod)}
                                title="Редагувати"
                                style={{
                                  backgroundColor: isDark ? '#2A2A2A' : '#F1F5F9',
                                  color: '#FF9944',
                                  border: 'none',
                                  borderRadius: '6px',
                                  padding: '6px 10px',
                                  cursor: 'pointer'
                                }}
                              >
                                <Edit3 size={15} />
                              </button>

                              <button
                                onClick={() => confirmDeleteProduct(prod.id)}
                                title="Видалити"
                                style={{
                                  backgroundColor: isDark ? '#2A2A2A' : '#F1F5F9',
                                  color: '#EF4444',
                                  border: 'none',
                                  borderRadius: '6px',
                                  padding: '6px 10px',
                                  cursor: 'pointer'
                                }}
                              >
                                <Trash2 size={15} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 3: DOCUMENTS MANAGEMENT */}
        {activeTab === 'documents' && (
          <div>
            <div style={{
              backgroundColor: isDark ? '#1C1C1C' : '#FFFFFF',
              borderRadius: '12px',
              border: `1px solid ${isDark ? '#333' : '#E2E8F0'}`,
              padding: '24px',
              marginBottom: '28px'
            }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 900, textTransform: 'uppercase', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Upload size={18} style={{ color: '#FF6600' }} />
                <span>Завантажити Новий Технічний Документ</span>
              </h3>

              <form onSubmit={handleDocumentUpload} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 800, marginBottom: '6px' }}>Назва Документа *</label>
                  <input
                    type="text"
                    required
                    placeholder="напр. Інструкція з експлуатації JT10"
                    value={newDocTitle}
                    onChange={(e) => setNewDocTitle(e.target.value)}
                    style={{ width: '100%', padding: '10px', borderRadius: '6px', backgroundColor: isDark ? '#111' : '#F9F9FB', border: `1px solid ${isDark ? '#333' : '#CCC'}`, color: isDark ? '#FFF' : '#000', outline: 'none' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 800, marginBottom: '6px' }}>Категорія Документа</label>
                  <select
                    value={newDocCategory}
                    onChange={(e) => setNewDocCategory(e.target.value)}
                    style={{ width: '100%', padding: '10px', borderRadius: '6px', backgroundColor: isDark ? '#111' : '#F9F9FB', border: `1px solid ${isDark ? '#333' : '#CCC'}`, color: isDark ? '#FFF' : '#000', outline: 'none' }}
                  >
                    <option value="drilling">Бурові Установки ГНБ</option>
                    <option value="locating">Локаційні Системи Subsite</option>
                    <option value="tools">Буровий Інструмент та Штанги</option>
                    <option value="fluids">Бурові Розчини та Бентоніт</option>
                    <option value="guides">Гайди та Порівняння</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 800, marginBottom: '6px' }}>Файл Документа</label>
                  <input
                    type="file"
                    onChange={(e) => setSelectedFile(e.target.files[0])}
                    style={{ width: '100%', fontSize: '0.85rem' }}
                  />
                </div>

                <div style={{ gridColumn: '1 / -1', textAlign: 'right' }}>
                  <button type="submit" className="btn-primary" style={{ padding: '10px 20px', fontSize: '0.85rem' }}>
                    <span>Опублікувати Документ</span>
                  </button>
                </div>
              </form>
            </div>

            {/* Documents List */}
            <div style={{ backgroundColor: isDark ? '#1C1C1C' : '#FFFFFF', borderRadius: '12px', border: `1px solid ${isDark ? '#333' : '#E2E8F0'}`, overflow: 'hidden' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.88rem' }}>
                <thead>
                  <tr style={{ backgroundColor: isDark ? '#141414' : '#F1F5F9', borderBottom: `2px solid ${isDark ? '#333' : '#CBD5E1'}`, textTransform: 'uppercase', fontSize: '0.78rem' }}>
                    <th style={{ padding: '12px 16px' }}>Назва Документа</th>
                    <th style={{ padding: '12px 16px' }}>Формат</th>
                    <th style={{ padding: '12px 16px' }}>Розмір</th>
                    <th style={{ padding: '12px 16px', textAlign: 'right' }}>Дії</th>
                  </tr>
                </thead>
                <tbody>
                  {documents.map((doc) => (
                    <tr key={doc.id} style={{ borderBottom: `1px solid ${isDark ? '#282828' : '#F1F5F9'}` }}>
                      <td style={{ padding: '12px 16px', fontWeight: 800 }}>
                        {doc.title?.uk || doc.title}
                      </td>
                      <td style={{ padding: '12px 16px', fontWeight: 800, color: '#FF6600' }}>
                        {doc.format}
                      </td>
                      <td style={{ padding: '12px 16px', color: '#888' }}>
                        {doc.size}
                      </td>
                      <td style={{ padding: '12px 16px', textAlign: 'right' }}>
                        <button
                          onClick={() => deleteDocument(doc.id)}
                          style={{ background: 'none', border: 'none', color: '#EF4444', cursor: 'pointer' }}
                        >
                          <Trash2 size={16} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 4: COMMERCIAL INQUIRIES LOG (Журнал Комерційних Запитів) */}
        {activeTab === 'inquiries' && (
          <div>
            {/* Header Title & Actions */}
            <div style={{
              display: 'flex',
              justify: 'space-between',
              alignItems: 'center',
              marginBottom: '24px',
              flexWrap: 'wrap',
              gap: '16px'
            }}>
              <div>
                <h2 style={{ fontSize: '1.4rem', fontWeight: 900, textTransform: 'uppercase', margin: 0, display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <TrendingUp size={22} style={{ color: '#D97706' }} />
                  <span>Журнал Комерційних Запитів</span>
                </h2>
                <p style={{ fontSize: '0.88rem', color: isDark ? '#AAA' : '#666', marginTop: '4px' }}>
                  Офіційний реєстр вхідних лідів, комерційних запитів та заявок від клієнтів з можливістю аналітики та експорту.
                </p>
              </div>

              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <button
                  onClick={exportInquiriesToCSV}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    backgroundColor: isDark ? '#222225' : '#F1F5F9',
                    color: isDark ? '#E4E4E7' : '#334155',
                    border: `1px solid ${isDark ? '#3F3F46' : '#CBD5E1'}`,
                    borderRadius: '8px',
                    padding: '10px 16px',
                    fontSize: '0.85rem',
                    fontWeight: 800,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <Download size={15} style={{ color: '#10B981' }} />
                  <span>Експорт у CSV (Excel)</span>
                </button>

                <button
                  onClick={openCreateInquiryModal}
                  style={{
                    padding: '10px 18px',
                    fontSize: '0.85rem',
                    backgroundColor: '#D97706',
                    color: '#FFFFFF',
                    border: 'none',
                    borderRadius: '8px',
                    fontWeight: 800,
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    boxShadow: '0 2px 8px rgba(217, 119, 6, 0.25)'
                  }}
                >
                  <PlusCircle size={16} />
                  <span>+ Внести Новий Запит</span>
                </button>
              </div>
            </div>

            {/* 4 Analytics KPI Stat Cards */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
              gap: '16px',
              marginBottom: '28px'
            }}>
              <div style={{
                backgroundColor: isDark ? '#181C24' : '#F8FAFC',
                borderRadius: '12px',
                padding: '20px',
                border: `1px solid ${isDark ? '#2C3545' : '#E2E8F0'}`,
                boxShadow: '0 2px 8px rgba(0,0,0,0.03)'
              }}>
                <div style={{ fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', color: '#64748B', marginBottom: '8px' }}>
                  📊 Всього Запитів
                </div>
                <div style={{ fontSize: '1.8rem', fontWeight: 900, color: isDark ? '#F1F5F9' : '#1E293B' }}>
                  {inquiries.length}
                </div>
                <div style={{ fontSize: '0.75rem', color: '#64748B', marginTop: '4px' }}>
                  Зареєстровано в системі
                </div>
              </div>

              <div style={{
                backgroundColor: isDark ? '#261B1B' : '#FFF5F5',
                borderRadius: '12px',
                padding: '20px',
                border: isDark ? '1px solid rgba(225, 29, 72, 0.25)' : '1px solid #FFE4E6',
                boxShadow: '0 2px 8px rgba(225, 29, 72, 0.04)'
              }}>
                <div style={{ fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', color: '#E11D48', marginBottom: '8px' }}>
                  🔴 Нові Заявки
                </div>
                <div style={{ fontSize: '1.8rem', fontWeight: 900, color: isDark ? '#FDA4AF' : '#E11D48' }}>
                  {inquiries.filter((i) => i.status === 'Новий').length}
                </div>
                <div style={{ fontSize: '0.75rem', color: isDark ? '#FDA4AF' : '#E11D48', marginTop: '4px' }}>
                  Потребують первинного контакту
                </div>
              </div>

              <div style={{
                backgroundColor: isDark ? '#262016' : '#FFFBEB',
                borderRadius: '12px',
                padding: '20px',
                border: isDark ? '1px solid rgba(217, 119, 6, 0.25)' : '1px solid #FEF3C7',
                boxShadow: '0 2px 8px rgba(217, 119, 6, 0.04)'
              }}>
                <div style={{ fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', color: '#D97706', marginBottom: '8px' }}>
                  🟡 В Обробці
                </div>
                <div style={{ fontSize: '1.8rem', fontWeight: 900, color: isDark ? '#FCD34D' : '#D97706' }}>
                  {inquiries.filter((i) => i.status === 'В обробці').length}
                </div>
                <div style={{ fontSize: '0.75rem', color: isDark ? '#FCD34D' : '#D97706', marginTop: '4px' }}>
                  Підготовка котирування / КП
                </div>
              </div>

              <div style={{
                backgroundColor: isDark ? '#14261F' : '#F0FDF4',
                borderRadius: '12px',
                padding: '20px',
                border: isDark ? '1px solid rgba(16, 185, 129, 0.25)' : '1px solid #DCFCE7',
                boxShadow: '0 2px 8px rgba(16, 185, 129, 0.04)'
              }}>
                <div style={{ fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', color: '#059669', marginBottom: '8px' }}>
                  🟢 Узгоджено / Угоди
                </div>
                <div style={{ fontSize: '1.8rem', fontWeight: 900, color: isDark ? '#6EE7B7' : '#059669' }}>
                  {inquiries.filter((i) => i.status === 'Узгоджено' || i.status === 'Завершено').length}
                </div>
                <div style={{ fontSize: '0.75rem', color: isDark ? '#6EE7B7' : '#059669', marginTop: '4px' }}>
                  Успішно опрацьовані ліди
                </div>
              </div>
            </div>

            {/* Filter Bar & Search */}
            <div style={{
              display: 'flex',
              justify: 'space-between',
              alignItems: 'center',
              marginBottom: '20px',
              gap: '16px',
              flexWrap: 'wrap'
            }}>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {['ALL', 'Новий', 'В обробці', 'Узгоджено', 'Завершено', 'Скасовано'].map((st) => (
                  <button
                    key={st}
                    onClick={() => setInquiryStatusFilter(st)}
                    style={{
                      backgroundColor: inquiryStatusFilter === st ? (isDark ? 'rgba(217, 119, 6, 0.22)' : '#FEF3C7') : isDark ? '#222225' : '#F4F4F5',
                      color: inquiryStatusFilter === st ? (isDark ? '#FBBF24' : '#B45309') : isDark ? '#A1A1AA' : '#52525B',
                      border: inquiryStatusFilter === st ? '1px solid rgba(217, 119, 6, 0.35)' : `1px solid ${isDark ? '#37373A' : '#E4E4E7'}`,
                      borderRadius: '8px',
                      padding: '7px 15px',
                      fontSize: '0.82rem',
                      fontWeight: 800,
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {st === 'ALL' ? `Всі Запити (${inquiries.length})` : `${st} (${inquiries.filter(i => i.status === st).length})`}
                  </button>
                ))}
              </div>

              <input
                type="text"
                placeholder="🔍 Пошук за клієнтом, компанією або кодом..."
                value={inquirySearch}
                onChange={(e) => setInquirySearch(e.target.value)}
                style={{
                  backgroundColor: isDark ? '#1C1C1C' : '#FFFFFF',
                  border: `1px solid ${isDark ? '#333' : '#E0E0E0'}`,
                  borderRadius: '6px',
                  padding: '9px 16px',
                  fontSize: '0.85rem',
                  color: isDark ? '#FFF' : '#111',
                  minWidth: '280px',
                  outline: 'none'
                }}
              />
            </div>

            {/* Inquiries Data Table */}
            <div style={{
              backgroundColor: isDark ? '#1C1C1C' : '#FFFFFF',
              borderRadius: '12px',
              border: `1px solid ${isDark ? '#333333' : '#E2E8F0'}`,
              overflow: 'hidden',
              boxShadow: isDark ? '0 10px 30px rgba(0,0,0,0.5)' : '0 10px 30px rgba(0,0,0,0.06)'
            }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.88rem' }}>
                <thead>
                  <tr style={{
                    backgroundColor: isDark ? '#141414' : '#F1F5F9',
                    borderBottom: `2px solid ${isDark ? '#333' : '#CBD5E1'}`,
                    color: isDark ? '#FFF' : '#333',
                    fontSize: '0.78rem',
                    textTransform: 'uppercase'
                  }}>
                    <th style={{ padding: '14px 16px' }}>Код / Дата</th>
                    <th style={{ padding: '14px 16px' }}>Клієнт / Організація</th>
                    <th style={{ padding: '14px 16px' }}>Контакти</th>
                    <th style={{ padding: '14px 16px' }}>Тип Запиту & Модель</th>
                    <th style={{ padding: '14px 16px' }}>Бюджет / Оцінка</th>
                    <th style={{ padding: '14px 16px' }}>Статус</th>
                    <th style={{ padding: '14px 16px', textAlign: 'right' }}>Дії</th>
                  </tr>
                </thead>
                <tbody>
                  {inquiries
                    .filter((inq) => {
                      const matchesStatus = inquiryStatusFilter === 'ALL' || inq.status === inquiryStatusFilter;
                      const searchText = `${inq.customerName} ${inq.company} ${inq.id} ${inq.productModel || inq.machine} ${inq.city}`.toLowerCase();
                      const matchesSearch = searchText.includes(inquirySearch.toLowerCase());
                      return matchesStatus && matchesSearch;
                    })
                    .map((inq, idx) => {
                      const getStatusBadgeStyle = (status) => {
                        switch (status) {
                          case 'Новий':
                            return { bg: 'rgba(239, 68, 68, 0.15)', color: '#F87171', border: 'rgba(239, 68, 68, 0.3)' };
                          case 'В обробці':
                            return { bg: 'rgba(245, 158, 11, 0.15)', color: '#FBBF24', border: 'rgba(245, 158, 11, 0.3)' };
                          case 'Узгоджено':
                            return { bg: 'rgba(59, 130, 246, 0.15)', color: '#60A5FA', border: 'rgba(59, 130, 246, 0.3)' };
                          case 'Завершено':
                            return { bg: 'rgba(34, 197, 94, 0.15)', color: '#4ADE80', border: 'rgba(34, 197, 94, 0.3)' };
                          default:
                            return { bg: 'rgba(156, 163, 175, 0.15)', color: '#9CA3AF', border: 'rgba(156, 163, 175, 0.3)' };
                        }
                      };
                      const stBadge = getStatusBadgeStyle(inq.status);

                      return (
                        <tr
                          key={inq.id}
                          style={{
                            borderBottom: `1px solid ${isDark ? '#282828' : '#F1F5F9'}`,
                            backgroundColor: idx % 2 === 0 ? 'transparent' : isDark ? 'rgba(255,255,255,0.02)' : '#FAFBFD',
                            transition: 'background-color 0.2s ease'
                          }}
                        >
                          <td style={{ padding: '14px 16px' }}>
                            <div style={{ fontFamily: 'monospace', fontWeight: 900, color: '#FF9944', fontSize: '0.85rem' }}>
                              {inq.id}
                            </div>
                            <div style={{ fontSize: '0.75rem', color: '#888', marginTop: '2px' }}>
                              {inq.date}
                            </div>
                          </td>

                          <td style={{ padding: '14px 16px' }}>
                            <div style={{ fontWeight: 800, color: isDark ? '#FFF' : '#111', fontSize: '0.92rem' }}>
                              {inq.customerName}
                            </div>
                            {inq.customerId && (
                              <button
                                onClick={() => {
                                  const found = customerDossiers.find(c => c.id === inq.customerId);
                                  if (found) setViewDossierModal(found);
                                }}
                                style={{
                                  display: 'inline-flex',
                                  alignItems: 'center',
                                  gap: '4px',
                                  backgroundColor: 'rgba(255, 102, 0, 0.15)',
                                  color: '#FF9944',
                                  border: '1px solid rgba(255, 102, 0, 0.3)',
                                  borderRadius: '4px',
                                  padding: '2px 6px',
                                  fontSize: '0.7rem',
                                  fontWeight: 800,
                                  cursor: 'pointer',
                                  marginTop: '4px'
                                }}
                              >
                                👤 Досьє {inq.customerId}
                              </button>
                            )}
                            {inq.company && (
                              <div style={{ fontSize: '0.8rem', color: '#888', marginTop: '2px' }}>
                                🏢 {inq.company}
                              </div>
                            )}
                            {inq.city && (
                              <div style={{ fontSize: '0.75rem', color: isDark ? '#AAA' : '#666', marginTop: '2px' }}>
                                📍 {inq.city}
                              </div>
                            )}
                          </td>

                          <td style={{ padding: '14px 16px' }}>
                            <a
                              href={`tel:${inq.phone}`}
                              style={{
                                display: 'block',
                                color: '#FF9944',
                                fontWeight: 800,
                                fontSize: '0.85rem',
                                textDecoration: 'none'
                              }}
                            >
                              📞 {inq.phone}
                            </a>
                            {inq.email && (
                              <a
                                href={`mailto:${inq.email}`}
                                style={{
                                  display: 'block',
                                  color: isDark ? '#AAA' : '#555',
                                  fontSize: '0.78rem',
                                  textDecoration: 'none',
                                  marginTop: '2px'
                                }}
                              >
                                ✉️ {inq.email}
                              </a>
                            )}
                          </td>

                          <td style={{ padding: '14px 16px' }}>
                            <div style={{ fontWeight: 800, color: isDark ? '#EEE' : '#222', fontSize: '0.88rem' }}>
                              {inq.inquiryType || 'Придбання спецтехніки'}
                            </div>
                            <div style={{ fontSize: '0.8rem', color: '#FF9944', fontWeight: 700, marginTop: '2px' }}>
                              🚜 {inq.productModel || inq.machine || '-'}
                            </div>
                          </td>

                          <td style={{ padding: '14px 16px' }}>
                            <span style={{
                              backgroundColor: isDark ? 'rgba(34, 197, 94, 0.12)' : '#E8F5E9',
                              color: '#22C55E',
                              fontWeight: 800,
                              fontSize: '0.78rem',
                              padding: '4px 10px',
                              borderRadius: '4px',
                              border: '1px solid rgba(34, 197, 94, 0.25)'
                            }}>
                              {inq.budget || 'За прайсом'}
                            </span>
                          </td>

                          <td style={{ padding: '14px 16px' }}>
                            <button
                              onClick={() => cycleInquiryStatus(inq.id)}
                              title="Натисніть для зміни статусу"
                              style={{
                                backgroundColor: stBadge.bg,
                                color: stBadge.color,
                                border: `1px solid ${stBadge.border}`,
                                borderRadius: '4px',
                                padding: '5px 10px',
                                fontSize: '0.75rem',
                                fontWeight: 800,
                                cursor: 'pointer',
                                transition: 'all 0.2s ease'
                              }}
                            >
                              {inq.status}
                            </button>
                          </td>

                          <td style={{ padding: '14px 16px', textAlign: 'right' }}>
                            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
                              <button
                                onClick={() => setViewInquiry(inq)}
                                title="Переглянути повне досьє"
                                style={{
                                  backgroundColor: isDark ? '#2A2A2A' : '#F1F5F9',
                                  color: '#3B82F6',
                                  border: 'none',
                                  borderRadius: '6px',
                                  padding: '6px 10px',
                                  cursor: 'pointer'
                                }}
                              >
                                <Eye size={15} />
                              </button>

                              <button
                                onClick={() => openEditInquiryModal(inq)}
                                title="Редагувати"
                                style={{
                                  backgroundColor: isDark ? '#2A2A2A' : '#F1F5F9',
                                  color: '#FF9944',
                                  border: 'none',
                                  borderRadius: '6px',
                                  padding: '6px 10px',
                                  cursor: 'pointer'
                                }}
                              >
                                <Edit3 size={15} />
                              </button>

                              <button
                                onClick={() => deleteInquiry(inq.id)}
                                title="Видалити"
                                style={{
                                  backgroundColor: isDark ? '#2A2A2A' : '#F1F5F9',
                                  color: '#EF4444',
                                  border: 'none',
                                  borderRadius: '6px',
                                  padding: '6px 10px',
                                  cursor: 'pointer'
                                }}
                              >
                                <Trash2 size={15} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>

            {/* Inquiry Full Dossier Modal */}
            {viewInquiry && (
              <div
                style={{
                  position: 'fixed',
                  inset: 0,
                  backgroundColor: 'rgba(0,0,0,0.85)',
                  backdropFilter: 'blur(6px)',
                  display: 'flex',
                  alignItems: 'center',
                  justify: 'center',
                  zIndex: 3000,
                  padding: '20px'
                }}
                onClick={() => setViewInquiry(null)}
              >
                <div
                  onClick={(e) => e.stopPropagation()}
                  style={{
                    backgroundColor: isDark ? '#1C1C1C' : '#FFFFFF',
                    color: isDark ? '#FFFFFF' : '#111111',
                    borderRadius: '16px',
                    width: '100%',
                    maxWidth: '650px',
                    maxHeight: '90vh',
                    overflowY: 'auto',
                    boxShadow: '0 20px 50px rgba(0,0,0,0.6)',
                    border: `1px solid ${isDark ? '#333333' : '#E0E0E0'}`,
                    padding: '32px',
                    position: 'relative'
                  }}
                >
                  <button
                    onClick={() => setViewInquiry(null)}
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
                      cursor: 'pointer'
                    }}
                  >
                    <X size={18} />
                  </button>

                  <div style={{ borderBottom: `1px solid ${isDark ? '#333' : '#E2E8F0'}`, paddingBottom: '16px', marginBottom: '24px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                      <span style={{ fontFamily: 'monospace', fontWeight: 900, color: '#FF9944', fontSize: '1rem' }}>
                        {viewInquiry.id}
                      </span>
                      <button
                        onClick={() => cycleInquiryStatus(viewInquiry.id)}
                        style={{
                          backgroundColor: '#FF6600',
                          color: '#FFF',
                          fontWeight: 800,
                          border: 'none',
                          borderRadius: '4px',
                          padding: '4px 10px',
                          fontSize: '0.8rem',
                          cursor: 'pointer'
                        }}
                      >
                        {viewInquiry.status} (Змінити)
                      </button>
                    </div>
                    <h3 style={{ fontSize: '1.3rem', fontWeight: 900, margin: 0 }}>
                      Досьє Клієнта: {viewInquiry.customerName}
                    </h3>
                    <p style={{ fontSize: '0.82rem', color: '#888', marginTop: '4px' }}>
                      Дата реєстрації: {viewInquiry.date}
                    </p>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '24px', fontSize: '0.9rem' }}>
                    <div style={{ backgroundColor: isDark ? '#141414' : '#F8F9FA', padding: '14px', borderRadius: '8px' }}>
                      <strong style={{ display: 'block', color: '#FF9944', marginBottom: '6px', fontSize: '0.78rem', textTransform: 'uppercase' }}>
                        Контактні Дані
                      </strong>
                      <div style={{ marginBottom: '6px' }}><strong>Клієнт:</strong> {viewInquiry.customerName}</div>
                      <div style={{ marginBottom: '6px' }}><strong>Організація:</strong> {viewInquiry.company || 'Фізична особа'}</div>
                      <div style={{ marginBottom: '6px' }}><strong>Місто:</strong> {viewInquiry.city || 'Україна'}</div>
                      <div style={{ marginBottom: '6px' }}>
                        <strong>Телефон:</strong> <a href={`tel:${viewInquiry.phone}`} style={{ color: '#FF9944', fontWeight: 800 }}>{viewInquiry.phone}</a>
                      </div>
                      {viewInquiry.email && (
                        <div>
                          <strong>Email:</strong> <a href={`mailto:${viewInquiry.email}`} style={{ color: isDark ? '#AAA' : '#444' }}>{viewInquiry.email}</a>
                        </div>
                      )}
                    </div>

                    <div style={{ backgroundColor: isDark ? '#141414' : '#F8F9FA', padding: '14px', borderRadius: '8px' }}>
                      <strong style={{ display: 'block', color: '#FF9944', marginBottom: '6px', fontSize: '0.78rem', textTransform: 'uppercase' }}>
                        Деталі Запиту
                      </strong>
                      <div style={{ marginBottom: '6px' }}><strong>Тип:</strong> {viewInquiry.inquiryType || 'Запит спецтехніки'}</div>
                      <div style={{ marginBottom: '6px' }}><strong>Модель:</strong> <span style={{ color: '#FF6600', fontWeight: 800 }}>{viewInquiry.productModel || viewInquiry.machine || '-'}</span></div>
                      <div style={{ marginBottom: '6px' }}><strong>Оцінка Бюджету:</strong> {viewInquiry.budget || 'За прайсом'}</div>
                      <div><strong>Канал:</strong> Веб-сайт Ditch Witch Ukraine</div>
                    </div>
                  </div>

                  <div style={{ marginBottom: '24px' }}>
                    <strong style={{ display: 'block', color: '#FF9944', marginBottom: '8px', fontSize: '0.78rem', textTransform: 'uppercase' }}>
                      Коментарі та Примітки Замовника
                    </strong>
                    <div style={{
                      backgroundColor: isDark ? '#141414' : '#F8F9FA',
                      border: `1px solid ${isDark ? '#333' : '#E2E8F0'}`,
                      borderRadius: '8px',
                      padding: '16px',
                      fontSize: '0.9rem',
                      lineHeight: 1.6,
                      color: isDark ? '#DDD' : '#333'
                    }}>
                      {viewInquiry.notes || 'Немає додаткових коментарів.'}
                    </div>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
                    <a
                      href={`tel:${viewInquiry.phone}`}
                      className="btn-primary"
                      style={{ padding: '10px 18px', fontSize: '0.85rem', textDecoration: 'none' }}
                    >
                      <Phone size={15} />
                      <span>Подзвонити Клієнту</span>
                    </a>

                    <button
                      onClick={() => {
                        const target = viewInquiry;
                        setViewInquiry(null);
                        openEditInquiryModal(target);
                      }}
                      style={{
                        backgroundColor: isDark ? '#2A2A2A' : '#E2E8F0',
                        color: isDark ? '#FFF' : '#111',
                        border: 'none',
                        borderRadius: '6px',
                        padding: '10px 18px',
                        fontSize: '0.85rem',
                        fontWeight: 800,
                        cursor: 'pointer'
                      }}
                    >
                      Редагувати Запит
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* TAB 7: CUSTOMER DOSSIERS & CRM (База Клієнтів & Досьє) */}
        {activeTab === 'dossiers' && (
          <div>
            {/* Header Title & Actions */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '24px',
              flexWrap: 'wrap',
              gap: '16px'
            }}>
              <div>
                <h2 style={{ fontSize: '1.4rem', fontWeight: 900, textTransform: 'uppercase', margin: 0, display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <UserCheck size={22} style={{ color: '#D97706' }} />
                  <span>База Клієнтів & Досьє (CRM Analytics)</span>
                </h2>
                <p style={{ fontSize: '0.88rem', color: isDark ? '#AAA' : '#666', marginTop: '4px' }}>
                  Централізований реєстр клієнтських карт, історія закупівлі спецтехніки, аналітика та зв’язок із комерційними запитами.
                </p>
              </div>

              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <button
                  onClick={exportDossiersToCSV}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    backgroundColor: isDark ? '#222225' : '#F1F5F9',
                    color: isDark ? '#E4E4E7' : '#334155',
                    border: `1px solid ${isDark ? '#3F3F46' : '#CBD5E1'}`,
                    borderRadius: '8px',
                    padding: '10px 16px',
                    fontSize: '0.85rem',
                    fontWeight: 800,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <Download size={15} style={{ color: '#10B981' }} />
                  <span>Експорт Бази у CSV</span>
                </button>

                <button
                  onClick={() => {
                    setEditingDossier(null);
                    setIsAddDossierModalOpen(true);
                  }}
                  style={{
                    padding: '10px 18px',
                    fontSize: '0.85rem',
                    backgroundColor: '#D97706',
                    color: '#FFFFFF',
                    border: 'none',
                    borderRadius: '8px',
                    fontWeight: 800,
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    boxShadow: '0 2px 8px rgba(217, 119, 6, 0.25)'
                  }}
                >
                  <PlusCircle size={16} />
                  <span>+ Створити Нове Досьє Клієнта</span>
                </button>
              </div>
            </div>

            {/* 4 Executive CRM Metrics Stat Cards */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
              gap: '16px',
              marginBottom: '28px'
            }}>
              <div style={{
                backgroundColor: isDark ? '#181C24' : '#F8FAFC',
                borderRadius: '12px',
                padding: '20px',
                border: `1px solid ${isDark ? '#2C3545' : '#E2E8F0'}`,
                boxShadow: '0 2px 8px rgba(0,0,0,0.03)'
              }}>
                <div style={{ fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', color: '#64748B', marginBottom: '8px' }}>
                  👥 Всього Клієнтських Карт
                </div>
                <div style={{ fontSize: '1.8rem', fontWeight: 900, color: isDark ? '#F1F5F9' : '#1E293B' }}>
                  {customerDossiers.length}
                </div>
                <div style={{ fontSize: '0.75rem', color: '#64748B', marginTop: '4px' }}>
                  Зареєстрованих покупців у CRM
                </div>
              </div>

              <div style={{
                backgroundColor: isDark ? '#262016' : '#FFFBEB',
                borderRadius: '12px',
                padding: '20px',
                border: isDark ? '1px solid rgba(217, 119, 6, 0.25)' : '1px solid #FEF3C7',
                boxShadow: '0 2px 8px rgba(217, 119, 6, 0.04)'
              }}>
                <div style={{ fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', color: '#D97706', marginBottom: '8px' }}>
                  🌟 V.I.P. Постійні Клієнти
                </div>
                <div style={{ fontSize: '1.8rem', fontWeight: 900, color: isDark ? '#FCD34D' : '#D97706' }}>
                  {customerDossiers.filter((c) => c.clientType?.includes('V.I.P.')).length}
                </div>
                <div style={{ fontSize: '0.75rem', color: isDark ? '#FCD34D' : '#D97706', marginTop: '4px' }}>
                  Ключові покупці спецтехніки
                </div>
              </div>

              <div style={{
                backgroundColor: isDark ? '#162032' : '#EFF6FF',
                borderRadius: '12px',
                padding: '20px',
                border: isDark ? '1px solid rgba(59, 130, 246, 0.25)' : '1px solid #DBEAFE',
                boxShadow: '0 2px 8px rgba(59, 130, 246, 0.04)'
              }}>
                <div style={{ fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', color: '#1D4ED8', marginBottom: '8px' }}>
                  📊 Пов’язаних Запитів в CRM
                </div>
                <div style={{ fontSize: '1.8rem', fontWeight: 900, color: isDark ? '#93C5FD' : '#1D4ED8' }}>
                  {inquiries.filter((i) => i.customerId).length}
                </div>
                <div style={{ fontSize: '0.75rem', color: isDark ? '#93C5FD' : '#1D4ED8', marginTop: '4px' }}>
                  Прив’язаних заявок до досьє
                </div>
              </div>

              <div style={{
                backgroundColor: isDark ? '#14261F' : '#F0FDF4',
                borderRadius: '12px',
                padding: '20px',
                border: isDark ? '1px solid rgba(16, 185, 129, 0.25)' : '1px solid #DCFCE7',
                boxShadow: '0 2px 8px rgba(16, 185, 129, 0.04)'
              }}>
                <div style={{ fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', color: '#059669', marginBottom: '8px' }}>
                  🌍 Регіональне Покриття
                </div>
                <div style={{ fontSize: '1.8rem', fontWeight: 900, color: isDark ? '#6EE7B7' : '#059669' }}>
                  {new Set(customerDossiers.map(c => c.city).filter(Boolean)).size} міст
                </div>
                <div style={{ fontSize: '0.75rem', color: isDark ? '#6EE7B7' : '#059669', marginTop: '4px' }}>
                  Географія партнерів (UA & PL)
                </div>
              </div>
            </div>

            {/* Filter Tabs & Search */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '20px',
              gap: '16px',
              flexWrap: 'wrap'
            }}>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {['ALL', 'V.I.P. Постійний Клієнт', 'Підрядник ГНБ', 'Комунальне Підприємство', 'Міжнародний Партнер (PL)', 'Новий Літ'].map((st) => (
                  <button
                    key={st}
                    onClick={() => setDossierTypeFilter(st)}
                    style={{
                      backgroundColor: dossierTypeFilter === st ? (isDark ? 'rgba(217, 119, 6, 0.22)' : '#FEF3C7') : isDark ? '#222225' : '#F4F4F5',
                      color: dossierTypeFilter === st ? (isDark ? '#FBBF24' : '#B45309') : isDark ? '#A1A1AA' : '#52525B',
                      border: dossierTypeFilter === st ? '1px solid rgba(217, 119, 6, 0.35)' : `1px solid ${isDark ? '#37373A' : '#E4E4E7'}`,
                      borderRadius: '8px',
                      padding: '7px 15px',
                      fontSize: '0.82rem',
                      fontWeight: 800,
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {st === 'ALL' ? `Всі Клієнти (${customerDossiers.length})` : st}
                  </button>
                ))}
              </div>

              <input
                type="text"
                placeholder="🔍 Пошук за ПІБ, компанією, ЄДРПОУ або містом..."
                value={dossierSearch}
                onChange={(e) => setDossierSearch(e.target.value)}
                style={{
                  backgroundColor: isDark ? '#1C1C1C' : '#FFFFFF',
                  border: `1px solid ${isDark ? '#333' : '#E0E0E0'}`,
                  borderRadius: '6px',
                  padding: '9px 16px',
                  fontSize: '0.85rem',
                  color: isDark ? '#FFF' : '#111',
                  minWidth: '280px',
                  outline: 'none'
                }}
              />
            </div>

            {/* Dossiers Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: '24px'
            }}>
              {customerDossiers
                .filter((dos) => {
                  const matchesType = dossierTypeFilter === 'ALL' || dos.clientType === dossierTypeFilter;
                  const searchText = `${dos.name} ${dos.company} ${dos.id} ${dos.taxId} ${dos.city} ${dos.fleet}`.toLowerCase();
                  const matchesSearch = searchText.includes(dossierSearch.toLowerCase());
                  return matchesType && matchesSearch;
                })
                .map((dos) => {
                  const linkedInquiriesCount = inquiries.filter((i) => i.customerId === dos.id || (i.customerName && i.customerName.toLowerCase() === dos.name.toLowerCase())).length;

                  return (
                    <div
                      key={dos.id}
                      style={{
                        backgroundColor: isDark ? '#1C1C1C' : '#FFFFFF',
                        borderRadius: '12px',
                        border: `1px solid ${dos.clientType?.includes('V.I.P.') ? (isDark ? 'rgba(217, 119, 6, 0.4)' : '#FDE68A') : isDark ? '#27272A' : '#E4E4E7'}`,
                        padding: '24px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        boxShadow: isDark ? '0 4px 14px rgba(0,0,0,0.3)' : '0 4px 14px rgba(0,0,0,0.04)',
                        position: 'relative'
                      }}
                    >
                      <div>
                        {/* Header Badge */}
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                          <span style={{ fontFamily: 'monospace', fontWeight: 900, color: '#D97706', fontSize: '0.85rem' }}>
                            {dos.id}
                          </span>

                          <span style={{
                            backgroundColor: dos.clientType?.includes('V.I.P.') ? (isDark ? 'rgba(217, 119, 6, 0.18)' : '#FEF3C7') : isDark ? '#27272A' : '#F1F5F9',
                            color: dos.clientType?.includes('V.I.P.') ? (isDark ? '#FBBF24' : '#B45309') : isDark ? '#D4D4D8' : '#475569',
                            fontWeight: 800,
                            fontSize: '0.75rem',
                            padding: '4px 10px',
                            borderRadius: '6px',
                            border: `1px solid ${dos.clientType?.includes('V.I.P.') ? 'rgba(217, 119, 6, 0.3)' : 'transparent'}`
                          }}>
                            {dos.clientType}
                          </span>
                        </div>

                        <h3 style={{ fontSize: '1.15rem', fontWeight: 900, margin: 0, color: isDark ? '#FFF' : '#111' }}>
                          {dos.name}
                        </h3>

                        {dos.company && (
                          <div style={{ fontSize: '0.86rem', color: '#888', fontWeight: 700, marginTop: '4px' }}>
                            🏢 {dos.company} {dos.taxId ? `(ЄДРПОУ: ${dos.taxId})` : ''}
                          </div>
                        )}

                        <div style={{ fontSize: '0.8rem', color: isDark ? '#AAA' : '#555', marginTop: '6px' }}>
                          📍 {dos.city} {dos.region ? `• ${dos.region}` : ''}
                        </div>

                        {/* Contact details */}
                        <div style={{ marginTop: '14px', paddingTop: '12px', borderTop: `1px solid ${isDark ? '#2A2A2A' : '#F1F5F9'}`, fontSize: '0.84rem' }}>
                          <div style={{ marginBottom: '4px' }}>
                            📞 <a href={`tel:${dos.phone}`} style={{ color: '#D97706', fontWeight: 800, textDecoration: 'none' }}>{dos.phone}</a>
                          </div>
                          {dos.email && (
                            <div>
                              ✉️ <a href={`mailto:${dos.email}`} style={{ color: isDark ? '#AAA' : '#666', textDecoration: 'none' }}>{dos.email}</a>
                            </div>
                          )}
                        </div>

                        {/* Fleet and Deals */}
                        {dos.fleet && (
                          <div style={{ marginTop: '12px', backgroundColor: isDark ? '#141414' : '#F8F9FA', padding: '10px 12px', borderRadius: '6px', fontSize: '0.78rem' }}>
                            <strong style={{ color: '#D97706', display: 'block', marginBottom: '2px', textTransform: 'uppercase' }}>
                              🚜 Парк Спецтехніки:
                            </strong>
                            <span style={{ color: isDark ? '#CCC' : '#444' }}>{dos.fleet}</span>
                          </div>
                        )}

                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '14px', fontSize: '0.8rem' }}>
                          <span style={{ color: '#888' }}>
                            Пов’язаних Запитів: <strong style={{ color: '#FF9944' }}>{linkedInquiriesCount}</strong>
                          </span>
                          <span style={{ color: '#22C55E', fontWeight: 900 }}>
                            {dos.totalDealsValue || 'За прайсом'}
                          </span>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div style={{ display: 'flex', gap: '8px', marginTop: '20px', paddingTop: '14px', borderTop: `1px solid ${isDark ? '#2A2A2A' : '#F1F5F9'}` }}>
                        <button
                          onClick={() => setViewDossierModal(dos)}
                          className="btn-primary"
                          style={{ flexGrow: 1, justifyContent: 'center', padding: '8px 12px', fontSize: '0.82rem' }}
                        >
                          <Eye size={14} />
                          <span>Переглянути Досьє</span>
                        </button>

                        <button
                          onClick={() => {
                            setEditingDossier(dos);
                            setIsAddDossierModalOpen(true);
                          }}
                          style={{
                            backgroundColor: isDark ? '#2A2A2A' : '#F1F5F9',
                            color: '#FF9944',
                            border: 'none',
                            borderRadius: '6px',
                            padding: '8px 12px',
                            cursor: 'pointer'
                          }}
                        >
                          <Edit3 size={15} />
                        </button>

                        <button
                          onClick={() => deleteDossier(dos.id)}
                          style={{
                            backgroundColor: isDark ? '#2A2A2A' : '#F1F5F9',
                            color: '#EF4444',
                            border: 'none',
                            borderRadius: '6px',
                            padding: '8px 12px',
                            cursor: 'pointer'
                          }}
                        >
                          <Trash2 size={15} />
                        </button>
                      </div>
                    </div>
                  );
                })}
            </div>

            {/* View Full Customer Dossier Detail Modal */}
            {viewDossierModal && (
              <div
                style={{
                  position: 'fixed',
                  inset: 0,
                  backgroundColor: 'rgba(0,0,0,0.85)',
                  backdropFilter: 'blur(6px)',
                  display: 'flex',
                  alignItems: 'center',
                  justify: 'center',
                  zIndex: 3000,
                  padding: '20px'
                }}
                onClick={() => setViewDossierModal(null)}
              >
                <div
                  onClick={(e) => e.stopPropagation()}
                  style={{
                    backgroundColor: isDark ? '#1C1C1C' : '#FFFFFF',
                    color: isDark ? '#FFFFFF' : '#111111',
                    borderRadius: '16px',
                    width: '100%',
                    maxWidth: '700px',
                    maxHeight: '90vh',
                    overflowY: 'auto',
                    boxShadow: '0 20px 50px rgba(0,0,0,0.6)',
                    border: `1px solid ${isDark ? '#333333' : '#E0E0E0'}`,
                    padding: '32px',
                    position: 'relative'
                  }}
                >
                  <button
                    onClick={() => setViewDossierModal(null)}
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
                      cursor: 'pointer'
                    }}
                  >
                    <X size={18} />
                  </button>

                  <div style={{ borderBottom: `1px solid ${isDark ? '#333' : '#E2E8F0'}`, paddingBottom: '16px', marginBottom: '24px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                      <span style={{ fontFamily: 'monospace', fontWeight: 900, color: '#FF9944', fontSize: '1rem' }}>
                        {viewDossierModal.id}
                      </span>
                      <span style={{
                        backgroundColor: '#FF6600',
                        color: '#FFF',
                        fontWeight: 800,
                        borderRadius: '4px',
                        padding: '4px 10px',
                        fontSize: '0.8rem'
                      }}>
                        {viewDossierModal.clientType}
                      </span>
                    </div>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 900, margin: 0 }}>
                      Офіційне Досьє: {viewDossierModal.name}
                    </h2>
                    {viewDossierModal.company && (
                      <p style={{ fontSize: '0.95rem', color: '#FF9944', fontWeight: 800, marginTop: '4px' }}>
                        🏢 {viewDossierModal.company} {viewDossierModal.taxId ? `(ЄДРПОУ: ${viewDossierModal.taxId})` : ''}
                      </p>
                    )}
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '24px', fontSize: '0.9rem' }}>
                    <div style={{ backgroundColor: isDark ? '#141414' : '#F8F9FA', padding: '16px', borderRadius: '8px' }}>
                      <strong style={{ display: 'block', color: '#FF9944', marginBottom: '8px', fontSize: '0.8rem', textTransform: 'uppercase' }}>
                        Контакти та Локація
                      </strong>
                      <div style={{ marginBottom: '6px' }}><strong>Телефон:</strong> <a href={`tel:${viewDossierModal.phone}`} style={{ color: '#FF9944', fontWeight: 800 }}>{viewDossierModal.phone}</a></div>
                      <div style={{ marginBottom: '6px' }}><strong>Email:</strong> {viewDossierModal.email || '-'}</div>
                      <div style={{ marginBottom: '6px' }}><strong>Місто:</strong> {viewDossierModal.city || 'Україна'}</div>
                      <div><strong>Регіон:</strong> {viewDossierModal.region || '-'}</div>
                    </div>

                    <div style={{ backgroundColor: isDark ? '#141414' : '#F8F9FA', padding: '16px', borderRadius: '8px' }}>
                      <strong style={{ display: 'block', color: '#FF9944', marginBottom: '8px', fontSize: '0.8rem', textTransform: 'uppercase' }}>
                        Комерційні Показники
                      </strong>
                      <div style={{ marginBottom: '6px' }}><strong>Оцінка Загальних Угод:</strong> <span style={{ color: '#22C55E', fontWeight: 900 }}>{viewDossierModal.totalDealsValue || 'За прайсом'}</span></div>
                      <div style={{ marginBottom: '6px' }}><strong>Дата Створення:</strong> {viewDossierModal.createdAt}</div>
                      <div><strong>Парк Спецтехніки:</strong> {viewDossierModal.fleet || 'Не вказано'}</div>
                    </div>
                  </div>

                  {/* History of Inquiries for this client */}
                  <div style={{ marginBottom: '24px' }}>
                    <strong style={{ display: 'block', color: '#FF9944', marginBottom: '10px', fontSize: '0.8rem', textTransform: 'uppercase' }}>
                      📜 Історія Комерційних Запитів та Заявок Клієнта:
                    </strong>
                    {inquiries.filter((i) => i.customerId === viewDossierModal.id || (i.customerName && i.customerName.toLowerCase() === viewDossierModal.name.toLowerCase())).length === 0 ? (
                      <p style={{ fontSize: '0.85rem', color: '#888', fontStyle: 'italic' }}>
                        Для цього клієнта ще немає пов’язаних комерційних запитів.
                      </p>
                    ) : (
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {inquiries
                          .filter((i) => i.customerId === viewDossierModal.id || (i.customerName && i.customerName.toLowerCase() === viewDossierModal.name.toLowerCase()))
                          .map((inq) => (
                            <div key={inq.id} style={{
                              backgroundColor: isDark ? '#141414' : '#F8F9FA',
                              border: `1px solid ${isDark ? '#333' : '#E0E0E0'}`,
                              padding: '12px 14px',
                              borderRadius: '8px',
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center',
                              fontSize: '0.85rem'
                            }}>
                              <div>
                                <span style={{ fontFamily: 'monospace', fontWeight: 900, color: '#FF9944' }}>{inq.id}</span>
                                <span style={{ marginLeft: '10px', fontWeight: 700 }}>{inq.productModel || inq.inquiryType}</span>
                                <div style={{ fontSize: '0.75rem', color: '#888' }}>{inq.date}</div>
                              </div>
                              <span style={{
                                backgroundColor: inq.status === 'Завершено' ? 'rgba(34, 197, 94, 0.15)' : 'rgba(255, 102, 0, 0.15)',
                                color: inq.status === 'Завершено' ? '#4ADE80' : '#FF9944',
                                padding: '3px 8px',
                                borderRadius: '4px',
                                fontSize: '0.75rem',
                                fontWeight: 800
                              }}>
                                {inq.status}
                              </span>
                            </div>
                          ))}
                      </div>
                    )}
                  </div>

                  <div style={{ marginBottom: '24px' }}>
                    <strong style={{ display: 'block', color: '#FF9944', marginBottom: '8px', fontSize: '0.8rem', textTransform: 'uppercase' }}>
                      Примітки CRM та Службова Інформація
                    </strong>
                    <div style={{
                      backgroundColor: isDark ? '#141414' : '#F8F9FA',
                      border: `1px solid ${isDark ? '#333' : '#E2E8F0'}`,
                      borderRadius: '8px',
                      padding: '14px',
                      fontSize: '0.88rem',
                      lineHeight: 1.6,
                      color: isDark ? '#DDD' : '#333'
                    }}>
                      {viewDossierModal.notes || 'Немає приміток.'}
                    </div>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
                    <a
                      href={`tel:${viewDossierModal.phone}`}
                      className="btn-primary"
                      style={{ padding: '10px 18px', fontSize: '0.85rem', textDecoration: 'none' }}
                    >
                      <Phone size={15} />
                      <span>Подзвонити Клієнту</span>
                    </a>

                    <button
                      onClick={() => {
                        const target = viewDossierModal;
                        setViewDossierModal(null);
                        setEditingDossier(target);
                        setIsAddDossierModalOpen(true);
                      }}
                      style={{
                        backgroundColor: isDark ? '#2A2A2A' : '#E2E8F0',
                        color: isDark ? '#FFF' : '#111',
                        border: 'none',
                        borderRadius: '6px',
                        padding: '10px 18px',
                        fontSize: '0.85rem',
                        fontWeight: 800,
                        cursor: 'pointer'
                      }}
                    >
                      Редагувати Досьє
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Product Add & Edit Modal */}
      <AddProductModal
        isOpen={isAddModalOpen}
        onClose={() => {
          setIsAddModalOpen(false);
          setEditingProduct(null);
        }}
        editingProduct={editingProduct}
      />

      {/* Spare Parts / Kits Add & Edit Modal */}
      <AddPartModal
        isOpen={isAddPartModalOpen}
        onClose={() => {
          setIsAddPartModalOpen(false);
          setEditingPart(null);
        }}
        editingPart={editingPart}
      />

      {/* News Add & Edit Modal */}
      <AddNewsModal
        isOpen={isAddNewsModalOpen}
        onClose={() => {
          setIsAddNewsModalOpen(false);
          setEditingNews(null);
        }}
        editingArticle={editingNews}
      />

      {/* Commercial Inquiry Add & Edit Modal */}
      <AddInquiryModal
        isOpen={isAddInquiryModalOpen}
        onClose={() => {
          setIsAddInquiryModalOpen(false);
          setEditingInquiry(null);
        }}
        onSave={saveInquiry}
        editingInquiry={editingInquiry}
        customerDossiers={customerDossiers}
      />

      {/* Customer Dossier Add & Edit Modal */}
      <AddCustomerDossierModal
        isOpen={isAddDossierModalOpen}
        onClose={() => {
          setIsAddDossierModalOpen(false);
          setEditingDossier(null);
        }}
        onSave={saveDossier}
        editingDossier={editingDossier}
      />
    </div>
  );
}
