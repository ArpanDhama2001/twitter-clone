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
import Image from "next/image";

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

const Sidebar: React.FC = () => {
  return (
    <div>
      <div className="medium-screen hidden h-screen sm:flex flex-col justify-between">
        <div>
          <div className="text-3xl lg:text-4xl hover:bg-gray-600 hover:bg-opacity-40 w-fit rounded-full p-4 transition-all cursor-pointer">
            <BsTwitter />
          </div>
          <ul className="flex items-center lg:items-start w-full sm:flex-col justify-around">
            {sideBarMenuItems.map((item, i) => {
              return (
                <li
                  key={i}
                  className={`${
                    item.isHidden ? "hidden" : ""
                  } sm:flex flex items-center justify-center lg:items-center lg:justfy-start gap-1 text-3xl lg:text-2xl hover:bg-gray-600 hover:bg-opacity-40 rounded-full w-fit p-4 sm:px-4 sm:py-2 sm:mt-3 transition-all cursor-pointer`}>
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
        <div className="flex sm:justify-center lg:justify-start items-center mb-10 px-2">
          <Image
            src="https://pbs.twimg.com/profile_images/1679899939445387284/Pf1EQs8L_400x400.png"
            alt="profile image"
            height={50}
            width={50}
            className="rounded-full "
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
