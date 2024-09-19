import * as motion from "framer-motion/client";

const introVariant = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { ease: "easeOut", duration: 0.7, delay: 0.3 } },
};
const TitleIntro = ({ title, children }) => {
  return (
    <div initial="hidden" whilInView="visible" className="relative gap-x-6 items-center mb-[94px] overflow-hidden">
      <motion.span
        initial={{ height: 0 }}
        whileInView={{ height: "100px" }}
        viewport={{ once: true }}
        className="bg-primary block absolute top-1/2 -translate-y-1/2 w-2 h-[100px]"
      ></motion.span>
      <motion.div variants={introVariant} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-3 ps-6 w-[630px] max-w-full">
        <h4 className="text-main text-[14px]">{title}</h4>
        <h1 className="text-2xl sm:text-4xl font-bold">{children}</h1>
      </motion.div>
    </div>
  );
};

export default TitleIntro;
