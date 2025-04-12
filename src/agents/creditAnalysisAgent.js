import { getPrompt, getRules } from "../utils/yamlLoader.js";
import { ChatOpenAI } from "@langchain/openai";
import { tools } from "../tools/index.js";
import { MemorySaver } from "@langchain/langgraph";
import { HumanMessage, SystemMessage } from "@langchain/core/messages";
import { createReactAgent } from "@langchain/langgraph/prebuilt";

export async function creditAnalysisAgent(input) {
    const systemPrompt = getPrompt("credit_analysis");
    const creditRules = getRules("credit_analysis");

    const model = new ChatOpenAI(
        {
            temperature: 0,
            model: "gpt-4o-mini"
        }
    ).bindTools(tools);

    const agentCheckpointer = new MemorySaver();
    const agent = createReactAgent({
        llm: model,
        tools: tools,
        checkpointSaver: agentCheckpointer,
    });

    const agentFinalState = await agent.invoke(
        {
            messages: [
                new SystemMessage(systemPrompt),
                new SystemMessage(creditRules),
                new HumanMessage(JSON.stringify(input, null, 2)),
            ]
        },
        { configurable: { thread_id: "42" } },
    );

    console.log(
        agentFinalState.messages[agentFinalState.messages.length - 1].content,
    );
}