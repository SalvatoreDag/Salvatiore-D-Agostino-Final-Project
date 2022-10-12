import React from "react";
import No2Call from "../components/no2/No2Call";
import { AnimatePresence, motion } from "framer-motion";

function No2() {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <No2Call />
    </motion.div>
  );
}

export default No2;
