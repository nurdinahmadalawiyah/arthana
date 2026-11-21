import React from "react";
import { Text, View } from "react-native";

export interface QuizSplitLayoutProps {
  question: string;
  subtitle: string;
  children: React.ReactNode;
}

export function QuizSplitLayout({ question, subtitle, children }: QuizSplitLayoutProps) {
  return (
    <View className="w-full pt-4 md:my-auto md:flex-row md:items-center md:justify-between md:gap-14 md:pt-0">
      <View className="mb-6 w-full md:mb-0 md:w-5/12 md:max-w-95">
        <Text className="mb-3 text-[28px] font-extrabold leading-8.5 tracking-tight text-foreground md:text-[34px] md:leading-10">
          {question}
        </Text>
        <Text className="text-[14px] leading-5 text-muted md:text-[16px] md:leading-6">
          {subtitle}
        </Text>
      </View>

      <View className="w-full md:flex-1 md:max-w-135">{children}</View>
    </View>
  );
}
