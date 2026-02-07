import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./Index.css"
import Nav from '../../components/nav/Nav';
import remodelacionR from '../../assets/images/remodelacion_residencial/11.png'
import obras from '../../assets/images/obras_civiles/5.png'
import fondoCards from '../../assets/images/fachadas/3.jpeg';
import img12 from '../../assets/images/impermeabilizacion/12.jpeg';
import img_principal from '../../assets/images/remodelacion_comercial/img_principal.jpeg';
import Footer from '../../components/Footer/Footer';
import Button_whats from '../../components/Button_whats/Button_whats';
import img10 from '../../assets/images/impermeabilizacion/10.jpeg';
import TagManager from 'react-gtm-module';

// import React, { useRef } from 'react';

function Home() {

  useEffect(() => {
    // Cargar el script de Google Tag Manager
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=AW-16614584501';
    document.head.appendChild(script);

    // Inicializar el gtag
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'AW-16614584501');
  });

  useEffect(() => {
    // Crear el script AMP
    const script = document.createElement('script');
    script.async = true;
    script.setAttribute('custom-element', 'amp-analytics');
    script.src = 'https://cdn.ampproject.org/v0/amp-analytics-0.1.js';
    document.head.appendChild(script);
  });

  useEffect(() => {
    // Cargar el script de Google Tag Manager (GTM)
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=AW-16614584501';
    document.head.appendChild(script);

    // Inicializar gtag con la configuración proporcionada en el JSON del amp-analytics
    window.dataLayer = window.dataLayer || [];

    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag('js', new Date());

    // Configurar el ID de Google Ads con el grupo 'default'
    gtag('config', 'AW-16614584501', {
      groups: 'default'
    });
  });
  //   const [url, setUrl] = useState('');

  //   useEffect(() => {
  //     setUrl(document.URL.split("/").pop());
  //     console.log(url);
  //   }, [url]);

  return (
    <div>
      <Button_whats />
      <Nav />
      <section className="container_portada_index">
        <div className="portada">
          <div className="curva__azul">
            <div className="content__curva__azul">
              <h1 className="title">Proyexi diseño y construcción s.a.s</h1>
              <p className="text">
                Tu Proyecto de Construcción Comienza Aquí: Asesoría y Soluciones
                 en un Solo Lugar
                 "Construimos Tus Ideas, Transformamos Tu Espacio"
                {/* Todo lo que necesitas para ejecutar tu proyecto de
                construcción en un solo lugar, y lo encuentras aquí, llámanos
                para asesorarte sin costo. */}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="servicios1">
        <div className="container__servicios">
          <div>
            <img className="img_cards" src={fondoCards} alt="imagen principal de la sección fachadas" />
            <h3>MANTENIMIENTO DE FACHADAS</h3>
            <Link to='/fachadas'>
              <button className="button_ver_mas">
                VER MÁS
              </button>
            </Link>
          </div>

          <div className='container__servicios'>
            <div>
              <img className="img_cards" src={img10} alt="imagen principal de la sección de obras civiles" />
            </div>
            <div className='sub_servicios_1_title responsive1'>
              <h3>IMPERMEABILIZACIÓN DE CUBIERTAS</h3>
              <Link to='/impermeabilizacion'>
                <button className="button_ver_mas">
                  VER MÁS
                </button>
              </Link>
            </div>
            <div className='sub_servicios_1_title responsive2'>
              <h3>IMPERMEABILIZACIÓN DE CUBIERTAS</h3>
              <Link to='/impermeabilizacion'>
                <button className="button_ver_mas">
                  VER MÁS
                </button>
              </Link>
            </div>
          </div>
          {/* <div>
            <img className="img_cards" src={remodelacionR} alt="imagen principal de la sección remodelación residencial" />
            <h3>REMODELACION RESIDENCIAL</h3>
            <Link to='/remodelacion_residencial'>
              <button className="button_ver_mas">
                VER MÁS
              </button>
            </Link>
          </div> */}
         {/* <div className='sub_servicios_1_title'>
            <img className="img_cards" src={obras} alt="imagen principal de la sección de obras civiles" />
            <h3>CONSTRUCCIÓN DE OBRAS CIVILES</h3>
            <Link to='/obras_civiles'>
              <button className="button_ver_mas">
                VER MÁS
              </button>
            </Link>
          </div>*/}
        </div>
        <div className='sub_servicios'>
        
          {/*<div className='sub_servicios_1'>
            <div>
              <img className="img_cards" src={img_principal} alt="imagen principal de la sección de obras civiles" />
            </div>
            <div className='sub_servicios_1_title'>
              <h3>REMODELACIÓN COMERCIAL Y RESIDENCIAL</h3>
              <Link to='/remodelacion_comercial'>
                <button className="button_ver_mas">
                  VER MÁS
                </button>
              </Link>
        </div>
          </div>*/}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Home;