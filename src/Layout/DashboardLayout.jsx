import React from "react";
import Logo from "../Components/Shared/Logo/Logo";
import { Link, Outlet, useNavigate } from "react-router";
import {
  CircleUserRound,
  ClipboardList,
  LogOut,
  SquarePlus,
} from "lucide-react";
import UseAuth from "../Hook/UseAuth";
import toast from "daisyui/components/toast";

const DashboardLayout = () => {
  const { logOut } = UseAuth();
    const navigate=useNavigate();
  const handleSignOut = () => {
    logOut().catch((err) => {
      toast.error(err);
      navigate("/");
    });
  };
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Navbar */}
        <nav className="navbar w-full bg-base-200">
          <label
            htmlFor="my-drawer-4"
            aria-label="open sidebar"
            className="btn btn-square btn-ghost hover:bg-teal-400 hover:border-teal-400"
          >
            {/* Sidebar toggle icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              fill="none"
              stroke="currentColor"
              className="my-1.5 inline-block size-4"
            >
              <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
              <path d="M9 4v16"></path>
              <path d="M14 10l2 2l-2 2"></path>
            </svg>
          </label>
          <div className="px-4">
            <Logo></Logo>
          </div>
        </nav>
        {/* Page content here */}
        <Outlet></Outlet>
      </div>

      <div className="drawer-side is-drawer-close:overflow-visible shadow-sm">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="flex min-h-full flex-col items-start bg-base-100 is-drawer-close:w-14 is-drawer-open:w-64">
          {/* Sidebar content here */}
          <ul className="menu w-full grow">
            {/* List item */}
            <li>
              <Link
                to={"/"}
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right hover:bg-teal-300"
                data-tip="Homepage"
              >
                {/* Home icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                  className="my-1.5 inline-block size-4"
                >
                  <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                  <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                </svg>
                <span className="is-drawer-close:hidden">Homepage</span>
              </Link>
            </li>

            {/* List item */}
            <li>
              <Link
                to={"/dashboard/myHabit"}
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right hover:bg-teal-300"
                data-tip="My Habits"
              >
                <ClipboardList className="my-1.5 inline-block size-4"></ClipboardList>

                <span className="is-drawer-close:hidden">My Habits</span>
              </Link>
            </li>
            <li>
              <Link
                to={"/dashboard/addHabit"}
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right hover:bg-teal-300"
                data-tip="Add Habit"
              >
                <SquarePlus className="my-1.5 inline-block size-4"></SquarePlus>

                <span className="is-drawer-close:hidden">Add Habit</span>
              </Link>
            </li>
          </ul>
          <div className=" w-full">
            <ul className="menu w-full grow">
              <li>
                <Link
                  to={"/dashboard/profile"}
                  className="is-drawer-close:tooltip is-drawer-close:tooltip-right hover:bg-teal-300"
                  data-tip="Profile"
                >
                  <CircleUserRound className="my-1.5 inline-block size-4"></CircleUserRound>

                  <span className="is-drawer-close:hidden">My Profile</span>
                </Link>
              </li>
              <li onClick={() => handleSignOut()}>
                <button
                  className="is-drawer-close:tooltip is-drawer-close:tooltip-right hover:bg-teal-300"
                  data-tip="Log Out"
                >
                  <LogOut className="my-1.5 inline-block size-4"></LogOut>

                  <span className="is-drawer-close:hidden">Log Out</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
