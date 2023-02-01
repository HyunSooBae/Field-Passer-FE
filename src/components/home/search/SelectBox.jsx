import React from 'react';

const SelectBox = ({ id, names, defaultValue, size }) => {
  return (
    <select
      id={id}
      className={`bg-gray-50 border-2 border-gray-200 focus:outline-0 text-gray-900 text-sm p-2 rounded-lg focus:border-green-500 block h-10 ${size}`}
    >
      <option value='' defaultValue>
        {defaultValue}
      </option>
      {names.map((name) => (
        <option key={name} value='name'>
          {name}
        </option>
      ))}
    </select>
  );
};

export default SelectBox;
