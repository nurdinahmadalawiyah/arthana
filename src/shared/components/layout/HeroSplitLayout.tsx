import React from "react";
import { Text, View } from "react-native";
import { useResponsive } from "@/shared/hooks/useResponsive";
import { ArthanaHeadline, ArthanaLogo, ArthanaSubtitle } from "@/shared/components/ui";

export interface HeroSplitLayoutProps {
  headline: string;
  subtitle: string;
  illustration?: React.ReactNode;
  showLogo?: boolean;
  eyebrow?: string;
  extraContent?: React.ReactNode;
}

export function HeroSplitLayout({
  headline,
  subtitle,
  illustration,
  showLogo = true,
  eyebrow,
  extraContent,
}: HeroSplitLayoutProps) {
  const { isTablet } = useResponsive();

  return (
    <View className="flex-1 justify-center pb-12 md:flex-row md:items-center md:justify-between md:gap-12 md:pb-0">
      <View className="md:max-w-115 md:flex-1">
        {eyebrow && (
          <Text className="mb-3 text-[12px] font-bold tracking-widest text-accent">{eyebrow}</Text>
        )}
        {showLogo && <ArthanaLogo />}
        <ArthanaHeadline>{headline}</ArthanaHeadline>
        <ArthanaSubtitle>{subtitle}</ArthanaSubtitle>
        {extraContent}
      </View>

      {isTablet && illustration && (
        <View className="items-center justify-center">{illustration}</View>
      )}
    </View>
  );
}