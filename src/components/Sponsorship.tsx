import Link from 'next/link';

export default function Sponsorship() {
  return (
    <div className="flex min-w-screen items-center justify-center">
      <section className="mx-auto w-full border-2 border-black bg-[#1c1c1c] px-10 py-[60px] text-center">
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