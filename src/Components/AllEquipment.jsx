import { useLoaderData } from "react-router-dom";
import TableRow from "./sections/TableRow";


const AllEquipment = () => {

    const allItem = useLoaderData() ;
    console.log(allItem)

    return (
        <div>
          <div className="overflow-x-auto ">
  <table className="table table-xs text-center">
    <thead className="text-primary pb-3 h-[70px]">
      <tr>
        <th></th>
        <th>Item Name</th>
        <th>Category</th>
        <th>Stock Status</th>
        <th>Ratings</th>
        <th>Delivery Time</th>
        <th>Price</th>
        <th >Details</th>
      </tr>
    </thead>
    <tbody>

{
allItem.map((prod,idx) => <TableRow 
key={prod._id}
 idx={idx} 
 prod={prod}
 ></TableRow>) 
}



   </tbody>
  
  </table>
</div>
        </div>
    );
};

export default AllEquipment;