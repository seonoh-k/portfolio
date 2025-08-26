import React from "react";
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import ResumeBtn from './resumeBtn.jsx';

export default function Sidebar({ active, onClose }) {
    const { i18n } = useTranslation(); 
    return (
        <>
        {active && (
            <div className='fixed inset-0 z-30' onClick={onClose} />
        )}
        <div className={`md:hidden fixed top-0 right-0 w-48 h-full bg-gray-200 opacity-90 z-40
            transition-transform duration-300 ${active ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="flex gap-2 mt-8 mr-6 pt-1 justify-center text-sm font-sacheon">
                <button onClick={() => {i18n.changeLanguage('en'); onClose();}}>
                    EN
                </button>|
                <button onClick={() => {i18n.changeLanguage('ko'); onClose();}}>
                    KO
                </button>|
                <button onClick={() => {i18n.changeLanguage('jp'); onClose();}}>
                    JP
                </button>
            </div>
            <ul className="flex flex-col mt-8 p-8 text-lg font-sacheon items-center space-y-4">
                <li>
                    <Link to='' onClick={onClose}>Home</Link>
                </li>
                <li>
                    <Link to='/about' onClick={onClose}>About</Link>
                </li>
                <li>
                    <Link to='/projects' onClick={onClose}>Projects</Link>
                </li>
                <li>
                    <Link to='/contact' onClick={onClose}>Contact</Link>
                </li>
                <li>
                    <ResumeBtn />
                </li>
            </ul>
        </div>
        </>
    )
}