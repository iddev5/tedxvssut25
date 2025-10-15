import React from 'react';
import { Calendar, Clock, MapPin, Check } from 'lucide-react';
import Link from 'next/link';

const EventVenue = () => {

  return (
    <div id="venue" className="min-h-screen bg-black text-white px-6 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-light uppercase tracking-widest">
            Event <span className="font-bold text-red-600">Venue</span>
          </h2>
          <p className="text-gray-400 mt-8 text-lg max-w-3xl mx-auto leading-relaxed">
            Experience TEDxVSSUT in a space designed for learning, collaboration,
            and inspiration. Our venue, the E-Learning Centre, combines state-of-the-art facilities with a vibrant atmosphere
          </p>
        </div>

       {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Left Column */}
          <div className="space-y-8">
            {/* About Venue */}
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-300">ABOUT VENUE</h2>
              <p className="text-gray-400 leading-relaxed">
                The E-Learning Centre at VSSUT is a hub of innovation and knowledge
                exchange. With its modern infrastructure, immersive environment, and
                focus on technology, it's the ideal space for a TEDx event.
              </p>
            </div>

            {/* Event Details */}
            <div>
              <h2 className="text-2xl font-semibold mb-6 pt-34 text-gray-300">EVENT ON</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-white/5 rounded-lg backdrop-blur-sm">
                  <Calendar className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-2xl font-bold">November 1, 2025</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white/5 rounded-lg backdrop-blur-sm">
                  <Clock className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-2xl font-bold">10:00 AM to 5:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white/5 rounded-lg backdrop-blur-sm">
                  <MapPin className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-lg">
                      Biju Patnaik E-Learning Centre, VSSUT Campus, Burla,
                      Sambalpur, Odisha - 768018
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div>
              <p className="text-gray-400 mb-6 ">
                Mark your calendars and join us at the E-Learning Centre for a day of innovation
                and inspiration
              </p>
              <Link href='/get-tickets' className="bg-white text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-600 hover:text-white transition-colors cursor-pointer">
                Book Tickets
              </Link>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Venue Image */}
            <div className="relative overflow-hidden rounded-lg">
              <img
                src="./images/E-Learning.png"
                alt="E-Learning Centre"
                className="w-full h-64 object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>

            {/* Map */}
            <div>
              <h2 className="text-2xl font-semibold mb-6 text-gray-300">MAP</h2>
              <div className="relative overflow-hidden rounded-lg h-80 bg-gray-800">
                <iframe
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.98897368855!2d83.9008341763116!3d21.496161755454683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a213da52ca3b727%3A0xac570b12d083003f!2sE-Learning%20Center%20VSSUT!5e0!3m2!1sen!2sus!4v1759606462745!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </div>
        </div>
    </div>
  );
};

export default EventVenue;
