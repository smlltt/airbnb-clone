"use client";

import React, { useEffect, useRef, useState } from "react";
import RoundedXWrapper from "@/app/components/navbar/RoundedXWrapper";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "@/app/components/avatar";
import MenuItem from "@/app/components/navbar/MenuItem";
import { useAuthModal } from "@/app/hooks";

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { toggleAuthModal } = useAuthModal();

  useEffect(() => {
    let handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
        console.log(menuRef.current);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <div className={"hidden md:flex items-center gap-4 font-semibold"}>
      <div className={"hidden lg:block"}>Airbnb your home</div>
      <div ref={menuRef}>
        <RoundedXWrapper
          className={"px-4 text-gray-500"}
          onClick={() => setIsOpen(!isOpen)}
        >
          <AiOutlineMenu size={20} />
          <div className={"ml-3"}>
            <Avatar />
          </div>
        </RoundedXWrapper>
        {isOpen && (
          <div className="absolute md:right-10 xl:right-20 top-20 w-60 bg-white rounded-xl shadow-lg cursor-pointer py-1">
            <MenuItem
              label={"Sign up"}
              className={"font-bold"}
              onClick={toggleAuthModal}
            />
            <MenuItem label={"Login"} onClick={toggleAuthModal} />
          </div>
        )}
      </div>
    </div>
  );
};

export default UserMenu;
