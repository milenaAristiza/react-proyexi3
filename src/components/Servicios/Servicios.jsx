import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function Servicios({ args }) {
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
                            <a href="./img/Portafolio PROYEXI.pdf" download="Portafolio" className="button_portafolio">
                                <button>
                                    <p>Portafolio</p>
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className='image_principal_facahadas'>
                        <img src={params.image} alt="Imagen principal" />
                    </div>
                </div>
            </section>
            <section className="section2__fachadas">
                <div className="div1__section2__fachadas">
                    <div className="container__text__div1__section2__fachadas">
                        <h3>Aquí tienes una ventana a nuestro trabajo</h3>
                        {/* Comentado código de redes sociales */}
                    </div>
                    <div className="container__slider__div1__section2__fachadas">
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
