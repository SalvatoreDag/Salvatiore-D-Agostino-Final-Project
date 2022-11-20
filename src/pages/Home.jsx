import React from "react";
import Charts from "../components/charts/Charts";
import Hero from "../components/hero/Hero";
import How from "../components/how/How";
import Footer from "../components/footer/Footer";
import { AnimatePresence, motion } from "framer-motion";

function Home() {
  return (
    <>
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
      <Footer />
    </>
  );
}

export default Home;
