'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

interface crewMembers {
  id: Number
  name: string
  role: string
  imageUrl: string
  quote: string
}

// Mock Data
const crewMembers: crewMembers[] = [
  {
    id: 1,
    name: 'Arab Mehtab',
    role: 'Organising Team',
    imageUrl: '/crew_image/crew.jpg',
    quote: '',
  },
  {
    id: 2,
    name: 'Arab Mehtab',
    role: 'Organising Team',
    imageUrl: '/crew_image/crew.jpg',
    quote:
      '“Organizing TEDxVSSUT was an inspiring journey! From coordinating speakers to perfecting details, it was a rewarding experience of teamwork, creativity and bringing impactful ideas to life.”',
  },
  {
    id: 3,
    name: 'Jane Doe',
    role: 'Lead Designer',
    imageUrl: '/crew_image/crew.jpg',
    quote:
      '“Crafting the visual identity for this event was a dream. Seeing our brand come to life on stage and connect with the audience was incredibly fulfilling.”',
  },
  {
    id: 4,
    name: 'John Smith',
    role: 'Technical Head',
    imageUrl: '/crew_image/crew.jpg',
    quote:
      "“Ensuring a seamless technical production is my passion. The energy of a live TEDx event is unmatched, and I'm proud of our flawless execution.”",
  },
  {
    id: 5,
    name: 'Emily White',
    role: 'Curation Lead',
    imageUrl: '/crew_image/crew.jpg',
    quote:
      '“Finding and guiding our speakers was an honor. Each one brought a unique and powerful idea to the stage, making our event truly memorable.”',
  },
]

const CrewCard = () => {
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

              <div className="absolute inset-0 bg-black/80 opacity-0 hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-4">
                <p className="text-white text-sm leading-snug">{crew.quote}</p>
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

export default CrewCard
