import Blog from "../components/Blog/Blog";
import CourseDetails from "../components/CourseDetails/CourseDetails";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";

const { createBrowserRouter } = require("react-router-dom");
const { default: Courses } = require("../components/Courses/Courses");
const { default: Home } = require("../components/Home/Home");
const { default: Main } = require("../layout/Main");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "courses",
        loader: async () => fetch("https://study-bd-server.vercel.app/courses"),
        element: <Courses></Courses>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "/course/:id",
        loader: ({params}) => fetch(`https://study-bd-server.vercel.app/course/${params.id}`),
        element: <CourseDetails></CourseDetails>
      },
    ],
  },
]);

export default router;