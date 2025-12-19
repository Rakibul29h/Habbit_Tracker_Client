import { useEffect, useState } from "react";
import { HabitCard } from "../../Components/Habit/HabitCard/HabitCard";
// import { SearchBar } from "../../Components/SearchBar/SearchBar";
import Loading from "../../Components/Loading/Loading";
import useAxiosSecure from "../../Hook/useSecureAxios";

const PublicHabit = () => {
  const [habits, setHabits] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("");
  const [loading, setLoading] = useState(true);
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    setLoading(true);
    axiosSecure
      .get(`/habit/public?search=${searchQuery}&filter=${filter}`)
      .then((res) => {
        setHabits(res.data);
      })
      .catch(() => {
        toast.error("Failed to load habits");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [searchQuery, filter]);

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
  };
  const handleFilter=(e)=>{
     setFilter(e.target.value);
  
  }

  return (
    <div className="min-h-[calc(100vh-64px)] pt-10 flex flex-col items-center gap-10">
      <div className="my-4 px-3  md:px-5">
        <h2 className="text-3xl md:text-4xl font-bold">
          Explore Community Habits
        </h2>
        <p className="my-2 text-lg text-gray-500">
          Discover habits shared by others and start building better routines
          today.
        </p>
      </div>
      <div className="w-full  gap-5 px-4 flex flex-col sm:flex-row justify-between sm:items-center">
        <div className=" w-full max-w-[400px]">
          <input
            type="text"
            placeholder="Search by habit title"
            className="input input-bordered  w-full rounded-sm bg-white/90 text-gray-800 placeholder-gray-400 focus:outline-none"
            onChange={handleChange}
          />
        </div>
        <div className="w-full max-w-[400px]">
          <fieldset className="fieldset w-full focus:outline-0">
            <select
              onChange={handleFilter}
              defaultValue={""}
              className="select outline-none w-full"
            >
              <option disabled value={""}>
                Filter
              </option>
             <option value="morning">Morning</option>
                <option value="work">Work</option>
                <option value="fitness">Fitness</option>
                <option value="evening">Evening</option>
                <option value="study">Study</option>
                <option value="health">Health</option>
                <option value="personal-growth">Personal Growth</option>
                <option value="sleep">Sleep</option>
                <option value="creativity">Creativity</option>
                <option value="learning">Learning</option>
            </select>
          </fieldset>
        </div>
      </div>
      {loading ? (
        <Loading></Loading>
      ) : (
        <div className="grid lg:grid-cols-3 gap-4 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 w-full px-4">
          {habits.length > 0 ? (
            habits.map((habit, index) => (
              <HabitCard key={index} habit={habit} />
            ))
          ) : (
            <div className="col-span-full text-center text-gray-600">
              <p className="text-lg">
                No habits found matching "{searchQuery}"
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PublicHabit;
