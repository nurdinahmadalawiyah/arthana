import React from "react";
import { Text, type TextProps } from "react-native";

export function ArthanaLogo({ className = "", ...props }: TextProps) {
  return (
    <Text
      className={`mb-6 text-[34px] font-extrabold leading-10 tracking-tight text-foreground md:text-[38px] ${className}`}
      {...props}
    >
      arthana
      <Text className="text-accent">.</Text>
    </Text>
  );
}

export function ArthanaHeadline({ className = "", children, ...props }: TextProps) {
  return (
    <Text
      className={`mb-5 text-[42px] font-extrabold leading-12 tracking-tight text-foreground md:text-[48px] md:leading-13.5 ${className}`}
      {...props}
    >
      {children}
    </Text>
  );
}

export function ArthanaSubtitle({ className = "", children, ...props }: TextProps) {
  return (
    <Text
      className={`pr-2 text-[16px] font-normal leading-6 text-muted md:text-[18px] md:leading-7 ${className}`}
      {...props}
    >
      {children}
    </Text>
  );
}
