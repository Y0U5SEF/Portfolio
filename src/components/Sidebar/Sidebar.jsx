import { motion } from "framer-motion";
import Avatar from "./Avatar";
import NavMenu from "./NavMenu";
import SocialLinks from "./SocialLinks";
import Copyright from "./Copyright";
import ThemeToggle from "../ThemeToggle";
import { siteData } from "../../data/content";

const sidebarVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut", when: "beforeChildren", staggerChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function Sidebar({ activePage, onNavigate }) {
  return (
    <motion.aside
      className="sidebar"
      role="complementary"
      variants={sidebarVariants}
      initial="hidden"
      animate="visible"
    >
      <ThemeToggle />

      <motion.div className="sidebar__top" variants={fadeUp}>
        <Avatar name={siteData.name} />
        <span className="sidebar__name">{siteData.name}</span>
      </motion.div>

      <NavMenu activePage={activePage} onNavigate={onNavigate} />

      <motion.div className="sidebar__bottom" variants={fadeUp}>
        <SocialLinks />
        <Copyright name={siteData.name} />
      </motion.div>
    </motion.aside>
  );
}
