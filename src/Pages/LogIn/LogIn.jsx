import React from "react";
import logInimage from "../../assets/LogIn.png";
import { Link } from "react-router";
import UseAuth from "../../Hook/UseAuth";
const LogIn = () => {

    const {googleSign,setUser}=UseAuth();
    const googleHandle=(e)=>{
      e.preventDefault();
      googleSign()
      .then(result=>{
        console.log(result.user);
        setUser(result.user)
      })
      .catch(err=>console.log(err))
    }
 
  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card bg-base-100 flex-1 shadow-2xl">
            <div className="card-body">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center my-2 ">Sign In</h2>
              <form className="fieldset text-lg m-2">
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
                <button className="btn bg-white text-black border-[#e5e5e5]" onClick={googleHandle}>
                  <svg
                    aria-label="Google logo"
                    width="16"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <g>
                      <path d="m0 0H512V512H0" fill="#fff"></path>
                      <path
                        fill="#34a853"
                        d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                      ></path>
                      <path
                        fill="#4285f4"
                        d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                      ></path>
                      <path
                        fill="#fbbc02"
                        d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                      ></path>
                      <path
                        fill="#ea4335"
                        d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                      ></path>
                    </g>
                  </svg>
                  Sign In with Google
                </button>
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
