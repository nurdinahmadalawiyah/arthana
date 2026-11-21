import React from "react";
import { Text, View, type ViewProps } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Button } from "@/shared/components/ui";

export interface AppBarWrapperProps extends ViewProps {
  showBackButton?: boolean;
  onBackPress?: () => void;
  backAccessibilityLabel?: string;
  title?: string;
  rightElement?: React.ReactNode;
  children?: React.ReactNode;
}

export function AppBarWrapper({
  showBackButton = true,
  onBackPress,
  backAccessibilityLabel = "Kembali",
  title,
  rightElement,
  children,
  className = "",
  ...rest
}: AppBarWrapperProps) {
  const router = useRouter();

  const handleBack = () => {
    if (onBackPress) {
      onBackPress();
    } else if (router.canGoBack()) {
      router.back();
    }
  };

  return (
    <View
      className={`min-h-14 w-full flex-row items-center justify-between pt-2 ${className}`}
      {...rest}
    >
      {children ? (
        children
      ) : (
        <>
          <View className="min-w-11 items-start">
            {showBackButton && (
              <Button
                isIconOnly
                variant="secondary"
                size="md"
                accessibilityLabel={backAccessibilityLabel}
                className="h-11 w-11 rounded-full border border-border bg-surface"
                onPress={handleBack}
              >
                <Ionicons name="arrow-back" size={20} color="#F9FAFB" />
              </Button>
            )}
          </View>

          {title ? (
            <Text
              numberOfLines={1}
              className="flex-1 px-3 text-center text-[16px] font-bold text-foreground"
            >
              {title}
            </Text>
          ) : (
            <View className="flex-1" />
          )}

          <View className="min-w-11 items-end">{rightElement}</View>
        </>
      )}
    </View>
  );
}
