/* eslint-disable react/no-unescaped-entities */

import { Link } from "react-router-dom";


const SportsCategory = () => {
    return (
        <div className="py-10">
            <h1 className="text-center text-3xl md:text-5xl font-bold text-primary">Choose by Category</h1>

<p className="mx-auto max-w-2xl text-center pt-7 pb-12 text-gray-600">Effortlessly find the perfect sports gear by selecting your favorite category. Explore tailored options designed to match your sport's needs!</p>

<div className="grid md:grid-cols-3 gap-5">
    <Link to='/' className="btn bg-[#ffa400] hover:bg-[#ce8600] text-black font-bold">Football</Link>
    <Link to='/' className="btn bg-[#ffa400] hover:bg-[#ce8600] text-black font-bold">Cricket</Link>
    <Link to='/' className="btn bg-[#ffa400] hover:bg-[#ce8600] text-black font-bold">Badminton</Link>
    <Link to='/' className="btn bg-[#ffa400] hover:bg-[#ce8600] text-black font-bold">Tennis</Link>
    <Link to='/' className="btn bg-[#ffa400] hover:bg-[#ce8600] text-black font-bold">Cycling</Link>
    <Link to='/' className="btn bg-[#ffa400] hover:bg-[#ce8600] text-black font-bold">Basketball</Link>
    <Link to='/' className="btn bg-[#ffa400] hover:bg-[#ce8600] text-black font-bold">Gym & Fitness</Link>
    <Link to='/' className="btn bg-[#ffa400] hover:bg-[#ce8600] text-black font-bold">Others</Link>
</div>

        </div>
    );
};

export default SportsCategory;