import React from 'react';
import Hero from '../components/Hero';
import { useLanguage } from '../contexts/LanguageContext';

// Imágenes de ejemplo (reemplazar con imágenes reales)
const featuredPhotos = [
  { id: 1, src: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Retrato' },
  { id: 2, src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Boda' },
  { id: 3, src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w-800&q=80', alt: 'Paisaje' },
  { id: 4, src: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Evento' },
  { id: 5, src: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Retrato 2' },
  { id: 6, src: 'https://images.unsplash.com/photo-1554048612-b6a482bc67e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Boda 2' },
];

const Home = () => {
  const { t } = useLanguage();
  
  return (
    <div className="home">
      <Hero />
      
      <section className="about-section">
        <div className="container">
          <h2>{t('home.aboutTitle')}</h2>
          <div className="about-content">
            <div className="about-text">
              <p>{t('home.aboutText')}</p>
            </div>
            <div className="about-image">
              <img src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Fotógrafo" />
            </div>
          </div>
        </div>
      </section>
      
      <section className="featured-photos">
        <div className="container">
          <h2>{t('home.featuredPhotos')}</h2>
          <div className="photo-grid">
            {featuredPhotos.map(photo => (
              <div key={photo.id} className="photo-card">
                <img src={photo.src} alt={photo.alt} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;