import React from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { ToastOptions } from "./ToastOptions";



const TrainButton = ({ file, rangeValue }) => {
  const handleClick = () => {
    if (!file) {
      toast.error("Please select a file first." ,ToastOptions);
      return;
    }

    if (!rangeValue) {
      alert("Please set the range value.");
      return;
    }

    // Prepare the form data to send to the backend
    const formData = new FormData();
    formData.append("file", file);
    formData.append("rangeValue", rangeValue);

    // Send the form data to the backend
    fetch("/api/train-model", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Model trained successfully:", data);
      })
      .catch((error) => {
        console.error("Error training model:", error);
      });
  };

  return (
    <div className=" mb-6">
      <button
        onClick={handleClick}
        className="relative inline-flex h-12 active:scale-95 transition overflow-hidden rounded-lg p-[1px] focus:outline-none"
      >
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#e7029a_0%,#f472b6_50%,#bd5fff_100%)]"></span>
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-black px-7 text-sm font-medium text-cyan-400 backdrop-blur-3xl gap-2 undefined">
          Train Model
        </span>
      </button>

      <ToastContainer />
    </div>
  );
};

export default TrainButton;
