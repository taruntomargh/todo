import { CiCircleChevRight, CiCirclePlus } from "react-icons/ci";

function Sidebar() {
  return (
    <div className="w-1/4 border-2 border-r-slate-200 p-2 flex flex-col gap-4">
      <div className="p-2 text-white rounded bg-blue-500 w-full flex gap-2 justify-center items-center cursor-pointer">
      <button className="">
        Create List
      </button>
      <CiCirclePlus size={"1.3em"} style={{fontWeight: "bold"}} />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-lg text-center">Lists</h3>
        <ul className="flex flex-col gap-1">
          <li className="p-2 text-white rounded bg-slate-500 w-full flex cursor-pointer">
            <button className="w-1/2 text-center">
              Work
            </button>
            <div className="w-1/2 flex justify-center">
            <CiCircleChevRight size={"1.3em"} />
            </div>
          </li>
          <li className="p-2 text-white rounded bg-slate-500 w-full flex cursor-pointer">
          <button className="w-1/2 text-center">
              Shopping
            </button>
            <div className="w-1/2 flex justify-center">
            <CiCircleChevRight size={"1.3em"} />
            </div>
          </li>
          <li className="p-2 text-white rounded bg-slate-500 w-full flex cursor-pointer">
          <button className="w-1/2 text-center">
              Exercise
            </button>
            <div className="w-1/2 flex justify-center">
            <CiCircleChevRight size={"1.3em"} />
            </div>
          </li>
          <li className="p-2 text-white rounded bg-slate-500 w-full flex cursor-pointer">
          <button className="w-1/2 text-center">
              Hobbies
            </button>
            <div className="w-1/2 flex justify-center">
            <CiCircleChevRight size={"1.3em"} />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
