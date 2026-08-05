import { useEffect } from "react";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Testimonials from "./Testimonials";
import Contact from "./Contact";

const pages = { home: Home, about: About, services: Services, testimonials: Testimonials, contact: Contact };

const titles = {
  home: "Youssef El Abassi — Portfolio",
  about: "About — Youssef El Abassi",
  services: "Services — Youssef El Abassi",
  testimonials: "Testimonials — Youssef El Abassi",
  contact: "Contact — Youssef El Abassi",
};

export default function MainArea({ activePage }) {
  const Page = pages[activePage] || Home;

  useEffect(() => {
    document.title = titles[activePage] || titles.home;
  }, [activePage]);

  return (
    <main
      className={`main-area ${activePage === "home" ? "main-area--home" : ""}`}
      id="main-content"
    >
      <Page />
    </main>
  );
}
