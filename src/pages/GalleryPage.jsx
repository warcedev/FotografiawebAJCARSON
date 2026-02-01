import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

// Imágenes de ejemplo organizadas por categorías
const galleryImages = {
  all: [
    { id: 1, src: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', category: 'portraits' },
    { id: 2, src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', category: 'weddings' },
    { id: 3, src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', category: 'landscapes' },
    { id: 4, src: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', category: 'events' },
    { id: 5, src: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', category: 'portraits' },
    { id: 6, src: 'https://images.unsplash.com/photo-1554048612-b6a482bc67e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', category: 'weddings' },
    { id: 7, src: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', category: 'landscapes' },
    { id: 8, src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', category: 'events' },
    { id: 9, src: 'https://images.unsplash.com/photo-1516726817505-f5ed825624d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', category: 'portraits' },
  ],
  portraits: [1, 5, 9],
  weddings: [2, 6],
  landscapes: [3, 7],
  events: [4, 8]
};

const GalleryPage = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = ['all', 'portraits', 'weddings', 'landscapes', 'events'];
  
  // Filtrar imágenes según la categoría seleccionada
  const getFilteredImages = () => {
    if (activeCategory === 'all') {
      return galleryImages.all;
    }
    
    return galleryImages.all.filter(img => 
      galleryImages[activeCategory].includes(img.id)
    );
  };
  
  return (
    <div className="gallery-page">
      <section className="gallery-hero">
        <div className="container">
          <h1>{t('gallery.title')}</h1>
        </div>
      </section>
      
      <section className="gallery-content">
        <div className="container">
          <div className="gallery-categories">
            {categories.map(category => (
              <button
                key={category}
                className={`category-btn ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {t(`gallery.categories.${category}`)}
              </button>
            ))}
          </div>
          
          <div className="gallery-grid">
            {getFilteredImages().map(image => (
              <div key={image.id} className="gallery-item">
                <img src={image.src} alt={`Foto ${image.id}`} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;
