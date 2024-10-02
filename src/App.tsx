import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home.tsx";
import About from "./components/About.tsx";
import Contacts from "./components/Contacts.tsx";
import Car from "./components/Car.tsx";

const App: React.FC = () => {

  return (
    <BrowserRouter>
      <nav style={{marginBottom: 20}}>
        <Link className='nav-link' to="/">Home</Link>
        <Link className='nav-link' to="/about">About</Link>
        <Link className='nav-link' to="/contacts">Contacts</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/cars/:id" element={<Car />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
