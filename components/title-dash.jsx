import { cn } from "@/libs/utility";
import { motion } from "framer-motion";
import { parentStagger } from "./framer-variants";

const spanVariant = {
  hidden: { opacity: 0, width: 0 },
  visible: { opacity: 1, width: "80px" },
};
const Titledash = ({ children, span, animDelay }) => {
  return (
    <motion.div variants={parentStagger(0.4)} viewport={{ once: true, amount: 1 }} initial="hidden" whileInView="visible" className="relative">
      <motion.h2 className="text-2xl" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
        {children}
      </motion.h2>
      <div className="pt-3">
        <motion.span variants={spanVariant} className={cn("block w-[80px] h-1 bg-black ", span)}></motion.span>
      </div>
    </motion.div>
  );
};

export const SubTitleDash = ({ children, span, animDelay }) => {
  return (
    <motion.div variants={parentStagger()} viewport={{ once: true, amount: 1 }} initial="hidden" whileInView="visible" className="relative">
      <motion.h2 variants={{ hidden: { opacity: 0.2 }, visible: { opacity: 1 } }} className="font-medim">
        {children}
      </motion.h2>
      <div className="pt-[6px]">
        <motion.span
          variants={{ ...spanVariant, visible: { opacity: 1, width: "40px" } }}
          className={cn("block w-[40px] h-[2px] bg-black ", span)}
        ></motion.span>
      </div>
    </motion.div>
  );
};

export default Titledash;
