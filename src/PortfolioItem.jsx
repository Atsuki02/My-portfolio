import React, { Fragment } from "react";
import { motion } from "framer-motion";
import { bgVariants, slideInVariants } from "./motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from "uuid";

function PortfolioItem({
  index,
  title,
  description,
  img,
  technologies,
  bgColor1,
  bgColor2,
  borderColor1,
  textColor1,
  buttonBgColor,
  borderColor2,
  bgColor3,
}) {
  return (
    <div
      className={`z-[5] flex items-center justify-center bg-slate-100 pb-16 pt-16 lg:pb-32 lg:pt-32`}
    >
      <div
        className={`relative mx-4 flex h-[410px] min-h-[350px] w-full min-w-[300px] items-end ${bgColor2} shadow-2xl lg:h-1/2 lg:min-h-[550px] lg:w-2/3 lg:min-w-[820px] lg:max-w-screen-2xl lg:items-center`}
      >
        <motion.div
          variants={slideInVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className={`absolute z-10 flex flex-col items-start justify-center  px-8 py-6 lg:-left-20 lg:min-h-[400px] lg:w-1/2 lg:min-w-[430px] lg:max-w-[350px] lg:border-4 ${borderColor1} lg:bg-slate-100 lg:shadow-2xl`}
        >
          <div className="flex items-center">
            <span className="block h-0.5 w-7 bg-slate-800"></span>
            <p className="p-2 text-lg lg:p-3 lg:text-xl">{index}</p>
          </div>
          <p className="pb-3 text-xl font-extrabold lg:pb-5 lg:text-3xl">
            {title}
          </p>
          <p className="pb-3 text-sm font-semibold  lg:pb-5 lg:text-xl">
            Technologies used:{" "}
            {technologies.map((tech, i) => (
              <Fragment key={uuidv4()}>
                <span className={`text-base ${textColor1} lg:text-lg`}>
                  {tech}
                </span>
                {i === technologies.length - 1 ? (
                  ""
                ) : (
                  <span className="text-sm text-black lg:text-sm"> , </span>
                )}
              </Fragment>
            ))}
          </p>
          <p className="text-xs tracking-tighter text-slate-700 lg:text-lg">
            {description}
          </p>
          <button
            className={`mt-6 flex items-center justify-center ${buttonBgColor} px-4 py-2 text-xs  uppercase text-white shadow-lg transition-all duration-200 hover:scale-105 lg:mt-8 lg:px-8 lg:py-4 lg:text-base`}
          >
            <span className="lg:pr-3">View Website</span>
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              className="hidden lg:block"
            />
          </button>
        </motion.div>
        <motion.div
          variants={slideInVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className={`min-w-1/2 min-h-2/3 absolute right-4 top-0 z-10 flex h-[150px] w-[220px] -rotate-6 -skew-y-6 skew-x-6 rounded-xl border-8 ${borderColor2} bg-cover bg-center shadow-2xl transition-all duration-200 hover:rotate-0 hover:skew-x-0 hover:skew-y-0  lg:-right-20 lg:top-auto lg:min-h-[200px] lg:w-1/2 lg:min-w-[350px] lg:max-w-[400px] ${img}`}
        ></motion.div>
        <motion.div
          variants={bgVariants}
          initial="show"
          whileInView="hidden"
          viewport={{ once: true }}
          className={`absolute left-0 top-0 h-full w-full ${bgColor3}`}
        ></motion.div>
      </div>
    </div>
  );
}

export default PortfolioItem;
