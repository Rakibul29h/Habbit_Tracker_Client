import { Flame } from "lucide-react";
import React from "react";
import Logo from "../Shared/Logo/Logo";
import { Link } from "react-router";
import { FaDiscord, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
const Footer = () => {
 
  return (
    <footer
      className="bg-gray-900 text-white py-12 mt-12"
    >
      <div className="max-w-[1440px] mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center mb-4">
            <Logo></Logo>
          </div>
          <p className="text-gray-400 text-sm">
            Empowering you to build better habits, one day at a time.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-400 flex flex-col">
            <Link to={"/"} className="hover:text-white cursor-pointer">
              Home
            </Link>
            <Link
              to={"/publicHabit"}
              className="hover:text-white cursor-pointer"
            >
              Browse Habits
            </Link>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Legal</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="hover:text-white cursor-pointer">
              Terms & Conditions
            </li>
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer">Cookie Policy</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Contact</h4>
          <p className="text-gray-400 text-sm">support@habittracker.com</p>
          <p className="text-gray-400 text-sm mt-2">
            123 Productivity Lane, Focus City
          </p>
          <div className="flex space-x-4 mt-4">
            {/* Social Placeholders */}
            <div className="flex items-center justify-center w-8 h-8 bg-gray-700 rounded hover:bg-teal-600 cursor-pointer">
              <FaXTwitter />
            </div>
            <div className="flex items-center justify-center w-8 h-8 bg-gray-700 rounded hover:bg-teal-600 cursor-pointer">
              <FaLinkedinIn />
            </div>
            <div className="flex items-center justify-center w-8 h-8 bg-gray-700 rounded hover:bg-teal-600 cursor-pointer">
              <FaDiscord />
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} HabitTracker. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
