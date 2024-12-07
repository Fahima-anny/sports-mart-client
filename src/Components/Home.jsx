// import { Helmet } from "react-helmet";
import { Helmet } from "react-helmet";
import Banner from "./sections/Banner";
import ContactSection from "./sections/ContactSection";
import ProductSection from "./sections/ProductSection";
import SportsCategory from "./sections/SportsCategory";
import TestimonialSection from "./sections/testimonialSection";
import { useLoaderData } from "react-router-dom";


const Home = () => {

    const allData = useLoaderData() ;

    return (
        <div>
                <Helmet>
        <title>Sports Mart | Home</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
            <Banner></Banner>
            <div className="max-w-7xl mx-auto ">
           <div id="productSection">
           <ProductSection allData={allData}></ProductSection>
           </div>
            <SportsCategory></SportsCategory> 
             <TestimonialSection></TestimonialSection>
            <ContactSection></ContactSection>
            </div>
        </div>
    );
};

export default Home;