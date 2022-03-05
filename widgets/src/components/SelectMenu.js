import React from "react";

function SelectMenu() {
  return (
    <div className="flex items-center h-screen w-full bg-teal-lighter">
      <div className="w-1/2 bg-white rounded shadow-lg p-8 m-4">
        <div className="flex flex-col mb-4">
          <label htmlFor="select" className="mb-2">
            Select your color
          </label>
          <select
            name="select"
            className="appearance-none outline-none cursor-pointer bg-white bg-gradient-to-t from-red-150 to-white border-solid border-slate-50"
          >
            <option value="red">Red</option>
            <option value="green">Green</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default SelectMenu;
