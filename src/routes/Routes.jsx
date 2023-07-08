import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Contacts from "../pages/Contacts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Contacts></Contacts>,
      },
    ],
  },
]);

export default router;
