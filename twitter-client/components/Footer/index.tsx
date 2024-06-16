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

interface FooterItemsInterface {
  title: string;
  icon: React.ReactNode;
}

const footerItems: FooterItemsInterface[] = [
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
];

const Footer: React.FC = () => {
  return (
    <>
      <div className="sm:hidden  h-14">
        <ul className="flex h-full justify-around items-center text-3xl">
          {footerItems.map((item, i) => {
            return (
              <li
                key={i}
                className="flex hover:bg-gray-600 hover:bg-opacity-40 cursor-pointer rounded-full p-3 w-fit">
                <span className="w-[26.5px] h-[26.5px] ml-[-2px]">
                  {item.icon}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Footer;
