import "./App.css";
import { useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./components/Home";
import Park from "./components/Park";
import Ride from "./components/Ride";
import Food from "./components/Food";

function App() {
  return (
    <div className="parks">
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/park">Park</NavLink>
        <NavLink to="/ride">Rides</NavLink>
        <NavLink to="/food">Food</NavLink>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="park" element={<Park />} />
          <Route path="ride" element={<Ride />} />
          <Route path="food" element={<Food />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
