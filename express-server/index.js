// import
const app = require("./app");
const PORT = 3000;

// console.log(app);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
