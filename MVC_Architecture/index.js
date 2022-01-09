const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));

const htmlForm = `
    <form method="POST" action="/users">
       <input type="text" name="name" placeholder="Enter name" />
       <input type="number" name="age" placeholder="Enter age" />

       <button type="submit">Save User</button>
    </form>
`;

const users = [
  {
    name: "Mahabur Rahman",
    age: 26,
  },
  {
    name: "John Doe",
    age: 47,
  },
];

app.get("/users", (req, res) => {
  //   res.send("Hello Users");
  res.send(htmlForm);
});

app.post("/users", (req, res) => {
  //   res.send("I am post save user like that");
  const name = req.body.name;
  const age = Number(req.body.age);

  const user = {
    name,
    age,
  };

  users.push(user);
  res.status(201).json({
    success: true,
    users,
  });
});

app.use((req, res, next) => {
  res.status(404).json({
    message: "Resource not found",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
