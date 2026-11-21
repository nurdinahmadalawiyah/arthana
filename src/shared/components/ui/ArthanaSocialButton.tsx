import React from "react";
import { Text, View } from "react-native";
import { GoogleIcon } from "@/shared/components/icons/GoogleIcon";
import { ArthanaButton, type ArthanaButtonProps } from "./ArthanaButton";

export type SocialProvider = "google"; // Tinggal tambah | "apple" di masa depan

export interface ArthanaSocialButtonProps extends Omit<ArthanaButtonProps, "children"> {
  provider?: SocialProvider;
  label: string;
}

const PROVIDER_CONFIG: Record<
  SocialProvider,
  {
    containerClass: string;
    textClass: string;
    renderIcon: () => React.ReactNode;
  }
> = {
  google: {
    containerClass: "bg-white active:opacity-90",
    textClass: "text-[#111214]",
    renderIcon: () => <GoogleIcon size={20} />,
  },
};

export function ArthanaSocialButton({
  provider = "google",
  label,
  className = "",
  ...props
}: ArthanaSocialButtonProps) {
  const config = PROVIDER_CONFIG[provider];

  return (
    <ArthanaButton
      variant="secondary"
      size="md"
      className={`${config.containerClass} ${className}`}
      {...props}
    >
      <View className="flex-row items-center justify-center gap-3">
        {config.renderIcon()}
        <Text className={`text-[16px] font-semibold ${config.textClass}`}>{label}</Text>
      </View>
    </ArthanaButton>
  );
}