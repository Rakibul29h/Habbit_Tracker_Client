import React from "react";
import UseAuth from "../../Hook/UseAuth";

const AddHabits = () => {
    const {user}=UseAuth();
  const handleHabit = (e) => {
    e.preventDefault();
    const name=e.target.name.value;
    const email=e.target.email.value;
    const title=e.target.title.value;
    const description=e.target.description.value;
    const file=e.target.file.files[0];
    const time=e.target.time.value;
    const newHabit={name,email,title,description,file,time};
    console.log(newHabit);
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
                defaultValue={user.displayName
                
                }
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
               <textarea className="textarea w-full h-24" name="description" placeholder="Description"></textarea>
               
              <div className="flex flex-col md:flex-row gap-5">
                <div className="flex-1 space-y-2">
                    <label  className="label">Photo</label>
                <br />
                
              <input type="file" name="file" className="file-input w-full" />
                </div>
                <div className="flex-1 space-y-2">

               <label  className="label">Remainder</label>
               <br />
               <input type="time" name="time" className="input w-full" />
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
