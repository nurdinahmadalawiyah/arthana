import React from "react";
import { ScrollView, View, type ViewProps } from "react-native";
import { StatusBar } from "expo-status-bar";
import { ScrollShadow } from "heroui-native/scroll-shadow";
import { LinearGradient } from "expo-linear-gradient";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export interface BodyWrapperProps extends ViewProps {
  children: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  scrollable?: boolean;
  withScrollShadow?: boolean;
  noPadding?: boolean;
  contentClassName?: string;
}

export function BodyWrapper({
  children,
  header,
  footer,
  scrollable = false,
  withScrollShadow = false,
  noPadding = false,
  className = "",
  contentClassName = "",
  style,
  ...rest
}: BodyWrapperProps) {
  const insets = useSafeAreaInsets();
  const horizontalPadding = noPadding ? "" : "px-6 md:px-14";

  const scrollViewElement = (
    <ScrollView
      className="flex-1"
      contentContainerClassName={`flex-grow pb-4 ${horizontalPadding} ${contentClassName}`}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
    >
      {children}
    </ScrollView>
  );

  return (
    <View
      className={`flex-1 bg-background ${className}`}
      style={[{ paddingTop: insets.top }, style]}
      {...rest}
    >
      <StatusBar style="light" />

      {header && <View className={horizontalPadding}>{header}</View>}

      {scrollable ? (
        withScrollShadow ? (
          <ScrollShadow LinearGradientComponent={LinearGradient} size={36} className="flex-1">
            {scrollViewElement}
          </ScrollShadow>
        ) : (
          scrollViewElement
        )
      ) : (
        <View className={`flex-1 ${horizontalPadding} ${contentClassName}`}>{children}</View>
      )}

      {footer && <View className={horizontalPadding}>{footer}</View>}
    </View>
  );
}
