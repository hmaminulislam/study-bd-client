import Blog from "../components/Blog/Blog";

const { createBrowserRouter } = require("react-router-dom");
const { default: Courses } = require("../components/Courses/Courses");
const { default: Home } = require("../components/Home/Home");
const { default: Main } = require("../layout/Main");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'courses',
                element: <Courses></Courses>
            },
            {
                path: 'blog',
                element: <Blog></Blog>
            }
        ]
    }
])

export default router;