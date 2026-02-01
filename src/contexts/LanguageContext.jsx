import React, { createContext, useState, useContext } from 'react';
import es from '../assets/translations/es.json';
import en from '../assets/translations/en.json';

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('es');
  
  const translations = {
    es,
    en
  };
  
  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    
    for (const k of keys) {
      value = value[k];
      if (!value) break;
    }
    
    return value || key;
  };
  
  const toggleLanguage = () => {
    setLanguage(prev => prev === 'es' ? 'en' : 'es');
  };
  
  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};