import { useLoaderData } from "react-router-dom";
import ProductCard from "./ProductCard";


const ProductSection = () => {

const allData = useLoaderData() ;
console.log(allData) ;
    return (
        <div className="pt-20 pb-16">
          
<h1 className="text-center text-3xl md:text-5xl font-bold text-primary">Sports Equipments</h1>

<p className="mx-auto max-w-2xl text-center pt-7 pb-12 text-gray-600">Explore our premium collection of sports equipment, featuring top-quality gear for every sport, designed to elevate your performance!</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {
            allData.map(data => <ProductCard 
                data={data}
                key={data._id}
                ></ProductCard>)
           }
          </div>
        </div>
    );
};

export default ProductSection;