import { createBrowserRouter, redirect } from "react-router-dom";
import Home from "../pages/Home/Home";
import Root from "../layouts/mainLayout";
import NotFound from "../pages/NotFound/NotFound";
import Posts from "../pages/Posts/Posts";
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";
import Profile from "../pages/Profile/Profile";
import OcarinaOfTime from "../pages/Games/OcarinaOfTime/OcarinaOfTime";
import TheWindWaker from "../pages/Games/TheWindWaker/TheWindWaker";
import ALinkToThePast from "../pages/Games/ALinkToThePast/ALinkToThePast";
import BreathOfTheWild from "../pages/Games/BreathOfTheWild/BreathOfTheWild";
import TearsOfTheKingdom from "../pages/Games/TearsOfTheKingdom/TearsOfTheKingdom";


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
        loader: () => {
          if (localStorage.getItem("token")) {
            return redirect("/profile");
          } else {
            return null;
          }
        },
        element: <SignUp />,
      },
     {
        path: "/profile",
        loader: () => {
          if (!localStorage.getItem("token")) {
            alert("Inicia sesión!!!");
            return redirect("/login");
          } else {
            return null;
          }
        },
        element: <Profile />,
      },
      {
        path: "/ocarinaoftime",
        loader: () => {
          if (!localStorage.getItem("token")) {
            alert("Inicia sesión!!!");
            return redirect("/login");
          } else {
            return null;
          }
        },
        element: <OcarinaOfTime />,
      },
      {
        path: "/thewindwaker",
        loader: () => {
          if (!localStorage.getItem("token")) {
            alert("Inicia sesión!!!");
            return redirect("/login");
          } else {
            return null;
          }
        },
        element: <TheWindWaker />,
      },
      {
        path: "/alinktothepast",
        loader: () => {
          if (!localStorage.getItem("token")) {
            alert("Inicia sesión!!!");
            return redirect("/login");
          } else {
            return null;
          }
        },
        element: <ALinkToThePast />,
      },
      {
        path: "/breathofthewild",
        loader: () => {
          if (!localStorage.getItem("token")) {
            alert("Inicia sesión!!!");
            return redirect("/login");
          } else {
            return null;
          }
        },
        element: <BreathOfTheWild />,
      },
      {
        path: "/tearsofthekingdom",
        loader: () => {
          if (!localStorage.getItem("token")) {
            alert("Inicia sesión!!!");
            return redirect("/login");
          } else {
            return null;
          }
        },
        element: <TearsOfTheKingdom />,
      },
    ],
  },
  {
    path: "/login",
    loader: () => {
      if (localStorage.getItem("token")) {
        return redirect("/profile");
      } else {
        return null;
      }
    },
    element: <Login />,
    errorElement: <NotFound />,
  }
]);

export default router