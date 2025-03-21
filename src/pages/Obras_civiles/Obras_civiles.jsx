import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Nav from '../../components/nav/Nav';
import React, { useState, useEffect } from 'react';
import Footer from '../../components/Footer/Footer';
import img5 from '../../assets/images/obras_civiles/5.png';
import img1j from '../../assets/images/obras_civiles/1.jpeg';
import img2j from '../../assets/images/obras_civiles/2.jpeg';
import img3j from '../../assets/images/obras_civiles/3.jpeg';
import img4j from '../../assets/images/obras_civiles/4.jpeg';
import img5j from '../../assets/images/obras_civiles/5.jpeg';
import img6j from '../../assets/images/obras_civiles/6.jpeg';
import img7j from '../../assets/images/obras_civiles/7.jpeg';
import img8j from '../../assets/images/obras_civiles/8.jpeg';
import img9j from '../../assets/images/obras_civiles/9.jpeg';
import img10j from '../../assets/images/obras_civiles/10.jpeg';
import img11j from '../../assets/images/obras_civiles/11.jpeg';
import img12j from '../../assets/images/obras_civiles/12.jpeg';
import img_8j2 from '../../assets/images/remodelacion_comercial/7.jpeg'
import img_9j2 from '../../assets/images/remodelacion_comercial/8.jpeg'
import imgop_1 from '../../assets/images/obras_civiles/img_op/1.jpeg'
import imgop_2 from '../../assets/images/obras_civiles/img_op/2.jpeg'
import imgop_4 from '../../assets/images/obras_civiles/img_op/4.jpeg'
import imgop_5 from '../../assets/images/obras_civiles/img_op/5.jpeg'
import imgop_6 from '../../assets/images/obras_civiles/img_op/6.jpeg'
import imgop_7 from '../../assets/images/obras_civiles/img_op/7.jpeg'
import imgop_8 from '../../assets/images/obras_civiles/img_op/8.jpeg'
import imgop_9 from '../../assets/images/obras_civiles/img_op/9.jpeg'
import imgop_10 from '../../assets/images/obras_civiles/img_op/10.jpeg'
import imgop_11 from '../../assets/images/obras_civiles/img_op/11.jpeg'
import imgop_12 from '../../assets/images/obras_civiles/img_op/12.jpeg'
import imgop_13 from '../../assets/images/obras_civiles/img_op/13.jpeg'
import imgop_20 from '../../assets/images/obras_civiles/20.jpeg'
import imgop_21 from '../../assets/images/obras_civiles/21.jpeg'
import imgop_22 from '../../assets/images/obras_civiles/22.jpeg'
import imgop_23 from '../../assets/images/obras_civiles/23.jpeg'
import imgop_24 from '../../assets/images/obras_civiles/24.jpeg'
import imgop_25 from '../../assets/images/obras_civiles/25.jpeg'
import imgop_26 from '../../assets/images/obras_civiles/26.jpeg'
import './Obras_civiles.css';
import Servicios from '../../components/Servicios/Servicios';
import Button_whats from '../../components/Button_whats/Button_whats'

const ObrasCiviles = () => {
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

    const [url, setUrl] = useState('');

    useEffect(() => {
        setUrl(document.URL.split("/").pop());
    }, []);

    const [args, setArgs] = useState({
        title: "Obras civiles",
        text: "¡Descubre la magia de construir tus sueños! ¿Quieres convertir tus ideas en realidad? En nuestro servicio de construcción, hacemos posible lo imposible. Deja que nuestros expertos arquitectos y constructores den vida a tus proyectos, con un toque de innovación y calidad que te sorprenderá. Edificios - Bodegas - Casas y mas.",
        image: img5,
        slider: [img10j, img1j, img2j, img3j, img5j, img6j, img7j, img12j, img_8j2, img_9j2, imgop_1, imgop_2, imgop_4, imgop_5, imgop_6, imgop_7, imgop_8, imgop_9, imgop_10, imgop_11, imgop_12, imgop_13, imgop_20, imgop_21, imgop_22, imgop_23, imgop_24, imgop_25, imgop_26]
    });

    return (
        <div>
            <Button_whats />
            <Nav str={url} />
            <Servicios args={args} />
            <Footer />
        </div>
    );
};

export default ObrasCiviles;
