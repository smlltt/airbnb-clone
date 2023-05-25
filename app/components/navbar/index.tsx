"use client";

import React, { FC } from "react";
import Container from "@/app/components/container";
import Logo from "@/app/components/navbar/Logo";
import Search from "@/app/components/navbar/Search";
import UserMenu from "@/app/components/navbar/UserMenu";
import { SafeUser } from "@/app/types";
import Divider from "@/app/components/divider";
import Categories from "@/app/components/navbar/categories";

interface NavbarProps {
  currentUser?: SafeUser | null;
}

const Navbar: FC<NavbarProps> = ({ currentUser }) => {
  return (
    <div className={"fixed bg-white w-full"}>
      <div className={"py-4"}>
        <Container>
          <div
            className={
              "flex flex-row items-center justify-between gap-3 md:gap-0"
            }
          >
            <Logo />
            <Search />
            <UserMenu currentUser={currentUser} />
          </div>
        </Container>
        <Divider className={"mt-4 hidden md:block"} />
        <Categories />
      </div>
    </div>
  );
};

export default Navbar;
