/* eslint-disable react/prop-types */
import { AiFillDelete } from "react-icons/ai";
import { FaEye, FaRegEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";



const TableRow = ({prod, idx, setAllData, allData}) => {


const {_id,item, category,price,stock,rating,delivery} = prod ;


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
        <tr className=" h-[50px] font-medium">
        <th>{idx+1}</th>
        <td>{item}</td>
        <td>{category}</td>
        <td>{stock}</td>
        <td>{rating}</td>
        <td>{delivery}</td>
        <td>${price}</td>
        <td className=" flex gap-1 justify-center">
           <Link to={`/productDetails/${_id}`}><button className="p-2 bg-blue-200 hover:bg-blue-300 duration-300 rounded-lg"><FaEye className="text-2xl"/></button>
           </Link> 
         <Link 
          to={`/updateProduct/${_id}`} >
         <button  className="p-2 bg-green-200 hover:bg-green-300 duration-300 rounded-lg"><FaRegEdit className="text-2xl"/></button>
         </Link>
           <button onClick={handleDelete} className="p-2 bg-red-300 hover:bg-red-400 duration-300 rounded-lg"><AiFillDelete className="text-2xl"/></button>
        </td>
      </tr>
    );
};

export default TableRow;