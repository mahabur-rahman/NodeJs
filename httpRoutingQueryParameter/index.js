const express = require("express");
const app = express();
const PORT = 3000;
const bodyParser = require("body-parser");
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// register form handle
app.get("/register", (req, res) => {
  res.sendFile(__dirname + "/register.html");
});

app.post("/register", (req, res) => {
  const name = req.body.fullName;
  const age = req.body.age;
  res.send(`<h2>Your name is ${name} and age is ${age}</h2>`);
});

// post method

// app.post("/user", (req, res) => {
//   const name = req.body.name;
//   const age = req.body.age;
//   res.send(`Welcome ${name}. Your age is ${age}`);
// });

// app.get("/userId/:id/userAge/:age", (req, res) => {
//    header_______
//   const id = req.header("id");
//   const name = req.header("name");

//   res.send(`<h1>Student id : ${id}, name : ${name}</h1>`);

//    route parameter _____________

//    const id = req.params.id;

//    const age = req.params.age;

//    res.send(`<h1>Student id : ${id}, age : ${age}</h1>`);

//    query parameter_____________

//      const id = req.query.id;

//      const name = req.query.name;

//    const { id, name } = req.query;

//    res.send(`<h1>Student id is : ${id}</h1><h1>Student name is : ${name}</h1>`);
// });

app.listen(PORT, () => {
  console.log(`Server is running at http:
  localhost:${PORT}`);
});
