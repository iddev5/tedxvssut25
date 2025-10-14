"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const Header = () => {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);

    return (
    <header className="w-screen h-[90px] fixed z-[100] flex items-center justify-center box-border mx-auto my-[13px]">
        <nav className="w-[90vw] md:w-3/5 flex justify-between items-center border backdrop-blur-[10px] px-10 py-0 md:py-[15px] rounded-[40px] border-solid border-[rgba(255,255,255,0.2)]">
            <div className="flex justify-between items-center w-full md:w-auto">
                <Link className="no-underline text-[26px] font-bold text-[white] tracking-[0.5px]" href="/">
                    <span className="text-[#E62B1E]">TED</span><span className="text-[#E62B1E]">x</span><span className="text-[white] ml-1">VSSUT</span>
                </Link>
                <button 
                    className="md:hidden text-[white] text-2xl focus:outline-none" 
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    ☰
                </button>
            </div>

            <ul className={`flex flex-col md:flex-row gap-10 m-0 p-8 md:p-0 list-none absolute md:static top-[90px] left-0 w-full md:w-auto bg-[rgba(0,0,0,0.8)] md:bg-transparent transition-transform duration-300 ${menuOpen ? 'invisible md:visible' : 'visible' }`}>
                { [ 
                    { name: 'Home', href: '/' },
                    { name: 'About', href: '/about' },
                    { name: 'Sponsors', href: '/sponsors' },
                ].map(el => 
                    <li key={el.name}>
                        <Link 
                            href={el.href} 
                            className={`text-[#d1d1d1] no-underline text-base relative transition-[color] duration-[0.3s] ease-[ease] px-0 py-2 hover:text-[white] ${ (pathname == el.href) ? "text-[white] font-bold after:content-[''] after:absolute after:w-full after:h-[3px] after:bg-[#E62B1E] after:rounded-sm after:left-0 after:-bottom-0.5" : '' }`}
                            onClick={() => setMenuOpen(false)}
                        >
                            {el.name}
                        </Link> 
                    </li>
                ) }
            </ul>

            <Link href="/contact-us" className="no-underline hidden md:block">
                <button className="bg-transparent text-[white] cursor-pointer font-bold px-[22px] py-2.5 rounded-[5px] border-2 border-solid border-[#E62B1E] hover:bg-[#E62B1E] hover:text-[white] transition-all">Contact Us</button>
            </Link>
        </nav>
    </header>
    );
}

export default Header;
