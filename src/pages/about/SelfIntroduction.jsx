import { motion } from "framer-motion";
import { slideInVariants } from "../../motion";
import Title from "../ui/Title";

function SelfIntroduction() {
  return (
    <motion.div
      variants={slideInVariants}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true }}
      className='relative'
    >
      <Title message='Some Info' title='About Me' />
      <p className='py-12 text-base font-medium leading-normal  lg:rounded-3xl lg:bg-white lg:p-14 lg:text-xl'>
        Experienced and passionate Front-end developer, specialized in
        leveraging modern technologies like HTML, CSS, TypeScript, React, and
        Next.js. I focus on creating responsive and intuitive user interfaces,
        motivated by solving challenging problems and delivering impactful
        solutions. I thrive in collaborative environments, working effectively
        with diverse teams to enhance user engagement through dynamic web
        applications.
      </p>
    </motion.div>
  );
}

export default SelfIntroduction;
