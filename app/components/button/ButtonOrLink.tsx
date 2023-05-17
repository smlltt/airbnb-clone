import { ComponentProps } from "react";
import Link from "next/link";

type ButtonOrLinkProps = ComponentProps<"button"> &
  ComponentProps<"div"> &
  ComponentProps<"a">;

export interface Props extends ButtonOrLinkProps {}

export function ButtonOrLink({ href, ...props }: Props) {
  const isLink = typeof href !== "undefined";
  const ButtonOrLink = "button";

  let content = <ButtonOrLink {...props} />;
  if (isLink) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
}
