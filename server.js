const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// STATIC WEBSITE
app.use(express.static(path.join(__dirname, "public")));

// SPA FALLBACK (wichtig!)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log("Server läuft 🚀 auf Port " + PORT);
});
