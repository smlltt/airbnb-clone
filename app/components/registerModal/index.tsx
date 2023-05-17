"use client";

import React, { FC } from "react";
import Modal from "@/app/components/modal";
import Button from "@/app/components/button";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useRegisterModal } from "@/app/hooks";
import * as z from "zod";
import Form, { useZodForm } from "@/app/components/form";
import InputField from "@/app/components/inputField";
import { REQUIRED_FIELD } from "@/app/constants";

const schema = z.object({
  name: z.string().nonempty(REQUIRED_FIELD),
  email: z.string().email().nonempty(REQUIRED_FIELD),
  password: z.string().min(6),
});

const RegisterModal: FC = () => {
  const { open, toggleRegisterModal } = useRegisterModal();
  const form = useZodForm({
    schema,
  });

  return (
    <Modal
      open={open}
      onClose={toggleRegisterModal}
      title={"Log in or sign up"}
    >
      <Form form={form} onSubmit={(values) => console.log("values", values)}>
        <InputField label={"name"} {...form.register("name")} />
        <InputField label={"email"} {...form.register("email")} />
        <InputField
          label={"password"}
          {...form.register("password")}
          type={"password"}
        />
        <Button fullWidth className={"font-semibold"}>
          Continue
        </Button>
      </Form>
    </Modal>
  );
};

export default RegisterModal;
