import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { HelmetProvider } from "react-helmet-async";



const Main = () => {
    return (
        <HelmetProvider>
        <div className="relative ">
        <div className="fixed w-full z-50 ">
        <Navbar></Navbar>
        </div>
 <div className="pt-[70px] pb-10 px-3 md:px-0">
    <Outlet></Outlet>
 </div>
 <Footer></Footer>
        </div>
        </HelmetProvider>
    );
};

export default Main;