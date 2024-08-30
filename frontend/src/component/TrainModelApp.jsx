import React, { useState } from "react";
import FileGet from "./FileGet";
import Range from "./Range";
import TrainButton from "./TrainButton";
import Input from "./Input";
import PredictButton from "./PredictButton";
import NextWord from "./NextWord";
import Probability from "./Probability";


const TrainModelApp = () => {
  const [file, setFile] = useState(null);
  const [rangeValue, setRangeValue] = useState(2); // Default value for range is set to 2

  const handleFileSelect = (selectedFile) => {
    setFile(selectedFile);
  };

  const handleRangeChange = (newValue) => {
    setRangeValue(newValue);
  };

  const handleSubmit = () => {
    if (!file) {
      alert("Please select a file before training the model.");
      return;
    }

    // Logic to send `file` and `rangeValue` to the backend
    console.log("Training model with file:", file);
    console.log("Range value:", rangeValue);
  };

  return (
    <div className="flex gap-6 h-full mt-9 ">
    <div className="flex flex-col gap-6 place-items-start ml-10 mt-6 w-1/3 bg-slate-900 items-center rounded-3xl">
      <FileGet onFileSelect={handleFileSelect} />
      <Range onRangeChange={handleRangeChange} />
      <TrainButton onClick={handleSubmit} />
      </div>
      <div className="w-1/4 flex flex-col items-start gap-6 bg-slate-900 p-4 rounded-3xl mt-6">
      <Input/>
      <PredictButton/>
      <NextWord/>
      </div>
      <div className="w-1/3 flex flex-col items-middle gap-6 bg-slate-900 p-4 rounded-3xl mt-6">
        <Probability/>
      </div>
    </div>
  );
};

export default TrainModelApp;
