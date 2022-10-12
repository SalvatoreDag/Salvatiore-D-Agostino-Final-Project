import React from 'react'
import { useState, useEffect } from 'react'
import No2Hero from './No2Hero'


function No2Call() {

    const [input, setInput] = useState([]);

    const getData = async () => {
      try {
        const api = await fetch("https://global-warming.org/api/nitrous-oxide-api");
        const res = await api.json();
        setInput(res.nitrous);
      } catch (error) {}
    };
  
    useEffect(() => {
      getData();
     }, []);

  return (
    <No2Hero no2={input}/>
  )
}

export default No2Call