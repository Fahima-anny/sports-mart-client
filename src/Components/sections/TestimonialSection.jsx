import { useState } from "react";

import ClientsCard from "./ClientsCard";
import Marquee from "react-fast-marquee";

const TestimonialSection = () => {

const [clientData, setClientData] = useState([]) ;

fetch("review.json")
.then(res => res.json())
.then(data =>{
    setClientData(data)
})
// console.log(clientData)

    return (
        <div className=" py-16">
            <h1 className="text-center text-3xl md:text-5xl font-bold text-primary">Happy Clients</h1>

<p className="mx-auto max-w-2xl text-center pt-7 pb-12 text-gray-600">Explore genuine client reviews and testimonials, showcasing their experiences and satisfaction with our products and services.</p>


<div className="">
<Marquee
pauseOnHover={true}
>
{
    clientData.map(data => <ClientsCard key={data.id} data={data}></ClientsCard>)
}
</Marquee>
</div>

        </div>
    );
};

export default TestimonialSection;