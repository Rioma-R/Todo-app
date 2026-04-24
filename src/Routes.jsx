import { Routes, Route } from "react-router-dom";
import { Todo } from "./todo.jsx";
import { Home } from "./home.jsx"
import { Stats } from "./stat.jsx";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/todo" element={<Todo />} />
      <Route path="/stats" element={<Stats />} />
    </Routes>
  );
}