import { creditAnalysisAgent } from '../../src/agents/creditAnalysisAgent.js';
import { jest } from '@jest/globals';

describe('Integração - creditAnalysisAgent', () => {

  const testCases = [
    {
      descricao: 'todos os dados são válidos 1',
      input: {
        cpf: '11111111111',
        idade: 30,
        renda: 5000,
        parcelas: 48,
        valorParcela: 1200
      },
      resultadoEsperado: 'aprovado'
    },
    {
      descricao: 'idade menor que 18 anos',
      input: {
        cpf: '11111111111',
        idade: 17,
        renda: 5000,
        parcelas: 48,
        valorParcela: 1200
      },
      resultadoEsperado: 'rejeitado'
    },
    {
      descricao: 'idade + prazo maior ou igual a 75 anos',
      input: {
        cpf: '11111111111',
        idade: 50,
        renda: 5000,
        parcelas: 300,
        valorParcela: 1200
      },
      resultadoEsperado: 'rejeitado'
    },
    {
      descricao: 'score de crédito inferior a 500',
      input: {
        cpf: '44444444444',
        idade: 30,
        renda: 5000,
        parcelas: 48,
        valorParcela: 1200
      },
      resultadoEsperado: 'rejeitado'
    },
    {
      descricao: 'comprometimento de renda superior a 30%',
      input: {
        cpf: '11111111111',
        idade: 30,
        renda: 3000,
        parcelas: 48,
        valorParcela: 1200
      },
      resultadoEsperado: 'rejeitado'
    },
    {
      descricao: 'possui restrições no CPF',
      input: {
        cpf: '33333333333',
        idade: 30,
        renda: 5000,
        parcelas: 48,
        valorParcela: 1200
      },
      resultadoEsperado: 'rejeitado'
    },
    {
      descricao: 'registro de óbito encontrado',
      input: {
        cpf: '77777777777',
        idade: 30,
        renda: 5000,
        parcelas: 48,
        valorParcela: 1200
      },
      resultadoEsperado: 'rejeitado'
    },
    {
      descricao: 'possui restrições no CPF, comprometimento de renda superior a 30% e idade menor do que 18 anos',
      input: {
        cpf: '33333333333',
        idade: 17,
        renda: 1000,
        parcelas: 48,
        valorParcela: 2000
      },
      resultadoEsperado: 'rejeitado'
    },
    {
      descricao: 'todos os dados são válidos 2',
      input: {
        cpf: '11111111111',
        idade: 18,
        renda: 1500,
        parcelas: 48,
        valorParcela: 450
      },
      resultadoEsperado: 'aprovado'
    },
    {
      descricao: 'todos os dados são válidos 3',
      input: {
        cpf: '12345678900',
        idade: 60,
        renda: 5000,
        parcelas: 48,
        valorParcela: 1499
      },
      resultadoEsperado: 'aprovado'
    },
  ];

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it.each(testCases)(
    'deve retornar $resultadoEsperado quando $descricao',
    async ({ descricao, input, resultadoEsperado }) => {
      const spyFetch = jest.spyOn(global, 'fetch');

      const result = await creditAnalysisAgent(input);

      console.log(`deve retornar ${resultadoEsperado} quando ${descricao}:\n`, result);

      expect(result).toBeDefined();
      expect(result.resultado).toBe(resultadoEsperado);

      expect(spyFetch).toHaveBeenCalledWith(expect.stringContaining(`score?cpf=${input.cpf}`));
      expect(spyFetch).toHaveBeenCalledWith(expect.stringContaining(`restrictions?cpf=${input.cpf}`));
      expect(spyFetch).toHaveBeenCalledWith(expect.stringContaining(`social-security?cpf=${input.cpf}`));
      expect(spyFetch).toHaveBeenCalledTimes(3);
    }
  );

});
