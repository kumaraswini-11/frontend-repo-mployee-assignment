import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { BsCardChecklist } from "react-icons/bs";
import { BiBookmarkAlt } from "react-icons/bi";
import { RiMoneyDollarBoxLine } from "react-icons/ri";
import { TbUsersGroup } from "react-icons/tb";
import { FiSettings } from "react-icons/fi";
import { TbHelpSquare } from "react-icons/tb";
import UpgradeLogo from "../../public/images/upgradeLogo.svg";
import { GoDotFill } from "react-icons/go";
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";

const NavItem = ({ icon, label, subMenus }) => {
  const [isOpen, setIsOpen] = useState(subMenus && subMenus.length > 0);
  const toggleSubMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div aria-label={label} onClick={subMenus && toggleSubMenu}>
        <Link
          to={subMenus ? "#" : "/"}
          className={`flex items-center gap-x-2.5 rounded-md p-2 ${
            label.toLowerCase().includes("saved jobs")
              ? "mb-1 bg-[#23283B] text-white"
              : "text-black"
          } cursor-pointer`}
        >
          <span className="relative mt-1 h-5 w-5">{icon}</span>
          <span className="flex-1 text-sm font-medium">{label}</span>
          {subMenus && (
            <span className="text-white">
              {isOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
            </span>
          )}
        </Link>
      </div>
      {isOpen && subMenus && (
        <div className="">
          {subMenus.map((submenu, index) => (
            <Link
              key={index}
              to={submenu.path}
              className="group mb-1 flex w-full cursor-pointer items-center gap-x-2.5 p-2 text-gray-600 transition-colors duration-200 ease-in-out hover:rounded-lg hover:border-[1px] hover:border-gray-500 hover:shadow-sm group-hover:text-orange-500"
              aria-label={submenu.label}
            >
              <span className="relative mt-1 h-5 w-5 ">{submenu.icon}</span>
              <span className="flex-1 text-sm font-medium group-hover:text-orange-500">
                {submenu.label}
              </span>
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

const HelpSupportItem = ({ icon, label }) => {
  return <NavItem icon={icon} label={label} />;
};

const Sidebar = () => {
  return (
    <aside className="fixed bottom-0 left-0 top-14 z-50 w-64 bg-white shadow-md">
      <div className="flex h-full flex-col justify-between px-3">
        <nav className="mt-3 h-auto">
          {navItemsArray.map(({ icon, label, subMenus }) => (
            <NavItem
              key={label}
              icon={icon}
              label={label}
              subMenus={subMenus}
            />
          ))}
        </nav>

        <div className="mb-2">
          <div className="mb-6">
            <label className="mb-1 p-2 text-gray-500">Help & Support</label>
            {helpSupportSectionArray.map(({ icon, label }) => (
              <HelpSupportItem key={label} icon={icon} label={label} />
            ))}
          </div>
          <div className="mb-3 rounded-lg border border-gray-400 p-2 text-base font-semibold transition-colors duration-200 ease-in-out hover:border-orange-500">
            <label className="text-[#0A1B39]">
              Current Plan: <span className="text-gray-500">Free</span>
            </label>
          </div>
          <div className="flex items-center justify-between gap-2 rounded-xl border-2 border-[#FFA117] bg-yellow-50 p-2 transition-colors duration-200 ease-in-out hover:border-orange-500">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FFA117] shadow-md">
                <img src={UpgradeLogo} alt="Upgrade Logo" className="" />
              </div>
              <div className="flex flex-col">
                <label className="text-base font-medium text-[#0A1B39] transition-colors duration-200 ease-in-out hover:text-orange-500">
                  Upgrade to Pro
                </label>
                <label className="text-sm text-gray-500">
                  Get all features
                </label>
              </div>
            </div>
            <span className="text-[#0A1B39]">{">"}</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

const navItemsArray = [
  {
    icon: <MdOutlineSpaceDashboard className="text-gray-400" />,
    label: "Job Recommendation Tool",
  },
  {
    icon: <BsCardChecklist className="text-gray-400" />,
    label: "History",
  },
  {
    icon: <BiBookmarkAlt className="text-orange-500" />,
    label: "Saved Jobs",
    subMenus: [
      {
        icon: (
          <GoDotFill className="text-gray-400 group-hover:text-orange-500" />
        ),
        label: "UI/UX Designer",
      },
      {
        icon: (
          <GoDotFill className="text-gray-400 group-hover:text-orange-500" />
        ),
        label: "Web Developer",
      },
      {
        icon: (
          <GoDotFill className="text-gray-400  group-hover:text-orange-500" />
        ),
        label: "Analyst",
      },
      {
        icon: (
          <GoDotFill className="text-gray-400  group-hover:text-orange-500" />
        ),
        label: "Lorem Ipsum",
      },
    ],
  },
  {
    icon: <RiMoneyDollarBoxLine className="text-gray-400" />,
    label: "Plans",
  },
  {
    icon: <TbUsersGroup className="text-gray-400" />,
    label: "Manage Profiles",
  },
];

const helpSupportSectionArray = [
  {
    icon: <FiSettings className="text-gray-400" />,
    label: "Settings",
  },
  {
    icon: <TbHelpSquare className="text-gray-400" />,
    label: "Help Center",
  },
];

export default Sidebar;
