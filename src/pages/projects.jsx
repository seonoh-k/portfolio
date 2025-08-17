import { React, useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { useSwipeable } from 'react-swipeable';
import { useTranslation } from "react-i18next";

function Gifs({ project }) {
    const [ gifIdx, setGifIdx ] = useState(0);
    const [ direction, setDirection ] = useState(0);
    const [ isAnimating, setIsAnimating ] = useState(false);
    const timeoutRef = useRef(null);

    const updateIdx = (newDir) => {
        if(isAnimating) return;
        
        setDirection(newDir);
        setGifIdx((prevIdx) => (
            (prevIdx + newDir + project.gifs.length) % project.gifs.length
        ));
        setIsAnimating(true);
    };

    const swipeHandler = useSwipeable({
        onSwipedLeft: () => updateIdx(1),
        onSwipedRight: () => updateIdx(-1),
        preventDefaultTouchmoveEvent: true,
        trackMouse: true
    })

    useEffect (() => {
        timeoutRef.current = setInterval(() => {
            updateIdx(1);
        }, 5000);

        return () => clearInterval(timeoutRef.current);
    }, [project.gifs.length])

    const handleAnimation = () => {
        setIsAnimating(false);
    }

    return (
        <>
        <div {...swipeHandler}
            className="relative w-full flex justify-center select-none"
            style={{ touchAction: "pan-y" }}
        >
            <AnimatePresence initial={false} custom={direction}>
                <motion.img 
                    src={project.gifs[gifIdx]}
                    className="w-full h-full object-contain rounded-lg"
                    alt="demo"
                    draggable="false"
                    custom={direction}
                    initial={{ opacity: 0, x: direction > 0 ? 400 : -400 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: direction > 0 ? -400 : 400 }}
                    transition={{ 
                        x: { type:"spring", stiffness: 60, damping: 12 },
                        opacity: { duration: 0.7 }
                    }}
                    onAnimationComplete={handleAnimation}
                />
            </AnimatePresence>
            <button onClick={() => updateIdx(-1)}
                className="absolute top-1/2 left-0 -translate-y-1/2 p-1 hover:bg-gray-500 rounded-lg text-gray-300 text-xl md:text-2xl hover:text-gray-700">
                <FaAngleLeft />
            </button>
            <button onClick={() => updateIdx(1)}
                className="absolute top-1/2 right-0 -translate-y-1/2 p-1 hover:bg-gray-500 rounded-lg text-gray-300 text-xl md:text-2xl hover:text-gray-700">
                <FaAngleRight />
            </button>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                {project.gifs.map((_, i) => (
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

    const projects = t('projects', {returnObjects: true});
    const project = projects[idx];
    
    return (
        <>
        <motion.div
            initial={{ opacity: 0, y: 40 }} 
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.8 }}
            className="md:w-[1200px] my-10"
        >
            <div className="flex flex-col px-4 py-8 md:p-8 text-white bg-gray-500 rounded-xl shadow justify-center items-center shadow-lg">
                <h1 className="text-3xl md:text-5xl opacity-70 md:text-left md:mb-12">Projects</h1>
                <div className="md:hidden flex justify-center items-center gap-1 py-2">
                    <button onClick={() => setIdx(idx === 0 ? projects.length - 1 : idx - 1)}
                        className="text-xl p-1">
                        <FaAngleLeft />
                    </button>
                    <div className="flex flex-col">
                        <AnimatePresence mode="wait" initial="false">
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -100 }}
                                className="w-[256px] h-full flex flex-col space-y-2"
                            >
                                <div className="flex gap-1">
                                    <h2 className="text-2xl font-semibold pt-2">{project.title}</h2>
                                    <img src={project.logo} 
                                        className={`w-[80px] pb-2 object-contain 
                                        ${!project.logo || project.logo === '/' ? 'hidden' : ''}`}/>
                                </div>
                                <p className="text-lg">{project.desc}</p>
                                <span className="text-sm">{project.duration}</span>
                                <p className="text-sm">{project.position}</p>
                                <span className="flex flex-wrap text-sm">{project.info}</span>
                                <Gifs project={project} />
                                <div className="flex flex-wrap justify-center my-4 gap-2">
                                    {project.skills.map((s) => (
                                        <span 
                                            key={s}
                                            className="px-2 py-1 bg-white/20 rounded-md text-xs font-semibold"
                                        >
                                            {s}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex justify-center pt-4 gap-2">
                                    {project.links.map((l) => (
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
                    <button onClick={() => setIdx(idx === projects.length - 1 ? 0 : idx + 1)}
                        className="text-xl p-1">
                        <FaAngleRight />
                    </button>
                </div>

                <div className="hidden md:block">
                    <AnimatePresence mode="wait" initial="false">
                        <div className="grid grid-cols-2 gap-10">
                            {projects.map((p) => (
                                <div key={p.title} className="p-4 w-[540px] h-full flex flex-col space-y-2 border-2 border-white/20 rounded-xl">
                                    <div className="flex gap-1">
                                        <h2 className="text-4xl font-semibold pt-2">{p.title}</h2>
                                        <img src={p.logo} 
                                            className={`w-[120px] ml-2 object-contain
                                            ${!p.logo || p.logo === '/' ? 'hidden' : ''}`}/>
                                    </div>
                                    <p className="text-2xl">{p.desc}</p>
                                    <span className="text-xl">{p.duration}</span>
                                    <p className="text-xl">{p.position}</p>
                                    <span className="flex flex-wrap text-xl">{p.info}</span>
                                    <Gifs project={p} />
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