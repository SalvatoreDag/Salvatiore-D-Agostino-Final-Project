import React from "react";
import MethaneCall from "../components/methane/MethaneCall";
import { AnimatePresence, motion } from "framer-motion";

function Methane() {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <MethaneCall />
    </motion.div>
  );
}

export default Methane;
