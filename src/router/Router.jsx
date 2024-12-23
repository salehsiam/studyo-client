import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../Pages/homePage/Home";
import Login from "../Pages/auth/Login";
import Register from "../Pages/auth/Register";
import CreateAssignment from "../Pages/create-assignment/CreateAssignment";
import Assignments from "../Pages/Assignments/Assignments";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <p>error</p>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
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
        path: "create-assignment",
        element: <CreateAssignment></CreateAssignment>,
      },
      {
        path: "assignments",
        element: <Assignments></Assignments>,
        loader: () => fetch("http://localhost:5000/assignments"),
      },
    ],
  },
]);

export default router;
