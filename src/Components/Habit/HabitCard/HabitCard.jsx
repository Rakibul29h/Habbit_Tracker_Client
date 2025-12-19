export const HabitCard = ({ habit }) => {
  return (
    <div className={`px-5 py-5 border border-gray-200 bg-base-100 rounded-box shadow-md `}>
      <div
        className={`flex justify-between  `}
      >
        <div className="flex gap-5">
          <div>
            <img
              className="size-10 rounded-box"
              src={
                habit.photoURL ||
                "https://img.daisyui.com/images/profile/demo/1@94.webp"
              }
              alt={habit.title || "No Title"}
            />
          </div>
          <div>
            <div className="font-bold">{habit?.title}</div>
            <div className="text-xs uppercase font-semibold opacity-60">
              {habit.category || "No Category"}
            </div>
          </div>
        </div>
        <div>
          <button className="btn btn-square btn-ghost w-full px-2 bg-gray-200 cursor-pointer ">View Details</button>
        </div>
      </div>
    </div>
  );
};
