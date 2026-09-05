import React, { useState, useEffect } from 'react';
import { X, Newspaper, Check, Upload, Image as ImageIcon, FileText } from 'lucide-react';
import { useNews } from '../context/NewsContext';
import { useTheme } from '../theme/ThemeContext';

export const STOCK_NEWS_IMAGES = [
  { label: '📰 Stock Giornale (Newspaper)', url: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=800&auto=format&fit=crop' },
  { label: '🚜 Stock Спецтехніка (Equipment)', url: '/Risorse/Immagini/category_dirdrills.png' },
  { label: '🛠️ Stock Сервіс та Запчастини (Tools)', url: '/Risorse/Immagini/category_tools.png' },
  { label: '📡 Stock Локація Subsite (Electronics)', url: '/Risorse/Immagini/category_locating.png' }
];

export const NEWS_CATEGORIES = [
  { id: 'guides', uk: 'Поради та Рекомендації', en: 'Advice & Recommendations', pl: 'Poradniki i Rekomendacje' },
  { id: 'maintenance', uk: 'Сервіс та ТО', en: 'Service & Maintenance', pl: 'Serwis i Konserwacja' },
  { id: 'spotlights', uk: 'Огляди Техніки', en: 'Equipment Spotlights', pl: 'Prezentacje Sprzętu' },
  { id: 'releases', uk: 'Прес-релізи та Новини', en: 'Press Releases & News', pl: 'Komunikaty Prasowe i Wiadomości' },
  { id: 'other', uk: 'Інше', en: 'Other', pl: 'Inne' }
];

export default function AddNewsModal({ isOpen, onClose, editingArticle = null }) {
  const { addNewsArticle, updateNewsArticle } = useNews();
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const [categoryKey, setCategoryKey] = useState('guides');
  const [titleUk, setTitleUk] = useState('');
  const [subtitleUk, setSubtitleUk] = useState('');
  const [summaryUk, setSummaryUk] = useState('');
  const [contentUk, setContentUk] = useState('');
  const [imageUrl, setImageUrl] = useState(STOCK_NEWS_IMAGES[0].url);
  const [readTime, setReadTime] = useState('5 хв читання');
  const [featured, setFeatured] = useState(false);

  useEffect(() => {
    if (editingArticle) {
      setCategoryKey(editingArticle.categoryKey || editingArticle.category || 'guides');
      setTitleUk(editingArticle.title?.uk || editingArticle.title || '');
      setSubtitleUk(editingArticle.subtitle?.uk || editingArticle.subtitle || '');
      setSummaryUk(editingArticle.summary?.uk || editingArticle.summary || '');
      setContentUk(editingArticle.content?.uk || editingArticle.content || '');
      setImageUrl(editingArticle.image || STOCK_NEWS_IMAGES[0].url);
      setReadTime(editingArticle.readTime || '5 хв читання');
      setFeatured(!!editingArticle.featured);
    } else {
      setCategoryKey('guides');
      setTitleUk('');
      setSubtitleUk('');
      setSummaryUk('');
      setContentUk('');
      setImageUrl(STOCK_NEWS_IMAGES[0].url);
      setReadTime('5 хв читання');
      setFeatured(false);
    }
  }, [editingArticle, isOpen]);

  if (!isOpen) return null;

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImageUrl(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!titleUk.trim()) return;

    const todayStr = new Date().toLocaleDateString('uk-UA', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).toUpperCase();

    const formattedContent = contentUk.includes('<p>')
      ? contentUk
      : `<p>${contentUk.split('\n\n').join('</p><p>')}</p>`;

    const articlePayload = {
      id: editingArticle ? editingArticle.id : `news-${Date.now()}`,
      category: categoryKey,
      categoryKey,
      featured,
      image: imageUrl,
      date: todayStr,
      dateEn: new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' }).toUpperCase(),
      datePl: todayStr,
      readTime,
      readTimeEn: '5 min read',
      readTimePl: '5 min czytania',
      title: { uk: titleUk, en: titleUk, pl: titleUk },
      subtitle: { uk: subtitleUk, en: subtitleUk, pl: subtitleUk },
      summary: { uk: summaryUk || titleUk, en: summaryUk || titleUk, pl: summaryUk || titleUk },
      content: { uk: formattedContent, en: formattedContent, pl: formattedContent }
    };

    if (editingArticle) {
      updateNewsArticle(articlePayload);
    } else {
      addNewsArticle(articlePayload);
    }

    onClose();
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 2200,
      backgroundColor: 'rgba(0,0,0,0.85)',
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
        width: '100%',
        maxWidth: '680px',
        maxHeight: '90vh',
        overflowY: 'auto',
        boxShadow: '0 20px 50px rgba(0,0,0,0.6)',
        border: `1px solid ${isDark ? '#333333' : '#E0E0E0'}`,
        padding: '32px',
        position: 'relative'
      }}>
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

        <div style={{ marginBottom: '24px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: 'rgba(59, 130, 246, 0.15)',
            color: '#93C5FD',
            padding: '4px 12px',
            borderRadius: '20px',
            fontWeight: 800,
            fontSize: '0.8rem',
            marginBottom: '8px'
          }}>
            <Newspaper size={15} />
            <span>ПУБЛІКАЦІЯ НОВИНИ</span>
          </div>

          <h2 style={{ fontSize: '1.4rem', fontWeight: 900, textTransform: 'uppercase', margin: 0 }}>
            {editingArticle ? 'Редагування Публікації' : 'Опублікувати Нову Статтю'}
          </h2>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {/* Category Select */}
          <div>
            <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 800, marginBottom: '6px', textTransform: 'uppercase', color: '#FF9944' }}>
              Категорія Публікації
            </label>
            <select
              value={categoryKey}
              onChange={(e) => setCategoryKey(e.target.value)}
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
              {NEWS_CATEGORIES.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.uk} ({cat.en})
                </option>
              ))}
            </select>
          </div>

          {/* Title */}
          <div>
            <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 800, marginBottom: '6px', textTransform: 'uppercase', color: '#FF9944' }}>
              Заголовок Статті *
            </label>
            <input
              type="text"
              required
              value={titleUk}
              onChange={(e) => setTitleUk(e.target.value)}
              placeholder="напр. Нові Установки ГНБ Ditch Witch JT10 Надійшли На Склад"
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

          {/* Subtitle */}
          <div>
            <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 800, marginBottom: '6px', textTransform: 'uppercase', color: '#FF9944' }}>
              Підзаголовок / Теглайн
            </label>
            <input
              type="text"
              value={subtitleUk}
              onChange={(e) => setSubtitleUk(e.target.value)}
              placeholder="напр. Офіційний огляд нових бурових комплексів для України"
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

          {/* Short Summary */}
          <div>
            <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 800, marginBottom: '6px', textTransform: 'uppercase', color: '#FF9944' }}>
              Короткий Опис (для картки)
            </label>
            <textarea
              rows={2}
              value={summaryUk}
              onChange={(e) => setSummaryUk(e.target.value)}
              placeholder="Короткий анонс публікації, який відображається в списку новин..."
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

          {/* Image Source Selection (Stock Newspaper vs PC Upload vs Custom URL) */}
          <div>
            <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 800, marginBottom: '6px', textTransform: 'uppercase', color: '#FF9944' }}>
              Зображення Обкладинки (Stock Giornale або з ПК)
            </label>

            {/* Quick Stock Image Selector */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '8px', marginBottom: '12px' }}>
              {STOCK_NEWS_IMAGES.map((stock, i) => (
                <button
                  type="button"
                  key={i}
                  onClick={() => setImageUrl(stock.url)}
                  style={{
                    backgroundColor: imageUrl === stock.url ? 'rgba(255, 102, 0, 0.2)' : isDark ? '#141414' : '#F0F0F0',
                    color: imageUrl === stock.url ? '#FF9944' : isDark ? '#AAA' : '#444',
                    border: imageUrl === stock.url ? '1px solid #FF9944' : `1px solid ${isDark ? '#333' : '#DDD'}`,
                    borderRadius: '6px',
                    padding: '8px 10px',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    textAlign: 'left'
                  }}
                >
                  {stock.label}
                </button>
              ))}
            </div>

            {/* Computer File Upload + Custom URL Input */}
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <label style={{
                backgroundColor: 'rgba(59, 130, 246, 0.15)',
                color: '#93C5FD',
                border: '1px solid rgba(59, 130, 246, 0.35)',
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
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                placeholder="або введіть URL зображення..."
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

            {/* Image Preview */}
            {imageUrl && (
              <div style={{ marginTop: '10px', borderRadius: '8px', overflow: 'hidden', height: '100px', backgroundColor: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src={imageUrl} alt="Preview" style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'cover' }} />
              </div>
            )}
          </div>

          {/* Full Text Content */}
          <div>
            <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 800, marginBottom: '6px', textTransform: 'uppercase', color: '#FF9944' }}>
              Повний Текст Статті
            </label>
            <textarea
              rows={6}
              value={contentUk}
              onChange={(e) => setContentUk(e.target.value)}
              placeholder="Основний текст статті. Розділяйте абзаци подвійним переносом рядка..."
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

          {/* Options: Featured */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <input
              type="checkbox"
              id="featuredArticle"
              checked={featured}
              onChange={(e) => setFeatured(e.target.checked)}
              style={{ width: '18px', height: '18px', cursor: 'pointer' }}
            />
            <label htmlFor="featuredArticle" style={{ fontSize: '0.88rem', fontWeight: 700, cursor: 'pointer' }}>
              Закріпити як головну новину (Featured)
            </label>
          </div>

          <button
            type="submit"
            style={{
              width: '100%',
              backgroundColor: 'rgba(59, 130, 246, 0.18)',
              color: '#93C5FD',
              border: '1px solid rgba(59, 130, 246, 0.35)',
              borderRadius: '8px',
              padding: '12px',
              fontWeight: 900,
              fontSize: '0.92rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justify: 'center',
              gap: '8px',
              marginTop: '8px'
            }}
          >
            <Check size={18} />
            <span>{editingArticle ? 'ЗБЕРЕГТИ ЗМІНИ' : 'ОПУБЛІКУВАТИ СТАТТЮ'}</span>
          </button>
        </form>
      </div>
    </div>
  );
}
