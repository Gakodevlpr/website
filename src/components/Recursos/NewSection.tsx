import React, { useState } from "react";

interface NewSectionProps {
    title:string,
    content?:React.ReactNode,
    contenido?:React.ReactNode,
    id?:string,
    personaliced?:boolean,
    className?:string
}

export function NewSection(
    { title, content, contenido, id, personaliced, className}: NewSectionProps) {
    const [isVisible, setIsVisible] = useState(false)
    return (
        <div id={id} className={`new-section p-5 rounded-md flex flex-col gap-2 ${isVisible ? null : "max-h-fit"} ${className}`}>
            <h3 className={`font-bold text-xl cursor-pointer flex justify-between items-center gap-5 ${isVisible ? "bg-black text-white rounded-2xl p-2 transition-all duration-200" : null}`} onClick={() => setIsVisible(!isVisible)}>
                {title}
                {isVisible && <span className="text-sm text-gray-400 font-Montserrat">Haz click en el título para cerrar la tarjeta</span>}
            </h3>
            {isVisible && (
                <div className={`flex flex-col gap-4 ${isVisible? "opacity-100 transition-all ease-in-out duration-200":null}`}>
                    <div className="pt-2">
                        {content}
                    </div>
                    {!personaliced && (
                        <div>
                            <table className="text-center transition-all duration-300 ease-in-out w-full">
                                <thead>
                                    <tr>
                                        <td>Enlace</td>
                                        <td>Descripción</td>
                                    </tr>
                                </thead>
                                {contenido}
                            </table>
                        </div>
                    ) || personaliced && (
                        <div>
                            {contenido}
                        </div>)}
                </div>
            )}
        </div>
    )
}