import { getCreditScoreTool } from "./getCreditScoreTool.js";
import { getRestrictionsTool } from "./getRestrictionsTool.js";
import { getSocialSecurityTool } from "./getSocialSecurityTool.js";
import { validateAgeAtEndOfLoanTermTool } from "./validateAgeAtEndOfLoanTermTool.js";
import { validateIncomeCommitmentTool } from "./validateIncomeCommitmentTool.js";   

export const tools = [
    getCreditScoreTool,
    getRestrictionsTool,
    getSocialSecurityTool,
    validateIncomeCommitmentTool,
    validateAgeAtEndOfLoanTermTool,
]