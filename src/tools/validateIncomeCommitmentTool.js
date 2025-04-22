import { tool } from "@langchain/core/tools";

export const validateIncomeCommitmentTool = tool(
  async ({ installment, income, maximumIncomeCommitment }) => {
    
    const commitment = installment / income;

    return {
      isIncomeCommitmentApproved: commitment <= maximumIncomeCommitment
    };
  },
  {
    name: "validate_income_commitment",
    description: "Valida se o comprometimento de renda está dentro do limite permitido",
    schema: {
      type: "object",
      properties: {
        installment: {
          type: "number",
          description: "Valor da parcela do financiamento",
        },
        income: {
          type: "number",
          description: "Renda mensal do cliente",
        },
        maximumIncomeCommitment: {
          type: "number",
          description: "Limite máximo de comprometimento de renda permitido (em decimal)",
        },
      },
      required: ["installment", "income", "maximumIncomeCommitment"],
    },
  }
);