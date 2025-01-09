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
                        Ofrecemos soluciones integrales que 
                        combinan innovación, calidad y atención personalizada. Nuestro equipo de 
                        profesionales trabaja con pasión y dedicación para materializar tus ideas, 
                        asegurando resultados que destacan.
                        <br></br>
                        - Construcción Residencial: Creamos hogares funcionales, cómodos y con estilo.
                        <br></br>
                        - Construcción Comercial: Diseñamos espacios modernos y funcionales que impulsan el éxito de tu negocio y cautivan a tus clientes.
                        <br></br>
                        - Remodelaciones: Transformamos y adaptamos tus espacios para satisfacer nuevas necesidades y mejorar tu calidad de vida.
                        <br></br>
                        - Mantenimiento de Fachadas: Preservamos y renovamos la apariencia de tus fachadas, garantizando su estética, funcionalidad y protección contra el desgaste.
                        <br></br>
                        - Impermeabilización y Mantenimiento de Cubiertas: Protegemos tus espacios de filtraciones y humedad con soluciones duraderas que aseguran la integridad estructural y prolongan la vida útil de tus cubiertas.
                        <br></br>
                        Eligenos y conviértete en parte de nuestra 
                        historia de éxito, donde cada proyecto es una oportunidad para transformar 
                        sueños en realidades. ¡Contáctanos hoy!
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