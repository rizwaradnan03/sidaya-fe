import { useState } from "react";
import logo from "../../assets/circlelogo.png"; 
import control from "../../assets/control.png"; 
import search from "../../assets/Search.png"; 
import user from "../../assets/User.png"; 
import chart from "../../assets/Chart.png"; 
import chartFill from "../../assets/Chart_fill.png"; 
import folder from "../../assets/Folder.png"; 



const Sidebar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(true);
  const Menus: any[] = [
    { title: "Dashboard", src: chartFill },
    { title: "Search Template", src: search, gap: true },  
    { title: "Accounts User", src: user  },
    { title: "Problem", src: chart },
    { title: "Log Out ", src: folder, gap: true },

  ];

  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-dark-purple h-screen p-5  pt-8 relative duration-300`}
      >
        <img
          src={control}
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src={logo}
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Sidaya
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              <img src={Menu.src} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-screen flex-1 p-7">
        <h1 className="text-2xl font-semibold ">Dashboard</h1>
      </div>
    </div>
  );
};
export default Sidebar;
