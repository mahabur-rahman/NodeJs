const express = require("express");
const app = express();
const PORT = 3000;

const myMiddleWare = (req, res, next) => {
  console.log("Middle Ware Funnction");
  req.currentTime = new Date(Date.now());
  next();
};

app.use(myMiddleWare);

// 404 not found page | Error handling
app.use((req, res, next) => {
  res.send("<h1>404 ! Not Found Page</h1>");
});

app.use((err, req, res, next) => {
    res.status(500).send("Something broke!");
});

app.get("/", myMiddleWare, (req, res) => {
  console.log("Home Route " + req.currentTime);
  res.send("<h1>Home Page</h1>");
});

app.get("/about", myMiddleWare, (req, res) => {
  console.log("About Route " + req.currentTime);
  res.send("<h1>About Page</h1>");
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
