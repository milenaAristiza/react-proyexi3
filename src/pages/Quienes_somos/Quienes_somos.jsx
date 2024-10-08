import './Styles_quienes_somos.css';
import Nav from '../../components/nav/Nav';
import Footer from '../../components/Footer/Footer';
import img_text_quienes_somos from '../../assets/images/quienes_somos/img_text.jpg';
import React, { useState, useEffect } from 'react';
import Button_whats from '../../components/Button_whats/Button_whats'

const QuienesSomos = () => {

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

    const [url, setUrl] = useState("");

    useEffect(() => {
        setUrl(document.URL.split("/").pop());
    }, []);

    return (
        <div>
            <Button_whats />
            <Nav str={url} />
            <section className="section2_quienes_comos">
                <div className="div1_section2_quienes_comos">
                    <img src={img_text_quienes_somos} alt="Imagen equipo de trabajo de proyexi" />
                </div>
                <div className="div2_section2_quienes_comos">
                    <h2 className="title_quienesS">¿POR QUÉ ELEGIRNOS?</h2>
                    <p>
                        Nuestros servicios incluyen:
                        Construcción residencial: Desde hogares acogedores hasta mansiones de lujo, hacemos de cada casa un verdadero hogar.
                        Construcción comercial: Potencia tu negocio con espacios funcionales y atractivos que cautivarán a tus clientes.
                        Remodelaciones: Renovamos y transformamos cualquier espacio para que se ajuste a tus necesidades cambiantes.
                        Diseño arquitectónico: Nuestros expertos dan forma a tus ideas, creando planos precisos y estéticamente impresionantes.
                    </p>
                    {/* <a href="#footer">
                        <div className="container__button2">
                            <button>Contacto</button>
                        </div>
                    </a> */}
                </div>
            </section>
            <section className="section1_quienes_comos">
                <div className="div1_section1_quienes_comos">
                    <div className="container_text_button">
                        <h2 className="title_container2_quienesS">¡Contáctanos ahora y descubre la diferencia!</h2>
                        <p className="text_quienesS">
                            Experiencia incomparable: Con años de trayectoria en el mercado, hemos construido un legado de éxitos y clientes satisfechos. ¡Tú podrías ser el próximo!
                            Profesionales apasionados: Nuestro equipo de expertos ama lo que hace. Cada proyecto se maneja con la pasión y dedicación que merece, sin importar su magnitud.
                            Calidad insuperable: Utilizamos los materiales más confiables y las técnicas de construcción más avanzadas para garantizar resultados de primera clase.
                            Diseños personalizados: Entendemos que cada cliente es único, por lo que adaptamos nuestros diseños a tus gustos y necesidades, ¡siempre superando expectativas!
                        </p>
                        {/* <a href="#footer">
                            <div className="container__button">
                                <button>Contacto</button>
                            </div>
                        </a> */}
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default QuienesSomos;