import fs from "fs";
// Add to resources.json and save it
const resourcesPath = "./resources.json";

export function saveToResources(key: string, value: any) {
  // If resources.json doesnt exist create it
  if (!fs.existsSync(resourcesPath)) {
    fs.writeFileSync(resourcesPath, JSON.stringify({}));
  }
  // Read resources.json
  const resources = require(resourcesPath);
  // Add key and value to resources.json
  resources[key] = value;

  // Save resources.json
  fs.writeFileSync(resourcesPath, JSON.stringify(resources));
}
