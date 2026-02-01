import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();
  
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>{t('home.title')}</h1>
        <p>{t('home.subtitle')}</p>
      </div>
    </section>
  );
};

export default Hero;