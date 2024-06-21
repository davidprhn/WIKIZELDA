import { createBrowserRouter, redirect } from "react-router-dom";
import Home from "../pages/Home/Home";
import Root from "../layouts/mainLayout";
import NotFound from "../pages/NotFound/NotFound";
import Posts from "../pages/Posts/Posts";
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";
import Profile from "../pages/Profile/Profile";


const router = createBrowserRouter([
  {
    path: "",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/posts",
        element: <Posts />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/profile",
        loader: () => {
          if(!localStorage.getItem('token')) {
            alert('Inicia sesión!!!')
            return redirect('/login')
          } else {
            return null
          }
        },
        element: <Profile />,
      },
    ],
  },
]);

export default router