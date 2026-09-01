import React, { createContext, useContext, useState, useEffect } from 'react';
import { documentsData as initialDocs } from '../data/documentsData';

const DocumentContext = createContext();

export function DocumentProvider({ children }) {
  const [documents, setDocuments] = useState(() => {
    const saved = localStorage.getItem('dw_documents');
    return saved ? JSON.parse(saved) : initialDocs;
  });

  useEffect(() => {
    localStorage.setItem('dw_documents', JSON.stringify(documents));
  }, [documents]);

  const addDocument = (newDoc) => {
    setDocuments((prev) => [newDoc, ...prev]);
  };

  const deleteDocument = (id) => {
    setDocuments((prev) => prev.filter((d) => d.id !== id));
  };

  return (
    <DocumentContext.Provider value={{ documents, addDocument, deleteDocument }}>
      {children}
    </DocumentContext.Provider>
  );
}

export function useDocuments() {
  return useContext(DocumentContext);
}
