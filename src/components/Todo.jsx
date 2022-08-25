import React from "react";

function Todo({ text, todos, setTodos }) {
  const deleteTodos = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <li>{text}</li>
      <button onClick={deleteTodos}>Delete</button>
    </div>
  );
}

export default Todo;
