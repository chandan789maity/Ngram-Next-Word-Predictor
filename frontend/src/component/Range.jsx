import React, { useEffect, useState } from "react";

const Range = ({ onRangeChange }) => {
  const [value, setValue] = useState(2); // Default value is set to 2

  // Ensure the default value is sent on initial render
  useEffect(() => {
    onRangeChange(value);
  }, [value, onRangeChange]);

  const handleChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);
    onRangeChange(newValue);
  };

  return (
    <div className="w-4/5 bg-violet-700 border-[1.6px] border-indigo-900 bg-opacity-60 backdrop-blur-2xl pt-10 px-6 pb-2 rounded-3xl">
      <input
        type="range"
        min={1}
        max="5"
        value={value}
        onChange={handleChange}
        className="range range-accent"
      />
      <div className="flex w-full justify-between px-3 text-xs">
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
      </div>
      <div className="flex justify-center">
        <p className="pt-2 pb-2">Current Value: {value}</p>
      </div>
    </div>
  );
};

export default Range;
