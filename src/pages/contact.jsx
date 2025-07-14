import React from "react";
import { motion } from 'framer-motion';
import { IoMdMail } from "react-icons/io";
import { FaGithub, FaPhoneAlt } from "react-icons/fa";
import { SiNotion } from "react-icons/si";

export default function Contact() {
    return (
        <>
        <motion.div
            initial={{ opacity: 0, y: 40 }} 
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.8 }}
            className="md:w-[970px]"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 px-16 py-8 md:p-20 bg-gray-500 rounded-xl shadow justify-center items-center shadow-lg">
                <div className="flex flex-col items-center md:items-start mb-10 md:mb-0">
                    <h1 className="text-white text-2xl md:text-5xl opacity-70">Contact</h1>
                </div>
                <div className="flex flex-col gap-2 md:gap-8 md:border-l border-gray-200 md:pl-6">
                    <a href='tel:01040289931' className="flex text-white text-md md:text-3xl opacity-60 gap-2">
                        <FaPhoneAlt className="mt-1"/> +82-10-4028-9931
                    </a>
                    <a href='mailto:kimseonoh101@gmail.com' className="flex text-white text-md md:text-3xl opacity-60 gap-2">
                        <IoMdMail className="mt-1"/> kimseonoh101@gmail.com
                    </a>
                    <a href='https://github.com/seonoh-k' target="_blank" className="flex text-white text-md md:text-3xl opacity-60 gap-2">
                        <FaGithub className="mt-1"/> Github
                    </a>
                    <a href='https://www.notion.so/Study-22ff7b0856be80dcae43ffa200c858b9?source=copy_link' 
                        target="_blank"
                        className="flex text-white text-md md:text-3xl opacity-60 gap-2">
                        <SiNotion className="mt-1"/> Notion
                    </a>
                </div>
            </div>
        </motion.div>
        </>
    )
}