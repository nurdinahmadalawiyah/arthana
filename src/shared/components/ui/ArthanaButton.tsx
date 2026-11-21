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
  const isPrimary = variant === "primary";

  return (
    <Button
      variant={variant}
      size={size}
      className={`w-full rounded-full ${isPrimary ? "bg-success" : ""} ${className}`}
      {...props}
    >
      {typeof children === "string" ? (
        <Button.Label className={`font-semibold ${isPrimary ? "text-success-foreground" : ""}`}>
          {children}
        </Button.Label>
      ) : (
        children
      )}
    </Button>
  );
}

export { Button };
