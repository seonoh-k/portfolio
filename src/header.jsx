import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import Hamburger from './hamburger.jsx';
import Sidebar from './sidebar.jsx';
import ResumeBtn from './resumeBtn.jsx';
import { useTranslation } from "react-i18next";

export default function Header() {
    const { i18n } = useTranslation();    
    const [active, setActive] = useState(false);

    return (
        <>
        <header className='flex justify-center items-center bg-gray-200'>
            <div className='flex w-full md:w-[1200px] p-8 md:px-0 text-sm md:text-xl text-gray-700 justify-between items-center bg-gray-200'>
                <Link to='' className='font-cafe text-lg md:text-2xl'>KIM SEON OH</Link>
                <nav className='hidden md:flex md:text-xl font-sacheon md:items-center md:space-x-4'>
                    <div className="flex text-sm gap-2">
                        <button onClick={() => i18n.changeLanguage('en')} className='border-b-2 border-transparent hover:border-gray-500 transition-colors duration-300'>
                            EN
                        </button>|
                        <button onClick={() => i18n.changeLanguage('ko')} className='border-b-2 border-transparent hover:border-gray-500 transition-colors duration-300'>
                            KO
                        </button>|
                        <button onClick={() => i18n.changeLanguage('jp')} className='border-b-2 border-transparent hover:border-gray-500 transition-colors duration-300'>
                            JP
                        </button>
                    </div>
                    <Link to='' className='border-b-2 border-transparent hover:border-gray-500 transition-colors duration-300'>
                        Home
                    </Link>
                    <Link to='/about' className='border-b-2 border-transparent hover:border-gray-500 transition-colors duration-300'>
                        About
                    </Link>
                    <Link to='/projects' className='border-b-2 border-transparent hover:border-gray-500 transition-colors duration-300'>
                        Projects
                    </Link>
                    <Link to='/contact' className='border-b-2 border-transparent hover:border-gray-500 transition-colors duration-300'>
                        Contact
                    </Link>
                    <ResumeBtn />
                </nav>
                <Hamburger active={active} onClick={() => setActive(v => !v)}/>
                <Sidebar active={active} onClose={() => setActive(false)} />
            </div>
        </header>
        </>
    )
}