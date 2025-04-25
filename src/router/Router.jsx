import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../Pages/homePage/Home";
import Login from "../Pages/auth/Login";
import Register from "../Pages/auth/Register";
import CreateAssignment from "../Pages/create-assignment/CreateAssignment";
import Assignments from "../Pages/Assignments/Assignments";
import PendingAssignment from "../Pages/Assignments/PendingAssignment";
import AssDetails from "../Pages/Assignments/AssDetails";
import UpdatedAssignment from "../Pages/Assignments/UpdatedAssignment";
import PrivateRoute from "./PrivateRoute";
import ResourcesNotes from "../Pages/Assignments/ResourcesNotes";
import Error from "../sharedComponents/Error";
import MyAssessment from "../Pages/Assignments/MyAssessment";
import MyAssignment from "../Pages/Assignments/MyAssignment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
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
      },
      {
        path: "pending-assignments",
        element: (
          <PrivateRoute>
            <PendingAssignment></PendingAssignment>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-assessment",
        element: (
          <PrivateRoute>
            <MyAssessment></MyAssessment>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-assignment",
        element: (
          <PrivateRoute>
            <MyAssignment></MyAssignment>
          </PrivateRoute>
        ),
      },
      {
        path: "assignment/details/:id",
        element: <AssDetails></AssDetails>,
        loader: ({ params }) =>
          fetch(`https://studyo-server.vercel.app/assignment/${params.id}`),
      },
      {
        path: "assignment/updated/:id",
        element: <UpdatedAssignment></UpdatedAssignment>,
        loader: ({ params }) =>
          fetch(`https://studyo-server.vercel.app/assignment/${params.id}`),
      },
      {
        path: "resources-notes",
        element: (
          <PrivateRoute>
            <ResourcesNotes></ResourcesNotes>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
