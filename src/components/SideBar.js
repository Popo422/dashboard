"use client";

import { usePathname, useRouter } from "next/navigation";
import {
  RiDashboard3Line,
  RiClipboardLine,
  RiGridLine,
  RiSettings2Line,
  RiLogoutBoxLine,
  RiShutDownLine,
  RiUser2Line,
} from "react-icons/ri";
import { FiUsers, FiUser } from "react-icons/fi";

import "@/app/globals.css";
const SideBar = (props) => {
  const router = useRouter();

  const handleNavigate = (getMenuItem) => {
    router.push(getMenuItem.link);
  };
  const pathname = usePathname();
  const adminLinks = [
    {
      label: "Dashboard",
      link: "/",
      icon: <RiDashboard3Line size={22} />,
    },

    {
      label: "My Contacts",
      link: "/contacts",
      icon: <FiUsers size={22} />,
    },
    {
      label: "My Blasts",
      link: "/blasts",
      icon: <FiUser size={22} />,
    },
    {
      label: "Jobs",
      link: "/jobs",
      icon: <RiClipboardLine size={22} />,
    },
    {
      label: "Job Calendar",
      link: "/job-calendar",
      icon: <RiGridLine size={22} />,
    },
  ];

  return (
    <aside
      className={` left-0 top-0  h-full w-full flex  flex-col bg-white  transition-all duration-300 overflow-hidden shadow-lg`}
    >
      <div className="flex flex-col overflow-y-auto duration-300 overflow-hidden h-full w-full">
        <nav className=" h-full w-full">
          <div className="py-3 flex flex-col  w-full h-full justify-between">
            <div className="flex flex-col h-full w-full  justify-between">
              <div className="flex flex-col gap-5">
                <div className="w-full flex justify-center items-center">
                  {" "}
                  <img src={"/images/logo.png"} className="w-[83px] h-[58px]" />
                </div>
                <ul className="mb-6 flex flex-col gap-2 w-full  font-semibold text-sm">
                  {adminLinks.map((menuItem) => (
                    <li key={menuItem.label} className="w-full ">
                      <div className="flex w-full gap-4">
                        {" "}
                        <div
                          className={`h-11 w-1 ${
                            pathname === menuItem.link
                              ? " bg-primary-green-500"
                              : ""
                          } my-2 `}
                        />
                        <div className="flex w-full pr-8 pl-2">
                          {" "}
                          <label
                            onClick={() => handleNavigate(menuItem)}
                            className={`w-full h-14 group  cursor-pointer flex items-center gap-4 rounded-md px-5 font-medium  duration-300 ease-in-out hover:bg-green-700 hover:text-white 
                             ${
                               pathname === menuItem.link
                                 ? "bg-primary-green-500 text-white"
                                 : "text-black"
                             }
                            `}
                          >
                            <span className={`icon`}> {menuItem.icon}</span>

                            <div className="">{menuItem.label}</div>
                          </label>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-black">
                {" "}
                <ul className="mb-6 flex flex-col gap-2 w-full  font-semibold text-sm">
                  <li key={"settings"} className="w-full ">
                    <div className="flex w-full gap-4">
                      <div
                        className={`h-11 w-1 
                        my-2 `}
                      />
                      <div className="flex w-full pr-8 pl-2">
                        {" "}
                        <label
                          // onClick={() => handleNavigate()}
                          className={`w-full h-14 group  cursor-pointer flex items-center gap-4 rounded-md px-5 font-medium  duration-300 ease-in-out hover:bg-gray-200 hover:text-white`}
                        >
                          <span className={`icon`}>
                            {" "}
                            <RiSettings2Line size={22} />
                          </span>

                          <div className="">Settings</div>
                        </label>
                      </div>
                    </div>
                  </li>
                  <li key={"logout"} className="w-full ">
                    <div className="flex w-full gap-4">
                      <div
                        className={`h-11 w-1 
                        my-2 `}
                      />
                      <div className="flex w-full pr-8 pl-2">
                        {" "}
                        <label
                          // onClick={() => handleNavigate()}
                          className={`w-full h-14 group  cursor-pointer flex items-center gap-4 rounded-md px-5 font-medium  duration-300 ease-in-out hover:bg-gray-200 hover:text-white`}
                        >
                          <span className={`icon`}>
                            {" "}
                            <RiShutDownLine size={22} />
                          </span>

                          <div className="">Logout</div>
                        </label>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default SideBar;
