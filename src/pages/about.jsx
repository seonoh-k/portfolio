import React from "react";
import { motion } from 'framer-motion';
import { FaJava, FaHtml5, FaCss3Alt, FaReact, FaAws, FaCloudflare, FaGithub } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiSpringboot, SiNotion } from "react-icons/si";
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

export default function About() {
    const { t } = useTranslation();
    const lines = t('about.lines', {returnObjects: true});
    const lines2 = t('about.lines_2', {returnObjects: true});

    return (
        <>
        <motion.div
            initial={{ opacity: 0, y: 40 }} 
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.8 }}
            className="w-[320px] md:w-[1200px]"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 p-6 md:p-16 text-white bg-gray-500 rounded-xl shadow text-center items-center shadow-lg">
                <h1 className="text-2xl md:text-5xl opacity-70 md:text-left mb-10 md:mb-0">About</h1>
                <div className="flex flex-col gap-2 opacity-70 md:gap-8 md:grid-cols-2 md:border-l border-gray-200 md:pl-6  space-y-6">
                    <div className="flex flex-col">
                        {lines.map((txt) => (
                            <span key={txt} className="text-md md:text-xl">{txt}</span>
                        ))}
                    </div>
                    <div className="flex flex-col items-center text-lg">
                        <div className="flex items-center gap-1">
                            <span className="font-semibold md:text-xl">Frontend</span>
                            {front.map((s, i) => (
                                <div key={i} className="flex items-center gap-1 md:text-xl">
                                    {s.icon} {s.text}
                                </div>
                            ))}
                        </div>
                        <div className="flex items-center gap-1">
                            <span className="font-semibold md:text-xl">Backtend</span>
                            {back.map((b, i) => (
                                <div key={i} className="flex items-center gap-1 md:text-xl">
                                    {b.icon} {b.text}
                                </div>
                            ))}
                        </div>
                        <div className="flex items-center gap-1">
                            <span className="font-semibold md:text-xl">Infra</span>
                            {infra.map((i, idx) => (
                                <div key={idx} className="flex items-center gap-1 md:text-xl">
                                    {i.icon} {i.text}
                                </div>
                            ))}
                        </div>
                        <div className="flex items-center gap-1">
                            <span className="font-semibold md:text-xl">Language</span>
                            <div className="flex items-center gap-1 md:text-xl">
                                Japanese - JPT 895, conversational
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col text-white text-md md:text-xl justify-center items-center">
                        {lines2.map((txt) => (
                            <span key={txt}>{txt}</span>
                        ))}
                        <div className="flex mt-6 justify-center items-center gap-4">
                            <a href='https://www.notion.so/Study-22ff7b0856be80dcae43ffa200c858b9?source=copy_link' 
                            target="_blank"
                            className="flex border-b border-white hover:opacity-60 gap-2">
                            <SiNotion className="mt-1"/> Notion
                            </a>
                            <a href='https://github.com/seonoh-k' 
                                target="_blank" 
                                className="flex border-b border-white hover:opacity-60 gap-2">
                                <FaGithub className="mt-1"/> Github
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
        </>
    )
}