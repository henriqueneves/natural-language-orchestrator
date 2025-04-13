import { tool } from "@langchain/core/tools";

// Simulating an API call to check social security data. For example, in Brazil, you might use INSS.
export const getSocialSecurityTool = tool(
  async ({ cpf }) => {
    
    const response = await fetch(`http://localhost:8080/social-security?cpf=${cpf}`);
    const data = await response.json();

    return data;
  },
  {
    name: "get_social_security_data",
    description: "Consulta o seguro social de um CPF, retornado dados como obito, aposentadoria, etc.",
    schema: {
      type: "object",
      properties: {
        cpf: {
          type: "string",
          description: "CPF do cliente que terá o seguro social consultado",
        },
      },
      required: ["cpf"],
    },
  }
);