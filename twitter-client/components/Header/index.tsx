import React from "react";
import ProfilePhoto from "../ProfilePhoto";

const Header: React.FC = () => {
  return (
    <>
      <div className="flex items-center h-14">
        <div className="">
          <ProfilePhoto height={40} width={40} />
        </div>
        <div className="flex justify-center w-full ml-[-40px]">
          LOGO COMPONENT
        </div>
      </div>
    </>
  );
};

export default Header;
