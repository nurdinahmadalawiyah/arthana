import React from "react";
import { Text, View } from "react-native";

export interface ArthanaProgressBarProps {
    currentStep: number;
    totalSteps: number;
}
    
export function ArthanaProgressBar({
    currentStep,
    totalSteps,
}: ArthanaProgressBarProps) {
    const percentage = Math.min(Math.max((currentStep / totalSteps) * 100, 0), 100);

    return (
    <View className="w-full flex-row items-center gap-3 py-3">
      <View className="h-1.5 flex-1 overflow-hidden rounded-full bg-surface">
        <View
          className="h-full rounded-full bg-accent"
          style={{ width: `${percentage}%` }}
        />
      </View>

      <Text className="text-[13px] font-medium text-muted">
        {currentStep}/{totalSteps}
      </Text>
    </View>
  );
}