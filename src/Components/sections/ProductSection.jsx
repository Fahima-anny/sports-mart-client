import { useLoaderData } from "react-router-dom";


const ProductSection = () => {

const allData = useLoaderData() ;
console.log(allData) ;
    return (
        <div>
            product section here : {allData.length}
        </div>
    );
};

export default ProductSection;