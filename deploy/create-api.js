// To send bash commands
const { exec } = require("child_process");

async function main() {
  // Get Command line arguments
  const [name] = process.argv.slice(2);

  if (!name) throw "Missing name argument.\n\nUsage: yarn create-api <name>\n\n"

  // Run Claudia commands

}

main()
  .then(console.log)
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
