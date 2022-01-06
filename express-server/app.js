const express = require("express");
const app = express();
// user route
const userRouter = require("./routes/users.route");

app.use("/api/user", userRouter);

app.use("/register", (req, res) => {
  res.statusCode = 200;
  res.sendFile(__dirname + "/pages/register.html");

  //   res.send("Register page");

  //   res.status(200).json({
  //     message: "Hello World ",
  //     statusCode: 200,
  //   });

  //   res.redirect("/login");
});

app.get("/login", (req, res) => {
  //   res.cookie("name", "john");
  //   res.cookie("age", 30);

  //   res.clearCookie("name");
  res.header("id", "201531043008");
  res.end();
});

app.use("/", (req, res) => {
  res.statusCode = 200;
  res.sendFile(__dirname + "/pages/index.html");
});

app.use((req, res) => {
  res.send("<h1>404, Page not found !</h1>");
});

// ----------------------
// app.post("/", (req, res) => {
//   res.send("I am a post request");
//   res.end();
// });

// app.put("/", (req, res) => {
//   res.send("I am a put request");
//   res.end();
// });

// app.delete("/", (req, res) => {
//   res.send("I am a delete request");
//   res.end();
// });

// app.get("/about", (req, res) => {
//   res.send("I am a get request at about route");
// });

// export
module.exports = app;
