import { useNavigate } from "react-router-dom";

interface CourseProps {
    titleCourse: string;
    imagesrc: string;
    linkTo?: string; // Make linkTo optional
    infoImg?: string;
    className?: string;
}

export default function ExportCourse({ titleCourse, imagesrc, linkTo = "/", infoImg, className }: CourseProps) {
    const navigate = useNavigate();

    const handleClick = () => {
        const go = () => navigate(linkTo);
        if (document.startViewTransition) {
            document.startViewTransition(go);
        } else {
            go();
        }
    };

    return (
        <div 
            onClick={handleClick} 
            className={`flex flex-col items-center p-6 border border-white/20 rounded-2xl bg-white/5 cursor-pointer hover:bg-white/10 transition-colors ${className}`}
        >
            <h3 className="font-Sour text-3xl mb-4 text-center">{titleCourse}</h3>
            <img src={imagesrc} className={infoImg ? infoImg : 'w-32 h-32 object-contain'} alt={titleCourse} />
        </div>
    );
};