import React from "react";
import TitlePage from "../../components/TitlePage";

export default function Recursos() {
    return (
        <div className="flex flex-col items-center p-20 gap-10">
            <TitlePage
                title="Recursos"
                text="En esta sección encontrarás diferentes recursos de programación, como cheatsheets, vídeos, enlaces y más."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="bg-white p-5 rounded-md">
                    <h3 className="font-bold text-xl">Cheatsheets</h3>
                    <p className="text-gray-600">Encuentra cheatsheets de diferentes lenguajes de programación.</p>
                </div>
            </div>
        </div>
    );
}
