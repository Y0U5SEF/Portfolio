import { useState } from "react";
import { ThemeProvider } from "./components/ThemeContext";
import Sidebar from "./components/Sidebar/Sidebar";
import MainArea from "./components/MainArea/MainArea";
import MobileNav from "./components/MobileNav";
import CustomCursor from "./components/CustomCursor";
import WhatsAppButton from "./components/WhatsAppButton";

export default function App() {
  const [activePage, setActivePage] = useState("home");

  return (
    <ThemeProvider>
      <CustomCursor />
      <WhatsAppButton />
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <MobileNav activePage={activePage} onNavigate={setActivePage} />
      <div className="app-layout">
        <Sidebar activePage={activePage} onNavigate={setActivePage} />
        <MainArea activePage={activePage} />
      </div>
    </ThemeProvider>
  );
}
