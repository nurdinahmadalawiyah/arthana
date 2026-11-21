import React, { useCallback, useMemo } from "react";
import { useRouter } from "expo-router";
import { useTranslation } from "react-i18next";
import { BodyWrapper } from "@/shared/components/layout";
import { QuizProfileLoadingView } from "../components/QuizProfileLoadingView";
import { useProfileCraftingProgress } from "../hooks/useProfileCraftingProgress";
import { QUIZ_QUESTIONS } from "../../domain/quizConfig";

export function QuizLoadingScreen() {
  const router = useRouter();
  const { t } = useTranslation();
  const totalSteps = QUIZ_QUESTIONS.length;

  const runProfileEvaluation = useCallback(async () => {
    // TODO: Panggil evaluateQuiz(answers) untuk menghitung Financial Profile Badge[cite: 5, 6]
  }, []);

  const handleFinished = useCallback(() => {
    // router.replace("/reveal");
  }, [router]);

  const { progress } = useProfileCraftingProgress({
    minDurationMs: 3200,
    task: runProfileEvaluation,
    onComplete: handleFinished,
  });

  const currentStatusText = useMemo(() => {
    if (progress < 45) return t("quiz.loading.stages.analyzing");
    if (progress < 85) return t("quiz.loading.stages.matching");
    return t("quiz.loading.stages.crafting");
  }, [progress, t]);

  return (
    <BodyWrapper>
      <QuizProfileLoadingView
        completedBadgeText={t("quiz.loading.completed_badge", {
          current: totalSteps,
          total: totalSteps,
        })}
        eyebrow={t("quiz.loading.eyebrow")}
        headline={t("quiz.loading.headline")}
        subtitle={t("quiz.loading.subtitle")}
        statusText={currentStatusText}
        progress={progress}
        footerNote={t("quiz.loading.footer_note")}
      />
    </BodyWrapper>
  );
}