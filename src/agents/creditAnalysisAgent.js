import { getPrompt } from "../utils/yamlLoader.js";
import { ChatOpenAI } from "@langchain/openai";
import { tools } from "../tools/index.js";
import { HumanMessage, SystemMessage } from "@langchain/core/messages";
import { createReactAgent } from "@langchain/langgraph/prebuilt";
import 'dotenv/config';

export async function creditAnalysisAgent(input) {
    const systemPrompt = getPrompt("credit_analysis_declarative");

    const model = new ChatOpenAI(
        {
            temperature: 0,
            model: "gpt-4.1"
        }
    ).bindTools(tools);

    const agent = createReactAgent({
        llm: model,
        tools: tools,
    });

    const agentFinalState = await agent.invoke(
        {
            messages: [
                new SystemMessage(systemPrompt),
                new HumanMessage(JSON.stringify(input, null, 2)),
            ]
        },
    );

    if (process.env.DEBUG === "true") {
        console.log("\n🧠 Conversa completa com o agente:\n");

        agentFinalState.messages.forEach((msg, index) => {
            const role = msg.getType();
            console.log(`🔹 [${index + 1}] ${role.toUpperCase()}:\n${JSON.stringify(msg)}\n`);
          });
    }

    return JSON.parse(agentFinalState.messages[agentFinalState.messages.length - 1].content);
}