const Titles = ({ title, text, className }: { title: string, text: string, className?: string }) => {

    return (
        <div className={`flex flex-col md:flex-row items-center justify-center gap-4 mb-6 md:max-w-7/12 ${className ?? ""} ${title.includes("Sección") ? "justify-center" : ""}`}>
            <h2 id='Title' className="text-center font-bold text-2xl" dangerouslySetInnerHTML={{ __html: title }}></h2>
            <span className="hidden md:block h-16 border-r border-white"></span>
            <span className="block md:hidden w-full border-b border-white"></span>
            <div>
                {/* 
                    "dangerouslySetInnerHTML" in React allows you to set HTML content directly from a string.
                    It's considered "dangerous" because if the string contains untrusted HTML, it could lead to XSS attacks.
                    In this case, if the only tag included in 'text' is <br/>, and the rest is plain text,
                    it is generally safe, as <br/> is not a dangerous tag and does not allow script execution.
                */}
                <p className="text-center" dangerouslySetInnerHTML={{ __html: text }}></p>
                <br />
                <p className="text-center font-bold text-lg">¡Espero que te sean de ayuda!</p>
            </div>
        </div>
    )
}

export default Titles