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

/******************************/
import img11r from '../../assets/images/remodelacion_residencial/11.png';
import img1r from '../../assets/images/remodelacion_residencial/1.jpeg';
import img2r from '../../assets/images/remodelacion_residencial/1.png';
import img3r from '../../assets/images/remodelacion_residencial/2.jpeg';
import img4r from '../../assets/images/remodelacion_residencial/2.png';
import img5r from '../../assets/images/remodelacion_residencial/3.jpeg';
import img6r from '../../assets/images/remodelacion_residencial/3.png';
import img7r from '../../assets/images/remodelacion_residencial/4.jpeg';
import img8r from '../../assets/images/remodelacion_residencial/4.png';
import img9r from '../../assets/images/remodelacion_residencial/5.jpeg';
import img10r from '../../assets/images/remodelacion_residencial/5.png';
import img11re from '../../assets/images/remodelacion_residencial/6.jpeg';
import img12r from '../../assets/images/remodelacion_residencial/6.png';
import img13r from '../../assets/images/remodelacion_residencial/7.jpeg';
import img15r from '../../assets/images/remodelacion_residencial/8.png';
import img16r from '../../assets/images/remodelacion_residencial/8.jpeg';
import img17r from '../../assets/images/remodelacion_residencial/9.png';
import img18r from '../../assets/images/remodelacion_residencial/9.jpeg';
import img20mr from '../../assets/images/remodelacion_residencial/20imr.jpeg';
import img21mr from '../../assets/images/remodelacion_residencial/21mr.jpeg';
import img22mr from '../../assets/images/remodelacion_residencial/22mr.jpeg';
import img23mr from '../../assets/images/remodelacion_residencial/23mr.jpeg';
import img19r from '../../assets/images/remodelacion_residencial/10.png';
import img20r from '../../assets/images/remodelacion_residencial/11.png';
import img21r from '../../assets/images/remodelacion_residencial/12.png';
import img22r from '../../assets/images/remodelacion_residencial/13.png';
import img23r from '../../assets/images/remodelacion_residencial/14.png';
import img24r from '../../assets/images/remodelacion_residencial/15.png';
import img25r from '../../assets/images/remodelacion_residencial/16.png';
import img26r from '../../assets/images/remodelacion_residencial/17.png';
import img27r from '../../assets/images/remodelacion_residencial/18.png';
import img28r from '../../assets/images/remodelacion_residencial/imgfn.png';
import img29r from '../../assets/images/remodelacion_residencial/imgfb.png';
/******************************/
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
        title: "Remodelacion comercial y residencial",
        text: "En PROYEXI DISEÑO Y CONSTRUCCIÓN S.A.S., garantizamos la excelencia en cada detalle de nuestros proyectos, brindando un servicio personalizado para atender las necesidades específicas de cada cliente. Ya sea en su hogar o en su negocio, estamos comprometidos con la transformación de sus espacios, combinando funcionalidad, estilo y confort. Contáctenos hoy y dé el primer paso hacia la renovación de su espacio residencial o comercial. Juntos, crearemos un entorno que refleje su personalidad o la esencia de su marca, elevando su calidad de vida e impulsando su éxito.",
        image: imgrecort,
        slider: [img_4j, img29r, img_5j, imgrecort, img20mr, img21mr, img16r, img5r, img_2j, img_1j, img_3j, img12r, img15r, img1r, img2r, img_10j, img_11j, img7r, img17r, img10r, img11re, img18r,  img27r, img20r, img19r, img21r, img22r, img24r, img25r]
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
