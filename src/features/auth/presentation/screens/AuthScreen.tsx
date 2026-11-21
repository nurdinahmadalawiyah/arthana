import {
  AppBarWrapper,
  BodyWrapper,
  FooterWrapper,
  HeroSplitLayout,
} from "@/shared/components/layout";
import { ArthanaSocialButton, ArthanaInlineActionText } from "@/shared/components/ui";
import { useRouter } from "expo-router";
import { useTranslation } from "react-i18next";
import { AuthIllustrationCard } from "../components/AuthIllustrationCard";

export function AuthScreen() {
  const router = useRouter();
  const { t } = useTranslation();

  return (
    <BodyWrapper>
      <AppBarWrapper backAccessibilityLabel={t("login.back_a11y")} />

      <HeroSplitLayout
        headline={t("login.headline")}
        subtitle={t("login.subtitle")}
        illustration={<AuthIllustrationCard />}
      />

      <FooterWrapper>
        <ArthanaSocialButton
          provider="google"
          label={t("login.cta_login")}
          accessibilityLabel={t("login.cta_a11y")}
          onPress={() => router.push("/quiz")}
        />

        <ArthanaInlineActionText
          stacked
          promptText={t("login.terms_prompt")}
          actions={[
            { label: t("login.terms_service"), onPress: () => {} },
            { label: t("login.privacy_policy"), onPress: () => {} },
          ]}
        />
      </FooterWrapper>
    </BodyWrapper>
  );
}
