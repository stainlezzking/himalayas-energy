import * as motion from "framer-motion/client";

const variants = { hidden: { opacity: 0, y: "100px" }, visible: { opacity: 1, y: 0, transition: { ease: "easeOut", duration: 0.4 } } };
const WhatWeDoSections = ({ children, title, body }) => {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="w-full max-w-[340px] mx-auto space-y-6 text-center"
    >
      <div className="mx-auto w-fit">{children}</div>
      <div className="space-y-3">
        <h4 className="uppercase px-10">{title}</h4>
        <p className="text-body1">{body}</p>
      </div>
    </motion.div>
  );
};

export default WhatWeDoSections;
