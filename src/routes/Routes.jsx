import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Contacts from "../pages/Contacts";
import AddContact from "../pages/AddContact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Contacts></Contacts>,
      },
      {
        path: "/addContact",
        element: <AddContact></AddContact>,
      },
    ],
  },
]);

export default router;
