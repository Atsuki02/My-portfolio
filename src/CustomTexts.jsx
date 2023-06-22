import { motion } from "framer-motion";
import { navVariants } from "./motion";

export const TypingText = ({ title, textStyles }) => (
  <motion.p
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    className={`flex h-screen w-screen items-center justify-center bg-black ${textStyles}`}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={navVariants} key={index}>
        {letter === " " ? "\u00A0" : letter}
      </motion.span>
    ))}
  </motion.p>
);
// export const TitleText = ({title, textStyles}) = (
//     <motion.p variants={}>

//     </motion.p>
// )
