import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function Todo() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  function handleChange(event) {
    setTask(event.target.value);
    console.log(task);
  }

  async function handleAddTask() {
    try {
      const response = await axios.post("http://localhost:8000/add", {
        data: {
          task: task,
        },
      });
      setTask("");
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchAllTasks() {
    try {
      const response = await axios.get("http://localhost:8000/");
      setTodos(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchAllTasks();
  }, []);

  return (
    <div className="flex flex-col h-screen w-screen">
      <Navbar />
      <div className="flex h-full w-full">
        <Sidebar />
        <div className="flex flex-col items-center w-full">
          <div className="flex gap-4 justify-center mt-8 w-[700px]">
            <input
              className="p-2 text-black bg-slate-200 rounded w-3/4 outline-none"
              type="text"
              placeholder="Add task"
              onChange={handleChange}
            />
            <button
              className="p-2 text-white rounded bg-blue-500"
              onClick={handleAddTask}
            >
              Add task
            </button>
          </div>
          <div className="flex flex-col gap-2 items-center mt-16 w-[700px]">
            {todos.map((todo) => (
              <div
                className="flex w-full p-2 m-0 bg-slate-200 rounded"
                key={todo.id}
              >
                <li className="p-2 text-black w-3/4">{todo.task}</li>
                <div className="flex gap-2">
                  <button className="p-2 text-white rounded bg-blue-500">
                    Edit
                  </button>
                  <button className="p-2 text-white rounded bg-red-500">
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Todo;
