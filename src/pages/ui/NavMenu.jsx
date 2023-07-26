import {
  FaEnvelope,
  FaFile,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  navIconVariants,
  navMenuVariants,
  navMenuContainerVariants,
} from "../../motion";

function NavMenu({ isOpenMenu, setIsOpenMenu }) {
  return (
    <div>
      <motion.ul
        variants={navMenuVariants}
        initial="hidden"
        animate="show"
        className="fixed right-14 top-16 z-30 h-[10rem] w-[10rem] flex-col items-center justify-center text-right text-sm font-bold tracking-widest text-white sm:right-20 sm:top-14 sm:h-[20rem] sm:w-[20rem] sm:text-2xl "
      >
        <motion.h1
          variants={navMenuVariants}
          initial="hidden"
          animate="show"
          className="mb-3 border-b-[1px] pb-2 text-xl sm:mb-6 sm:p-4 sm:text-4xl"
        >
          Category
        </motion.h1>
        <Link to="/">
          <motion.li
            variants={navMenuVariants}
            whileHover={{
              color: "#f8e112",
            }}
            className="p-2 text-base sm:p-4 sm:text-2xl"
            onClick={() => setIsOpenMenu(!isOpenMenu)}
          >
            Top
          </motion.li>
        </Link>
        <Link to="about">
          <motion.li
            variants={navMenuVariants}
            whileHover={{
              color: "#f8e112",
            }}
            className="p-2 text-base sm:p-4 sm:text-2xl"
            onClick={() => setIsOpenMenu(!isOpenMenu)}
          >
            About
          </motion.li>
        </Link>
        <Link to="work">
          <motion.li
            variants={navMenuVariants}
            whileHover={{
              color: "#f8e112",
            }}
            className="p-2 text-base sm:p-4 sm:text-2xl"
            onClick={() => setIsOpenMenu(!isOpenMenu)}
          >
            Work
          </motion.li>
        </Link>
        <motion.div
          variants={navIconVariants}
          initial="hidden"
          animate="show"
          className="mt-6 flex justify-end space-x-4 sm:mt-12 sm:space-x-5"
        >
          <motion.a
            variants={navIconVariants}
            href="https://github.com/Atsuki02"
            target="_blank"
            className="text-xl sm:text-4xl "
          >
            <FaGithub />
          </motion.a>
          <motion.a
            variants={navIconVariants}
            href="https://www.linkedin.com/in/atsuki-kitada-242573271/"
            target="_blank"
            className="text-xl sm:text-4xl"
          >
            <FaLinkedinIn />
          </motion.a>
          <motion.a
            variants={navIconVariants}
            href="https://www.instagram.com/atsuki_iii/"
            target="_blank"
            className="text-xl sm:text-4xl"
          >
            <FaInstagram />
          </motion.a>
          <motion.a
            variants={navIconVariants}
            href="mailto:canvanvam@gmail.com"
            target="_blank"
            className="text-xl sm:text-4xl"
          >
            <FaEnvelope />
          </motion.a>
          <motion.a
            variants={navIconVariants}
            href="/files/Atsuki_Resume.pdf"
            target="_blank"
            className="text-xl sm:text-4xl"
          >
            <FaFile />
          </motion.a>
        </motion.div>
      </motion.ul>
      <motion.div
        variants={navMenuContainerVariants}
        initial="hidden"
        animate="show"
        className="fixed -right-20 -top-14 z-20 h-[25rem] w-[25rem] overflow-hidden rounded-[50%]  bg-orange-500 sm:-right-40 sm:-top-40 sm:h-[42rem] sm:w-[42rem] "
      ></motion.div>
    </div>
  );
}

export default NavMenu;
