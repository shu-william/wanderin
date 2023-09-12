import './App.css';
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/homepage/Home"

function App() {
  return (
    <div className="App">
      <Routes className="app-routes">
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
