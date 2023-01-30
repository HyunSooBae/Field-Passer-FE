import React from "react";

const SelectBox = ({ id, names, defaultValue, size }) => {
  
  const renderOptions = (names) => {
    const result = [];
    names.forEach(name => {
      result.push(<option key={name} value="name">{name}</option>)
    })
    return result;
  };

  return (
    <select id={id} className={`bg-gray-50 border-2 border-gray-200 focus:outline-0 text-gray-900 text-m rounded-lg focus:border-green-500 block h-10 ${size}`}>
      <option value="" defaultValue>{defaultValue}</option>
      {renderOptions(names)}
    </select>
  )
};

export default SelectBox;
