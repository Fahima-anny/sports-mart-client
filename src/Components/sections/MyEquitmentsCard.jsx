/* eslint-disable react/prop-types */

import { FaEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const MyEquitmentsCard = ({data,allData,setAllData}) => {

    const {_id,item, category,price,photo,rating,delivery} = data

const handleDelete = () => {
    // console.log("delete : ",_id) ;

    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {

            fetch(`https://sports-mart-server-gamma.vercel.app/equipments/id/${_id}`, {
                method: "DELETE"
            })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if(data.deletedCount > 0){
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                    const remaining = allData.filter(d => d._id !== _id) ;
                    setAllData(remaining) ;
                }
            })

        }
      });

}

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
<div className="grid grid-cols-2 gap-2 ">
<p>Category: {category}</p>
<p className="">Delivery Time: {delivery}</p>
</div>
<div className="grid grid-cols-2 gap-2">
          <p>Price: ${price}</p>
          <p>Rating: {rating}</p>
          </div>
          <div className="grid grid-cols-2 gap-3 mt-3 justify-center">
     <Link
      to={`/updateProduct/${_id}`}
       className="flex gap-2 items-center btn bg-[#ffa400] hover:bg-[#cc8500] text-black">
        Update <FaEdit className="text-xl" /></Link>
        <button 
        className="btn bg-[#ffa400] hover:bg-[#ce8600] text-black flex items-center gap-1"
        onClick={handleDelete}
        >Delete
         <MdOutlineDelete  className="text-2xl" />
         </button>
          </div>
        </div>
      </div>
    );
};

export default MyEquitmentsCard;