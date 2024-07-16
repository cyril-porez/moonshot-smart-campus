const fs = require("fs");
const subprocess = require("child_process");

if (/^win/i.test(process.platform)) {
  // TODO: Windows
} else {
  // TODO: Linux, Mac or something else
}
// Replace these values with your actual template content and variable name
const template = fs.readFileSync("template.hcl", "utf-8");

const variableToReplace = "VAULT_TOKEN_PATH";
let replacementValue = process.env.HOME;

if (/^win/i.test(process.platform)) {
  // replace slashes by double backslashes
  replacementValue = replacementValue.replace(/\\/g, "\\\\");
  replacementValue = replacementValue + "\\\\.vault-token";
} else {
  replacementValue = replacementValue + "/.vault-token";
}

// Replace the variable in the template
const replacedTemplate = template.replace(
  new RegExp(`{{${variableToReplace}}}`, "g"),
  replacementValue
);

// Specify the file path where you want to create the new file
const filePath = "agent-config.hcl";

// Write the replaced template to the new file
fs.writeFileSync(filePath, replacedTemplate, "utf-8");

console.log(`File created at ${filePath}`);
