import React from "react";
import Content from "../components/content/Content";
import DataPages from "../dataPages/DataPages";
import Chart from "../components/chart/Chart";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ClientApi from "../components/clientApi/ClientApi";
import { AnimatePresence, motion } from "framer-motion";
import Spinner from "../components/spinner/Spinner";

function Render() {
  let { id } = useParams();
  const [input, setInput] = useState([]);
  const [title, setTitle] = useState();
  const [success, setSuccess] = useState(false);

  const page = DataPages[id];

  const getData = async () => {
    try {
      const result = await ClientApi(`${id}-api`);
      setInput(
        result.result ||
          result.co2 ||
          result.methane ||
          result.nitrous ||
          result.arcticData
      );
      setTitle(id);
      setSuccess(true);
    } catch (error) {}
  };

  useEffect(() => {
    getData();
    setSuccess(false);
  }, [id]);

  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="py-10 h-max bg-bg-svg bg-repeat-round">
        <Content
          title={page.title}
          subtitle={page.subtitle}
          description={page.description}
        ></Content>
        {success ? <Chart data={input} name={title} /> : <Spinner />}
        <p className="chart-source">{page.source}</p>
      </div>
    </motion.div>
  );
}

export default Render;
