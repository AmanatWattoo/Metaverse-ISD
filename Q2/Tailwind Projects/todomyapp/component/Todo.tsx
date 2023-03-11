import React, { useState } from "react";

interface TodoItem {
  id: number;
  text: string;
  done: boolean;
}

const Todo = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [todoItems, setTodoItems] = useState<TodoItem[]>([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = () => {
    const newItem: TodoItem = {
      id: Date.now(),
      text: inputValue,
      done: false,
    };

    setTodoItems([...todoItems, newItem]);
    setInputValue("");
  };

  const handleToggleDone = (id: number) => {
    const updatedItems = todoItems.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          done: !item.done,
        };
      }

      return item;
    });

    setTodoItems(updatedItems);
  };

  const handleDeleteTodo = (id: number) => {
    const updatedItems = todoItems.filter((item) => item.id !== id);
    setTodoItems(updatedItems);
  };

  return (
    <div>
      <h1>Todo App</h1>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todoItems.map((item) => (
          <li key={item.id}>
            <input
              type="checkbox"
              checked={item.done}
              onChange={() => handleToggleDone(item.id)}
            />
            <span style={{ textDecoration: item.done ? "line-through" : "" }}>
              {item.text}
            </span>
            <button onClick={() => handleDeleteTodo(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
