
import { useState } from "react";
import { Helmet } from "react-helmet";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { useLoaderData, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// import { toast } from "react-toastify";


const UpdateProduct = () => {

const data = useLoaderData() ;
const navigate = useNavigate() ;
const {_id,name,email,item, category,price,customization,description,stock,photo,rating,delivery} = data
const [ratings, setRatings] = useState(rating);
// console.log(data)

const handleUpdateProduct = e => {
    e.preventDefault() ;
    const form = e.target ;
    const name = form.name.value ;
    const email = form.email.value ;
    const item = form.item.value ;
    const category = form.category.value ;
    const price = form.price.value ;
    const customization = form.customization.value ;
    const description = form.description.value ;
    const stock = form.stock.value ;
    const photo = form.photo.value ;
    // const rating = form.rating.value ;
    const delivery = form.delivery.value ;
    // console.log(name,email,item, category,price,customization,description,stock,photo,rating,delivery) ;

    const updatedEquipment = {name,email,item, category,price,customization,description,stock,photo,rating:ratings,delivery}

fetch(`http://localhost:5000/equipments/id/${_id}`,{
    method: "PATCH",
    headers: {
        "Content-Type": "application/json",
      },
    body: JSON.stringify(updatedEquipment),
})
.then(res =>res.json())
.then(data => {
    // console.log(data)
    if(data.matchedCount > 0){
        toast.success("Item updated Successfully")
        form.reset() ;
navigate("/")
    }
})

}

    return (
        <div className="max-w-7xl mx-auto pt-7">
           <Helmet>
        <title>Sports Mart | Update Equipment</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
<h1 className="text-center text-3xl md:text-4xl font-bold text-primary">Update Equipment</h1>

<p className="mx-auto max-w-2xl text-center py-7 pb-12 text-gray-600">Admins can efficiently update product details, ensuring accurate and up-to-date information for better management and user experience.</p>

<div className="">
    <div className=" bg-base-100 w-full ">
      <form onSubmit={handleUpdateProduct} className="card-body gap-6 px-0">
      
      {/* name + email  */}
      <div className="flex gap-10 flex-col md:flex-row">
       <div className="form-control w-full flex-row items-center gap-3">
          <label className="label md:w-1/4">
            <span className="label-text">Name:</span>
          </label>
          <input name="name" type="text" value={name} readOnly className="input  w-full input-bordered text-primary" required />
        </div> 
        <div className="form-control w-full flex-row items-center gap-3">
          <label className="label md:w-1/4">
            <span className="label-text">Email:</span>
          </label>
          <input name="email" type="email" value={email} readOnly className="input  w-full input-bordered text-primary" required />
        </div> 
       </div>

      {/*item name + category  */}
      <div className="flex gap-10 flex-col md:flex-row">
        <div className="form-control w-full flex-row items-center gap-3">
          <label className="label md:w-1/4">
            <span className="label-text">Item Name:</span>
          </label>
          <input name="item" defaultValue={item} type="text" className="input  text-primary w-full input-bordered" required />
        </div>
        <div className="form-control w-full flex-row items-center gap-3">
          <label className="label md:w-1/4">
            <span className="label-text">Category:</span>
          </label>
          <select name="category" defaultValue={category} className="select select-bordered w-full  text-primary" required>
  <option disabled value=''>Select Category</option>
  <option value="Football">Football</option>
  <option value="Cricket">Cricket</option>
  <option value="Badminton">Badminton</option>
  <option value="Tennis">Tennis</option>
  <option value="Others">Others</option>
</select>
        </div>
       </div>

      {/* rating + delivery time  */}
       <div className="flex gap-10 flex-col md:flex-row">
       <div className="form-control w-full flex-row items-center gap-3">
          <label className="label md:w-1/4">
            <span className="label-text">Ratings:</span>
          </label>

          <Rating
          name="rating"
   className="text-yellow-500 text-xl"
   initialRating={rating}
   emptySymbol={<FaRegStar className="icon" />}
   fullSymbol={<FaStar className="icon" />}
   onChange={(value) => {setRatings(value)
    // console.log("Updated Ratings:", value);
   }}
   />

          {/* <input name="rating" type="text" defaultValue={rating} className="input  text-primary w-full input-bordered" required /> */}
        </div> 
        <div className="form-control w-full flex-row items-center gap-3">
          <label className="label md:w-1/4">
            <span className="label-text">Delivery Time (Days):</span>
          </label>
          <input name="delivery" type="text" defaultValue={delivery} className="input  text-primary w-full input-bordered" required />
        </div> 
       </div>
      
      {/* Stock + price  */}
       <div className="flex gap-10 flex-col md:flex-row">
       <div className="form-control w-full flex-row items-center gap-3">
          <label className="label md:w-1/4">
            <span className="label-text">Availability (pcs):</span>
          </label>
          <input name="stock" type="text" defaultValue={stock} className="input  text-primary w-full input-bordered" required />
        </div> 
        <div className="form-control w-full flex-row items-center gap-3">
          <label className="label md:w-1/4">
            <span className="label-text">Price-$:</span>
          </label>
          <input name="price" type="text" defaultValue={price} className="input  text-primary w-full input-bordered" required />
        </div> 
       </div>
     
      
      {/* photo + customization  */}
       <div className="flex gap-10 flex-col md:flex-row">
       <div className="form-control w-full flex-row items-center gap-3">
          <label className="label md:w-1/4">
            <span className="label-text">Photo-URL:</span>
          </label>
          <input name="photo" type="text" defaultValue={photo} className="input  text-primary w-full input-bordered" required />
        </div> 
        <div className="form-control w-full flex-row items-center gap-3">
          <label className="label md:w-1/4">
            <span className="label-text">Customization:</span>
          </label>
          <input name="customization" type="text" defaultValue={customization} className="input  text-primary w-full input-bordered" required />
        </div> 
       </div>
      
      {/* description  */}
      <div className="flex gap-10 flex-col md:flex-row">
       <div className="form-control w-full flex-row items-center gap-3 flex-wrap lg:flex-nowrap">
          <label className="label w-[9vw]">
            <span className="label-text">Description:</span>
          </label>
          <textarea name="description" defaultValue={description} className="textarea text-primary textarea-bordered w-full"></textarea>
        </div> 
</div>
        <div className="form-control mt-6">
          <button className="btn bg-[#ffa400] hover:bg-[#d58b00] text-black">Update Equipment</button>
        </div>
      </form>
    </div>
  </div>

        </div>
    );
};

export default UpdateProduct;