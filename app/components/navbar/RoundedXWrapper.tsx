"use client";

import React, { ComponentProps, FC } from "react";
import clsx from "clsx";

interface RoundedXWrapper extends ComponentProps<"div"> {
  children: React.ReactNode;
}
const RoundedXWrapper: FC<RoundedXWrapper> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <div
      {...rest}
      className={clsx(
        "border-[1px] w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer",
        className
      )}
    >
      <div className={"flex flex-row items-center justify-between"}>
        {children}
      </div>
    </div>
  );
};

export default RoundedXWrapper;
