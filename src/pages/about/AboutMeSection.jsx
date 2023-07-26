import React from "react";
import { motion } from "framer-motion";
import { slideInVariants } from "../../motion";

const AboutMeSection = () => {
  return (
    <motion.section
      variants={slideInVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      id="aboutMe"
      className="jusify-between mt-16 flex w-full flex-col bg-slate-500 p-8 text-white lg:p-20"
    >
      <div className="font-[sans]">
        <h1 className="font-test mb-4 text-center text-xl font-extrabold italic tracking-wider lg:mb-12 lg:text-7xl">
          ATSUKI KITADA
        </h1>
        <p className="text-center text-xs font-extrabold italic lg:text-xl ">
          Born in Japan, currently live in Vancouver, Canada
        </p>
      </div>
    </motion.section>
  );
};

export default AboutMeSection;
