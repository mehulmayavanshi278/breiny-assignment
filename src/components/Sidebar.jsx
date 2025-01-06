import React, { useEffect, useState } from "react";
import {
  Assignment,
} from "@mui/icons-material";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [activeTab, setActiveTab] = useState();

  const toggleSidebar = () => setIsOpen(!isOpen);

  const menuItems = [
    { name: "task 1", icon: <Assignment /> },
    { name: "task 2", icon: <Assignment /> },
    { name: "task 3", icon: <Assignment /> },
    { name: "task 4", icon: <Assignment /> },
    { name: "task 5", icon: <Assignment /> },
  ];

  useEffect(()=>{
     const url=window.location.href.split("user/");
     setActiveTab(url[1]?.replace('task' , "task "))
  },[]);

  return (

 
      <div
        className={`${
          isOpen ? "w-64" : "w-16"
        } bg-gray-800 text-white h-screen transition-width duration-300`}
      >
    
        <div className="flex items-center justify-between p-4">
          {isOpen && <h1 className="text-lg font-bold">user</h1>}
          <button
            onClick={toggleSidebar} 
            className="text-gray-300 hover:text-white"
          >
            ☰
          </button>
        </div>

        {/* Sidebar Menu */}
        <div className="flex flex-col mt-4">
          {menuItems.map((item) => (
            <NavLink
             to={`/user/${item?.name?.replace(" " , "")}`}
              key={item.name}
              onClick={() => setActiveTab(item.name)}
              className={`flex items-center space-x-4 p-3 mx-2 rounded-lg transition-colors duration-200 ${
                activeTab === item.name
                  ? "bg-blue-500 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white"
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              {isOpen && <span className="capitalize">{item.name}</span>}
            </NavLink>
          ))}
        </div>
      </div>


 
  );
};

export default Sidebar;
