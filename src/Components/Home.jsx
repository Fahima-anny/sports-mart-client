import Banner from "./sections/Banner";
import ProductSection from "./sections/ProductSection";
import SportsCategory from "./sections/SportsCategory";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
           <div id="productSection">
           <ProductSection></ProductSection>
           </div>
            <SportsCategory></SportsCategory>
        </div>
    );
};

export default Home;