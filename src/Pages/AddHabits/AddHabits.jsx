import React from "react";
import UseAuth from "../../Hook/UseAuth";
import axios from "axios";
import useAxiosSecure from "../../Hook/useSecureAxios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";


const AddHabits = () => {
  const { user } = UseAuth();
  const axiosSecure=useAxiosSecure();
  const navigate=useNavigate()
  const handleHabit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const title = e.target.title.value;
    const description = e.target.description.value;
    const file = e.target.file.files[0];
    const time = e.target.time.value;
    const category = e.target.category.value;
    const visibility=e.target.visibility.value;
    const formData = new FormData();
    formData.append("image", file);
      toast.success("Adding Habit....")
  
    const result = await axios.post(`https://api.imgbb.com/1/upload?expiration=600&key=${ import.meta.env.VITE_imgBB}`
     ,
      formData
    );
    const photoURL = result.data.data.display_url;
    const newHabit = {
      name,
      email,
      title,
      description,
      category,
      photoURL,
      time,
      visibility,
      createdAt: new Date().toISOString(),
      streak:0,
      status:0,
    };
   

    axiosSecure.post("/habit",newHabit)
    .then((data)=>{
      if(data.data.insertedId)
      {
        toast.success("Habit added Successfully!")
        e.target.reset();
        navigate("/myHabit")
      }
    })
  };
  return (
    <div>
      <div className="card max-w-[1000px] mt-10 mx-auto shadow-2xl p-10">
        <form className="fieldset text-lg m-2 space-y-2" onSubmit={handleHabit}>
          <div className="flex flex-col md:flex-row gap-5">
            <div className="flex-1 space-y-2">
              <label className="label">Name</label>
              <br />
              <input
                type="text"
                className="input w-full focus:outline-none"
                placeholder="Enter Name"
                defaultValue={user.displayName}
                readOnly
                name="name"
              />
            </div>
            <div className="flex-1 space-y-2">
              <label className="label">Email</label>
              <br />
              <input
                type="email"
                className="input w-full focus:outline-none"
                placeholder="Email"
                defaultValue={user.email}
                readOnly
                name="email"
              />
            </div>
          </div>
          <label className="label">Title</label>
          <input
            type="text"
            className="input w-full focus:outline-none"
            placeholder="Enter Title"
            name="title"
          />
          <label className="label">Description</label>
          <textarea
            className="textarea focus:outline-none w-full h-24"
            name="description"
            placeholder="Description"
          ></textarea>

          <div className="flex flex-col md:flex-row gap-5">
            <div className="flex-1 space-y-2">
              <label className="label">Category</label>
              <br />
              <select
                defaultValue=""
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
              <input type="time" name="time" className="focus:outline-none input w-full" />
            </div>
          </div>
          <div className="flex gap-5">
            <div className="flex-1">
              <label className="label">Photo</label>
              <input type="file" name="file" className="file-input w-full" />
            </div>
            <div className="flex-1">
              <label className="label">Visibility</label>
              <div className="flex items-center gap-6 mt-1">
                <label className="flex text-lg items-center gap-2">
                  <input
                    type="radio"
                    name="visibility"
                    value="public"
                    defaultChecked
                    className=" accent-blue-600"
                  />
                  Public
                </label>
                <label className="flex text-lg items-center gap-2">
                  <input
                    type="radio"
                    name="visibility"
                    value="private"
                    className="accent-blue-500"
                  />
                  Private
                </label>
              </div>
            </div>
          </div>
          <div className="flex justify-center my-3">
            <button className="btn customBtn"> Add Habit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddHabits;
