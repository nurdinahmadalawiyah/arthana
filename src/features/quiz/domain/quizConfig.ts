export type BudgetingPersonaId =
    | "kakeibo"
    | "rule_50_30_20"
    | "zero_based"
    | "sinking_fund"
    | "fire_mode";

export const QUIZ_QUESTIONS = [
    {
        key: "q1",
        optionOrder: ["kakeibo", "rule_50_30_20", "zero_based", "sinking_fund", "fire_mode"] as BudgetingPersonaId[],
    },
    {
        key: "q2",
        optionOrder: ["kakeibo", "rule_50_30_20", "zero_based", "sinking_fund", "fire_mode"] as BudgetingPersonaId[],
    },
    {
        key: "q3",
        optionOrder: ["kakeibo", "rule_50_30_20", "zero_based", "sinking_fund", "fire_mode"] as BudgetingPersonaId[],
    },
    {
        key: "q4",
        optionOrder: ["rule_50_30_20", "kakeibo", "zero_based", "sinking_fund", "fire_mode"] as BudgetingPersonaId[],
    },
    {
        key: "q5",
        optionOrder: ["kakeibo", "sinking_fund", "rule_50_30_20", "zero_based", "fire_mode"] as BudgetingPersonaId[],
    },
] as const;