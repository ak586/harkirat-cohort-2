import { useState } from "react";
import "./App.css";
import { CreateTodo } from "./components/CreateTodo";
import { Todos } from "./components/Todos";

function App() {
  const [renderCount, setRenderCount] = useState(0);
  const [todos, setTodos] = useState([]);

  fetch("http://localhost:3000/todos").then(async function (res) {
    const json = await res.json();
    setTodos(json.todos);
    setRenderCount(renderCount + 1);
  });

  return (
    <div>
      <h1> A Full-stack Todos App</h1>
      <p>{renderCount}</p>
      <CreateTodo></CreateTodo>
      <Todos todos={todos}></Todos>
    </div>
  );
}

export default App;
