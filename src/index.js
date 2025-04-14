import { creditAnalysisAgent } from "./agents/creditAnalysisAgent.js";

const main = async () => {
  const input = {
    cpf: "12345678900",
    idade: 29,
    renda: 40000,
    parcelas: 48,
    valorParcela: 1200,
  };

  console.log("🔍 Rodando orquestração...");

  const result = await creditAnalysisAgent(input);

  console.log("✅ Resultado da análise:");
  console.log(result);
};

main().catch((err) => {
  console.error("❌ Erro na execução do orquestrador:", err);
});