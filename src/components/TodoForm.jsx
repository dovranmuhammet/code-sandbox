import React from "react";

const TodoForm = ({ setInputValue, inputValue, todos, setTodos }) => {
  const handleInputChange = (e) => {
    //console.log(e.target.value);
    setInputValue(e.target.value);
  };

  const submitTodo = (e) => {
    e.preventDefault();

    setTodos([
      ...todos,
      {
        text: inputValue,
        completed: false,
        id: Math.random() * 1000
      }
    ]);
    setInputValue("");
  };

  return (
    <>
      <input
        onChange={handleInputChange}
        value={inputValue}
        type="text"
        placeholder="Type todo"
      />
      <button type="submit" onClick={submitTodo}>
        Add
      </button>
    </>
  );
};

export default TodoForm;
