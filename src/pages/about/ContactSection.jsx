import { motion } from "framer-motion";
import { slideInVariants } from "../../motion";
import { FaEnvelope, FaLinkedinIn } from "react-icons/fa";
import Title from "../ui/Title";

const ContactSection = () => {
  return (
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
  );
};

export default ContactSection;
