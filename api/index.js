const express = require("express");
const app = express();

app.use(express.json());

// Cors
const cors = require("cors");
app.use(cors());

app.get("/", (req, res) => {
  res.json({
    message: "🦄🌈✨👋🌎🌍🌏✨🌈🦄",
  });
});

module.exports = app;

if (require.main === module) {
  app.listen(8080, () => {
    console.log("Express API started on port 8080");
  });
}
