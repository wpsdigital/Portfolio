import { Swiper, SwiperSlide, SwiperSlider } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { Pagination } from 'swiper';
import { BsArrowRight} from 'react-icons/bs'

export const workSlider = [
  {
    icon: '',
    title: 'Branding',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: '',
    title: 'Design',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: ' ',
    title: 'Development',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: ' ',
    title: 'Copywriting',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: ' ',
    title: 'SEO',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];

const WorkSlider = () => {
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
      modules={[Pagination]}
      className='h-[240px] sm:h-[340px]'>
        {workSlider.slides.map((item, index) => {
          return(
            <SwiperSlide key={index}>
              slide
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
};

export default WorkSlider;
