const express = require("express");

const app = express();

app.use(express.static(__dirname + "/src/public"));

app.get("/", (req, res) => {
  res.send("hello.world");
});

// app.get("/server/ping", (req, res) => {
//   res.send("pong");
// });

app.listen(8080);
