import { useNavigate } from "react-router-dom";
import image1 from "./../../assets/Notes-min.jpg";
import image4 from "./../../assets/studying-in-library.jpg";
import { motion } from "motion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import banner1 from "./../../assets/aaron-burden-QJDzYT_K8Xg-unsplash.jpg";
import banner2 from "./../../assets/pexels-cottonbro-4778611.jpg";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Banner = () => {
  const navigate = useNavigate();
  return (
    <div className="lg:max-h-screen">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className="relative w-full h-[560px] bg-cover lg:min-h-screen"
            style={{
              backgroundImage: `url('${image1}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-white p-4">
              <div className="md:ml-12 lg:ml-24">
                <h1 className="text-3xl md:text-5xl text-white font-bold mb-4">
                  Your Digital <span className="text-blue-600">Study</span>{" "}
                  <br /> Room Awaits!
                </h1>
                <p className="lg:w-1/2 mb-6 text-orange-100">
                  Turn studying into a team effort! With interactive features
                  like shared assignments, peer reviews, and real-time
                  discussions, our platform is designed to make group study
                  seamless and productive. Join today and make learning a shared
                  adventure!
                </p>
                <button className="px-6 py-3 bg-green-500 hover:bg-orange-600 text-white font-semibold rounded-lg">
                  Explore
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="relative w-full h-[560px] lg:min-h-screen"
            style={{
              backgroundImage: `url('${banner1}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-white p-4">
              <div className="md:ml-12 lg:ml-24">
                <h1 className="text-3xl md:text-5xl text-white font-bold mb-4">
                  Connect, Study,{" "}
                  <span className="text-blue-600">Achieve!</span>
                </h1>
                <p className="lg:w-1/2 mb-6 text-orange-100">
                  Boost your learning experience by joining a study group!
                  Discuss topics, exchange notes, and get feedback on
                  assignments—all in one place. Whether you're working on a
                  tough project or revising for exams, teamwork makes studying
                  more effective and enjoyable.
                </p>
                <button className="px-6 py-3 bg-green-500 hover:bg-orange-600 text-white font-semibold rounded-lg">
                  Explore
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="relative w-full h-[560px]  lg:min-h-screen"
            style={{
              backgroundImage: `url('${banner2}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center text-white p-4">
              <div className="md:ml-12 lg:ml-24">
                <h1 className="text-3xl md:text-5xl text-white font-bold mb-4">
                  Collaborate, Learn, and <br />
                  <span className="text-blue-600">Succeed </span> Together
                </h1>
                <p className="lg:w-1/2 mb-6 text-orange-100">
                  Join our interactive platform to connect with friends, share
                  knowledge, and achieve academic excellence. Create
                  assignments, challenge your peers, and grow as a team. Make
                  learning fun and rewarding!
                </p>
                <button
                  onClick={() => {
                    navigate("/assignments");
                  }}
                  className="px-6 py-3 bg-green-500 hover:bg-orange-700 text-white font-semibold rounded-lg"
                >
                  Explore
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
    // <div className="hero bg-background min-h-screen overflow-x-hidden">
    //   <div className="hero-content lg:px-20 px-10 flex-col-reverse lg:flex-row-reverse">
    //     <div className="lg:w-1/2">
    //       <motion.img
    //         animate={{ x: [50, 0, 50] }}
    //         transition={{ duration: 20, repeat: Infinity }}
    //         className="rounded-tl-[50px] rounded-bl-[30px] border-l-8 border-b-8 border-yellow-300 rounded-br-[50px] h-64 lg:w-96"
    //         src={image1}
    //         alt=""
    //       />

    //       <motion.img
    //         animate={{ x: [0, 50, 0] }}
    //         transition={{ duration: 20, repeat: Infinity }}
    //         className="rounded-tl-[50px] rounded-bl-[30px] rounded-br-[50px] h-64 border-l-8 border-b-8 border-yellow-300 w-96"
    //         src={image4}
    //         alt=""
    //       />
    //     </div>
    //     <div className="lg:w-1/2 text-white">
    //       <h1 className="lg:text-5xl lg:w-4/5 md:w-2/3 w-3/4 text-3xl md:text-4xl font-bold">
    //         Collaborate, Learn, and{" "}
    //         <span className="text-yellow-300">Succeed</span> Together
    //       </h1>
    //       <p className="py-6">
    //         Join our interactive platform to connect with friends, share
    //         knowledge, and achieve academic excellence. Create assignments,
    //         challenge your peers, and grow as a team. Make learning fun and
    //         rewarding!
    //       </p>
    //       <button
    //         onClick={() => {
    //           navigate("/assignments");
    //         }}
    //         className="btn bg-yellow-300 hover:bg-yellow-500 px-6"
    //       >
    //         Explore
    //       </button>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Banner;
