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
            <div className='flex w-full md:w-[1200px] p-8 md:px-0 text-sm md:text-xl font-semibold text-gray-700 justify-between items-center bg-gray-200'>
                <Link to='' className='font-bitcount text-xl md:text-3xl'>KimSeonOh</Link>
                <nav className='hidden md:flex md:text-xl md:font-semibold md:items-center md:space-x-4'>
                    <div className="flex text-sm gap-2">
                        <button onClick={() => i18n.changeLanguage('en')}>EN</button>|
                        <button onClick={() => i18n.changeLanguage('ko')}>KO</button>|
                        <button onClick={() => i18n.changeLanguage('jp')}>JP</button>
                    </div>
                    <Link to=''>Home</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/projects'>Projects</Link>
                    <Link to='/contact'>Contact</Link>
                    <ResumeBtn />
                </nav>
                <Hamburger active={active} onClick={() => setActive(v => !v)}/>
                <Sidebar active={active} onClose={() => setActive(false)} />
            </div>
        </header>
        </>
    )
}