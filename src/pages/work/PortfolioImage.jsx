import { motion } from "framer-motion";
import { bgVariants, slideInVariants } from "../../motion";

function PortfolioImage({ item }) {
  const { img, borderColor2, bgColor3 } = item;

  return (
    <>
      <motion.div
        variants={slideInVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className={`min-w-1/2 min-h-2/3 absolute right-4 top-0 z-10 flex h-[150px] w-[220px] -rotate-12 rounded-xl border-8 ${borderColor2} bg-cover bg-center shadow-2xl transition-all duration-200 hover:rotate-0 lg:-right-20 lg:top-auto lg:min-h-[200px] lg:w-1/2 lg:min-w-[350px] lg:max-w-[400px] ${img}`}
      ></motion.div>
      <motion.div
        variants={bgVariants}
        initial="show"
        whileInView="hidden"
        viewport={{ once: true }}
        className={`absolute left-0 top-0 h-full w-full ${bgColor3}`}
      ></motion.div>
    </>
  );
}

export default PortfolioImage;
