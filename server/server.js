const http = require("http");

const port = 3000;
const hostName = "127.0.0.1";

const createServer = http.createServer((req, res) => {
  res.writeHead(202, { "Content-Type": "text/html" });
  res.write("<h1>This is create server</h1>");
  res.write("<h3>This is create server</h3>");
  res.write("<p>This is create server</p>");
  res.end();
});

createServer.listen(port, hostName, () => {
  console.log(`Server successfully running at http://${hostName}:${port}`);
});
