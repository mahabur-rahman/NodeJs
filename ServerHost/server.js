const http = require("http");
const fs = require("fs");

const PORT = process.env.PORT;
// const hostName = "127.0.0.1";

const handleReadFile = (fileLocation, statusCode, req, res) => {
  fs.readFile(fileLocation, "utf-8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.writeHead(statusCode, { "Content-type": "text/html" });
      res.write(data);
      res.end();
    }
  });
};

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    handleReadFile("./pages/index.html", 200, req, res);
  } else if (req.url === "/about") {
    handleReadFile("./pages/about.html", 200, req, res);
  } else if (req.url === "/contact") {
    handleReadFile("./pages/contact.html", 200, req, res);
  } else {
    handleReadFile("./pages/error.html", 404, req, res);
  }
});

server.listen(PORT, () => {
  console.log(`Server is running`);
});
