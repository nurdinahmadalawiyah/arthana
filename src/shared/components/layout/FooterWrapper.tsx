import React from "react";
import { View, ViewProps } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface FooterWrapperProps extends ViewProps {
  children: React.ReactNode;
  withBorder?: boolean;
}

export function FooterWrapper({
  children,
  withBorder = false,
  className = "",
  style,
  ...rest
}: FooterWrapperProps) {
  const insets = useSafeAreaInsets();

  return (
    <View
      className={`gap-3 pt-3 ${withBorder ? "border-t border-border" : ""} ${className}`}
      style={[{ paddingBottom: Math.max(insets.bottom, 16) }, style]}
      {...rest}
    >
      {children}
    </View>
  );
}
