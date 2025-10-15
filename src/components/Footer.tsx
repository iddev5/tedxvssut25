import React from 'react';
import { FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import Link from 'next/link';
import config from '@/app/config';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-gray-400 font-sans">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        
        {/* Main content grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-10">
          
          {/* Column 1: TEDxVSSUT Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">
              <span className="text-[#E62B1E]">TEDx</span>VSSUT
            </h3>
            <p className="text-sm leading-relaxed">
              TEDxVSSUT is an independently organized TED event aimed at spreading ideas worth sharing,
              inspiring change, and fostering innovation. Proudly hosted by Veer Surendra Sai University of
              Technology.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-medium text-white tracking-wider mb-5">QUICK LINKS</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="hover:text-white hover:pl-2 transition-all duration-300">Home</Link></li>
              <li><Link href="/about" className="hover:text-white hover:pl-2 transition-all duration-300">About</Link></li>
              <li><Link href="/sponsors" className="hover:text-white hover:pl-2 transition-all duration-300">Sponsors</Link></li>
              <li><Link href="/#venue" className="hover:text-white hover:pl-2 transition-all duration-300">Event Venue</Link></li>
              <li><Link href="/get-tickets" className="hover:text-white hover:pl-2 transition-all duration-300">Book Tickets</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact Us */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-white tracking-wider">CONTACT US</h4>
            <div className="text-sm">
              <p>Biju Patnaik E-Learning Centre,</p>
              <p>VSSUT Campus, Burla</p>
              <p>Sambalpur, Odisha</p>
              <p>PIN Code: 768018</p>
            </div>
            <div className="text-sm">
              <p><strong className="text-white">Phone:</strong> {config.organizerContact}</p>
              <p><strong className="text-white">Email:</strong> {config.officialEmail}</p>
            </div>
            <div className="flex items-center gap-4 pt-2">
              <a href={config.officialTwitter} aria-label="Facebook" className="h-10 w-10 flex items-center justify-center rounded-full border border-gray-700 transition-colors duration-300 hover:bg-[#E62B1E] hover:text-white hover:border-[#E62B1E]">
                <FaTwitter />
              </a>
              <a href={config.officialInsta} aria-label="Instagram" className="h-10 w-10 flex items-center justify-center rounded-full border border-gray-700 transition-colors duration-300 hover:bg-[#E62B1E] hover:text-white hover:border-[#E62B1E]">
                <FaInstagram />
              </a>
              <a href={config.officialLinkedIn} aria-label="LinkedIn" className="h-10 w-10 flex items-center justify-center rounded-full border border-gray-700 transition-colors duration-300 hover:bg-[#E62B1E] hover:text-white hover:border-[#E62B1E]">
                <FaLinkedinIn />
              </a>
              <a href={config.officialYoutube} aria-label="YouTube" className="h-10 w-10 flex items-center justify-center rounded-full border border-gray-700 transition-colors duration-300 hover:bg-[#E62B1E] hover:text-white hover:border-[#E62B1E]">
                <FaYoutube />
              </a>
              <a href="https://ted.com" aria-label="TED" className="h-10 w-10 flex items-center justify-center rounded-full border border-gray-700 font-bold text-sm tracking-wider transition-colors duration-300 hover:bg-[#E62B1E] hover:text-white hover:border-[#E62B1E]">
                TED
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 text-sm flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">
          <p>TEDxVSSUT operates under a license from TED.</p>
          <p className="text-gray-500">© {new Date().getFullYear()} TEDxVSSUT. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
