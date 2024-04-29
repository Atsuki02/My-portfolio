import { motion } from "framer-motion";
import { slideInVariants } from "../../motion";
import Title from "../ui/Title";
import { skills } from "../../portfolio";

const SkillsSection = () => {
  return (
    <motion.div
      variants={slideInVariants}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true }}
      className='relative py-12 lg:py-14'
    >
      <Title messege='Check' title='My Skills' />
      <ul className='col-auto gap-3 py-10 text-center text-base leading-normal  lg:gap-14 lg:rounded-3xl lg:bg-slate-100 lg:p-10 lg:text-xl'>
        {skills.map((skill, i) => (
          <li
            key={i}
            className='flex flex-col items-center justify-center rounded-2xl bg-white p-3 transition-all duration-300 ease-in hover:border-gray-100 hover:shadow-2xl lg:bg-white'
          >
            <img src={skill.icon} alt='' className='h-8 w-8 object-contain' />
            <p className='pt-2 text-xs font-medium'>{skill.language}</p>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default SkillsSection;
