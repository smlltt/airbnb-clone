import React, { FC } from "react";

interface HeadingProps {
  title: string;
  subtitle?: string;
}
const Heading: FC<HeadingProps> = ({ title, subtitle }) => {
  return (
    <div>
      <div className={"text-xl text-gray-900 font-semibold"}>{title}</div>
      {subtitle && (
        <div className={"font-light text-neutral-500"}>{subtitle}</div>
      )}
    </div>
  );
};

export default Heading;
