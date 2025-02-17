import Lottie from "lottie-react";
import error from "./../assets/lottie/error.json";

const Error = () => {
  return (
    <div className="bg-accent min-h-screen">
      <div className="flex flex-col justify-center items-center">
        <Lottie className="" animationData={error} loop={true} />
        <h2 className="text-3xl font-semibold">404 Error</h2>
      </div>
    </div>
  );
};

export default Error;
