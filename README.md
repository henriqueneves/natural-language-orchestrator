# Orchestration of Business Workflows with Natural Language using ChatGPT

## Overview
This project was developed as the Final Project (TCC) for the **MBA course in Software Engineering at the University of São Paulo (USP)**.

This project explores the use of a Large Language Model (LLM) — specifically **GPT-4** — combined with the **LangChain** framework to orchestrate business workflows through **natural language instructions** within a **microservices architecture**.

The goal is to empower **product teams** — the domain knowledge holders — to define and evolve business rules without heavy dependency on technical teams, using only natural language descriptions.

Through integration with external APIs and custom tool development, the model is able to:
- Interpret business rules written in both **imperative** and **declarative** styles.
- Make dynamic **service calls** to simulate real-world financial checks.
- **Decide** and **orchestrate** credit analysis workflows using only natural language guidance.

---

## Key Concepts

- **Natural Language Business Rules**: Users define the flow logic using natural language prompts instead of hardcoded procedures.
- **LangChain Framework**: Used to expand GPT-4's capabilities to call external APIs, handle state, and orchestrate workflows.
- **Custom Tools**: Functions (tools) that the model can invoke to perform tasks like mathematical calculations and API queries.
- **Mocked Microservices**: External systems are simulated using **WireMock** to validate the architecture without requiring real external services.

---

## Main Components

| Component | Description |
|:----------|:------------|
| **GPT-4 via OpenAI API** | Processes natural language instructions and orchestrates business rules. |
| **LangChain** | Enables structured tool calling, memory management, and action planning. |
| **Custom Tools** | External HTTP requests (simulated APIs), arithmetic calculators for age and income commitment calculations. |
| **WireMock** | Simulates third-party credit APIs for testing credit policy validations. |
| **Docker** | 	Used to containerize and run the WireMock server for local simulations. |
| **Node.js 20+** | Runtime environment for the project execution. |
| **JSON Interfaces** | Standardized input and output schemas for seamless API communication. |

---

## Business Scenario Simulated

The orchestrated workflow simulates a **credit financing policy**, checking:
- Applicant's **minimum and maximum age** (considering financing period).
- Applicant's **credit score** from an external provider.
- Applicant's **income commitment** threshold.
- Absence of **legal restrictions** and **deceased records** associated with the CPF (Brazilian personal ID).

Approval or rejection is decided based on strict adherence to these business rules.

---

## Technical Highlights

- Both **imperative** and **declarative** prompt engineering styles were evaluated, with comparable performance observed.
- **Temperature set to 0** during generation to minimize randomness and improve determinism.
- Specific tooling was required for all **arithmetic operations** to avoid hallucinations and logic inconsistencies from the model.
- Customizable and modular architecture to facilitate future expansion or real-world integration.

---

## Getting Started

### Requirements
- Node.js v20 or newer
- OpenAI API Key
- Docker

### Setup

```bash
# Clone the repository
git clone https://github.com/henriqueneves/natural-language-orchestrator.git

# Install dependencies
npm install

# Configure environment variables
Add the config OPENAI_API_KEY in .env file

# Run Wiremock
docker-compose up

# Run the project
node .
```

---

## Limitations and Future Improvements

- **Arithmetic dependence**: Full autonomy through natural language is limited by the need for explicit tool development for numeric operations.
- **Error handling**: Basic error handling for service outages is demonstrated, but could be extended for production-grade resilience.
- **Model evolution**: Future studies could explore the use of multimodal models or custom fine-tuning for specialized domains.

---

## Credits

Developed by **Henrique Gracioli Neves**  
Supervisor: **Lucas Guerreiro** (University of São Paulo – USP)
