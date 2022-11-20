import React from "react";
import Content from "../components/content/Content";
import Chart from "../components/chart/Chart";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Spinner from "../components/spinner/Spinner";
import { useLoaderData } from "react-router-dom";

function Render() {
  const [dati, name, subtitle, description, source] = useLoaderData();

  const [input, setInput] = useState([]);
  const [title, setTitle] = useState();
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setInput(
      dati.result ||
        dati.co2 ||
        dati.methane ||
        dati.nitrous ||
        dati.arcticData
    );
    setTitle(name);
    setSuccess(true);
  }, [dati]);

  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="py-10 h-max bg-bg-svg bg-repeat-round">
        <Content
          title={name}
          subtitle={subtitle}
          description={description}
        ></Content>
        {success ? <Chart data={input} name={title} /> : <Spinner />}
        <p className="chart-source">{source}</p>
      </div>
    </motion.div>
  );
}

export default Render;
