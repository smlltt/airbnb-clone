"use client";

import React, { FC } from "react";

interface MenuItemProps {
  label: string;
}
const MenuItem: FC<MenuItemProps> = ({ label }) => {
  return (
    <div className={"font-bold hover:bg-gray-100 py-2 px-6 "}>{label}</div>
  );
};

export default MenuItem;
