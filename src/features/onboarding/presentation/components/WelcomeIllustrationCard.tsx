import React from "react";
import { Text, View } from "react-native";
import { Surface } from "heroui-native/surface";

export function WelcomeIllustrationCard() {
  return (
    <View className="relative h-85 w-75 items-center justify-center overflow-hidden rounded-[28px] border border-border bg-surface">
      {/* Soft green circular decoration in the bottom right corner */}
      <View className="absolute -bottom-14 -right-14 h-52 w-52 rounded-full bg-success-soft" />

      {/* Badge Koin Emas (Kiri Atas) */}
      <View className="absolute left-7 top-9 z-10 h-11 w-11 items-center justify-center rounded-full bg-warning shadow-md">
        <Text className="text-[18px] font-extrabold text-warning-foreground">$</Text>
      </View>

      {/* Gold Coin Badge (Top Left) */}
      <View className="absolute right-8 top-11 z-10 h-10 w-10 items-center justify-center rounded-full bg-success shadow-md">
        <Text className="text-[16px] font-bold text-success-foreground">✓</Text>
      </View>

      {/* Centered App Mini-Card Mockup */}
      <Surface className="w-44 rounded-2xl border border-border bg-background p-4 shadow-lg">
        <Text className="mb-4 text-[11px] font-bold tracking-widest text-muted">
          ARTHANA
        </Text>

        {/* Budget Indicator Bar */}
        <View className="gap-3">
          <View className="h-2.5 w-full rounded-full bg-success" />
          <View className="h-2.5 w-4/5 rounded-full bg-warning" />
          <View className="h-2.5 w-3/5 rounded-full bg-muted/40" />
        </View>

        <View className="my-5 h-px w-full bg-border" />
        <View className="h-2 w-1/2 self-center rounded-full bg-muted/30" />
      </Surface>

      {/* Active Circle Badge (Center Right of Card) */}
      <View className="absolute right-11.5 top-33.5 z-10 h-7 w-7 items-center justify-center rounded-full bg-success">
        <View className="h-2 w-2 rounded-full bg-white" />
      </View>

      {/* Yellow Dot Decorations at the Bottom */}
      <View className="absolute bottom-14 left-12 h-7 w-7 rounded-full bg-warning" />
      <View className="absolute bottom-12 right-12 h-6 w-6 rounded-full bg-warning" />
    </View>
  );
}