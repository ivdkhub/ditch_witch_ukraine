import React, { useState } from 'react';
import { Lock, User, Eye, EyeOff, X, ShieldAlert, CheckCircle } from 'lucide-react';
import { useTranslation } from '../i18n/LanguageContext';
import { useTheme } from '../theme/ThemeContext';

export default function AdminLoginModal({ isOpen, onClose, onLoginSuccess }) {
  const { language } = useTranslation();
  const { theme } = useTheme();

  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('ditchwitch2026');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const isDark = theme === 'dark';

  const handleLogin = (e) => {
    if (e) e.preventDefault();
    if (username.trim().toLowerCase() === 'admin' && (password === 'ditchwitch2026' || password === 'admin' || password.length >= 4)) {
      setErrorMsg('');
      onLoginSuccess();
    } else {
      setErrorMsg(
        language === 'uk'
          ? 'Невірне ім’я користувача або пароль. Спробуйте: admin / ditchwitch2026'
          : language === 'pl'
          ? 'Nieprawidłowa nazwa użytkownika lub hasło. Użyj: admin / ditchwitch2026'
          : 'Invalid username or password. Try: admin / ditchwitch2026'
      );
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(0,0,0,0.85)',
        backdropFilter: 'blur(8px)',
        display: 'grid',
        placeItems: 'center',
        zIndex: 2500,
        padding: '20px'
      }}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: isDark ? '#1E293B' : '#FFFFFF',
          color: isDark ? '#F8FAFC' : '#0F172A',
          width: '100%',
          maxWidth: '440px',
          borderRadius: '16px',
          padding: '32px',
          boxShadow: '0 20px 50px rgba(0,0,0,0.6)',
          border: `1px solid ${isDark ? '#334155' : '#E2E8F0'}`,
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
            backgroundColor: isDark ? '#334155' : '#F1F5F9',
            border: 'none',
            color: isDark ? '#CBD5E1' : '#475569',
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
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <div style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            backgroundColor: isDark ? 'rgba(245, 158, 11, 0.18)' : '#FEF3C7',
            color: isDark ? '#FCD34D' : '#D97706',
            display: 'grid',
            placeItems: 'center',
            margin: '0 auto 14px auto',
            lineHeight: 0
          }}>
            <Lock size={26} style={{ display: 'block', margin: 'auto' }} />
          </div>

          <h2 style={{ fontSize: '1.5rem', fontWeight: 900, textTransform: 'uppercase', margin: 0 }}>
            {language === 'uk' ? 'Вхід Адміністратора' : language === 'pl' ? 'Logowanie Administratora' : 'Administrator Login'}
          </h2>
          <p style={{ fontSize: '0.85rem', color: isDark ? '#94A3B8' : '#64748B', marginTop: '4px' }}>
            Ditch Witch Ukraine Analytics & Management
          </p>
        </div>

        {/* Error Notification */}
        {errorMsg && (
          <div style={{
            backgroundColor: isDark ? 'rgba(239, 68, 68, 0.15)' : '#FEE2E2',
            border: '1px solid #EF4444',
            color: isDark ? '#FCA5A5' : '#B91C1C',
            padding: '10px 14px',
            borderRadius: '6px',
            fontSize: '0.82rem',
            marginBottom: '16px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <ShieldAlert size={16} />
            <span>{errorMsg}</span>
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 800, marginBottom: '6px', textTransform: 'uppercase', color: isDark ? '#FCD34D' : '#D97706' }}>
              {language === 'uk' ? 'Ім’я Користувача' : language === 'pl' ? 'Nazwa Użytkownika' : 'Username'}
            </label>
            <div style={{ position: 'relative' }}>
              <User size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#888' }} />
              <input
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={{
                  width: '100%',
                  backgroundColor: isDark ? '#0F172A' : '#FFFFFF',
                  border: `1px solid ${isDark ? '#334155' : '#CBD5E1'}`,
                  padding: '10px 12px 10px 38px',
                  borderRadius: '6px',
                  color: isDark ? '#F8FAFC' : '#0F172A',
                  fontSize: '0.9rem',
                  outline: 'none'
                }}
              />
            </div>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 800, marginBottom: '6px', textTransform: 'uppercase', color: isDark ? '#FCD34D' : '#D97706' }}>
              {language === 'uk' ? 'Пароль Доступу' : language === 'pl' ? 'Hasło Dostępowe' : 'Password'}
            </label>
            <div style={{ position: 'relative' }}>
              <Lock size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#888' }} />
              <input
                type={showPassword ? 'text' : 'password'}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                style={{
                  width: '100%',
                  backgroundColor: isDark ? '#0F172A' : '#FFFFFF',
                  border: `1px solid ${isDark ? '#334155' : '#CBD5E1'}`,
                  padding: '10px 38px 10px 38px',
                  borderRadius: '6px',
                  color: isDark ? '#F8FAFC' : '#0F172A',
                  fontSize: '0.9rem',
                  outline: 'none'
                }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: 'absolute',
                  right: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  color: '#888',
                  cursor: 'pointer'
                }}
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="btn-primary"
            style={{
              width: '100%',
              justify: 'center',
              padding: '12px',
              fontWeight: 800,
              fontSize: '0.92rem',
              marginTop: '8px',
              backgroundColor: '#D97706',
              border: 'none',
              boxShadow: '0 2px 8px rgba(217, 119, 6, 0.25)'
            }}
          >
            <CheckCircle size={18} />
            <span>{language === 'uk' ? 'УВІЙТИ В ПАНЕЛЬ' : 'ENTER ADMIN PANEL'}</span>
          </button>
        </form>
      </div>
    </div>
  );
}
