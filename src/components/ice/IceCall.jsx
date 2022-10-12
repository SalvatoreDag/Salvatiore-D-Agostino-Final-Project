import React from 'react'
import { useState, useEffect } from 'react'
import IceHero from './IceHero'

function IceCall() {

    const [input, setInput] = useState([]);

    const getData = async () => {
      try {
        const api = await fetch("https://global-warming.org/api/arctic-api");
        const res = await api.json();
        setInput(res.arcticData);
      } catch (error) {}
    };
  
    useEffect(() => {
      getData();
     }, []);
  return (
    <IceHero ice={input} />
  )
}

export default IceCall