import { useLoaderData } from "react-router-dom";
import MyEquitmentsCard from "./sections/MyEquitmentsCard";


const MyEquipment = () => {

const allData = useLoaderData() ;
console.log(allData)
    return (
        <div>
          <h1 className="text-center text-3xl  pb-10 my-5 font-bold text-primary">Equipments Added by : {allData[0].name}</h1>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"></div>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
    {
        allData.map(data => <MyEquitmentsCard data={data} key={data._id}></MyEquitmentsCard>)
    }
</div>

        </div>
    );
};

export default MyEquipment;