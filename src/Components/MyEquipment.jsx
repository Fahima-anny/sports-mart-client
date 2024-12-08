import { useLoaderData } from "react-router-dom";
import MyEquitmentsCard from "./sections/MyEquitmentsCard";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { Fade } from "react-awesome-reveal";


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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"></div>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
<Fade
      direction="up"
      duration={2000}
      cascade
      damping={0.2}
      triggerOnce
      >
    {
        allData?.map(data =>
            <MyEquitmentsCard
             data={data}
              setAllData={setAllData}
               allData={allData} 
               key={data._id}></MyEquitmentsCard>)
    }
    </Fade>
</div>

        </div>
    );
};

export default MyEquipment;