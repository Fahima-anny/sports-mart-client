/* eslint-disable react/prop-types */

import { FaRegStar, FaStar } from "react-icons/fa";
import { IoCartSharp } from "react-icons/io5";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import Rating from "react-rating";
import { Link } from "react-router-dom";



const ProductCard = ({data}) => {

const {_id,item, category,price,photo,rating,delivery} = data

    return (
        <div className="card shadow-md shadow-base-300 rounded-lg">
        <figure className="">
          <img
          className="h-[300px] w-full object-cover object-center"
            src={photo}
            alt="Shoes" />
        </figure>
        <div className="card-body p-5 font-medium">
          <h2 className="card-title text-primary">{item}</h2>
<div className="grid flex-grow grid-cols-2 gap-2">
<p>Category: {category}</p>
<p className="">Delivery Time: {delivery}</p>
</div>
<div className="grid grid-cols-2 gap-2">
          <p>Price: ${price}</p>
          <p className="flex items-center justify-center gap-1">Rating:  
               <Rating
   className="text-yellow-500 text-xl"
   initialRating={rating}
   emptySymbol={<FaRegStar className="icon" />}
   fullSymbol={<FaStar className="icon" />}
   readonly
   /></p>
          </div>
          <div className="grid md:grid-cols-2 gap-3 mt-3 md:justify-center">
     <Link
      to={`/productDetails/${_id}`}
       className="flex gap-1 items-center btn bg-[#ffa400] hover:bg-[#cc8500] text-black flex-nowrap h-auto">
        View Details <MdKeyboardDoubleArrowRight className="text-2xl" /></Link>
        <button className="btn bg-[#ffa400] hover:bg-[#ce8600] text-black flex items-center flex-nowrap h-auto gap-2">Add to Cart <IoCartSharp className="text-xl" /></button>
          </div>
        </div>
      </div>
    );
};

export default ProductCard;