import { useLoaderData } from "react-router-dom";


const MyEquipment = () => {

const allData = useLoaderData() ;

    return (
        <div>
            my equipment : {allData.length}
        </div>
    );
};

export default MyEquipment;