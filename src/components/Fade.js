import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react"
import { useInView } from "react-intersection-observer";

export default function Fade({ children, delay, duration, style }) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
    style={style}
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: duration || 0.7, delay: delay || 0, ease: "anticipate" }}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0  },
      }}
    >
      {children}
    </motion.div>
  );
}