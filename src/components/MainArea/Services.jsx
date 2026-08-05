import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CodeIcon,
  LayoutIcon,
  PenToolIcon,
  Share2Icon,
  LayersIcon,
  SearchIcon,
  MailIcon,
  FileTextIcon,
  ArrowLeftIcon,
} from "../icons";
import { siteData } from "../../data/content";

const iconMap = {
  Code: CodeIcon,
  Layout: LayoutIcon,
  PenTool: PenToolIcon,
  Share2: Share2Icon,
  Layers: LayersIcon,
  Search: SearchIcon,
  Mail: MailIcon,
  FileText: FileTextIcon,
};

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
};

const card = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function GridView({ items, onSelect }) {
  return (
    <motion.div
      className="page-content page-content--wide"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <motion.h2 className="page-content__heading" variants={card}>
        {siteData.services.heading}
      </motion.h2>

      <div className="services-grid">
        {items.map((item) => {
          const Icon = iconMap[item.icon];
          return (
            <motion.div
              key={item.id}
              className="service-card"
              variants={card}
              onClick={() => onSelect(item.id)}
            >
              <div className="service-card__inner">
                <div className="service-card__icon">
                  {Icon && <Icon size={28} strokeWidth={1.2} />}
                </div>
                <h3 className="service-card__title">{item.title}</h3>
                <p className="service-card__short">{item.short}</p>
                <span className="service-card__readmore">Read more</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}

function DetailView({ item, onBack }) {
  const Icon = iconMap[item.icon];
  return (
    <motion.div
      className="page-content"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <motion.button
        className="service-detail__back"
        onClick={onBack}
        variants={fadeUp}
      >
        <ArrowLeftIcon size={16} />
        All services
      </motion.button>

      <motion.div className="service-detail__header" variants={fadeUp}>
        <div className="service-detail__icon">
          {Icon && <Icon size={36} strokeWidth={1.2} />}
        </div>
        <h2 className="service-detail__title">{item.title}</h2>
      </motion.div>

      <motion.p className="service-detail__body" variants={fadeUp}>
        {item.full}
      </motion.p>
    </motion.div>
  );
}

export default function Services() {
  const { items } = siteData.services;
  const [selectedId, setSelectedId] = useState(null);

  const selected = items.find((i) => i.id === selectedId);

  return (
    <AnimatePresence mode="wait">
      {selected ? (
        <motion.div
          key="detail"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0, transition: { duration: 0.3, ease: "easeOut" } }}
          exit={{ opacity: 0, x: -20, transition: { duration: 0.2, ease: "easeIn" } }}
        >
          <DetailView
            item={selected}
            onBack={() => setSelectedId(null)}
          />
        </motion.div>
      ) : (
        <motion.div
          key="grid"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0, transition: { duration: 0.3, ease: "easeOut" } }}
          exit={{ opacity: 0, x: 20, transition: { duration: 0.2, ease: "easeIn" } }}
        >
          <GridView items={items} onSelect={setSelectedId} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
