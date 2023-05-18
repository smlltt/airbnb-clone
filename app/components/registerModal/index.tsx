"use client";

import React, { FC, useState } from "react";
import Modal from "@/app/components/modal";
import Button from "@/app/components/button";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useRegisterModal } from "@/app/hooks";
import * as z from "zod";
import Form, { useZodForm } from "@/app/components/form";
import InputField from "@/app/components/inputField";
import { DEFAULT_ERROR, REQUIRED_FIELD } from "@/app/constants";
import axios from "axios";
import { FieldValues } from "react-hook-form";
import toast from "react-hot-toast";
import { getMinCharsMessage } from "@/app/utils";
import Divider from "@/app/components/divider";
import SocialAuthButton from "@/app/components/socialAuthButton";

const schema = z.object({
  name: z.string().nonempty(REQUIRED_FIELD),
  email: z.string().email().nonempty(REQUIRED_FIELD),
  password: z.string().min(6, getMinCharsMessage(6)),
});

const RegisterModal: FC = () => {
  const { open, toggleRegisterModal } = useRegisterModal();
  const [isLoading, setIsLoading] = useState(false);
  const form = useZodForm({
    schema,
  });

  const handleRegister = async (values: FieldValues) => {
    console.log({ values });
    setIsLoading(true);
    //   TODO add register logic
    try {
      const register = await axios.post("/api/register", values);
    } catch (error: any) {
      toast.error(error.message || DEFAULT_ERROR);
      console.log("register error", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal open={open} onClose={toggleRegisterModal} title={"Sign up"}>
      <div className={"text-2xl font-semibold"}>Welcome to Airbnb</div>
      <div className={"font-light text-neutral-500 my-2"}>
        Create an account
      </div>
      <Form form={form} onSubmit={handleRegister}>
        <InputField label={"name"} {...form.register("name")} />
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
    </Modal>
  );
};

export default RegisterModal;
