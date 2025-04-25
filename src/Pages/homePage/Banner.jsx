import { useNavigate } from "react-router-dom";
import students from "./../../assets/students.png";

import student from "./../../assets/bbb.png";

const Banner = () => {
  const navigate = useNavigate();
  return (
    <div className="hero bg-primary  lg:h-[540px] mt-16 overflow-y-hidden">
      <div className="hero-content px-8 flex-col-reverse md:flex-row-reverse">
        <div className="md:w-1/2 flex items-center justify-center">
          <img className=" lg:h-[540px]  " src={student} alt="" />
        </div>
        <div className="md:w-1/2 text-white">
          <h1 className="lg:text-5xl lg:w-4/5 md:w-2/3 w-3/4  text-4xl font-bold">
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
            className="btn bg-yellow-300 text-black hover:bg-yellow-500 px-6"
          >
            Explore
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
