"use client";

import React, { FC } from "react";
import Image from "next/image";
import { FaUserCircle } from "react-icons/fa";

interface AvatarProps {
  avatar?: string;
}
const Avatar: FC<AvatarProps> = ({ avatar }) => {
  return avatar ? (
    <Image
      src={avatar}
      alt={"avatar"}
      className="rounded-full"
      height="30"
      width="30"
    />
  ) : (
    <FaUserCircle size={30} />
  );
};

export default Avatar;
