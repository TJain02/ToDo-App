import "./styles.css";
import { useState } from "react";
import Input from "./input";
import Todos from "./todos";

export default function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div class="App">
      <h1>ToDo App </h1>
      <Input setTodos={setTodos} />
      <Todos todos={todos} setTodos={setTodos} />
    </div>
  );
}
