/* eslint-disable react/prop-types */

import { FaEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import { Link } from "react-router-dom";


const MyEquitmentsCard = ({data}) => {

    const {_id,item, category,price,photo,rating,delivery} = data

    return (
        <div className="card bg-base-200 rounded-lg">
        <figure className="">
          <img
          className="h-[400px] w-full object-cover object-center"
            src={photo}
            alt="Shoes" />
        </figure>
        <div className="card-body p-5 font-medium">
          <h2 className="card-title text-primary">{item}</h2>
<div className="grid grid-cols-2 gap-2 ">
<p>Category: {category}</p>
<p className="">Delivery Time: {delivery}</p>
</div>
<div className="grid grid-cols-2 gap-2">
          <p>Price: ${price}</p>
          <p>Rating: {rating}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-3 mt-3 justify-center">
     <Link
      to={`/updateProduct/${_id}`}
       className="flex gap-2 items-center btn bg-[#ffa400] hover:bg-[#cc8500] text-black">
        Update <FaEdit className="text-xl" /></Link>
        <button className="btn bg-[#ffa400] hover:bg-[#ce8600] text-black flex items-center gap-1">Delete <MdOutlineDelete  className="text-2xl" /></button>
          </div>
        </div>
      </div>
    );
};

export default MyEquitmentsCard;