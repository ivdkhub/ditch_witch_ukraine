import React, { createContext, useContext, useState } from 'react';
import { productsData as initialProducts } from '../data/productsData';

const ProductContext = createContext();

export function ProductProvider({ children }) {
  // Ensure initial products have allowedCountries = ['ALL'] if omitted
  const formattedInitialProducts = initialProducts.map((p) => ({
    ...p,
    allowedCountries: p.allowedCountries || ['ALL']
  }));

  const [products, setProducts] = useState(formattedInitialProducts);
  // Default visitor country: UA (Ukraine)
  const [visitorCountry, setVisitorCountry] = useState('UA');

  // Administrator selected Navbar categories (Maximum 5 categories)
  const [navCategoryIds, setNavCategoryIdsState] = useState([
    'hdd',
    'mixers',
    'electronics',
    'trenchers',
    'consumables'
  ]);

  // Administrator selected Top 3 Featured Products for homepage
  const [topProductIds, setTopProductIdsState] = useState([
    'jt10',
    'sk3000',
    'c16x'
  ]);

  const setNavCategoryIds = (ids) => {
    // Limit to max 5 categories
    setNavCategoryIdsState(ids.slice(0, 5));
  };

  const toggleTopProduct = (productId) => {
    setTopProductIdsState((prev) => {
      if (prev.includes(productId)) {
        return prev.filter((id) => id !== productId);
      } else {
        if (prev.length >= 3) {
          return [...prev.slice(1), productId];
        }
        return [...prev, productId];
      }
    });
  };

  const setTopProductIds = (ids) => {
    setTopProductIdsState(ids.slice(0, 3));
  };

  // Add new product from Admin Panel
  const addProduct = (newProduct) => {
    const productToAdd = {
      id: `custom-${Date.now()}`,
      category: newProduct.category || 'hdd',
      categoryKey: newProduct.categoryKey || 'hdd',
      image: newProduct.image || '/Risorse/Immagini/category_drilling.png',
      featured: newProduct.featured || false,
      title: {
        uk: newProduct.titleUk || newProduct.titleEn,
        en: newProduct.titleEn || newProduct.titleUk,
        pl: newProduct.titlePl || newProduct.titleUk
      },
      tagline: {
        uk: newProduct.taglineUk || newProduct.taglineEn,
        en: newProduct.taglineEn || newProduct.taglineUk,
        pl: newProduct.taglinePl || newProduct.taglineUk
      },
      specs: newProduct.specs || { engine: 'Diesel 50 HP', weight: '1500 kg' },
      desc: {
        uk: newProduct.descUk || newProduct.descEn,
        en: newProduct.descEn || newProduct.descUk,
        pl: newProduct.descPl || newProduct.descUk
      },
      allowedCountries: newProduct.allowedCountries && newProduct.allowedCountries.length > 0
        ? newProduct.allowedCountries
        : ['ALL']
    };

    setProducts((prev) => [productToAdd, ...prev]);
  };

  // Update existing product country targeting
  const updateProductTargeting = (productId, allowedCountries) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === productId ? { ...p, allowedCountries } : p))
    );
  };

  // Delete product
  const deleteProduct = (productId) => {
    setProducts((prev) => prev.filter((p) => p.id !== productId));
  };

  // Strict geo-access control:
  // If visitor is in PL (Poland), products enabled ONLY for UA (Ukraine) are COMPLETELY HIDDEN everywhere on the site!
  const getVisibleProducts = () => {
    if (visitorCountry === 'ALL') return products;
    return products.filter((p) => {
      if (!p.allowedCountries || p.allowedCountries.length === 0) return true;
      return p.allowedCountries.includes('ALL') || p.allowedCountries.includes(visitorCountry);
    });
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        visibleProducts: getVisibleProducts(),
        visitorCountry,
        setVisitorCountry,
        navCategoryIds,
        setNavCategoryIds,
        topProductIds,
        setTopProductIds,
        toggleTopProduct,
        addProduct,
        updateProductTargeting,
        deleteProduct
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export function useProducts() {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
}
