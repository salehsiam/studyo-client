import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import toast from "react-hot-toast";

const Login = () => {
  const { userLogin, googleLogin, setUser } = useAuth();
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    userLogin(email, password)
      .then((result) => {
        const user = { email: email };
        navigate(location?.state ? location.state : "/");
        toast.success("successfully login");
      })
      .catch((error) => {});
  };

  const handleGoogleLogin = () => {
    googleLogin().then((res) => {
      navigate(location?.state ? location.state : "/");
      toast.success("successfully login");
    });
  };
  return (
    <div className="flex justify-center pt-20">
      <div className="px-7 py-12  bg-accent w-full max-w-lg shrink-0 shadow-2xl">
        <h2 className="logo text-center text-2xl lg:text-3xl">Studyo</h2>
        <p className="text-xl text-center my-5">Sign in to your account</p>
        <div>
          <button
            onClick={handleGoogleLogin}
            className="w-full flex btn bg-transparent border border-green-900 hover:bg-primary hover:text-white text-lg font-normal"
          >
            <FcGoogle className="text-2xl" />
            Continue with Google
          </button>
        </div>
        <div className="divider">OR</div>
        <form onSubmit={handleLogin}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-secondary hover:bg-primary  text-white">
              Login
            </button>
          </div>
        </form>
        <p className="text-center mt-4">
          Don't have a account?{" "}
          <Link className="underline" to="/register">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
