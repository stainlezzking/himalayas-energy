import { cn } from "@/libs/utility";
import * as motion from "framer-motion/client";

const PageNumber = ({ children, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ amount: 1, once: true }}
      transition={{ duration: 1 }}
      className={cn(
        "max-md:hidden border-b-2 border-b-black relative after:block after:absolute after:top-[8px] after:h-[10px] after:w-full after:bg-primary " + className
      )}
    >
      <h1 className="text-2xl px-1 relative z-[1]">{children}</h1>
    </motion.div>
  );
};

export default PageNumber;
