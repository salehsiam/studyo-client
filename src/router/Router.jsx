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
import MyAssignments from "../Pages/Assignments/MyAssignments";
import PrivateRoute from "./PrivateRoute";
import ResourcesNotes from "../Pages/Assignments/ResourcesNotes";

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
        path: "/my-assignments",
        element: (
          <PrivateRoute>
            <MyAssignments></MyAssignments>
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
        element: <ResourcesNotes></ResourcesNotes>,
      },
    ],
  },
]);

export default router;
