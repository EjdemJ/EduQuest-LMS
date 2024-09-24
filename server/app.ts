import express from "express";
import cors from "cors";

const app = express();

export default app;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/users", (req, res) => {
  const users = [
    {
      name: "user 1",
      id: 1,
    },
    {
      name: "user 2",
      id: 2,
    },
    {
      name: "user 3",
      id: 3,
    },
    {
      name: "user 4",
      id: 4,
    },
  ];
  res.json(users);
});

app.get("/greetings", (req, res) => {
  const greeting = "Hello World!";
  res.json(greeting);
});
