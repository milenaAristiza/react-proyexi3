import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Nav from '../../components/nav/Nav';
import React, { useState, useEffect } from 'react';
import Footer from '../../components/Footer/Footer';
import img_3 from '../../assets/images/fachadas/3.jpeg';
import img_18 from '../../assets/images/fachadas/18.jpeg';
import img_4 from '../../assets/images/fachadas/4.jpeg';
import fondo_section2 from '../../assets/images/fachadas/fondo_section2.jpeg';
import img_8 from '../../assets/images/fachadas/8.jpeg';
import img5 from '../../assets/images/obras_civiles/5.png';
import './Obras_civiles.css';
import Servicios from '../../components/Servicios/Servicios';

const ObrasCiviles = () => {
    const [url, setUrl] = useState('');

    useEffect(() => {
        setUrl(document.URL.split("/").pop());
    }, []);

    const [args, setArgs] = useState({
        title: "Obras civiles",
        text: "¡Descubre la magia de construir tus sueños! ¿Quieres convertir tus ideas en realidad? En nuestro servicio de construcción, hacemos posible lo imposible. Deja que nuestros expertos arquitectos y constructores den vida a tus proyectos, con un toque de innovación y calidad que te sorprenderá. Edificios - Bodegas - Casas y mas.",
        image: img5,
        slider: [img_3, img_18, fondo_section2, img_4, img_8]
    });

    return (
        <div>
            <Nav str={url} />
            <Servicios args={args} />
            <Footer />
        </div>
    );
};

export default ObrasCiviles;
