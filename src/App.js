
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import { Routes, Route, Link } from "react-router-dom";
import Temperature from './pages/Temperature';
import Co2 from './pages/Co2';
import Methane from './pages/Methane';
import No2 from './pages/No2';
import Ice from './pages/Ice';

function App() {
 return(
    <>
   <Header />
  <Routes>
   <Route path="/" element={<Home />} />
   <Route path="temperature" element={<Temperature />} />
   <Route path="co2" element={<Co2 />} />
   <Route path="methane" element={<Methane />} />
   <Route path="no2" element={<No2 />} />
   <Route path="ice" element={<Ice />} />
  </Routes>
  </>
 )
}

export default App;
