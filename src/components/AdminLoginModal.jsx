import React, { useState } from 'react';
import { Lock, User, Eye, EyeOff, X, ShieldAlert, CheckCircle } from 'lucide-react';
import { useTranslation } from '../i18n/LanguageContext';
import { useTheme } from '../theme/ThemeContext';

export default function AdminLoginModal({ isOpen, onClose, onLoginSuccess }) {
  const { language } = useTranslation();
  const { theme } = useTheme();

  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const isDark = theme === 'dark';

  const handleLogin = (e) => {
    e.preventDefault();
    // Default administrator credentials check
    if (username.trim().toLowerCase() === 'admin' && password === 'ditchwitch2026') {
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
    <div style={{
      position: 'fixed',
      inset: 0,
      backgroundColor: 'rgba(0,0,0,0.85)',
      backdropFilter: 'blur(6px)',
      display: 'flex',
      alignItems: 'center',
      justify: 'center',
      zIndex: 2500,
      padding: '20px'
    }} onClick={onClose}>
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: isDark ? '#1E1E1E' : '#FFFFFF',
          color: isDark ? '#FFFFFF' : '#111111',
          width: '100%',
          maxWidth: '440px',
          borderRadius: '12px',
          padding: '32px',
          boxShadow: '0 20px 50px rgba(0,0,0,0.6)',
          border: `1px solid ${isDark ? '#333333' : '#E0E0E0'}`,
          position: 'relative',
          animation: 'fadeIn 0.25s ease forwards'
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
            color: isDark ? '#FFFFFF' : '#000000',
            border: 'none',
            borderRadius: '50%',
            width: '32px',
            height: '32px',
            display: 'flex',
            alignItems: 'center',
            justify: 'center',
            cursor: 'pointer'
          }}
        >
          <X size={18} />
        </button>

        {/* Lock Header Icon */}
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <div style={{
            width: '56px',
            height: '56px',
            backgroundColor: '#FF6600',
            borderRadius: '50%',
            display: 'inline-flex',
            alignItems: 'center',
            justify: 'center',
            color: '#FFFFFF',
            marginBottom: '12px',
            boxShadow: '0 4px 14px rgba(255, 102, 0, 0.4)'
          }}>
            <Lock size={26} />
          </div>

          <h2 style={{ fontSize: '1.5rem', fontWeight: 900, textTransform: 'uppercase' }}>
            {language === 'uk' ? 'Вхід Адміністратора' : language === 'pl' ? 'Logowanie Administratora' : 'Administrator Login'}
          </h2>
          <p style={{ fontSize: '0.85rem', color: isDark ? '#A0A0A0' : '#666666', marginTop: '4px' }}>
            Ditch Witch Ukraine Analytics & Dashboard
          </p>
        </div>

        {/* Error Notification */}
        {errorMsg && (
          <div style={{
            backgroundColor: 'rgba(244, 67, 54, 0.15)',
            border: '1px solid #F44336',
            color: '#F44336',
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
            <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, marginBottom: '6px', textTransform: 'uppercase', color: '#FF6600' }}>
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
                  backgroundColor: isDark ? '#141414' : '#F9F9FB',
                  border: `1px solid ${isDark ? '#333333' : '#CCCCCC'}`,
                  padding: '10px 12px 10px 38px',
                  borderRadius: '6px',
                  color: isDark ? '#FFFFFF' : '#000000',
                  fontSize: '0.9rem',
                  outline: 'none'
                }}
              />
            </div>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, marginBottom: '6px', textTransform: 'uppercase', color: '#FF6600' }}>
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
                  backgroundColor: isDark ? '#141414' : '#F9F9FB',
                  border: `1px solid ${isDark ? '#333333' : '#CCCCCC'}`,
                  padding: '10px 38px 10px 38px',
                  borderRadius: '6px',
                  color: isDark ? '#FFFFFF' : '#000000',
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

          {/* Credentials Hint Box */}
          <div style={{
            backgroundColor: isDark ? '#262626' : '#F0F4F8',
            padding: '10px 14px',
            borderRadius: '6px',
            fontSize: '0.78rem',
            color: isDark ? '#BBBBBB' : '#555555',
            borderLeft: '3px solid #FF6600'
          }}>
            <strong>🔑 {language === 'uk' ? 'Дані для входу:' : 'Default Credentials:'}</strong><br />
            {language === 'uk' ? 'Логін:' : 'User:'} <code>admin</code> | {language === 'uk' ? 'Пароль:' : 'Pass:'} <code>ditchwitch2026</code>
          </div>

          <button
            type="submit"
            className="btn-primary"
            style={{ width: '100%', justifyContent: 'center', marginTop: '8px' }}
          >
            <span>{language === 'uk' ? 'УВІЙТИ В ПАНЕЛЬ' : language === 'pl' ? 'ZALOGUJ DO PANELU' : 'LOGIN TO DASHBOARD'}</span>
          </button>
        </form>
      </div>
    </div>
  );
}
