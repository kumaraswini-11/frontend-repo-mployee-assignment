import React from "react";
import { CiBookmarkMinus } from "react-icons/ci";
import { HiOutlineBriefcase } from "react-icons/hi2";
import MatchScore from "../../public/images/MatchScore.png";
import GoogleIcon from "../../public/images/GoogleIcon.png";
import WatchIcon from "../../public/images/WatchIcon.png";

const JobCard = () => {
  return (
    <div className="flex items-center justify-between rounded-md border border-gray-300 bg-white px-4 py-2 shadow-md">
      <div className="flex flex-1 flex-col">
        <div className="flex items-center">
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-slate-100">
            <img src={GoogleIcon} alt="Company Logo" />
          </div>
          <div className="ml-4">
            <h2 className="text-lg font-semibold">UI/UX Designer</h2>
            <div className="flex items-center space-x-2 text-xs text-gray-500">
              <span className="text-base text-gray-800 ">Google {"  "} •</span>
              <span className="rounded-full bg-orange-100 px-1 text-[#FF8E22]">
                Figma
              </span>
              <span className="rounded-full bg-pink-200 px-1 text-[#EA3A59]">
                Prototyping
              </span>
              <span className="rounded-full bg-[#E6F0FF] px-1 text-[#2288FF]">
                User Interface
              </span>
            </div>
          </div>
        </div>
        <div className="mt-2 flex items-center text-xs text-slate-400">
          <div className="flex items-center">
            <HiOutlineBriefcase className="mr-1 h-4 w-4" />
            <span className="text-base font-normal text-black">0-3 Years</span>
          </div>
          <span className="mx-1">|</span>
          <div className="ml-2 flex items-center">
            <img src={WatchIcon} alt="Time Icon" className="mr-1 h-4 w-4" />
            <span className="text-base font-normal text-black">Full Time</span>
          </div>
          <span className="mx-1">|</span>
          <div className="ml-2">
            <span className="text-base">Posted on: </span>
            <span className="text-base font-normal text-black">
              02 April 2024
            </span>
          </div>
        </div>
        <div className="ml-5 mt-4 text-slate-500">
          <ul className="list-disc">
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt
            </li>
            <li>
              Labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="mt-4 flex items-center justify-between gap-2">
          <button className="w-32 rounded-md bg-[#FF9800] p-1 text-white">
            Apply Now
          </button>
          <button className="flex items-center justify-center rounded border bg-slate-100 p-1 text-slate-700">
            <CiBookmarkMinus className="text-[#292D32]" />
            <span>Save</span>
          </button>
        </div>
        <div className="mt-4">
          <img src={MatchScore} alt="Match Score" className="h-[90px]" />
        </div>
      </div>
    </div>
  );
};

const MainPage = () => {
  return (
    <section className="relative flex-1 overflow-hidden bg-[#F6F8FA] ">
      <div className="h-full rounded-lg bg-white p-4">
        <p className="mb-2 text-base font-normal">
          Jobs <span>(44)</span>
        </p>
        <div className="mb-[1.74rem] flex flex-col gap-3">
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
        </div>

        <div className="fixed bottom-0 left-72 right-8 z-50 flex items-center justify-between border-2 border-gray-200 bg-white p-2 shadow-md">
          <div>
            <p className="text-sm font-normal text-gray-500">
              Showing <span className="font-medium">1-20 </span>from
              <span className="font-medium"> 1250 </span> data
            </p>
          </div>
          <div className="flex items-center justify-center gap-1">
            <button className="rounded-md bg-black px-2 text-white">1</button>
            <button className="rounded-md  bg-slate-300 px-2 text-black">
              2
            </button>
            <p className="text-sm font-normal text-gray-500">...</p>
            <button className="rounded-md bg-slate-300 px-2 text-black">
              8
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainPage;
