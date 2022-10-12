import React from 'react'
import { useState, useEffect } from 'react';
import Co2Hero from './Co2Hero';

function Co2Call() {
  
    const [input, setInput] = useState([]);

    const getData = async () => {
      try {
        const api = await fetch("https://global-warming.org/api/co2-api");
        const res = await api.json();
        setInput(res.co2);
      } catch (error) {}
    };
  
    useEffect(() => {
      getData();
     }, []);
     return (
        <Co2Hero co2={input}/>
  )
}

export default Co2Call