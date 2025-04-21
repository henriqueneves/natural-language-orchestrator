export default {
    testPathIgnorePatterns: ["/node_modules/"],
    transform: {},
    testTimeout: 1000000,
    testEnvironment: 'node',
    reporters: [
      "default",
      [
        "jest-html-reporters",
        {
          publicPath: `reports`,
          filename: `jest-report.html`,
          pageTitle: "Relatório de Testes",
          failureMessageOnly: 0,
          includeConsoleLog: true,
        }
      ]
    ]
  };