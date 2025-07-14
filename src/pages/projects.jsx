import { React, useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { useSwipeable } from 'react-swipeable';
import { useTranslation } from "react-i18next";

function Gifs({ idx }) {
    const { t } = useTranslation();
    const [ gifIdx, setGifIdx ] = useState(0);

    const swipeHandler = useSwipeable({
        onSwipedLeft: () => 
            setGifIdx( gifIdx === t('projects', {returnObjects: true})[idx].gifs.length - 1 ? 0 : gifIdx + 1),
        onSwipedRight: () =>
            setGifIdx( gifIdx === 0 ? t('projects', {returnObjects: true})[idx].gifs.length - 1 : gifIdx - 1),
        preventDefaultTouchmoveEvent: true,
        trackMouse: true
    })

    return (
        <>
        <div {...swipeHandler}
            className="relative w-full flex justify-center items-center select-none"
            style={{ touchAction: "pan-y" }}
        >
            <img 
                src={t('projects', {returnObjects: true})[idx].gifs[gifIdx]}
                className="w-full h-full object-contain rounded-lg"
                alt="demo"
                draggable="false"
            />
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                {t('projects', {returnObjects: true})[idx].gifs.map((_, i) => (
                    <span 
                        key={i}
                        onClick={() => setGifIdx(i)}
                        className={`inline-block w-2 h-2 rounded-full cursor-pointer 
                            ${i === gifIdx ? "bg-white" : "bg-gray-500"}`}
                    />
                ))}
            </div>
        </div>
        </>
    )
}

export default function Projects() {
    const { t } = useTranslation();
    const [ idx, setIdx ] = useState(0);
    
    return (
        <>
        <motion.div
            initial={{ opacity: 0, y: 40 }} 
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.8 }}
            className="md:w-[970px]"
        >
            <div className="flex flex-col px-4 py-8 md:p-8 md:my-8 text-white bg-gray-500 rounded-xl shadow justify-center items-center shadow-lg">
                <h1 className="text-3xl md:text-5xl opacity-70 md:text-left md:mb-10">Projects</h1>
                <div className="md:hidden flex justify-center items-center gap-1 py-2">
                    <button onClick={() => setIdx(idx === 0 ? t('projects', {returnObjects: true}).length - 1 : idx - 1)}
                        className="p-1">
                        <FaAngleLeft />
                    </button>
                    <div className="flex flex-col">
                        <AnimatePresence mode="wait" initial="false">
                            <motion.div
                                key={t('projects', {returnObjects: true})[idx].title}
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -100 }}
                                className="w-[256px] h-full flex flex-col space-y-2"
                            >
                                <div className="flex gap-1">
                                    <h2 className="text-2xl font-semibold pt-2">{t('projects', {returnObjects: true})[idx].title}</h2>
                                    <img src={t('projects', {returnObjects: true})[idx].logo} className="w-[80px] pb-2 object-cover"/>
                                </div>
                                <p className="text-lg">{t('projects', {returnObjects: true})[idx].desc}</p>
                                <span className="text-sm">{t('projects', {returnObjects: true})[idx].duration}</span>
                                <p className="text-sm">{t('projects', {returnObjects: true})[idx].position}</p>
                                <span className="flex flex-wrap text-sm">{t('projects', {returnObjects: true})[idx].info}</span>
                                <Gifs idx={idx} />
                                <div className="flex flex-wrap justify-center my-4 gap-2">
                                    {t('projects', {returnObjects: true})[idx].skills.map((s) => (
                                        <span 
                                            key={s}
                                            className="px-2 py-1 bg-white/20 rounded-md text-xs font-semibold"
                                        >
                                            {s}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex justify-center pt-4 gap-2">
                                    {t('projects', {returnObjects: true})[idx].links.map((l) => (
                                        <a 
                                            key={l.url}
                                            href={l.url}
                                            target="_blank"
                                            className="px-4 py-2 bg-gray-400 hover:bg-gray-300 rounded-lg"
                                        >
                                            {l.type}
                                        </a>
                                    ))}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                    <button onClick={() => setIdx(idx === t('projects', {returnObjects: true}).length - 1 ? 0 : idx + 1)}
                        className="p-1">
                        <FaAngleRight />
                    </button>
                </div>

                <div className="hidden md:block">
                    <AnimatePresence mode="wait" initial="false">
                        <div className="grid grid-cols-2 gap-10">
                            {t('projects', {returnObjects: true}).map((p, i) => (
                                <div key={p.title} className="p-4 w-[420px] h-full flex flex-col space-y-2 border-2 border-white/20 rounded-xl">
                                    <div className="flex gap-1">
                                        <h2 className="text-4xl font-semibold pt-2">{p.title}</h2>
                                        <img src={p.logo} className="w-[120px] ml-2 object-cover"/>
                                    </div>
                                    <p className="text-2xl">{p.desc}</p>
                                    <span className="text-xl">{p.duration}</span>
                                    <p className="text-xl">{p.position}</p>
                                    <span className="flex flex-wrap text-xl">{p.info}</span>
                                    <Gifs idx={i} />
                                    <div className="flex flex-wrap justify-center my-4 gap-2">
                                        {p.skills.map((s) => (
                                            <span 
                                                key={s}
                                                className="px-2 py-1 bg-white/20 rounded-md text-lg font-semibold"
                                            >
                                                {s}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex justify-center pt-4 gap-2">
                                        {p.links.map((l) => (
                                            <a 
                                                key={l.url}
                                                href={l.url}
                                                target="_blank"
                                                className="px-4 py-2 text-xl bg-gray-400 hover:bg-gray-300 rounded-lg"
                                            >
                                                {l.type}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>    
                    </AnimatePresence>
                </div>
            </div>
        </motion.div>
        </>
    );
};