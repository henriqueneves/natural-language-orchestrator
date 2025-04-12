import { tool } from "@langchain/core/tools";

// Simulating a credit score API call. For example, in Brazil, you might use Serasa.
export const getCreditScoreTool = tool(
  async ({ cpf }) => {
    
    const response = await fetch(`http://localhost:8080/score?cpf=${cpf}`);
    const data = await response.json();

    return {
      score: data.score
    };
  },
  {
    name: "get_credit_score",
    description: "Consulta o score de crédito de um CPF",
    schema: {
      type: "object",
      properties: {
        cpf: {
          type: "string",
          description: "CPF do cliente que terá o score consultado",
        },
      },
      required: ["cpf"],
    },
  }
);