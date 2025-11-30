import React from "react";
import logInimage from "../../assets/LogIn.png";
import { Link, useLocation, useNavigate } from "react-router";
import UseAuth from "../../Hook/UseAuth";

import { toast } from 'react-hot-toast';
import SocialLogIn from "../../Components/SocialLogin/SocialLogIn";
const LogIn = () => {

    const {setUser,signIn}=UseAuth();
  const navigate=useNavigate();
  const location=useLocation();
 
    const handleLogIn=(e)=>{
      e.preventDefault();

      const email=e.target.email.value;
      const password=e.target.password.value;
      signIn(email,password)
      .then(result=>{
        setUser(result.user);
        toast.success("Log In successful!")
        navigate(`${location.state ? location.state: "/"}`);
      }).catch(err=>{
        console.log(err);
      })
    }

 
  return (
    <div>
      <div className="hero min-h-screen w-full">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card bg-base-100 flex-1 shadow-2xl">
            <div className="card-body">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center my-2 ">Sign In</h2>
              <form className="fieldset text-lg m-2" onSubmit={handleLogIn}>
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input w-full focus:outline-none"
                  placeholder="Email"
                  name="email"
                />
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input w-full focus:outline-none"
                  placeholder="Password"
                  name="password"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="customBtn btn mt-4 text-lg">Sign In</button>
                <div className="text-gray-500">New to our website? <Link to={"/register"} className="text-blue-700 hover:text-blue-500 font-semibold">Sign Up</Link> </div>
                <div className="text-center">or</div>
              <SocialLogIn></SocialLogIn>
              </form>
            </div>
          </div>
          <div className="flex-1 lg:min-w-[450px]">
            <img className="w-[75%]" src={logInimage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
