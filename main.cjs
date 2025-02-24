const path = require("node:path");
const express = require("express");
const assetsPath = path.join(__dirname, "public");

const app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    profile: "./profiles/profile1.jpg",
    added: new Date().toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    }),
  },
  {
    text: "Hello World!",
    profile: "./profiles/profile2.jpg",
    user: "Charles",
    added: new Date().toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    }),
  },
];

app.use(express.static(assetsPath));
app.get("/", (req, res) => {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});
app.get("/new", (req, res) => {
  res.render("form", { title: "Mini Messageboard", messages: messages });
});

app.use((err, req, res, next) => {
  console.error(err);
  const statusCode = err.statusCode || 500;
  res
    .status(statusCode)
    .json({ error: err.message || "Internal Server Error" });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});
