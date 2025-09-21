import NewTabLink from "../../components/General/NewTabLink";
import { NewSection } from "../../components/Recursos/NewSection";
import TitlePage from "../../components/General/TitlePage";

export default function Recursos() {
    return (
        <div className="flex flex-col items-center p-8 md:p-20 gap-10">
            <TitlePage
                title="Recursos"
                text="En esta sección encontrarás diferentes recursos de programación, como cheatsheets, vídeos, enlaces y más."
            />
            <div className="flex flex-wrap justify-center gap-5">
                <NewSection
                    className="bg-blue-500"
                    title="Cheatsheets"
                    content="Encuentra cheatsheets de diferentes lenguajes de programación."
                    personaliced={true}
                    contenido={
                        <table className="w-full border-2 text-center">
                            <thead className="border">
                                <th>Enlace</th>
                                <th>Lenguaje</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><NewTabLink className="text-black md:p-2" href="https://quickref.me/">QuickRef</NewTabLink></td>
                                    <td>Multiples lenguajes y programas</td>
                                </tr>
                                <tr>
                                    <td><NewTabLink className="text-black md:p-2" href="https://htmlcheatsheet.com/">HTML Cheat Sheet</NewTabLink></td>
                                    <td>HTML</td>
                                </tr>
                                <tr>
                                    <td><NewTabLink className="text-black md:p-2" href="https://docs.emmet.io/cheat-sheet/">Emmet Docs</NewTabLink></td>
                                    <td>Emmet</td>
                                </tr>
                            </tbody>
                        </table>
                    }
                />
                <NewSection
                    className="bg-red-700"
                    id="CSS"
                    title="CSS"
                    content="Encuentra recursos, tutoriales y herramientas útiles para CSS."
                    contenido={
                        <tbody className="whitespace-normal break-wordsborder">
                            <tr>
                                <td>
                                    <NewTabLink className="text-black md:p-2" href="https://xsgames.co/animatiss/">
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
                    className="bg-green-700"
                    id="Learning"
                    title="Aprendizaje"
                    content="Proyectos e ideas útiles si te sientes estancade en tu aprendizaje o en tu siguiente meta."
                    contenido={
                        <tbody>
                            <tr>
                                <td>
                                    <NewTabLink className="text-black md:p-2" href="https://www.w3schools.com/css/">
                                        W3Schools
                                    </NewTabLink>
                                </td>
                                <td>
                                    Sitio web con información sobre distintos tipos de programación.
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <NewTabLink className="text-black md:p-2" href="https://xsgames.co/devassets">
                                        DevAssets
                                    </NewTabLink>
                                </td>
                                <td>
                                    Colección de recursos gratuitos para desarrolladores.
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <NewTabLink className="text-black md:p-2" href="https://roadmap.sh/frontend/projects">
                                        Frontend Projects
                                    </NewTabLink>
                                </td>
                                <td>
                                    Colección de proyectos que puedes hacer para mejorar tus habilidades.
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <NewTabLink className="text-black md:p-2" href="https://regex101.com/">
                                        Regular expressions 101
                                    </NewTabLink>
                                </td>
                                <td>
                                    Web donde testear expresiones regulares
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <NewTabLink className="text-black md:p-2" href="https://app.superskill.pro/examenes/">
                                        Superskill
                                    </NewTabLink>
                                </td>
                                <td>Web donde poder realizar pruebas de certificación</td>
                            </tr>
                        </tbody>
                    }
                />
                <NewSection
                    className="bg-orange-800"
                    id="HTML"
                    title="HTML"
                    content="Recursos para sacarle todo el partido a HTML."
                    contenido={"En proceso..."}
                />
            </div>
        </div>
    );
}
