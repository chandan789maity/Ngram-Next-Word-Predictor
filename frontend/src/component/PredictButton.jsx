import React from "react";

const PredictButton = () => {
  return (
    <div>
      <button className="w-28 h-10 text-white font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl shadow-lg hover:scale-105 duration-200 hover:drop-shadow-2xl hover:shadow-[#7dd3fc] hover:cursor-pointer">
        Predict
      </button>
    </div>
  );
};

export default PredictButton;
