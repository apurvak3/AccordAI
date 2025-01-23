// src/components/AgreementList.jsx
import React from "react";

const AgreementList = ({ agreements }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full border-collapse border border-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Parties</th>
            <th className="border border-gray-300 px-4 py-2">Key Dates</th>
            <th className="border border-gray-300 px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {agreements.map((agreement, index) => (
            <tr key={index}>
              <td className="border border-gray-300 px-4 py-2">{agreement.name}</td>
              <td className="border border-gray-300 px-4 py-2">{agreement.parties}</td>
              <td className="border border-gray-300 px-4 py-2">{agreement.keyDates}</td>
              <td className="border border-gray-300 px-4 py-2">{agreement.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AgreementList;
