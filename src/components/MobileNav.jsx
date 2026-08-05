import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Sidebar/Logo";
import NavMenu from "./Sidebar/NavMenu";
import SocialLinks from "./Sidebar/SocialLinks";
import Copyright from "./Sidebar/Copyright";
import ThemeToggle from "./ThemeToggle";
import { siteData } from "../data/content";

function HamburgerIcon({ isOpen }) {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.line
        x1="3" y1="6" x2="19" y2="6"
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="square"
        animate={isOpen ? { y1: 11, y2: 11, rotate: 45 } : { y1: 6, y2: 6, rotate: 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        style={{ transformOrigin: "center" }}
      />
      <motion.line
        x1="3" y1="11" x2="19" y2="11"
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="square"
        animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.15 }}
      />
      <motion.line
        x1="3" y1="16" x2="19" y2="16"
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="square"
        animate={isOpen ? { y1: 11, y2: 11, rotate: -45 } : { y1: 16, y2: 16, rotate: 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        style={{ transformOrigin: "center" }}
      />
    </svg>
  );
}

const navVariants = {
  hidden: { x: "100%" },
  visible: { x: 0, transition: { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] } },
  exit: { x: "100%", transition: { duration: 0.25, ease: [0.25, 0.1, 0.25, 1] } },
};

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

export default function MobileNav({ activePage, onNavigate }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigate = (page) => {
    onNavigate(page);
    setIsOpen(false);
  };

  return (
    <>
      <header className="mobile-header">
        <Logo size={40} />
        <button
          className="hamburger"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          <HamburgerIcon isOpen={isOpen} />
        </button>
      </header>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="mobile-nav-overlay"
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={() => setIsOpen(false)}
            />
            <motion.nav
              className="mobile-nav"
              variants={navVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              aria-label="Mobile navigation"
            >
              <div className="mobile-nav__inner">
                <NavMenu activePage={activePage} onNavigate={handleNavigate} />
                <div className="mobile-nav__bottom">
                  <ThemeToggle />
                  <SocialLinks />
                  <Copyright name={siteData.name} />
                </div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
