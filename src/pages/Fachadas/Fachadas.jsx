import React from "react";
import { Link } from "react-router-dom";
import WhatsappButton from "../../components/Button_whats/Button_whats";
import imgf from '../../assets/images/fachadas/imgPrincipal.jpeg';
import ProjectsCarousel from "../../components/CarruselFachadas/Carrusel";
import Navbar from "../../components/ButtonInicio/ButtonInicio";
import "./Styles_fachadas.css";

const Fachadas = () => {
    return (


        <div className="fachadas-container">
            <>
                <Navbar src="./hero"/>
                <Link to="/#hero"></Link>
                
                {/* Aquí van tus rutas */}
            </>
            {/* HERO */}
            <section id="fachadas-hero" className="fachadas-hero">
                <div className="fachadas-hero-text">
                    <p className="subtitle">MANTENIMIENTO PROFESIONAL DE</p>

                    <h1>
                        FACHADAS <br /> CORPORATIVAS
                    </h1>

                    <p className="description">
                        Servicio seguro, profesional y eficiente para edificios
                        empresariales, clínicas y centros comerciales en Bogotá.
                    </p>

                    <div className="fachadas-button">
                        <WhatsappButton
                            text="Solicitar Cotización"
                            className="btn-primary"
                            message="Hola, quiero un diagnóstico profesional para mi fachada en Bogotá."
                        />
                    </div>


                </div>

                <div className="fachadas-hero-image">


                    <img src={imgf} alt="Después" className="image after" />
                </div>
            </section>

            {/* PROBLEMAS */}
            <section className="fachadas-problemas">
                <h2>¿Tu fachada presenta estos problemas?</h2>

                <div className="problemas-grid">
                    <div className="problema-card">
                        <span>🧱</span>
                        <p>Manchas y suciedad acumulada</p>
                    </div>

                    <div className="problema-card">
                        <span>⚠️</span>
                        <p>Filtraciones o humedad</p>
                    </div>

                    <div className="problema-card">
                        <span>🏢</span>
                        <p>Deterioro estructural</p>
                    </div>

                    <div className="problema-card">
                        <span>📉</span>
                        <p>Mala imagen corporativa</p>
                    </div>
                </div>

                <p className="note">
                    Nuestro equipo profesional restaura, impermeabiliza y protege la
                    fachada de tu edificio con garantía escrita.
                </p>
            </section>

            {/* PROYECTOS */}
            <section className="fachadas-proyectos">

                <h2>Proyectos de impermeabilización en Bogotá</h2>

                <ProjectsCarousel />

                <div className="cta-final">
                    <WhatsappButton
                        text="Solicitar Cotización Ahora"
                        className="btn-primary"
                        message="Hola, quiero cotizar impermeabilización de fachada en Bogotá."
                    />
                </div>

            </section>

        </div>
    );
};

export default Fachadas;