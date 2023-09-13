import React from 'react';
import './inicio.css';
import videoSource from '../../../assets/Cataratas.mp4';

function Inicio() {
  const redirectToPage = () => {
    // Cambia la URL a la que deseas redirigir
    window.location.href = 'https://www.tu-url-de-destino.com';
  };

  return (
    <div className="inicio-container">
      <video className="background-video" autoPlay muted loop>
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay">
        <div className="content">
          <h1>IMIBIO</h1>
          <h2>Instituto Misionero de Biodiversivad</h2>
          <p>Promovemos y apoyamos la creación de políticas e instrumentos legales que garanticen el uso sustentable de los bienes y servicios derivados de la biodiversidad.</p>
          <button className="explore-button" onClick={redirectToPage}>
            Conózcanos
          </button>
        </div>
      </div>
    </div>
  );
}

export default Inicio;

