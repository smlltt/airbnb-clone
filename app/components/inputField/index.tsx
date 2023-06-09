"use client";

import { ComponentProps, forwardRef } from "react";
import { FieldError } from "@/app/components/form";

interface InputFieldProps extends ComponentProps<"input"> {
  label: string;
}

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(function Input(
  { label, ...props },
  ref
) {
  const { name } = props;
  return (
    <div className="relative">
      <input
        id={name}
        className={
          "block px-2.5 pb-2.5  pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-gray-500 peer"
        }
        placeholder=" "
        ref={ref}
        {...props}
      />
      <label
        htmlFor={name}
        className={
          "absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10  origin-[0]  bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-gray-500 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100  peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 peer-placeholder-shown:-translate-y-1/2 left-1"
        }
      >
        {label}
      </label>
      <FieldError name={name} />
    </div>
  );
});

export default InputField;
