import React from "react";
import { Link, useNavigate } from "react-router";
import UseAuth from "../../Hook/UseAuth";
import toast, { Toaster } from "react-hot-toast";

import SocialLogIn from "../../Components/SocialLogin/SocialLogIn";
import useAxiosSecure from "../../Hook/useSecureAxios";


const Register = () => {
  const { setUser, createUser, updateUser } = UseAuth();

  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();

  const handleForm = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photoUrl = e.target.photoUrl.value;
    const password = e.target.password.value;

    if (!/[A-Z]/.test(password)) {
      toast.error("Password must contain at least one uppercase letter");
      return;
    }
    if (!/[a-z]/.test(password)) {
      toast.error("Password must contain at least one lowercase letter");
      return;
    }
    if (!/^.{6,}$/.test(password)) {
      toast.error("Password must be at least 6 characters long");
      return;
    }
    createUser(email, password)
      .then((result) => {
        const user = result.user;

        updateUser({ displayName: name, photoURL: photoUrl })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photoUrl });
            const newUser = { name: name, email: email, photoURL: photoUrl };

            axiosSecure.post("/users", newUser).then(() => {});

            toast.success("Account created Successfully");
             e.target.reset();
            navigate("/");
          })
          .catch(() => toast.error("Something Went Wrong"));
          
      })
      .catch((err) => {
        const msg = err.message
          .replace("Firebase: Error (auth/", "")
          .replace(").", "");
        toast.error(msg || "Somethings went wrong!");
      });
  
  };
  return (
    <div>
      <div className="hero px-5 min-h-screen">
    
          <div className="card sm:max-w-[500px] bg-base-100 w-full border border-gray-100 shadow-2xl">
            <div className="card-body">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center my-2 ">
                Sign Up
              </h2>
              <form className="fieldset " onSubmit={handleForm}>
                <label className="label">Name</label>
                <input
                  type="text"
                  className="input w-full focus:outline-none"
                  placeholder="Name"
                  name="name"
                />
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input w-full focus:outline-none"
                  placeholder="Email"
                  required
                  name="email"
                />
                <label className="label">Photo URL</label>
                <input
                  type="text"
                  className="input w-full focus:outline-none"
                  placeholder="Photo Url"
                  name="photoUrl"
                />
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input w-full focus:outline-none"
                  placeholder="Password"
                  name="password"
                  required
                />
                <button className="customBtn1 btn mt-4 py-4 ">
                  Sign Up
                </button>
                <div className="text-gray-500">
                  Already have an Account?{" "}
                  <Link
                    to={"/login"}
                    className="text-blue-700 hover:text-blue-500 font-semibold"
                  >
                    Sign In
                  </Link>{" "}
                </div>
                <div className="text-center">or</div>
                <SocialLogIn></SocialLogIn>
              </form>
            </div>
          </div>
        
     
      </div>
    </div>
  );
};

export default Register;
