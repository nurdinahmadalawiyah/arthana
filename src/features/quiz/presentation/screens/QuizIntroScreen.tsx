import React, { useMemo } from "react";
import { useRouter } from "expo-router";
import { useTranslation } from "react-i18next";
import {
  AppBarWrapper,
  BodyWrapper,
  FooterWrapper,
  HeroSplitLayout,
} from "@/shared/components/layout";
import { ArthanaButton } from "@/shared/components/ui";
import { QuizIntroHighlights, type QuizHighlightItem } from "../components/QuizIntroHighlights";
import { QuizIntroIllustrationCard } from "../components/QuizIntroIllustrationCard";

export function QuizIntroScreen() {
  const router = useRouter();
  const { t } = useTranslation();

  const highlights: QuizHighlightItem[] = useMemo(
    () => [
      {
        icon: "time-outline",
        text: t("quiz.intro.highlights.duration"),
      },
      {
        icon: "ribbon-outline",
        text: t("quiz.intro.highlights.persona"),
      },
      {
        icon: "pie-chart-outline",
        text: t("quiz.intro.highlights.autobudget"),
      },
    ],
    [t]
  );

  return (
    <BodyWrapper>
      <AppBarWrapper backAccessibilityLabel={t("quiz.intro.back_a11y")} />

      <HeroSplitLayout
        showLogo={false}
        eyebrow={t("quiz.intro.badge")}
        headline={t("quiz.intro.headline")}
        subtitle={t("quiz.intro.subtitle")}
        extraContent={<QuizIntroHighlights items={highlights} />}
        illustration={<QuizIntroIllustrationCard />}
      />

      <FooterWrapper>
        <ArthanaButton
          variant="primary"
          size="md"
          accessibilityLabel={t("quiz.intro.cta_a11y")}
          onPress={() => router.push("/quiz")}
        >
          {t("quiz.intro.cta_start")}
        </ArthanaButton>
      </FooterWrapper>
    </BodyWrapper>
  );
}
