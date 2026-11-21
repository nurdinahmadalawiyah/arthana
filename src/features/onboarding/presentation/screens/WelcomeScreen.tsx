import { FooterWrapper, ScreenWrapper } from "@/shared/components/layout";
import { ArthanaButton, ArthanaInlineActionText } from "@/shared/components/ui";
import { useResponsive } from "@/shared/hooks/useResponsive";
import { useRouter } from "expo-router";
import { Text, View } from "react-native";
import { WelcomeIllustrationCard } from "../components/WelcomeIllustrationCard";

export function WelcomeScreen() {
  const router = useRouter();
  const { isTablet } = useResponsive();

  return (
    <ScreenWrapper contentClassName="md:px-14">
      <View className="flex-1 justify-center pb-12 md:flex-row md:items-center md:justify-between md:gap-12 md:pb-0">
        <View className="md:max-w-115 md:flex-1">
          <Text className="mb-6 text-[34px] font-extrabold leading-10 tracking-tight text-foreground md:text-[38px]">
            arthana
            <Text className="text-accent">.</Text>
          </Text>

          <Text className="mb-5 text-[42px] font-extrabold leading-12 tracking-tight text-foreground md:text-[48px] md:leading-[54px]">
            Mulai budgeting{"\n"}tanpa drama.
          </Text>

          <Text className="pr-2 text-[16px] font-normal leading-6 text-muted md:text-[18px] md:leading-7">
            Kuis 2 menit, langsung keluar metode budgeting yang cocok sama gaya belanja kamu. No
            spreadsheet vibes.
          </Text>
        </View>

        {isTablet && (
          <View className="items-center justify-center">
            <WelcomeIllustrationCard />
          </View>
        )}
      </View>

      <FooterWrapper>
        <ArthanaButton
          variant="primary"
          size="md"
          accessibilityLabel="Mulai onboarding budgeting"
          onPress={() => router.push("/quiz")}
        >
          Lanjut, gas
        </ArthanaButton>

        <ArthanaInlineActionText
          promptText="Udah punya akun?"
          actionLabel="Masuk"
          onActionPress={() => router.push("/auth")}
        />
      </FooterWrapper>
    </ScreenWrapper>
  );
}