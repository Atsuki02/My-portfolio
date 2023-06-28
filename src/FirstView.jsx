import { motion } from "framer-motion";
import { sentetnceVariants } from "./motion";

function FirstView({ line1, line2, line3 }) {
  return (
    <motion.h1
      variants={sentetnceVariants}
      initial="hidden"
      animate="show"
      className="text-left font-[sans] text-5xl font-extrabold tracking-widest text-black drop-shadow-xl  sm:text-9xl"
    >
      {line1.split("").map((char, i) => {
        return (
          <motion.span
            key={i}
            variants={sentetnceVariants}
            className="clip mb-8 bg-gradient-to-r from-gray-700 via-gray-900 to-black text-center "
          >
            {char}
          </motion.span>
        );
      })}
      <br />
      {line2.split("").map((char, i) => {
        return (
          <motion.span
            key={i}
            variants={sentetnceVariants}
            className={`clip mb-8 text-center ${
              line3 === ""
                ? "bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-700 via-orange-300 to-rose-800"
                : "bg-gradient-to-r from-gray-700 via-gray-900 to-black"
            }`}
          >
            {char}
          </motion.span>
        );
      })}
      <br />
      {line3.split("").map((char, i) => {
        return (
          <motion.span
            key={i}
            variants={sentetnceVariants}
            className="clip bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-700 via-orange-300 to-rose-800"
          >
            {char}
          </motion.span>
        );
      })}
    </motion.h1>
  );
}

export default FirstView;
