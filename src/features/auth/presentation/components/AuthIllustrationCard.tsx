import React from "react";
import { Text, View } from "react-native";
import { Surface } from "heroui-native/surface";
import { Ionicons } from "@expo/vector-icons";
import { GoogleIcon } from "@/shared/components/icons/GoogleIcon";

export function AuthIllustrationCard() {
  return (
    <View className="relative h-85 w-75 items-center justify-center overflow-hidden rounded-[28px] border border-border bg-surface">
      {/* Soft green circular decoration in the bottom right corner */}
      <View className="absolute -bottom-14 -right-14 h-52 w-52 rounded-full bg-accent-soft" />

      {/* Google Icon Badge (Top Left) */}
      <View className="absolute left-7 top-9 z-10 h-11 w-11 items-center justify-center rounded-full bg-white shadow-md">
        <GoogleIcon size={20} />
      </View>

      {/* Verified Checkmark Badge (Top Right) */}
      <View className="absolute right-8 top-11 z-10 h-10 w-10 items-center justify-center rounded-full bg-accent shadow-md">
        <Ionicons name="shield-checkmark" size={18} color="#06110D" />
      </View>

      {/* Arthana Account Mini Card Mockup (Centered) */}
      <Surface className="w-46 rounded-2xl border border-border bg-background p-4 shadow-lg">
        <View className="mb-4 flex-row items-center justify-between">
          <Text className="text-[11px] font-bold tracking-widest text-muted">ARTHANA ID</Text>
          <View className="h-2 w-2 rounded-full bg-accent" />
        </View>

        {/* Mockup Avatar & Identitas Akun */}
        <View className="mb-4 flex-row items-center gap-3">
          <View className="h-10 w-10 items-center justify-center rounded-full border border-accent/40 bg-accent-soft">
            <Ionicons name="person" size={18} color="#05C486" />
          </View>
          <View className="flex-1 gap-2">
            <View className="h-2.5 w-4/5 rounded-full bg-foreground/85" />
            <View className="h-2 w-3/5 rounded-full bg-muted/40" />
          </View>
        </View>

        {/* Google Account Connection Status */}
        <View className="flex-row items-center gap-2 rounded-xl border border-border bg-surface px-3 py-2">
          <GoogleIcon size={14} />
          <View className="h-2 flex-1 rounded-full bg-accent/70" />
        </View>
      </Surface>

      {/* No-Password Badge */}
      <View className="absolute right-10.5 top-35.5 z-10 h-8 w-8 items-center justify-center rounded-full bg-accent shadow-sm">
        <Ionicons name="key" size={14} color="#06110D" />
      </View>

      {/* Decorative Accent Dots at the Bottom */}
      <View className="absolute bottom-14 left-12 h-6 w-6 rounded-full bg-warning" />
      <View className="absolute bottom-12 right-12 h-5 w-5 rounded-full bg-accent/60" />
    </View>
  );
}
