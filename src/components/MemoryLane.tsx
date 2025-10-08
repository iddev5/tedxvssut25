"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";

const MemoryLane: React.FC = () => {
  const images: string[] = [
    "/crew_image/crew.jpg",
    "/crew_image/crew.jpg",
    "/crew_image/crew.jpg",
    "/crew_image/crew.jpg",
    "/crew_image/crew.jpg",
  ];

  return (
    <section className="bg-black text-white py-16">
      {/* Heading + Subtitle */}
      <div className="text-center max-w-3xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold tracking-wide">
          MEMORY LANE <span className="text-red-500">HIGHLIGHTS</span>
        </h2>
        <p className="mt-4 text-gray-400 leading-relaxed">
          Relive the moments that inspired, connected, and transformed. Explore
          the visual journey of TEDxVSSUT 2024.
        </p>
      </div>

      {/* Swiper Slider */}
      <div className="mt-12 max-w-5xl mx-auto px-4">
        <Swiper
          modules={[EffectCoverflow]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          spaceBetween={-60} // closer slides
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={false} // no dots
          navigation={false} // no arrows
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              {({ isActive }) => (
                <div className="relative w-60 h-80 mx-auto rounded-lg overflow-hidden shadow-lg transition-all duration-300">
                  {/* Image with rounded edges */}
                  <img
                    src={src}
                    alt={`Highlight ${index + 1}`}
                    className={`w-full h-full object-cover rounded-lg transition-transform duration-300 ${
                      isActive ? "scale-110" : "scale-90"
                    }`}
                  />

                  {/* Gradient overlay on non-active slides */}
                  {!isActive && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-70 rounded-lg"></div>
                  )}
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default MemoryLane;
