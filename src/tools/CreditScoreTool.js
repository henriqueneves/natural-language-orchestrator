import { Tool } from "langchain/tools";
import axios from "axios";

export class CreditScoreTool extends Tool {
  name = "get_credit_score";
  description = "Consulta o score de crédito com base no CPF. Entrada esperada: JSON com chave 'cpf'.";

  async _call(input) {
    try {
      const { cpf } = JSON.parse(input);
      const response = await axios.get(`http://localhost:8080/score?cpf=${cpf}`);
      return JSON.stringify(response.data); // exemplo: { score: 620 }
    } catch (error) {
      console.error("Erro ao consultar score de crédito:", error.message);
      return "Erro ao consultar score de crédito";
    }
  }
}