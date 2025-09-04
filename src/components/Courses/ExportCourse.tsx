import React from "react";
import { Link, useNavigate } from "react-router-dom";

interface CourseProps {
    titleCourse: string;
    imagesrc: string;
    linkTo?: string; // Make linkTo optional
    infoImg?: string;
    className?: string;
}

export default function ExportCourse({ titleCourse, imagesrc, linkTo = "/", infoImg, className }: CourseProps) {
    const navigate = useNavigate();

    const handleClick: React.MouseEventHandler<HTMLAnchorElement> = (event) => {
        event.preventDefault();
        const go = () => navigate(linkTo);
        if (document.startViewTransition) {
            document.startViewTransition(go);
        } else {
            go();
        }
    };

    return (
        <Link to={linkTo} onClick={handleClick} className={`flex flex-col items-center p-6 border border-white/20 rounded-2xl bg-white/5 ${className}`}>
            <h3 className="font-Sour text-3xl mb-4 text-center">{titleCourse}</h3>
            <img src={imagesrc} className={infoImg ? infoImg : 'w-32 h-32 object-contain'} alt={titleCourse} />
        </Link>
    );
};