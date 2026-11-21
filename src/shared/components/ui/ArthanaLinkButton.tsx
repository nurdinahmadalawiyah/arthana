import React, { type ComponentProps } from "react";
import { LinkButton } from "heroui-native/link-button";

export type ArthanaLinkButtonProps = ComponentProps<typeof LinkButton>;

export function ArthanaLinkButton({
  size = "sm",
  className = "",
  children,
  ...props
}: ArthanaLinkButtonProps) {
  return (
    <LinkButton
      size={size}
      className={`px-1 ${className}`}
      {...props}
    >
      {typeof children === "string" ? (
        <LinkButton.Label className="font-semibold text-success">{children}</LinkButton.Label>
      ) : (
        children
      )}
    </LinkButton>
  );
}

export { LinkButton };