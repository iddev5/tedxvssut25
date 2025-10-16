import Link from 'next/link';
import Squares from '@/components/Squares';

export default function Sponsorship() {
  return (
    <div className="relative min-w-screen h-[50vh] w-screen overflow-hidden">
      <div className="absolute inset-0 bg-black">
        <Squares 
          speed={0.5} 
          squareSize={28}
          direction="diagonal"
          borderColor="#4a1a1a"
          hoverFillColor="#1a1a1a"
        />
      </div>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 h-[10%] w-full bg-gradient-to-b from-black to-transparent"></div>
        <div className="absolute bottom-0 h-[10%] w-full bg-gradient-to-t from-black to-transparent"></div>
      </div>
      <section className="absolute inset-0 flex flex-col items-center justify-center border-2 border-black px-10 text-center">
        <h2 className="mb-5 mt-0 text-[2rem] font-bold uppercase tracking-[4px]">
          <span className="text-[#e62b1e]">SPONSOR</span>{' '}
          <span className="text-white">US</span>
        </h2>
        
        <p className="mx-auto mb-[30px] max-w-[650px] text-[1.1rem] leading-[1.6] text-[#e0e0e0]">
          Partner with Us to Empower Ideas Worth Spreading! Together we can make TEDxVSSUT success
        </p>
        
        <Link 
          href="#sponsorship-brochure"
          className="inline-block cursor-pointer border border-[#c0c0c0] bg-[#f0f0f0] px-7 py-[14px] text-base font-semibold text-[#212121] no-underline transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:bg-white rounded-full"
        >
          Sponsorship Brochure
        </Link>
      </section>
    </div>
  );
}