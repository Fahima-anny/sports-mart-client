import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { Fade } from "react-awesome-reveal";
import TableRow from "./sections/TableRow";


const MyEquipment = () => {

const loadedData = useLoaderData() ;
const [allData,setAllData] = useState(loadedData)
// console.log(allData)
    return (
        <div className="max-w-7xl mx-auto py-10">
          {/* <h1 className="text-center text-3xl  pb-10 my-5 font-bold text-primary">Equipments Added by : {allData[0].name}</h1> */}
          <Helmet>
        <title>Sports Mart | My Equipments</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>


<div className="">
<Fade
      direction="up"
      duration={2000}
      cascade
      damping={0.2}
      triggerOnce
      >


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
 setAllData={setAllData}
 allData={allData}
 ></TableRow>) 
}



   </tbody>
  
  </table>
</div>


    {/* {
        allData?.map(data =>
            <MyEquitmentsCard
             data={data}
              setAllData={setAllData}
               allData={allData} 
               key={data._id}></MyEquitmentsCard>)
    } */}
    </Fade>
</div>

        </div>
    );
};

export default MyEquipment;