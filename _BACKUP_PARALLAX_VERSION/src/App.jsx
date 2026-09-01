import React, { useState, useEffect } from 'react';
import { LanguageProvider } from './i18n/LanguageContext';
import { ThemeProvider } from './theme/ThemeContext';
import { ProductProvider } from './context/ProductContext';
import { DocumentProvider } from './context/DocumentContext';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import HeroCarousel from './components/HeroCarousel';
import WelcomeSection from './components/WelcomeSection';
import ProductCategories from './components/ProductCategories';
import FeaturedEquipment from './components/FeaturedEquipment';
import LatestNews from './components/LatestNews';
import Footer from './components/Footer';
import ProductsPage from './pages/ProductsPage';
import NewsPage from './pages/NewsPage';
import AboutPage from './pages/AboutPage';
import DocumentsPage from './pages/DocumentsPage';
import PartsServicePage from './pages/PartsServicePage';
import AdminDashboardPage from './pages/AdminDashboardPage';
import AdminLoginModal from './components/AdminLoginModal';
import ScrollToTopButton from './components/ScrollToTopButton';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [activeProductCategory, setActiveProductCategory] = useState('all');
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#admin')) {
        if (!isAdminLoggedIn) {
          setIsLoginModalOpen(true);
        } else {
          setCurrentPage('admin');
        }
      } else if (hash.startsWith('#products')) {
        setCurrentPage('products');
      } else if (hash.startsWith('#news')) {
        setCurrentPage('news');
      } else if (hash.startsWith('#about')) {
        setCurrentPage('about');
      } else if (hash.startsWith('#docs')) {
        setCurrentPage('docs');
      } else if (hash.startsWith('#service')) {
        setCurrentPage('service');
      } else if (hash === '#home' || hash === '' || hash === '#') {
        setCurrentPage('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [isAdminLoggedIn]);

  const navigateTo = (page, categoryId = 'all') => {
    if (page === 'admin') {
      if (!isAdminLoggedIn) {
        setIsLoginModalOpen(true);
        return;
      }
    }
    if (page === 'products') {
      setActiveProductCategory(categoryId || 'all');
    }
    setCurrentPage(page);
    window.location.hash = `#${page}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenAdmin = () => {
    if (isAdminLoggedIn) {
      setCurrentPage('admin');
      window.location.hash = '#admin';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setIsLoginModalOpen(true);
    }
  };

  const handleLoginSuccess = () => {
    setIsAdminLoggedIn(true);
    setIsLoginModalOpen(false);
    setCurrentPage('admin');
    window.location.hash = '#admin';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLogout = () => {
    setIsAdminLoggedIn(false);
    setCurrentPage('home');
    window.location.hash = '#home';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <ThemeProvider>
      <LanguageProvider>
        <ProductProvider>
          <DocumentProvider>
            <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative' }}>
              <TopBar onOpenAdmin={handleOpenAdmin} />
              <Navbar currentPage={currentPage} onNavigate={navigateTo} />

              <main style={{ flexGrow: 1 }}>
                {currentPage === 'admin' && isAdminLoggedIn ? (
                  <AdminDashboardPage onLogout={handleLogout} />
                ) : currentPage === 'products' ? (
                  <ProductsPage initialCategory={activeProductCategory} />
                ) : currentPage === 'news' ? (
                  <NewsPage />
                ) : currentPage === 'about' ? (
                  <AboutPage onNavigateToProducts={() => navigateTo('products')} />
                ) : currentPage === 'docs' ? (
                  <DocumentsPage />
                ) : currentPage === 'service' ? (
                  <PartsServicePage />
                ) : (
                  <>
                    <HeroCarousel />
                    <WelcomeSection />
                    <ProductCategories onNavigateToProducts={() => navigateTo('products')} />
                    <FeaturedEquipment />
                    <LatestNews onNavigateToNews={() => navigateTo('news')} />
                  </>
                )}
              </main>

              <Footer onNavigate={navigateTo} onOpenAdmin={handleOpenAdmin} />

              {/* Floating Scroll-to-Top Button */}
              <ScrollToTopButton />

              {/* Admin Login Modal */}
              <AdminLoginModal
                isOpen={isLoginModalOpen}
                onClose={() => setIsLoginModalOpen(false)}
                onLoginSuccess={handleLoginSuccess}
              />
            </div>
          </DocumentProvider>
        </ProductProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}
