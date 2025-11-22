import React, { useState } from "react";
import { nanoid } from "nanoid";
import "./App.css";

export default function App() {
  const [todos, setTodos] = useState([]);

  const presetTodos = [
    { id: nanoid(), text: "3 ლიტრი კოკა კოლის დალევა (დღიურად)" },
    { id: nanoid(), text: "სწავლა 5 წუთი (მეტი არ მინდა)" },
    { id: nanoid(), text: "ვარჯიში (რომ ჩემ მსუქან ძმაკას არ დავემსგავსო)" },
    { id: nanoid(), text: "წყლის დალევა (თუ კოკა კოლა არ მაქ)" },
    { id: nanoid(), text: "ჩატ ჯიპიტისთან ბირჟაობა" },
    { id: nanoid(), text: "cs2-ში რუსების გინება ბლიად" },
    { id: nanoid(), text: "მზიურიდან შაურმების გამოძახება" },
    {
      id: nanoid(),
      text: "cloudfare_ის დაჰაკვა რომ ხალხმა გითჰუბზე ატვირთვა ვერ მოასწრონ",
    },
  ];
  const addPresetTodo = (text) => {
    const newTodo = { id: nanoid(), text };
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  return (
    <div className="app">
      <h1>Todo List</h1>

      <div className="todo-list">
        {todos.length === 0 && (
          <div className="empty">ჩამონათვალი ცარიელია...</div>
        )}

        {todos.length > 0 && (
          <>
            {todos.map((t) => (
              <div className="todo-item" key={t.id}>
                <p>{t.text}</p>
                <button onClick={() => removeTodo(t.id)}>წაშლა</button>
              </div>
            ))}
          </>
        )}
      </div>

      <div className="preset-buttons">
        <h2>წინასწარი დავალებები</h2>

        <div className="buttons-container">
          {presetTodos.map((p) => (
            <button
              key={p.id}
              className="preset-button"
              onClick={() => addPresetTodo(p.text)}
            >
              {p.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
