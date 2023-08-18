import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import { FaQuoteLeft } from 'react-icons/fa'
import Image from 'next/image';


// testimonial data
export const testimonialData = [
  {
    image: '/avatar.png',
    name: 'Anne Smith',
    job: 'Web Development',
    message:
      'We needed a website for e-commerce. We only had our logo. A very nice design came out with the logo colors. It was a fast website and we liked the design. We thank you.',
  },
  {
    image: '/avatar.png',
    name: 'Smith Durian',
    job: 'Mobile Development',
    message:
      'I wanted to make a mobile application related to sports predictions. I bought the mobile application at the end of 1 month, but when I bought it, there was a management panel with it. When I asked, I heard the sentence that you can manage it through this panel because you need it in the future, and I liked it very much. I thank him for his hard work.',
  },
  {
    image: '/avatar.png',
    name: 'Elizabeth Ktril',
    job: 'Web Development',
    message:
      'Our corporate company website had to change. We contacted him and requested a professional and corporate website. It was a very fast and seamless cooperation. We thank you.',
  },
];
const TestimonalSlider = () => {
  return (
    <Swiper
    navigation={true}
      spaceBetween={10}
      pagination={{ clickable: true }}
      modules={[Navigation,Pagination]}
      className='h-[400px]'
    >
      {testimonialData.map((person, index) => (
        <SwiperSlide key={index}>
          <div className='flex flex-col items-center md:flex-row gap-x-8 h-full px-16'>
            {/** avatar, name, position */}
            <div className='w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0'>
              <div className='flex flex-col justify-center text-center'>
                <div className='mb-2 mx-auto'>
                  <Image src={person.image} width={100} height={100} alt={person.name} />
                </div>
                <div className='text-lg'>{person.name}</div>
                <div className='text-[12px] uppercase font-extrabold tracking-widest'>{person.position}</div>
                <div className='text-[10px] tracking-widest'>{person.job}</div>
              </div>
            </div>
            <div 
              className='flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[250px] relative xl:pl-20 p-5'>
                {/** quote and message */}
                <div className='mb-4'>
                  <FaQuoteLeft className='text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0' />
                </div>
                <div className='xl:text-lg text-center md:text-left'>
                  {person.message}
                </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonalSlider;
