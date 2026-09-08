import React, { useState } from 'react';
import { Lock, User, Eye, EyeOff, X, ShieldAlert, CheckCircle, ShieldCheck } from 'lucide-react';
import { useTranslation } from '../i18n/LanguageContext';

export default function AdminLoginModal({ isOpen, onClose, onLoginSuccess }) {
  const { language } = useTranslation();

  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('ditchwitch2026');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

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
        backgroundColor: 'rgba(0, 0, 0, 0.90)',
        backdropFilter: 'blur(10px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 2500,
        padding: '16px'
      }}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: '#121212',
          color: '#FFFFFF',
          width: '100%',
          maxWidth: '440px',
          borderRadius: '12px',
          padding: '36px 28px',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.95), 0 0 30px rgba(255, 102, 0, 0.25)',
          border: '1px solid #2A2A2A',
          borderTop: '5px solid #FF6600',
          position: 'relative',
          boxSizing: 'border-box'
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close"
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            backgroundColor: '#1E1E1E',
            border: '1px solid #333333',
            color: '#AAAAAA',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 0,
            cursor: 'pointer',
            outline: 'none',
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#FF6600';
            e.currentTarget.style.color = '#FFFFFF';
            e.currentTarget.style.borderColor = '#FF6600';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#1E1E1E';
            e.currentTarget.style.color = '#AAAAAA';
            e.currentTarget.style.borderColor = '#333333';
          }}
        >
          <X size={18} />
        </button>

        {/* Brand & Modal Header */}
        <div style={{ textAlign: 'center', marginBottom: '28px' }}>
          {/* Logo / Badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            backgroundColor: 'rgba(255, 102, 0, 0.12)',
            border: '2px solid #FF6600',
            color: '#FF6600',
            margin: '0 auto 16px auto',
            boxShadow: '0 0 20px rgba(255, 102, 0, 0.2)'
          }}>
            <Lock size={28} />
          </div>

          <div style={{
            fontSize: '0.75rem',
            fontWeight: 900,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#FF6600',
            marginBottom: '6px'
          }}>
            Ditch Witch Ukraine
          </div>

          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: 900,
            textTransform: 'uppercase',
            margin: 0,
            color: '#FFFFFF',
            letterSpacing: '0.02em',
            lineHeight: 1.2
          }}>
            {language === 'uk' ? 'Вхід Адміністратора' : language === 'pl' ? 'Logowanie Administratora' : 'Administrator Login'}
          </h2>
          <p style={{ fontSize: '0.82rem', color: '#888888', marginTop: '6px' }}>
            {language === 'uk' ? 'Панель управління та аналітики' : 'Control Panel & Analytics'}
          </p>
        </div>

        {/* Error Notification */}
        {errorMsg && (
          <div style={{
            backgroundColor: 'rgba(239, 68, 68, 0.15)',
            border: '1px solid #EF4444',
            color: '#FCA5A5',
            padding: '12px 14px',
            borderRadius: '8px',
            fontSize: '0.84rem',
            marginBottom: '18px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            <ShieldAlert size={18} style={{ flexShrink: 0, color: '#EF4444' }} />
            <span>{errorMsg}</span>
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          <div>
            <label style={{
              display: 'block',
              fontSize: '0.8rem',
              fontWeight: 900,
              marginBottom: '8px',
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              color: '#FF6600'
            }}>
              {language === 'uk' ? 'Ім’я Користувача' : language === 'pl' ? 'Nazwa Użytkownika' : 'Username'}
            </label>
            <div style={{ position: 'relative' }}>
              <User
                size={18}
                style={{
                  position: 'absolute',
                  left: '14px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: '#FF6600'
                }}
              />
              <input
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={{
                  width: '100%',
                  backgroundColor: '#0A0A0A',
                  border: '1px solid #333333',
                  padding: '12px 14px 12px 42px',
                  borderRadius: '6px',
                  color: '#FFFFFF',
                  fontSize: '0.95rem',
                  outline: 'none',
                  boxSizing: 'border-box',
                  transition: 'border-color 0.2s, box-shadow 0.2s'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#FF6600';
                  e.target.style.boxShadow = '0 0 10px rgba(255, 102, 0, 0.25)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#333333';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>
          </div>

          <div>
            <label style={{
              display: 'block',
              fontSize: '0.8rem',
              fontWeight: 900,
              marginBottom: '8px',
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              color: '#FF6600'
            }}>
              {language === 'uk' ? 'Пароль Доступу' : language === 'pl' ? 'Hasło Dostępowe' : 'Password'}
            </label>
            <div style={{ position: 'relative' }}>
              <Lock
                size={18}
                style={{
                  position: 'absolute',
                  left: '14px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: '#FF6600'
                }}
              />
              <input
                type={showPassword ? 'text' : 'password'}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                style={{
                  width: '100%',
                  backgroundColor: '#0A0A0A',
                  border: '1px solid #333333',
                  padding: '12px 42px 12px 42px',
                  borderRadius: '6px',
                  color: '#FFFFFF',
                  fontSize: '0.95rem',
                  outline: 'none',
                  boxSizing: 'border-box',
                  transition: 'border-color 0.2s, box-shadow 0.2s'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#FF6600';
                  e.target.style.boxShadow = '0 0 10px rgba(255, 102, 0, 0.25)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#333333';
                  e.target.style.boxShadow = 'none';
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
                  color: '#777777',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '4px'
                }}
              >
                {showPassword ? <EyeOff size={18} color="#FF6600" /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              padding: '14px',
              fontWeight: 900,
              fontSize: '0.95rem',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              marginTop: '8px',
              backgroundColor: '#FF6600',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              boxShadow: '0 4px 18px rgba(255, 102, 0, 0.45)',
              transition: 'all 0.25s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#E55C00';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 6px 22px rgba(255, 102, 0, 0.6)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#FF6600';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 18px rgba(255, 102, 0, 0.45)';
            }}
          >
            <CheckCircle size={20} />
            <span>{language === 'uk' ? 'УВІЙТИ В ПАНЕЛЬ' : 'ENTER ADMIN PANEL'}</span>
          </button>
        </form>
      </div>
    </div>
  );
}

