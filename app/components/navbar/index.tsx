"use client";

import React, { FC } from "react";
import Container from "@/app/components/container";
import Logo from "@/app/components/navbar/Logo";
import Search from "@/app/components/navbar/Search";
import UserMenu from "@/app/components/navbar/UserMenu";
import { User } from "@prisma/client";

interface NavbarProps {
  currentUser?: User | null;
}

const Navbar: FC<NavbarProps> = ({ currentUser }) => {
  console.log({ currentUser });
  return (
    <div className={"fixed shadow-sm bg-white w-full"}>
      <div className={"py-4 border-b-[1px]"}>
        <Container>
          <div
            className={
              "flex flex-row items-center justify-between gap-3 md:gap-0"
            }
          >
            <Logo />
            <Search />
            <UserMenu />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
