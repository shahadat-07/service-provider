import React from "react";

const FirstSection = () => {
  return (
    <div className="p-4 border-2 border-black-200 bg-white mb-6">
      <h1 className="">Current Date : 12/12/21</h1>
      <div className="md:flex mt-3">
        <label className="">Order Number</label>
        <input type="text" className="border border-gray-400 ml-2" />
      </div>
      <div className="mt-2">
        {" "}
        <button className="bg-cyan-600 p-2 text-sm text-white rounded-md my-2">
          Get Order Data
        </button>
        <button className="bg-red-600 p-2 text-sm text-white rounded-md mx-2">
          Clear Data
        </button>
        <button className="bg-cyan-600 p-2 text-sm text-white rounded-md mb-2">
          Refresh Pre Loaded Data
        </button>
      </div>
      <p>Sales Order :</p>
    </div>
  );
};

export default FirstSection;
