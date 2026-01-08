import { Check, ChevronLeft, Flame } from "lucide-react";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useAxiosSecure from "../../Hook/useSecureAxios";
import { useNavigate, useParams } from "react-router";
import UseAuth from "../../Hook/UseAuth";

const Details = () => {
  const [habit, setHabit] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();
  const {user}=UseAuth()
  const handleComplete = (id) => {
    axiosSecure.patch(`/habit/${id}/complete`).then((res) => {
      setHabit((prev) => ({
        ...prev,
        status: res.data.status,
        effectiveStreak: res.data.effectiveStreak,
        progress: res.data.progress,
      }));
    });
  };
  useEffect(() => {
    setLoading(true);
    axiosSecure
      .get(`/singleHabit/${id}`)
      .then((res) => {
        setHabit(res.data);
      })
      .catch(() => {
        toast.error("Failed to load habits");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  const getStreakBadge = (streak) => {
    if (streak >= 30) return { name: "Streak Master", icon: "👑" };
    if (streak >= 14) return { name: "Habit Champ", icon: "🏆" };
    if (streak >= 7) return { name: "Weekly Warrior", icon: "⚡" };
    if (streak >= 3) return { name: "Consistency Spark", icon: "🔥" };
    if (streak >= 1) return { name: "Fresh Start", icon: "🌱" };
    return null;
  };

  return (
    <div>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <button
          onClick={() => handleGoBack()}
          className="mb-4 text-teal-600 hover:underline flex items-center"
        >
          <ChevronLeft size={16} />
          Go Back{" "}
        </button>

        <div className=" rounded-xl shadow-lg dark:shadow-white/20 overflow-hidden flex flex-col md:flex-row">
          <div className="md:w-1/3 h-64 md:h-auto relative">
            <img
              src={habit.photoURL}
              alt={habit.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
              <Flame size={14} className="text-orange-500" />{" "}
              {habit.effectiveStreak} Day Streak
            </div>
          </div>

          <div className="p-8 md:w-2/3 flex flex-col">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                  {habit.title}
                </h1>
                <span className="inline-block bg-teal-100 text-teal-800 text-xs px-2 py-1 rounded-full mt-2 font-semibold">
                  {habit.category}
                </span>
              </div>
            </div>

            <p className="mt-6 text-gray-600 dark:text-white/60 text-lg leading-relaxed">
              {habit.description}
            </p>

            <div className="mt-8">
              <div className="flex justify-between text-sm mb-1 font-medium text-gray-600 dark:text-white/70">
                <span>Consistency (Last 30 Days)</span>
                <span>{Math.round(habit.progress)}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-teal-600 h-2.5 rounded-full transition-all duration-1000"
                  style={{ width: `${habit.progress}%` }}
                ></div>
              </div>
            </div>

            <div className="mt-auto pt-8 flex items-center justify-between">
              <div className="flex  items-center gap-4">
                <div className=" rounded-full bg-indigo-100 px-2 flex items-center justify-center text-indigo-700 font-bold">
                  {habit.name}
                </div>
                <div className="text-sm">
                  <p className="text-gray-900 font-medium">
                    {habit.creatorName}
                  </p>

                  <div className="flex flex-col justify-center">
                    {/* steak Badge */}
                    <p className="text-gray-500 text-2xl">
                      {getStreakBadge(habit.effectiveStreak) &&
                        getStreakBadge(habit.effectiveStreak).icon}
                    </p>
                    <p className="text-gray-500">
                      {getStreakBadge(habit.effectiveStreak) &&
                        getStreakBadge(habit.effectiveStreak).name}
                    </p>
                  </div>
                </div>
              </div>
                        {
                          user && <button
                onClick={() => handleComplete(habit._id)}
                disabled={habit.status === 1}
                className={`px-6 py-3 rounded-lg font-bold shadow-md transition transform active:scale-95 flex items-center gap-2 ${
                  habit.status
                    ? "bg-green-100 text-green-700 cursor-default"
                    : "bg-teal-600 text-white hover:bg-teal-700 hover:shadow-lg"
                }`}
              >
                {habit.status ? (
                  <>
                    <Check size={20} /> Completed Today
                  </>
                ) : (
                  "Mark Complete"
                )}
              </button>
                        }
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
