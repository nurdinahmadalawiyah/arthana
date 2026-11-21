import React from "react";
import { Text, View } from "react-native";
import { ArthanaLogo } from "@/shared/components/ui";

export interface QuizProfileLoadingViewProps {
  completedBadgeText: string;
  eyebrow: string;
  headline: string;
  subtitle: string;
  statusText: string;
  progress: number;
  footerNote: string;
}

export function QuizProfileLoadingView({
  completedBadgeText,
  eyebrow,
  headline,
  subtitle,
  statusText,
  progress,
  footerNote,
}: QuizProfileLoadingViewProps) {
  const clampedProgress = Math.min(Math.max(progress, 0), 100);

  return (
    <View className="flex-1 justify-between pb-10 pt-2">
      <View className="flex-row items-center justify-between">
        <ArthanaLogo className="mb-0 text-[20px] leading-6 md:text-[22px] md:leading-7" />
        <Text className="text-[13px] font-medium text-muted md:text-[14px]">
          {completedBadgeText}
        </Text>
      </View>

      <View className="w-full self-center md:max-w-135 md:items-center">
        <Text className="mb-3 text-[12px] font-bold tracking-widest text-accent md:text-center">
          {eyebrow}
        </Text>

        <Text className="mb-4 text-[34px] font-extrabold leading-10 tracking-tight text-foreground md:text-center md:text-[42px] md:leading-12">
          {headline}
        </Text>

        <Text className="mb-14 text-[15px] leading-6 text-muted md:mb-12 md:text-center md:text-[16px]">
          {subtitle}
        </Text>

        <View className="w-full md:max-w-115s">
          <View className="mb-2.5 flex-row items-center justify-between">
            <Text className="text-[14px] font-semibold text-foreground">{statusText}</Text>
            <Text className="text-[14px] font-bold text-accent">{clampedProgress}%</Text>
          </View>

          <View className="h-2 w-full overflow-hidden rounded-full bg-surface">
            <View
              className="h-full rounded-full bg-accent"
              style={{ width: `${clampedProgress}%` }}
            />
          </View>

          <Text className="mt-4 text-[13px] text-muted md:text-center">{footerNote}</Text>
        </View>
      </View>

      <View className="h-6" />
    </View>
  );
}
