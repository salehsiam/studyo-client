import { useNavigate } from "react-router-dom";
import image1 from "./../../assets/student-studying.jpg";
import image4 from "./../../assets/studying-in-library.jpg";
import { motion } from "motion/react";

const Banner = () => {
  const navigate = useNavigate();
  return (
    <div className="hero bg-green-900 min-h-screen overflow-x-hidden">
      <div className="hero-content lg:px-20 px-10 flex-col-reverse lg:flex-row-reverse">
        <div className="lg:w-1/2">
          <motion.img
            animate={{ x: [50, 0, 50] }}
            transition={{ duration: 20, repeat: Infinity }}
            className="rounded-tl-[50px] rounded-bl-[30px] border-l-8 border-b-8 border-yellow-300 rounded-br-[50px] h-64 lg:w-96"
            src={image1}
            alt=""
          />

          <motion.img
            animate={{ x: [0, 50, 0] }}
            transition={{ duration: 20, repeat: Infinity }}
            className="rounded-tl-[50px] rounded-bl-[30px] rounded-br-[50px] h-64 border-l-8 border-b-8 border-yellow-300 w-96"
            src={image4}
            alt=""
          />
        </div>
        <div className="lg:w-1/2 text-white">
          <h1 className="lg:text-5xl lg:w-4/5 md:w-2/3 w-3/4 text-3xl md:text-4xl font-bold">
            Collaborate, Learn, and{" "}
            <span className="text-yellow-300">Succeed</span> Together
          </h1>
          <p className="py-6">
            Join our interactive platform to connect with friends, share
            knowledge, and achieve academic excellence. Create assignments,
            challenge your peers, and grow as a team. Make learning fun and
            rewarding!
          </p>
          <button
            onClick={() => {
              navigate("/assignments");
            }}
            className="btn bg-yellow-300 hover:bg-yellow-500 px-6"
          >
            Explore
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
