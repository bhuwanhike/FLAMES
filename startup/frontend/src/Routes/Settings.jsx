import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
const Settings = () => {
  const location = useLocation();
  const activeTab = location.pathname.split("/").pop();
  return (
    <>
      <div className="left w-70 h-screen  flex flex-col gap-2 p-10 pt-30 justify-between bg-blue-50 pb-20">
        <p className="text-3xl font-semibold">Settings</p>
        <div className="h-full flex flex-col gap-3 pt-10 text-[1.3rem] p ">
          <Link to="/settings/profile" className="cursor-pointer">
            <span
              className={`text-black font-bold ${
                activeTab === "profile" ? "text-gray-800" : "text-gray-600"
              }`}
            >
              Profile
            </span>
          </Link>

          <Link to="/settings/dashboard" className="cursor-pointer">
            <span
              className={`text-black font-bold ${
                activeTab === "dashboard" ? "text-gray-800" : "text-gray-600"
              }`}
            >
              Dashboard
            </span>
          </Link>
        </div>
        <Link
          to="/"
          className=" !text-red-500 hover:cursor-pointer text-[1.3rem] "
        >
          Log out
        </Link>
      </div>
      <div className="right h-full w-full">
        <Outlet />
      </div>
    </>
  );
};

export default Settings;
