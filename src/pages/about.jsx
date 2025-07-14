import React from "react";
import { motion } from 'framer-motion';
import { FaJava, FaHtml5, FaCss3Alt, FaReact, FaAws, FaCloudflare } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiSpringboot } from "react-icons/si";
import { useTranslation } from "react-i18next";

const front = [
    { icon: <FaHtml5 />, text: "HTML5" },
    { icon: <FaCss3Alt />, text: "CSS3" },
    { icon: <IoLogoJavascript />, text: "JS" }
];

const back = [
    { icon: <FaJava />, text: "Java" },
    { icon: <SiSpringboot />, text: "SpringBoot" }
];

const infra = [
    { icon: <FaAws />, text: "AWS" },
    { icon: <FaCloudflare />, text: "Cloudflare R2" }
];

export default function Home() {
    const { t } = useTranslation();

    return (
        <>
        <motion.div
            initial={{ opacity: 0, y: 40 }} 
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.8 }}
            className="md:w-[970px]"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 p-8 md:p-[99px] text-white bg-gray-500 rounded-xl shadow text-center items-center shadow-lg">
                <h1 className="text-2xl md:text-5xl opacity-70 md:text-left mb-10 md:mb-0">About</h1>
                <div className="flex flex-col gap-2 opacity-70 md:gap-8 md:grid-cols-2 md:border-l border-gray-200 md:pl-6">
                    <div className="flex flex-col">
                        {t('about.lines', {returnObjects: true}).map((txt) => (
                            <span key={txt} className="text-md md:text-2xl">{txt}</span>
                        ))}
                    </div>
                    <div className="flex flex-col mt-10 text-lg">
                        <div className="flex items-center gap-1">
                            <span className="font-semibold md:text-2xl">Frontend</span>
                            {front.map((s, i) => (
                                <div key={i} className="flex items-center gap-1 md:text-2xl">
                                    {s.icon} {s.text}
                                </div>
                            ))}
                        </div>
                        <div className="flex items-center gap-1">
                            <span className="font-semibold md:text-2xl">Backtend</span>
                            {back.map((b, i) => (
                                <div key={i} className="flex items-center gap-1 md:text-2xl">
                                    {b.icon} {b.text}
                                </div>
                            ))}
                        </div>
                        <div className="flex items-center gap-1">
                            <span className="font-semibold md:text-2xl">Infra</span>
                            {infra.map((i, idx) => (
                                <div key={idx} className="flex items-center gap-1 md:text-2xl">
                                    {i.icon} {i.text}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
        </>
    )
}