"use client";

import React, { FC } from "react";
import Button from "@/app/components/button";
import { IconType } from "react-icons";

interface SocialAuthButtonProps {
  icon: IconType;
  provider: "Github" | "Google";
}
const SocialAuthButton: FC<SocialAuthButtonProps> = ({
  icon: Icon,
  provider,
}) => {
  return (
    <Button fullWidth outline intent={"secondary"}>
      <div className={"w-full items-center flex justify-center relative"}>
        <div className={"absolute left-0"}>
          <Icon />
        </div>
        <div>Continue with {provider}</div>
      </div>
    </Button>
  );
};

export default SocialAuthButton;
