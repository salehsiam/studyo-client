import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { useState } from "react";
import Loading from "../../loading/Loading";

const Register = () => {
  const { createUser, setUser, updateUserProfile, googleLogin } = useAuth();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const photo = form.photo.value;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        updateUserProfile({ displayName: name, photoURL: photo }).then(() => {
          navigate(location?.state ? location.state : "/");
          toast.success("successfully registered");
        });
      })
      .catch((error) => {});
  };

  const handleGoogleLogin = () => {
    googleLogin();
    navigate(location?.state ? location.state : "/");
  };

  return (
    <div className="flex pt-20 justify-center">
      <div className="px-7 py-12  bg-accent w-full max-w-lg shrink-0 shadow-2xl">
        <h2 className="logo text-center text-2xl lg:text-3xl">Studyo</h2>
        <p className="text-xl text-center my-5">Register your account</p>
        <div>
          <button
            onClick={handleGoogleLogin}
            className="w-full flex btn bg-transparent hover:text-white border border-primary hover:bg-primary text-lg font-normal"
          >
            <FcGoogle className="text-2xl" />
            Continue with Google
          </button>
        </div>
        <div className="divider">OR</div>
        <form onSubmit={handleRegister}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="url"
              name="photo"
              placeholder="photo url"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="name"
              className="input input-bordered"
              required
            />
          </div>
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
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-secondary hover:bg-primary  text-white">
              Register
            </button>
          </div>
        </form>
        <p className="text-center mt-4">
          Already have an account?{" "}
          <Link className="underline" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
