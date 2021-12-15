import React from "react";

const InputLabel = ({ label, type, name }) => {
  return (
    <div className="mb-2">
      <label className="">{label}</label>
      <input type={type} className="form-control" name={name} />
    </div>
  );
};

export default InputLabel;
