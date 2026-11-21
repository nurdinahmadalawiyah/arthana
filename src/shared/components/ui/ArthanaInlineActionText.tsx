import React from "react";
import { Text, View, type ViewProps } from "react-native";
import { ArthanaLinkButton } from "./ArthanaLinkButton";

export interface ArthanaInlineActionTextProps extends ViewProps {
  promptText: string;
  actionLabel: string;
  onActionPress: () => void;
  accessibilityLabel?: string;
}

export function ArthanaInlineActionText({
  promptText,
  actionLabel,
  onActionPress,
  accessibilityLabel,
  className = "",
  ...rest
}: ArthanaInlineActionTextProps) {
  return (
    <View
      className={`min-h-11 flex-row items-center justify-center gap-1.5 ${className}`}
      {...rest}
    >
      <Text className="text-[14px] text-muted">{promptText}</Text>
      <ArthanaLinkButton
        size="sm"
        accessibilityLabel={accessibilityLabel ?? actionLabel}
        onPress={onActionPress}
      >
        {actionLabel}
      </ArthanaLinkButton>
    </View>
  );
}
