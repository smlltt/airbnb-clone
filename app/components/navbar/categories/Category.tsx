"use client";

import React, { FC } from "react";
import { IconType } from "react-icons";
import clsx from "clsx";

interface CategoryProps {
  label: string;
  icon: IconType;
  selected?: boolean;
}
const Category: FC<CategoryProps> = ({ icon: Icon, label, selected }) => {
  return (
    <div
      className={clsx(
        "min-w-[100px] flex flex-col items-center space-y-1.5 cursor-pointer hover:text-neutral-800 transition border-b-2 hover:border-neutral-300 pb-3",
        selected
          ? "border-neutral-800 text-neutral-800"
          : "border-transparent text-neutral-600"
      )}
    >
      <Icon size={20} />
      <div className={"text-xs"}>{label}</div>
    </div>
  );
};

export default Category;
