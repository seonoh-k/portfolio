import React from "react";
import { useTranslation } from "react-i18next";

export default function ResumeBtn() {
    const { i18n } = useTranslation();

    const getResumeFile = () => {
        if(i18n.language === "ko") {
            return "/KimSeonOh_resume_ko.pdf";
        }else if(i18n.language === "jp") {
            return "/KimSeonOh_resume_jp.pdf";
        }else if(i18n.language === "en") {
            return "/KimSeonOh_resume_en.pdf";
        }else {
            return "/KimSeonOh_resume_ko.pdf";
        }
    }

    const getResumeFilename = () => {
        if(i18n.language === "ko") {
            return "김선오_이력서.pdf";
        }else if(i18n.language === "jp") {
            return "KimSeonOh_履歴書.pdf";
        }else if(i18n.language === "en") {
            return "KimSeonOh_resume.pdf";
        }else {
            return "김선오_이력서.pdf";
        }
    }

    return (
        <>
        <a href={getResumeFile()} download={getResumeFilename()} 
            className='md:px-4 md:py-2 md:border-2 border-green-500 hover:border-green-400 hover:text-gray-500 flex items-center rounded-lg gap-2'>
                Resume
        </a>
        </>
    )
}