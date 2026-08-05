import { useState } from "react";
import { ThemeProvider } from "./components/ThemeContext";
import Sidebar from "./components/Sidebar/Sidebar";
import MainArea from "./components/MainArea/MainArea";

export default function App() {
  const [activePage, setActivePage] = useState("home");

  return (
    <ThemeProvider>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <div className="app-layout">
        <Sidebar activePage={activePage} onNavigate={setActivePage} />
        <MainArea activePage={activePage} />
      </div>
    </ThemeProvider>
  );
}
