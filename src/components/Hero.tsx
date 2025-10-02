"use client";

import Image from 'next/image';

const Hero = () => {
  return <div className='relative w-screen'>
    <div className='w-screen h-screen overflow-y-hidden relative bg-black overflow-x-hidden'>
    <div className="relative h-screen w-full overflow-hidden">
      <video
        src="/video/TeaserCut.webm"
        autoPlay
        muted
        loop
        playsInline
        className="
          absolute top-1/2 left-1/2 min-h-full min-w-full 
          -translate-x-1/2 -translate-y-1/2 
          w-auto h-full 
          md:w-full md:h-auto 
          object-cover opacity-50
        "
      />
    </div>
      <Image
          src="/images/X-TED.png"
          width={312}
          height={290}
          alt="X"
          className='absolute scale-70 md:scale-100 z-35 left-[50%] -translate-x-[50%] top-[15%]'
      />
      <h1 className='absolute z-35 w-screen text-center top-[60%] -translate-y-[50%] font-bold text-2xl md:text-7xl gap-2 md:gap-7 flex justify-center items-center'>
        <span className='text-red-500 opacity-75'>PARALLAX OF</span>
        <span className='text-white opacity-75'>PERSPECTIVE</span>
      </h1>
    </div>
    <div className="absolute hidden md:block w-96 h-96 top-15 left-[50%] -translate-x-[50%] bg-black rounded-full blur-3xl"></div>
    <div className="absolute w-screen md:w-288 h-32 md:h-96 top-[60%] -translate-y-[50%] left-[50%] -translate-x-[50%] bg-black rounded-full blur-2xl md:blur-3xl"></div>
    <div className="absolute hidden md:block inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_60%,rgba(0,0,0,0.9)_100%)]"></div>

    <a href="/register" className='absolute bottom-[20%] left-[50%] -translate-x-[50%] bg-white hover:bg-gray-200 hover:scale-110 transition-all text-black text-medium text-lg p-3 px-7 rounded-md z-[100]'>Register Now</a>
  </div>
}

export default Hero;