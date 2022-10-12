import React from "react";
import IceCall from "../components/ice/IceCall";
import { AnimatePresence, motion } from "framer-motion";

function Ice() {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <IceCall />
    </motion.div>
  );
}

export default Ice;
