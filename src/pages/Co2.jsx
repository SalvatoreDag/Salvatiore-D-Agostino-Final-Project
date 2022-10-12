import React from "react";
import Co2Call from "../components/co2/Co2Call";
import { AnimatePresence, motion } from "framer-motion";

function Co2() {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <Co2Call />
    </motion.div>
  );
}

export default Co2;
