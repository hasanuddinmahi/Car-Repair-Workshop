import React from "react";
import { motion } from "framer-motion";
import useMediaQuery from "@mui/material/useMediaQuery";

const AnimatedSection = ({ children, reverse = false }) => {
  const isSmallScreen = useMediaQuery("(max-width:768px)");

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        staggerDirection: reverse ? -1 : 1,
      },
    },
  };

  const childVariants = {
    hidden: {
      opacity: 0,
      y: isSmallScreen ? 0 : 20,
      scale: isSmallScreen ? 0.95 : 1,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
    >
      {React.Children.map(children, (child, index) => (
        <motion.div key={index} variants={childVariants}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default AnimatedSection;
