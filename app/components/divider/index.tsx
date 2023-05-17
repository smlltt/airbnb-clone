"use client";

import React, { ComponentProps, FC } from "react";
import clsx from "clsx";

const Divider: FC<ComponentProps<"div">> = ({ className }) => {
  return <div className={clsx("border-t border-gray-200", className)} />;
};

export default Divider;
