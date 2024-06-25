// import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./Index.css"
import Nav from '../../components/nav/Nav';
import remodelacionR from '../../assets/images/remodelacion_residencial/11.png'
import obras from '../../assets/images/obras_civiles/5.png'
import fondoCards from '../../assets/images/fachadas/3.jpeg';
import Footer from '../../components/Footer/Footer';
import Button_whats from '../../components/Button_whats/Button_whats'
import React, { useRef } from 'react';

function Home() {
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
                Todo lo que necesitas para ejecutar tu proyecto de
                construcción en un solo lugar, y lo encuentras aquí, llámanos
                para asesorarte sin costo. Haz clic en el botón de abajo.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="servicios1">
        <div className="container__servicios">
          <div>
            <img className="img_cards" src={fondoCards} alt="Fondo" />
            <h3>MANTENIMIENTO DE FACHADAS</h3>
            <Link to='/fachadas'>
              <button className="button_ver_mas">
                VER MÁS
              </button>
            </Link>
          </div>
          <div>
            <img className="img_cards" src={remodelacionR} alt="Remodelación" />
            <h3>REMODELACION DE ESPACIOS</h3>
            <Link to='/remodelacion_comercial'>
              <button className="button_ver_mas">
                VER MÁS
              </button>
            </Link>
          </div>
          <div>
            <img className="img_cards" src={obras} alt="Obras" />
            <h3>CONSTRUCCIÓN DE OBRAS CIVILES</h3>
            <Link to='/obras_civiles'>
              <button className="button_ver_mas">
                VER MÁS
              </button>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Home;