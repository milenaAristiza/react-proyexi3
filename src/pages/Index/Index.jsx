/*import React, { useState, useEffect } from 'react';*/
import "./Index.css"
/*import Nav from '../../components/nav/Nav';
import remodelacionR from '../../assets/images/remodelacion_residencial/11.png'
import obras from '../../assets/images/obras_civiles/5.png'
import fondoCards from '../../assets/images/fachadas/3.jpeg';
import img12 from '../../assets/images/impermeabilizacion/12.jpeg';
import img_principal from '../../assets/images/remodelacion_comercial/img_principal.jpeg';
import Footer from '../../components/Footer/Footer';
import Button_whats from '../../components/Button_whats/Button_whats';
import img10 from '../../assets/images/impermeabilizacion/10.jpeg';
import TagManager from 'react-gtm-module';*/

// import React, { useRef } from 'react';
/*export default Home;*/

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import img_16021 from '../../assets/images/fachadas/nuev4.jpeg';
import imgdes from '../../assets/images/fachadas/comp6.jpeg';
import despuesImg from '../../assets/images/fachadas/imgPrincipal.jpeg';
import img_16020 from '../../assets/images/fachadas/nuev3.jpeg';
import imgf from '../../assets/images/fachadas/comp5.jpeg';
import WhatsappButton from "../../components/Button_whats/Button_whats";
import Navbar from "../../components/ButtonInicio/ButtonInicio";
import "./Index.css";
import "../Fachadas/Fachadas";

const Hero = () => {

  const [sliderPosition, setSliderPosition] = useState(50);

  // GOOGLE ADS
  useEffect(() => {
    if (window.gtag) return;

    const script = document.createElement("script");
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=AW-16614584501";
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];

    function gtag() {
      window.dataLayer.push(arguments);
    }

    window.gtag = gtag;

    gtag("js", new Date());
    gtag("config", "AW-16614584501");

  }, []);

  const handleMove = (e) => {
    setSliderPosition(e.target.value);
  };

  return (
    <>

      <>
        <Navbar />
        {/* Aquí van tus rutas */}
      </>

      {/* HERO PRINCIPAL */}
      <section
        id="hero"
        className="hero"
        style={{ backgroundImage: `url(${img_16021})` }}
      >
        <div className="overlay"></div>

        <div className="hero-content">
          <h1>
            Transformamos <br />
            la fachada de tu edificio
          </h1>

          <p>
            Especialistas en mantenimiento, restauración e impermeabilización
            con resultados visibles y garantizados.
          </p>

          <div className="buttons">

            <WhatsappButton
              text="Solicitar Cotización"
              className="btn-primary"
              message="Hola, quiero una cotización para mantenimiento de fachada en Bogotá."
            />

            {/* 👇 IMPORTANTE: todo en minúscula */}
            <Link to="/fachadas" className="btn-secondary">
              Ver Proyectos
            </Link>

          </div>

          <div className="stats">
            <div>
              <h2>+120</h2>
              <span>Proyectos ejecutados</span>
            </div>

            <div>
              <h2>+8</h2>
              <span>Años de experiencia</span>
            </div>

            <div>
              <h2>✔</h2>
              <span>Garantía escrita</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN MANTENIMIENTO */}
      <section className="mantenimiento">
        <div className="mantenimiento-container">

          <div className="mantenimiento-text">
            <h2>Mantenimiento<br />de fachadas</h2>

            <ul>
              <li>Lavado especializado</li>
              <li>Restauración</li>
              <li>Sellado y pintura</li>
              <li>Protección estructural</li>
            </ul>

            <WhatsappButton
              text="Solicitar Cotización"
              className="btn-primary"
              message="Hola, quiero un diagnóstico para mi fachada en Bogotá."
            />
          </div>

          <div className="before-after">
            <div className="image-container">

              <img src={imgdes} alt="Antes" className="image before" />

              <div
                className="after-wrapper"
                style={{ width: `${sliderPosition}%` }}
              >
                <img src={despuesImg} alt="Después" className="image after" />
              </div>

              <input
                type="range"
                min="0"
                max="100"
                value={sliderPosition}
                onChange={handleMove}
                className="slider"
              />

              <div className="labels">
                {/*<span>ANTES</span>
                <span>DESPUÉS</span>*/}
              </div>

            </div>

            <p className="descripcion">
              Resultados reales en edificios corporativos y residenciales.
            </p>
          </div>

        </div>
      </section>

      {/* TRANSFORMACIONES */}
      <section className="transformaciones">
        <div className="transformaciones-header">
          <h2>Mira la transformación</h2>
          <p>Resultados reales en edificios corporativos y residenciales.</p>
        </div>

        <div className="transformaciones-grid">

          <div className="transform-card">
            <div className="transform-image">
              <img src={img_16020} alt="Colmédica Bogotá" />
              <span className="label-antes">ANTES</span>
              <span className="label-despues">DESPUÉS</span>
            </div>

            <div className="transform-info">
              <h4>Colmédica – Bogotá</h4>
              <span>
                Impermeabilización técnica de fachada.
                Protección estructural contra filtraciones y humedad.
              </span>
            </div>
          </div>

          <div className="transform-card">
            <div className="transform-image">
              <img src={imgf} alt="AR Centro de Convenciones Bogotá" />
              <span className="label-antes">ANTES</span>
              <span className="label-despues">DESPUÉS</span>
            </div>

            <div className="transform-info">
              <h4>AR Centro de Convenciones – Bogotá</h4>
              <span>
                Rehabilitación e impermeabilización de fachada.
                Mayor vida útil y reducción de mantenimiento.
              </span>
            </div>
          </div>

        </div>

        <div className="transform-btn">
          {/* 👇 también en minúscula */}
          <Link to="./fachadas" className="btn-primary">
            Ver todos los proyectos
          </Link>
        </div>
      </section>
    </>
  );
};

export default Hero;