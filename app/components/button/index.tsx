import { cva, VariantProps } from "class-variance-authority";
import { ButtonOrLink, Props as ButtonOrLinkProps } from "./ButtonOrLink";
import clsx from "clsx";

const buttonStyles = cva(
  "flex items-center justify-center px-4 py-2 rounded-lg font-medium focus:outline-none disabled:opacity-60 disabled:pointer-events-none hover:bg-opacity-80",
  {
    variants: {
      intent: {
        primary:
          "bg-gradient-to-r from-rose-500 via-rose-600 to-pink-700 text-white hover:from-rose-400 hover:via-rose-500 hover:to-pink-600",
        secondary:
          "bg-gray-200 text-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-100",
        danger: "bg-red-500 text-white focus:ring-red-500",
      },
      outline: {
        true: "bg-transparent border",
      },
      size: {
        small: ["text-sm", "py-1", "px-2"],
        medium: ["text-base", "py-2", "px-4"],
      },
      fullWidth: {
        true: "w-full",
      },
    },
    defaultVariants: {
      intent: "primary",
      fullWidth: false,
      size: "medium",
    },
    compoundVariants: [
      {
        intent: "primary",
        outline: true,
        className: "text-rose-500 border-rose-300 border-2",
      },
      {
        intent: "secondary",
        outline: true,
        className: "border-black",
      },
      {
        intent: "danger",
        outline: true,
        className: "text-red-600 border-red-500 border-2",
      },
    ],
  }
);

export interface ButtonProps
  extends ButtonOrLinkProps,
    VariantProps<typeof buttonStyles> {}

const Button = ({
  intent,
  fullWidth,
  size,
  outline,
  className,
  ...props
}: ButtonProps) => {
  return (
    <ButtonOrLink
      className={clsx(
        buttonStyles({ intent, fullWidth, outline, size }),
        className
      )}
      {...props}
    />
  );
};

export default Button;
