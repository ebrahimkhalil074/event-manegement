import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./Pages/Home/Home";
import Details from "./COMPONENTS/Details/Details";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import PrivateRoute from "./COMPONENTS/Navbar/PrivateRoute";
import About from "./Pages/About";
import Contact from "./Pages/Contact";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path: "/",
            element: <Home></Home>,
        },
        {
path:'/details/:id',
element:<PrivateRoute>
  <Details></Details>
  </PrivateRoute>,
loader:()=> fetch("/category.json")
        },
        {
          path:"/register",
          element:<Register></Register>
        },
        {
          path:"/login",
          element:<Login></Login>
        },
        {
          path:"/about",
          element:<About></About>
        },
        {
          path:"/contact",
          element:<Contact></Contact>
        }
      ]
    },
  ]);

  export default router