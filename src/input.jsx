import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Input({ setTodos }) {
  const [input, setInput] = useState("");

  function inputTodos(e) {
    setInput(e.target.value);
  }

  function addBtnHandler() {
    const newTodo = {
      id: uuidv4(),
      name: input,
      isDone: false
    };
    setTodos((prevTodo) => [...prevTodo, newTodo]);
    setInput("");
  }
  return (
    <div>
      <input type="text" onChange={(e) => inputTodos(e)} value={input} />
      <button onClick={addBtnHandler}>Add</button>
    </div>
  );
}
