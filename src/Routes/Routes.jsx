import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import DashboardLayout from "../layouts/DashboardLayout";
import AddClass from "../pages/Dashboard/AddClass";
import PrivateRoute from "./PrivateRoute";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
          /*       {
        path: "instructors",
        element: <Instructors></Instructors>,
      }, */
  /*     {
        path: "classes",
        element: <PrivateRoute><Classes></Classes></PrivateRoute>,
      }, */
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },

      {
        path: "dashboard",
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
          {
            path: "/dashboard/add-class",
        element: <AddClass></AddClass>,
          }
        ]
      },
]);
