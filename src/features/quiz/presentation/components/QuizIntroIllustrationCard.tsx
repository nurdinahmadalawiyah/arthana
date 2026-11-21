import React from "react";
import { Text, View } from "react-native";
import { Surface } from "heroui-native/surface";
import { Ionicons } from "@expo/vector-icons";

export function QuizIntroIllustrationCard() {
  return (
    <View className="relative h-85 w-75 items-center justify-center overflow-hidden rounded-[28px] border border-border bg-surface">
      <View className="absolute -bottom-14 -right-14 h-52 w-52 rounded-full bg-accent-soft" />

      <View className="absolute left-7 top-9 z-10 h-11 w-11 items-center justify-center rounded-full bg-accent shadow-md">
        <Ionicons name="sparkles" size={20} color="#06110D" />
      </View>

      <View className="absolute right-8 top-11 z-10 h-10 w-10 items-center justify-center rounded-full bg-warning shadow-md">
        <Ionicons name="ribbon" size={18} color="#111214" />
      </View>

      <Surface className="w-49 rounded-2xl border border-border bg-background p-4 shadow-lg">
        <View className="mb-3 flex-row items-center justify-between">
          <Text className="text-[10px] font-bold tracking-widest text-accent">PERSONA ENGINE</Text>
          <Text className="text-[10px] font-semibold text-muted">5 Qs</Text>
        </View>

        <View className="mb-2.5 flex-row items-center gap-2.5 rounded-xl border border-accent bg-accent-soft px-3 py-2.5">
          <View className="h-3.5 w-3.5 items-center justify-center rounded-full bg-accent">
            <View className="h-1.5 w-1.5 rounded-full bg-white" />
          </View>
          <View className="h-2 flex-1 rounded-full bg-foreground/85" />
        </View>

        <View className="mb-3 flex-row items-center gap-2.5 rounded-xl border border-border bg-surface px-3 py-2.5">
          <View className="h-3.5 w-3.5 rounded-full bg-default" />
          <View className="h-2 w-3/4 rounded-full bg-muted/40" />
        </View>

        <View className="border-t border-border pt-2.5">
          <Text className="text-[11px] font-bold text-foreground">50/30/20 • Kakeibo • FIRE</Text>
        </View>
      </Surface>

      <View className="absolute bottom-14 left-12 h-6 w-6 rounded-full bg-warning" />
      <View className="absolute bottom-12 right-12 h-5 w-5 rounded-full bg-accent/60" />
    </View>
  );
}
