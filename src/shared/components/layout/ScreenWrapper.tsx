import React from "react";
import { ScrollView, View, ViewProps } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface ScreenWrapperProps extends ViewProps {
  children: React.ReactNode;
  scrollable?: boolean;
  noPadding?: boolean;
  contentClassName?: string;
}

export function ScreenWrapper({
  children,
  scrollable = false,
  noPadding = false,
  className = "",
  contentClassName = "",
  style,
  ...rest
}: ScreenWrapperProps) {
  const insets = useSafeAreaInsets();
  const horizontalPadding = noPadding ? "" : "px-6";

  return (
    <View
      className={`flex-1 bg-background ${className}`}
      style={[{ paddingTop: insets.top }, style]}
      {...rest}
    >
      <StatusBar style="light" />

      {scrollable ? (
        <ScrollView
          className="flex-1"
          contentContainerClassName={`flex-grow ${horizontalPadding} ${contentClassName}`}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          {children}
        </ScrollView>
      ) : (
        <View className={`flex-1 ${horizontalPadding} ${contentClassName}`}>{children}</View>
      )}
    </View>
  );
}
