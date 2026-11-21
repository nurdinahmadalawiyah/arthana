import React from "react";
import { View, ViewProps } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export interface FooterWrapperProps extends ViewProps {
  children: React.ReactNode;
  withBorder?: boolean;
  constraintOnTablet?: boolean;
}

export function FooterWrapper({
  children,
  withBorder = false,
  constraintOnTablet = true,
  className = "",
  style,
  ...rest
}: FooterWrapperProps) {
  const insets = useSafeAreaInsets();

  return (
    <View
      className={`w-full items-center pt-3 ${withBorder ? "border-t border-border" : ""} ${className}`}
      style={[{ paddingBottom: Math.max(insets.bottom, 16) }, style]}
      {...rest}
    >
      <View className={`w-full gap-3 ${constraintOnTablet ? "md:max-w-100" : ""}`}>{children}</View>
    </View>
  );
}
