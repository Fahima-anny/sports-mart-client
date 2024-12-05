import { useLoaderData } from "react-router-dom";


const UpdateProduct = () => {

const data = useLoaderData() ;
console.log(data)

    return (
        <div>
           update product 
        </div>
    );
};

export default UpdateProduct;