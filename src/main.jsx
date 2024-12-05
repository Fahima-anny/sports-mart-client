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
import AuthProvider from './AuthProviders/AuthProvider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from './AuthProviders/PrivateRoute';
import ItemDetails from './Components/ItemDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage> ,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=> fetch(`http://localhost:5000/equipments/limit`)
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
        element: <AllEquipment></AllEquipment>,
        loader: () => fetch("http://localhost:5000/equipments")
      },
      {
        path: "/addEquipment",
        element: <PrivateRoute><AddEquipment></AddEquipment></PrivateRoute>
      },
      {
        path: "/myEquipment/:email",
        element: <PrivateRoute><MyEquipment></MyEquipment></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/equipments/user/${params.email}`)
      },
      {
        path: "/productDetails/:id",
        element: <PrivateRoute><ItemDetails></ItemDetails></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/equipments/id/${params.id}`)
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
<AuthProvider>
<ToastContainer
theme="dark"
position="top-center"
autoClose={1000}
/>
<RouterProvider router={router} />
</AuthProvider>
  </StrictMode>,
)
