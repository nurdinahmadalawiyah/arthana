import { FooterWrapper, ScreenWrapper } from "@/shared/components/layout";
import { ArthanaButton, ArthanaInlineActionText, ArthanaLinkButton } from "@/shared/components/ui";
import { useRouter } from "expo-router";
import { Text, View } from "react-native";

export function WelcomeScreen() {
  const router = useRouter();

  return (
    <ScreenWrapper>
      <View className="flex-1 justify-center pb-12">
        <Text className="mb-6 text-[34px] font-extrabold leading-10 tracking-tight text-foreground">
          arthana
          <Text className="text-accent">.</Text>
        </Text>

        <Text className="mb-5 text-[42px] font-extrabold leading-12 tracking-tight text-foreground">
          Mulai budgeting{"\n"}tanpa drama.
        </Text>

        <Text className="pr-2 text-[16px] font-normal leading-6 text-muted">
          Kuis 2 menit, langsung keluar metode budgeting yang cocok sama gaya belanja kamu. No
          spreadsheet vibes.
        </Text>
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