import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

const Slider = ({ argsSlider }) => {
    const [params, setParams] = useState(argsSlider);

    return (
        <div>
            <div className="container_slider_proyectos">
                <Swiper
                    pagination={{
                        type: 'fraction',
                    }}
                    navigation={true}
                    loop={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    {params.slider.map((img, i) => (
                        <SwiperSlide key={i}>
                            <img className="img_cards" src={img} alt={`Slide ${i}`} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default Slider;