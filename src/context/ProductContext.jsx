import React, { createContext, useContext, useState, useEffect } from 'react';
import { productsData as initialProducts } from '../data/productsData';

const ProductContext = createContext();

export function ProductProvider({ children }) {
  const formattedInitialProducts = initialProducts.map((p) => ({
    ...p,
    allowedCountries: p.allowedCountries || ['ALL']
  }));

  const [products, setProducts] = useState(() => {
    const saved = localStorage.getItem('ditchwitch_products');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        // Sync updated image URLs and merge missing initial products
        const initialMap = new Map(formattedInitialProducts.map((p) => [p.id, p]));
        const updated = parsed.map((p) => {
          const init = initialMap.get(p.id);
          if (init) {
            return {
              ...p,
              image: (init.image || p.image || '').replace(/\.jpg$/, '.png'),
              specs: init.specs || p.specs
            };
          }
          return p;
        });

        const parsedIds = new Set(updated.map((p) => p.id));
        const missingInitial = formattedInitialProducts.filter((p) => !parsedIds.has(p.id));
        const finalProducts = [...updated, ...missingInitial];
        localStorage.setItem('ditchwitch_products', JSON.stringify(finalProducts));
        return finalProducts;
      } catch (e) {
        console.error(e);
      }
    }
    return formattedInitialProducts;
  });

  useEffect(() => {
    localStorage.setItem('ditchwitch_products', JSON.stringify(products));
  }, [products]);

  // Default visitor country: UA (Ukraine)
  const [visitorCountry, setVisitorCountry] = useState('UA');

  // Administrator selected Navbar categories (Maximum 5 categories)
  const [navCategoryIds, setNavCategoryIdsState] = useState([
    'hdd',
    'mixers',
    'electronics',
    'trenchers',
    'other'
  ]);

  // Administrator selected Top 3 Featured Products for homepage
  const [topProductIds, setTopProductIdsState] = useState([
    'jt10',
    'sk3000',
    'c16x'
  ]);

  const setNavCategoryIds = (ids) => {
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
      id: newProduct.id || `custom-prod-${Date.now()}`,
      category: newProduct.category || 'other',
      categoryKey: newProduct.category || 'other',
      image: newProduct.image || '',
      featured: newProduct.featured || false,
      title: typeof newProduct.title === 'object' ? newProduct.title : {
        uk: newProduct.titleUk || newProduct.title || 'Новий Товар',
        en: newProduct.titleEn || newProduct.title || 'New Product',
        pl: newProduct.titlePl || newProduct.title || 'Nowy Produkt'
      },
      tagline: typeof newProduct.tagline === 'object' ? newProduct.tagline : {
        uk: newProduct.taglineUk || 'Офіційна техніка Ditch Witch',
        en: newProduct.taglineEn || 'Official Ditch Witch Machinery',
        pl: newProduct.taglinePl || 'Oficjalny sprzęt Ditch Witch'
      },
      specs: newProduct.specs || { engine: 'OEM Spec', weight: '-' },
      desc: typeof newProduct.desc === 'object' ? newProduct.desc : {
        uk: newProduct.descUk || 'Офіційне обладнання Ditch Witch Ukraine.',
        en: newProduct.descEn || 'Official Ditch Witch Ukraine equipment.',
        pl: newProduct.descPl || 'Oficjalny sprzęt Ditch Witch Ukraina.'
      },
      allowedCountries: newProduct.allowedCountries && newProduct.allowedCountries.length > 0
        ? newProduct.allowedCountries
        : ['ALL']
    };

    setProducts((prev) => [productToAdd, ...prev]);
  };

  // Update existing product
  const updateProduct = (updatedProduct) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === updatedProduct.id ? { ...p, ...updatedProduct } : p))
    );
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

  // Reset to default products
  const resetToDefaultProducts = () => {
    setProducts(formattedInitialProducts);
    localStorage.removeItem('ditchwitch_products');
  };

  // Strict geo-access control:
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
        updateProduct,
        updateProductTargeting,
        deleteProduct,
        resetToDefaultProducts
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
