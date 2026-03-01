import React, { useState, useEffect } from "react";
import imgf from '../../assets/images/fachadas/3.jpeg';
import img_8 from '../../assets/images/fachadas/8.jpeg';
import imgPrincipal from '../../assets/images/fachadas/imgPrincipal.jpeg';
import img_22 from '../../assets/images/fachadas/22.jpeg';
/*import img_24 from '../../assets/images/fachadas/24.jpeg';*/
import img_25 from '../../assets/images/fachadas/25.jpeg';
import img_26 from '../../assets/images/fachadas/26.jpeg';
/*import img_27 from '../../assets/images/fachadas/27.jpeg';*/
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
/*import img_41 from '../../assets/images/fachadas/41.jpeg';*/
/*import img_43 from '../../assets/images/fachadas/43.jpeg';*/
import img_44 from '../../assets/images/fachadas/44.jpeg';
import img_45 from '../../assets/images/fachadas/45.jpeg';
import img_46 from '../../assets/images/fachadas/46.jpeg';
import img_47 from '../../assets/images/fachadas/47.jpeg';
import img_48 from '../../assets/images/fachadas/48.jpeg';
import img_50 from '../../assets/images/fachadas/50.jpeg';
import img_51 from '../../assets/images/fachadas/51.jpeg';
/*import img_52 from '../../assets/images/fachadas/52.jpeg';*/
import img_53 from '../../assets/images/fachadas/53.jpeg';
import img_58 from '../../assets/images/fachadas/58.jpeg';
import img_59 from '../../assets/images/fachadas/59.jpeg';
import img_61 from '../../assets/images/fachadas/61.jpeg';
import img_62 from '../../assets/images/fachadas/62.jpeg';
import img_63 from '../../assets/images/fachadas/63.jpeg';
import img_64 from '../../assets/images/fachadas/64.jpeg';
/*import img_65 from '../../assets/images/fachadas/65.jpeg';*/
import img_70 from '../../assets/images/fachadas/70.jpeg';
import img_71 from '../../assets/images/fachadas/71.jpeg';
import img_73 from '../../assets/images/fachadas/73.jpeg';
import img_80 from '../../assets/images/fachadas/80.jpeg';
import img_81 from '../../assets/images/fachadas/81.jpeg';
import img_82 from '../../assets/images/fachadas/82.jpeg';
import img_1601 from '../../assets/images/fachadas/1601.jpeg';
import img_1602 from '../../assets/images/fachadas/1602.jpeg';
import img_1603 from '../../assets/images/fachadas/1603.jpeg';
import img_1604 from '../../assets/images/fachadas/comp1.jpeg';
import img_1605 from '../../assets/images/fachadas/comp2.jpeg';
import img_1606 from '../../assets/images/fachadas/comp3.jpeg';
import img_1607 from '../../assets/images/fachadas/comp4.jpeg';
import img_1608 from '../../assets/images/fachadas/comp5.jpeg';
import img_1609 from '../../assets/images/fachadas/comp6.jpeg';
/*import img_16010 from '../../assets/images/fachadas/comp7.jpeg';*/
import img_16011 from '../../assets/images/fachadas/comp8.jpeg';
/*import img_16012 from '../../assets/images/fachadas/comp9.jpeg';*/
import img_16013 from '../../assets/images/fachadas/comp10.jpeg';
import img_16014 from '../../assets/images/fachadas/comp11.jpeg';
import img_16015 from '../../assets/images/fachadas/comp12.jpeg';
import img_16016 from '../../assets/images/fachadas/comp13.jpeg';
import img_16017 from '../../assets/images/fachadas/comp14.jpeg';
import img_16018 from '../../assets/images/fachadas/nuev.jpeg';
import img_16019 from '../../assets/images/fachadas/nuev2.jpeg';
import img_16020 from '../../assets/images/fachadas/nuev3.jpeg';
/*import img_16021 from '../../assets/images/fachadas/nuev4.jpeg';*/
import term from '../../assets/images/fachadas/term.jpeg';
import "./Carrusel.css";

const projects = [
    {
        title: "Centro de Convenciones ar",
        image: img_1606
    },
    {
        title: "Edificio bonavento",
        image: img_1607
    },
    {
        title: "Edificio portal estrella",
        image: img_1601
    },
    {
        title: "Colmedica",
        image: img_16018
    },
    {
        title: "Edificio portal estrella",
        image: img_1603
    },
    {
        title: "Colmedica",
        image: img_16020
    },
    {
        title: "Edificio bonavento",
        image: img_1604
    },
    {
        title: "Universidad EAN",
        image: imgf
    },
    {
        title: "Edificio bonavento",
        image: img_1609
    },
    {
        title: "Colmedica",
        image: img_16011
    },
    {
        title: "Edificio portal estrella",
        image: img_1602
    },
    {
        title: "Centro de Convenciones ar",
        image: img_16013
    },
    {
        title: "Colmedica",
        image: img_16014
    },
    {
        title: "Centro de Convenciones ar",
        image: img_16015
    },
    {
        title: "Colmedica",
        image: img_16017
    },
    {
        title: "Portal estrella",
        image: term
    },
    {
        title: "Universidad EAN",
        image: img_8
    },
    {
        title: "Edificio CEFE chapinero",
        image: imgPrincipal
    },
    {
        title: "Edificio agricola",
        image: img_22
    },
    {
        title: "Universidad EAN",
        image: img_25
    },
    {
        title: "Edificio merceditas ph",
        image: img_26
    },
    {
        title: "Centro de Convenciones ar",
        image: img_1608
    },
    {
        title: "Edificio merceditas ph",
        image: img_29
    },
    {
        title: "Edificio agricola",
        image: img_31
    },
    {
        title: "Edificio pacific park ph",
        image: img_33
    },
    {
        title: "Edificio CEFE chapinero",
        image: img_51
    },
    {
        title: "Edificio agricola",
        image: img_34
    },
    {
        title: "Edificio portal estrella",
        image: img_36
    },
    {
        title: "Edificio merceditas ph",
        image: img_37
    },
    {
        title: "Universidad EAN",
        image: img_44
    },
    {
        title: "Edificio comodoro ph",
        image: img_47
    },
    
    {
        title: "Universidad EAN",
        image: img_45
    },
    {
        title: "Edificio CEFE chapinero",
        image: img_53
    },
    {
        title: "Edificio merceditas ph",
        image: img_62
    },
    {
        title: "Edificio bonavento",
        image: img_1605
    },
    {
        title: "Edificio portal estrella",
        image: img_63
    },
    {
        title: "Edificio agricola",
        image: img_64
    },
    {
        title: "Universidad EAN",
        image: img_46
    }
];

export default function ProjectsCarousel() {
    const [index, setIndex] = useState(0);

    const nextSlide = () => {
        setIndex((prev) => (prev + 1) % projects.length);
    };

    const prevSlide = () => {
        setIndex((prev) =>
            prev === 0 ? projects.length - 1 : prev - 1
        );
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="projects-section">
            <h2>Nuestros Proyectos</h2>

            <div className="carousel">

                <button className="btn prev" onClick={prevSlide}>
                    ❮
                </button>

                <div className="slides-container">
                    {projects.map((project, i) => (
                        <div
                            key={i}
                            className={`slide ${i === index ? "active" : ""}`}
                        >
                            <img src={project.image} alt={project.title} />
                            <h3>{project.title}</h3>
                        </div>
                    ))}
                </div>

                <button className="btn next" onClick={nextSlide}>
                    ❯
                </button>

            </div>
        </section>
    );
}