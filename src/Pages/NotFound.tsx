import { Helmet } from "react-helmet-async";

const NotFound = () => {
  const secretPageBtn = document.getElementById("secretPageBtn");
  secretPageBtn?.addEventListener("click", () => {
    const img = document.createElement("img");
    img.src = "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdGxwYXJwMHhlNmVhbm5ld3VjMzczazJwenYxdTlpc3JlY2txazUzcyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/S3KOUNveUPUEbG1y0b/giphy.gif";
    document.body.appendChild(img);
  })
  return (
    <>
      <Helmet>
        <title>Gakodevlpr / Error 404 - Página no encontrada</title>
      </Helmet>
      <div className="flex flex-col items-center justify-center mt-5 gap-5">
        <h1 className="text-3xl md:text-4xl font-bold text-white text-center">404 <br />Página no encontrada</h1>
        <p className="text-lg text-gray-400 p-3 md:p-0 text-center">Lo sentimos, la página que buscas no existe.<br />Pero estamos trabajando duro para que la encuentres...</p>
        <img className="center size-80 border-4 border-gray-700 rounded-4xl" src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdGxwYXJwMHhlNmVhbm5ld3VjMzczazJwenYxdTlpc3JlY2txazUzcyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/S3KOUNveUPUEbG1y0b/giphy.gif"></img>
        <a href="/" className="bg-blue-500 text-white text-2xl px-6 py-5 rounded-md hover:!text-black">Volver a la página de inicio</a>
        <a href="/secret" ><button id="secretPageBtn" className="bg-gray-500 text-black text-md px-2 py-2 rounded-md hover:!text-blue-500">Página secreta</button></a>
      </div>
    </>
  );
};

export default NotFound;