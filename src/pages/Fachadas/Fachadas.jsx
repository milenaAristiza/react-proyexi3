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
import imgPrincipal from '../../assets/images/fachadas/imgPrincipal.jpeg';
import img_22 from '../../assets/images/fachadas/22.jpeg';
import img_24 from '../../assets/images/fachadas/24.jpeg';
import img_25 from '../../assets/images/fachadas/25.jpeg';
import img_26 from '../../assets/images/fachadas/26.jpeg';
import img_27 from '../../assets/images/fachadas/27.jpeg';
import img_28 from '../../assets/images/fachadas/28.jpeg';
import img_29 from '../../assets/images/fachadas/29.jpeg';
import img_31 from '../../assets/images/fachadas/31.jpeg';
import img_32 from '../../assets/images/fachadas/32.jpeg';
import img_33 from '../../assets/images/fachadas/33.jpeg';
import img_34 from '../../assets/images/fachadas/34.jpeg';
import img_35 from '../../assets/images/fachadas/35.jpeg';
import img_36 from '../../assets/images/fachadas/36.jpeg';
import img_37 from '../../assets/images/fachadas/37.jpeg';
import img_38 from '../../assets/images/fachadas/38.jpeg';
import img_41 from '../../assets/images/fachadas/41.jpeg';
import img_43 from '../../assets/images/fachadas/43.jpeg';
import img_44 from '../../assets/images/fachadas/44.jpeg';
import img_45 from '../../assets/images/fachadas/45.jpeg';
import img_46 from '../../assets/images/fachadas/46.jpeg';
import img_47 from '../../assets/images/fachadas/47.jpeg';
import img_48 from '../../assets/images/fachadas/48.jpeg';
import img_50 from '../../assets/images/fachadas/50.jpeg';
import img_51 from '../../assets/images/fachadas/51.jpeg';
import img_52 from '../../assets/images/fachadas/52.jpeg';
import img_53 from '../../assets/images/fachadas/53.jpeg';
import img_58 from '../../assets/images/fachadas/58.jpeg';
import img_59 from '../../assets/images/fachadas/59.jpeg';
import img_61 from '../../assets/images/fachadas/61.jpeg';
import img_62 from '../../assets/images/fachadas/62.jpeg';
import img_63 from '../../assets/images/fachadas/63.jpeg';
import img_64 from '../../assets/images/fachadas/64.jpeg';
import img_65 from '../../assets/images/fachadas/65.jpeg';
import img_70 from '../../assets/images/fachadas/70.jpeg';
import img_71 from '../../assets/images/fachadas/71.jpeg';
import img_73 from '../../assets/images/fachadas/73.jpeg';
import img_1601 from '../../assets/images/fachadas/1601.jpeg';
import img_1602 from '../../assets/images/fachadas/1602.jpeg';
import img_1603 from '../../assets/images/fachadas/1603.jpeg';
import term from '../../assets/images/fachadas/term.jpeg';
import './Styles_fachadas.css';
import Servicios from '../../components/Servicios/Servicios';
// import Button_whats from '../../components/Button_whats/Button_whats'

const Fachadas = () => {
    const [url, setUrl] = useState("");

    useEffect(() => {
        setUrl(document.URL.split("/").pop());
    }, []);

    const [args, setArgs] = useState({
        title: "Fachadas",
        text: "¡Eleva la imagen de tu edificio con nuestro servicio de Mantenimiento de Fachadas y cubiertas! Quieres que tu edificio brille con todo su esplendor? Nuestro equipo de expertos en mantenimiento de fachadas y cubiertas está aquí para hacerlo posible. Con un enfoque en la excelencia y la atención al detalle, dejaremos tus fachadas y cubiertas impecables, resaltando la belleza arquitectónica y asegurando una impresión duradera.",
        image: imgPrincipal,
        slider: [imgPrincipal, img_51, img_52, img_53, term, img_63, img_1601, img_1602, img_1603,  img_3, img_18, fondo_section2, img_4, img_8, img_22, img_24, img_25, img_26, img_27, img_28, img_29, img_31, img_32, img_33, img_34, img_35, img_36, img_37, img_38, img_41, img_43, img_44, img_45, img_46, img_47, img_48, img_50, img_58, img_59, img_61, img_62, img_64, img_65, img_70, img_71, img_73]
    });

    return (
        <div>
            {/* <Button_whats /> */}
            <Nav str={url} />
            <Servicios args={args} />
            <Footer />
        </div>
    );
}

export default Fachadas;
