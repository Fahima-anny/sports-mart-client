import Banner from "./sections/Banner";
import ContactSection from "./sections/ContactSection";
import ProductSection from "./sections/ProductSection";
import SportsCategory from "./sections/SportsCategory";
import TestimonialSection from "./sections/testimonialSection";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
           <div id="productSection">
           <ProductSection></ProductSection>
           </div>
            <SportsCategory></SportsCategory>
            <TestimonialSection></TestimonialSection>
            <ContactSection></ContactSection>
        </div>
    );
};

export default Home;