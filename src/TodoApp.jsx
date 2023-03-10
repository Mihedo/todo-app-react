import React, { useState } from "react";

function TodoApp({ onDelete }) {
  const [todos, setTodos] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTodo = event.target.todo.value;
    setTodos([...todos, newTodo]);
    event.target.todo.value = "";
  };

  const handleDelete = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
    onDelete(index);
  };

  return (
    <div className="Title">
      <h1>Premier TodoApp en react</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="tweet-send">
            <input
              type="text"
              id="todo"
              name="todo"
              placeholder="Ajouter un Todo..."
            />
            <button type="submit">Ajouter</button>
          </div>
        </form>
        <div className="todos">
          {todos.map((todo, index) => (
            <h3 key={index}>
              {todo}{" "}
              <button onClick={() => handleDelete(index)} className="delete">
                ❌
              </button>
            </h3>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TodoApp;
