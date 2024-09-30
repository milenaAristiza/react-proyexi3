import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Nav from '../../components/nav/Nav';
import React, { useState, useEffect } from 'react';
import Footer from '../../components/Footer/Footer';
import img11 from '../../assets/images/remodelacion_residencial/11.png';
import img1j from '../../assets/images/remodelacion_residencial/1.jpeg';
import img2j from '../../assets/images/remodelacion_residencial/1.png';
import img3j from '../../assets/images/remodelacion_residencial/2.jpeg';
import img4j from '../../assets/images/remodelacion_residencial/2.png';
import img5j from '../../assets/images/remodelacion_residencial/3.jpeg';
import img6j from '../../assets/images/remodelacion_residencial/3.png';
import img7j from '../../assets/images/remodelacion_residencial/4.jpeg';
import img8j from '../../assets/images/remodelacion_residencial/4.png';
import img9j from '../../assets/images/remodelacion_residencial/5.jpeg';
import img10j from '../../assets/images/remodelacion_residencial/5.png';
import img11j from '../../assets/images/remodelacion_residencial/6.jpeg';
import img12j from '../../assets/images/remodelacion_residencial/6.png';
import img13j from '../../assets/images/remodelacion_residencial/7.jpeg';
import img15j from '../../assets/images/remodelacion_residencial/8.png';
import img16j from '../../assets/images/remodelacion_residencial/8.jpeg';
import img17j from '../../assets/images/remodelacion_residencial/9.png';
import img18j from '../../assets/images/remodelacion_residencial/9.jpeg';
import img19j from '../../assets/images/remodelacion_residencial/10.png';
import img20j from '../../assets/images/remodelacion_residencial/11.png';
import img21j from '../../assets/images/remodelacion_residencial/12.png';
import img22j from '../../assets/images/remodelacion_residencial/13.png';
import img23j from '../../assets/images/remodelacion_residencial/14.png';
import img24j from '../../assets/images/remodelacion_residencial/15.png';
import img25j from '../../assets/images/remodelacion_residencial/16.png';
import img26j from '../../assets/images/remodelacion_residencial/17.png';
import img27j from '../../assets/images/remodelacion_residencial/18.png';
import './Remodelacion_residencial.css';
import Servicios from '../../components/Servicios/Servicios';
import Button_whats from '../../components/Button_whats/Button_whats'

const RemodelacionResidencial = () => {
    const [url, setUrl] = useState('');

    useEffect(() => {
        setUrl(document.URL.split("/").pop());
    }, []);

    const [args, setArgs] = useState({
        title: "Remodelacion residencial",
        text: "En PROYEXI DISEÑO Y CONSTRUCCIÓN SAS, garantizamos la excelencia de nuestro trabajo y proporcionamos a los clientes una atención personalizada según sus necesidades específicas. Contáctenos hoy para comenzar la transformación de su espacio comercial. Juntos, podemos crear un ambiente que no solo refleje la esencia de su marca, sino que también impulse su éxito comercial.",
        image: img11,
        slider: [img12j, img1j, img2j, img3j, img4j, img5j, img6j, img7j, img8j, img9j, img10j, img11j, img13j, img15j, img16j, img17j, img18j, img19j, img20j, img21j, img22j, img23j, img24j, img25j, img26j, img27j]
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

export default RemodelacionResidencial;
