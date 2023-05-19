"use client";

import React, { FC, useState } from "react";
import Button from "@/app/components/button";
import { IconType } from "react-icons";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";
import { DEFAULT_ERROR } from "@/app/constants";

interface SocialAuthButtonProps {
  icon: IconType;
  provider: "github" | "google";
}
const SocialAuthButton: FC<SocialAuthButtonProps> = ({
  icon: Icon,
  provider,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const handleSocialLoginClick = async () => {
    setIsLoading(true);
    try {
      await signIn(provider, {
        redirect: false,
      });
    } catch (error) {
      toast.error(DEFAULT_ERROR);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Button fullWidth outline intent={"secondary"} disabled={isLoading}>
      <div
        className={
          "w-full items-center flex justify-center relative cursor-pointer"
        }
        onClick={handleSocialLoginClick}
      >
        <div className={"absolute left-0"}>
          <Icon />
        </div>
        <div>
          Continue with {provider.charAt(0).toUpperCase() + provider.slice(1)}
        </div>
      </div>
    </Button>
  );
};

export default SocialAuthButton;
