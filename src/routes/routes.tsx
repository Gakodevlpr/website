import { createBrowserRouter } from "react-router-dom";
import Layout from '../Pages/Layout';

//Pages
import Homepage from "../Homepage";
import Bienvenida from '../Pages/Bienvenida';
import Recursos from '../Pages/Recursos/Recursos';
import Courses from '../Pages/Courses';
import Python from "../Pages/Courses/Python/Python_0";
import Python_1 from "../Pages/Courses/Python/Python_1";
import Python_2 from "../Pages/Courses/Python/Python_2";
import Python_End from "../Pages/Courses/Python/Python_End";
import Programacion101 from "../Pages/Courses/Programacion101/Programacion101_0";
import Html_0 from "../Pages/Courses/Html/Html_0";
import Html_1 from "../Pages/Courses/Html/Html_1";
import Html_2 from "../Pages/Courses/Html/Html_2";
import Html_End from "../Pages/Courses/Html/Html_End";
import Programacion101_1 from "../Pages/Courses/Programacion101/Programacion101_1"
import Programacion101_2 from "../Pages/Courses/Programacion101/Programacion101_2"
import Programacion101_End from "../Pages/Courses/Programacion101/Programacion101_End"

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
          path: "recursos",
          element: <Recursos />
        },
        {
          path:"cursos",
          element: <Courses />,
          children:[
            {
              path:"python",
              element:<Python/>,
              children:[
                {
                  path:"python_1",
                  element:<Python_1/>
                },
                {
                  path:"python_2",
                  element:<Python_2/>
                },
                {
                  path:"python_end",
                  element:<Python_End/>
                },
              ]
            },
            {
              path:"basicprogramming",
              element:<Programacion101/>,
              children:[
                {
                  path:"basicprogramming_1",
                  element:<Programacion101_1/>
                },
                {
                  path:"basicprogramming_2",
                  element:<Programacion101_2/>
                },
                {
                  path:"basicprogramming_end",
                  element:<Programacion101_End/>
                },
              ]
            },
            {
              path:"html",
              element:<Html_0/>,
              children:[
                {
                  path:"html_1",
                  element:<Html_1/>
                },
                {
                  path:"html_2",
                  element:<Html_2/>
                },
                {
                  path:"html_end",
                  element:<Html_End/>
                },
              ]
            },
          ],
        },
      ],
    },
  ]); 