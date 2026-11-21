import React from "react";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export interface QuizHighlightItem {
  icon: keyof typeof Ionicons.glyphMap;
  text: string;
}

export interface QuizIntroHighlightsProps {
  items: QuizHighlightItem[];
}

export function QuizIntroHighlights({ items }: QuizIntroHighlightsProps) {
  return (
    <View className="mt-6 gap-3.5">
      {items.map((item, index) => (
        <View key={index} className="flex-row items-center gap-3.5">
          <View className="h-9 w-9 items-center justify-center rounded-full border border-border bg-surface">
            <Ionicons name={item.icon} size={17} color="#05C486" />
          </View>
          <Text className="flex-1 text-[14px] font-medium leading-5 text-foreground/90 md:text-[15px]">
            {item.text}
          </Text>
        </View>
      ))}
    </View>
  );
}
