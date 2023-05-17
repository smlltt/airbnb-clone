"use client";

import React, { FC } from "react";
import Modal from "@/app/components/modal";
import Button from "@/app/components/button";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useAuthModal } from "@/app/hooks";
const AuthModal: FC = () => {
  const { open, toggleAuthModal } = useAuthModal();
  return (
    <Modal open={open} onClose={toggleAuthModal} title={"Log in or sign up"}>
      <Button fullWidth className={"font-semibold"}>
        Continue
      </Button>
    </Modal>
  );
};

export default AuthModal;
