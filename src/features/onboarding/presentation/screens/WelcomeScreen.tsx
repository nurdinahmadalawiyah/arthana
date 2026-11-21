import { BodyWrapper, FooterWrapper, HeroSplitLayout } from "@/shared/components/layout";
import { ArthanaButton, ArthanaInlineActionText } from "@/shared/components/ui";
import { useRouter } from "expo-router";
import { useTranslation } from "react-i18next";
import { WelcomeIllustrationCard } from "../components/WelcomeIllustrationCard";

export function WelcomeScreen() {
  const router = useRouter();
  const { t } = useTranslation();

  return (
    <BodyWrapper>
      <HeroSplitLayout
        headline={t("welcome.headline")}
        subtitle={t("welcome.subtitle")}
        illustration={<WelcomeIllustrationCard />}
      />

      <FooterWrapper>
        <ArthanaButton
          variant="primary"
          size="md"
          accessibilityLabel={t("welcome.cta_a11y")}
          onPress={() => router.push("/quiz")}
        >
          {t("welcome.cta_start")}
        </ArthanaButton>

        <ArthanaInlineActionText
          promptText={t("welcome.already_have_account")}
          actionLabel={t("welcome.login")}
          onActionPress={() => router.push("/login")}
        />
      </FooterWrapper>
    </BodyWrapper>
  );
}
