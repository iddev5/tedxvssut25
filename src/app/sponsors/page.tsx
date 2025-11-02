"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Sponsorship from "@/components/Sponsorship";


// --- TYPES ---
interface CurrentSponsor {
  name: string;
  logo: string;
}

interface PastSponsor {
  id: number;
  name: string;
  bg: string;
  imageUrl: string;
}

// --- Data for Current Sponsors (No change needed here) ---
const currentSponsorsData = {
  title: [{ name: "MCL", logo: "/sponsors_image/MCL.png" }],
  bankingPartner: [{ name: "Yono SBI", logo: "/sponsors_image/sbi-yono-app-icon.png" }],
  foodingPartners: [
    { name: "Dominos", logo: "/sponsors_image/Dominos.png" },
    { name: "Waffcha", logo: "/sponsors_image/Waffcha.png" },
  ],
  hospitalityPartner: [{ name: "River Inn", logo: "/sponsors_image/River Inn.png" }],
  beveragePartner: [{ name: "OMFED", logo: "/sponsors_image/OMFED.png" }],
  silverSponsor: [{ name: "Interio", logo: "/sponsors_image/Interio.png" }],
  giftingPartner: [{ name: "Sakshi Handloom", logo: "/sponsors_image/Sakshi Handloom.png" }],
  currentSponsors: [
    { name: "Go cool", logo: "/sponsors_image/Go cool.png" },
    { name: "planet harjit", logo: "/sponsors_image/planet harjit.png" },
  ],
};

// --- Data for Past Sponsors (Only 'bg' property needs adjustment, but 'bg-white' is fine) ---
// Note: Past sponsors use 'bg-white', which corresponds to #FFFFFF.
const pastSponsorsData: PastSponsor[] = [
  { id: 1, name: "MCL", bg: "bg-white", imageUrl: "/sponsors_image/MCL.png" },
  { id: 2, name: "Career Launcher", bg: "bg-white", imageUrl: "/sponsors_image/Career_Launcher.png" },
  { id: 3, name: "Devfolio", bg: "bg-white", imageUrl: "/sponsors_image/Devfolio.png" },
  { id: 4, name: "FabLabs.in", bg: "bg-white", imageUrl: "/sponsors_image/FabLabs.in.png" },
  { id: 5, name: "FASTECH FASHIONS", bg: "bg-white", imageUrl: "/sponsors_image/FASTECH_FASHIONS.png" },
  { id: 6, name: "GIRLSCRIPT.TECH", bg: "bg-white", imageUrl: "/sponsors_image/GIRLSCRIPT.TECH.png" },
  { id: 7, name: "GitHub", bg: "bg-white", imageUrl: "/sponsors_image/GitHub.png" },
  { id: 8, name: "GREEN CHILLYZ", bg: "bg-white", imageUrl: "/sponsors_image/GREENCHILLYZ.png" },
  { id: 9, name: "INDIAN EXPRESS", bg: "bg-white", imageUrl: "/sponsors_image/INDIAN_EXPRESS.png" },
  { id: 10, name: "JR.Eatery", bg: "bg-white", imageUrl: "/sponsors_image/JR.Eatery.png" },
  { id: 11, name: "Lead Angels", bg: "bg-white", imageUrl: "/sponsors_image/Lead_Angels.png" },
  { id: 12, name: "LetsUpgrade", bg: "bg-white", imageUrl: "/sponsors_image/LetsUpgrade.png" },
  { id: 13, name: "LIC", bg: "bg-white", imageUrl: "/sponsors_image/LIC.png" },
  { id: 14, name: "Matic", bg: "bg-white", imageUrl: "/sponsors_image/Matic.png" },
  { id: 15, name: "MYCAPTAIN", bg: "bg-white", imageUrl: "/sponsors_image/MYCAPTAIN.png" },
  { id: 16, name: "NBT", bg: "bg-white", imageUrl: "/sponsors_image/NBT.png" },
  { id: 17, name: "OPGC", bg: "bg-white", imageUrl: "/sponsors_image/OPGC.png" },
  { id: 18, name: "POPULAR MOBILE", bg: "bg-white", imageUrl: "/sponsors_image/POPULAR_MOBILE.png" },
  { id: 19, name: "Raina", bg: "bg-white", imageUrl: "/sponsors_image/Raina.png" },
  { id: 20, name: "Raymond", bg: "bg-white", imageUrl: "/sponsors_image/Raymond.png" },
  { id: 21, name: "Reliance footprint", bg: "bg-white", imageUrl: "/sponsors_image/Reliance_footprint.png" },
  { id: 22, name: "SAKSHI", bg: "bg-white", imageUrl: "/sponsors_image/SAKSHI.png" },
  { id: 23, name: "SAMBAD", bg: "bg-white", imageUrl: "/sponsors_image/SAMBAD.png" },
  { id: 24, name: "SBI", bg: "bg-white", imageUrl: "/sponsors_image/SBI.png" },
  { id: 25, name: "TEQIP", bg: "bg-white", imageUrl: "/sponsors_image/TEQIP.png" },
  { id: 26, name: "The Bottles", bg: "bg-white", imageUrl: "/sponsors_image/The_Bottles.png" },
  { id: 27, name: "Townscript", bg: "bg-white", imageUrl: "/sponsors_image/Townscript.png" },
  { id: 28, name: "unity", bg: "bg-white", imageUrl: "/sponsors_image/unity.png" },
  { id: 29, name: "YOURSTORY", bg: "bg-white", imageUrl: "/sponsors_image/YOURSTORY.png" },
  { id: 30, name: "ZEBRONICS", bg: "bg-white", imageUrl: "/sponsors_image/ZEBRONICS.png" },
  { id: 31, name: "BELLYFUL RESTAURANT", bg: "bg-white", imageUrl: "/sponsors_image/BELLYFUL_RESTAURANT.png" },
  { id: 32, name: "JET_B", bg: "bg-white", imageUrl: "/sponsors_image/JET_B.png" },
];

// --- Sub-component for Current Sponsors (No background change needed, it's transparent) ---
const SponsorCard: React.FC<{ sponsor: CurrentSponsor }> = ({ sponsor }) => (
  <div className="p-4 sm:p-6 rounded-lg shadow-lg flex justify-center items-center h-36 sm:h-44 md:h-52 w-48 sm:w-64 md:w-80 transition-transform duration-300 hover:scale-105 bg-transparent">
    <Image
      src={sponsor.logo}
      alt={sponsor.name}
      width={280}
      height={140}
      className="object-contain max-h-[120px] sm:max-h-[160px]"
    />
  </div>
);

// --- Main Component ---
const SponsorsSection: React.FC = () => {
  const duplicatedSponsors = [...pastSponsorsData, ...pastSponsorsData, ...pastSponsorsData];
  const totalWidth = duplicatedSponsors.length * (96 + 20); // Adjusted for responsiveness

  return (
    // Main container uses black: #000000
    <div className="w-full bg-black py-8 overflow-hidden"> 
      {/* Header Section */}
      <div className="pb-8 sm:pb-12 md:pb-16">
        <Sponsorship />
      </div>

      {/* === CURRENT SPONSORS === */}
      {/* Background black: #000000, Text white: #FFFFFF */}
      <section id="sponsors" className="py-10 sm:py-14 md:py-20 bg-black text-white"> 
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col items-center mb-8 sm:mb-12">
            {/* Title uses white: #FFFFFF with glow */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 sm:mb-4"
              style={{ textShadow: `0 0 10px rgba(255,255,255,0.7)` }} // White glow from #FFFFFF
            >
              Our Sponsors
            </h2>
            {/* Separator uses red: #E62B1E */}
            <div className="h-1 w-20 sm:w-24 md:w-32 bg-[#E62B1E] rounded-full" 
              style={{ boxShadow: `0 0 10px #E62B1E, 0 0 20px #E62B1E` }} // Red glow from #E62B1E
            />
          </div>

          {/* Reusable sponsor categories */}
          {[
            ["Title Sponsor", currentSponsorsData.title],
            ["Digital Banking Partner", currentSponsorsData.bankingPartner],
            ["Silver Sponsor", currentSponsorsData.silverSponsor],
            ["Fooding Partner", currentSponsorsData.foodingPartners],
            ["Hospitality Partner", currentSponsorsData.hospitalityPartner],
            ["Beverage Partner", currentSponsorsData.beveragePartner],
            ["Gifting Partner", currentSponsorsData.giftingPartner],
            ["Sponsors", currentSponsorsData.currentSponsors],
          ].map(([title, data], i) => (
            <div key={i} className="mb-10 sm:mb-14 md:mb-16">
              {/* Category title uses red: #E62B1E */}
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center text-[#E62B1E] mb-6 sm:mb-8 pb-2 sm:pb-6">
                {title}
              </h3>
              <div className="flex justify-center flex-wrap gap-4 sm:gap-6 md:gap-8">
                {(data as CurrentSponsor[]).map((sponsor, index) => (
                  <SponsorCard key={index} sponsor={sponsor} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* === PAST SPONSORS === */}
      <div className="relative mt-6 sm:mt-8">
        <div className="flex flex-col md:flex-row items-center gap-4 sm:gap-6 md:gap-8 px-4">
          {/* Section title uses white: #FFFFFF and light gray: #BDBDBD */}
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white whitespace-nowrap flex-shrink-0 mb-4 md:mb-0">
            PAST <span className="text-[#BDBDBD]">SPONSORS</span>
          </h2>

          {/* Scrolling section */}
          <div className="flex-1 relative w-full overflow-hidden">
            <motion.div
              className="flex gap-4 sm:gap-6 items-center"
              animate={{ x: [0, -(totalWidth / 3)] }}
              transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
            >
              {duplicatedSponsors.map((sponsor, index) => (
                <motion.div
                  key={`${sponsor.id}-${index}`}
                  // Past sponsor cards use 'bg-white' which is #FFFFFF
                  className={`flex-shrink-0 w-24 sm:w-32 md:w-36 h-24 sm:h-32 md:h-36 p-2 ${sponsor.bg} rounded-xl flex items-center justify-center cursor-pointer shadow-lg`}
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.2 }}
                >
                  <Image
                    src={sponsor.imageUrl}
                    alt={sponsor.name}
                    width={140}
                    height={140}
                    className="object-contain max-h-[120px]"
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* Fade edges use black: #000000 in the gradient */}
            <div className="absolute top-0 left-0 w-16 sm:w-24 md:w-32 h-full bg-gradient-to-r from-black to-transparent pointer-events-none" />
            <div className="absolute top-0 right-0 w-16 sm:w-24 md:w-32 h-full bg-gradient-to-l from-black to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponsorsSection;