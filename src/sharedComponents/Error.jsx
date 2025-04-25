import Lottie from "lottie-react";
import error from "./../assets/lottie/error.json";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="bg-accent min-h-screen">
      <div className="flex flex-col justify-center items-center">
        <Lottie className="" animationData={error} loop={true} />
        <h2 className="text-3xl font-semibold">404 Error</h2>
        <Link to="/">
          <button className="mt-6 mb-12 px-4 py-2 bg-secondary text-white rounded-lg shadow-lg">
            Go to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
