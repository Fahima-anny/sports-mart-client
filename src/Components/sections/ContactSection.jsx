import Lottie from "lottie-react";
import Animation from "./contact-us.json";
import { useEffect, useRef } from "react";
import { Fade } from "react-awesome-reveal";
import Swal from "sweetalert2";
import emailjs from 'emailjs-com';

const ContactSection = () => {

const ref = useRef() ;

  useEffect(()=> {
ref.current.play()
  },[])

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;
    console.log(email, message);

    emailjs
        .send(
            "service_cpq7311", // Replace with your EmailJS service ID
            "template_tjal17m", // Replace with your EmailJS template ID
            {
                name: name, // Matches {{name}} in your template
                email: email, // Matches {{email}} in your template
                message: message, // Matches {{message}} in your template
            },
            "So5gNmJiB96adK6Wa" // Replace with your EmailJS public key
        )
        .then(
            (response) => {
                console.log("SUCCESS!", response.status, response.text);
                // alert("Message sent successfully!");
                Swal.fire({
                    icon: "success",
                    title: "Message Sent",
                    // text: "I have got your message & will reply you soon",
                    showConfirmButton: false,
                    timer: 1500
                });
                form.reset(); // Clear the form after submission
            },
            (error) => {
                console.error("FAILED...", error);
                // alert("Message failed to send. Please try again.");
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong! Try again",
                });
            }
        );

}


    return (
        <div>


<div className="grid md:grid-cols-2 gap-10 py-10 items-center justify-between">
     <Fade
        direction="left"
        duration={1600}
        cascade
        >
    <div className="">

    <Lottie
    lottieRef={ref}
            className=""
            animationData={Animation} loop={true} />

       {/* <img 
       className="w-full"
       src='https://i.ibb.co.com/zN6J82W/49643.png' alt="" />  */}
    </div>
    </Fade>

    <Fade
        direction="right"
        duration={1600}
        cascade
        >
    <div>
    <h1 className=" text-3xl font-bold text-primary pb-2">Write to us</h1>

{/* <p className="mx-auto max-w-2xl py-7 text-gray-600">Have questions or need assistance? Reach out to us anytime—our team is here to help you with your needs!</p> */}
    <form onSubmit={handleSubmit} className="card-body p-0">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Your Name" name="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="Your Email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control pt-3">
          <label className="label">
            <span className="label-text">Message</span>
          </label>
          <textarea placeholder="Write here" name="message" className="textarea textarea-bordered" required></textarea>

        </div>
        <div className="form-control mt-6">
          <button className="btn bg-[#ffa400] hover:bg-[#d58b00] text-black">Send Message</button>
        </div>
      </form>
    </div>
    </Fade>
</div>
        </div>
    );
};

export default ContactSection;