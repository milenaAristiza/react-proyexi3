import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Nav from '../../components/nav/Nav';
import React, { useState, useEffect } from 'react';
import Footer from '../../components/Footer/Footer';
import imgPrincipal from '../../assets/images/fachadas/imgPrincipal.jpeg';
import img1 from '../../assets/images/impermeabilizacion/1.jpeg';
import img2 from '../../assets/images/impermeabilizacion/2.jpeg';
import img3 from '../../assets/images/impermeabilizacion/3.jpeg';
import img4 from '../../assets/images/impermeabilizacion/4.jpeg';
import img5 from '../../assets/images/impermeabilizacion/5.jpeg';
import img6 from '../../assets/images/impermeabilizacion/6.jpeg';
import img7 from '../../assets/images/impermeabilizacion/7.jpeg';
import img8 from '../../assets/images/impermeabilizacion/8.jpeg';
import img9 from '../../assets/images/impermeabilizacion/9.jpeg';
import img10 from '../../assets/images/impermeabilizacion/10.jpeg';
import img11 from '../../assets/images/impermeabilizacion/11.jpeg';
import img12 from '../../assets/images/impermeabilizacion/12.jpeg';
import img13 from '../../assets/images/impermeabilizacion/13.jpeg';
import img14 from '../../assets/images/impermeabilizacion/14.jpeg';
import img15 from '../../assets/images/impermeabilizacion/15.jpeg';
import img16 from '../../assets/images/impermeabilizacion/16.jpeg';
import img17 from '../../assets/images/impermeabilizacion/17.jpeg';
import img18 from '../../assets/images/impermeabilizacion/18.jpeg';
import img19 from '../../assets/images/impermeabilizacion/19.jpeg';
import './Styles_Impermeabilizacion.css';
import Servicios from '../../components/Servicios/Servicios';
import Button_whats from '../../components/Button_whats/Button_whats'

const Impermeabilizacion = () => {

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
        if (typeof window.gtag === 'function') {
            window.gtag('event', 'conversion', {
                send_to: 'AW-16614584501/iPiLCOLzgbwZELXhufI9',
                value: 1.0,
                currency: 'COP'
            });
        }
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

    useEffect(() => {
        // Función para disparar la conversión
        const triggerConversion = () => {
            if (typeof window.gtag === 'function') {
                window.gtag('event', 'conversion', {
                    value: 1.0,
                    currency: 'COP',
                    send_to: 'AW-16614584501/iPiLCOLzgbwZELXhufI9'
                });
            }
        };

        // Disparar la conversión cuando el componente sea visible (al montar)
        triggerConversion();
    });

    const [url, setUrl] = useState("");

    useEffect(() => {
        setUrl(document.URL.split("/").pop());
    }, []);

    const [args, setArgs] = useState({
        title: "SOLUCIONES EFECTIVAS EN IMPERMEABILIZACIÓN DE CUBIERTAS",
        text: "Soluciones duraderas para prevenir filtraciones, humedad y daños estructurales en cubiertas residenciales y comerciales.",
        image: imgPrincipal,
        slider: [img10, img12, img11, img2, img1, img5, img6, img7, img8, img9, img13, img14, img15, img16, img17, img18, img19]
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

export default Impermeabilizacion;
