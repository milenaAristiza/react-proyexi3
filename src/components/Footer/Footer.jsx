import React from 'react';
import LOGO_PROYEXI_TRANSPARENTE from './LOGO_PROYEXI_TRANSPARENTE.png';
import img_correo from './imgcorreo.png';
import correos from './correos.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import './Styles_footer.css';

const Footer = () => {
    return (
        <footer className="pie-pagina" id="footer">
            <div className="grupo-1">
                <div className="box">
                    <figure>
                        <Link to="#">
                            <img src={LOGO_PROYEXI_TRANSPARENTE} alt="Logo Proyexi" />
                        </Link>
                    </figure>
                </div>
                <div className="box">
                    <h2>Teléfonos</h2>
                    <p>3125883290</p>
                    <p>6615971</p>
                    {/* <p>6615971</p> */}

                    <h2>Correo</h2>
                    {/* <p>administraciondc@proyexi.com</p>
                    <p className='mi-texto'>proyexidc@gmail.com</p> */}
                    <img className='img_correo' src={correos} alt="Logo Proyexi" />
                </div>
                <div className="box">
                    <h2>Síguenos</h2>
                    <div className="red-social">
                        <Link to="https://www.facebook.com/proyexidisenoycontruccion/?ref=pages_you_manage" target="_blank">
                            <FontAwesomeIcon icon={faFacebook} />
                        </Link>
                        <Link to="https://www.instagram.com/proyexi_diseno_y_construccion?utm_source=qr&igsh=NGhoYTg1ZDkzZXp6" target="_blank">
                            <FontAwesomeIcon icon={faInstagram} />
                        </Link>
                        <Link to="https://api.whatsapp.com/send?phone=+573125883290&text=Hola,%20deseo%20una%20cotizacion." target="_blank">
                            <FontAwesomeIcon icon={faWhatsapp} />
                        </Link>
                        <Link to="https://www.youtube.com/channel/UCwwO_LuUHTsqp_L5Kd1NdaQ" target="_blank">
                            <FontAwesomeIcon icon={faYoutube} />
                        </Link>
                    </div>
                    <h2>Dirección</h2>
                    <p>Bogotá, altos de madelena</p>
                    <p>TV 60 59 24 SUR</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;