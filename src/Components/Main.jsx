import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";


const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
 <div className="max-w-7xl mx-auto py-10 px-3 md:px-0">
    <Outlet></Outlet>
 </div>
 <Footer></Footer>
        </div>
    );
};

export default Main;