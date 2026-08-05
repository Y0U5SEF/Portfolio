import { motion } from "framer-motion";
import { QuoteIcon } from "../icons";
import { siteData } from "../../data/content";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Testimonials() {
  const { heading, items } = siteData.testimonials;
  return (
    <motion.div
      className="page-content page-content--wide"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <motion.h2 className="page-content__heading" variants={fadeUp}>
        {heading}
      </motion.h2>

      <div className="testimonials-grid">
        {items.map((item, i) => (
          <motion.div key={i} className="testimonial-card" variants={fadeUp}>
            <div className="testimonial-card__icon">
              <QuoteIcon size={20} />
            </div>
            <p className="testimonial-card__quote">{item.quote}</p>
            <div className="testimonial-card__author">
              <span className="testimonial-card__name">{item.name}</span>
              <span className="testimonial-card__role">{item.role}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
