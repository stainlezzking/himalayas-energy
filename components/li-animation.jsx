import * as motion from "framer-motion/client";
const LiAnimation = ({ children }) => {
  return (
    <motion.li
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.4 } }}
      viewport={{ once: true }}
      className="space-y-3"
    >
      {children}
    </motion.li>
  );
};

export default LiAnimation;
