import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";

const pages = { home: Home, about: About, services: Services, contact: Contact };

export default function MainArea({ activePage }) {
  const Page = pages[activePage] || Home;
  return (
    <main
      className={`main-area ${activePage === "home" ? "main-area--home" : ""}`}
      id="main-content"
    >
      <Page />
    </main>
  );
}
