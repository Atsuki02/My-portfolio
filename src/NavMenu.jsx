import { FaGithub } from "react-icons/fa";
import { RiTwitterLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { navIconVariants, navMenuVariants } from "./motion";

function NavMenu({ isOpenMenu, setIsOpenMenu }) {
  return (
    <div>
      <motion.ul
        variants={navMenuVariants}
        initial="hidden"
        animate="show"
        className=" fixed right-20 top-16 z-20 h-[10rem] w-[10rem] flex-col items-center justify-center text-right text-sm font-bold tracking-widest text-white sm:right-24 sm:top-14 sm:h-[20rem] sm:w-[20rem] sm:text-2xl "
      >
        <h1 className="mb-3 border-b-[1px] pb-2 text-lg sm:mb-6 sm:p-4  sm:text-4xl">
          Category
        </h1>
        <Link to="/">
          <motion.li
            variants={navMenuVariants}
            whileHover={{
              color: "#f8e112",
            }}
            className="p-2  sm:p-4"
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
            className="p-2 sm:p-4"
            onClick={() => setIsOpenMenu(!isOpenMenu)}
          >
            About
          </motion.li>
        </Link>
        <Link to="works">
          <motion.li
            variants={navMenuVariants}
            whileHover={{
              color: "#f8e112",
            }}
            className="p-2 sm:p-4"
            onClick={() => setIsOpenMenu(!isOpenMenu)}
          >
            Works
          </motion.li>
        </Link>
        <motion.div
          variants={navIconVariants}
          initial="hidden"
          animate="show"
          className="mt-6 flex justify-end sm:mr-6 sm:mt-12"
        >
          <motion.a
            variants={navIconVariants}
            href="https://github.com/Atsuki02"
            className="pr-5 text-2xl sm:text-4xl "
          >
            <FaGithub />
          </motion.a>
          <motion.a
            variants={navIconVariants}
            href="https://github.com/Atsuki02"
            className="text-2xl sm:text-4xl"
          >
            <RiTwitterLine />
          </motion.a>
        </motion.div>
      </motion.ul>
      <motion.div
        variants={navMenuVariants}
        initial="hidden"
        animate="show"
        className="fixed -right-24 -top-20 z-10 h-[25rem] w-[25rem] overflow-hidden rounded-[50%]  bg-orange-500 sm:-right-40 sm:-top-40 sm:h-[42rem] sm:w-[42rem] "
      ></motion.div>
    </div>
  );
}

export default NavMenu;
