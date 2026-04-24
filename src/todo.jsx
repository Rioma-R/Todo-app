import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navigation } from "./navigation";
import "./todo.css";

export function Todo() {
  const navigate = useNavigate();
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (!input.trim()) return;
    setTodos([...todos, { id: Date.now(), text: input.trim(), done: false }]);
    setInput("");
  };

  const toggleTodo = (id) =>
    setTodos(todos.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));

  const deleteTodo = (id) => setTodos(todos.filter((t) => t.id !== id));

  return (
    <>
      <div className="navigationBar">
        <Navigation />
      </div>

      <div className="app">
        <header className="app-header">
          <h1>
            My <em>Todo</em> App
          </h1>
          <p className="task-count">
            {todos.length} tâche{todos.length !== 1 ? "s" : ""}
          </p>
        </header>

        <div className="todo-form">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addTodo()}
            placeholder="Ajouter une tâche..."
          />
          <button onClick={addTodo}>+ Ajouter</button>
        </div>

        {todos.length === 0 ? (
          <div className="empty-state">
            <span>Rien pour l'instant…</span>
            Ajoutez votre première tâche !
          </div>
        ) : (
          <ul className="todo-list">
            {todos.map((t) => (
              <li key={t.id} className={`todo-item ${t.done ? "done" : ""}`}>
                <input
                  type="checkbox"
                  checked={t.done}
                  onChange={() => toggleTodo(t.id)}
                />
                <span className="todo-text">{t.text}</span>
                <button className="delete-btn" onClick={() => deleteTodo(t.id)}>
                  ×
                </button>
              </li>
            ))}
          </ul>
        )}

      </div>
    </>
  );

}
