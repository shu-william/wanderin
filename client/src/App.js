import './App.css';
import "./components/styles/styles.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/homepage/Home";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes className="app-routes">
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
