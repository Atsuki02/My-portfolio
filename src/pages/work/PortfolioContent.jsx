import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { slideInVariants } from "../../motion";
import { FaGithub } from "react-icons/fa";

function PortfolioContent({ item }) {
  const {
    index,
    title,
    description,
    technologies,
    link,
    githubLink,
    borderColor1,
    textColor1,
    buttonBgColor,
  } = item;

  return (
    <motion.div
      variants={slideInVariants}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true }}
      className={`absolute z-10 flex flex-col items-start justify-center  px-8 py-6 lg:-left-20 lg:min-h-[400px] lg:w-1/2 lg:min-w-[430px] lg:max-w-[350px] lg:border-4 ${borderColor1} lg:bg-slate-100 lg:shadow-2xl`}
    >
      <div className='flex items-center font-[sans]'>
        <span className='block h-0.5 w-7 bg-slate-800'></span>
        <p className='p-2 text-lg lg:p-3 lg:text-xl'>{index}</p>
      </div>
      <p className='pb-3 text-xl font-extrabold lg:pb-5 lg:text-3xl'>{title}</p>
      <p className='pb-3 text-sm font-semibold  lg:pb-5 lg:text-xl'>
        Technologies used:{" "}
        {technologies.map((tech, i) => (
          <span key={tech} className={`text-base ${textColor1} lg:text-lg`}>
            {tech}
            {technologies.length !== i + 1 && (
              <span className='text-sm text-black lg:text-sm'> , </span>
            )}
          </span>
        ))}
      </p>
      <p className='font-[description] text-xs tracking-tighter text-slate-700 lg:text-lg'>
        {description}
      </p>
      <div className='flex justify-between gap-4'>
        {link && (
          <button
            className={`mt-6 flex items-center justify-center ${buttonBgColor} px-4 py-2 text-xs  uppercase text-white shadow-lg transition-all duration-200 hover:scale-105 lg:mt-8 lg:px-8 lg:py-4 lg:text-base`}
            onClick={() => window.open(`${link}`, "_blank")}
          >
            <span className='lg:pr-3'>VIEW SITE</span>
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              className='pl-2 lg:pl-3'
            />
          </button>
        )}
        <button
          className={`mt-6 flex items-center justify-center ${buttonBgColor} px-4 py-2 text-xs  uppercase text-white shadow-lg transition-all duration-200 hover:scale-105 lg:mt-8 lg:px-8 lg:py-4 lg:text-base`}
          onClick={() => window.open(`${githubLink}`, "_blank")}
        >
          <span className='pr-2 lg:pr-3'>Github</span>
          <FaGithub />
        </button>
      </div>
    </motion.div>
  );
}

export default PortfolioContent;
