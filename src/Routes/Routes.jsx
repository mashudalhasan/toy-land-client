import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import AddToy from "../Pages/AddToy/AddToy";
import AllToys from "../Pages/AllToys/AllToys";
import MyToys from "../Pages/MyToys/MyToys";
import PrivateRoute from "./PrivateRoute";
import UpdateMyToys from "../Pages/MyToys/UpdateMyToys";
import ErrorPage from "../Shared/ErrorPage/ErrorPage";
import Blog from "../Shared/Blog/Blog";
import Terms from "../Shared/Terms/Terms";
import About from "../Shared/About/About";
import History from "../Shared/History/History";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "alltoys",
        element: <AllToys></AllToys>,
        loader: () =>
          fetch("https://toy-land-server-dusky.vercel.app/products"),
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
      {
        path: "terms",
        element: <Terms></Terms>,
      },
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "history",
        element: <History></History>,
      },
      {
        path: "addToy",
        element: (
          <PrivateRoute>
            <AddToy></AddToy>
          </PrivateRoute>
        ),
      },
      {
        path: "myToys",
        element: (
          <PrivateRoute>
            <MyToys></MyToys>
          </PrivateRoute>
        ),
      },
      {
        path: "updateToys/:id",
        element: (
          <PrivateRoute>
            <UpdateMyToys></UpdateMyToys>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://toy-land-server-dusky.vercel.app/toys/${params.id}`),
      },
    ],
  },
]);

export default router;
