/* eslint-disable react/prop-types */

import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";


const ClientsCard = ({data}) => {

const {name, rating, review, img} = data ;

    return (
        <div>
                        <div className="card bg-base-100 w-80 m-5 shadow-md shadow-base-300">
  <figure className="h-20 w-20 mx-auto rounded-full object-cover object-center">
    <img
      src={img}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center py-3 h-[190px]">
    <h2 className="card-title text-primary font-bold">{name}</h2>
    <p>{review}</p>
   <div className="flex gap-2 items-center">
    <span className="text-primary font-semibold">Rating:</span>
     <Rating
   className="text-yellow-500 text-xl"
   initialRating={rating}
   emptySymbol={<FaRegStar className="icon" />}
   fullSymbol={<FaStar className="icon" />}
   readonly
   />
   </div>
  </div>
</div>
        </div>
    );
};

export default ClientsCard;