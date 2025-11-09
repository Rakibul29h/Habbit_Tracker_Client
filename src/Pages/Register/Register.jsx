import React from 'react';
import signupImage from '../../assets/SignUp.png'
import { Link, useNavigate } from 'react-router';
import UseAuth from '../../Hook/UseAuth';
import toast, { Toaster } from 'react-hot-toast';

const Register = () => {
  const {googleSign,setUser,createUser,updateUser}=UseAuth();

  const navigate=useNavigate();
   const googleHandle=(e)=>{
      e.preventDefault();
      googleSign()
      .then(result=>{
        console.log(result.user);
        setUser(result.user)
      })
      .catch(err=>console.log(err))
    }

    const handleForm=(e)=>{
      e.preventDefault();
      const name=e.target.name.value;
      const email=e.target.email.value;
      const photoUrl=e.target.photoUrl.value;
      const password=e.target.password.value;

 if (!/[A-Z]/.test(password)) {
  toast.error( "Password must contain at least one uppercase letter");
    return;
  }
  if (!/[a-z]/.test(password)) {
    toast.error("Password must contain at least one lowercase letter")
    return ;
  }
  if (!/^.{6,}$/.test(password)) {
    toast.error( "Password must be at least 6 characters long")
    return;
  }
      createUser(email,password)
      .then(result=>{
        const user=result.user;
        
        updateUser({displayName:name,photoURL:photoUrl})
        .then(()=>{
          setUser({...user,displayName:name,photoURL:photoUrl});
          navigate("/");
        }).catch(err=>
          toast.error("Something Went Wrong")
        )

      }).catch((err)=>{

        const msg = err.message.replace("Firebase: Error (auth/", "").replace(").", "");
  toast.error(msg|| "Somethings went wrong!");
      })

    }
    return (
           <div>
      <div className="hero min-h-screen">
        <div className="hero-content w-full  flex-col lg:flex-row-reverse">
          <div className="card bg-base-100 w-full flex-1 shadow-2xl">
            <div className="card-body">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center my-2 ">Sign Up</h2>
              <form className="fieldset text-lg" onSubmit={handleForm}>
                <label className="label">Name</label>
                <input
                  type="text"
                  className="input w-full focus:outline-none"
                  placeholder="Name"
                  name='name'
                />
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input w-full focus:outline-none"
                  placeholder="Email"
                  required
                  name='email'
                />
                                <label className="label">Photo URL</label>
                <input
                  type="text"
                  className="input w-full focus:outline-none"
                  placeholder="Photo Url"
                  name='photoUrl'
                />
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input w-full focus:outline-none"
                  placeholder="Password"
                  name='password'
                  required
                />
                <button className="customBtn btn mt-4 py-4 text-lg">Sign Up</button>
                <div className="text-gray-500">Already have an Account? <Link to={"/login"} className="text-blue-700 hover:text-blue-500 font-semibold">Sign In</Link> </div>
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
                  Sign Up with Google
                </button>
              </form>
            </div>
          </div>
          <div className="flex-1 lg:min-w-[450px]">
            <img className="w-[75%]" src={signupImage} alt="" />
          </div>
        </div>
      </div>
  
    </div>
    );
};

export default Register;