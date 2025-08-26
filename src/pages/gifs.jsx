import { React, useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { useSwipeable } from 'react-swipeable';

export default function Gifs({ project }) {
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
            className="relative w-full flex justify-center select-none aspect-video rounded-lg overflow-hidden"
            style={{ touchAction: "pan-y" }}
        >
            <AnimatePresence initial={false} custom={direction}>
                <motion.img 
                    key={gifIdx}
                    src={project.gifs[gifIdx]}
                    className="absolute top-0 left-0 w-full h-full object-contain"
                    alt="demo"
                    draggable="false"
                    custom={direction}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ 
                        opacity: { duration: 0.4 }
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