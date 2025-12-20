import React from "react";
import { Link } from "react-router";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import UseAuth from "../../Hook/UseAuth";
const Banner = () => {
  const { user } = UseAuth();
  const getStartBtn = (
    <div className="flex justify-center">
      <Link
        to={`${user ? "/publicHabit" : "/register"}`}
        className=" bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-8 rounded-full  transform hover:scale-105
transition-all duration-1000 ease-in-out  "
      >
        Get Started
      </Link>
    </div>
  );
  return (
    <div>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        interval={3000}
        showStatus={false}
        showThumbs={false}
        swipeable={true}
      >
        <div className="bg-teal-900 min-h-[90vh] flex justify-center items-center text-white">
          <div className=" container mx-auto px-6 py-20 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Build Better Habits, One Day at a Time
            </h1>
            <p className="max-w-2xl mx-auto text-lg mb-8">
              Track your daily habits, build powerful streaks, and boost your
              productivity with consistency.
            </p>
            {getStartBtn}
          </div>
        </div>
        <div className="bg-indigo-900 min-h-[90vh] flex justify-center items-center text-white">
          <div className="container mx-auto px-6 py-20 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Stay Consistent, See Real Progress
            </h1>
            <p className="max-w-2xl mx-auto text-lg mb-8">
              Visualize your daily progress, maintain streaks, and turn small
              actions into long-lasting habits that shape your future.
            </p>
            {getStartBtn}
          </div>
        </div>

        <div className="bg-gray-900 min-h-[90vh] text-white flex justify-center items-center ">
          <div className="container mx-auto px-6 py-20 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Turn Goals Into Daily Wins
            </h1>
            <p className="max-w-2xl mx-auto text-lg mb-8">
              Break your goals into simple daily habits, stay motivated, and
              build a healthier, more productive lifestyle step by step.
            </p>
            {getStartBtn}
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
