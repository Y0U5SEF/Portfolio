import { motion } from "framer-motion";

const navItems = ["Home", "About", "Services", "Testimonials", "Contact"];

const itemVariants = {
  hidden: { opacity: 0, x: -12 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.35 + i * 0.08, duration: 0.4, ease: "easeOut" },
  }),
};

export default function NavMenu({ activePage, onNavigate }) {
  return (
    <nav className="nav-menu" aria-label="Main navigation">
      <ul>
        {navItems.map((item, index) => {
          const isActive = activePage === item.toLowerCase();
          return (
            <li key={item}>
              <motion.button
                className={`nav-menu__item ${isActive ? "nav-menu__item--active" : ""}`}
                onClick={() => onNavigate(item.toLowerCase())}
                aria-current={isActive ? "page" : undefined}
                custom={index}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
              >
                <span className="nav-menu__marker" aria-hidden="true" />
                <span className="nav-menu__number" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {item}
              </motion.button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
