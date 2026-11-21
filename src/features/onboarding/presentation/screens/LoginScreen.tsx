import {
  AppBarWrapper,
  BodyWrapper,
  FooterWrapper,
} from "@/shared/components/layout";
import { GoogleIcon } from "@/shared/components/icons/GoogleIcon";
import { ArthanaButton, ArthanaInlineActionText } from "@/shared/components/ui";
import { useResponsive } from "@/shared/hooks/useResponsive";
import { useRouter } from "expo-router";
import { useTranslation } from "react-i18next";
import { Text, View } from "react-native";
import { LoginIllustrationCard } from "../components/LoginIllustrationCard";

export function LoginScreen() {
  const router = useRouter();
  const { isTablet } = useResponsive();
  const { t } = useTranslation();

  const handleGoogleLogin = () => {
    router.push("/quiz");
  };

  return (
    <BodyWrapper contentClassName="md:px-14">
      <AppBarWrapper backAccessibilityLabel={t("login.back_a11y")} />

      <View className="flex-1 justify-center pb-12 md:flex-row md:items-center md:justify-between md:gap-12 md:pb-0">
        <View className="md:max-w-115 md:flex-1">
          <Text className="mb-6 text-[34px] font-extrabold leading-10 tracking-tight text-foreground md:text-[38px]">
            arthana
            <Text className="text-accent">.</Text>
          </Text>

          <Text className="mb-5 text-[42px] font-extrabold leading-12 tracking-tight text-foreground md:text-[48px] md:leading-13.5">
            {t("login.headline")}
          </Text>

          <Text className="pr-2 text-[16px] font-normal leading-6 text-muted md:text-[18px] md:leading-7">
            {t("login.subtitle")}
          </Text>
        </View>

        {isTablet && (
          <View className="items-center justify-center">
            <LoginIllustrationCard />
          </View>
        )}
      </View>

      <FooterWrapper>
        <ArthanaButton
          variant="secondary"
          size="md"
          accessibilityLabel={t("login.cta_a11y")}
          className="bg-white active:opacity-90"
          onPress={handleGoogleLogin}
        >
          <View className="flex-row items-center justify-center gap-3">
            <GoogleIcon size={20} />
            <Text className="text-[16px] font-semibold text-[#111214]">
              {t("login.cta_login")}
            </Text>
          </View>
        </ArthanaButton>

        <ArthanaInlineActionText
          stacked
          promptText={t("login.terms_prompt")}
          actions={[
            {
              label: t("login.terms_service"),
              onPress: () => {},
            },
            {
              label: t("login.privacy_policy"),
              onPress: () => {},
            },
          ]}
        />
      </FooterWrapper>
    </BodyWrapper>
  );
}