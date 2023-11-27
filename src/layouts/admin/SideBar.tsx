import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/circlelogo.png";
import control from "../../assets/control.png";
import search from "../../assets/Search.png";
import user from "../../assets/User.png";
import chart from "../../assets/Chart.png";
import chartFill from "../../assets/Chart_fill.png";
import folder from "../../assets/Folder.png";

const Sidebar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(true);
  const location = useLocation();
  const activeMenu = location.pathname;

  const Menus: { title: string; src: string; link: string; gap?: boolean }[] = [
    { title: "Dashboard", src: chartFill, link: "/admin/dashboard" },
    { title: "Activity Template", src: search, gap: true, link: "/admin/activity-template" },
    { title: "Area", src: user, link: "/admin/area" },
    { title: "Problem", src: chart, link: "/admin/problem" },
    { title: "Log Out", src: folder, gap: true, link: "/admin/logout" },
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
          alt="Control Icon"
        />
        <div className="flex gap-x-4 items-center">
          <Link to="/admin/dashboard" className="flex items-center w-full">
            <img
              src={logo}
              className={`cursor-pointer duration-500 ${open ? "rotate-[360deg]" : ""}`}
              alt="Logo"
            />
            <h1
              className={`text-white origin-left font-medium text-xl duration-200 ${
                !open ? "scale-0" : ""
              }`}
            >
              <h1 className="ml-5">Sidaya</h1>
            </h1>
          </Link>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex rounded-md p-2 cursor-pointer text-gray-300 text-sm items-center gap-x-4 
                ${Menu.gap ? "mt-9" : "mt-2"} ${activeMenu === Menu.link ? "bg-light-white" : ""}`}
            >
              <Link to={Menu.link} className="flex items-center w-full">
                <img src={Menu.src} alt={Menu.title} />
                <span className={`ml-2 ${!open ? "hidden" : ""} origin-left duration-200`}>
                  {Menu.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
