import React from "react";
import { BsTwitter } from "react-icons/bs";
import {
  BiHomeCircle,
  BiSearch,
  BiBell,
  BiEnvelope,
  BiBookmark,
} from "react-icons/bi";
import { TbDotsCircleHorizontal } from "react-icons/tb";
import { IoPersonSharp } from "react-icons/io5";
import { RiQuillPenLine } from "react-icons/ri";

interface TwitterSidebarButton {
  title: string;
  icon: React.ReactNode;
  isHidden: boolean;
}

const sideBarMenuItems: TwitterSidebarButton[] = [
  {
    title: "Home",
    icon: <BiHomeCircle />,
    isHidden: false,
  },
  {
    title: "Explore",
    icon: <BiSearch />,
    isHidden: false,
  },
  {
    title: "Notifications",
    icon: <BiBell />,
    isHidden: false,
  },
  {
    title: "Messages",
    icon: <BiEnvelope />,
    isHidden: false,
  },
  {
    title: "Bookmarks",
    icon: <BiBookmark />,
    isHidden: false,
  },
  {
    title: "Profile",
    icon: <IoPersonSharp />,
    isHidden: true,
  },
  {
    title: "More",
    icon: <TbDotsCircleHorizontal />,
    isHidden: true,
  },
];

export default function Home() {
  return (
    <div className="container max-w-[1260px] m-auto ">
      <div className="flex flex-col-reverse sm:grid grid-cols-2 sm:grid-cols-6 lg:grid-cols-12 h-screen max-w-[1260px] justify-center">
        <div className="sm:col-span-1 lg:col-span-3 flex items-start sm:flex-col sm:w-full sm:items-center lg:items-start sm:text-3xl lg:pl-[20%] lg:pr-4 pt-4 ">
          <div className="text-3xl lg:text-4xl hover:bg-gray-600 hover:bg-opacity-20 rounded-full p-4 transition-all cursor-pointer">
            <BsTwitter />
          </div>
          <ul className="flex items-center lg:items-start w-full sm:flex-col justify-around">
            {sideBarMenuItems.map((item, i) => {
              return (
                <li
                  key={i}
                  className={`${
                    item.isHidden ? "hidden" : ""
                  } sm:flex flex items-center justify-center lg:items-center lg:justfy-start gap-1 text-3xl lg:text-2xl hover:bg-gray-600 hover:bg-opacity-20 rounded-full w-fit p-4 sm:px-4 sm:py-2 sm:mt-3 transition-all cursor-pointer`}>
                  <span>{item.icon}</span>
                  <span className="hidden lg:block">{item.title}</span>
                </li>
              );
            })}
          </ul>
          <button className="bg-[#1d9bf0] hidden sm:block p-4 rounded-full w-full mt-5 text-3xl  sm:w-fit lg:w-full sm:px-4 sm:py-3 lg:text-lg ">
            <span className="hidden lg:block">Post</span>
            <span className="lg:hidden">
              <RiQuillPenLine />
            </span>
          </button>
        </div>
        <div className="bg-red-500 h-screen sm:col-span-4 lg:col-span-5 border-r-[.2px] border-l-[.2px] border-gray-600 "></div>
        <div className="hidden sm:block sm:col-span-1 lg:col-span-4"></div>
      </div>
    </div>
  );
}
