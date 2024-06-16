import React from "react";
import ProfilePhoto from "../ProfilePhoto";

const Header: React.FC = () => {
  return (
    <>
      <div className="flex items-center h-14">
        <div className="">
          <ProfilePhoto
            src="https://media.licdn.com/dms/image/D5603AQFKn4DzJFHu2w/profile-displayphoto-shrink_800_800/0/1700187922680?e=1724284800&v=beta&t=V3PJdRN6t4_X1QCQXA1iBWxwxVD9BcvVlzQQ9B6L7LU"
            height={40}
            width={40}
          />
        </div>
        <div className="flex justify-center w-full ml-[-40px]">
          LOGO COMPONENT
        </div>
      </div>
    </>
  );
};

export default Header;
