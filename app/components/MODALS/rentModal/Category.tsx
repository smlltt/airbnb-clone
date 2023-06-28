"use client";

import React, { ComponentProps, FC } from "react";
import { IconType } from "react-icons";
import clsx from "clsx";

interface CategoryProps extends ComponentProps<"div"> {
  label: string;
  icon: IconType;
  selected: boolean;
}
const Category: FC<CategoryProps> = ({
  label,
  icon: Icon,
  selected,
  ...rest
}) => {
  return (
    <div
      className={clsx(
        "rounded-md border-neutral-300 border-[1px] p-3 flex flex-col gap-3 cursor-pointer hover:border-stone-900 transition",
        selected && "border-stone-900"
      )}
      {...rest}
    >
      <Icon size={20} />
      <div className={"font-semibold"}>{label}</div>
    </div>
  );
};

export default Category;
