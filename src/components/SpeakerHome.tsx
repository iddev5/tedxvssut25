"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type SpeakerHomeProps = {
    id?: string;
    name: string;
    bio: string;
    title: string;
    link?: string;
    children?: React.ReactNode;
};

export const SpeakerHome = (props: SpeakerHomeProps) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <AnimatePresence>
                <motion.div
                    layoutId={`card-${props.id}`}
                    transition={{ type: "spring", stiffness: 250, damping: 30, velocity:80 }}
                    className="z-20 relative w-[470px] h-[500px] rounded-[10px] border-2 border-gray-300 max-md:w-[230px] max-md:h-[270px] drop-shadow-md drop-shadow-gray-600 cursor-pointer"
                    onClick={() => setOpen(true)}
                >
                    <motion.div
                        className="relative w-full h-full overflow-hidden border-2 border-gray-300 rounded-[10px] outline-2 outline-gray-300"
                    >
                        {props.children}
                    </motion.div>
                    <motion.div
                        className="absolute inset-0 flex flex-col justify-end pointer-events-none"
                    >
                        <motion.div
                            className="h-auto w-auto bg-gradient-to-t from-black/90 via-black/60 to-transparent rounded-bl-[10px] rounded-br-[10px] p-2"
                        >
                            <motion.p className="ml-3 max-md:ml-[5px] text-white text-[25px] max-md:text-[22px] font-normal">
                                {props.name}
                            </motion.p>
                            <motion.p className="w-[150px] max-md:w-[200px] wrap-break-word ml-3 max-md:ml-[5px] text-white/80 text-[16px] max-md:text-[15px]">
                                {props.title}
                            </motion.p>
                        </motion.div>
                        <div className="absolute inset-0 flex flex-col justify-end items-end p-2 pointer-events-none">
                            <div className="pointer-events-auto">
                                <button
                                    type="button"
                                    className="bg-red-800 border-2 border-white rounded-full p-[6px] max-md:p-[3px] cursor-pointer"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setOpen(true);
                                    }}
                                >
                                    <ChevronRight className="text-white" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
                {open && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 , ease:"easeOut" }}
                        className="fixed inset-0 flex justify-center items-center z-40 bg-black/40 backdrop-blur-[5px]"
                        onClick={() => setOpen(false)}
                    >
                        <motion.div
                            layoutId={`card-${props.id}`}
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0 }}
                            transition={{ type: "spring", stiffness: 250, damping: 30 }}
                            className="z-50 w-[800px] h-[90%]  [@media(max-width:900px)]:w-[90%] [@media(min-width:1500px)]:w-[70%] rounded-[10px] border-2 border-gray-300 drop-shadow-md drop-shadow-gray-600 cursor-pointer bg-white overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <motion.div className="relative w-full h-full overflow-hidden border-2 border-gray-300 outline-2 outline-gray-300 rounded-[10px]">
                                {props.children}
                            </motion.div>
                            <motion.div
                                className="absolute inset-0 flex flex-col justify-end pointer-events-none"
                            >
                                <motion.div className="h-auto w-auto bg-gradient-to-t from-black/85 via-black/75 to-transparent rounded-bl-[10px] rounded-br-[10px] p-4">
                                    <motion.p className="ml-3 text-left text-white text-[30px] font-semibold">
                                        {props.name}
                                    </motion.p>
                                    <motion.p className="w-[200px] ml-3 text-left text-white/80 text-[20px]">
                                        {props.title}
                                    </motion.p>
                                    <motion.p
                                        className="ml-3 mt-3 text-[18px] text-white/80 mb-[7px]"
                                    >
                                        {props.bio}
                                    </motion.p>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
import Link from 'next/link'


// Mock Data
const speakers = [
  {
    id: 1,
    name: 'Mr. Arjun Roy',
    title: 'AI Researcher and CTO, NextGen Tech',
    imageUrl: '/speaker_image/speaker.webp',
  },
  {
    id: 2,
    name: 'Dr. Priya Sharma',
    title: 'Quantum Physicist, Innovate Labs',
    imageUrl: '/speaker_image/speaker.webp',
  },
  {
    id: 3,
    name: 'Ms. Aisha Khan',
    title: 'Bio-ethicist & Futurist, Helix Institute',
    imageUrl: '/speaker_image/speaker.webp',
  },
  {
    id: 4,
    name: 'Mr. Ben Carter',
    title: 'Lead UX Designer, Creative Solutions',
    imageUrl: '/speaker_image/speaker.webp',
  },
  {
    id: 5,
    name: 'Dr. Elena Vance',
    title: 'Climate Scientist, Terra Initiative',
    imageUrl: '/speaker_image/speaker.webp',
  },
]

const SpeakersSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0) 
  const [activeIndex, setActiveIndex] = useState(1)
  const imageVariants = {
    center: { x: '', zIndex: 5 },
    left: { x: '', zIndex: 2 },
    right: { x: '', zIndex: 1 },
  }
  
  const handlePrev = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + speakers.length) % speakers.length)
    setActiveIndex(1)
  }

  const handleNext = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % speakers.length)
    setActiveIndex(1)
  }

  const getVisibleSpeakers = () => {
    const total = speakers.length
    const left = currentIndex % total
    const center = (currentIndex + 1) % total
    const right = (currentIndex + 2) % total
    return [speakers[left], speakers[center], speakers[right]]
  }

  const visibleSpeakers = getVisibleSpeakers()

  return (
    <section className="bg-black text-white py-8 md:py-10 font-sans overflow-hidden lg:h-screen relative">
      <div className="container mx-auto text-center px-4 relative">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-light uppercase tracking-widest">
          Meet Our <span className="font-bold text-red-600">Speakers</span>
        </h2>

        {/* Subtitle */}
        <p className="max-w-2xl md:max-w-4xl mx-auto mt-6 md:mt-10 text-gray-400 text-xs sm:text-sm md:text-base leading-relaxed">
          Visionaries, innovators, and changemakers—all set to take the stage at
          TEDxVSSUT 2025. Get ready to hear from an inspiring lineup of speakers
          who will share ideas that challenge perspectives and spark
          transformation.
        </p>

        {/* Desktop: 3 cards visible */}
        <div className="hidden md:flex relative mt-10 md:mt-12 justify-center items-center overflow-hidden h-[360px] md:h-[400] lg:h-[440px]">
          <motion.div
            className="flex gap-4 md:gap-4 lg:gap-6"
            key={currentIndex}
            initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction > 0 ? -300 : 300, opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            {visibleSpeakers.map((speaker, i) => {
              const getPos =
                i == currentIndex
                  ? 'center'
                  : i > currentIndex
                  ? 'right'
                  : 'left'
              const isActive = activeIndex === i
              return (
                <div
                  className="min-w-[260px] min-h-[300px] md:min-w-[180px] md:min-h-[220px] lg:min-w-[220px] lg:min-h-[260px] flex-shrink-0"
                  key={speaker.id}
                >
                  <motion.div
                    className={`relative min-w-[40%] sm:min-w-[45%] md:min-w-[50%] lg:w-[320px] xl:w-[350px] h-[300px] sm:h-[340px] md:h-[360px] lg:h-[400px] shrink-0 overflow-hidden rounded-xl transform transition-all duration-500 ease-in-out hover:border border-gray-300 ${
                      isActive ? 'scale-105' : 'scale-90 opacity-60'
                    }`}
                    initial={{
                      scale: 0.5,
                      opacity: 0,
                    }}
                    onMouseEnter={() => setActiveIndex(i)}
                    variants={imageVariants}
                    animate={{
                      scale: 1,
                      opacity: 1,
                    }}
                  >
                    {/* Speaker Image */}
                    <img
                      src={speaker.imageUrl}
                      alt={speaker.name}
                      className={`w-full h-full object-cover transition-all duration-500 ${
                        isActive
                          ? ''
                          : getPos === 'right'
                          ? 'filter grayscale '
                          : 'grayscale'
                      }`}
                    />

                    {/* Overlay Gradient */}
                    <div className="absolute bottom-0 left-0 right-0 h-1/3 sm:h-1/2 bg-gradient-to-t from-black to-transparent"></div>

                    <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 md:p-2 lg:p-6 flex justify-between md:gap-2 -gap-1  items-end text-white">
                      <div className="text-left">
                        <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-snug">
                          {speaker.name}
                        </h3>
                        <p className="text-[10px] sm:text-xs md:text-sm  text-gray-400">
                          {speaker.title}
                        </p>
                      </div>
                      <div
                        className={`h-7 w-7 sm:h-8 sm:w-8 md:h-9 md:w-9 lg:h-9 lg:w-9 rounded-full flex items-center justify-center transition-colors duration-300 ${
                          isActive ? 'bg-red-600' : 'bg-gray-500'
                        }`}
                      >
                        <GrFormNext className="text-white text-sm sm:text-base md:text-lg lg:text-xl" />
                      </div>
                    </div>
                  </motion.div>
                </div>
              )
            })}
          </motion.div>
        </div>

        {/* Mobile: 1 card */}
        <div className="flex md:hidden relative mt-8 sm:mt-10 justify-center items-center h-[320px] sm:h-[360px] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex} // ensures a re-render on speaker change
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="w-full h-full flex justify-center items-center"
            >
              <div
                className="min-w-[260px] min-h-[300px] md:min-w-[180px] md:min-h-[220px] lg:min-w-[220px] lg:min-h-[260px] flex-shrink-0"
                key={speakers[currentIndex].id}
              >
                <motion.div
                  className={`relative min-w-[40%] sm:min-w-[45%] md:min-w-[50%] lg:w-[320px] xl:w-[350px] h-[300px] sm:h-[340px] md:h-[360px] lg:h-[400px] shrink-0 overflow-hidden rounded-xl transform transition-all duration-500 ease-in-out scale-105 border border-gray-300`}
                  initial={{
                    scale: 0.5,
                    opacity: 0,
                  }}
                  variants={imageVariants}
                  animate={{
                    scale: 1,
                    opacity: 1,
                  }}
                >
                  {/* Speaker Image */}
                  <img
                    src={speakers[currentIndex].imageUrl}
                    alt={speakers[currentIndex].name}
                    className={`w-full h-full object-cover transition-all duration-500`}
                  />

                  {/* Overlay Gradient */}
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 sm:h-1/2 bg-gradient-to-t from-black to-transparent"></div>

                  <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 md:p-4 lg:p-6 flex justify-between md:gap-4 -gap-1  items-end text-white">
                    <div className="text-left">
                      <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-snug">
                        {speakers[currentIndex].name}
                      </h3>
                      <p className="text-[10px] sm:text-xs md:text-sm  text-gray-400">
                        {speakers[currentIndex].title}
                      </p>
                    </div>
                    <div
                      className={`h-7 w-7 sm:h-8 sm:w-8 md:h-9 md:w-9 rounded-full flex items-center justify-center transition-colors duration-300 bg-red-600`}
                    >
                      <GrFormNext className="text-white text-sm sm:text-base md:text-lg lg:text-xl" />
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex justify-center items-center gap-4 mt-6 md:mt-8 md:hidden">
          <button
            onClick={handlePrev}
            className="h-9 w-9 sm:h-10 sm:w-10 md:h-12 md:w-12 border border-gray-600 rounded-full flex items-center justify-center text-gray-400 hover:bg-gray-800 hover:text-white transition-colors"
          >
            <GrFormPrevious className="text-2xl sm:text-3xl" />
          </button>
          <button
            onClick={handleNext}
            className="h-9 w-9 sm:h-10 sm:w-10 md:h-12 md:w-12 border-2 border-gray-400 rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-colors"
          >
            <GrFormNext className="text-2xl sm:text-3xl" />
          </button>
        </div>
        <Link
          href="/speakers"
          className="inline-block px-6 py-2 mt-6 rounded-md bg-red-600 text-white font-semibold tracking-wide
             hover:bg-red-700 hover:scale-105 hover:shadow-lg transition-all duration-300"
        >
          View All Speakers
        </Link>
      </div>
    </section>
  )
}

export default SpeakersSection
