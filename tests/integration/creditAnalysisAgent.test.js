import { creditAnalysisAgent } from '../../src/agents/creditAnalysisAgent.js';

describe('Integração - creditAnalysisAgent', () => {
  it('deve retornar uma análise positiva com os dados válidos', async () => {
    const input = {
      cpf: "12345678900",
      idade: 30,
      renda: 5000,
      parcelas: 48,
      valorParcela: 1200,
    };

    const result = await creditAnalysisAgent(input);

    expect(result).toBeDefined();
    expect(result.result).toBe("approved");
  });

  it('deve retornar uma análise reprovada se a parcela for muito alta', async () => {
    const input = {
      cpf: "12345678900",
      idade: 30,
      renda: 3000,
      parcelas: 48,
      valorParcela: 2000,
    };

    const result = await creditAnalysisAgent(input);

    expect(result).toBeDefined();
    expect(result.result).toBe("rejected"); 
  });
});
