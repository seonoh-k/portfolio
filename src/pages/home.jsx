import React from "react";
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { FaPhoneAlt } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function Home() {
    const { t, i18n } = useTranslation();
    return (
        <>
        <motion.div
            initial={{ opacity: 0, y: 40 }} 
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.8 }}
            className="text-white opacity-70"
        >
            <div className="flex flex-wrap text-center justify-center items-center space-y-2 md:space-y-6 mb-10 md:mb-20">
                {t('main.lines', {returnObjects: true}).map((txt, idx) => (
                    <motion.h1 
                        key={txt}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 1,
                            delay: 0.8 * idx,
                            ease: "easeOut"
                        }}
                        className="text-xl md:text-5xl font-bold"
                    >
                        {txt}
                    </motion.h1>
                ))}
            </div>
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 1,
                    delay: 0.85 * t('main.lines', {returnObjects: true}).length,
                    ease: "easeOut"
                }}
                className="flex justify-center mb-10 md:mb-20"
            >
                <Link to='/contact' 
                    className="flex px-4 py-3 text-sm md:text-xl text-white border-2 border-green-500 hover:border-green-400 rounded-lg transition gap-2">
                    <FaPhoneAlt className="mt-0.5" />
                    Contact
                </Link>
            </motion.div>
            <motion.div 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 1,
                    delay: 0.85 * (t('main.lines', {returnObjects: true}).length + 1),
                    ease: "easeOut"
                }}
                className="flex flex-col items-center"
            >
                <p className="text-lg md:text-2xl mb-4">Language</p>
                <div className="flex gap-4">
                    <button 
                        className="text-sm md:text-xl hover:opacity-90"
                        onClick={() => i18n.changeLanguage('en')}
                    >
                        English
                    </button>
                    <button 
                        className="text-sm md:text-xl hover:opacity-90"
                        onClick={() => i18n.changeLanguage('ko')}
                    >
                        한국어
                    </button>
                    <button 
                        className="text-sm md:text-xl hover:opacity-90"
                        onClick={() => i18n.changeLanguage('jp')}
                    >
                        日本語
                    </button>
                </div>
            </motion.div>
        </motion.div>
        </>
    )
}