import React from "react";
import Image from "next/image";

interface ProfilePhotoProps {
  height?: number;
  width?: number;
  src?: string;
}

const ProfilePhoto: React.FC<ProfilePhotoProps> = ({
  height = 50,
  width = 50,
  src = "https://pbs.twimg.com/profile_images/1679899939445387284/Pf1EQs8L_400x400.png",
}): JSX.Element => {
  return (
    <div className="flex justify-center lg:justify-start items-center px-2">
      <Image
        src={src}
        alt="profile image"
        height={height}
        width={width}
        className="rounded-full "
      />
    </div>
  );
};

export default ProfilePhoto;
