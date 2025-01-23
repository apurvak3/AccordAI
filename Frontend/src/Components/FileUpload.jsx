// src/components/FileUpload.jsx
import React, { useState } from "react";

const FileUpload = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (file) {
      console.log("Uploading:", file.name);
      // Integrate API call here
    } else {
      alert("Please select a file first.");
    }
  };

  return (
    <div className="border-dashed border-2 border-gray-400 p-6 rounded-lg text-center">
      <input
        type="file"
        id="fileUpload"
        onChange={handleFileChange}
        className="hidden"
      />
      <label
        htmlFor="fileUpload"
        className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Choose File
      </label>
      {file && <p className="mt-4 text-gray-600">Selected File: {file.name}</p>}
      <button
        onClick={handleUpload}
        className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Upload
      </button>
    </div>
  );
};

export default FileUpload;
