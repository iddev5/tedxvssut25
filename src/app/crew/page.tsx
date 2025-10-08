'use client'
import { CrewCard, crewMembers } from '@/components/CrewSection'
import { motion } from 'motion/react'

// Core Team Members
const coreTeamMembers: crewMembers[] = [
  {
    id: 1,
    name: 'Sophia Khan',
    role: 'Event Director',
    imageUrl: '/crew_image/crew.jpg',
    quote:
      '“Leading this TEDx journey has been a transformative experience. Every challenge pushed us to create something unforgettable.”',
    social: {
      facebook: 'https://facebook.com/sophiakhan',
      instagram: 'https://instagram.com/sophiakhan',
      twitter: 'https://x.com/sophiakhan',
      linkedin: 'https://linkedin.com/in/sophiakhan',
      github: '',
    },
  },
  {
    id: 2,
    name: 'Rahul Verma',
    role: 'Content Strategist',
    imageUrl: '/crew_image/crew.jpg',
    quote:
      '“Shaping narratives that inspire was my biggest motivation. Watching ideas connect with the audience was magical.”',
    social: {
      facebook: '',
      instagram: 'https://instagram.com/rahulverma',
      twitter: '',
      linkedin: 'https://linkedin.com/in/rahulverma',
      github: '',
    },
  },
  {
    id: 3,
    name: 'Ananya Gupta',
    role: 'Operations Head',
    imageUrl: '/crew_image/crew.jpg',
    quote:
      '“Handling operations taught me the art of coordination and resilience. The buzz of the event made every sleepless night worth it.”',
    social: {
      facebook: 'https://facebook.com/ananyagupta',
      instagram: 'https://instagram.com/ananyagupta',
      twitter: '',
      linkedin: 'https://linkedin.com/in/ananyagupta',
      github: '',
    },
  },
  {
    id: 4,
    name: 'Vikram Rao',
    role: 'Marketing & PR Head',
    imageUrl: '/crew_image/crew.jpg',
    quote:
      '“Spreading the TEDx message to the world was an incredible challenge. The overwhelming response proved the power of storytelling.”',
    social: {
      facebook: '',
      instagram: 'https://instagram.com/vikramrao',
      twitter: 'https://x.com/vikramrao',
      linkedin: 'https://linkedin.com/in/vikramrao',
      github: '',
    },
  },
]

// Volunteers
const volunteers: crewMembers[] = [
  {
    id: 1,
    name: 'Meera Sharma',
    role: 'Hospitality Volunteer',
    imageUrl: '/crew_image/crew.jpg',
    quote:
      '“Welcoming our guests and speakers was such a rewarding experience. Their smiles said it all.”',
    social: {
      facebook: '',
      instagram: 'https://instagram.com/meerasharma',
      twitter: '',
      linkedin: '',
      github: '',
    },
  },
  {
    id: 2,
    name: 'Karan Patel',
    role: 'Stage Management Volunteer',
    imageUrl: '/crew_image/crew.jpg',
    quote:
      '“Being behind the scenes gave me a new respect for live events. Every cue mattered!”',
    social: {
      facebook: 'https://facebook.com/karanpatel',
      instagram: '',
      twitter: '',
      linkedin: '',
      github: '',
    },
  },
  {
    id: 3,
    name: 'Aditi Nair',
    role: 'Social Media Volunteer',
    imageUrl: '/crew_image/crew.jpg',
    quote:
      '“Capturing moments and sharing them live was thrilling. The energy online matched the energy in the hall.”',
    social: {
      facebook: '',
      instagram: 'https://instagram.com/aditinair',
      twitter: 'https://x.com/aditinair',
      linkedin: '',
      github: '',
    },
  },
  {
    id: 4,
    name: 'Rohit Das',
    role: 'Technical Support Volunteer',
    imageUrl: '/crew_image/crew.jpg',
    quote:
      '“Every wire and setup was worth it when the lights and sound came together flawlessly.”',
    social: {
      facebook: '',
      instagram: '',
      twitter: 'https://x.com/rohitdas',
      linkedin: 'https://linkedin.com/in/rohitdas',
      github: 'https://github.com/rohitdas',
    },
  },
  {
    id: 5,
    name: 'Sneha Roy',
    role: 'Curation Support Volunteer',
    imageUrl: '/crew_image/crew.jpg',
    quote:
      '“Working closely with speakers and curators was inspiring. Every story shaped me too.”',
    social: {
      facebook: 'https://facebook.com/snehroy',
      instagram: 'https://instagram.com/snehroy',
      twitter: '',
      linkedin: '',
      github: '',
    },
  },
  {
    id: 6,
    name: 'Arjun Mehra',
    role: 'Design Volunteer',
    imageUrl: '/crew_image/crew.jpg',
    quote:
      '“Designing visuals that spoke louder than words was my way of contributing to the TEDx spirit.”',
    social: {
      facebook: '',
      instagram: 'https://instagram.com/arjunmehra',
      twitter: '',
      linkedin: '',
      github: '',
    },
  },
  {
    id: 7,
    name: 'Nisha Kumari',
    role: 'Photography Volunteer',
    imageUrl: '/crew_image/crew.jpg',
    quote:
      '“Capturing candid moments of ideas spreading was a joy. These memories will last forever.”',
    social: {
      facebook: 'https://facebook.com/nishakumari',
      instagram: 'https://instagram.com/nishakumari',
      twitter: '',
      linkedin: '',
      github: '',
    },
  },
  {
    id: 8,
    name: 'Dev Anand',
    role: 'Logistics Volunteer',
    imageUrl: '/crew_image/crew.jpg',
    quote:
      '“Managing logistics taught me patience and adaptability. Every small task built the bigger picture.”',
    social: {
      facebook: '',
      instagram: '',
      twitter: 'https://x.com/devanand',
      linkedin: '',
      github: '',
    },
  },
]

export default function Index() {
  return (
    <div className="min-h-screen bg-black">
      <section className="relative pt-40 px-6 ">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            className="text-5xl md:text-6xl  mb-6 "
            initial={{ scale: 2, opacity: 0 }}
            animate={{ scale: 1, opacity: 100 }}
            transition={{
              duration: 0.8,
              ease: 'easeInOut',
            }}
          >
            Meet Our <span className="font-bold text-red-600">Crew</span>
          </motion.h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            The passionate team behind TEDx, working together to spread ideas
            worth sharing
          </p>
        </div>
      </section>

      {/* Core Team Section */}
      <section className="py-12 px-4 sm:px-6 lg:py-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-10 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-red-600">
              Core Team
            </h2>
            <div className="h-1 w-32 sm:w-40 mx-auto lg:mx-0 bg-gradient-to-r from-red-600 via-red-500 to-black" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-18 justify-items-center">
            {coreTeamMembers.map((member, i) => (
              <CrewCard key={i} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Volunteers Section */}
      <section className="py-12 px-4 sm:px-6 lg:py-16 bg-black">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-10 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold text-red-600 mb-4">
              Volunteers
            </h2>
            <div className="h-1 w-32 sm:w-40 mx-auto lg:mx-0 bg-gradient-to-r from-red-600 via-red-500 to-black" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-x-6 gap-y-18  justify-items-center">
            {volunteers.map((member, i) => (
              <CrewCard key={i} member={member} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
