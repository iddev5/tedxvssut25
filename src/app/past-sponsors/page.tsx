'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const SponsorCarousel = () => {
  const [isPaused, setIsPaused] = useState(false);

  const sponsors = [
    { id: 1, name: 'McDonald\'s', bg: 'bg-black', icon: '🍔' },
    { id: 2, name: 'Ministry', bg: 'bg-white', icon: '⚡' },
    { id: 3, name: 'Shield', bg: 'bg-black', icon: '🛡️' },
    { id: 4, name: 'OAREA', bg: 'bg-white', icon: '🏢' },
    { id: 5, name: 'McDonald\'s', bg: 'bg-black', icon: '🍔' },
    { id: 6, name: 'Ministry', bg: 'bg-white', icon: '⚡' },
    { id: 7, name: 'Waves', bg: 'bg-gray-700', icon: '🌊' },
  ];

  // Duplicate sponsors for seamless loop
  const duplicatedSponsors = [...sponsors, ...sponsors, ...sponsors];
  
  const totalWidth = duplicatedSponsors.length * (112 + 24); // 112px (w-28) + 24px gap

  return (
    <div className="w-full bg-black py-8 overflow-hidden">
      <div className="relative">
        <div className="flex items-center gap-8 px-4">
          {/* Title on the left */}
          <h2 className="text-4xl md:text-5xl font-bold text-white whitespace-nowrap flex-shrink-0">
            PAST <span className="text-gray-400">SPONSORS</span>
          </h2>
          
          {/* Scrolling sponsors */}
          <div 
            className="flex-1 relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="overflow-hidden">
              <motion.div 
                className="flex gap-6"
                animate={{
                  x: isPaused ? undefined : [0, -(totalWidth / 3)],
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                {duplicatedSponsors.map((sponsor, index) => (
                  <motion.div
                    key={`${sponsor.id}-${index}`}
                    className={`flex-shrink-0 w-28 h-28 ${sponsor.bg} rounded-xl flex items-center justify-center text-4xl cursor-pointer shadow-lg`}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {sponsor.icon}
                  </motion.div>
                ))}
              </motion.div>
            </div>
            
            {/* Gradient overlays */}
            <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-black to-transparent pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-black to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponsorCarousel;