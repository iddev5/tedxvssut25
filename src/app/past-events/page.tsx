'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function PastEvents() {
  const [selectedYear, setSelectedYear] = useState<'2021' | '2020' | '2019'>('2021');

  // Sample event data with placeholder images
  const events: Record<'2021' | '2020' | '2019', Array<{ id: number; title: string; img: string }>> = {
    '2021': [
      { id: 1, title: 'Opening Ceremony 2021', img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop' },
      { id: 2, title: 'Keynote Speaker 2021', img: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=600&fit=crop' },
      { id: 3, title: 'Panel Discussion 2021', img: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&h=600&fit=crop' },
      { id: 4, title: 'Networking Session 2021', img: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop' },
      { id: 5, title: 'Workshop 2021', img: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&h=600&fit=crop' },
      { id: 6, title: 'Closing Event 2021', img: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop' },
    ],
    '2020': [
      { id: 7, title: 'Virtual Opening 2020', img: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&h=600&fit=crop' },
      { id: 8, title: 'Online Speaker 2020', img: 'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=800&h=600&fit=crop' },
      { id: 9, title: 'Digital Conference 2020', img: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&h=600&fit=crop' },
      { id: 10, title: 'Remote Panel 2020', img: 'https://images.unsplash.com/photo-1559223607-0c01a46fbabe?w=800&h=600&fit=crop' },
      { id: 11, title: 'Virtual Networking 2020', img: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop' },
      { id: 12, title: 'Online Workshop 2020', img: 'https://images.unsplash.com/photo-1600298881974-6be191ceeda1?w=800&h=600&fit=crop' },
    ],
    '2019': [
      { id: 13, title: 'Hybrid Event 2019', img: 'https://images.unsplash.com/photo-1560439514-4e9645039924?w=800&h=600&fit=crop' },
      { id: 14, title: 'Innovation Talk 2019', img: 'https://images.unsplash.com/photo-1591453089816-0fbb971b454c?w=800&h=600&fit=crop' },
      { id: 15, title: 'Tech Showcase 2019', img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop' },
      { id: 16, title: 'Speaker Session 2019', img: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&h=600&fit=crop' },
      { id: 17, title: 'Community Meetup 2019', img: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800&h=600&fit=crop' },
      { id: 18, title: 'Grand Finale 2019', img: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=600&fit=crop' },
    ],
  };

  const years: Array<'2021' | '2020' | '2019'> = ['2021', '2020', '2019'];

  return (
    <div className="min-h-screen bg-black py-16 px-14">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            PAST <span className="text-red-500">EVENTS</span>
          </h1>
          <p className="text-gray-300 text-lg">Relive the moments that inspired us</p>
        </motion.div>

        {/* Year Buttons */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {years.map((year, index) => (
            <motion.button
              key={year}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              onClick={() => setSelectedYear(year)}
              className={`px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 ${
                selectedYear === year
                  ? 'bg-red-600 text-white shadow-lg shadow-red-500/50 scale-105'
                  : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm'
              }`}
            >
              {year}
            </motion.button>
          ))}
        </div>

        {/* Photo Grid */}
        <AnimatePresence mode="wait" >
          <motion.div
            key={selectedYear}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {events[selectedYear].map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="group relative overflow-hidden rounded-xl shadow-2xl cursor-pointer"
              >
                <div className="relative h-64 w-full ">
                  <img
                    src={event.img}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-bold">{event.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}