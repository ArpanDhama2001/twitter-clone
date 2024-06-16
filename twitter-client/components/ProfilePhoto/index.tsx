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
  src = "https://t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg",
}): JSX.Element => {
  return (
    <div
      className={`flex justify-center lg:justify-start items-center px-2 min-w-${width}`}>
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
