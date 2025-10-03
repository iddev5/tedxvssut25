'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsTwitterX,
} from 'react-icons/bs'

interface crewMembers {
  id: number
  name: string
  role: string
  imageUrl: string
  quote: string
  social?: {
    facebook?: string
    instagram?: string
    twitter?: string
    linkedin?: string
    github?: string
  }
}

const crewMembers: crewMembers[] = [
  {
    id: 1,
    name: 'Arab Mehtab',
    role: 'Organising Team',
    imageUrl: '/crew_image/crew.jpg',
    quote: '',
    social: {
      facebook: 'https://facebook.com/arabmehtab',
      instagram: 'https://instagram.com/arabmehtab',
      twitter: 'https://x.com/arabmehtab',
      linkedin: 'https://linkedin.com/in/arabmehtab',
      github: '', 
    },
  },
  {
    id: 2,
    name: 'Arab Mehtab',
    role: 'Organising Team',
    imageUrl: '/crew_image/crew.jpg',
    quote:
      '“Organizing TEDxVSSUT was an inspiring journey! From coordinating speakers to perfecting details, it was a rewarding experience of teamwork, creativity and bringing impactful ideas to life.”',
    social: {
      facebook: 'https://facebook.com/arabmehtab2',
      instagram: 'https://instagram.com/arabmehtab2',
      twitter: '',
      linkedin: 'https://linkedin.com/in/arabmehtab2',
      github: '',
    },
  },
  {
    id: 3,
    name: 'Jane Doe',
    role: 'Lead Designer',
    imageUrl: '/crew_image/crew.jpg',
    quote:
      '“Crafting the visual identity for this event was a dream. Seeing our brand come to life on stage and connect with the audience was incredibly fulfilling.”',
    social: {
      facebook: '',
      instagram: 'https://instagram.com/janedoe',
      twitter: 'https://x.com/janedoe',
      linkedin: 'https://linkedin.com/in/janedoe',
      github: '',
    },
  },
  {
    id: 4,
    name: 'John Smith',
    role: 'Technical Head',
    imageUrl: '/crew_image/crew.jpg',
    quote:
      "“Ensuring a seamless technical production is my passion. The energy of a live TEDx event is unmatched, and I'm proud of our flawless execution.”",
    social: {
      facebook: '',
      instagram: '',
      twitter: 'https://x.com/johnsmith',
      linkedin: 'https://linkedin.com/in/johnsmith',
      github: 'https://github.com/johnsmith',
    },
  },
  {
    id: 5,
    name: 'Emily White',
    role: 'Curation Lead',
    imageUrl: '/crew_image/crew.jpg',
    quote:
      '“Finding and guiding our speakers was an honor. Each one brought a unique and powerful idea to the stage, making our event truly memorable.”',
    social: {
      facebook: 'https://facebook.com/emilywhite',
      instagram: 'https://instagram.com/emilywhite',
      twitter: '',
      linkedin: 'https://linkedin.com/in/emilywhite',
      github: '',
    },
  },
]

const CrewSection = () => {
  return (
    <section className="bg-black text-white py-8 md:py-10 font-sans overflow-hidden lg:h-screen relative">
      <div className="container mx-auto text-center px-4 relative">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-light uppercase tracking-widest">
          <span className="font-bold text-red-600">Crew</span> Members
        </h2>

        <p className="max-w-2xl md:max-w-4xl mx-auto mt-8 md:mt-10 text-gray-400 text-xs sm:text-sm md:text-base leading-relaxed">
          Behind every remarkable TEDx event is a passionate and dedicated team
          working tirelessly to bring ideas to life. Meet the individuals who
          are making TEDxVSSUT 2025 success.
        </p>

        <div className="w-[80%] max-w-[1400px] mx-auto px-4 sm:px-6 md:px-30 flex overflow-x-auto mt-10 sm:mt-16 mb-6 sm:mb-8  relative py-5 lg:custom-scrollbar-lg md:custom-scrollbar-md custom-scrollbar gap-3 sm:gap-4 md:gap-6 lg:gap-8 ">
          {crewMembers.map((crew, i) => (
            <motion.div
              key={i}
              className="relative w-[180px] sm:w-[200px] md:w-[220px] lg:w-[240px]
                 h-[280px] sm:h-[300px] md:h-[320px] lg:h-[340px]
                 bg-black rounded-lg overflow-y-hidden flex-shrink-0 hover:border-1 border-gray-300 "
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={crew.imageUrl}
                alt={crew.name}
                className="w-full h-full object-cover grayscale"
              />

              <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in-out  bg-black/80 flex flex-col items-center justify-center p-4 space-y-3">
                <p className="text-white text-sm leading-snug">{crew.quote}</p>

                <div className="flex space-x-4 text-white text-xl mt-2">
                  {crew?.social?.facebook && (
                    <motion.a
                      href={crew.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{
                        type: 'spring',
                        stiffness: 300,
                        damping: 15,
                      }}
                    >
                      <BsFacebook className="hover:text-blue-500 transition-colors" />
                    </motion.a>
                  )}

                  {crew?.social?.instagram && (
                    <motion.a
                      href={crew.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{
                        type: 'spring',
                        stiffness: 300,
                        damping: 15,
                      }}
                    >
                      <BsInstagram className="hover:text-pink-500 transition-colors" />
                    </motion.a>
                  )}

                  {crew?.social?.twitter && (
                    <motion.a
                      href={crew.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{
                        type: 'spring',
                        stiffness: 300,
                        damping: 15,
                      }}
                    >
                      <BsTwitterX className="hover:text-[#1DA1F2] transition-colors" />
                    </motion.a>
                  )}

                  {crew?.social?.linkedin && (
                    <motion.a
                      href={crew.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{
                        type: 'spring',
                        stiffness: 300,
                        damping: 15,
                      }}
                    >
                      <BsLinkedin className="hover:text-blue-400 transition-colors" />
                    </motion.a>
                  )}

                  {crew?.social?.github && (
                    <motion.a
                      href={crew.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{
                        type: 'spring',
                        stiffness: 300,
                        damping: 15,
                      }}
                    >
                      <BsGithub className="hover:text-gray-400 transition-colors" />
                    </motion.a>
                  )}
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 bg-black/90 text-center py-2">
                <h3 className="text-red-500 font-bold text-sm sm:text-base">
                  {crew.name}
                </h3>
                <p className="text-white text-xs sm:text-sm">{crew.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <Link
          href="/crew"
          className="inline-block px-6 py-2 mt-6 rounded-md bg-red-600 text-white font-semibold tracking-wide
             hover:bg-red-700 hover:scale-105 hover:shadow-lg transition-all duration-300"
        >
          View All Crew Members
        </Link>
      </div>
    </section>
  )
}

export default CrewSection
