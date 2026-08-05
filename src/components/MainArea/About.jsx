import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { siteData } from "../../data/content";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function LevelBar({ name, level, delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div className="level-item" ref={ref}>
      <div className="level-item__header">
        <span className="level-item__name">{name}</span>
        <span className="level-item__percent">{level}%</span>
      </div>
      <div className="level-item__track">
        <motion.div
          className="level-item__fill"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 0.8, delay: delay, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

function LanguageBar({ name, level, percent, delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div className="level-item" ref={ref}>
      <div className="level-item__header">
        <span className="level-item__name">{name}</span>
        <span className="level-item__label">{level}</span>
      </div>
      <div className="level-item__track">
        <motion.div
          className="level-item__fill level-item__fill--lang"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${percent}%` } : { width: 0 }}
          transition={{ duration: 0.8, delay: delay, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

export default function About() {
  const { heading, body, caption, skills, tools, languages, experience, education } = siteData.about;
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

      <motion.p className="about-bio" variants={fadeUp}>
        {body}
      </motion.p>
      <motion.p className="page-content__caption" variants={fadeUp}>
        {caption}
      </motion.p>

      <div className="about-grid">
        <div className="about-col">
          <motion.div className="resume-section" variants={fadeUp}>
            <h3 className="resume-section__title">Skills</h3>
            <div className="skills-list">
              {skills.map((skill, i) => (
                <LevelBar key={skill.name} name={skill.name} level={skill.level} delay={i * 0.05} />
              ))}
            </div>
          </motion.div>

          <motion.div className="resume-section" variants={fadeUp}>
            <h3 className="resume-section__title">Tools</h3>
            <div className="tools-list">
              {tools.map((tool) => (
                <span key={tool} className="tool-tag">{tool}</span>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="about-col">
          <motion.div className="resume-section" variants={fadeUp}>
            <h3 className="resume-section__title">Languages</h3>
            <div className="skills-list">
              {languages.map((lang, i) => (
                <LanguageBar key={lang.name} name={lang.name} level={lang.level} percent={lang.percent} delay={i * 0.05} />
              ))}
            </div>
          </motion.div>

          <motion.div className="resume-section" variants={fadeUp}>
            <h3 className="resume-section__title">Experience</h3>
            <div className="timeline">
              {experience.map((exp) => (
                <div key={exp.role} className="timeline__item">
                  <span className="timeline__period">{exp.period}</span>
                  <h4 className="timeline__role">{exp.role}</h4>
                  <p className="timeline__desc">{exp.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div className="resume-section" variants={fadeUp}>
            <h3 className="resume-section__title">Education</h3>
            <div className="timeline">
              {education.map((edu) => (
                <div key={edu.degree} className="timeline__item">
                  <span className="timeline__period">{edu.year}</span>
                  <h4 className="timeline__role">{edu.degree}</h4>
                  <p className="timeline__desc">{edu.school}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
