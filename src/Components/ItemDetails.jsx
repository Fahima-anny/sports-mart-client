import { FiHeart } from "react-icons/fi";
import { IoCartSharp } from "react-icons/io5";
import { useLoaderData } from "react-router-dom";


const ItemDetails = () => {

    const itemData = useLoaderData();

    // eslint-disable-next-line no-unused-vars
    const { _id, name, email, item, category, price, customization, description, stock, photo, rating, delivery } = itemData;

    return (
        <div className="md:grid md:grid-cols-2 gap-10  md:justify-between ">
            <div className="">
                <img src={photo}
                    className="w-full lg:w-[450px] h-full lg:h-[500px] object-cover object-center rounded-2xl "
                    alt="" />
            </div>

            <div className="flex flex-col justify-center">
               <div className="flex flex-col justify-center gap-2 ">
               <h3 className="lg:grid grid-cols-3 gap-2 text-xl font-medium">
                    <span className="col-span-1">Item Name : </span> 
                    <span className="col-span-2 text-primary">{item}</span>
                    </h3>
                <h3 className="lg:grid grid-cols-3 gap-2 text-xl font-medium">
                    <span className="">Item Category : </span> 
                    <span className="col-span-2 text-primary">{category}</span>
                    </h3>
                <h3 className="lg:grid grid-cols-3 gap-2 text-xl font-medium">
                    <span className="">Availability : </span> 
                    <span className="col-span-2 text-primary">{stock} pcs</span>
                    </h3>
                <h3 className="lg:grid grid-cols-3 gap-2 text-xl font-medium">
                    <span className="">Ratings : </span> 
                    <span className="col-span-2 text-primary">{rating}</span>
                    </h3>
                <h3 className="lg:grid grid-cols-3 gap-2 text-xl font-medium">
                    <span className="">Delivery Time : </span> 
                    <span className="col-span-2 text-primary">{delivery} Days</span>
                    </h3>
                <h3 className="lg:grid grid-cols-3 gap-2 text-xl font-medium">
                    <span className="">Added by : </span> 
                    <span className="col-span-2 text-primary">{name}</span>
                    </h3>
                <h3 className="lg:grid grid-cols-3 gap-2 text-xl font-medium">
                    <span className="">Customization : </span> 
                    <span className="col-span-2 text-primary">{customization}</span>
                    </h3>
                <h3 className="lg:grid grid-cols-3 gap-2 text-xl font-medium">
                    <span className="">Price : </span> 
                    <span className="col-span-2 text-primary">${price}</span>
                    </h3>
                <h3 className="lg:grid grid-cols-3 gap-2 text-xl font-medium">
                    <span className="">Description : </span> 
                    <span className="col-span-2 text-primary">{description}</span>
                    </h3>
              <div className="pt-3 flex flex-col md:flex-row gap-3 ">
                <button className="btn lg:w-1/2 bg-[#ffa400] hover:bg-[#ffa400] text-black flex items-center gap-2">Add to Cart <IoCartSharp className="text-xl" /></button>
                <button className="btn lg:w-1/2 bg-[#ffa400] hover:bg-[#ffa400] text-black flex items-center gap-2 ">Add to Wishlist <FiHeart  className="text-xl" /></button>
                </div> 
               </div>
            </div>
        </div>
    );
};

export default ItemDetails;