import { motion } from "framer-motion";
import { slideInVariants } from "../../motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { FaAngleDown } from "react-icons/fa";

function ScrollIcon({ scrollTo }) {
  return (
    <motion.div
      variants={slideInVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <AnchorLink href={scrollTo}>
        <div className="relative flex flex-col items-center justify-center ">
          <span className="relative h-10 w-10 rounded-[50%] bg-orange-400 lg:h-16 lg:w-16 ">
            <span className="absolute left-1 top-1 h-8 w-8 rounded-[50%] border-white bg-white lg:h-14 lg:w-14 "></span>
          </span>
          <FaAngleDown className="absolute text-xl text-orange-400" />
        </div>
      </AnchorLink>
    </motion.div>
  );
}

export default ScrollIcon;
