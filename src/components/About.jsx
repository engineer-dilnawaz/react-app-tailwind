import { useState } from "react";

export default function About() {
  const [todosList, setTodosList] = useState([]);
  return (
    <>
      <h1>Hello Word!</h1>
      <button
        onClick={() => {
          import("../data").then((module) => setTodosList(module.todos));
        }}
      >
        Load Data
      </button>
      {todosList.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </>
  );
}
