"use client";

import React, { ComponentProps, FC } from "react";
import clsx from "clsx";

interface MenuItemProps extends ComponentProps<"div"> {
  label: string;
}
const MenuItem: FC<MenuItemProps> = ({ label, className, ...rest }) => {
  return (
    <div className={clsx("hover:bg-gray-100 py-2 px-6", className)} {...rest}>
      {label}
    </div>
  );
};

export default MenuItem;
