import './App.css';
import Header from './components/header/Header';
import Home from './pages/Home';
import { Routes, Route, Link } from "react-router-dom";
import Render from './pages/Render';

function App() {
 return(
    <>
   <Header />
  <Routes>
   <Route path="/" element={<Home />} />
   <Route path='/render/:id' element={<Render />}/>
  </Routes>
  </>
 )
}

export default App;
