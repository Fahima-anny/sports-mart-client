/* eslint-disable react/prop-types */
// import { useLoaderData } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import ProductCard from "./ProductCard";


const ProductSection = ({allData}) => {


// console.log(allData) ;
    return (
 
        <div className="pt-20 pb-16">
             <Fade
      direction="up"
      duration={1000}
      damping={0.2}
      cascade
      triggerOnce
      >
<h1 className="text-center text-3xl md:text-5xl font-bold text-primary">Sports Equipments</h1>

<p className="mx-auto max-w-2xl text-center pt-7 pb-12 text-gray-600">Explore our premium collection of sports equipment, featuring top-quality gear for every sport, designed to elevate your performance!</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
         
          {
            allData?.map(data => <ProductCard 
                data={data}
                key={data._id}
                ></ProductCard>)
           }
          </div>
          </Fade>
        </div>

    );
};

export default ProductSection;