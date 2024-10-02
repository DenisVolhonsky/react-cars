import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home.tsx";
import About from "./components/About.tsx";
import Contacts from "./components/Contacts.tsx";
import Car from "./components/Car.tsx";
import Signup from "./components/Signup.js";
import Login from "./components/Login.js";
import ProtectedRoute from "./components/ProtectedRoute.js";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <nav style={{ marginBottom: 20 }}>
        <Link className="nav-link" to="/">
          Home
        </Link>
        <Link className="nav-link" to="/about">
          About
        </Link>
        <Link className="nav-link" to="/contacts">
          Contacts
        </Link>
      </nav>

      <Routes>
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/cars/:id" element={<Car />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
