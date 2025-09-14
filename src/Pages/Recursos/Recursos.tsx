import { NewTabLink } from "../../components/General/NewTabLink";
import { NewSection } from "../../components/Recursos/NewSection";
import TitlePage from "../../components/TitlePage";

export default function Recursos() {
    return (
        <div className="flex flex-col items-center p-8 md:p-20 gap-10">
            <TitlePage
                title="Recursos"
                text="En esta sección encontrarás diferentes recursos de programación, como cheatsheets, vídeos, enlaces y más."
            />
            <div className="grid grid-cols-1 md:flex md:flex-wrap gap-5">
                <NewSection 
                    className = "bg-blue-700"
                    title="Cheatsheets"
                    content="Encuentra cheatsheets de diferentes lenguajes de programación."
                    personaliced = {true}
                    contenido={
                        <table className="w-full border-2 text-center">
                            <thead className="border">
                                <th>Lenguaje</th>
                                <th>Enlace</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>HTML</td>
                                    <td><NewTabLink href="https://htmlcheatsheet.com/">HTML Cheat Sheet</NewTabLink></td>
                                </tr>
                            </tbody>
                        </table>
                    }
                />
                <NewSection
                    className = "bg-red-700"
                    id="CSS"
                    title="CSS"
                    content="Encuentra recursos, tutoriales y herramientas útiles para CSS."
                    contenido={
                            <tbody className="whitespace-normal break-wordsborder">
                                <tr>
                                    <td>
                                        <NewTabLink href="https://www.w3schools.com/css/">
                                            W3Schools
                                        </NewTabLink>
                                    </td>
                                    <td>
                                        Sitio web con información sobre CSS.
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <NewTabLink href="https://xsgames.co/NewTabLinknimatiss/">
                                            Animatiss
                                        </NewTabLink>
                                    </td>
                                    <td>
                                        Colección de animaciones escritas en CSS que puedes añadir a tu código fuente.
                                    </td>
                                </tr>
                            </tbody>
                    }
                />
                <NewSection
                    className = "bg-green-700"
                    id="Learning"
                    title="Aprendizaje"
                    content="Proyectos e ideas útiles si te sientes estancade en tu aprendizaje o en tu siguiente meta."
                    contenido={
                            <tbody>
                                <tr>
                                    <td>
                                        <NewTabLink href="https://xsgames.co/devassets">
                                            DevAssets
                                        </NewTabLink>
                                    </td>
                                    <td>
                                        Colección de recursos gratuitos para desarrolladores.
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <NewTabLink href="https://roadmap.sh/frontend/projects">
                                            Frontend Projects
                                        </NewTabLink>
                                    </td>
                                    <td>
                                        Colección de proyectos que puedes hacer para mejorar tus habilidades.
                                    </td>
                                </tr>
                            </tbody>
                    }
                />
            </div>
        </div>
    );
}
