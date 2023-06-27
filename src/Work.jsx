import PortfolioItem from "./PortfolioItem";
import { portfolioItems } from "./Portfolio";
import { FaAngleDown } from "react-icons/fa";
import { motion } from "framer-motion";
import { sentetnceVariants } from "./motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Work() {
  const line1 = "MY";
  const line2 = "PORTFOLIO";

  return (
    <div id="work" className="font-main text-black ">
      <section className="flex h-screen w-full flex-col items-center justify-start bg-white p-8 text-center text-black">
        <div className="flex h-screen flex-col items-center justify-center text-center text-xl">
          <motion.h1
            variants={sentetnceVariants}
            initial="hidden"
            animate="show"
            className="text-left text-4xl font-extrabold tracking-widest text-black drop-shadow-xl  sm:text-9xl"
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
          </motion.h1>
        </div>
        <AnchorLink href="#portfolio">
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
      <section id="portfolio">
        {portfolioItems.map((item, i) => {
          return (
            <PortfolioItem
              key={item.title}
              index={item.index}
              title={item.title}
              description={item.description}
              img={item.img}
              technologies={item.technologies}
              bgColor1={item.bgColor1}
              bgColor2={item.bgColor2}
              borderColor1={item.borderColor1}
              textColor1={item.textColor1}
              buttonBgColor={item.buttonBgColor}
              borderColor2={item.borderColor2}
              bgColor3={item.bgColor3}
            />
          );
        })}
      </section>
    </div>
  );
}

export default Work;
