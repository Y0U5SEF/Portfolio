import { motion } from "framer-motion";

function GithubIcon({ size = 18, ...props }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter" {...props}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ size = 18, ...props }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter" {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function InstagramIcon({ size = 18, ...props }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter" {...props}>
      <rect width="20" height="20" x="2" y="2" rx="0" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function BehanceIcon({ size = 18, ...props }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter" {...props}>
      <path d="M3 18V6h4.5a3 3 0 0 1 0 6H3" />
      <path d="M3 12h5a3.5 3.5 0 0 1 0 7H3" />
      <path d="M15 18.5c3 0 5-1.5 5-4s-2-4-5-4-5 1.5-5 4 2 4 5 4z" />
      <line x1="13" y1="7" x2="19" y2="7" />
    </svg>
  );
}

function TwitterIcon({ size = 18, ...props }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter" {...props}>
      <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
      <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
    </svg>
  );
}

const socialLinks = [
  { name: "GitHub", icon: GithubIcon, url: "https://github.com/" },
  { name: "LinkedIn", icon: LinkedinIcon, url: "https://linkedin.com/in/" },
  { name: "Instagram", icon: InstagramIcon, url: "https://instagram.com/" },
  { name: "Behance", icon: BehanceIcon, url: "https://behance.net/" },
  { name: "X / Twitter", icon: TwitterIcon, url: "https://twitter.com/" },
];

const itemVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.6 + i * 0.07, duration: 0.4, ease: "easeOut" },
  }),
};

export default function SocialLinks() {
  return (
    <div className="social-links">
      {socialLinks.map(({ name, icon: Icon, url }, i) => (
        <motion.a
          key={name}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="social-links__link"
          aria-label={name}
          custom={i}
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          <Icon size={18} />
        </motion.a>
      ))}
    </div>
  );
}
