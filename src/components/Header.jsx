import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageToggle from './LanguageToggle';

const Header = () => {
  const { t } = useLanguage();
  
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <h1>FotoArt</h1>
        </div>
        
        <nav className="nav">
          <ul>
            <li><Link to="/">{t('header.home')}</Link></li>
            <li><Link to="/gallery">{t('header.gallery')}</Link></li>
            <li><Link to="/contact">{t('header.contact')}</Link></li>
          </ul>
        </nav>
        
        <LanguageToggle />
      </div>
    </header>
  );
};

export default Header;
