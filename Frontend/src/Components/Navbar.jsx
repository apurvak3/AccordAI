// src/components/Navbar.jsx
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Agreement Manager</h1>
      <div>
        <button className="mr-4 hover:underline">Dashboard</button>
        <button className="hover:underline">Profile</button>
      </div>
    </nav>
  );
};

export default Navbar;
