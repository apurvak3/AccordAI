// src/components/Sidebar.jsx
import React from "react";

const Sidebar = () => {
  return (
    <aside className="bg-gray-800 text-white w-60 min-h-screen p-6">
      <ul className="space-y-4">
        <li className="hover:text-blue-400 cursor-pointer">Dashboard</li>
        <li className="hover:text-blue-400 cursor-pointer">Upload Agreement</li>
        <li className="hover:text-blue-400 cursor-pointer">Deadlines</li>
        <li className="hover:text-blue-400 cursor-pointer">Settings</li>
      </ul>
    </aside>
  );
};

export default Sidebar;
