"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import routes from "@/app/routes";

const Logo = () => {
  const router = useRouter();
  return (
    <Image
      alt={"logo"}
      className={"hidden md:block cursor-pointer"}
      height={100}
      width={100}
      src={"/images/logo.png"}
      onClick={() => router.push(routes.home)}
    />
  );
};

export default Logo;
