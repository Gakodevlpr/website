import { createBrowserRouter } from "react-router-dom";
import Layout from '../Pages/Layout';

//Pages
import Homepage from "../Homepage";
import Bienvenida from '../Pages/Bienvenida';
import About from '../Pages/About';
import Courses from '../Pages/Courses/Courses';
import Python from "../Pages/Python";
import Programacion101 from "../Pages/Programacion101";

export const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout/>,
      children: [
        {
          index: true,
          element: <Homepage />,
        },
        {
          path:"bienvenida",
          element: <Bienvenida/>
        },
        {
          path: "about",
          element: <About />
        },
        {
          path:"cursos",
          element: <Courses />,
          children:[
            {
              path:"python",
              element: <Python/>,
            },
            {
              path:"basicprograming",
              element:<Programacion101/>,
            },
          ],
        },
      ],
    },
  ]); 