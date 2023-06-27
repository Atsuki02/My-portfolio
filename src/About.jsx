import React from "react";
import { motion } from "framer-motion";
import { sentetnceVariants } from "./motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { FaAngleDown } from "react-icons/fa";
import { skills } from "./Portfolio";
import icon1 from "./images/icon1.png";
import icon2 from "./images/icon2.png";
import icon3 from "./images/icon3.png";
import icon4 from "./images/icon4.png";
import icon5 from "./images/icon5.png";
import icon6 from "./images/icon6.png";
import icon7 from "./images/icon7.png";
import icon8 from "./images/icon8.png";
import icon9 from "./images/icon9.png";
import icon10 from "./images/icon10.png";
import icon11 from "./images/icon11.png";
import icon12 from "./images/icon12.png";
import icon13 from "./images/icon13.png";
import icon14 from "./images/icon14.png";
import icon15 from "./images/icon15.png";
import icon16 from "./images/icon16.png";

function About() {
  const line1 = "WHO";
  const line2 = "AM";

  // prettier-ignore
  const icons = [icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon8, icon9, icon10, icon11, icon12, icon13, icon14, icon15, icon16];

  return (
    <div id="about" className="font-about text-black ">
      <section className="flex h-screen w-full flex-col items-center justify-start bg-white p-8 text-center text-black">
        <div className="flex h-screen flex-col items-center justify-center text-center text-xl">
          <motion.h1
            variants={sentetnceVariants}
            initial="hidden"
            animate="show"
            className="text-left text-4xl font-extrabold tracking-widest text-black drop-shadow-xl  lg:text-9xl"
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
                  className="clip bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-700 via-orange-300 to-rose-800"
                >
                  {char}
                </motion.span>
              );
            })}
            <motion.p
              variants={sentetnceVariants}
              className="clip mb-8 bg-gradient-to-r from-gray-700 via-gray-900 to-black "
            >
              I
            </motion.p>
          </motion.h1>
        </div>
        <AnchorLink href="#aboutMe">
          <div className="relative flex flex-col items-center justify-center ">
            <span className="relative h-10 w-10 rounded-[50%] bg-orange-400 lg:h-16 lg:w-16 ">
              <span className="absolute left-1 top-1 h-8 w-8 rounded-[50%] border-white bg-white lg:h-14 lg:w-14 "></span>
            </span>
            <FaAngleDown
              href="#portfolio"
              className="absolute text-xl text-orange-400"
            />
          </div>
        </AnchorLink>
      </section>
      <section
        id="aboutMe"
        className="jusify-between mt-20 flex w-full flex-col bg-orange-500 p-8  text-white lg:p-20"
      >
        <div>
          <h1 className="mb-4 text-center text-xl font-extrabold italic tracking-wider lg:mb-12 lg:text-7xl">
            ATSUKI KITADA
          </h1>
          <p className="text-center text-xs font-extrabold italic lg:text-xl ">
            Bron in Japan, currently live in Vancouver, Canada
          </p>
        </div>
      </section>
      <section className="w-full px-4 py-12 text-sm lg:px-14 lg:py-14 lg:text-lg">
        <div className="relative">
          <span className="relative block pb-2 pl-20 text-[10px] uppercase tracking-widest before:absolute before:left-0 before:top-2 before:h-[1px] before:w-12 before:bg-black lg:before:top-3">
            Some Info
          </span>
          <h1 className="text-left text-lg font-medium uppercase tracking-widest lg:pb-16 lg:text-3xl">
            About me
          </h1>
          <p className="py-12 text-base font-medium leading-normal  lg:rounded-3xl lg:bg-orange-100 lg:p-14 lg:text-xl">
            I am a passionate web developer. My journey in web development began
            with a strong curiosity for technology and a desire to create
            beautiful and functional websites. What sets me apart is my ability
            that I thrive in environments that encourage creativity,
            problem-solving, and continuous learning. I am excited to contribute
            my skills and expertise to help businesses and individuals achieve
            their goals. Let's work together to bring your ideas to life and
            create exceptional web experiences that leave a lasting impression.
          </p>
        </div>
        <div className="relative py-12 lg:py-14">
          <div className="relative block pb-2 pl-20 text-[10px] uppercase tracking-widest before:absolute before:left-0 before:top-2  before:h-[1px] before:w-12 before:bg-black lg:before:top-3">
            Check
          </div>
          <div className="text-left text-lg font-medium uppercase tracking-widest lg:pb-16 lg:text-3xl">
            My skills
          </div>
          <ul className="col-auto gap-3 py-10 text-center text-base leading-normal  lg:gap-14 lg:rounded-3xl lg:bg-orange-100 lg:p-10 lg:text-xl">
            {skills.map((skill, i) => (
              <li className="flex flex-col items-center justify-center rounded-2xl bg-orange-100 p-3 transition-all duration-300 ease-in hover:border-gray-100 hover:shadow-2xl lg:bg-white">
                <img
                  src={icons[i]}
                  alt=""
                  className="h-8 w-8 object-contain "
                />
                <p className="pt-2 text-xs font-medium">{skill.language}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

export default About;
