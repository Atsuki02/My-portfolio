import { motion } from "framer-motion";
import { sentetnceVariants } from "./motion";
import { useEffect } from "react";
import PreLoader from "./preLoader.jsx";

const line1 = "AM";
const line2 = "ATSUKI";

function Top({ isLoading, setIsLoading }) {
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, [setIsLoading]);

  return (
    <>
      {isLoading ? (
        <PreLoader />
      ) : (
        <section className="flex h-screen flex-col items-center justify-center p-16 text-center text-xl">
          <motion.h1
            variants={sentetnceVariants}
            initial="hidden"
            animate="show"
            className="text-left text-5xl font-extrabold tracking-widest text-black drop-shadow-xl  sm:text-9xl"
          >
            <motion.span
              variants={sentetnceVariants}
              className="clip mb-8 bg-gradient-to-r from-gray-700 via-gray-900 to-black "
            >
              I
            </motion.span>
            <br />
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
        </section>
      )}
    </>
  );
}

export default Top;
