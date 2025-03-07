const { Router } = require("express");
const { getAllMessages } = require("../db/queries");

const indexRouter = Router();
// const messages = [
//   {
//     text: "Hi there!",
//     user: "Amando",
//     profile: "./profiles/profile1.jpg",
//     added: new Date().toLocaleTimeString("en-US", {
//       hour: "numeric",
//       minute: "2-digit",
//       hour12: true,
//     }),
//   },
//   {
//     text: "Hello World!",
//     profile: "./profiles/profile2.jpg",
//     user: "Charles",
//     added: new Date().toLocaleTimeString("en-US", {
//       hour: "numeric",
//       minute: "2-digit",
//       hour12: true,
//     }),
//   },
// ];
const messages = await getAllMessages();

indexRouter.get("/", (req, res) => {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});
indexRouter.get("/message/:index", (req, res) => {
  const message = messages[req.params.index];

  if (!message) {
    return res.status(404).send("Message not found");
  }

  res.render("messageDetails", { message });
});

module.exports = {
  indexRouter,
  messages,
};
