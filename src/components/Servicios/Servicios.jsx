import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function Servicios({ args }) {

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

    const [params, setParams] = useState(args);

    return (
        <div>
            <section className="fachadas">
                <div className="div1__fachadas">
                    <div className="container__text">
                        <h2 className='title__fachadas'>{params.title}</h2>
                        <p className='text__principal__fachadas'>
                            {params.text}
                        </p>
                        <p>¡Echa un vistazo a nuestro portafolio!</p>

                        <div className="container_button_portafolio">
                            {/* <a href="./img/Portafolio PROYEXI.pdf" download="Portafolio" className="button_portafolio"> */}
                            <button>
                                <p>Portafolio</p>
                            </button>
                            {/* </a> */}
                        </div>
                    </div>
                    <div className='image_principal_facahadas'>
                        <div className="container_slider_fachadas">
                            <Swiper
                                pagination={{ type: 'fraction' }}
                                navigation={true}
                                loop={true}
                                modules={[Pagination, Navigation]}
                                className="mySwiper"
                            >
                                {params.slider.map((img, i) => (
                                    <SwiperSlide key={i}>
                                        <img className="img_cards" src={img} alt={`Slider image ${i}`} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Servicios;
