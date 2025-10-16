"use client";

import Image from 'next/image';
import React from 'react';
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion';
import AnimatedTimer from './Timer';

const AnimatedText = () => {
  const [isFirstText, setIsFirstText] = React.useState(true);
  const controls = useAnimation();

  React.useEffect(() => {
    const interval = setInterval(() => {
      controls.start({
        opacity: 0,
        y: 20,
        transition: { duration: 0.5 },
      }).then(() => {
        setIsFirstText(prev => !prev);
        controls.start({
          opacity: 0.75,
          y: 0,
          transition: { duration: 0.5 },
        });
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [controls]);

  return (
    <h1 className='absolute z-30 w-screen text-center top-[60%] -translate-y-[50%] font-bold text-2xl md:text-7xl gap-2 md:gap-7 flex justify-center items-center'>
      <motion.span
        className={`text-red-500 ${ isFirstText ? '' : 'text-9xl' }`}
        animate={controls}
        initial={{ opacity: 0.75, y: 0 }}
      >
        {isFirstText ? 'PARALLAX OF' : 'TEDx'}
      </motion.span>
      <motion.span
        className={`text-white ${ isFirstText ? '' : 'text-9xl' }`}
        animate={controls}
        initial={{ opacity: 0.75, y: 0 }}
      >
        {isFirstText ? 'PERSPECTIVE' : 'VSSUT'}
      </motion.span>
    </h1>
  );
};


const Hero = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const imageScale = useTransform(scrollY, [0, 300, 600], [1.0, 2.5, 2.5]);
  const image2Scale = useTransform(scrollY, [0, 300, 600], [1.0, 2.5, 4.0]);
  const imageOpacity = useTransform(scrollY, [0, 300, 400], [1, 1, 0]);
  const imageTop = useTransform(scrollY, [0, 300], ['30%', '50%']);
  const timerOpacity = useTransform(scrollY, [500, 600], [0.0, 1.0]);

  return (
    <div className='relative w-screen h-[200vh]'>
      <div className='w-screen h-screen overflow-y-hidden relative bg-black overflow-x-hidden sticky top-0'>
        <div className="relative h-screen w-full overflow-hidden">
          <motion.video
            src="/video/TeaserCut.webm"
            autoPlay
            muted
            loop
            playsInline
            className="
              fixed top-1/2 left-1/2 min-h-full min-w-full 
              -translate-x-1/2 -translate-y-1/2 
              w-auto h-full 
              md:w-full md:h-auto 
              object-cover
              z-[0]
            "
            style={{ opacity }}
          />
        </div>
        <motion.div
          className='absolute z-35 left-[50%] -translate-x-[50%] -translate-y-[50%]'
          style={{ scale: imageScale, opacity: imageOpacity, top: imageTop }}
        >
          <Image
            src="/images/X-TED.png"
            width={312}
            height={290}
            alt="X"
            className='scale-100'
          />
        </motion.div>

        <motion.div
          className='absolute z-30 left-[50%] -translate-x-[50%] -translate-y-[50%]'
          style={{ scale: image2Scale, top: imageTop }}
        >
          <Image
            src="/images/X-TED RED.png"
            width={312}
            height={290}
            alt="X"
            className='scale-100'
          />
        </motion.div>
        <motion.div
          className='absolute z-40 left-[50%] -translate-x-[45%] -translate-y-[50%] top-[50%]'
          style={{ opacity: timerOpacity }}
        >
          <AnimatedTimer />
        </motion.div>
        
        {/* <motion.div
          className='absolute z-40 left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%] flex items-center justify-center'
          style={{ opacity: xTextOpacity, scale: xTextScale }}
        >
          <span className='text-[#eb0028] text-9xl font-bold'>X</span>
        </motion.div> */}
        <motion.div style={{ opacity }}>
          <AnimatedText />
        </motion.div>
        <motion.div
          className="absolute hidden md:block w-96 h-96 top-15 left-[50%] -translate-x-[50%] bg-black rounded-full blur-3xl"
          style={{ opacity }}
        ></motion.div>
        <motion.div
          className="absolute w-screen md:w-288 h-32 md:h-96 top-[60%] -translate-y-[50%] left-[50%] -translate-x-[50%] bg-black rounded-full blur-2xl md:blur-3xl"
          style={{ opacity }}
        ></motion.div>
        <motion.div
          className="absolute hidden md:block inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_60%,rgba(0,0,0,0.9)_100%)]"
          style={{ opacity }}
        ></motion.div>
        <motion.a
          href="/get-tickets"
          className='absolute bottom-[20%] left-[50%] -translate-x-[50%] bg-white hover:bg-gray-200 hover:scale-110 transition-all text-black text-medium text-lg p-3 px-7 rounded-md z-[70]'
          style={{ opacity }}
        >
          Book Tickets
        </motion.a>
      </div>
    </div>
  );
};

export default Hero;