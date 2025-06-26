import React, { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

const AnimatedCounter = ({ targetNumber, duration = 2, suffix = "+" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  useEffect(() => {
    if (!isInView) {
      setCount(0);
      return;
    }

    const end = targetNumber;
    const startTime = performance.now();

    const step = (currentTime) => {
      const elapsed = (currentTime - startTime) / 1000; // seconds
      if (elapsed < duration) {
        const progress = elapsed / duration;
        const currentCount = Math.floor(progress * end);
        setCount(currentCount);
        requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(step);
  }, [isInView, targetNumber, duration]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

export default AnimatedCounter;
