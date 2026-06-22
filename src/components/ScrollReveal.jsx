import { motion } from "framer-motion";

/** Wraps children in a scroll-triggered fade/slide-up reveal. Respects reduced motion via Framer's defaults. */
export default function ScrollReveal({ children, delay = 0, className = "", y = 20 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  );
}
