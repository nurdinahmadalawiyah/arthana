import React from "react";
import { Text, View, type ViewProps } from "react-native";
import { ArthanaLinkButton } from "./ArthanaLinkButton";

export interface InlineActionItem {
  label: string;
  onPress: () => void;
  accessibilityLabel?: string;
}

export interface ArthanaInlineActionTextProps extends ViewProps {
  promptText: string;
  actionLabel?: string;
  onActionPress?: () => void;
  accessibilityLabel?: string;
  actions?: InlineActionItem[];
  separatorText?: string;
  stacked?: boolean;
}

export function ArthanaInlineActionText({
  promptText,
  actionLabel,
  onActionPress,
  accessibilityLabel,
  actions,
  separatorText = " & ",
  stacked = false,
  className = "",
  ...rest
}: ArthanaInlineActionTextProps) {
  const actionList: InlineActionItem[] =
    actions ??
    (actionLabel && onActionPress
      ? [{ label: actionLabel, onPress: onActionPress, accessibilityLabel }]
      : []);

  return (
    <View
      className={`min-h-11 items-center justify-center ${
        stacked ? "flex-col gap-0.5" : "flex-row flex-wrap gap-1.5"
      } ${className}`}
      {...rest}
    >
      <Text className="text-center text-[13px] text-muted">{promptText}</Text>

      {actionList.length > 0 && (
        <View className="flex-row flex-wrap items-center justify-center">
          {actionList.map((item, index) => (
            <React.Fragment key={item.label}>
              {index > 0 && (
                <Text className="text-[13px] text-muted">{separatorText}</Text>
              )}
              <ArthanaLinkButton
                size="sm"
                className="h-auto px-0.5 py-0"
                accessibilityLabel={item.accessibilityLabel ?? item.label}
                onPress={item.onPress}
              >
                {item.label}
              </ArthanaLinkButton>
            </React.Fragment>
          ))}
        </View>
      )}
    </View>
  );
}