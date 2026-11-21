import React, { useMemo, useState } from "react";
import { useRouter } from "expo-router";
import { useTranslation } from "react-i18next";
import { Ionicons } from "@expo/vector-icons";
import { AppBarWrapper, BodyWrapper, FooterWrapper } from "@/shared/components/layout";
import { ArthanaButton, ArthanaProgressBar } from "@/shared/components/ui";
import { QuizOptionList, type QuizOptionItem } from "../components/QuizOptionList";
import { QuizSplitLayout } from "../components/QuizSplitLayout";
import { BudgetingPersonaId, QUIZ_QUESTIONS } from "../../domain/quizConfig";

export function QuizScreen() {
  const router = useRouter();
  const { t } = useTranslation();

  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState<Record<string, BudgetingPersonaId>>({});

  const totalSteps = QUIZ_QUESTIONS.length;
  const currentQuestion = QUIZ_QUESTIONS[currentStep - 1];
  const selectedOption = answers[currentQuestion.key] ?? "";

  const options: QuizOptionItem[] = useMemo(
    () =>
      currentQuestion.optionOrder.map((personaId) => ({
        id: personaId,
        title: t(`quiz.questions.${currentQuestion.key}.options.${personaId}.title`),
        description: t(`quiz.questions.${currentQuestion.key}.options.${personaId}.desc`),
      })),
    [currentQuestion, t]
  );

  const handleSelectOption = (value: string) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.key]: value as BudgetingPersonaId,
    }));
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    } else if (router.canGoBack()) {
      router.back();
    }
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep((prev) => prev + 1);
    } else {
      // router.push("/reveal");
    }
  };

  return (
    <BodyWrapper
      scrollable
      withScrollShadow
      header={
        <AppBarWrapper>
          <ArthanaProgressBar currentStep={currentStep} totalSteps={totalSteps} />
        </AppBarWrapper>
      }
      footer={
        <FooterWrapper direction="row" alignOnTablet="end">
          <ArthanaButton
            isIconOnly
            variant="secondary"
            size="md"
            accessibilityLabel={t("quiz.back")}
            className="bg-surface"
            onPress={handleBack}
          >
            <Ionicons name="arrow-back" size={20} color="#F9FAFB" />
          </ArthanaButton>

          <ArthanaButton
            variant="primary"
            size="md"
            className="flex-1"
            isDisabled={!selectedOption}
            onPress={handleNext}
          >
            {currentStep === totalSteps ? t("quiz.finish") : t("quiz.next")}
          </ArthanaButton>
        </FooterWrapper>
      }
    >
      <QuizSplitLayout
        question={t(`quiz.questions.${currentQuestion.key}.question`)}
        subtitle={t(`quiz.questions.${currentQuestion.key}.subtitle`)}
      >
        <QuizOptionList
          options={options}
          selectedValue={selectedOption}
          onValueChange={handleSelectOption}
        />
      </QuizSplitLayout>
    </BodyWrapper>
  );
}
