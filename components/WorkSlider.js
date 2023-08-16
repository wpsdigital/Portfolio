import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import { BsArrowRight } from 'react-icons/bs'
import Image from 'next/image';

const workSlides = [
  { images: ['/thumb1.jpg', '/thumb2.jpg' ,'/thumb3.jpg', '/thumb4.jpg'] },
  { images: ['/thumb3.jpg', '/thumb2.jpg' ,'/thumb4.jpg', '/thumb1.jpg'] },
];

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className='h-[280px] sm:h-[480px]'
    >
      {workSlides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>
            {slide.images.map((imagePath, imageIndex) => (
              <div
                className='relative rounded-lg overflow-hidden flex items-center justify-center group'
                key={imageIndex}
              >
                <div className='flex items-center justify-center relative overflow-hidden group'>
                  <Image src={imagePath} width={500} height={300} alt='' />
                  <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700'></div>
                  {/** title */}

                  <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300'>
                    <div className='flex items-center gap-x-2 text-[13px] trackin-[0.2em]'>
                      <div className='delay-100'>LIVE</div>
                      <div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>PROJECT</div>
                      <div className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'><BsArrowRight /></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;
