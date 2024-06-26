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
import ProfilePhoto from "../ProfilePhoto";

interface TwitterSidebarButton {
  title: string;
  icon: React.ReactNode;
}

const sideBarMenuItems: TwitterSidebarButton[] = [
  {
    title: "Home",
    icon: <BiHomeCircle />,
  },
  {
    title: "Explore",
    icon: <BiSearch />,
  },
  {
    title: "Notifications",
    icon: <BiBell />,
  },
  {
    title: "Messages",
    icon: <BiEnvelope />,
  },
  {
    title: "Bookmarks",
    icon: <BiBookmark />,
  },
  {
    title: "Profile",
    icon: <IoPersonSharp />,
  },
  {
    title: "More",
    icon: <TbDotsCircleHorizontal />,
  },
];

const Sidebar: React.FC = () => {
  return (
    <div>
      <div className="h-screen hidden sm:flex flex-col justify-between">
        <div>
          <div className="text-3xl lg:text-4xl hover:bg-gray-600 hover:bg-opacity-40 w-fit rounded-full p-4 transition-all cursor-pointer">
            <BsTwitter />
          </div>
          <ul className="flex items-center lg:items-start w-full flex-col justify-around">
            {sideBarMenuItems.map((item, i) => {
              return (
                <li
                  key={i}
                  className={`flex items-center justify-center lg:justfy-start gap-1 text-3xl lg:text-2xl hover:bg-gray-600 hover:bg-opacity-40 rounded-full px-4 py-2 mt-3 transition-all cursor-pointer`}>
                  <span>{item.icon}</span>
                  <span className="hidden lg:block">{item.title}</span>
                </li>
              );
            })}
          </ul>
          <button className="bg-[#1d9bf0] p-4 rounded-full mt-5 text-3xl w-fit lg:w-full px-4 py-3 lg:text-lg ">
            <span className="hidden lg:block">Post</span>
            <span className="lg:hidden">
              <RiQuillPenLine />
            </span>
          </button>
        </div>
        <div className="mb-10">
          <ProfilePhoto src="https://media.licdn.com/dms/image/D5603AQFKn4DzJFHu2w/profile-displayphoto-shrink_800_800/0/1700187922680?e=1724284800&v=beta&t=V3PJdRN6t4_X1QCQXA1iBWxwxVD9BcvVlzQQ9B6L7LU" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
