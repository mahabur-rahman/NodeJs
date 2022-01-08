const express = require("express");
const app = express();
const PORT = 3000;
const bodyParser = require("body-parser");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get("/", (req, res) => {
  //   res.send("Hello");
  res.sendFile(__dirname + "/index.html");
});

app.get("/circle", (req, res) => {
  //   res.send("Hello");
  res.sendFile(__dirname + "/circle.html");
});

app.get("/triangle", (req, res) => {
  //   res.send("Hello");
  res.sendFile(__dirname + "/triangle.html");
});

app.post("/circle", (req, res) => {
  const radius = req.body.radius;
  const area = Math.PI * radius * radius;
  res.send(`<h1>Result : ${area}</h1>`);
});

app.post("/triangle", (req, res) => {
  const base = req.body.base;
  const height = req.body.height;
  const area = 0.5 * base * height;
  res.send(`<h1>Result : ${area}</h1>`);
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
