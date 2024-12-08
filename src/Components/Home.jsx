// import { Helmet } from "react-helmet";
import { Helmet } from "react-helmet";
import Banner from "./sections/Banner";
import ContactSection from "./sections/ContactSection";
import ProductSection from "./sections/ProductSection";
import SportsCategory from "./sections/SportsCategory";
import TestimonialSection from "./sections/testimonialSection";
import { useLoaderData } from "react-router-dom";
import { Fade } from "react-awesome-reveal";


const Home = () => {

    const allData = useLoaderData() ;

    return (
        
        <div>
                <Helmet>
        <title>Sports Mart | Home</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <Fade
      direction="up"
      duration={1000}
      damping={0.2}
      cascade
      triggerOnce
      >
            <Banner></Banner>
            <div className="max-w-7xl mx-auto ">
            <Fade
      direction="up"
      duration={1000}
      cascade
      damping={0.2}
      triggerOnce
      >
           <div id="productSection">
           <ProductSection allData={allData}></ProductSection>
           </div>
            <SportsCategory></SportsCategory> 
             <TestimonialSection></TestimonialSection>
            <ContactSection></ContactSection>
            </Fade>
            </div>
            </Fade>
        </div>
    );
};

export default Home;