const express = require("express");
const path = require("path");

const app = express();
const PORT = 8080;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "about.html"));
});

app.get("/contact-me", (req, res) => {
  res.sendFile(path.join(__dirname, "contact-me.html"));
});

app.use((req, res) => {
  res.status(404).send("<h1>404 - page not found pas active </h1> ");
});

app.listen(PORT, () => {
  console.log(`runnind server open ${PORT}`);
});
