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

export const homeVisionandMissionVariant = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0, transition: { ease: "easeIn", transition: { when: "beforeChildren" } } },
};

export const BlogsParentVariant = {
  hidden: { y: 100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      when: "beforeChildren",
    },
  },
};
