import React, { useState } from 'react';
import './portal.css';
import overlayImage from '../../../assets/overlayPortal.jpg';
import IMG1 from '../../../assets/IMG1.jpg';
import IMG2 from '../../../assets/IMG2.jpg';
import IMG3 from '../../../assets/IMG3.jpg';
import IMG4 from '../../../assets/IMG4.jpg';
import IMG5 from '../../../assets/IMG5.jpg';
import image1 from '../../../assets/image1.jpg';
import image2 from '../../../assets/image2.jpg';
import image3 from '../../../assets/image3.jpg';

const Portal = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  const handleNext = () => {
    const totalImages = images.length;
    setCurrentIndex((prevIndex) =>
      prevIndex < totalImages - 1 ? prevIndex + 1 : prevIndex
    );
  };

  const images = [IMG1, IMG5, IMG2, IMG3, IMG4]; // Agrega todas las imágenes aquí

  return (
    <div className="portal-container">
      <div className="left-column">
        <div className="conteudo">
          <div className="carrousel">
            <button className="carousel-arrow prev" onClick={handlePrev}>
              &#8249;
            </button>
            {images.map((image, index) => (
              <article key={index} className="card">
                <div>
                  <img
                    className="img"
                    src={image}
                    alt={`Imagen ${index + 1}`}
                  />
                </div>
              </article>
            ))}
            <button className="carousel-arrow next" onClick={handleNext}>
              &#8250;
            </button>
          </div>
          <div className="info">
            <h1>¿Quienes somos?</h1>
            <p>Divulgamos y comunicamos en formatos que alcancen efectivamente a comunidades de Pueblos Originarios, científicos, productores y tomadores de decisiones. Desarrollamos elementos y formatos educativos para la inclusión y educación de todos. Divulgamos y comunicamos en formatos que alcancen efectivamente a comunidades de Pueblos Originarios, científicos, productores y tomadores de decisiones. Desarrollamos elementos y formatos educativos para la inclusión y educación de todos. Divulgamos y comunicamos en formatos que alcancen efectivamente a comunidades de Pueblos Originarios, científicos, productores y tomadores de decisiones. Desarrollamos elementos y formatos educativos para la inclusión y educación de todos. Divulgamos y comunicamos en formatos que alcancen efectivamente a comunidades de Pueblos Originarios, científicos, productores y tomadores de decisiones. </p>
            <h2>Asociaciones con las que colaboramos: </h2>
            <div className="image-container">
              <img className="zoom-image" src={image1} alt="Asociación 1" />
              <img className="zoom-image" src={image2} alt="Asociación 2" />
              <img className="zoom-image" src={image3} alt="Asociación 3" />
  </div>
          </div>
        </div>
      </div>
      <div className="right-column">
        <div className="right-block">
          <div className="rectangle" style={{ backgroundImage: `url(${overlayImage})` }}>
            <div className="rectangle-content">
              <h2>Ley XVI N° 122 - "INSTITUTO MISIONERO DE BIODIVERSIDAD"</h2>
              <button className="btn-overlay">Descargar PDF</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portal;


