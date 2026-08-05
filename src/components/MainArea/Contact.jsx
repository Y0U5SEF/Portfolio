import { motion } from "framer-motion";
import { siteData } from "../../data/content";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Contact() {
  const { heading, body, email } = siteData.contact;
  return (
    <motion.div
      className="page-content"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <motion.h2 className="page-content__heading" variants={fadeUp}>
        {heading}
      </motion.h2>
      <motion.p className="page-content__body" variants={fadeUp}>
        {body}{" "}
        <a href={`mailto:${email}`} style={{ textDecoration: "underline" }}>
          {email}
        </a>
      </motion.p>
      <motion.form
        className="contact-form"
        onSubmit={(e) => e.preventDefault()}
        aria-label="Contact form"
        variants={fadeUp}
      >
        <div className="form-group">
          <label htmlFor="name" className="form-group__label">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-group__input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-group__label">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-group__input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message" className="form-group__label">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="form-group__textarea"
            required
          />
        </div>
        <button type="submit" className="submit-button">
          Send Message
        </button>
      </motion.form>
    </motion.div>
  );
}
