import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Components/Main';
import ErrorPage from './Components/ErrorPage';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import AllEquipment from './Components/AllEquipment';
import AddEquipment from './Components/AddEquipment';
import MyEquipment from './Components/MyEquipment';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage> ,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/allEquipment",
        element: <AllEquipment></AllEquipment>
      },
      {
        path: "/addEquipment",
        element: <AddEquipment></AddEquipment>
      },
      {
        path: "/myEquipment",
        element: <MyEquipment></MyEquipment>
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>,
)
