import { motion } from "framer-motion";
import { slideInVariants } from "./motion";
import { FaEnvelope, FaLinkedinIn } from "react-icons/fa";
import { skills } from "./Portfolio";
import Title from "./Title";
import Footer from "./Footer";
import ScrollIcon from "./ScrollIcon";
import FirstView from "./FirstView";
import ScrollToTop from "./ScrollToTop";

// When deploying on Netrify, these images passed by relative path didn't work, but importing this way, it's fixed.
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
  // prettier-ignore
  const icons = [icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon8, icon9, icon10, icon11, icon12, icon13, icon14, icon15, icon16];
  return (
    <>
      <ScrollToTop />
      <div id="about" className="text-black">
        <section className="flex h-screen w-full flex-col items-center justify-start bg-white p-8 text-center text-black">
          <div className="flex h-screen flex-col items-center justify-center text-center text-xl">
            <FirstView line1="WHO" line2="AM" line3="I" />
          </div>
          <ScrollIcon scrollTo="#aboutMe" />
        </section>
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
        <section className="w-full bg-slate-100 px-4 py-20 text-sm lg:px-14 lg:py-32 lg:text-lg">
          <motion.div
            variants={slideInVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative"
          >
            <Title messege="Some Info" title="About Me" />
            <p className="py-12 text-base font-medium leading-normal  lg:rounded-3xl lg:bg-white lg:p-14 lg:text-xl">
              I am a passionate web developer. My journey in web development
              began with a strong curiosity for technology and a desire to
              create beautiful and functional websites. What sets me apart is my
              ability that I thrive in environments that encourage creativity,
              problem-solving, and continuous learning. I am excited to
              contribute my skills and expertise to help businesses and
              individuals achieve their goals. Let's work together to bring your
              ideas to life and create exceptional web experiences that leave a
              lasting impression.
            </p>
          </motion.div>
          <motion.div
            variants={slideInVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative py-12 lg:py-14"
          >
            <Title messege="Check" title="My Skills" />
            <ul className="col-auto gap-3 py-10 text-center text-base leading-normal  lg:gap-14 lg:rounded-3xl lg:bg-slate-100 lg:p-10 lg:text-xl">
              {skills.map((skill, i) => (
                <li
                  key={i}
                  className="flex flex-col items-center justify-center rounded-2xl bg-white p-3 transition-all duration-300 ease-in hover:border-gray-100 hover:shadow-2xl lg:bg-white"
                >
                  <img
                    src={icons[i]}
                    alt=""
                    className="h-8 w-8 object-contain"
                  />
                  <p className="pt-2 text-xs font-medium">{skill.language}</p>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            variants={slideInVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative py-12 lg:py-14 "
          >
            <Title messege="Say hello" title="Contact" />
            <div className="lg:rounded-3xl lg:bg-white lg:p-10 lg:text-xl">
              <h1 className="p-10 text-center text-xl font-medium lg:text-left lg:text-3xl lg:font-semibold">
                Get in touch
              </h1>
              <div className="block items-center justify-around space-y-6 lg:flex lg:space-y-0 ">
                <div className="flex min-h-[280px] flex-col items-center justify-center rounded-3xl bg-white p-14  transition-all duration-300 ease-in hover:border-gray-100 hover:shadow-2xl lg:min-h-[280px] lg:min-w-[420px] lg:bg-slate-100">
                  <div className="mb-6 rounded-2xl bg-green-200 p-4 text-4xl ">
                    <FaEnvelope />
                  </div>
                  <p className="pb-4 underline decoration-black hover:text-orange-400 hover:decoration-orange-400">
                    <a href="mailto:canvanvam@gmail.com">canvanvam@gmail.com</a>
                  </p>
                  <p className="hover:text-orange-400">
                    <a href="mailto:canvanvam@gmail.com">Email Me</a>
                  </p>
                </div>
                <div className="flex min-h-[280px] flex-col items-center justify-center rounded-3xl bg-white p-14 transition-all duration-300 ease-in hover:border-gray-100 hover:shadow-2xl lg:min-h-[280px] lg:min-w-[420px] lg:bg-slate-100">
                  <div className="mb-6 rounded-2xl bg-blue-200 p-4 text-4xl ">
                    <FaLinkedinIn />
                  </div>
                  <p className="hover:text-orange-400">
                    <a href="https://www.linkedin.com/in/atsuki-kitada-242573271/">
                      Messege me
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
        <Footer />
      </div>
    </>
  );
}

export default About;
