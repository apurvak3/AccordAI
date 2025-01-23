// src/App.jsx
import React from "react";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/sidebar";
import Dashboard from "./Components/Dashboard";

const App = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <Dashboard />
      </div>
    </div>
  );
};

export default App;

