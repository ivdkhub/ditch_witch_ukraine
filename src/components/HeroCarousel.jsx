import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { useTranslation } from '../i18n/LanguageContext';

export default function HeroCarousel({ onNavigate, onRequestQuote }) {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      productId: 'jt10',
      badge: t.hero.slide1.badge,
      title: t.hero.slide1.title,
      subtitle: t.hero.slide1.subtitle,
      btnMore: t.hero.slide1.btnMore,
      btnQuote: t.hero.slide1.btnQuote,
      image: '/Risorse/Immagini/dirdrills_jt10.png'
    },
    {
      id: 2,
      productId: 'hxt75',
      badge: t.hero.slide2.badge,
      title: t.hero.slide2.title,
      subtitle: t.hero.slide2.subtitle,
      btnMore: t.hero.slide2.btnMore,
      btnQuote: t.hero.slide2.btnQuote,
      image: '/Risorse/Immagini/category_vacumexcavator.png'
    },
    {
      id: 3,
      productId: 'jt5',
      badge: t.hero.slide3.badge,
      title: t.hero.slide3.title,
      subtitle: t.hero.slide3.subtitle,
      btnMore: t.hero.slide3.btnMore,
      btnQuote: t.hero.slide3.btnQuote,
      image: '/Risorse/Immagini/dirdrills_jt5.png'
    },
    {
      id: 4,
      productId: 'c16x',
      badge: t.hero.slide4.badge,
      title: t.hero.slide4.title,
      subtitle: t.hero.slide4.subtitle,
      btnMore: t.hero.slide4.btnMore,
      btnQuote: t.hero.slide4.btnQuote,
      image: '/Risorse/Immagini/c16x.png'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const slide = slides[currentSlide];

  const handleMoreClick = (e) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('products');
    } else {
      window.location.hash = '#products';
    }
  };

  const handleQuoteClick = (e) => {
    e.preventDefault();
    if (onRequestQuote) {
      onRequestQuote(slide.productId);
    } else if (onNavigate) {
      onNavigate('service');
    } else {
      window.location.hash = '#service';
    }
  };

  return (
    <section style={{
      position: 'relative',
      backgroundColor: '#0A0A0A',
      color: '#FFFFFF',
      minHeight: '480px',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center'
    }}>
      {/* Pattern Overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'radial-gradient(#2A2A2A 1px, transparent 1px)',
        backgroundSize: '24px 24px',
        opacity: 0.3
      }} />

      <div className="container" style={{
        position: 'relative',
        zIndex: 10,
        width: '100%',
        paddingTop: '60px',
        paddingBottom: '60px'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '40px',
          alignItems: 'center'
        }}>
          {/* Slide Text Content */}
          <div key={slide.id} className="animate-fade-in">
            {slide.badge && (
              <span style={{
                display: 'inline-block',
                backgroundColor: '#FF6600',
                color: '#FFFFFF',
                fontWeight: 800,
                fontSize: '0.75rem',
                letterSpacing: '0.1em',
                padding: '4px 12px',
                borderRadius: '2px',
                marginBottom: '16px'
              }}>
                {slide.badge}
              </span>
            )}

            <h1 style={{
              fontSize: 'clamp(1.8rem, 4vw, 3.2rem)',
              fontWeight: 900,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              marginBottom: '16px',
              color: '#FFFFFF'
            }}>
              {slide.title}
            </h1>

            <p style={{
              fontSize: 'clamp(0.95rem, 2vw, 1.2rem)',
              fontWeight: 600,
              color: '#CED0D1',
              marginBottom: '32px',
              textTransform: 'uppercase',
              letterSpacing: '0.04em'
            }}>
              {slide.subtitle}
            </p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <button
                onClick={handleMoreClick}
                className="btn-primary"
                style={{ border: 'none', cursor: 'pointer' }}
              >
                <span>{slide.btnMore}</span>
                <ArrowRight size={16} />
              </button>

              <button
                onClick={handleQuoteClick}
                className="btn-outline"
                style={{ cursor: 'pointer' }}
              >
                {slide.btnQuote}
              </button>
            </div>
          </div>

          {/* Slide Image */}
          <div style={{
            display: 'flex',
            justify: 'center',
            alignItems: 'center',
            position: 'relative'
          }}>
            <div style={{
              position: 'relative',
              width: '100%',
              maxHeight: '360px',
              display: 'flex',
              justify: 'center',
              alignItems: 'center'
            }}>
              <img
                src={slide.image}
                alt={slide.title}
                style={{
                  maxWidth: '100%',
                  maxHeight: '340px',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.8))',
                  transition: 'transform 0.5s ease'
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Controls with Dead-Centered Icons inside Orange Circles */}
      <button
        onClick={prevSlide}
        aria-label="Previous Slide"
        style={{
          position: 'absolute',
          left: '16px',
          top: '50%',
          transform: 'translateY(-50%)',
          backgroundColor: '#FF6600',
          border: 'none',
          color: '#FFFFFF',
          width: '46px',
          height: '46px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justify: 'center',
          cursor: 'pointer',
          zIndex: 20,
          boxShadow: '0 4px 14px rgba(255, 102, 0, 0.4)',
          transition: 'all 0.2s ease',
          outline: 'none'
        }}
      >
        <ChevronLeft size={24} style={{ color: '#FFFFFF', display: 'block', margin: 'auto' }} />
      </button>

      <button
        onClick={nextSlide}
        aria-label="Next Slide"
        style={{
          position: 'absolute',
          right: '16px',
          top: '50%',
          transform: 'translateY(-50%)',
          backgroundColor: '#FF6600',
          border: 'none',
          color: '#FFFFFF',
          width: '46px',
          height: '46px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justify: 'center',
          cursor: 'pointer',
          zIndex: 20,
          boxShadow: '0 4px 14px rgba(255, 102, 0, 0.4)',
          transition: 'all 0.2s ease',
          outline: 'none'
        }}
      >
        <ChevronRight size={24} style={{ color: '#FFFFFF', display: 'block', margin: 'auto' }} />
      </button>

      {/* Dots Indicator */}
      <div style={{
        position: 'absolute',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '8px',
        zIndex: 20
      }}>
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            style={{
              width: currentSlide === idx ? '24px' : '10px',
              height: '10px',
              borderRadius: '5px',
              backgroundColor: currentSlide === idx ? '#FF6600' : 'rgba(255, 255, 255, 0.4)',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          />
        ))}
      </div>
    </section>
  );
}
