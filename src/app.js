const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "..", "dist")));

app.get("/emails", (req, res) => {
 const emails = [
  {
   id: "1",
   subject: "My subject",
   isImportant: true,
   body: "This is the first email implemented by Leslie Dinh, and it's super long long so that we are forced to cut it short. And now, we will introduce briefly the content of the paper published by Leslie and his collegues on March, 2018. The topic of the article is about AlphaZero and his 100 magnificiant games. Alphazero won 94/100 marches and, obviously, being the strongest chess engine in the world, at the moment. However, let's talk about how AlphaZero was developed over the years, before released in 2000s. In particular, we've also known that Deep Blue, Kasparov's opponent in 90s, had changed the way we think about the machine, especially artificial intelligence tech.",
   timestamp: Date.now() + 1001
  },
  {
   id: "2",
   subject: "My subject 2",
   viewedAt: Date.now(),
   body: "This is the second mail I send to you to discuss about the scholarship for freshmen international students, especially those coming from Asia. First, I'd love this place very much, I spent 3 hours searching how the school look like in fall on Google.",
   timestamp: Date.now() + 1002
  },
  {
   id: "3",
   subject: "My subject 3",
   body: "This is the third mail I send you to confirm that I choose your school for my post education process. Thanks for helping me! Goodbye.",
   timestamp: Date.now() + 1003
  }
 ];
 res.json(emails);
});

app.post("/emails", (req, res) => {
 console.log(req.body);
 console.log("======================");
 res.json(req.body);
});

app.all("*", (req, res) => {
 res.sendFile(path.join(__dirname, "..", "dist", "index.html"));
});

app.use((error, req, res, next) => {
 res.status(500).json({ error: error.message });
});

module.exports = app;