import React, { useEffect, useState } from "react";
import UseAuth from "../../Hook/UseAuth";
import useAxiosSecure from "../../Hook/useSecureAxios";
import { CircleCheck } from 'lucide-react';
const MyHabits = () => {
  const { user } = UseAuth();
  const [habit, setHabit] = useState([]);


  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure.get(`/habit?email=${user?.email}`).then((data) => {
      setHabit(data.data);
    });
  }, [user, axiosSecure]);

  const handleComplete=(id)=>{
    console.log("completed Button Clicked")  
    axiosSecure.patch(`/habit/${id}`)
    .then(res=>{
        if (res.data.modifiedCount > 0) {
        setHabit((prev) =>
          prev.map((h) =>
            h._id === id ? { ...h, status: 1 } : h
          )
        );
      }
    })

  }
  return (
    <div>
      {habit.length > 0 ? (
        <>
          <div className="overflow-x-auto h-full w-full">
            <table className="table table-xs table-pin-rows table-pin-cols">
              <thead>
                <tr>
                  <th>SL No</th>
                  <td>Title</td>
                  <td>Category</td>
                  <td>Current Streak</td>
                  <td>Created Date</td>
                  <td>Status</td>
                  <td>Action</td>
                </tr>
              </thead>
              <tbody className="item-center">
                {habit.map((item, index) => (
                  <tr key={item._id} className="text-[1rem]">
                    <td>{index + 1}</td>
                    <td>{item.title}</td>
                    <td>{item.category}</td>
                    <td className="px-10">{item.streak || 0}</td>
                    <td>
                      {new Date(item.createdAt).toLocaleDateString("en-GB", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })}
                    </td>
                    <td>
                     {
                        item.status?<div className="flex gap-2 "> <CircleCheck color="#008000" /> Completed </div>  :<button className="flex justify-center font-semibold hover:text-green-700" onClick={()=>handleComplete(item._id)}> Complete </button>  
                    }
                    </td>
                    <td>edit and delete</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <span>No habit found</span>
      )}
    </div>
  );
};

export default MyHabits;
