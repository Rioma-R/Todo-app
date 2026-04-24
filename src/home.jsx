import { useNavigate } from "react-router-dom";
import { Navigation } from "./navigation";
import "./css/Home.css";

export function Home() {
  const navigate = useNavigate();

  return (
    <>
      <div className="navigationBar">
        <Navigation />
      </div>
      <div className="home">
        <header className="home-header">
          <h1>Bienvenue sur l'app de <em>Roma</em></h1>
          <p className="home-subtitle">Gérez vos tâches simplement et efficacement.</p>
        </header>
      </div>
    </>
  );
}