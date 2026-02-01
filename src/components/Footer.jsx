import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <p>© {currentYear} FotoArt. {t('footer.rights')}</p>
        <div className="social-links">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">Pinterest</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;