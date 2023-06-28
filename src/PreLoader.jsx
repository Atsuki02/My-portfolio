import ClockLoader from "react-spinners/ClockLoader";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

function PreLoader() {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    const animation = animate(count, 100, { duration: 2 });
    return animation.stop;
  }, []);

  return (
    <div className="relative z-30 h-screen w-screen bg-slate-700 bg-gradient-to-r">
      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center">
        <ClockLoader color={"#f97316"} size={100} />
        <div className="flex justify-center pt-12 text-4xl font-bold tracking-widest text-slate-100">
          <motion.h1>{rounded}</motion.h1>
          <p className="">％</p>
        </div>
      </div>
    </div>
  );
}

export default PreLoader;
