import React, { useEffect, useState } from 'react';
import Nav from '../../components/nav/Nav';
import Footer from '../../components/Footer/Footer';
import imgrecort from '../../assets/images/obras_civiles/imgrecort.png';
import img_1j from '../../assets/images/remodelacion_comercial/1.jpeg'
import img_2j from '../../assets/images/remodelacion_comercial/1.png'
import img_3j from '../../assets/images/remodelacion_comercial/6.jpeg'
import img_4j from '../../assets/images/remodelacion_comercial/2.jpeg'
import img_5j from '../../assets/images/remodelacion_comercial/9.jpeg'
import img_10j from '../../assets/images/remodelacion_comercial/7.jpg'
import img_11j from '../../assets/images/remodelacion_comercial/8.jpg'
import './Remodelacion_comercial.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Servicios from '../../components/Servicios/Servicios';
import Button_whats from '../../components/Button_whats/Button_whats'

function Remodelacion_comercial() {

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

    const [url, setUrl] = useState();
    useEffect(() => {
        setUrl(document.URL.split("/")[document.URL.split("/").length - 1]);
    }, []);

    const [args, setArgs] = useState({
        title: "Remodelacion comercial",
        text: "En PROYEXI DISEÑO Y CONSTRUCCIÓN SAS, garantizamos la excelencia de nuestro trabajo y proporcionamos a los clientes una atención personalizada según sus necesidades específicas. Contáctenos hoy para comenzar la transformación de su espacio comercial. Juntos, podemos crear un ambiente que no solo refleje la esencia de su marca, sino que también impulse su éxito comercial.",
        image: imgrecort,
        slider: [imgrecort, img_1j, img_2j, img_3j, img_4j, img_5j, img_10j, img_11j]
    });

    return (
        <div>
            <Button_whats />
            <Nav str={url} />
            <Servicios args={args} />
            <Footer />
        </div>
    );
}

export default Remodelacion_comercial;
