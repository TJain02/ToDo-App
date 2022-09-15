export default function Todos({ todos, setTodos }) {
  function todoStrike(id) {
    const strikeTodo = todos.map((item) =>
      item.id === id ? { ...item, isDone: !item.isDone } : item
    );
    setTodos(strikeTodo);
  }
  return (
    <div>
      <ul>
        {todos.map(({ id, name, isDone }) => (
          <li
            key={id}
            style={{
              textDecoration: isDone ? "line-through" : "none",
              cursor: "pointer"
            }}
            onClick={() => todoStrike(id)}
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
}
