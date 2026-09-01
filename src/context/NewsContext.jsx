import React, { createContext, useContext, useState, useEffect } from 'react';
import { newsData as initialNewsData } from '../data/newsData';

const NewsContext = createContext();

export function NewsProvider({ children }) {
  const [newsList, setNewsList] = useState(() => {
    const saved = localStorage.getItem('ditchwitch_news');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Failed to parse news from localStorage', e);
      }
    }
    return initialNewsData;
  });

  useEffect(() => {
    localStorage.setItem('ditchwitch_news', JSON.stringify(newsList));
  }, [newsList]);

  const addNewsArticle = (newArticle) => {
    setNewsList((prev) => [newArticle, ...prev]);
  };

  const updateNewsArticle = (updatedArticle) => {
    setNewsList((prev) =>
      prev.map((art) => (art.id === updatedArticle.id ? updatedArticle : art))
    );
  };

  const deleteNewsArticle = (id) => {
    setNewsList((prev) => prev.filter((art) => art.id !== id));
  };

  const resetToDefaultNews = () => {
    setNewsList(initialNewsData);
    localStorage.removeItem('ditchwitch_news');
  };

  return (
    <NewsContext.Provider
      value={{
        newsList,
        addNewsArticle,
        updateNewsArticle,
        deleteNewsArticle,
        resetToDefaultNews
      }}
    >
      {children}
    </NewsContext.Provider>
  );
}

export function useNews() {
  const context = useContext(NewsContext);
  if (!context) {
    throw new Error('useNews must be used within a NewsProvider');
  }
  return context;
}
