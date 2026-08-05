import { motion } from "framer-motion";
import AnimatedSpecialities from "../AnimatedSpecialities/AnimatedSpecialities";
import { siteData } from "../../data/content";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Home() {
  return (
    <div className="home-content">
      <motion.div
        className="home-avatar"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
      >
        <img
          src="/avatar.jpg"
          alt={`Portrait of ${siteData.name}`}
          className="home-avatar__img"
          onError={(e) => { e.target.style.display = "none"; e.target.nextSibling.style.display = "flex"; }}
        />
        <div className="home-avatar__placeholder" style={{ display: "none" }}>
          {siteData.name.charAt(0)}
        </div>
      </motion.div>
      <motion.h1
        className="home-content__name"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
      >
        {siteData.name}
      </motion.h1>
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.25, duration: 0.6, ease: "easeOut" }}
      >
        <AnimatedSpecialities />
      </motion.div>
    </div>
  );
}
