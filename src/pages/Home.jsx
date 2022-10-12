import React from "react";
import Charts from "../components/landingpage/Charts";
import Hero from "../components/landingpage/Hero";
import How from "../components/landingpage/How";
import { AnimatePresence, motion } from "framer-motion";

function Home() {
  return (
    <AnimatePresence>
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <Hero />
      </motion.div>
      <Charts />
      <How />
    </AnimatePresence>
  );
}

export default Home;
