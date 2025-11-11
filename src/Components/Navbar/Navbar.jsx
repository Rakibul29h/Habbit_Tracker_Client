import React from "react";
import { Link, NavLink } from "react-router";
import UseAuth from "../../Hook/UseAuth";
import person from "../../assets/person.png";
import toast from "daisyui/components/toast";


const Navbar = () => {
  const { user, logOut, loading } = UseAuth();
  const handleSignOut = () => {
    logOut().catch((err) => {
      toast.error(err);
    });
  };

  const link = (
    <>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/addHabit"}>Add Habit</NavLink>
      <NavLink to={"/myHabit"}>My Habit</NavLink>

      <NavLink to={"/publicHabit"}>Browse Public Habits</NavLink>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu text-xl menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {link}
            </ul>
          </div>
          <Link to={"/"} className="btn btn-ghost text-xl">
            Habit Tracker
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu text-lg text-gray-500 font-semibold menu-horizontal px-1 flex gap-6">
            {link}
          </ul>
        </div>
        <div className="navbar-end">
          {loading ? (
            <span className="loading loading-dots loading-md mr-5"></span>
          ) : user ? (
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="px-4">
                {" "}
                <img
                  className="w-10 h-10 rounded-full "
                  src={user.photoURL ? user.photoURL : person}
                  alt=""
                />{" "}
              </div>
              <ul
                tabIndex="-1"
                className="dropdown-content mt-4 text-lg menu bg-base-100 rounded-box z-1 p-2 shadow-sm"
              >
                <li className="hover:bg-gray-200 py-2 px-3 rounded-lg">
                  {user?.displayName}
                </li>
                <li className="hover:bg-gray-200 py-2 px-3 rounded-lg">
                  {user?.email}
                </li>
                <li className="customBtn" onClick={handleSignOut}>
                  Sign Out
                </li>
              </ul>
            </div>
          ) : (
            <Link to={"/login"} className="btn customBtn">
              Sign In
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
