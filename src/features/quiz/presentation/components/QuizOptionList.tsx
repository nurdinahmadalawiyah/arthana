import React from "react";
import { Text, View } from "react-native";
import { RadioGroup } from "heroui-native/radio-group";

export interface QuizOptionItem {
  id: string;
  title: string;
  description: string;
}

export interface QuizOptionListProps {
  options: QuizOptionItem[];
  selectedValue: string;
  onValueChange: (value: string) => void;
}

export function QuizOptionList({ options, selectedValue, onValueChange }: QuizOptionListProps) {
  return (
    <RadioGroup value={selectedValue} onValueChange={onValueChange} className="w-full gap-2">
      {options.map((option) => {
        const isSelected = selectedValue === option.id;

        return (
          <RadioGroup.Item
            key={option.id}
            value={option.id}
            className={`w-full flex-row items-center gap-4 rounded-3xl border-2 px-5 py-4 ${
              isSelected ? "border-accent bg-surface" : "border-transparent bg-surface"
            }`}
          >
            <View
              className={`h-7 w-7 items-center justify-center rounded-full ${
                isSelected ? "bg-accent" : "bg-default"
              }`}
            >
              {isSelected && <View className="h-2.5 w-2.5 rounded-full bg-white" />}
            </View>

            <View className="flex-1 gap-1">
              <Text className="text-[17px] font-bold leading-5.5 text-foreground">
                {option.title}
              </Text>
              <Text className="text-[14px] leading-5 text-muted">{option.description}</Text>
            </View>
          </RadioGroup.Item>
        );
      })}
    </RadioGroup>
  );
}
