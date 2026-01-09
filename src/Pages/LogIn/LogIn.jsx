import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import UseAuth from "../../Hook/UseAuth";

import { toast } from 'react-hot-toast';
import SocialLogIn from "../../Components/SocialLogin/SocialLogIn";
const LogIn = () => {


    const {setUser,signIn,loading}=UseAuth();
  const navigate=useNavigate();
  const location=useLocation();
 
  const handleDemo=()=>{
    signIn("mdrakibulislamh10@gmail.com","mdrakibulislamh10@gmail.coM")
      .then(result=>{
        setUser(result.user);
        toast.success("Log In successful!")
        navigate(`${location.state ? location.state: "/"}`);
      }).catch(err=>{
        console.log(err);
       
      })
  }
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

    if(loading) return <div className="w-full h-screen flex justify-center items-center bg-gray-700 text-white opacity-30"><span className="font-bold text-2xl">Loading</span><span className="loading loading-dots loading-md mr-5"></span></div>
 
  return (
    <div>
      <div className="hero px-5 min-h-screen w-full">

          <div className="card bg-base-100 w-full sm:max-w-[500px] border border-gray-100 shadow-2xl">
            <div className="card-body">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center my-2 ">Sign In</h2>
                <button onClick={()=>handleDemo()} className="btn hover:bg-teal-600 btn-outline my-5">Click here for Demo Sign In</button>
              <form className="fieldset  m-2" onSubmit={handleLogIn}>
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
                <button className="customBtn1 btn mt-4 ">Sign In</button>
                <div className="text-gray-500">New to our website? <Link to={"/register"} className="text-blue-700 hover:text-blue-500 font-semibold">Sign Up</Link> </div>
                <div className="text-center">or</div>
              <SocialLogIn></SocialLogIn>
              </form>
            </div>
          </div>
        </div>
      </div>

  );
};

export default LogIn;
