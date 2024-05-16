import React from "react";
import { Link, NavLink } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";
import LogoIcon from "../../public/images/logo.svg";
import Profile from "../../public/images/profile.png";

const Navbar = () => {
  return (
    <nav className="fixed left-0 right-0 top-0  z-50 flex h-14 w-full items-center justify-between bg-white px-4 shadow-sm">
      <div className="hidden items-center gap-x-4 md:flex">
        <Link to="/">
          <img src={LogoIcon} alt="Logo" className="h-10" />
        </Link>
      </div>
      <div className="ml-auto flex items-center gap-x-4">
        <ul className="flex w-full space-x-5">
          {navItems.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.path}
                className="text-sm transition-all duration-300 hover:opacity-75"
              >
                {item.label}
                {item.tag && (
                  <span className="ml-2 hidden rounded-xl bg-orange-200 p-1 text-xs text-orange-500 md:inline-block">
                    {item.tag}
                  </span>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="relative">
          <div className="flex cursor-pointer items-center gap-2 rounded-2xl bg-slate-100 px-1 py-2 text-sm text-black transition-all duration-300">
            <img
              src={Profile}
              alt="Profile Picture"
              className="h-8 w-8 rounded-xl"
            />
            <span className="hidden md:inline-block">Divyanshus</span>
            <MdKeyboardArrowDown />
          </div>
        </div>
      </div>
    </nav>
  );
};

const navItems = [
  { path: "#", label: "Resume Scan", tag: "New Launch" },
  { path: "#", label: "Resume Keywords" },
  { path: "#", label: "Resume Services" },
  { path: "#", label: "Career Blogs" },
  { path: "#", label: "About Us" },
];
export default Navbar;
