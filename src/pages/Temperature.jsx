import React from 'react'
import TempCall from '../components/temperatures/TempCall'
import { AnimatePresence, motion } from "framer-motion";


function Temperature() {
 return(
    <motion.div
    animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
  <TempCall />
  </motion.div>
 )
}

export default Temperature