import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulación de envío del formulario
    // En un proyecto real, aquí harías una llamada a una API
    if (formData.name && formData.email && formData.message) {
      setStatus({
        type: 'success',
        message: t('contact.success')
      });
      
      // Resetear formulario
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      
      // Limpiar mensaje después de 5 segundos
      setTimeout(() => {
        setStatus({ type: '', message: '' });
      }, 5000);
    } else {
      setStatus({
        type: 'error',
        message: t('contact.error')
      });
    }
  };
  
  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <h1>{t('contact.title')}</h1>
          <p>{t('contact.subtitle')}</p>
        </div>
      </section>
      
      <section className="contact-content">
        <div className="container">
          <div className="contact-wrapper">
            <div className="contact-info">
              <h3>Información de Contacto</h3>
              <p><strong>Email:</strong> contacto@fotoart.com</p>
              <p><strong>Teléfono:</strong> +34 123 456 789</p>
              <p><strong>Dirección:</strong> Calle Fotografía 123, Madrid, España</p>
              
              <div className="contact-hours">
                <h4>Horario de Atención</h4>
                <p>Lunes a Viernes: 9:00 - 18:00</p>
                <p>Sábados: 10:00 - 14:00</p>
              </div>
            </div>
            
            <div className="contact-form-container">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">{t('contact.name')}</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">{t('contact.email')}</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">{t('contact.message')}</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    required
                  ></textarea>
                </div>
                
                {status.message && (
                  <div className={`form-status ${status.type}`}>
                    {status.message}
                  </div>
                )}
                
                <button type="submit" className="submit-btn">
                  {t('contact.send')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;