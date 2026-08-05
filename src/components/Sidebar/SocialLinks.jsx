import { motion } from "framer-motion";
import { siGithub, siInstagram, siBehance, siX, siDribbble, siWhatsapp } from "simple-icons";

function SimpleIcon({ icon, size = 18, ...props }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d={icon.path} />
    </svg>
  );
}

const socialLinks = [
  { name: "GitHub", icon: siGithub, url: "https://github.com/Y0U5SEF" },
  // { name: "Dribbble", icon: siDribbble, url: "https://dribbble.com/" },
  { name: "Instagram", icon: siInstagram, url: "https://instagram.com/ussef.elabassi" },
  // { name: "Behance", icon: siBehance, url: "https://behance.net/" },
  // { name: "X", icon: siX, url: "https://x.com/" },
  { name: "WhatsApp", icon: siWhatsapp, url: "https://wa.me/447828725827" },
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
      {socialLinks.map(({ name, icon, url }, i) => (
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
          <SimpleIcon icon={icon} size={18} />
        </motion.a>
      ))}
    </div>
  );
}
