import fs from "fs";
import path from "path";
import yaml from "js-yaml";

function loadYamlFile(filePath) {
    const fullPath = path.resolve(filePath);
    const fileContent = fs.readFileSync(fullPath, "utf8");
    return yaml.load(fileContent);
}

export function getPrompt(key = "credit_analysis") {
    const prompts = loadYamlFile("./src/prompts.yaml");
    return prompts[key];
}