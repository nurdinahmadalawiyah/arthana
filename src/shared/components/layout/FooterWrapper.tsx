import React from "react";
import { View, ViewProps } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export interface FooterWrapperProps extends ViewProps {
  children: React.ReactNode;
  withBorder?: boolean;
  constraintOnTablet?: boolean;
  direction?: "column" | "row";
  alignOnTablet?: "center" | "end";
}

export function FooterWrapper({
  children,
  withBorder = false,
  constraintOnTablet = true,
  direction = "column",
  alignOnTablet = "center",
  className = "",
  style,
  ...rest
}: FooterWrapperProps) {
  const insets = useSafeAreaInsets();

  const tabletAlignClass = alignOnTablet === "end" ? "md:items-end" : "items-center";
  const directionClass = direction === "row" ? "flex-row items-center" : "flex-col";

  return (
    <View
      className={`w-full items-center pt-3 ${tabletAlignClass} ${withBorder ? "border-t border-border" : ""} ${className}`}
      style={[{ paddingBottom: Math.max(insets.bottom, 16) }, style]}
      {...rest}
    >
      <View
        className={`w-full gap-3 ${directionClass} ${constraintOnTablet ? "md:max-w-100" : ""}`}
      >
        {children}
      </View>
    </View>
  );
}
