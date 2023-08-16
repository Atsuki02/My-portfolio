import ClockLoader from "react-spinners/ClockLoader";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

function PreLoader() {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    const animation = animate(count, 100, { duration: 2 });
    return animation.stop;
  }, [count]);

  return (
    <div className="relative flex h-screen w-screen flex-col items-center justify-center bg-slate-700 bg-gradient-to-r font-[sans]">
      <ClockLoader color={"#f97316"} size={100} />
      <div className="flex justify-center pt-12 text-4xl font-bold tracking-widest text-slate-100">
        <motion.h1>{rounded}</motion.h1>
        <p className="">％</p>
      </div>
    </div>
  );
}

export default PreLoader;
