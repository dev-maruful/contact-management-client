import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Contacts from "../pages/Contacts";
import AddContact from "../pages/AddContact";
import UpdateContact from "../pages/UpdateContact";

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
      {
        path: "/updateContact",
        element: <UpdateContact></UpdateContact>,
      },
    ],
  },
]);

export default router;
