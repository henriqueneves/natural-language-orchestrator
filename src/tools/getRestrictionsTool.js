import { tool } from "@langchain/core/tools";

// Simulating an API call to check financial restrictions. For example, in Brazil, you might use BACEN.
export const getRestrictionsTool = tool(
  async ({ cpf }) => {
    
    const response = await fetch(`http://localhost:8080/restrictions?cpf=${cpf}`);
    const data = await response.json();

    return {
      score: data.score
    };
  },
  {
    name: "get_restrictions",
    description: "Consulta se o CPF possui restrições de crédito",
    schema: {
      type: "object",
      properties: {
        cpf: {
          type: "string",
          description: "CPF do cliente que terá as restrições consultadas",
        },
      },
      required: ["cpf"],
    },
  }
);