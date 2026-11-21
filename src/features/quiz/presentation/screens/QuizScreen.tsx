import React, { useMemo, useState } from "react";
import { Text, View } from "react-native";
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
            variant="secondary"
            size="md"
            className="flex-1 bg-surface"
            onPress={handleBack}
          >
            <View className="flex-row items-center justify-center gap-2">
              <Ionicons name="arrow-back" size={16} color="#F9FAFB" />
              <Text className="text-[15px] font-semibold text-foreground">{t("quiz.back")}</Text>
            </View>
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
