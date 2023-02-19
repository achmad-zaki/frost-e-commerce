import React from 'react'
import { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Model1 from '../assets/images/model-1.png'
import Model2 from '../assets/images/model-2.png'
import Model3 from '../assets/images/model-3.png'
import Button from '../components/Button'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Banner = () => {
  return (
    <div className="relative flex items-start justify-center pt-16 md:w-1/2 md:mx-auto">
        <Swiper
            modules={[ Pagination, Autoplay ]}
            slidesPerView={1}
            spaceBetween={30}
            autoplay={true}
            pagination={{ clickable: true }}
        >
            <SwiperSlide>
                <img src={Model1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Model2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Model3} alt="" />
            </SwiperSlide>
        </Swiper>
        <div className="absolute bottom-20 z-10">
            <Button
                text='Explore Collection'
                className='btn-primary'
            />
        </div>
    </div>
  )
}

export default Banner