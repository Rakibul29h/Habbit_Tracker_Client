import { useEffect, useState } from "react";
import Loading from "../../Components/Loading/Loading";
import toast from "react-hot-toast";
import HHabitCard from "../../Components/Homepage]/HHabitCard/HHabitCard";
import useAxios from "../../Hook/useAxios";
import Container from "../../Components/Shared/Container/Container";

const PublicHabit = () => {
  const [habits, setHabits] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("");
  const [loading, setLoading] = useState(true);
   const [currentPage, setCurrentPage] = useState(0);
  const limit = 12;
  const axiosSecure = useAxios();
  useEffect(() => {
    setLoading(true);
    axiosSecure
      .get(`/habit/public?search=${searchQuery}&filter=${filter}&limits=${limit}&skip=${currentPage * limit}`)
      .then((res) => {
        setHabits(res.data.habit);
        setTotalPage(Math.ceil(res.data.totalHabit / limit));
      })
      .catch(() => {
        toast.error("Failed to load habits");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [searchQuery, filter,currentPage]);

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
  };
  const handleFilter = (e) => {
    setFilter(e.target.value);
  };

  return (
    <Container>
      <div className="min-h-[calc(100vh-64px)] pt-10 flex flex-col items-center  gap-10">
        <div className="flex flex-col sm:flex-row w-full justify-between">
          <div className="my-4 px-3  md:px-5">
            <h2 className="text-3xl md:text-4xl font-bold">
              Browse Public Habits
            </h2>
          </div>
          <div className=" md:px-10 gap-5 px-4 flex flex-col sm:flex-row justify-between sm:items-center">
            <div className=" w-full min-w-[200px]">
              <label className="input w-full focus:outline-none outline-none">
                <svg
                  className="h-[1em] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                  </g>
                </svg>
                <input
                  type="search"
                  onChange={handleChange}
                  placeholder="Search"
                  className="w-full"
                />
              </label>
            </div>
            <div className="w-full">
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
        </div>
        {loading ? (
          <Loading></Loading>
        ) : (
          <div>
          <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-4 sm:grid-cols-2 grid-cols-1  w-full px-4">
            {habits.length > 0 ? (
              habits.map((habit, index) => (
                <HHabitCard key={index} habit={habit} />
              ))
            ) : (
              <div className="col-span-full text-center text-gray-600">
                <p className="text-lg">
                  No habits found matching "{searchQuery}"
                </p>
              </div>
            )}
          </div>
   <div className="flex w-full justify-center gap-5 flex-wrap my-10">
        <button
          className={`btn ${currentPage === 0 && "hidden"}`}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          prev
        </button>
        {[...Array(totalPage).keys()].map((i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i)}
            className={`btn ${i === currentPage && "btn-primary text-white"}`}
          >
            {i}
          </button>
        ))}
        <button
          className={`btn ${(currentPage === totalPage - 1 || totalPage===0) && "hidden"}`}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          {" "}
          next{" "}
        </button>
      </div>
    
          </div>
        )}
      </div>
    </Container>
  );
};

export default PublicHabit;
