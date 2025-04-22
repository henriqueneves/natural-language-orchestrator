import { tool } from "@langchain/core/tools";

export const validateAgeAtEndOfLoanTermTool = tool(
  async ({ age, numberOfInstallments,  maximumAcceptedAge }) => {
    
    const ageAtEndOfLoanTerm = age + (numberOfInstallments / 12);

    return {
      isApproved: ageAtEndOfLoanTerm <= maximumAcceptedAge,
      ageAtEndOfLoanTerm: ageAtEndOfLoanTerm,
    };
  },
  {
    name: "validate_age_at_end_of_loan_term",
    description: "Valida se a idade do cliente ao final do financiamento está dentro do limite permitido",
    schema: {
      type: "object",
      properties: {
        age: {
          type: "number",
          description: "Idade do cliente",
        },
        numberOfInstallments: {
          type: "number",
          description: "Número de parcelas do financiamento",
        },
        maximumAcceptedAge: {
          type: "number",
          description: "Idade máxima permitida ao final do financiamento (em anos)",
        },
      },
      required: ["age", "numberOfInstallments", "maximumAcceptedAge"],
    },
  }
);