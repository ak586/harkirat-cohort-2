const express = require("express");
const { Todo } = require("./db");
const bodyParser = require("body-parser");
const { todoType } = require("./validations/types");
const cors = require("cors");
const app = express();

app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3000;

// get todos
app.get("/todos", async function (req, res) {
  const todos = await Todo.find({});
  return res.json({
    todos,
  });
});

// add new todos
app.post("/todos", async function (req, res) {
  console.log("called");
  const payload = req.body;
  const validation = todoType.safeParse(payload);
  if (!validation.success) {
    res.status(400).json({ message: "Data validation failed" });
  }
  const todo = await Todo.create({
    title: payload.title,
    description: payload.description,
    completed: false,
  });
  res.status(201).json({ message: "Todos created successfully" });
});

app.put("/todos/:todoId", async function (req, res) {
  const todoId = req.params.todoId;
  await Todo.findByIdAndUpdate(todoId, { completed: true });
  return res.json({
    message: "Todo marked as completed",
  });
});

app.listen(port, () => console.log(`Server running on port ${port} 🔥`));
