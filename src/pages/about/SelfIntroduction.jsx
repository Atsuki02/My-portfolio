import { motion } from "framer-motion";
import { slideInVariants } from "../../motion";
import Title from "../ui/Title";

function SelfIntroduction() {
  return (
    <motion.div
      variants={slideInVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="relative"
    >
      <Title messege="Some Info" title="About Me" />
      <p className="py-12 text-base font-medium leading-normal  lg:rounded-3xl lg:bg-white lg:p-14 lg:text-xl">
        I am a passionate web developer with a strong curiosity for technology
        and a keen eye for creating beautiful and functional websites. My drive
        for creativity, problem-solving, and continuous learning sets me apart.
        I am enthusiastic about contributing my skills and expertise to help
        businesses and individuals achieve their goals. Let's collaborate to
        bring your ideas to life and create exceptional web experiences that
        leave a lasting impression.
      </p>
    </motion.div>
  );
}

export default SelfIntroduction;
