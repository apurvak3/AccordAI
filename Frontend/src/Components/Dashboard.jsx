// src/components/Dashboard.jsx
import React, { useState } from "react";
import AgreementList from "./AgreementList";
import FileUpload from "./FileUpload";

const Dashboard = () => {
  const [agreements, setAgreements] = useState([
    { name: "Agreement 1", parties: "Party A, Party B", keyDates: "2025-03-01", status: "Active" },
    { name: "Agreement 2", parties: "Party C, Party D", keyDates: "2025-04-15", status: "Pending" },
  ]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <FileUpload />
      <h3 className="text-xl font-semibold mt-6 mb-4">Uploaded Agreements</h3>
      <AgreementList agreements={agreements} />
    </div>
  );
};

export default Dashboard;
