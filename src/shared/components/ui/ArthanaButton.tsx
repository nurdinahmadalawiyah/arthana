import React, { type ComponentProps } from "react";
import { Button } from "heroui-native/button";

type RawButtonProps = ComponentProps<typeof Button>;

export type ArthanaButtonProps = Omit<RawButtonProps, "feedbackVariant" | "animation"> & {
  feedbackVariant?: "scale-highlight" | "scale-ripple" | "scale";
  animation?: RawButtonProps["animation"];
};

export function ArthanaButton({
  variant = "primary",
  size = "lg",
  isIconOnly = false,
  className = "",
  children,
  ...props
}: ArthanaButtonProps) {
  return (
    <Button
      variant={variant}
      size={size}
      isIconOnly={isIconOnly}
      className={`${isIconOnly ? "" : "w-full "}rounded-full ${className}`}
      {...(props as RawButtonProps)}
    >
      {typeof children === "string" ? (
        <Button.Label className={`font-semibold`}>{children}</Button.Label>
      ) : (
        children
      )}
    </Button>
  );
}

export { Button };
