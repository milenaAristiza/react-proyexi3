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
import img15 from '../../assets/images/fachadas/15.jpeg';
import img5 from '../../assets/images/obras_civiles/5.png';
import img11 from '../../assets/images/remodelacion_residencial/11.png';
import './Remodelacion_residencial.css';
// import 'react-responsive-modal/styles.css';
import Servicios from '../../components/Servicios/Servicios';

const RemodelacionResidencial = () => {
    const [url, setUrl] = useState('');

    useEffect(() => {
        setUrl(document.URL.split("/").pop());
    }, []);

    const [args, setArgs] = useState({
        title: "Remodelacion residencial",
        text: "En PROYEXI DISEÑO Y CONSTRUCCIÓN SAS, garantizamos la excelencia de nuestro trabajo y proporcionamos a los clientes una atención personalizada según sus necesidades específicas. Contáctenos hoy para comenzar la transformación de su espacio comercial. Juntos, podemos crear un ambiente que no solo refleje la esencia de su marca, sino que también impulse su éxito comercial.",
        image: img11,
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

export default RemodelacionResidencial;
