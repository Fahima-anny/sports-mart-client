import { useLoaderData } from "react-router-dom";
import TableRow from "./sections/TableRow";


const AllEquipment = () => {

    const allItem = useLoaderData() ;
    console.log(allItem)

    return (
        <div>
          <div className="overflow-x-auto py-10">
  <table className="table table-xs">
    <thead className="text-primary pb-3 h-[60px]">
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>company</th>
        <th>location</th>
        <th>Last Login</th>
        <th>Last Login</th>
        <th className="">Details</th>
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