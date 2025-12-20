import React, { useEffect, useState } from "react";
import HHabitCard from "../HHabitCard/HHabitCard";
import toast from "react-hot-toast";
import useAxiosSecure from "../../../Hook/useSecureAxios";
import Loading from "../../Loading/Loading";

const HabitSection = () => {
  const [habits, setHabit] = useState([]);
  const axiosSecure = useAxiosSecure();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axiosSecure
      .get(`/habit-home`)
      .then((res) => {
        setHabit(res.data);
      })
      .catch(() => {})
      .finally(() => {
        setLoading(false);
      });
  }, []); 

 
  return (
    <div>
      <div className="my-10 md:my-20 px-1 md:px-5 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">Featured Habits</h2>
        <p className="my-2 text-lg text-gray-500">
          Explore the latest public habits created by users to stay motivated and productive.
        </p>
      </div>
      {
        loading?<Loading></Loading>: <div className="my-5 md:my-10 grid lg:grid-cols-3 gap-10 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 w-full px-4">
        {
            habits.map(habit=><HHabitCard key={habit._id} habit={habit}></HHabitCard>)
        }

      </div>
      }
     
    </div>
  );
};

export default HabitSection;
