import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";


const About = () => {
    return (
        <div className="py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-2 gap-8">
          <Fade
                direction="left"
                duration={1600}
                cascade
                >
        <div className="text-left">
          <h1 className="text-5xl font-bold text-blue-600">About Us</h1>
          <p className="mt-6 text-xl text-gray-600">
            We are committed to providing the best sports equipment to athletes of all skill levels. Our goal is to ensure top-quality products with exceptional customer service.
          </p>
          <div className="mt-8">
            <h3 className="text-2xl font-bold text-gray-700">Our Mission</h3>
            <p className="mt-4 text-lg text-gray-600">
            Our mission is to provide athletes with premium-quality sports equipment that enhances performance, durability, and confidence. We are committed to supporting all levels of athletes, fostering a love for sports, and ensuring exceptional customer service with every purchase.
            </p>
            <Link to='/allEquipment' className="btn bg-[#ffa400] hover:bg-[#d28900] text-black mt-6">Shop Now</Link>
          </div>
        </div>
        </Fade>

          <Fade
                direction="right"
                duration={1600}
                cascade
                >
        <div>
          <img className="rounded-lg" src="https://i.ibb.co.com/stgjPjx/1740019.webp" alt="Sports Equipment" />
        </div>
        </Fade>
      </div>
    </div>
    );
};

export default About;