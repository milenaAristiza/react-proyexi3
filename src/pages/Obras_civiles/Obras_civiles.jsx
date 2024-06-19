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
import './Obras_civiles.css';
import Servicios from '../../components/Servicios/Servicios';
import Button_whats from '../../components/Button_whats/Button_whats'

const ObrasCiviles = () => {
    const [url, setUrl] = useState('');

    useEffect(() => {
        setUrl(document.URL.split("/").pop());
    }, []);

    const [args, setArgs] = useState({
        title: "Obras civiles",
        text: "¡Descubre la magia de construir tus sueños! ¿Quieres convertir tus ideas en realidad? En nuestro servicio de construcción, hacemos posible lo imposible. Deja que nuestros expertos arquitectos y constructores den vida a tus proyectos, con un toque de innovación y calidad que te sorprenderá. Edificios - Bodegas - Casas y mas.",
        image: img5,
        slider: [img10j, img1j, img2j, img3j, img4j, img5j, img6j, img7j, img8j, img9j, img11j, img12j, img_8j2, img_9j2]
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
