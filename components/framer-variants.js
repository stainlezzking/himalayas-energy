export const BannerIntroVariant = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { ease: "easeOut", duration: 0.7, delay: 0.5 } },
};

export const parentStagger = (displacement = 0.1) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: displacement,
      when: "beforeChildren",
    },
  },
});
export const homeListMoveRightVariant = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { ease: "easeOut" } },
};

export const homeVisionandMissionVariant = (delay = 0) => ({
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0, transition: { ease: "easeIn", delay, transition: { when: "beforeChildren" } } },
});

export const BlogsParentVariant = (delay = 0) => ({
  hidden: { y: 100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    delay,
    transition: {
      staggerChildren: 0.2,
      when: "beforeChildren",
    },
  },
});

export const coreValues = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};
