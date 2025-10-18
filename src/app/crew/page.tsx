'use client'
import { CrewCard, crewMembers } from '@/components/CrewSection'
import { motion } from 'motion/react'
import config from '@/app/config'

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
// Core Leadership Team
const leadershipTeam: crewMembers[] = [
  {
    id: 1,
    name: 'Sophia Khan',
    role: 'Event Director',
    imageUrl: '/crew_image/crew.jpg',
    quote:
      '"Leading this TEDx journey has been a transformative experience. Every challenge pushed us to create something unforgettable."',
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
      '"Shaping narratives that inspire was my biggest motivation. Watching ideas connect with the audience was magical."',
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
      '"Handling operations taught me the art of coordination and resilience. The buzz of the event made every sleepless night worth it."',
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
    name: 'Meera Krishnan',
    role: 'Speaker Relations Manager',
    imageUrl: '/crew_image/crew.jpg',
    quote:
      '"Working closely with our speakers was an honor. Their stories of passion and perseverance inspired me every single day."',
    social: {
      facebook: 'https://facebook.com/meerakrishnan',
      instagram: 'https://instagram.com/meerakrishnan',
      twitter: '',
      linkedin: 'https://linkedin.com/in/meerakrishnan',
      github: '',
    },
  },
  {
    id: 5,
    name: 'Priya Sharma',
    role: 'Sponsorship Lead',
    imageUrl: '/crew_image/crew.jpg',
    quote:
      '"Building partnerships that believed in our vision was incredibly rewarding. Together, we turned ambitious ideas into reality."',
    social: {
      facebook: 'https://facebook.com/priyasharma',
      instagram: 'https://instagram.com/priyasharma',
      twitter: '',
      linkedin: 'https://linkedin.com/in/priyasharma',
      github: '',
    },
  },
]

// Marketing & Communications Team
const marketingTeam: crewMembers[] = [
  {
    id: 6,
    name: 'Vikram Rao',
    role: 'Marketing & PR Head',
    imageUrl: '/crew_image/crew.jpg',
    quote:
      '"Spreading the TEDx message to the world was an incredible challenge. The overwhelming response proved the power of storytelling."',
    social: {
      facebook: '',
      instagram: 'https://instagram.com/vikramrao',
      twitter: 'https://x.com/vikramrao',
      linkedin: 'https://linkedin.com/in/vikramrao',
      github: '',
    },
  },
  {
    id: 7,
    name: 'Aditya Desai',
    role: 'Social Media Manager',
    imageUrl: '/crew_image/crew.jpg',
    quote:
      '"Capturing moments and sharing them with the world in real-time was exhilarating. Our online community made this event truly global."',
    social: {
      facebook: '',
      instagram: 'https://instagram.com/adityadesai',
      twitter: 'https://x.com/adityadesai',
      linkedin: 'https://linkedin.com/in/adityadesai',
      github: '',
    },
  },
  {
    id: 8,
    name: 'Ishita Kapoor',
    role: 'Content Writer',
    imageUrl: '/crew_image/crew.jpg',
    quote:
      '"Crafting stories that resonated with our audience was my passion. Every word was chosen to inspire and engage."',
    social: {
      facebook: 'https://facebook.com/ishitakapoor',
      instagram: 'https://instagram.com/ishitakapoor',
      twitter: '',
      linkedin: 'https://linkedin.com/in/ishitakapoor',
      github: '',
    },
  },
  {
    id: 9,
    name: 'Rohan Joshi',
    role: 'Brand Strategist',
    imageUrl: '/crew_image/crew.jpg',
    quote:
      '"Building a brand identity that people connected with emotionally was the ultimate goal. We created more than an event; we created a movement."',
    social: {
      facebook: '',
      instagram: 'https://instagram.com/rohanjoshi',
      twitter: 'https://x.com/rohanjoshi',
      linkedin: 'https://linkedin.com/in/rohanjoshi',
      github: '',
    },
  },
  {
    id: 10,
    name: 'Sneha Reddy',
    role: 'Media Relations Officer',
    imageUrl: '/crew_image/crew.jpg',
    quote:
      '"Connecting with journalists and media outlets amplified our reach. Seeing our story featured across platforms was incredibly fulfilling."',
    social: {
      facebook: 'https://facebook.com/snehareddy',
      instagram: 'https://instagram.com/snehareddy',
      twitter: '',
      linkedin: 'https://linkedin.com/in/snehareddy',
      github: '',
    },
  },
]

// Creative & Design Team
const creativeTeam: crewMembers[] = [
  {
    id: 11,
    name: 'Nisha Patel',
    role: 'Creative Head',
    imageUrl: '/crew_image/crew.jpg',
    quote:
      '"Designing the visual identity of TEDx was a dream. Every graphic, every stage element told our story of innovation and inspiration."',
    social: {
      facebook: 'https://facebook.com/nishapatel',
      instagram: 'https://instagram.com/nishapatel',
      twitter: '',
      linkedin: 'https://linkedin.com/in/nishapatel',
      github: '',
    },
  },
  {
    id: 12,
    name: 'Kabir Malhotra',
    role: 'Graphic Designer',
    imageUrl: '/crew_image/crew.jpg',
    quote:
      '"Every poster, every banner was crafted with intention. Design became our language to communicate ideas worth spreading."',
    social: {
      facebook: '',
      instagram: 'https://instagram.com/kabirmalhotra',
      twitter: '',
      linkedin: 'https://linkedin.com/in/kabirmalhotra',
      github: 'https://github.com/kabirmalhotra',
    },
  },
  {
    id: 13,
    name: 'Tara Iyer',
    role: 'Video Production Lead',
    imageUrl: '/crew_image/crew.jpg',
    quote:
      '"Capturing the essence of TEDx through film was an art. Each frame was designed to evoke emotion and inspire action."',
    social: {
      facebook: 'https://facebook.com/taraiyer',
      instagram: 'https://instagram.com/taraiyer',
      twitter: 'https://x.com/taraiyer',
      linkedin: 'https://linkedin.com/in/taraiyer',
      github: '',
    },
  },
  {
    id: 14,
    name: 'Aarav Saxena',
    role: 'Stage Design Coordinator',
    imageUrl: '/crew_image/crew.jpg',
    quote:
      '"Creating a stage that amplified every speaker\'s voice was my mission. The red circle became a canvas for transformative ideas."',
    social: {
      facebook: '',
      instagram: 'https://instagram.com/aaravsaxena',
      twitter: '',
      linkedin: 'https://linkedin.com/in/aaravsaxena',
      github: '',
    },
  },
  {
    id: 15,
    name: 'Divya Nair',
    role: 'Photography Head',
    imageUrl: '/crew_image/crew.jpg',
    quote:
      '"Every photograph tells a story. I aimed to freeze moments of inspiration that would resonate long after the event ended."',
    social: {
      facebook: 'https://facebook.com/divyanair',
      instagram: 'https://instagram.com/divyanair',
      twitter: '',
      linkedin: 'https://linkedin.com/in/divyanair',
      github: '',
    },
  },
]

// Technical & Production Team
const technicalTeam: crewMembers[] = [
  {
    id: 16,
    name: 'Arjun Mehta',
    role: 'Technical Director',
    imageUrl: '/crew_image/crew.jpg',
    quote:
      '"Ensuring flawless tech execution was my mission. From lighting to livestream, every detail mattered in creating that perfect moment."',
    social: {
      facebook: '',
      instagram: 'https://instagram.com/arjunmehta',
      twitter: 'https://x.com/arjunmehta',
      linkedin: 'https://linkedin.com/in/arjunmehta',
      github: 'https://github.com/arjunmehta',
    },
  },
  {
    id: 17,
    name: 'Sameer Bhatia',
    role: 'Sound Engineer',
    imageUrl: '/crew_image/crew.jpg',
    quote:
      '"Perfect audio can make or break a moment. I worked to ensure every word, every pause, and every applause was crystal clear."',
    social: {
      facebook: '',
      instagram: 'https://instagram.com/sameerbhatia',
      twitter: '',
      linkedin: 'https://linkedin.com/in/sameerbhatia',
      github: '',
    },
  },
  {
    id: 18,
    name: 'Neha Agarwal',
    role: 'Lighting Designer',
    imageUrl: '/crew_image/crew.jpg',
    quote:
      '"Light sets the mood and amplifies emotions. Every spotlight was carefully placed to highlight moments that mattered most."',
    social: {
      facebook: 'https://facebook.com/nehaagarwal',
      instagram: 'https://instagram.com/nehaagarwal',
      twitter: '',
      linkedin: 'https://linkedin.com/in/nehaagarwal',
      github: '',
    },
  },
  {
    id: 19,
    name: 'Dev Chatterjee',
    role: 'Livestream Coordinator',
    imageUrl: '/crew_image/crew.jpg',
    quote:
      '"Bringing TEDx to thousands online was a responsibility I cherished. Technology connected us across borders and time zones."',
    social: {
      facebook: '',
      instagram: 'https://instagram.com/devchatterjee',
      twitter: 'https://x.com/devchatterjee',
      linkedin: 'https://linkedin.com/in/devchatterjee',
      github: 'https://github.com/devchatterjee',
    },
  },
  {
    id: 20,
    name: 'Riya Bhardwaj',
    role: 'AV Production Manager',
    imageUrl: '/crew_image/crew.jpg',
    quote:
      '"Synchronizing audio and visuals to perfection was the challenge I loved. Every technical glitch solved felt like a victory."',
    social: {
      facebook: 'https://facebook.com/riyabhardwaj',
      instagram: 'https://instagram.com/riyabhardwaj',
      twitter: '',
      linkedin: 'https://linkedin.com/in/riyabhardwaj',
      github: '',
    },
  },
]

// Logistics & Operations Team
const logisticsTeam: crewMembers[] = [
  {
    id: 21,
    name: 'Karan Singh',
    role: 'Logistics Coordinator',
    imageUrl: '/crew_image/crew.jpg',
    quote:
      '"Managing every moving piece behind the scenes was like solving a beautiful puzzle. Seeing it all come together was pure satisfaction."',
    social: {
      facebook: '',
      instagram: 'https://instagram.com/karansingh',
      twitter: 'https://x.com/karansingh',
      linkedin: 'https://linkedin.com/in/karansingh',
      github: '',
    },
  },
  {
    id: 22,
    name: 'Pooja Menon',
    role: 'Venue Manager',
    imageUrl: '/crew_image/crew.jpg',
    quote:
      '"Transforming a space into an experience required attention to every detail. The venue became the heartbeat of our event."',
    social: {
      facebook: 'https://facebook.com/poojamenon',
      instagram: 'https://instagram.com/poojamenon',
      twitter: '',
      linkedin: 'https://linkedin.com/in/poojamenon',
      github: '',
    },
  },
  {
    id: 23,
    name: 'Siddharth Kulkarni',
    role: 'Registration Manager',
    imageUrl: '/crew_image/crew.jpg',
    quote:
      '"Welcoming every attendee with warmth was my priority. The first impression set the tone for their entire TEDx experience."',
    social: {
      facebook: '',
      instagram: 'https://instagram.com/siddharthkulkarni',
      twitter: 'https://x.com/siddharthkulkarni',
      linkedin: 'https://linkedin.com/in/siddharthkulkarni',
      github: '',
    },
  },
  {
    id: 24,
    name: 'Anjali Rao',
    role: 'Volunteer Coordinator',
    imageUrl: '/crew_image/crew.jpg',
    quote:
      '"Leading our amazing volunteer team was an honor. Their dedication and enthusiasm were the backbone of our success."',
    social: {
      facebook: 'https://facebook.com/anjalirao',
      instagram: 'https://instagram.com/anjalirao',
      twitter: '',
      linkedin: 'https://linkedin.com/in/anjalirao',
      github: '',
    },
  },
  {
    id: 25,
    name: 'Harsh Choudhary',
    role: 'Catering & Hospitality Lead',
    imageUrl: '/crew_image/crew.jpg',
    quote:
      '"Taking care of our guests\' comfort and needs was my passion. Great hospitality creates memorable experiences beyond the talks."',
    social: {
      facebook: '',
      instagram: 'https://instagram.com/harshchoudhary',
      twitter: '',
      linkedin: 'https://linkedin.com/in/harshchoudhary',
      github: '',
    },
  },
]

// Digital & Technology Team
const digitalTeam: crewMembers[] = [
  {
    id: 26,
    name: 'Aryan Mishra',
    role: 'Web Development Lead',
    imageUrl: '/crew_image/crew.jpg',
    quote:
      '"Building a digital home for TEDx was exciting. Our website became the gateway for thousands to join this incredible journey."',
    social: {
      facebook: '',
      instagram: 'https://instagram.com/aryanmishra',
      twitter: 'https://x.com/aryanmishra',
      linkedin: 'https://linkedin.com/in/aryanmishra',
      github: 'https://github.com/aryanmishra',
    },
  },
  {
    id: 27,
    name: 'Kavya Srinivasan',
    role: 'Mobile App Developer',
    imageUrl: '/crew_image/crew.jpg',
    quote:
      '"Creating a seamless mobile experience put TEDx in everyone\'s pocket. Technology brought us closer to our community."',
    social: {
      facebook: 'https://facebook.com/kavyasrinivasan',
      instagram: 'https://instagram.com/kavyasrinivasan',
      twitter: '',
      linkedin: 'https://linkedin.com/in/kavyasrinivasan',
      github: 'https://github.com/kavyasrinivasan',
    },
  },
  {
    id: 28,
    name: 'Manav Shah',
    role: 'IT Infrastructure Manager',
    imageUrl: '/crew_image/crew.jpg',
    quote:
      '"Keeping all systems running smoothly was my invisible contribution. Behind every great event is rock-solid tech infrastructure."',
    social: {
      facebook: '',
      instagram: 'https://instagram.com/manavshah',
      twitter: 'https://x.com/manavshah',
      linkedin: 'https://linkedin.com/in/manavshah',
      github: 'https://github.com/manavshah',
    },
  },
  {
    id: 29,
    name: 'Zara Ahmed',
    role: 'Digital Marketing Specialist',
    imageUrl: '/crew_image/crew.jpg',
    quote:
      '"Strategizing online campaigns that reached millions was thrilling. Every click, every share brought us closer to our audience."',
    social: {
      facebook: 'https://facebook.com/zaraahmed',
      instagram: 'https://instagram.com/zaraahmed',
      twitter: 'https://x.com/zaraahmed',
      linkedin: 'https://linkedin.com/in/zaraahmed',
      github: '',
    },
  },
  {
    id: 30,
    name: 'Yash Pandey',
    role: 'Data Analytics Lead',
    imageUrl: '/crew_image/crew.jpg',
    quote:
      '"Numbers told stories we needed to hear. Data-driven insights helped us understand our impact and grow our reach exponentially."',
    social: {
      facebook: '',
      instagram: 'https://instagram.com/yashpandey',
      twitter: '',
      linkedin: 'https://linkedin.com/in/yashpandey',
      github: 'https://github.com/yashpandey',
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
            className="text-5xl md:text-6xl  mb-6 uppercase"
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
              Organizers
            </h2>
            <div className="h-1 w-32 sm:w-40 mx-auto lg:mx-0 bg-gradient-to-r from-red-600 via-red-500 to-black" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-18 justify-items-center">
            {config.crew.organizers.map((member, i) => (
              <CrewCard key={i} member={member} />
            ))}
          </div>
        </div>
      </section>
      {/* Core Team Section */}
      <section className="py-12 px-4 sm:px-6 lg:py-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-10 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-red-600">
              Tech
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
      {/* Core Team Section */}
      <section className="py-12 px-4 sm:px-6 lg:py-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-10 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-red-600">
              Event Management
            </h2>
            <div className="h-1 w-32 sm:w-40 mx-auto lg:mx-0 bg-gradient-to-r from-red-600 via-red-500 to-black" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-18 justify-items-center">
            {config.crew.event_management.map((member, i) => (
              <CrewCard key={i} member={member} />
            ))}
          </div>
        </div>
      </section>
      {/* Core Team Section */}
      <section className="py-12 px-4 sm:px-6 lg:py-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-10 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-red-600">
              Marketing
            </h2>
            <div className="h-1 w-32 sm:w-40 mx-auto lg:mx-0 bg-gradient-to-r from-red-600 via-red-500 to-black" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-18 justify-items-center">
            {config.crew['marketing_&_sponsorship'].map((member, i) => (
              <CrewCard key={i} member={member} />
            ))}
          </div>
        </div>
      </section>
      {/* Core Team Section */}
      {/* <section className="py-12 px-4 sm:px-6 lg:py-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-10 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-red-600">
              Sponsorships
            </h2>
            <div className="h-1 w-32 sm:w-40 mx-auto lg:mx-0 bg-gradient-to-r from-red-600 via-red-500 to-black" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-18 justify-items-center">
            {config.crew['marketing_&_sponsorship'].map((member, i) => (
              <CrewCard key={i} member={member} />
            ))}
          </div>
        </div>
      </section> */}
      {/* Core Team Section */}
      <section className="py-12 px-4 sm:px-6 lg:py-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-10 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-red-600">
              Social Media
            </h2>
            <div className="h-1 w-32 sm:w-40 mx-auto lg:mx-0 bg-gradient-to-r from-red-600 via-red-500 to-black" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-18 justify-items-center">
            {config.crew.social_media.map((member, i) => (
              <CrewCard key={i} member={member} />
            ))}
          </div>
        </div>
      </section>
      {/* Core Team Section */}
      <section className="py-12 px-4 sm:px-6 lg:py-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-10 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-red-600">
              Public Relations
            </h2>
            <div className="h-1 w-32 sm:w-40 mx-auto lg:mx-0 bg-gradient-to-r from-red-600 via-red-500 to-black" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-18 justify-items-center">
            {config.crew.public_relations.map((member, i) => (
              <CrewCard key={i} member={member} />
            ))}
          </div>
        </div>
      </section>
      {/* Core Team Section */}
      <section className="py-12 px-4 sm:px-6 lg:py-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-10 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-red-600">
              Video Production
            </h2>
            <div className="h-1 w-32 sm:w-40 mx-auto lg:mx-0 bg-gradient-to-r from-red-600 via-red-500 to-black" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-18 justify-items-center capitalize">
            {config.crew.videography.map((member, i) => (
              <CrewCard key={i} member={member} />
            ))}
          </div>
        </div>
      </section>
      {/* Core Team Section */}
      <section className="py-12 px-4 sm:px-6 lg:py-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-10 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-red-600">
              Graphics Design
            </h2>
            <div className="h-1 w-32 sm:w-40 mx-auto lg:mx-0 bg-gradient-to-r from-red-600 via-red-500 to-black" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-18 justify-items-center">
            {config.crew.design.map((member, i) => (
              <CrewCard key={i} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Core Team Section */}
      <section className="py-12 px-4 sm:px-6 lg:py-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-10 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-red-600">
              Guest Hospitality & Logistics
            </h2>
            <div className="h-1 w-32 sm:w-40 mx-auto lg:mx-0 bg-gradient-to-r from-red-600 via-red-500 to-black" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-18 justify-items-center">
            {config.crew['hospitality_&_logistics'].map((member, i) => (
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
