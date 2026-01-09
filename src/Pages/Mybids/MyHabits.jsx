import React, { useEffect, useRef, useState } from "react";
import UseAuth from "../../Hook/UseAuth";
import useAxiosSecure from "../../Hook/useSecureAxios";
import {
  CheckCircle2,
  Circle,
  CircleCheck,
  CircleX,
  Edit,
  Edit2,
  FilePenLine,
  Pencil,
  Trash,
  Trash2,
} from "lucide-react";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import Loading from "../../Components/Loading/Loading";
import Container from "../../Components/Shared/Container/Container";

const MyHabits = () => {
  const { user } = UseAuth();
  const [habit, setHabit] = useState([]);
  const ModalRef = useRef(null);
  const [EditableHabit, setEditableHabit] = useState([]);
  const axiosSecure = useAxiosSecure();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) return;

    setLoading(true);
    axiosSecure
      .get(`/habit?email=${user.email}`)
      .then((res) => {
        setHabit(res.data);
      })
      .catch(() => {
        toast.error("Failed to load habits");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [user, axiosSecure]);
  const handleComplete = (id) => {
    axiosSecure.patch(`/habit/${id}/complete`).then((res) => {
      
        setHabit((prev) =>
          prev.map((h) =>
            h._id === id ? { ...h, status: res.data.status, effectiveStreak: res.data.effectiveStreak } : h
          )
        );
      
    });
  };

  const closeModal = () => {
    ModalRef.current.close();
  };
  const handleEdit = (habit) => {
    setEditableHabit(habit);
    ModalRef.current.showModal();
    console.log(EditableHabit.visibility);
  };
  const updateHabit = (e) => {
    e.preventDefault();

    const title = e.target.title.value;
    const description = e.target.description.value;
    const time = e.target.time.value;
    const category = e.target.category.value;
    const visibility = e.target.visibility.value;
    const updatedData = {
      title,
      description,
      time,
      category,
      visibility,
    };
    const id = EditableHabit._id;
    axiosSecure.patch(`/habit/${id}/`, updatedData).then((res) => {
      if (res.data.modifiedCount) {
        closeModal();
        toast.success("UpdatedSuccessFully!");
        setHabit((prev) =>
          prev.map((h) =>
            h._id === id
              ? { ...h, title, description, time, category, visibility }
              : h
          )
        );
      }
    });
  };

  const deleteHabit = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`habit/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            setHabit((prev) => prev.filter((h) => h._id !== id));
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loading></Loading>
      </div>
    );
  return (
    <Container>
      <div className="my-4 md:my-10 w-full px-1 md:px-5 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">My habits</h2>
        <p className="my-2 text-lg text-gray-500">
          Small habits today, a better version of you tomorrow
        </p>
      </div>
      <div className="w-full">
        {habit?.length > 0 ? (
          <>
            <div className="overflow-x-auto my-10 md:my-15 px-2 md:px-5 h-full w-full">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-900">
                <thead className="bg-gray-50 dark:bg-gray-800 ">
                  <tr className="text-lg">
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-white uppercase tracking-wider">
                      Habit
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-white uppercase tracking-wider">
                      Category
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-white uppercase tracking-wider">
                      {" "}
                      Streak
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-white uppercase tracking-wider">
                      Created Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-white uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-600 divide-y divide-gray-200 dark:divide-gray-900">
                  {habit.map((item) => (
                    <tr key={item._id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                      <td className="px-6">{item.title}</td>
                      <td className="px-6">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-2xl bg-teal-100 text-teal-800">
                          {item.category}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-200 font-bold">
                        🔥{item.effectiveStreak}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-200">
                        {new Date(item.createdAt).toLocaleDateString("en-GB", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        })}
                      </td>

                      <td>
                        <div className=" pl-6 flex gap-3 ">
                          {item.status ? (
                            <button
                              className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-600 text-white ring-2 ring-emerald-300 transition hover:bg-emerald-700"
                              title="Completed"
                            >
                              <CheckCircle2 className="h-5 w-5" />
                            </button>
                          ) : (
                            <button
                              onClick={() => handleComplete(item._id)}
                              className="group flex h-9 w-9 items-center justify-center rounded-full border border-emerald-200 bg-emerald-50 text-emerald-600 transition hover:bg-emerald-100 hover:ring-2 hover:ring-emerald-300"
                              title="Mark as complete"
                            >
                              <Circle className="h-5 w-5 group-hover:hidden" />
                              <CheckCircle2 className="hidden h-5 w-5 group-hover:block" />
                            </button>
                          )}

                          <button
                            onClick={() => handleEdit(item)}
                            className={`flex h-9 w-9 items-center justify-center rounded-full border transition border-blue-200 bg-blue-50 text-blue-600 hover:bg-blue-100 hover:ring-2 hover:ring-blue-300`}
                            title={"Edit task"}
                          >
                            <Pencil className="h-4.5 w-4.5" />
                          </button>

                          <button
                            onClick={() => deleteHabit(item._id)}
                            className="flex h-9 w-9 items-center justify-center rounded-full border border-rose-200 bg-rose-50 text-rose-600 transition hover:bg-rose-100 hover:ring-2 hover:ring-rose-300"
                            title="Delete task"
                          >
                            <Trash2 className="h-4.5 w-4.5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <dialog
              ref={ModalRef}
              className="modal modal-bottom sm:modal-middle w-full"
            >
              <div className="modal-box max-w-[900px]">
                <div className="flex justify-end">
                  <button onClick={closeModal} className="p-2">
                    <CircleX />
                  </button>
                </div>
                <form
                  className="fieldset text-lg m-2 space-y-2"
                  onSubmit={updateHabit}
                >
                  <label className="label">Title</label>
                  <input
                    type="text"
                    className="input w-full focus:outline-none"
                    defaultValue={EditableHabit.title}
                    placeholder="Enter Title"
                    name="title"
                  />
                  <label className="label">Description</label>
                  <textarea
                    className="textarea focus:outline-none w-full h-24"
                    name="description"
                    placeholder="Description"
                    defaultValue={EditableHabit.description}
                  ></textarea>

                  <div className="flex flex-col md:flex-row gap-5">
                    <div className="flex-1 space-y-2">
                      <label className="label">Category</label>
                      <br />
                      <select
                        defaultValue={EditableHabit.category}
                        name="category"
                        className="select m-1 outline-none focus:outline-none w-full"
                      >
                        <option disabled value="Select Category">
                          Select Category
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
                    </div>
                    <div className="flex-1 space-y-2">
                      <label className="label">Remainder</label>
                      <br />
                      <input
                        type="time"
                        name="time"
                        defaultValue={EditableHabit.time}
                        className="focus:outline-none input w-full"
                      />
                    </div>
                  </div>
                  <div className="flex gap-5">
                    <div className="flex-1">
                      <label className="label">Visibility</label>
                      <div className="flex items-center gap-6 mt-1">
                        <label className="flex text-lg items-center gap-2">
                          <input
                            type="radio"
                            name="visibility"
                            value="public"
                            checked={EditableHabit?.visibility === "public"}
                            onChange={() =>
                              setEditableHabit((prev) => ({
                                ...prev,
                                visibility: "public",
                              }))
                            }
                            className=" accent-blue-600"
                          />
                          Public
                        </label>
                        <label className="flex text-lg items-center gap-2">
                          <input
                            type="radio"
                            name="visibility"
                            value="private"
                            checked={EditableHabit?.visibility === "private"}
                            onChange={() =>
                              setEditableHabit((prev) => ({
                                ...prev,
                                visibility: "private",
                              }))
                            }
                            className="accent-blue-500"
                          />
                          Private
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center my-3">
                    <button className="btn customBtn"> Update</button>
                  </div>
                </form>
              </div>
            </dialog>
          </>
        ) : (
          <span className="mx-5 sm:mx-20 text-center"> No habits found</span>
        )}
      </div>
    </Container>
  );
};

export default MyHabits;
