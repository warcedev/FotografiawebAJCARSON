import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();
  
  return (
    <button className="language-toggle" onClick={toggleLanguage}>
      {language === 'es' ? 'EN' : 'ES'}
    </button>
  );
};

export default LanguageToggle;