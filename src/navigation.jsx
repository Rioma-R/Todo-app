import "./css/Nav.css";
import { NavLink } from "react-router-dom";

export function Navigation() {
  return (
    <nav className="nav">
      <NavLink to="/" end className={({ isActive }) => isActive ? "nav-btn active" : "nav-btn"}>
        Accueil
      </NavLink>
      <NavLink to="/todo" className={({ isActive }) => isActive ? "nav-btn active" : "nav-btn"}>
        TodoList
      </NavLink>
      <NavLink to="/stats" className={({ isActive }) => isActive ? "nav-btn active" : "nav-btn"}>
        Statistiques
      </NavLink>
    </nav>
  );
}