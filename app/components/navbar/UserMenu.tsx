"use client";

import React, { FC, useEffect, useRef, useState } from "react";
import RoundedXWrapper from "@/app/components/navbar/RoundedXWrapper";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "@/app/components/avatar";
import MenuItem from "@/app/components/navbar/MenuItem";
import { useLoginModal, useRegisterModal } from "@/app/hooks";
import { signOut } from "next-auth/react";
import { SafeUser } from "@/app/types";

interface UserMenuProps {
  currentUser?: SafeUser | null;
}
const UserMenu: FC<UserMenuProps> = ({ currentUser }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { toggleRegisterModal } = useRegisterModal();
  const { toggleLoginModal } = useLoginModal();
  useEffect(() => {
    let handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
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
            <Avatar avatar={currentUser?.image} />
          </div>
        </RoundedXWrapper>
        {isOpen && (
          <div className="absolute md:right-10 xl:right-20 top-20 w-60 bg-white rounded-xl shadow-lg cursor-pointer py-1">
            {!currentUser && (
              <>
                <MenuItem
                  label={"Sign up"}
                  className={"font-bold"}
                  onClick={toggleRegisterModal}
                />
                <MenuItem label={"Login"} onClick={toggleLoginModal} />
              </>
            )}

            {currentUser && (
              <>
                <MenuItem label={"My trips"} onClick={() => {}} />
                <MenuItem label={"My favorites"} onClick={() => {}} />
                <MenuItem label={"My reservations"} onClick={() => {}} />
                <MenuItem label={"My properties"} onClick={() => {}} />
                <MenuItem label={"Airbnb my home"} onClick={() => {}} />
                <MenuItem label={"Logout"} onClick={() => signOut()} />
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserMenu;
