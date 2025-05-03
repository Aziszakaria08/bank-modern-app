import { useState } from "react";
import { logo, menu, close } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <nav className="w-full flex justify-between items-center py-6">
      <div className="w-[124px] h-[32px]">
        <img src={logo} alt="HooBank" />
      </div>
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`text-white font-poppins font-normal text-[16px] cursor-pointer ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            }`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      {/* mobile */}
      <div className="flex sm:hidden flex-1 justify-end items-center ">
        <img
          src={toggle ? menu : close}
          alt="menu"
          className="cursor-pointer"
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${
            toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 flex-col mx-4 my-2 min-w-[140px] rounded-xl sidebar z-50`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`text-white font-poppins font-normal text-[16px] cursor-pointer ${
                  index === navLinks.length - 1 ? "mb-0" : "mb-6"
                }`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
