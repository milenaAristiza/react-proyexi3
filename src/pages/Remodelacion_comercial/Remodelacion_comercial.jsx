import React, { useEffect, useState } from 'react';
import Nav from '../../components/nav/Nav';
import Footer from '../../components/Footer/Footer';
import img_3 from '../../assets/images/fachadas/3.jpeg';
import img_18 from '../../assets/images/fachadas/18.jpeg';
import img_4 from '../../assets/images/fachadas/4.jpeg';
import fondo_section2 from '../../assets/images/fachadas/fondo_section2.jpeg';
import img_8 from '../../assets/images/fachadas/8.jpeg';
import imgrecort from '../../assets/images/obras_civiles/imgrecort.png';
import img_1j from '../../assets/images/remodelacion_comercial/1.jpeg'
import img_2j from '../../assets/images/remodelacion_comercial/1.png'
import img_3j from '../../assets/images/remodelacion_comercial/6.jpeg'
import img_4j from '../../assets/images/remodelacion_comercial/2.jpeg'
import img_5j from '../../assets/images/remodelacion_comercial/9.jpeg'
import img_6j from '../../assets/images/remodelacion_comercial/3.jpeg'
import img_7j from '../../assets/images/remodelacion_comercial/4.jpeg'
import img_8j from '../../assets/images/remodelacion_comercial/7.jpeg'
import img_9j from '../../assets/images/remodelacion_comercial/8.jpeg'
import img_10j from '../../assets/images/remodelacion_comercial/7.jpg'
import img_11j from '../../assets/images/remodelacion_comercial/8.jpg'
import img_12j from '../../assets/images/remodelacion_comercial/10.jpeg'
import './Remodelacion_comercial.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Servicios from '../../components/Servicios/Servicios';
import Button_whats from '../../components/Button_whats/Button_whats'

function Remodelacion_comercial() {
    const [url, setUrl] = useState();
    useEffect(() => {
        setUrl(document.URL.split("/")[document.URL.split("/").length - 1]);
    }, []);

    const [args, setArgs] = useState({
        title: "Remodelacion comercial",
        text: "En PROYEXI DISEÑO Y CONSTRUCCIÓN SAS, garantizamos la excelencia de nuestro trabajo y proporcionamos a los clientes una atención personalizada según sus necesidades específicas. Contáctenos hoy para comenzar la transformación de su espacio comercial. Juntos, podemos crear un ambiente que no solo refleje la esencia de su marca, sino que también impulse su éxito comercial.",
        image: imgrecort,
        slider: [imgrecort, img_1j, img_2j, img_3j, img_4j, img_5j, img_10j, img_11j, img_12j]
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
