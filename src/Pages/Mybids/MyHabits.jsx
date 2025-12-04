import React, { useEffect, useRef, useState } from "react";
import UseAuth from "../../Hook/UseAuth";
import useAxiosSecure from "../../Hook/useSecureAxios";
import { CircleCheck, CircleX, Edit, FilePenLine, Trash } from "lucide-react";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const MyHabits = () => {
  const { user } = UseAuth();
  const [habit, setHabit] = useState([]);
  const ModalRef = useRef(null);
  const [EditableHabit, setEditableHabit] = useState([]);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure.get(`/habit?email=${user?.email}`).then((data) => {
      setHabit(data.data);
    });
  }, [user, axiosSecure]);

  const handleComplete = (id) => {
    axiosSecure.patch(`/habit/${id}`).then((res) => {
      if (res.data.modifiedCount > 0) {
        setHabit((prev) =>
          prev.map((h) =>
            h._id === id ? { ...h, status: 1, streak: res.data.streak } : h
          )
        );
      }
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
    axiosSecure.patch(`/habit/${id}`, updatedData).then((res) => {
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
                      {item.status ? (
                        <div className="flex gap-2 ">
                          {" "}
                          <CircleCheck color="#008000" /> Completed{" "}
                        </div>
                      ) : (
                        <button
                          className="flex justify-center font-semibold hover:text-green-700"
                          onClick={() => handleComplete(item._id)}
                        >
                          {" "}
                          Complete{" "}
                        </button>
                      )}
                    </td>
                    <td>
                      <div className="flex gap-3 ">
                        <button
                          className="btn btn-outline btn-info"
                          onClick={() => handleEdit(item)}
                        >
                          <FilePenLine />
                        </button>
                        <button
                          className="btn btn-outline btn-error"
                          onClick={() => deleteHabit(item._id)}
                        >
                          <Trash />
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
        <span>No habit found</span>
      )}
    </div>
  );
};

export default MyHabits;
