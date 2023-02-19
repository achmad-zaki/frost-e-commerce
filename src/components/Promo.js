import React from 'react'
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Line from '../assets/icons/line.svg'
import ImgPromo1 from '../assets/images/promo-1.png'
import ImgPromo2 from '../assets/images/promo-2.png'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Promo = () => {
  return (
    <div className="md:w-1/2 md:mx-auto">
      <div className="text-center flex flex-col gap-2 items-center justify-center pt-20 pb-5">
        <h1 className='text-[18px] tracking-[4px] font-normal'>JUST FOR YOU</h1>
        <img src={Line} alt="" />
      </div>
      <Swiper
        modules={[ Pagination ]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        <SwiperSlide className='px-4 pb-10'>
          <img src={ImgPromo1} alt="" />
          <div className="text-center pt-5">
            <h1 className='w-3/4 mx-auto font-normal text-base'>Nike Sportswear Phoenix Fleece - Limited Edition</h1>
            <p className='text-primary font-normal text-base'>$120</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='px-4 pb-10'>
          <img src={ImgPromo2} alt="" />
          <div className="text-center pt-5">
            <h1 className='w-3/4 mx-auto font-normal text-base'>Nike Sportswear Phoenix Fleece - Limited Edition</h1>
            <p className='text-primary font-normal text-base'>$120</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Promo