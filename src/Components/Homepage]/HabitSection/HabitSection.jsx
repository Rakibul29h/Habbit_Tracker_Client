import React, { useEffect, useState } from "react";
import HHabitCard from "../HHabitCard/HHabitCard";
import useAxiosSecure from "../../../Hook/useSecureAxios";
import Loading from "../../Loading/Loading";
import Container from "../../Shared/Container/Container";
import { useNavigate } from "react-router";
import { ArrowRight } from "lucide-react";

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

  const navigate=useNavigate();
 
  return (

    <Container>
       <div>
      <div className="my-10 md:my-20 mx-1 md:mx-0  text-center">
        <h2 className="text-3xl md:text-4xl font-bold">Featured Habits</h2>
        <p className="my-2 text-lg text-gray-500">
          Explore the latest public habits created by users to stay motivated and productive.
        </p>
      </div>
      {
        loading?<Loading></Loading>: <div className="my-5 md:my-10 grid lg:grid-cols-4 gap-10 md:grid-cols-3 sm:grid-cols-2  grid-cols-1 w-full ">
        {
            habits.map(habit=><HHabitCard key={habit._id} habit={habit}></HHabitCard>)
        }

      </div>
      }

      <div className="flex w-full justify-center">
        <button className="text-teal-600 font-bold gap-2 hover:text-teal-700 dark:hover:text-teal-500 flex items-center" onClick={()=>navigate("/publicHabit")}>See More <ArrowRight size={18} /></button>
      </div>
     
    </div> 
    </Container>
  
  );
};

export default HabitSection;
