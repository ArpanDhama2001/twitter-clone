import React from "react";
import Image from "next/image";
import ProfilePhoto from "../ProfilePhoto";
import { FaRegComment, FaRegHeart } from "react-icons/fa";
import { FaRetweet } from "react-icons/fa6";
import { LuUpload } from "react-icons/lu";
import { BiBookmark } from "react-icons/bi";

const FeedCard: React.FC = () => {
  return (
    <div
      id="container"
      className="flex p-2 cursor-pointer border-b-[1px] border-gray-800">
      <div id="card-left" className="w-40">
        <ProfilePhoto src="https://media.licdn.com/dms/image/D5603AQFKn4DzJFHu2w/profile-displayphoto-shrink_800_800/0/1700187922680?e=1724284800&v=beta&t=V3PJdRN6t4_X1QCQXA1iBWxwxVD9BcvVlzQQ9B6L7LU" />
      </div>
      <div id="card-right" className="px-2">
        <div>Arpan Dhama</div>
        <p>
          In 2020, Oda jokingly said he wanted to draw a manga called *Two
          Piece* after One Piece ends. Would you guys like to see a sequel with
          Luffy's son in action like Boruto?🔥
        </p>
        <div id="icons" className="flex justify-between mt-2 mr-3 text-lg ">
          <div className="opacity-50 hover:opacity-100 ">
            <FaRegComment />
          </div>
          <div className="opacity-50 hover:opacity-100 ">
            <FaRegHeart />
          </div>
          <div className="opacity-50 hover:opacity-100 ">
            <FaRetweet />
          </div>
          <div className="flex justify-between">
            <div className="opacity-50 hover:opacity-100 pr-4">
              <BiBookmark />
            </div>
            <div className="opacity-50 hover:opacity-100 ">
              <LuUpload />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
