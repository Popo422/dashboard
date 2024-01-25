"use client";

import { BiSearch, BiSolidBell } from "react-icons/bi";

import { usePathname } from "next/navigation";

function Header(props) {
  const pathname = usePathname();

  return (
    <nav className="flex w-full bg-white header-content ">
      <div className="w-full mx-3">
        <div className="flex flex-row w-full my-3 px-4 justify-between items-center lg:px-3">
          {/* search Bar */}
          <div className="w-1/3 flex justify-between">
            <div className="w-full flex bg-gray-100 h-10 border-2  rounded-xl px-2 flex-start gap-5">
              <button type="submit" className="">
                <BiSearch size={22} color="gray" />
              </button>
              <input
                className=" rounded-lg text-sm focus:outline-none bg-gray-100 text-gray-600 w-full"
                type="search"
                name="search"
                placeholder="Search"
              />
            </div>
          </div>
          <BiSolidBell size={22} color="black" />
        </div>
      </div>
      {props.children}
    </nav>
  );
}

export default Header;
