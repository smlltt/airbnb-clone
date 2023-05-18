"use client";

import React, { FC, useState } from "react";
import Modal from "@/app/components/modal";
import Button from "@/app/components/button";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useLoginModal, useRegisterModal } from "@/app/hooks";
import * as z from "zod";
import Form, { useZodForm } from "@/app/components/form";
import InputField from "@/app/components/inputField";
import { DEFAULT_ERROR, REQUIRED_FIELD } from "@/app/constants";
import Divider from "@/app/components/divider";
import SocialAuthButton from "@/app/components/socialAuthButton";
import { FieldValues, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react";

const schema = z.object({
  email: z.string().email().nonempty(REQUIRED_FIELD),
  password: z.string().nonempty(REQUIRED_FIELD),
});

const LoginModal: FC = () => {
  const { open, toggleLoginModal } = useLoginModal();
  const { toggleRegisterModal } = useRegisterModal();
  const [isLoading, setIsLoading] = useState(false);
  const form = useZodForm({
    schema,
  });

  const handleLogin: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true);
    const { email, password } = data;
    try {
      const res = await signIn("credentials", {
        email,
        password,
      });
      if (res?.error) {
        toast.error(res.error);
      }
    } catch (error) {
      toast.error(DEFAULT_ERROR);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal open={open} onClose={toggleLoginModal} title={"Log in"}>
      <div className={"text-2xl font-semibold"}>Welcome to Airbnb</div>
      <div className={"font-light text-neutral-500 my-2"}>Log in</div>
      <Form form={form} onSubmit={handleLogin}>
        <InputField label={"email"} {...form.register("email")} />
        <InputField
          label={"password"}
          {...form.register("password")}
          type={"password"}
        />
        <Button fullWidth className={"font-semibold"} disabled={isLoading}>
          Continue
        </Button>
      </Form>
      <div className={"grid mt-6 mb-4 grid-cols-7"}>
        <Divider className={"col-span-3"} />
        <div className={"mx-auto -mt-3"}>or</div>
        <Divider className={"col-span-3"} />
      </div>
      <div className={"space-y-3"}>
        <SocialAuthButton icon={AiFillGithub} provider={"Github"} />
        <SocialAuthButton icon={FcGoogle} provider={"Google"} />
      </div>
      <div
        className={
          "text-neutral-500 justify-center flex mt-4 text-sm font-light gap-1"
        }
      >
        <div>You don&apos;t have an account?</div>
        <div
          className={"cursor-pointer font-semibold"}
          onClick={() => {
            toggleLoginModal();
            toggleRegisterModal();
          }}
        >
          Sign up
        </div>
      </div>
    </Modal>
  );
};

export default LoginModal;
