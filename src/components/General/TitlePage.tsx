export default function TitlePage({ title, text }: { title: string; text: string }) {
    return (
        <section className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-widest">
                {title}
            </h1>
            <p className="text-xl md:text-2xl text-white leading-relaxed">
                {text}
            </p>
        </section>
    );
}