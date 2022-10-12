import React from "react";
import { useEffect, useState } from "react";
import TemperatureHero from "./TemperatureHero";

function TempCall() {
  const [input, setInput] = useState([]);

  const getData = async () => {
    try {
      const api = await fetch("https://global-warming.org/api/temperature-api");
      const res = await api.json();
      setInput(res.result);
    } catch (error) {}
  };

  useEffect(() => {
    getData();
   }, []);


  return (
    <>
      <TemperatureHero temperature={input} />
    </>
  );
}

export default TempCall;
