import React from "react";
import { Link } from "react-router";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
const Banner = () => {
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
      <div className="bg-linear-to-r from-orange-200 to-lime-800 min-h-[90vh] flex justify-center items-center text-primary-content">
        <div className=" container mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Build Better Habits, One Day at a Time
          </h1>
          <p className="max-w-2xl mx-auto text-lg mb-8">
            Track your daily habits, build powerful streaks, and boost your
            productivity with consistency.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/add-habit" className="btn bg-lime-400 hover:scale-105">
              Get Started
            </Link>
            <Link to="/public-habits" className="customBtn">
              Browse Habits
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-linear-to-r from-lime-300 to-teal-600 min-h-[90vh] flex justify-center items-center text-primary-content">
        <div className="container mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Stay Consistent, See Real Progress
          </h1>
          <p className="max-w-2xl mx-auto text-lg mb-8">
            Visualize your daily progress, maintain streaks, and turn small
            actions into long-lasting habits that shape your future.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/add-habit" className="btn bg-lime-400 hover:scale-105">
              Get Started
            </Link>
            <Link to="/public-habits" className="customBtn">
              Browse Habits
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-linear-to-r from-teal-200 to-indigo-800 min-h-[90vh] text-primary-content flex justify-center items-center ">
        <div className="container mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Turn Goals Into Daily Wins
          </h1>
          <p className="max-w-2xl mx-auto text-lg mb-8">
            Break your goals into simple daily habits, stay motivated, and build
            a healthier, more productive lifestyle step by step.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/add-habit" className="btn bg-lime-400 hover:scale-105">
              Get Started
            </Link>
            <Link to="/public-habits" className="customBtn">
              Browse Habits
            </Link>
          </div>
        </div>
      </div>
      </Carousel>
    </div>
  );
};

export default Banner;
