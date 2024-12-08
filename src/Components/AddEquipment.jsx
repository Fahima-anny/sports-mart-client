import { useContext, useState } from "react";
import { AuthContext } from "../AuthProviders/AuthProvider";
import { toast } from "react-toastify";
import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import { Fade } from "react-awesome-reveal";


const AddEquipment = () => {

    const {user} = useContext(AuthContext) ;
    const [rating, setRating] = useState(0);

const handleAdd = e => {
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
    // const rating = rating.value ;
    const delivery = form.delivery.value ;
    // console.log(name,email,item, category,price,customization,description,stock,photo,"rating: ",rating,delivery) ;
    const newEquipment = {name,email,item, category,price,customization,description,stock,photo,rating,delivery}

fetch("https://sports-mart-server-gamma.vercel.app/equipments",{
    method: "POST",
    headers: {
        "Content-Type": "application/json",
      },
    body: JSON.stringify(newEquipment),
})
.then(res =>res.json())
.then(data => {
    // console.log(data)
    if(data.insertedId){
        toast.success("New Item Added")
        form.reset() ;
    }
})

}

    return (
        <div className="max-w-7xl mx-auto pt-7">
 <Helmet>
        <title>Sports Mart | Add Equipment</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <Fade
      direction="up"
      duration={2000}
      cascade
      damping={0.2}
      triggerOnce
      >
<h1 className="text-center text-3xl md:text-4xl font-bold text-primary">Add Equipment</h1>

<p className="mx-auto max-w-2xl text-center py-7 text-gray-600">Admins can seamlessly add new products with detailed information, expanding the inventory and enhancing the shopping experience for users</p>

           <div className="">
    <div className=" bg-base-100 w-full ">
      <form onSubmit={handleAdd} className="card-body gap-6 px-0">
      
      {/* name + email  */}
      <div className="flex gap-10 flex-col md:flex-row">
       <div className="form-control w-full flex-row items-center gap-3">
          <label className="label md:w-1/4">
            <span className="label-text">Name:</span>
          </label>
          <input name="name" type="text" value={user.displayName} readOnly className="input  w-full input-bordered text-primary" required />
        </div> 
        <div className="form-control w-full flex-row items-center gap-3">
          <label className="label md:w-1/4">
            <span className="label-text">Email:</span>
          </label>
          <input name="email" type="email" value={user.email} readOnly className="input  w-full input-bordered text-primary" required />
        </div> 
       </div>

      {/*item name + category  */}
      <div className="flex gap-10 flex-col md:flex-row">
        <div className="form-control w-full flex-row items-center gap-3">
          <label className="label md:w-1/4">
            <span className="label-text">Item Name:</span>
          </label>
          <input name="item" type="text" className="input  text-primary w-full input-bordered" required />
        </div>
        <div className="form-control w-full flex-row items-center gap-3">
          <label className="label md:w-1/4">
            <span className="label-text">Category:</span>
          </label>
          <select name="category" defaultValue='' className="select select-bordered w-full  text-primary" required>
  <option disabled value='' >Select Category</option>
  <option value="Football">Football</option>
  <option value="Cricket">Cricket</option>
  <option value="Badminton">Badminton</option>
  <option value="Tennis">Tennis</option>
  <option value="Cycling">Cycling</option>
  <option value="Basketball">Basketball</option>
  <option value="Gym & Fitness">Gym & Fitness</option>
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
   initialRating={0}
   emptySymbol={<FaRegStar className="icon" />}
   fullSymbol={<FaStar className="icon" />}
   onChange={(value) => setRating(value)}
   />

          {/* <input name="rating" type="text"  className="input  text-primary w-full input-bordered" required /> */}
        </div> 
        <div className="form-control w-full flex-row items-center gap-3">
          <label className="label md:w-1/4">
            <span className="label-text">Delivery Time (Days):</span>
          </label>
          <input name="delivery" type="text"  className="input  text-primary w-full input-bordered" required />
        </div> 
       </div>
      
      {/* Stock + price  */}
       <div className="flex gap-10 flex-col md:flex-row">
       <div className="form-control w-full flex-row items-center gap-3">
          <label className="label md:w-1/4">
            <span className="label-text">Availability (pcs):</span>
          </label>
          <input name="stock" type="text"  className="input  text-primary w-full input-bordered" required />
        </div> 
        <div className="form-control w-full flex-row items-center gap-3">
          <label className="label md:w-1/4">
            <span className="label-text">Price-$:</span>
          </label>
          <input name="price" type="text"  className="input  text-primary w-full input-bordered" required />
        </div> 
       </div>
     
      
      {/* photo + customization  */}
       <div className="flex gap-10 flex-col md:flex-row">
       <div className="form-control w-full flex-row items-center gap-3">
          <label className="label md:w-1/4">
            <span className="label-text">Photo-URL:</span>
          </label>
          <input name="photo" type="text"  className="input  text-primary w-full input-bordered" required />
        </div> 
        <div className="form-control w-full flex-row items-center gap-3">
          <label className="label md:w-1/4">
            <span className="label-text">Customization:</span>
          </label>
          <input name="customization" type="text"  className="input  text-primary w-full input-bordered" required />
        </div> 
       </div>
      
      {/* description  */}
      <div className="flex gap-10 flex-col md:flex-row">
       <div className="form-control w-full flex-row items-center gap-3 flex-wrap lg:flex-nowrap">
          <label className="label w-[9vw]">
            <span className="label-text">Description:</span>
          </label>
          <textarea name="description" className="textarea text-primary textarea-bordered w-full"></textarea>
        </div> 
</div>
        <div className="form-control mt-6">
          <button className="btn bg-[#ffa400] hover:bg-[#d58b00] text-black">Add Equipment</button>
        </div>
      </form>
    </div>
  </div>
  </Fade>
</div>
    );
};

export default AddEquipment;