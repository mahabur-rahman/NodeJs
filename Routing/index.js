const http = require("http");
const fs = require("fs");

const port = 3000;
const hostName = "127.0.0.1";

const server = http.createServer((req, res) => {
  // console.log(req.url);

  const handleReadFile = (statusCode, fileLocation) => {
    fs.readFile(fileLocation, (err, data) => {
      res.writeHead(statusCode, { "Content-type": "text/html" });
      res.write(data);
      res.end();
    });
  };

  if (req.url === "/") {
    handleReadFile(200, "./pages/index.html");
  } else if (req.url === "/about") {
    handleReadFile(200, "./pages/about.html");
  } else if (req.url === "/contact") {
    handleReadFile(200, "./pages/contact.html");
  } else {
    handleReadFile(404, "./pages/error.html");
  }

  // res.end("welcome");
});

server.listen(port, hostName, () => {
  console.log(`Server is running at http://${hostName}:${port}`);
});
