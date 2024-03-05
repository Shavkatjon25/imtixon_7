import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';




import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { useDispatch, useSelector } from 'react-redux';
import Omborchi from './Omborchi';


export default function Sinov() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [thumbsSwipr, setThumbsSwipr] = useState(null);
  const {destop}=useSelector(a=>a);
  const dispach=useDispatch();

  function DestopModal(){
    dispach(Omborchi.actions.Des())
  }

  return (
    <div>
    <div className={`hidden lg:block`}>
      <Swiper
        loop={true}
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwipr }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide onClick={DestopModal}>
          <img src="./birr.png" className='w-[445px] h-[445px]'/>
        </SwiperSlide>
        <SwiperSlide onClick={DestopModal}>
          <img src="./img2.jpg" className='w-[445px] h-[445px]' />
        </SwiperSlide>
        <SwiperSlide onClick={DestopModal}>
          <img src="./img4.jpg" className='w-[445px] h-[445px]' />
        </SwiperSlide>
        <SwiperSlide onClick={DestopModal}>
          <img src="./img6.jpg" className='w-[445px] h-[445px]' />
        </SwiperSlide>

      </Swiper>
      <Swiper
        onSwiper={setThumbsSwipr}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="./birr.png" className='cursor-pointer'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="./img2.jpg" className='cursor-pointer' />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./img4.jpg" className='cursor-pointer'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="./img6.jpg"  className='cursor-pointer'/>
        </SwiperSlide>
      </Swiper>
    </div>



    <div className={` hidden ${destop ? 'fixed w-full h-full lg:flex justify-center  items-center modal flex-col z-50 top-0 left-0 py-[89px] ':'hidden'}`}>
        <div className='h-12 w-[445px] flex items-center justify-end ' >
                <div className='qzil flex w-5 h-5' onClick={DestopModal} >
                            <div className='rotate-45 h-[4px] w-6 bg-white cursor-pointer  absolute'></div>
                        <div className='rotate-[-45deg] h-[4px] w-6 bg-white cursor-pointer  absolute'></div>
                </div>
        </div>
      <Swiper
        navigation={destop}
        loop={true}
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide >
          <img src="./birr.png" className='w-[445px] h-[445px] '/>
        </SwiperSlide>
        <SwiperSlide >
          <img src="./img2.jpg" className='w-[445px] h-[445px]' />
        </SwiperSlide>
        <SwiperSlide >
          <img src="./img4.jpg" className='w-[445px] h-[445px] ' />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./img6.jpg" className='w-[445px] h-[445px]' />
        </SwiperSlide>

      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="./birr.png" className='cursor-pointer'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="./img2.jpg"  className='cursor-pointer'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="./img4.jpg" className='cursor-pointer'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="./img6.jpg"  className='cursor-pointer' />
        </SwiperSlide>
      </Swiper>
    </div>




    </div>
  );
}
