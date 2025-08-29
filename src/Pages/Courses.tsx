import pythonImage from '../../assets/python.png';
import promptin from '../../assets/promptin.svg'
import ExportCourse from '../components/Courses/ExportCourse';
import { useOutlet } from 'react-router';
import { useNavigate } from 'react-router';

export default function Courses() {
    const outlet = useOutlet();
    const nav = useNavigate();
    return (
        <section id="cursos" className='flex flex-col p-8 gap-10'>

            {/* Si NO hay contenido hijo → muestra la lista de cursos */}
            {!outlet && (
                <div className="flex flex-wrap gap-10 justify-center">
                    <ExportCourse titleCourse="Python" imagesrc={pythonImage} linkTo="python" />
                    <ExportCourse titleCourse="Programación 101" imagesrc={promptin} linkTo="basicprograming" />
                </div>
            )}

            {outlet && (
                <div className="flex justify-end mb-6">
                    <button
                        onClick={() => {
                            const go = () => nav("/cursos");
                            if (document.startViewTransition) {
                                document.startViewTransition(go);
                            } else {
                                go();
                            }
                        }}
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                    >
                        ← Volver a cursos
                    </button>
                </div>
            )}

            {outlet}
        </section>
    );
}