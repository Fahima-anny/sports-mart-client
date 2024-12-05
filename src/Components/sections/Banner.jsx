import { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Banner = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);

    const onAutoplayTimeLeft = (s, time, progress) => {
        if (progressCircle.current && progressContent.current) {
            progressCircle.current.style.setProperty('--progress', 1 - progress);
            progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
        }
    };

    return (
        <div className="relative">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper w-full h-[80vh]"
            >
                {/* Swiper Slides with images */}
                <SwiperSlide>
                <div
  className="hero h-full rounded-lg "
  style={{
    backgroundImage: "url(https://i.ibb.co.com/t4nNYJS/badminton-concept-with-racket-shuttlecock.jpg)",
  }}>
  <div className="hero-overlay bg-black bg-opacity-40 rounded-lg"></div>
  <div className="hero-content text-white text-center">
    <div className="max-w-md">
    <h1 className="mb-5 text-5xl font-bold">Your Sports Partner</h1>
      <p className="mb-5">
      Discover everything from fitness essentials to professional equipment, making us your trusted partner in every sports journey.
      </p>
      <a href="#productSection"><button  className="btn bg-[#ffa400] hover:bg-[#ffa400] border-0 text-black">Get Started</button></a>
    </div>
  </div>
</div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
  className="hero  h-full rounded-lg"
  style={{
    backgroundImage: "url(https://i.ibb.co.com/nz19Htx/sports-tools.jpg)",
  }}>
  <div className="hero-overlay bg-black bg-opacity-60 rounded-lg"></div>
  <div className="hero-content text-white text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Gear Up Today!</h1>
      <p className="mb-5">
      Explore premium sports gear crafted for durability, comfort, and performance to help you excel in every game.
      </p>
      <a href="#productSection"><button  className="btn bg-[#ffa400] hover:bg-[#ffa400] border-0 text-black">Get Started</button></a>
    </div>
  </div>
</div>
                </SwiperSlide>
                <SwiperSlide>
                <div
  className="hero  h-full rounded-lg"
  style={{
    backgroundImage: "url(https://i.ibb.co.com/B6qSzXf/cricket-match-with-player.jpg)",
  }}>
  <div className="hero-overlay bg-black bg-opacity-40 rounded-lg"></div>
  <div className="hero-content text-white text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Train Like a Pro</h1>
      <p className="mb-5">
      Find high-quality equipment designed to support your training, boost endurance, and take your athletic skills to new heights.
      </p>
      <a href="#productSection"><button  className="btn bg-[#ffa400] hover:bg-[#ffa400] border-0 text-black">Get Started</button></a>
    </div>
  </div>
</div>
                </SwiperSlide>
                <SwiperSlide>
                <div
  className="hero  h-full rounded-lg"
  style={{
    backgroundImage: "url(https://i.ibb.co.com/CVbgJDP/american-football-american-football-player-professional-sport-stadium.jpg)",
  }}>
  <div className="hero-overlay bg-black bg-opacity-40 rounded-lg"></div>
  <div className="hero-content text-white text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Play Hard, Win Big</h1>
      <p className="mb-5">
      Get durable sports gear tailored for peak performance and ultimate victory, no matter your sport or skill level.
      </p>
      <a href="#productSection"><button  className="btn bg-[#ffa400] hover:bg-[#ffa400] border-0 text-black">Get Started</button></a>
    </div>
  </div>
</div>
                </SwiperSlide>
         
                <div
                    className="autoplay-progress absolute bottom-5 right-5 flex items-center justify-center z-50"
                    slot="container-end"
                >
                    <svg
                        viewBox="0 0 48 48"
                        ref={progressCircle}
                        className="w-12 h-12 transform -rotate-90"
                    >
                        <circle
                            cx="24"
                            cy="24"
                            r="20"
                            className="stroke-white stroke-[4] fill-none -z-50"
                            style={{
                                strokeDasharray: "126",
                                strokeDashoffset: "calc(var(--progress, 1) * 126)",
                                transition: "stroke-dashoffset 0.25s linear",
                            }}
                        ></circle>
                    </svg>
                    <span
                        ref={progressContent}
                        className="absolute text-sm text-white font-bold"
                    ></span>
                </div>
            </Swiper>
        </div>
    );
};

export default Banner;
