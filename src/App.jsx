import React from "react";
import  {RouterProvider, createBrowserRouter} from "react-router-dom";
import Todo from "./components/Todo";
import Signup from "./components/Signup";
import Signin from "./components/Signin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Todo />
  },
  {
    path: "/signup",
    element: <Signup />
  },
  {
    path: "/signin",
    element: <Signin />
  },
]);

function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
