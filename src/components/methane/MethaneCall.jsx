import React from 'react'
import MethaneHero from './MethaneHero';
import { useState, useEffect } from 'react';

function MethaneCall() {
    const [input, setInput] = useState([]);

    const getData = async () => {
      try {
        const api = await fetch("https://global-warming.org/api/methane-api");
        const res = await api.json();
        setInput(res.methane);
      } catch (error) {}
    };
  
    useEffect(() => {
      getData();
     }, []);

  return (
    <MethaneHero methane={input}/>
  )
}

export default MethaneCall