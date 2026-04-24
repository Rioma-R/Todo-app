import { Routes, Route } from "react-router-dom";
import { Todo } from "./todo.jsx";
import { Home } from "./home.jsx"

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/todo" element={<Todo />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}