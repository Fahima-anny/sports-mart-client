/* eslint-disable react/prop-types */

import { Fade } from "react-awesome-reveal";
import { FaRegStar, FaStar } from "react-icons/fa";
import { IoCartSharp } from "react-icons/io5";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import Rating from "react-rating";
import { Link } from "react-router-dom";



const ProductCard = ({data}) => {

const {_id,item, category,price,photo,rating,delivery} = data

    return (
      <Fade
      direction="up"
      duration={1000}
      damping={0.2}
      cascade
      triggerOnce
      >
        <div className="card shadow-md shadow-base-300 rounded-lg">
        <figure className="">
          <img
          className="h-[300px] w-full object-cover object-center"
            src={photo}
            alt="Shoes" />
        </figure>
        <div className="card-body p-3 flex-grow">
          <h2 className="card-title text-primary">{item}</h2>
<div className="grid flex-grow grid-cols-1 gap-2 text-gray-500">
<p>Category: {category}</p>
<p className="">Delivery Time: {delivery}</p>
</div>
<div className="grid grid-cols-2 gap-2 text-gray-500">
          <p>Price: <span className="text-black font-medium">${price}</span></p>
          <p className="flex items-center gap-1"> 
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
         Details <MdKeyboardDoubleArrowRight className="text-2xl" /></Link>
        <button className="btn bg-[#ffa400] hover:bg-[#ce8600] text-black flex items-center flex-nowrap h-auto gap-2">Add  <IoCartSharp className="text-xl" /></button>
          </div>
        </div>
      </div>
      </Fade>
    );
};

export default ProductCard;