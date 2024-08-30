import React from "react";

const FileGet = ({ onFileSelect }) => {
  const handleFileChange = (event) => {
    if (onFileSelect) {
      onFileSelect(event.target.files[0]);
    }
  };

  return (
    <div className="w-full mt-6 ">
      <label className=" form-control w-4/5 mx-auto p-4 bg-zinc-900 border-[1.6px] border-indigo-900 bg-opacity-60 backdrop-blur-2xl rounded-3xl">
        <div className="label"></div>
        <input
          type="file"
          className="file-input file-input-bordered w-full max-w-xs bg-black"
          onChange={handleFileChange}
        />
        <div className="label"></div>
      </label>
    </div>
  );
};

export default FileGet;
