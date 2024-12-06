import Lottie from "lottie-react";
import Animation from "../../../public/contact - 1733475013407.json";


const ContactSection = () => {
    return (
        <div>


<div className="grid md:grid-cols-2 gap-10 py-10 items-center justify-between">
    <div className="">

    <Lottie
            className=""
            animationData={Animation} loop={true} />

       {/* <img 
       className="w-full"
       src='https://i.ibb.co.com/zN6J82W/49643.png' alt="" />  */}
    </div>
    <div>
    <h1 className=" text-3xl font-bold text-primary">Write to us</h1>

<p className="mx-auto max-w-2xl py-7 text-gray-600">Have questions or need assistance? Reach out to us anytime—our team is here to help you with your needs!</p>
    <form className="card-body p-0">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control pt-3">
          <label className="label">
            <span className="label-text">Message</span>
          </label>
          <textarea placeholder="Write here" className="textarea textarea-bordered" required></textarea>

        </div>
        <div className="form-control mt-6">
          <button className="btn bg-[#ffa400] hover:bg-[#d58b00] text-black">Send</button>
        </div>
      </form>
    </div>
</div>
        </div>
    );
};

export default ContactSection;