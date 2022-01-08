const express = require("express");
const app = express();
const PORT = 3000;

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/triangle", (req, res) => {
  res.sendFile(__dirname + "/triangle.html");
});

app.get("/circle", (req, res) => {
  res.sendFile(__dirname + "/circle.html");
});

// get user input
app.post("/triangle", (req, res) => {
  const { base, height } = req.body;
  const area = 0.5 * base * height;
  res.send(`<h1>Result of Triangle : ${area}</h1>`);
});

app.post("/circle", (req, res) => {
  const radius = req.body.radius;
  const area = Math.PI * radius * radius;

  res.send(`<h1>Result of Radius : ${area}</h1>`);
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
