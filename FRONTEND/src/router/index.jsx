import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Root from "../layouts/mainLayout";
import NotFound from "../pages/NotFound/NotFound";
import Posts from "../pages/Posts/Posts";


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
    ],
  },
]);

export default router