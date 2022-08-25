import React, { useState } from "react";
import "./styles.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <header>
        <h1>TodoList</h1>
      </header>
      <TodoForm
        setInputValue={setInputValue}
        inputValue={inputValue}
        todos={todos}
        setTodos={setTodos}
      />
      <TodoList todos={todos} />
    </div>
  );
}
