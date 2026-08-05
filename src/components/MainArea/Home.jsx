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
      <motion.h1
        className="home-content__name"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
      >
        {siteData.name}
      </motion.h1>
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
      >
        <AnimatedSpecialities />
      </motion.div>
    </div>
  );
}
