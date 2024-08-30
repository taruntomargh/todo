import React, { useState } from "react";
import toast, { Toaster} from "react-hot-toast";

function Signin() {
    const [formData, setFormData] = useState({
      email: "",
      password: "",
    });
  
    function handleSignin(e) {
      e.preventDefault();
      toast.success("Signed In successfully");
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
          <h1 className="text-4xl font-bold">Signin</h1>
          <div>
            <form onSubmit={handleSignin} className="flex flex-col gap-4">             
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
              <button type="submit" className="p-2 text-white rounded bg-blue-500">Signin</button>
            </form>
            <Toaster />
          </div>
        </div>
      </div>
    );
  }

export default Signin;