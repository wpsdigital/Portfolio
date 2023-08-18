import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from 'react-icons/rx';

import { Swiper, SwiperSlide, SwiperSlider } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { FreeMode, Pagination } from 'swiper';

// data
export const serviceData = [
  {
    icon: <RxCrop />,
    title: 'Branding',
    description: 'Websites with an unusual design that will enable you to brand...',
  },
  {
    icon: <RxPencil2 />,
    title: 'Design',
    description: 'Modern designs that meet compatibility criteria on all screens...',
  },
  {
    icon: <RxDesktop />,
    title: 'Development',
    description: 'Development process with safe and clean code writing...',
  },
  {
    icon: <RxReader />,
    title: 'Copywriting',
    description: 'Helping branding with SEO compatible articles...',
  },
  {
    icon: <RxRocket />,
    title: 'SEO',
    description: 'Helping branding with SEO compatible articles...',
  },
];

const ServiceSlider = () => {
  return(
    <Swiper
      breakpoints={{
        320:{
          slidesPerView: 1,
          spaceBetween:15,
        },
        640:{
          slidesPerView:3,
          spaceBetween:15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable:true,
      }}
      modules={[FreeMode, Pagination]}
      className='h-[240px] sm:h-[340px]'>
        {serviceData.map((item, index) => {
          return(
            <SwiperSlide key={index}>
              <div className='bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer'>
                {/** icon */}
                <div className='text-4xl text-accent mb-4'>{item.icon}</div>
                {/** title and description */}
                <div className='mb-8'>
                  <div className='mb-2 text-lg'>{item.title}</div>
                  <p className='max-xw-'>{item.description}</p>
                </div>
                {/** Arrow */}
                <div className='text-3xl'>
                  <RxArrowTopRight className='group-hover:rotate-45 group-hover:text-accent transition-all duration-300' />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
};

export default ServiceSlider;
