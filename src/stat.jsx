import { Navigation } from "./navigation";
import "./CSS/Stats.css";

export function Stats() {
    const todos = JSON.parse(localStorage.getItem("todos") || "[]");

    const total = todos.length;
    const done = todos.filter((t) => t.done).length;
    const pending = total - done;
    const percent = total === 0 ? 0 : Math.round((done / total) * 100);

    return (
        <>
            <div className="navigationBar">
                <Navigation />
            </div>      
            <div className="stats-page">
                <header className="stats-header">
                    <h1>Mes <em>Stats</em></h1>
                    <p className="stats-subtitle">Un aperçu de ta productivité</p>
                </header>

                <div className="stats-grid">
                    <div className="stat-card">
                        <span className="stat-number">{total}</span>
                        <span className="stat-label">Tâches totales</span>
                    </div>
                    <div className="stat-card accent">
                        <span className="stat-number">{done}</span>
                        <span className="stat-label">Complétées</span>
                    </div>
                    <div className="stat-card">
                        <span className="stat-number">{pending}</span>
                        <span className="stat-label">En cours</span>
                    </div>
                </div>

                <div className="progress-section">
                    <div className="progress-header">
                        <span>Progression</span>
                        <span className="progress-percent">{percent}%</span>
                    </div>
                    <div className="progress-bar-bg">
                        <div className="progress-bar-fill" style={{ width: `${percent}%` }} />
                    </div>
                </div>

                {total === 0 && (
                    <div className="empty-state">
                        <span>Rien à afficher…</span>
                        Ajoute des tâches dans ta TodoList !
                    </div>
                )}
            </div>
        </>
    );
}