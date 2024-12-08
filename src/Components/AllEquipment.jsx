import { useLoaderData } from "react-router-dom";
import TableRow from "./sections/TableRow";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { Fade } from "react-awesome-reveal";



const AllEquipment = () => {

    const allItem = useLoaderData() ;
    // console.log("non sorted",allItem)

const [allData, setAllData] = useState([...allItem])

const handleSort = (e) => {
  // console.log(e.target.value)

if(e.target.value === "ascending" ){
  const desSorted = [...allItem].sort((a,b)=> a.price - b.price) ;
  setAllData(desSorted)
}
else{
  const asSorted = [...allItem].sort((a,b)=> b.price - a.price) ;
  setAllData(asSorted)
}
  // console.log(allItemSorted)
  // console.log("sorted",allData)
}

    return (
        <div className="max-w-7xl mx-auto py-7">
      <Fade
      direction="up"
      duration={2000}
      cascade
      damping={0.2}
      triggerOnce
      >
 <Helmet>
        <title>Sports Mart | All Equipments</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
<div className="flex flex-col md:flex-row justify-between gap-3 py-5">
  <h3 className="font-semibold text-xl">Sort Items By Price :</h3>
  {/* <button onClick={handleSort} className="btn btn-outline flex gap-2 items-center"> <IoMdArrowDropdown className="text-2xl" />
  </button> */}
  <select defaultValue='sort' onChange={handleSort} className="select select-bordered w-full max-w-xs">
  <option disabled value='sort'>Sort By Price</option>
  <option value='descending'>High-Low 
  </option>
  <option value='ascending'>Low-High 
  </option>
</select>
</div>

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
allData.map((prod,idx) => <TableRow 
key={prod._id}
 idx={idx} 
 prod={prod}
 ></TableRow>) 
}



   </tbody>
  
  </table>
</div>
</Fade>
        </div>
    );
};

export default AllEquipment;