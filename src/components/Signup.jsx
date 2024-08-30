import React, { useState } from "react";
import toast, { Toaster} from "react-hot-toast";

function Signup() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  function handleSignup(e) {
    e.preventDefault();
    toast.success("Signed up successfully");
  }

  function handleChange(event) {
    let name = event.target.name;
    let value = event.target.value;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <div className="flex w-screen h-screen p-4">
      <img
        src="../../public/todo.jpg"
        alt="Todo"
        className="w-1/2 h-full rounded-lg"
      />
      <div className="flex flex-col justify-center items-center w-1/2 gap-16">
        <h1 className="text-4xl font-bold">Signup</h1>
        <div>
          <form onSubmit={handleSignup} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="firstName" className="text-md ">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="Enter first name"
                onChange={handleChange}
                className="p-2 rounded-md border-2 border-slate-200 outline-red-400"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="lastName" className="text-md ">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Enter last name"
                onChange={handleChange}
                className="p-2 rounded-md border-2 border-slate-200 outline-red-400"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="text-md ">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter email"
                onChange={handleChange}
                className="p-2 rounded-md border-2 border-slate-200 outline-red-400"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="password" className="text-md ">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter password"
                onChange={handleChange}
                className="p-2 rounded-md border-2 border-slate-200 outline-red-400"
              />
            </div>
            <button type="submit" className="p-2 text-white rounded bg-blue-500">Signup</button>
          </form>
          <Toaster />
        </div>
      </div>
    </div>
  );
}

export default Signup;
