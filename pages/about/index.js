import React, { useState } from 'react';
import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import CountUp from 'react-countup';
// data
const aboutData = [
  {
    title: 'skills',
    info: [
      { 
        title: 'Web Development',
        company: 'ReactJS, NextJS, TailwindCSS, Shadcn UI, Prisma, ThreeJS',
      },
      { 
        title: 'Web App Development',
        company: 'NodeJS, ReactJS, NextJS, TailwindCSS, Shadcn UI, MongoDB, PostgreSQL' ,
      },
      { 
        title: 'Mobile App Development',
        company: 'React Native, Kotlin, Java',
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'PHP  Developer',
        company: 'Grafil',
        stage: '2017 - 2017',
        status: 'intern'
      },
      {
        title: 'Full Stack Developer',
        company: '1010İstanbul & Sosyal Medya Kampüsü',
        stage: '2019 - 2021',
        status: 'full time'

      },
      {
        title: 'Mid-Level PHP Developer',
        company: 'Realtor Global',
        stage: '2023 - (Current)',
        status: 'full time'
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Web Development',
        company: 'High School, TR',
        stage: '2015',
      },
      {
        title: 'Computer Programming',
        company: 'Associate Degree - TR',
        stage: '2017',
      },
      {
        title: 'Computer Engineering',
        company: 'Bachelor`s Degree - TR',
        stage: '2023',
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className='h-full bg-primary/30 py-32 text-center xl:text-left'>
      <Circles />
      <motion.div
        variants={fadeIn('right', 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className='hidden xl:flex absolute bottom-0 -left-[370px]'>
        <Avatar />
      </motion.div>
      <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>
        <div className='flex-1 flex flex-col justify-center'>
          <motion.h2 variants={fadeIn('right', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className='h2'>
            Captivation <span className='text-accent'>stories</span> birth magnificent designs.
          </motion.h2>
          <motion.p
            variants={fadeIn('right', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'>
            12 years ago, I began freelancing as a developer. Since then, I have done remote work for agencies, consulted for startups and colloborated on digital products for bussiness and consumer use.
          </motion.p>
          <motion.div
          variants={fadeIn('right', 0.6)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className='hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8'>
            <div className='flex flex-1 xl:gap-x-6'>
              {/** Experience */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={12} duration={3} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                  Years of Experience
                </div>
              </div>
              { /** clients */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={250} duration={3} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                  Satisfied Clients
                </div>
              </div>
              {/** Project */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={450} duration={3} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                  Finished Projects
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div
        variants={fadeIn('left', 0.4)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className='flex flex-col w-full xl:max-w-[48%] h-[480px]'>
          <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
            {aboutData.map((item, itemIndex) => {
              return (
                <div key={itemIndex}
                  className={`${index === itemIndex && 'text-accent after:w-[100px] after:bg-accent after:transition-all after:duration-300'} cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`} onClick={() => { setIndex(itemIndex) }}>
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start'>
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div key={itemIndex} className='relative flex-1 after:w-[1px'>
                <div className='text-2xl xl:text-2xl font-bold text-accent mb-2'>
                  {item.title}
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4]'>
                  {item.company}<br />
                  {item.stage}<br />
                  {item.status}
                </div>
              </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
