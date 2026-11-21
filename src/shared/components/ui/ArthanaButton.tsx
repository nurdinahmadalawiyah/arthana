import React, { type ComponentProps } from "react";
import { Button } from "heroui-native/button";

export type ArthanaButtonProps = ComponentProps<typeof Button>;

export function ArthanaButton({
  variant = "primary",
  size = "lg",
  className = "",
  children,
  ...props
}: ArthanaButtonProps) {

  return (
    <Button
      variant={variant}
      size={size}
      className={`w-full rounded-full ${className}`}
      {...props}
    >
      {typeof children === "string" ? (
        <Button.Label className={`font-semibold`}>
          {children}
        </Button.Label>
      ) : (
        children
      )}
    </Button>
  );
}

export { Button };
