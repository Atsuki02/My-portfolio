export const navMenuVariants = {
  hidden: {
    opacity: 0,
    x: 250,
    transition: {
      type: "tween",
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: "tween",
      duration: 0.8,
      staggerChildren: 0.2,
    },
  },
};

export const navMenuContainerVariants = {
  hidden: {
    opacity: 0,
    x: 350,
    y: -350,
    transition: {
      type: "tween",
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      type: "tween",
      duration: 0.8,
    },
  },
};

export const navMenuSelectVariants = {
  hidden: {
    opacity: 0,
  },
};

export const navIconVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    transition: {
      type: "tween",
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      duration: 0.8,
      staggerChildren: 0.3,
    },
  },
};

export const sentetnceVariants = {
  hidden: {
    opacity: [0],
  },
  show: {
    opacity: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],

    transition: {
      type: "tween",
      duration: 0.4,
      staggerChildren: 0.2,
    },
  },
};

export const bgVariants = {
  show: {
    opacity: 1,
    width: "100%",
  },
  hidden: {
    opacity: 0,
    width: 0,
    transition: {
      type: "tween",
      duration: 0.8,
    },
  },
};

export const scrollVariants = {
  state: {
    opacity: 1,
  },
  move: {
    opacity: 1,
    backGround: "#FDBA74",
    transition: {
      type: "tween",
      duration: 1,
      repeat: Infinity,
    },
    exit: {
      opacity: 1,
      duration: 2,
    },
  },
};

export const slideInVariants = {
  hidden: {
    opacity: 0,

    transition: {
      type: "tween",
    },
  },
  show: {
    opacity: 1,

    transition: {
      type: "tween",
      duration: 1.3,
      ease: "easeIn",
    },
  },
};
