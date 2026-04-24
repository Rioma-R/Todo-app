import { Routes, Route } from "react-router-dom";
import { App } from "./app.jsx";
import { Home} from "./home.jsx"
export function AppRoutes() {
  return (
    <Routes>
      <Route path="/todo" element={<App />} />
      <Route path="/" element={<Home />}/>
    </Routes>
  );
}